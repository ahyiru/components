import * as __WEBPACK_EXTERNAL_MODULE_react__ from "react";
/******/ var __webpack_modules__ = ({

/***/ 3335:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
/*
 React
 react-jsx-runtime.production.min.js

 Copyright (c) Meta Platforms, Inc. and affiliates.

 This source code is licensed under the MIT license found in the
 LICENSE file in the root directory of this source tree.
*/
__webpack_require__(1649);var e=Symbol.for("react.element"),g=Symbol.for("react.fragment"),h=Object.prototype.hasOwnProperty;function k(l,a,f){var b,c={},d=null;void 0!==f&&(d=""+f);void 0!==a.key&&(d=""+a.key);for(b in a)h.call(a,b)&&"key"!==b&&(c[b]=a[b]);a=c.ref;return{$$typeof:e,type:l,key:d,ref:void 0!==a?a:null,props:c}}__webpack_unused_export__=g;exports.jsx=k;__webpack_unused_export__=k;

//# sourceMappingURL=react-jsx-runtime.production.min.js.map


/***/ }),

/***/ 1085:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(3335);
} else {}


/***/ }),

/***/ 1649:
/***/ ((module) => {

var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = (x) => (() => (x))
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1085);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1649);


const getCls = (type, size) => {
  let sp = "", os = "";
  if (typeof size === "number") {
    sp = `col-${type}-${size}`;
  }
  if (typeof size === "object") {
    const { span, offset } = size;
    sp = span ? `col-${type}-${span}` : ``;
    os = offset ? `offset-${type}-${offset}` : ``;
  }
  return { sp, os };
};
const Col = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ span, offset, xl, lg, md, sm, xs, style, width, auto, offsetWidth = "0px", className, ...rest }, ref) => {
  const defCls = className ? ` ${className}` : "";
  const sp = `col-${span || 12}`;
  const os = offset ? `offset-${offset}` : "";
  const { sp: xs_sp, os: xs_os } = getCls("xs", xs);
  const { sp: sm_sp, os: sm_os } = getCls("sm", sm);
  const { sp: md_sp, os: md_os } = getCls("md", md);
  const { sp: lg_sp, os: lg_os } = getCls("lg", lg);
  const { sp: xl_sp, os: xl_os } = getCls("xl", xl);
  const cls = [sp, xl_sp, lg_sp, md_sp, sm_sp, xs_sp, os, xl_os, lg_os, md_os, sm_os, xs_os].filter(Boolean).join(" ");
  const autoStyle = auto ? {
    width: "auto",
    flex: 1,
    //'auto',
    maxWidth: `calc(100% - ${offsetWidth})`
  } : { width };
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: `${cls}${defCls}`, ...rest, style: { ...autoStyle, ...style }, ref });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Col);

})();

var __webpack_exports__default = __webpack_exports__.A;
export { __webpack_exports__default as default };
