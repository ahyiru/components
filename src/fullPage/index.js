import * as __WEBPACK_EXTERNAL_MODULE_react__ from "react";
/******/ var __webpack_modules__ = ({

/***/ 1085:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(1197);
} else // removed by dead control flow
{}


/***/ }),

/***/ 1197:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
function jsxProd(type, config, maybeKey) {
  var key = null;
  void 0 !== maybeKey && (key = "" + maybeKey);
  void 0 !== config.key && (key = "" + config.key);
  if ("key" in config) {
    maybeKey = {};
    for (var propName in config)
      "key" !== propName && (maybeKey[propName] = config[propName]);
  } else maybeKey = config;
  config = maybeKey.ref;
  return {
    $$typeof: REACT_ELEMENT_TYPE,
    type: type,
    key: key,
    ref: void 0 !== config ? config : null,
    props: maybeKey
  };
}
__webpack_unused_export__ = REACT_FRAGMENT_TYPE;
exports.jsx = jsxProd;
__webpack_unused_export__ = jsxProd;


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

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(1085);
;// external "react"
var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = (x) => (() => (x))
const external_react_namespaceObject = x({ ["useEffect"]: () => (__WEBPACK_EXTERNAL_MODULE_react__.useEffect), ["useState"]: () => (__WEBPACK_EXTERNAL_MODULE_react__.useState) });
;// ../huxy/utils/isBrowser.js
const isBrowser = () => ![typeof window, typeof document].includes("undefined");
/* harmony default export */ const utils_isBrowser = (isBrowser);

;// ../huxy/utils/hasProp.js
const hasProp = (obj, prop) => Object.prototype.hasOwnProperty.call(obj ?? {}, prop);
/* harmony default export */ const utils_hasProp = (hasProp);

;// ../huxy/utils/isRef.js

const isRef = (ref) => {
  const refObj = typeof ref === "function" ? ref() : ref;
  return utils_hasProp(refObj, "current");
};
/* harmony default export */ const utils_isRef = (isRef);

;// ../huxy/utils/_/prefixBrowser.js
const prefix = ["", "webkit", "moz", "ms"];
const fullscreenElement = (ele) => prefix.map((v) => v ? `${v}FullscreenElement` : "fullscreenElement").find((v) => ele[v]);
const requestFullscreen = (ele) => prefix.map((v) => v ? `${v}RequestFullscreen` : "requestFullscreen").find((v) => ele[v]);
const exitFullscreen = (ele) => prefix.map((v) => v ? `${v}ExitFullscreen` : "exitFullscreen").find((v) => ele[v]);
const fullscreenchange = prefix.map((v) => `${v}fullscreenchange`);

;// ../huxy/utils/fullScreen.js



const fullScreen = (ele) => {
  if (!utils_isBrowser()) {
    return;
  }
  ele = utils_isRef(ele) ? ele.current : ele ?? document.body;
  const fse = fullscreenElement(document);
  const rfs = requestFullscreen(ele);
  const efs = exitFullscreen(document);
  if (!document[fse]) {
    ele[rfs]?.();
  } else {
    document[efs]?.();
  }
};
/* harmony default export */ const utils_fullScreen = (fullScreen);

;// ../huxy/utils/watchScreen.js


const watchScreen = (callback) => {
  if (!utils_isBrowser()) {
    return;
  }
  fullscreenchange.map((fsc) => document.addEventListener(fsc, callback, false));
  const destroy = () => fullscreenchange.map((fsc) => document.removeEventListener(fsc, callback, false));
  return destroy;
};
/* harmony default export */ const utils_watchScreen = (watchScreen);

;// ../huxy/components/fullPage/index.jsx





const defaultIcon = (props) => /* @__PURE__ */ (0,jsx_runtime.jsx)("i", { ...props, children: "..." });
const FullPage = ({ panel, fullIcon = defaultIcon, exitIcon = defaultIcon, ...rest }) => {
  const container = utils_isRef(panel) ? panel.current : panel;
  const [isFull, setIsFull] = (0,external_react_namespaceObject.useState)();
  (0,external_react_namespaceObject.useEffect)(() => {
    const destroy = utils_watchScreen(() => {
      setIsFull((prev) => !prev);
    });
    return () => destroy();
  }, []);
  const Icon = isFull ? exitIcon : fullIcon;
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(Icon, { onClick: (e) => utils_fullScreen(container), ...rest });
};
/* harmony default export */ const fullPage = (FullPage);

export { fullPage as default };
