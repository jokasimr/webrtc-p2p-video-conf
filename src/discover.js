import {reactive} from '@arrow-js/core'

import {debounce, randomId} from './utils.js'
import {state} from './app.js'
state.myid = randomId();


let bc;
const sendMessage = obj => bc && bc.readyState === WebSocket.OPEN && bc.send(JSON.stringify(obj));


export const connectToRoom = debounce((room) => {
    if (bc && bc.readyState !== WebSocket.CLOSED) bc.close();
    if (!room) return;
    bc = new WebSocket(`wss://clever-gecko-16.deno.dev/join?room=${room}`);
    bc.onopen = () => {
        console.log(`Websocket opened to room ${room}.`);
        sendMessage(['ping', state.myid, true]);
    };
    bc.onclose = () => console.log(`Websocket closed to room ${room}.`);
    bc.onerror = err => console.log(err);
    bc.onmessage = ev => {
        let message;
        try {
            message = JSON.parse(ev.data);
        } catch (err) {
            console.log("Could not parse message:", err);
            return;
        }
        console.log(`${room}: `, message);
        handleMessage(message);
    };
}, 500);


export function connect(to, options) {
    const {initiator, handleData} = {initiator: true, ...options};
    const p = new SimplePeer({
        stream: state.mystream,
        initiator: initiator,
        trickle: false
    });
    state.peers[to] = {
        i: reactive({connected: false}),
        p: p,
        listeners: new Set(),
    };
    p.on('close', () => {
        state.peers[to].i.connected = false;
        state.peers[to].destory();
        state.peers[to] = null;
    });
    p.on('error', err => console.log('error', err));
    p.on('connect', () => {
        state.peers[to].i.connected = true
    });
    p.on('data', data => {
        state.peers[to].listeners.map(l => l(data));
    });
    p.on('signal', data => {
        sendMessage(['signal', state.myid, to, data]);
    });
    p.on('stream', stream => {
        state.peers[to].stream = stream;
    });
}


export function ping(noanswer) {
    sendMessage(['ping', state.myid, !noanswer]);
}


function handleMessage(m) {
    const [type, ...data] = m;
    if (type === 'ping') handlePing(data);
    if (type === 'signal') handleSignal(data);
}
function handlePing(data) {
    const [id, shouldAnswer] = data;
    if (state.peers[id] === undefined) {
        state.peers[id] = null;
    }
    if (shouldAnswer) ping(true);
}
function handleSignal(data) {
    const [from, to, signal] = data;
    if (to !== state.myid) return;
    if (!state.peers[from])
        connect(from, {initiator: false});
    state.peers[from].p.signal(signal);
}
