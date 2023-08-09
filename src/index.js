import './css/normalize.css'
import './css/main.css'
// SimplePeer imported in script tag
import { reactive, html, watch } from '@arrow-js/core'


function randomId () {
    const arr = new Uint8Array(20);
    window.crypto.getRandomValues(arr);
    return arr.map(v => v.toString(16).padStart(2, "0")).join('');
}

import {app} from './peerview.js'
const state = reactive({
    count: 0,
    peers: {}
});
app(state);

const myid = randomId();
let mystream;
navigator.mediaDevices.getUserMedia({
    video: { width: 300, height: 200 },
    audio: false,
})
    .then(stream => mystream = stream)
    .catch((err) => {console.log("No media", err)});


let bc;
const sendMessage = obj => bc && bc.readyState === WebSocket.OPEN && bc.send(JSON.stringify(obj));

function debounce(func, wait, immediate) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        }, wait);
        if (immediate && !timeout) func.apply(context, args);
    };
}

const connectToChannel = debounce((room) => {
    if (bc && bc.readyState !== WebSocket.CLOSED) bc.close();
    if (!room) return;
    bc = new WebSocket(`wss://clever-gecko-16.deno.dev/join?room=${room}`);
    bc.onopen = () => {
        console.log(`Websocket opened to room ${room}.`);
        sendMessage(['ping', myid, true]);
    };
    bc.onclose = () => {
        console.log(`Websocket closed to room ${room}.`);
    };
    bc.onerror = err => console.log(err);
    bc.onmessage = ev => {
        let message;
        try {
            message = JSON.parse(ev.data);
        } catch (err) {
            console.log("Could not parse message:", err);
            return;
        }
        console.log("EVENT: ", message);
        const [type, ...data] = message;
        if (type === 'ping') handlePing(data);
        if (type === 'signal') handleSignal(data);
    };
}, 500);
watch(() => connectToChannel(state.room));


function connect(to, initiator) {
    const p = new SimplePeer({
        stream: mystream,
        initiator: initiator,
        trickle: false
    });
    const peerstate = {
        i: reactive({connected: false}),
        p: p,
    }
    p.on('error', err => console.log('error', err));
    p.on('connect', () => {
        peerstate.i.connected = true
        p.send('whatever' + Math.random())
    })
    p.on('data', data => {
        console.log('data: ' + data)
    })
    p.on('signal', data => {
        sendMessage(['signal', myid, to, data]);
    });
    p.on('stream', stream => {
        const video = document.querySelector(`#video_${to}`);
        video.srcObject = stream;
        video.play()
    });
    state.peers[to] = peerstate;
}
function handlePing(data) {
    const [id, shouldAnswer] = data;
    if (state.peers[id] === undefined) {
        state.peers[id] = null;
    }
    if (shouldAnswer)
        sendMessage(['ping', myid, false]);
}
function handleSignal(_data) {
    const [from, to, data] = _data;
    if (to !== myid) return;
    if (!state.peers[from])
        connect(from, false);
    state.peers[from].p.signal(data);
}

document.addEventListener('startstream', ev => connect(ev.detail.id, true));
document.querySelector("#ping").onclick = ev => sendMessage(['ping', myid, true]);
