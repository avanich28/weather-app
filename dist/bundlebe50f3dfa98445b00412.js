/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Grandstander:wght@700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, system-ui, 'Segoe UI', Roboto,
    Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol';
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

:root {
  --padding: 20px;
  --background-color: white;
  --font-color: rgb(41, 40, 40);
  --background-weather-today: #90c3d6;
  --background-color-btn-hover: rgb(247, 211, 102);
  --color-hover-github: #a52a2a;
  --background-color-weather-forecast: rgb(35, 54, 69);
  --font-color-light: white;
  --background-color-forecast-container: rgba(63, 74, 78, 0.417);
  --color-dot: rgb(52, 224, 230);
}

@keyframes moveRight {
  0% {
    transform: translateX(-20px);
    opacity: 0;
  }
  100% {
    transform: translateX(inherit);
    opacity: 1;
  }
}

@keyframes moveDown {
  0% {
    transform: translateY(-20px);
    opacity: 0;
  }
  100% {
    transform: translateY(inherit);
    opacity: 1;
  }
}

@keyframes moveUp {
  0% {
    transform: translateY(15px);
    opacity: 0;
  }
  100% {
    transform: translateY(inherit);
    opacity: 1;
  }
}

body {
  background-color: var(--background-color);
  color: var(--font-color);
  padding: var(--padding);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'header'
    'main'
    'footer';
  gap: 20px;
}

img {
  height: 100%;
}

.logo {
  grid-area: header;
  display: flex;
  align-items: center;
  font-family: 'Grandstander', cursive;
  font-size: 2rem;
  animation: moveRight 2s forwards;
}

span {
  color: rgb(12, 121, 12);
}

.weathercock {
  width: 80px;
}

.weather-detail {
  grid-area: main;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: 'section-1 section-2';
}

.weather-today {
  grid-area: section-1;
  padding: var(--padding);
  background-color: var(--background-weather-today);
  /* top-left | top-right | bottom-right | bottom-left */
  border-radius: 25px 0 0 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
  animation: moveRight 2s forwards;
}

.search-location,
.other-details {
  display: flex;
  justify-content: space-between;
}

form {
  display: flex;
}

input[type='text'],
.search-btn {
  background-color: var(--background-color);
}

input[type='text'] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 5px 7px;
  border-radius: 20px 0 0 20px;
  border: none;
}

input[type='text']:focus {
  outline: 3px solid var(--background-color-btn-hover);
}

.search-btn {
  border: none;
  border-radius: 0 20px 20px 0;
  padding-right: 10px;
  background-color: var(--background-color-btn-hover);
  transition: all 0.3s ease-in-out;
}

.search-btn:hover {
  transform: scale(1.05);
}

.search-btn:active {
  transform: scale(1);
}

.date-time {
  font-size: 0.9rem;
}

.temperature-type-btn {
  border: none;
  background-color: var(--background-color);
  padding: 5px 13px;
  border-radius: 15px;
  font-size: 1.05rem;
  transition: all 0.3s ease-in-out;
}

.temperature-type-btn:hover {
  background-color: var(--background-color-btn-hover);
  transform: scale(1.03);
}

.temperature-type-btn:active {
  transform: scale(0.95);
}

.temperature-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.temperature-detail > div:nth-of-type(1) {
  display: flex;
  gap: 5px;
  align-items: center;
  font-size: 1.6rem;
}

.temperature {
  font-size: 2rem;
  font-weight: bold;
}

.description {
  font-size: 1.2rem;
}

.highest-lowest-temperature {
  display: flex;
  gap: 13px;
  font-size: 0.9rem;
}

.other-details > div {
  padding-right: 7px;
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 0.85rem;
  min-width: max-content;
}

.other-details > div > img {
  width: 30px;
}

.other-details > div p:nth-of-type(1) {
  font-size: 1.2rem;
  margin-bottom: 5px;
}

.bi-geo-alt-fill {
  color: var(--font-color-light);
}

.weather-forecast {
  grid-area: section-2;
  background-color: var(--background-color-weather-forecast);
  border-radius: 0 25px 25px 0;
  color: var(--font-color-light);
  padding: var(--padding);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  animation: moveDown 2s forwards;
}

.weather-forecast > div > h2 {
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.hourly-container,
.daily-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--background-color-forecast-container);
  border-radius: 20px;
  padding: 13px 0;
}

.hourly-container > button,
.daily-container > button {
  font-size: 2rem;
  border: none;
  background-color: transparent;
  padding: none;
  color: var(--font-color-light);
  transition: all 0.3s ease-in-out;
}

.hourly-container > button:hover,
.daily-container > button:hover {
  transform: scale(1.2);
  color: var(--background-color-btn-hover);
}

.hourly-container > button:active,
.daily-container > button:active {
  transform: scale(1);
}

/* here */
.weather-hourly-list,
.weather-daily-list {
  display: flex;
  justify-content: space-between;
}

.hourly-item,
.daily-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

.forecast-image > iframe {
  height: 60px;
  width: 60px;
}

.dots {
  display: flex;
  justify-content: center;
}

