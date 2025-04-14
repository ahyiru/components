import * as __WEBPACK_EXTERNAL_MODULE_react_dom_7dac9eee__ from "react-dom";
/******/ // The require scope
/******/ var __webpack_require__ = {};
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ portal)
});

;// external "react-dom"
var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = (x) => (() => (x))
const external_react_dom_namespaceObject = x({ ["createPortal"]: () => (__WEBPACK_EXTERNAL_MODULE_react_dom_7dac9eee__.createPortal) });
;// ../huxy/components/portal/index.jsx

const Portal = ({ children, mountNode = document.body }) => (0,external_react_dom_namespaceObject.createPortal)(children, mountNode);
/* harmony default export */ const portal = (Portal);

var __webpack_exports__default = __webpack_exports__.A
export { __webpack_exports__default as default };
