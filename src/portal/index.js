import { createPortal as __WEBPACK_EXTERNAL_MODULE_react_dom_7dac9eee_createPortal__ } from "react-dom";
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

;// external "react-dom"

;// ../huxy/components/portal/index.jsx

const Portal = ({ children, mountNode = document.body }) => __WEBPACK_EXTERNAL_MODULE_react_dom_7dac9eee_createPortal__(children, mountNode);
/* harmony default export */ const portal = (Portal);

export { portal as default };
