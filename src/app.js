import { reactive, html } from '@arrow-js/core'


export const state = reactive({
    count: 0,
    peers: {},
    graph: {},
});


const connectState = p => (
    p?.connected ? "connected" :
    p ? "waiting..." :
    ""
);


const peerComponent = ([id, p]) => html`
    <li>
      <p>
        ${() => id} - ${() => connectState(p?.i)}
        ${() => p ? "" : html`<button
          @click="${() => {
              const e = new CustomEvent('connect', {detail: {id}});
              document.dispatchEvent(e);
          }}"
        >Connect</button>`}
        <button
          @click="${() => {
              const e = new CustomEvent('usestream', {detail: {id, view: 'stream1'}});
              document.dispatchEvent(e);
          }}"
        >Stream 1
        </button>
        <button
          @click="${() => {
              const e = new CustomEvent('usestream', {detail: {id, view: 'stream2'}});
              document.dispatchEvent(e);
          }}"
        >Stream 2
        </button>
        <button
          @click="${() => {
              const e = new CustomEvent('usestream', {detail: {id, view: 'stream3'}});
              document.dispatchEvent(e);
          }}"
        >Stream 3
        </button>
      </p>
    </li>
`.key(id);



const peerList = state => (
    html`
        <ul>
            ${() => Object.entries(state.peers).sort((a, b) => a > b).map(peerComponent)}
        </ul>
    `
);


export const app = () => {
    return html`
        <p>WebRTC p2p scalable video meeting</p>
        <label for="room">Room:</label>
        <input
          id="room" name="room" type="text"
          @input="${e => { state.room = e.target.value }}"
        >
        <button id="ping" disabled="${() => !state.room ? true : false}">Ping</button>
        <p>
          <div style="
            display: none;
            flex-direction: row;
            flex-wrap: wrap;
            height: 300px;
            width: 300px;
          ">
          <video
            id="stream1"
            width=300
            height=200
          ></video>
          <video
            id="stream2"
            width=150
            height=100
          ></video>
          <video
            id="stream3"
            width=150
            height=100
          ></video>
          </div>
        </p>
        ${() => peerList(state)}
    `(document.querySelector("#app"));
};
