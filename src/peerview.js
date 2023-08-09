import { reactive, html } from '@arrow-js/core'


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
              const e = new CustomEvent('startstream', {detail: {id}});
              document.dispatchEvent(e);
          }}"
        >Initiate</button>`}
      </p>
        <video
          id="video_${id}"
          width=300
          height=200
          style="${() => (
              p?.i.connected ? ''
              : 'display:none' 
          )}">
        </video>
    </li>
`.key(id)


const peerList = state => (
    html`
        <ul>
            ${() => Object.entries(state.peers).sort((a, b) => a > b).map(peerComponent)}
        </ul>
    `
);


export const app = state => (html`
    <p>WebRTC p2p scalable video meeting</p>
    <label for="room">Room:</label>
    <input
      id="room" name="room" type="text"
      @input="${e => { state.room = e.target.value }}"
    >
    <button id="ping" disabled="${() => !state.room ? true : false}">Ping</button>
    ${() => peerList(state)}
`(document.querySelector("#app")));
