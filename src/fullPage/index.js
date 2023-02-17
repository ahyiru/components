(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE__899__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 837:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__(899),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}__webpack_unused_export__=l;exports.jsx=q;__webpack_unused_export__=q;


/***/ }),

/***/ 322:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



if (true) {
  module.exports = __webpack_require__(837);
} else {}


/***/ }),

/***/ 899:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__899__;

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ fullPage; }
});

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(322);
// EXTERNAL MODULE: external {"root":"React","commonjs":"react","commonjs2":"react","amd":"react"}
var external_root_React_commonjs_react_commonjs2_react_amd_react_ = __webpack_require__(899);
;// CONCATENATED MODULE: ../huxy/utils/isBrowser.js
const isBrowser = () => ![typeof window, typeof document].includes("undefined");
/* harmony default export */ var utils_isBrowser = (isBrowser);

;// CONCATENATED MODULE: ../huxy/utils/hasProp.js
const hasProp = (obj, prop) => Object.prototype.hasOwnProperty.call(obj != null ? obj : {}, prop);
/* harmony default export */ var utils_hasProp = (hasProp);

;// CONCATENATED MODULE: ../huxy/utils/isRef.js

const isRef = (ref) => utils_hasProp(ref, "current");
/* harmony default export */ var utils_isRef = (isRef);

;// CONCATENATED MODULE: ../huxy/utils/_/prefixBrowser.js
const prefix = ["", "webkit", "moz", "ms"];
const fullscreenElement = (ele) => prefix.map((v) => v ? `${v}FullscreenElement` : "fullscreenElement").find((v) => ele[v]);
const requestFullscreen = (ele) => prefix.map((v) => v ? `${v}RequestFullscreen` : "requestFullscreen").find((v) => ele[v]);
const exitFullscreen = (ele) => prefix.map((v) => v ? `${v}ExitFullscreen` : "exitFullscreen").find((v) => ele[v]);
const fullscreenchange = prefix.map((v) => `${v}fullscreenchange`);

;// CONCATENATED MODULE: ../huxy/utils/fullScreen.js



const fullScreen = (ele) => {
  var _a, _b;
  if (!utils_isBrowser()) {
    return;
  }
  ele = utils_isRef(ele) ? ele.current : ele != null ? ele : document.body;
  const fse = fullscreenElement(document);
  const rfs = requestFullscreen(ele);
  const efs = exitFullscreen(document);
  if (!document[fse]) {
    (_a = ele[rfs]) == null ? void 0 : _a.call(ele);
  } else {
    (_b = document[efs]) == null ? void 0 : _b.call(document);
  }
};
/* harmony default export */ var utils_fullScreen = (fullScreen);

;// CONCATENATED MODULE: ../huxy/utils/watchScreen.js


const watchScreen = (callback) => {
  if (!utils_isBrowser()) {
    return;
  }
  fullscreenchange.map((fsc) => document.addEventListener(fsc, callback, false));
  const destroy = () => fullscreenchange.map((fsc) => document.removeEventListener(fsc, callback, false));
  return destroy;
};
/* harmony default export */ var utils_watchScreen = (watchScreen);

;// CONCATENATED MODULE: ../huxy/components/fullPage/index.jsx





const defaultIcon = (props) => /* @__PURE__ */ (0,jsx_runtime.jsx)("i", { ...props, children: "..." });
const FullPage = ({ panel, fullIcon = defaultIcon, exitIcon = defaultIcon, ...rest }) => {
  const container = utils_isRef(panel) ? panel.current : panel;
  const [isFull, setIsFull] = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useState)();
  (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useEffect)(() => {
    const destroy = utils_watchScreen(() => {
      setIsFull((prev) => !prev);
    });
    return () => destroy();
  }, []);
  const Icon = isFull ? exitIcon : fullIcon;
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(Icon, { onClick: (e) => utils_fullScreen(container), ...rest });
};
/* harmony default export */ var fullPage = (FullPage);

}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});