.dots > button {
  padding: 0;
  color: var(--font-color-light);
  background-color: transparent;
  border: 0;
  height: 20px;
  width: 20px;
  transition: all 0.3s ease-in-out;
}

.dots > button:hover {
  color: var(--color-dot);
}

.bi-dot {
  position: relative;
  top: -10px;
  left: -7px;
  padding: 0;
  font-size: 30px;
}

.copyright {
  grid-area: footer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  font-size: 0.8rem;
  animation: moveUp 2s forwards;
}

.bi-github {
  font-size: 40px;
}

.copyright > a {
  color: var(--font-color);
  transition: all 0.3s ease-in-out;
}

.copyright > a:hover {
  color: var(--color-hover-github);
}

@media only screen and (max-width: 600px) {
  body {
    padding: 20px 0;
  }

  .weather-detail {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, auto);
    grid-template-areas:
      'section-1'
      'section-2';
    padding: 0;
  }

  .weather-today,
  .weather-forecast {
    border-radius: 0;
  }

  .logo,
  .weather-today {
    animation: moveDown 2s forwards;
  }

  .weather-forecast {
    animation: moveUp 2s forwards;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAGA;;;CAGC;;AAED;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAiFE,SAAS;EACT,UAAU;EACV,SAAS;EACT,eAAe;EACf,aAAa;EACb,wBAAwB;AAC1B;AACA,gDAAgD;AAChD;;;;;;;;;;;EAWE,cAAc;AAChB;AACA;EACE,cAAc;EACd,sBAAsB;EACtB;;qBAEmB;AACrB;AACA;;EAEE,gBAAgB;AAClB;AACA;;EAEE,YAAY;AACd;AACA;;;;EAIE,WAAW;EACX,aAAa;AACf;AACA;EACE,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,yBAAyB;EACzB,6BAA6B;EAC7B,mCAAmC;EACnC,gDAAgD;EAChD,6BAA6B;EAC7B,oDAAoD;EACpD,yBAAyB;EACzB,8DAA8D;EAC9D,8BAA8B;AAChC;;AAEA;EACE;IACE,4BAA4B;IAC5B,UAAU;EACZ;EACA;IACE,8BAA8B;IAC9B,UAAU;EACZ;AACF;;AAEA;EACE;IACE,4BAA4B;IAC5B,UAAU;EACZ;EACA;IACE,8BAA8B;IAC9B,UAAU;EACZ;AACF;;AAEA;EACE;IACE,2BAA2B;IAC3B,UAAU;EACZ;EACA;IACE,8BAA8B;IAC9B,UAAU;EACZ;AACF;;AAEA;EACE,yCAAyC;EACzC,wBAAwB;EACxB,uBAAuB;EACvB,aAAa;EACb,0BAA0B;EAC1B,iCAAiC;EACjC;;;YAGU;EACV,SAAS;AACX;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,oCAAoC;EACpC,eAAe;EACf,gCAAgC;AAClC;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,eAAe;EACf,eAAe;EACf,aAAa;EACb,qCAAqC;EACrC,0CAA0C;AAC5C;;AAEA;EACE,oBAAoB;EACpB,uBAAuB;EACvB,iDAAiD;EACjD,sDAAsD;EACtD,4BAA4B;EAC5B,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,SAAS;EACT,gCAAgC;AAClC;;AAEA;;EAEE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,aAAa;AACf;;AAEA;;EAEE,yCAAyC;AAC3C;;AAEA;EACE,wBAAwB;EACxB,qBAAqB;EACrB,gBAAgB;EAChB,gBAAgB;EAChB,4BAA4B;EAC5B,YAAY;AACd;;AAEA;EACE,oDAAoD;AACtD;;AAEA;EACE,YAAY;EACZ,4BAA4B;EAC5B,mBAAmB;EACnB,mDAAmD;EACnD,gCAAgC;AAClC;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,yCAAyC;EACzC,iBAAiB;EACjB,mBAAmB;EACnB,kBAAkB;EAClB,gCAAgC;AAClC;;AAEA;EACE,mDAAmD;EACnD,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,QAAQ;EACR,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,SAAS;EACT,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,oBAAoB;EACpB,0DAA0D;EAC1D,4BAA4B;EAC5B,8BAA8B;EAC9B,uBAAuB;EACvB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,SAAS;EACT,+BAA+B;AACjC;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;;EAEE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,4DAA4D;EAC5D,mBAAmB;EACnB,eAAe;AACjB;;AAEA;;EAEE,eAAe;EACf,YAAY;EACZ,6BAA6B;EAC7B,aAAa;EACb,8BAA8B;EAC9B,gCAAgC;AAClC;;AAEA;;EAEE,qBAAqB;EACrB,wCAAwC;AAC1C;;AAEA;;EAEE,mBAAmB;AACrB;;AAEA,SAAS;AACT;;EAEE,aAAa;EACb,8BAA8B;AAChC;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,UAAU;EACV,8BAA8B;EAC9B,6BAA6B;EAC7B,SAAS;EACT,YAAY;EACZ,WAAW;EACX,gCAAgC;AAClC;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,UAAU;EACV,UAAU;EACV,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,QAAQ;EACR,iBAAiB;EACjB,6BAA6B;AAC/B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,wBAAwB;EACxB,gCAAgC;AAClC;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE;IACE,eAAe;EACjB;;EAEA;IACE,0BAA0B;IAC1B,mCAAmC;IACnC;;iBAEa;IACb,UAAU;EACZ;;EAEA;;IAEE,gBAAgB;EAClB;;EAEA;;IAEE,+BAA+B;EACjC;;EAEA;IACE,6BAA6B;EAC/B;AACF","sourcesContent":["@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css');\n@import url('https://fonts.googleapis.com/css2?family=Grandstander:wght@700&display=swap');\n\n/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n  box-sizing: border-box;\n  font-family: -apple-system, BlinkMacSystemFont, system-ui, 'Segoe UI', Roboto,\n    Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',\n    'Segoe UI Symbol';\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n:root {\n  --padding: 20px;\n  --background-color: white;\n  --font-color: rgb(41, 40, 40);\n  --background-weather-today: #90c3d6;\n  --background-color-btn-hover: rgb(247, 211, 102);\n  --color-hover-github: #a52a2a;\n  --background-color-weather-forecast: rgb(35, 54, 69);\n  --font-color-light: white;\n  --background-color-forecast-container: rgba(63, 74, 78, 0.417);\n  --color-dot: rgb(52, 224, 230);\n}\n\n@keyframes moveRight {\n  0% {\n    transform: translateX(-20px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(inherit);\n    opacity: 1;\n  }\n}\n\n@keyframes moveDown {\n  0% {\n    transform: translateY(-20px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(inherit);\n    opacity: 1;\n  }\n}\n\n@keyframes moveUp {\n  0% {\n    transform: translateY(15px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(inherit);\n    opacity: 1;\n  }\n}\n\nbody {\n  background-color: var(--background-color);\n  color: var(--font-color);\n  padding: var(--padding);\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto 1fr auto;\n  grid-template-areas:\n    'header'\n    'main'\n    'footer';\n  gap: 20px;\n}\n\nimg {\n  height: 100%;\n}\n\n.logo {\n  grid-area: header;\n  display: flex;\n  align-items: center;\n  font-family: 'Grandstander', cursive;\n  font-size: 2rem;\n  animation: moveRight 2s forwards;\n}\n\nspan {\n  color: rgb(12, 121, 12);\n}\n\n.weathercock {\n  width: 80px;\n}\n\n.weather-detail {\n  grid-area: main;\n  padding: 0 20px;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-areas: 'section-1 section-2';\n}\n\n.weather-today {\n  grid-area: section-1;\n  padding: var(--padding);\n  background-color: var(--background-weather-today);\n  /* top-left | top-right | bottom-right | bottom-left */\n  border-radius: 25px 0 0 25px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 30px;\n  animation: moveRight 2s forwards;\n}\n\n.search-location,\n.other-details {\n  display: flex;\n  justify-content: space-between;\n}\n\nform {\n  display: flex;\n}\n\ninput[type='text'],\n.search-btn {\n  background-color: var(--background-color);\n}\n\ninput[type='text'] {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  padding: 5px 7px;\n  border-radius: 20px 0 0 20px;\n  border: none;\n}\n\ninput[type='text']:focus {\n  outline: 3px solid var(--background-color-btn-hover);\n}\n\n.search-btn {\n  border: none;\n  border-radius: 0 20px 20px 0;\n  padding-right: 10px;\n  background-color: var(--background-color-btn-hover);\n  transition: all 0.3s ease-in-out;\n}\n\n.search-btn:hover {\n  transform: scale(1.05);\n}\n\n.search-btn:active {\n  transform: scale(1);\n}\n\n.date-time {\n  font-size: 0.9rem;\n}\n\n.temperature-type-btn {\n  border: none;\n  background-color: var(--background-color);\n  padding: 5px 13px;\n  border-radius: 15px;\n  font-size: 1.05rem;\n  transition: all 0.3s ease-in-out;\n}\n\n.temperature-type-btn:hover {\n  background-color: var(--background-color-btn-hover);\n  transform: scale(1.03);\n}\n\n.temperature-type-btn:active {\n  transform: scale(0.95);\n}\n\n.temperature-detail {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n}\n\n.temperature-detail > div:nth-of-type(1) {\n  display: flex;\n  gap: 5px;\n  align-items: center;\n  font-size: 1.6rem;\n}\n\n.temperature {\n  font-size: 2rem;\n  font-weight: bold;\n}\n\n.description {\n  font-size: 1.2rem;\n}\n\n.highest-lowest-temperature {\n  display: flex;\n  gap: 13px;\n  font-size: 0.9rem;\n}\n\n.other-details > div {\n  padding-right: 7px;\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  font-size: 0.85rem;\n  min-width: max-content;\n}\n\n.other-details > div > img {\n  width: 30px;\n}\n\n.other-details > div p:nth-of-type(1) {\n  font-size: 1.2rem;\n  margin-bottom: 5px;\n}\n\n.bi-geo-alt-fill {\n  color: var(--font-color-light);\n}\n\n.weather-forecast {\n  grid-area: section-2;\n  background-color: var(--background-color-weather-forecast);\n  border-radius: 0 25px 25px 0;\n  color: var(--font-color-light);\n  padding: var(--padding);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 40px;\n  animation: moveDown 2s forwards;\n}\n\n.weather-forecast > div > h2 {\n  font-size: 1.3rem;\n  font-weight: bold;\n  margin-bottom: 20px;\n}\n\n.hourly-container,\n.daily-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: var(--background-color-forecast-container);\n  border-radius: 20px;\n  padding: 13px 0;\n}\n\n.hourly-container > button,\n.daily-container > button {\n  font-size: 2rem;\n  border: none;\n  background-color: transparent;\n  padding: none;\n  color: var(--font-color-light);\n  transition: all 0.3s ease-in-out;\n}\n\n.hourly-container > button:hover,\n.daily-container > button:hover {\n  transform: scale(1.2);\n  color: var(--background-color-btn-hover);\n}\n\n.hourly-container > button:active,\n.daily-container > button:active {\n  transform: scale(1);\n}\n\n/* here */\n.weather-hourly-list,\n.weather-daily-list {\n  display: flex;\n  justify-content: space-between;\n}\n\n.hourly-item,\n.daily-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n}\n\n.forecast-image > iframe {\n  height: 60px;\n  width: 60px;\n}\n\n.dots {\n  display: flex;\n  justify-content: center;\n}\n\n.dots > button {\n  padding: 0;\n  color: var(--font-color-light);\n  background-color: transparent;\n  border: 0;\n  height: 20px;\n  width: 20px;\n  transition: all 0.3s ease-in-out;\n}\n\n.dots > button:hover {\n  color: var(--color-dot);\n}\n\n.bi-dot {\n  position: relative;\n  top: -10px;\n  left: -7px;\n  padding: 0;\n  font-size: 30px;\n}\n\n.copyright {\n  grid-area: footer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  font-size: 0.8rem;\n  animation: moveUp 2s forwards;\n}\n\n.bi-github {\n  font-size: 40px;\n}\n\n.copyright > a {\n  color: var(--font-color);\n  transition: all 0.3s ease-in-out;\n}\n\n.copyright > a:hover {\n  color: var(--color-hover-github);\n}\n\n@media only screen and (max-width: 600px) {\n  body {\n    padding: 20px 0;\n  }\n\n  .weather-detail {\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(2, auto);\n    grid-template-areas:\n      'section-1'\n      'section-2';\n    padding: 0;\n  }\n\n  .weather-today,\n  .weather-forecast {\n    border-radius: 0;\n  }\n\n  .logo,\n  .weather-today {\n    animation: moveDown 2s forwards;\n  }\n\n  .weather-forecast {\n    animation: moveUp 2s forwards;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlYmU1MGYzZGZhOTg0NDViMDA0MTIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRixtSUFBbUk7QUFDbkksbUlBQW1JO0FBQ25JO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGtGQUFrRixNQUFNLHFGQUFxRixXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLFlBQVksZ0JBQWdCLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLE9BQU8sTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFVBQVUsS0FBSyxRQUFRLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLEtBQUssTUFBTSxLQUFLLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsS0FBSyxNQUFNLEtBQUssS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxRQUFRLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZ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QUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDYkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcC1pY29uc0AxLjMuMC9mb250L2Jvb3RzdHJhcC1pY29ucy5jc3MpO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1HcmFuZHN0YW5kZXI6d2dodEA3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcbiAgIHYyLjAgfCAyMDExMDEyNlxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcbiovXG5cbmh0bWwsXG5ib2R5LFxuZGl2LFxuc3BhbixcbmFwcGxldCxcbm9iamVjdCxcbmlmcmFtZSxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbnAsXG5ibG9ja3F1b3RlLFxucHJlLFxuYSxcbmFiYnIsXG5hY3JvbnltLFxuYWRkcmVzcyxcbmJpZyxcbmNpdGUsXG5jb2RlLFxuZGVsLFxuZGZuLFxuZW0sXG5pbWcsXG5pbnMsXG5rYmQsXG5xLFxucyxcbnNhbXAsXG5zbWFsbCxcbnN0cmlrZSxcbnN0cm9uZyxcbnN1YixcbnN1cCxcbnR0LFxudmFyLFxuYixcbnUsXG5pLFxuY2VudGVyLFxuZGwsXG5kdCxcbmRkLFxub2wsXG51bCxcbmxpLFxuZmllbGRzZXQsXG5mb3JtLFxubGFiZWwsXG5sZWdlbmQsXG50YWJsZSxcbmNhcHRpb24sXG50Ym9keSxcbnRmb290LFxudGhlYWQsXG50cixcbnRoLFxudGQsXG5hcnRpY2xlLFxuYXNpZGUsXG5jYW52YXMsXG5kZXRhaWxzLFxuZW1iZWQsXG5maWd1cmUsXG5maWdjYXB0aW9uLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbm91dHB1dCxcbnJ1YnksXG5zZWN0aW9uLFxuc3VtbWFyeSxcbnRpbWUsXG5tYXJrLFxuYXVkaW8sXG52aWRlbyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsXG5hc2lkZSxcbmRldGFpbHMsXG5maWdjYXB0aW9uLFxuZmlndXJlLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbnNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmJvZHkge1xuICBsaW5lLWhlaWdodDogMTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgc3lzdGVtLXVpLCAnU2Vnb2UgVUknLCBSb2JvdG8sXG4gICAgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgJ0FwcGxlIENvbG9yIEVtb2ppJywgJ1NlZ29lIFVJIEVtb2ppJyxcbiAgICAnU2Vnb2UgVUkgU3ltYm9sJztcbn1cbm9sLFxudWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuYmxvY2txdW90ZSxcbnEge1xuICBxdW90ZXM6IG5vbmU7XG59XG5ibG9ja3F1b3RlOmJlZm9yZSxcbmJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSxcbnE6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgY29udGVudDogbm9uZTtcbn1cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbjpyb290IHtcbiAgLS1wYWRkaW5nOiAyMHB4O1xuICAtLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAtLWZvbnQtY29sb3I6IHJnYig0MSwgNDAsIDQwKTtcbiAgLS1iYWNrZ3JvdW5kLXdlYXRoZXItdG9kYXk6ICM5MGMzZDY7XG4gIC0tYmFja2dyb3VuZC1jb2xvci1idG4taG92ZXI6IHJnYigyNDcsIDIxMSwgMTAyKTtcbiAgLS1jb2xvci1ob3Zlci1naXRodWI6ICNhNTJhMmE7XG4gIC0tYmFja2dyb3VuZC1jb2xvci13ZWF0aGVyLWZvcmVjYXN0OiByZ2IoMzUsIDU0LCA2OSk7XG4gIC0tZm9udC1jb2xvci1saWdodDogd2hpdGU7XG4gIC0tYmFja2dyb3VuZC1jb2xvci1mb3JlY2FzdC1jb250YWluZXI6IHJnYmEoNjMsIDc0LCA3OCwgMC40MTcpO1xuICAtLWNvbG9yLWRvdDogcmdiKDUyLCAyMjQsIDIzMCk7XG59XG5cbkBrZXlmcmFtZXMgbW92ZVJpZ2h0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoaW5oZXJpdCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIG1vdmVEb3duIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoaW5oZXJpdCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIG1vdmVVcCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTVweCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoaW5oZXJpdCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZyk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgJ2hlYWRlcidcbiAgICAnbWFpbidcbiAgICAnZm9vdGVyJztcbiAgZ2FwOiAyMHB4O1xufVxuXG5pbWcge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5sb2dvIHtcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiAnR3JhbmRzdGFuZGVyJywgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBhbmltYXRpb246IG1vdmVSaWdodCAycyBmb3J3YXJkcztcbn1cblxuc3BhbiB7XG4gIGNvbG9yOiByZ2IoMTIsIDEyMSwgMTIpO1xufVxuXG4ud2VhdGhlcmNvY2sge1xuICB3aWR0aDogODBweDtcbn1cblxuLndlYXRoZXItZGV0YWlsIHtcbiAgZ3JpZC1hcmVhOiBtYWluO1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdzZWN0aW9uLTEgc2VjdGlvbi0yJztcbn1cblxuLndlYXRoZXItdG9kYXkge1xuICBncmlkLWFyZWE6IHNlY3Rpb24tMTtcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtd2VhdGhlci10b2RheSk7XG4gIC8qIHRvcC1sZWZ0IHwgdG9wLXJpZ2h0IHwgYm90dG9tLXJpZ2h0IHwgYm90dG9tLWxlZnQgKi9cbiAgYm9yZGVyLXJhZGl1czogMjVweCAwIDAgMjVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDMwcHg7XG4gIGFuaW1hdGlvbjogbW92ZVJpZ2h0IDJzIGZvcndhcmRzO1xufVxuXG4uc2VhcmNoLWxvY2F0aW9uLFxuLm90aGVyLWRldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG5pbnB1dFt0eXBlPSd0ZXh0J10sXG4uc2VhcmNoLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xufVxuXG5pbnB1dFt0eXBlPSd0ZXh0J10ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgcGFkZGluZzogNXB4IDdweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweCAwIDAgMjBweDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5pbnB1dFt0eXBlPSd0ZXh0J106Zm9jdXMge1xuICBvdXRsaW5lOiAzcHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1jb2xvci1idG4taG92ZXIpO1xufVxuXG4uc2VhcmNoLWJ0biB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMCAyMHB4IDIwcHggMDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1idG4taG92ZXIpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLnNlYXJjaC1idG46aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xufVxuXG4uc2VhcmNoLWJ0bjphY3RpdmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4uZGF0ZS10aW1lIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi50ZW1wZXJhdHVyZS10eXBlLWJ0biB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XG4gIHBhZGRpbmc6IDVweCAxM3B4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBmb250LXNpemU6IDEuMDVyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4udGVtcGVyYXR1cmUtdHlwZS1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLWJ0bi1ob3Zlcik7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7XG59XG5cbi50ZW1wZXJhdHVyZS10eXBlLWJ0bjphY3RpdmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xufVxuXG4udGVtcGVyYXR1cmUtZGV0YWlsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4udGVtcGVyYXR1cmUtZGV0YWlsID4gZGl2Om50aC1vZi10eXBlKDEpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA1cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xufVxuXG4udGVtcGVyYXR1cmUge1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLmhpZ2hlc3QtbG93ZXN0LXRlbXBlcmF0dXJlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxM3B4O1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxuLm90aGVyLWRldGFpbHMgPiBkaXYge1xuICBwYWRkaW5nLXJpZ2h0OiA3cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogN3B4O1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XG59XG5cbi5vdGhlci1kZXRhaWxzID4gZGl2ID4gaW1nIHtcbiAgd2lkdGg6IDMwcHg7XG59XG5cbi5vdGhlci1kZXRhaWxzID4gZGl2IHA6bnRoLW9mLXR5cGUoMSkge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uYmktZ2VvLWFsdC1maWxsIHtcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3ItbGlnaHQpO1xufVxuXG4ud2VhdGhlci1mb3JlY2FzdCB7XG4gIGdyaWQtYXJlYTogc2VjdGlvbi0yO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLXdlYXRoZXItZm9yZWNhc3QpO1xuICBib3JkZXItcmFkaXVzOiAwIDI1cHggMjVweCAwO1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1saWdodCk7XG4gIHBhZGRpbmc6IHZhcigtLXBhZGRpbmcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiA0MHB4O1xuICBhbmltYXRpb246IG1vdmVEb3duIDJzIGZvcndhcmRzO1xufVxuXG4ud2VhdGhlci1mb3JlY2FzdCA+IGRpdiA+IGgyIHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uaG91cmx5LWNvbnRhaW5lcixcbi5kYWlseS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItZm9yZWNhc3QtY29udGFpbmVyKTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogMTNweCAwO1xufVxuXG4uaG91cmx5LWNvbnRhaW5lciA+IGJ1dHRvbixcbi5kYWlseS1jb250YWluZXIgPiBidXR0b24ge1xuICBmb250LXNpemU6IDJyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLWxpZ2h0KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbi5ob3VybHktY29udGFpbmVyID4gYnV0dG9uOmhvdmVyLFxuLmRhaWx5LWNvbnRhaW5lciA+IGJ1dHRvbjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItYnRuLWhvdmVyKTtcbn1cblxuLmhvdXJseS1jb250YWluZXIgPiBidXR0b246YWN0aXZlLFxuLmRhaWx5LWNvbnRhaW5lciA+IGJ1dHRvbjphY3RpdmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4vKiBoZXJlICovXG4ud2VhdGhlci1ob3VybHktbGlzdCxcbi53ZWF0aGVyLWRhaWx5LWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5ob3VybHktaXRlbSxcbi5kYWlseS1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA1cHg7XG59XG5cbi5mb3JlY2FzdC1pbWFnZSA+IGlmcmFtZSB7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG59XG5cbi5kb3RzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5kb3RzID4gYnV0dG9uIHtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3ItbGlnaHQpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLmRvdHMgPiBidXR0b246aG92ZXIge1xuICBjb2xvcjogdmFyKC0tY29sb3ItZG90KTtcbn1cblxuLmJpLWRvdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMTBweDtcbiAgbGVmdDogLTdweDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4uY29weXJpZ2h0IHtcbiAgZ3JpZC1hcmVhOiBmb290ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgYW5pbWF0aW9uOiBtb3ZlVXAgMnMgZm9yd2FyZHM7XG59XG5cbi5iaS1naXRodWIge1xuICBmb250LXNpemU6IDQwcHg7XG59XG5cbi5jb3B5cmlnaHQgPiBhIHtcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLmNvcHlyaWdodCA+IGE6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tY29sb3ItaG92ZXItZ2l0aHViKTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICBib2R5IHtcbiAgICBwYWRkaW5nOiAyMHB4IDA7XG4gIH1cblxuICAud2VhdGhlci1kZXRhaWwge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIGF1dG8pO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAnc2VjdGlvbi0xJ1xuICAgICAgJ3NlY3Rpb24tMic7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIC53ZWF0aGVyLXRvZGF5LFxuICAud2VhdGhlci1mb3JlY2FzdCB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxuXG4gIC5sb2dvLFxuICAud2VhdGhlci10b2RheSB7XG4gICAgYW5pbWF0aW9uOiBtb3ZlRG93biAycyBmb3J3YXJkcztcbiAgfVxuXG4gIC53ZWF0aGVyLWZvcmVjYXN0IHtcbiAgICBhbmltYXRpb246IG1vdmVVcCAycyBmb3J3YXJkcztcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBOzs7Q0FHQzs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsVUFBVTtFQUNWLFVBQVU7RUFDVixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUixpQkFBaUI7RUFDakIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSwwQkFBMEI7SUFDMUIsbUNBQW1DO0lBQ25DOztpQkFFYTtJQUNiLFVBQVU7RUFDWjs7RUFFQTs7SUFFRSxnQkFBZ0I7RUFDbEI7O0VBRUE7O0lBRUUsK0JBQStCO0VBQ2pDOztFQUVBO0lBQ0UsNkJBQTZCO0VBQy9CO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYm9vdHN0cmFwLWljb25zQDEuMy4wL2ZvbnQvYm9vdHN0cmFwLWljb25zLmNzcycpO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUdyYW5kc3RhbmRlcjp3Z2h0QDcwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG4vKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBzeXN0ZW0tdWksICdTZWdvZSBVSScsIFJvYm90byxcXG4gICAgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgJ0FwcGxlIENvbG9yIEVtb2ppJywgJ1NlZ29lIFVJIEVtb2ppJyxcXG4gICAgJ1NlZ29lIFVJIFN5bWJvbCc7XFxufVxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcbmJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1wYWRkaW5nOiAyMHB4O1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIC0tZm9udC1jb2xvcjogcmdiKDQxLCA0MCwgNDApO1xcbiAgLS1iYWNrZ3JvdW5kLXdlYXRoZXItdG9kYXk6ICM5MGMzZDY7XFxuICAtLWJhY2tncm91bmQtY29sb3ItYnRuLWhvdmVyOiByZ2IoMjQ3LCAyMTEsIDEwMik7XFxuICAtLWNvbG9yLWhvdmVyLWdpdGh1YjogI2E1MmEyYTtcXG4gIC0tYmFja2dyb3VuZC1jb2xvci13ZWF0aGVyLWZvcmVjYXN0OiByZ2IoMzUsIDU0LCA2OSk7XFxuICAtLWZvbnQtY29sb3ItbGlnaHQ6IHdoaXRlO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yLWZvcmVjYXN0LWNvbnRhaW5lcjogcmdiYSg2MywgNzQsIDc4LCAwLjQxNyk7XFxuICAtLWNvbG9yLWRvdDogcmdiKDUyLCAyMjQsIDIzMCk7XFxufVxcblxcbkBrZXlmcmFtZXMgbW92ZVJpZ2h0IHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoaW5oZXJpdCk7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgbW92ZURvd24ge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWShpbmhlcml0KTtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBtb3ZlVXAge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTVweCk7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKGluaGVyaXQpO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZyk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAnaGVhZGVyJ1xcbiAgICAnbWFpbidcXG4gICAgJ2Zvb3Rlcic7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbmltZyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5sb2dvIHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogJ0dyYW5kc3RhbmRlcicsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBhbmltYXRpb246IG1vdmVSaWdodCAycyBmb3J3YXJkcztcXG59XFxuXFxuc3BhbiB7XFxuICBjb2xvcjogcmdiKDEyLCAxMjEsIDEyKTtcXG59XFxuXFxuLndlYXRoZXJjb2NrIHtcXG4gIHdpZHRoOiA4MHB4O1xcbn1cXG5cXG4ud2VhdGhlci1kZXRhaWwge1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgcGFkZGluZzogMCAyMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnc2VjdGlvbi0xIHNlY3Rpb24tMic7XFxufVxcblxcbi53ZWF0aGVyLXRvZGF5IHtcXG4gIGdyaWQtYXJlYTogc2VjdGlvbi0xO1xcbiAgcGFkZGluZzogdmFyKC0tcGFkZGluZyk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXdlYXRoZXItdG9kYXkpO1xcbiAgLyogdG9wLWxlZnQgfCB0b3AtcmlnaHQgfCBib3R0b20tcmlnaHQgfCBib3R0b20tbGVmdCAqL1xcbiAgYm9yZGVyLXJhZGl1czogMjVweCAwIDAgMjVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZ2FwOiAzMHB4O1xcbiAgYW5pbWF0aW9uOiBtb3ZlUmlnaHQgMnMgZm9yd2FyZHM7XFxufVxcblxcbi5zZWFyY2gtbG9jYXRpb24sXFxuLm90aGVyLWRldGFpbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPSd0ZXh0J10sXFxuLnNlYXJjaC1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxufVxcblxcbmlucHV0W3R5cGU9J3RleHQnXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgcGFkZGluZzogNXB4IDdweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMCAwIDIwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbmlucHV0W3R5cGU9J3RleHQnXTpmb2N1cyB7XFxuICBvdXRsaW5lOiAzcHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1jb2xvci1idG4taG92ZXIpO1xcbn1cXG5cXG4uc2VhcmNoLWJ0biB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwIDIwcHggMjBweCAwO1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3ItYnRuLWhvdmVyKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uc2VhcmNoLWJ0bjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4uc2VhcmNoLWJ0bjphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuLmRhdGUtdGltZSB7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuLnRlbXBlcmF0dXJlLXR5cGUtYnRuIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgcGFkZGluZzogNXB4IDEzcHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgZm9udC1zaXplOiAxLjA1cmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi50ZW1wZXJhdHVyZS10eXBlLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLWJ0bi1ob3Zlcik7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xcbn1cXG5cXG4udGVtcGVyYXR1cmUtdHlwZS1idG46YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxufVxcblxcbi50ZW1wZXJhdHVyZS1kZXRhaWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4udGVtcGVyYXR1cmUtZGV0YWlsID4gZGl2Om50aC1vZi10eXBlKDEpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDVweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG59XFxuXFxuLnRlbXBlcmF0dXJlIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5oaWdoZXN0LWxvd2VzdC10ZW1wZXJhdHVyZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxM3B4O1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbi5vdGhlci1kZXRhaWxzID4gZGl2IHtcXG4gIHBhZGRpbmctcmlnaHQ6IDdweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA3cHg7XFxuICBmb250LXNpemU6IDAuODVyZW07XFxuICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xcbn1cXG5cXG4ub3RoZXItZGV0YWlscyA+IGRpdiA+IGltZyB7XFxuICB3aWR0aDogMzBweDtcXG59XFxuXFxuLm90aGVyLWRldGFpbHMgPiBkaXYgcDpudGgtb2YtdHlwZSgxKSB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLmJpLWdlby1hbHQtZmlsbCB7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1saWdodCk7XFxufVxcblxcbi53ZWF0aGVyLWZvcmVjYXN0IHtcXG4gIGdyaWQtYXJlYTogc2VjdGlvbi0yO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci13ZWF0aGVyLWZvcmVjYXN0KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMjVweCAyNXB4IDA7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1saWdodCk7XFxuICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDQwcHg7XFxuICBhbmltYXRpb246IG1vdmVEb3duIDJzIGZvcndhcmRzO1xcbn1cXG5cXG4ud2VhdGhlci1mb3JlY2FzdCA+IGRpdiA+IGgyIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4uaG91cmx5LWNvbnRhaW5lcixcXG4uZGFpbHktY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1mb3JlY2FzdC1jb250YWluZXIpO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIHBhZGRpbmc6IDEzcHggMDtcXG59XFxuXFxuLmhvdXJseS1jb250YWluZXIgPiBidXR0b24sXFxuLmRhaWx5LWNvbnRhaW5lciA+IGJ1dHRvbiB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHBhZGRpbmc6IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvci1saWdodCk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmhvdXJseS1jb250YWluZXIgPiBidXR0b246aG92ZXIsXFxuLmRhaWx5LWNvbnRhaW5lciA+IGJ1dHRvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvci1idG4taG92ZXIpO1xcbn1cXG5cXG4uaG91cmx5LWNvbnRhaW5lciA+IGJ1dHRvbjphY3RpdmUsXFxuLmRhaWx5LWNvbnRhaW5lciA+IGJ1dHRvbjphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG59XFxuXFxuLyogaGVyZSAqL1xcbi53ZWF0aGVyLWhvdXJseS1saXN0LFxcbi53ZWF0aGVyLWRhaWx5LWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmhvdXJseS1pdGVtLFxcbi5kYWlseS1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4uZm9yZWNhc3QtaW1hZ2UgPiBpZnJhbWUge1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgd2lkdGg6IDYwcHg7XFxufVxcblxcbi5kb3RzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmRvdHMgPiBidXR0b24ge1xcbiAgcGFkZGluZzogMDtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yLWxpZ2h0KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAwO1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmRvdHMgPiBidXR0b246aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWRvdCk7XFxufVxcblxcbi5iaS1kb3Qge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAtMTBweDtcXG4gIGxlZnQ6IC03cHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG4uY29weXJpZ2h0IHtcXG4gIGdyaWQtYXJlYTogZm9vdGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA4cHg7XFxuICBmb250LXNpemU6IDAuOHJlbTtcXG4gIGFuaW1hdGlvbjogbW92ZVVwIDJzIGZvcndhcmRzO1xcbn1cXG5cXG4uYmktZ2l0aHViIHtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG59XFxuXFxuLmNvcHlyaWdodCA+IGEge1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5jb3B5cmlnaHQgPiBhOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ob3Zlci1naXRodWIpO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICBib2R5IHtcXG4gICAgcGFkZGluZzogMjBweCAwO1xcbiAgfVxcblxcbiAgLndlYXRoZXItZGV0YWlsIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIGF1dG8pO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICdzZWN0aW9uLTEnXFxuICAgICAgJ3NlY3Rpb24tMic7XFxuICAgIHBhZGRpbmc6IDA7XFxuICB9XFxuXFxuICAud2VhdGhlci10b2RheSxcXG4gIC53ZWF0aGVyLWZvcmVjYXN0IHtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG4gIH1cXG5cXG4gIC5sb2dvLFxcbiAgLndlYXRoZXItdG9kYXkge1xcbiAgICBhbmltYXRpb246IG1vdmVEb3duIDJzIGZvcndhcmRzO1xcbiAgfVxcblxcbiAgLndlYXRoZXItZm9yZWNhc3Qge1xcbiAgICBhbmltYXRpb246IG1vdmVVcCAycyBmb3J3YXJkcztcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==