(()=>{"use strict";var n={556:(n,e,t)=>{t.d(e,{Z:()=>s});var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([n.id,"",""]);const s=a},837:(n,e,t)=>{t.d(e,{Z:()=>s});var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([n.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',""]);const s=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);o&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],l=o.base?c[0]+o.base:c[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var p=t(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=r(f,o);o.byIndex=s,e.splice(s,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var c=o(n,r),l=0;l<i.length;l++){var d=t(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=c}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),i=t(569),a=t.n(i),s=t(565),c=t.n(s),l=t(216),d=t.n(l),u=t(589),p=t.n(u),f=t(837),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=a().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=d(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;var h=t(556),g={};g.styleTagTransform=p(),g.setAttributes=c(),g.insert=a().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=d(),e()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;const b=new Set,v=new Set;function y(n){return"function"==typeof n&&!!n.isT}function w(n){return"object"==typeof n&&null!==n&&"$on"in n&&"function"==typeof n.$on}const x=new Map;function E(n,e){const t=Symbol();x.has(t)||x.set(t,new Map);let o=new Map;const r=function(n){return(e,t)=>{b.size||setTimeout((function n(){const o=Array.from(b);b.clear();const r=Array.from(v);v.clear(),o.forEach((n=>n(e,t))),r.forEach((n=>n())),b.size&&setTimeout(n)})),b.add(n)}}(i);function i(){x.set(t,new Map);const i=n(),a=x.get(t);return x.delete(t),o.forEach(((n,e)=>{const t=a.get(e);t&&t.forEach((e=>n.delete(e))),n.forEach((n=>e.$off(n,r)))})),a.forEach(((n,e)=>{n.forEach((n=>e.$on(n,r)))})),o=a,e?e(i):i}return function(n){return"$on"in n}(n)&&n.$on(i),i()}const S=new WeakMap,C={},k="➳❍",A="❍⇚",z=`\x3c!--${k}--\x3e`,_=`\x3c!--${A}--\x3e`;function R(n,...e){const t=[];let o="";const r=(n,e)=>{if("function"==typeof n){let o=()=>{};return t.push(Object.assign(((...e)=>n(...e)),{e:n,$on:n=>{o=n},_up:e=>{n=e,o()}})),e+z}return Array.isArray(n)?n.reduce(((n,e)=>r(e,n)),e):e+n},i=()=>(o||(o=e.length||1!==n.length||""!==n[0]?n.reduce((function(n,t,o){return n+=t,void 0!==e[o]?r(e[o],n):n}),""):"\x3c!----\x3e"),o),a=n=>{const e=$(O(i()),{i:0,e:t});return n?e(n):e()};return a.isT=!0,a._k=0,a._h=()=>[i(),t,a._k],a.key=n=>(a._k=n,a),a}function $(n,e){const t=document.createDocumentFragment();let o;for(;o=n.item(0);)8!==o.nodeType||o.nodeValue!==k?(o instanceof Element&&T(o,e),o.hasChildNodes()&&$(o.childNodes,e)(o),t.append(o),o instanceof HTMLOptionElement&&(o.selected=o.defaultSelected)):t.append(M(o,e));return n=>n?(n.appendChild(t),n):t}function T(n,e){var t;const o=[];let r,i=0;for(;r=n.attributes[i++];){if(e.i>=e.e.length)return;if(r.value!==z)continue;let a=r.name;const s=e.e[e.i++];if("@"===a.charAt(0)){const e=a.substring(1);n.addEventListener(e,s),S.has(n)||S.set(n,new Map),null===(t=S.get(n))||void 0===t||t.set(e,s),o.push(a)}else{const e="value"===a&&"value"in n||"checked"===a||a.startsWith(".")&&(a=a.substring(1));E(s,(t=>{e&&(n[a]=t,n.getAttribute(a)!=t&&(t=!1)),!1!==t?n.setAttribute(a,t):(n.removeAttribute(a),i--)}))}}o.forEach((e=>n.removeAttribute(e)))}function I(n){var e;n.remove(),null===(e=S.get(n))||void 0===e||e.forEach(((e,t)=>n.removeEventListener(t,e)))}function M(n,e){const t=document.createDocumentFragment();n.remove();const o=e.e[e.i++];if(o&&y(o.e))t.appendChild(j().add(o.e)());else{let n;t.appendChild((n=E(o,(e=>function(n,e){const t="function"==typeof e,o=t?e:j();return Array.isArray(n)?n.forEach((n=>o.add(n))):o.add(n),t&&o._up(),o}(e,n))))())}return t}function O(n){var e;const t=(null!==(e=C[n])&&void 0!==e?e:(()=>{const e=document.createElement("template");return e.innerHTML=n,C[n]=e})()).content.cloneNode(!0);return t.normalize(),t.childNodes}function j(n=Symbol()){let e="",t={i:0,e:[]},o=[],r=[];const i=new Map,a=[],s=()=>{let n;if(o.length||l(),1!==o.length||y(o[0].tpl))n=d($(O(e),t)());else{const e=o[0];e.dom.length?e.dom[0].nodeValue=e.tpl:e.dom.push(document.createTextNode(e.tpl)),n=e.dom[0]}return c(),n};s.ch=()=>r,s.l=0,s.add=n=>{if(!n&&0!==n)return s;let r,a=[],c="";y(n)&&([c,a,r]=n._h()),e+=c,e+=_;const l=r&&i.get(r),d=l||{html:c,exp:a,dom:[],tpl:n,key:r};return o.push(d),r&&(l?l.exp.forEach(((n,e)=>n._up(a[e].e))):i.set(r,d)),t.e.push(...a),s.l++,s},s._up=()=>{const e=j(n);let t=0,i=r[0].dom[0];o.length||l(document.createComment(""));const s=()=>{if(!e.l)return;const n=e(),r=n.lastChild;i[t?"after":"before"](n),u(e,o,t),i=r};o.forEach(((n,o)=>{const c=r[o];n.key&&n.dom.length?(s(),c&&c.dom===n.dom||i[o?"after":"before"](...n.dom),i=n.dom[n.dom.length-1]):c&&n.html===c.html&&!c.key?(s(),c.exp.forEach(((e,t)=>e._up(n.exp[t].e))),n.exp=c.exp,n.dom=c.dom,i=n.dom[n.dom.length-1],function(n){return 1===n.dom.length&&!y(n.tpl)}(n)&&i instanceof Text&&(i.nodeValue=n.tpl)):(c&&n.html!==c.html&&!c.key&&a.push(...c.dom),e.l||(t=o),e.add(n.tpl))})),s();let d=null==i?void 0:i.nextSibling;for(;d&&n in d;)a.push(d),d=d.nextSibling;!function(n){n.forEach(I)}(a),c()};const c=()=>{a.length=0,e="",s.l=0,t={i:0,e:[]},r=[...o],o=[]},l=n=>{e="\x3c!----\x3e",o.push({html:e,exp:[],dom:n?[n]:[],tpl:R`${e}`,key:0})},d=e=>{let t=0;const r=[];return e.childNodes.forEach((e=>{if(8===e.nodeType&&e.data===A)return t++,void r.push(e);Object.defineProperty(e,n,{value:n}),o[t].dom.push(e)})),r.forEach((n=>n.remove())),e},u=(n,e,t)=>{n.ch().forEach(((n,o)=>{e[t+o].dom=n.dom}))};return s}const F=R,N=function n(e,t={}){if(w(e)||"object"!=typeof e)return e;const o=t.o||new Map,r=t.op||new Map,i=Array.isArray(e),a=[],s=i?[]:Object.create(e,{});for(const t in e){const o=e[t];"object"==typeof o&&null!==o?(s[t]=w(o)?o:n(o),a.push(t)):s[t]=o}const c=n=>(e,t)=>{let i=o.get(e),a=r.get(t);i||(i=new Set,o.set(e,i)),a||(a=new Set,r.set(t,a)),i[n](t),a[n](e)},l=c("add"),d=c("delete"),u=(n,e,t)=>{o.has(n)&&o.get(n).forEach((n=>n(e,t)))},p={$on:l,$off:d,_em:u,_st:()=>({o,op:r,r:s,p:f._p}),_p:void 0},f=new Proxy(s,{has:(n,e)=>e in p||e in n,get(...e){const[,t]=e;if(Reflect.has(p,t))return Reflect.get(p,t);const o=Reflect.get(...e);return function(n,e){x.forEach((t=>{let o=t.get(n);o||(o=new Set,t.set(n,o)),o.add(e)}))}(f,t),i&&t in Array.prototype?function(e,t,o,r){const i=(...n)=>{const r=Array.prototype[e].call(t,...n);if(t.forEach(((n,e)=>o._em(String(e),n))),o._p){const[n,e]=o._p;e._em(n,o)}return r};switch(e){case"shift":case"pop":case"sort":case"reverse":case"copyWithin":return i;case"unshift":case"push":case"fill":return(...e)=>i(...e.map((e=>n(e))));case"splice":return(e,t,...o)=>i(e,t,...o.map((e=>n(e))));default:return r}}(t,s,f,o):o},set(...e){const[t,o,r]=e,i=Reflect.get(t,o);if(Reflect.has(p,o))return Reflect.set(p,o,r);if(r&&w(i)){const e=i,a=e._st(),s=w(r)?function(n,e){const t=e._st();return t.o&&t.o.forEach(((e,t)=>{e.forEach((e=>{n.$on(t,e)}))})),t.p&&(n._p=t.p),n}(r,e):n(r,a);return Reflect.set(t,o,s),u(o,s),a.o.forEach(((n,t)=>{const o=Reflect.get(i,t),r=Reflect.get(s,t);o!==r&&e._em(t,r,o)})),!0}const a=Reflect.set(...e);return a&&(i!==r&&u(o,r,i),f._p&&f._p[1]._em(...f._p)),a}});return t.p&&(f._p=t.p),a.map((n=>{f[n]._p=[n,f]})),f},P=E,L=N({count:0,peers:{},graph:{}}),Z=([n,e])=>F`
    <li>
      <p>
        ${()=>n} - ${()=>(n=>n?.connected?"connected":n?"waiting...":"")(e?.i)}
        ${()=>e?"":F`<button
          @click="${()=>{const e=new CustomEvent("connect",{detail:{id:n}});document.dispatchEvent(e)}}"
        >Connect</button>`}
        <button
          @click="${()=>{const e=new CustomEvent("usestream",{detail:{id:n,view:"stream1"}});document.dispatchEvent(e)}}"
        >Stream 1
        </button>
        <button
          @click="${()=>{const e=new CustomEvent("usestream",{detail:{id:n,view:"stream2"}});document.dispatchEvent(e)}}"
        >Stream 2
        </button>
        <button
          @click="${()=>{const e=new CustomEvent("usestream",{detail:{id:n,view:"stream3"}});document.dispatchEvent(e)}}"
        >Stream 3
        </button>
      </p>
    </li>
`.key(n);let W;L.myid=function(){const n=new Uint8Array(20);return window.crypto.getRandomValues(n),Array.from(n).map((n=>n.toString(16))).join("")}();const D=n=>W&&W.readyState===WebSocket.OPEN&&W.send(JSON.stringify(n)),q=function(n,e,t){let o;return function(){const e=this,t=arguments;clearTimeout(o),o=setTimeout((function(){o=null,n.apply(e,t)}),500)}}((n=>{W&&W.readyState!==WebSocket.CLOSED&&W.close(),n&&(W=new WebSocket(`wss://clever-gecko-16.deno.dev/join?room=${n}`),W.onopen=()=>{console.log(`Websocket opened to room ${n}.`),D(["ping",L.myid,!0])},W.onclose=()=>console.log(`Websocket closed to room ${n}.`),W.onerror=n=>console.log(n),W.onmessage=e=>{let t;try{t=JSON.parse(e.data)}catch(n){return void console.log("Could not parse message:",n)}console.log(`${n}: `,t),function(n){const[e,...t]=n;"ping"===e&&function(n){const[e,t]=n;void 0===L.peers[e]&&(L.peers[e]=null),t&&U(!0)}(t),"signal"===e&&function(n){const[e,t,o]=n;t===L.myid&&(L.peers[e]||H(e,{initiator:!1}),L.peers[e].p.signal(o))}(t)}(t)})}));function H(n,e){const{initiator:t,handleData:o}={initiator:!0,...e},r=new SimplePeer({stream:L.mystream,initiator:t,trickle:!1});L.peers[n]={i:N({connected:!1}),p:r,listeners:new Set},r.on("close",(()=>{L.peers[n].i.connected=!1,L.peers[n].destory(),L.peers[n]=null})),r.on("error",(n=>console.log("error",n))),r.on("connect",(()=>{L.peers[n].i.connected=!0})),r.on("data",(e=>{L.peers[n].listeners.map((n=>n(e)))})),r.on("signal",(e=>{D(["signal",L.myid,n,e])})),r.on("stream",(e=>{L.peers[n].stream=e}))}function U(n){D(["ping",L.myid,!n])}console.log(L),F`
        <p>WebRTC p2p scalable video meeting</p>
        <label for="room">Room:</label>
        <input
          id="room" name="room" type="text"
          @input="${n=>{L.room=n.target.value}}"
        >
        <button id="ping" disabled="${()=>!L.room}">Ping</button>
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
        ${()=>(n=>F`
        <ul>
            ${()=>Object.entries(n.peers).sort(((n,e)=>n>e)).map(Z)}
        </ul>
    `)(L)}
    `(document.querySelector("#app")),P((()=>q(L.room))),P((()=>console.log(L.graph))),document.addEventListener("connect",(n=>H(n.detail.id))),document.addEventListener("usestream",(n=>{const e=document.querySelector(`#${n.detail.view}`);e.parentElement.style.display="flex",e.srcObject=L.peers[n.detail.id].stream,e.play()})),document.querySelector("#ping").onclick=n=>U(),navigator.mediaDevices.getUserMedia({video:{width:300,height:200},audio:!1}).then((n=>L.mystream=n)).catch((n=>{console.log("No media",n)}))})()})();