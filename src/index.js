import './css/normalize.css'
import './css/main.css'
// SimplePeer imported in script tag
import { reactive, watch } from '@arrow-js/core'

import {connect, connectToRoom, ping} from './discover.js'
import {state, app} from './app.js'

console.log(state);

app();
watch(() => connectToRoom(state.room));
watch(() => console.log(state.graph));

document.addEventListener('connect', ev => connect(ev.detail.id));
document.addEventListener('usestream', ev => {
    const video = document.querySelector(`#${ev.detail.view}`);
    video.parentElement.style.display = "flex";
    video.srcObject = state.peers[ev.detail.id].stream;
    video.play()
});
document.querySelector("#ping").onclick = ev => ping();

navigator.mediaDevices.getUserMedia({
    video: { width: 300, height: 200 },
    audio: false,
})
    .then(stream => state.mystream = stream)
    .catch((err) => {console.log("No media", err)});
