import { useRef as __WEBPACK_EXTERNAL_MODULE_react_useRef__ } from "react";
/******/ var __webpack_modules__ = ({

/***/ 809
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ spinner)
});

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85);
;// ../huxy/components/spinner/index.jsx


const Spinner = ({ global, absolute }) => /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: `spinner${global ? " global" : ""}${absolute ? " absolute" : ""}`, children: /* @__PURE__ */ (0,jsx_runtime.jsx)("figure", { className: "spinning" }) });
/* harmony default export */ const spinner = (Spinner);


/***/ },

/***/ 197
(__unused_webpack_module, exports) {

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
exports.jsxs = jsxProd;


/***/ },

/***/ 85
(module, __unused_webpack_exports, __webpack_require__) {



if (true) {
  module.exports = __webpack_require__(197);
} else // removed by dead control flow
{}


/***/ }

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ const __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	const cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	const module = __webpack_module_cache__[moduleId] = {
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
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		if(Array.isArray(definition)) {
/******/ 			var i = 0;
/******/ 			while(i < definition.length) {
/******/ 				var key = definition[i++];
/******/ 				var binding = definition[i++];
/******/ 				if(!__webpack_require__.o(exports, key)) {
/******/ 					if(binding === 0) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 					} else {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 					}
/******/ 				} else if(binding === 0) { i++; }
/******/ 			}
/******/ 		} else {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
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

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85);
;// external "react"

// EXTERNAL MODULE: ../huxy/components/spinner/index.jsx + 1 modules
var spinner = __webpack_require__(809);
;// ../huxy/utils/hasProp.js
const hasProp = (obj, prop) => Object.prototype.hasOwnProperty.call(obj ?? {}, prop);
/* harmony default export */ const utils_hasProp = (hasProp);

;// ../huxy/utils/isRef.js

const isRef = (ref) => {
  const refObj = typeof ref === "function" ? ref() : ref;
  return utils_hasProp(refObj, "current");
};
/* harmony default export */ const utils_isRef = (isRef);

;// css ../huxy/components/panel/index.module.less
const nd = "_176_9f2nr";
const CG = "_176_8kmFf";
const $d = "_176_Dqtac";
const w_ = "_176_14b4i";
const kv = "_176_UTFf/";
const nf = "_176_NYSgT";


;// ../huxy/components/panel/index.jsx





const isValid = (plugins) => plugins?.filter?.((item) => typeof item === "function");
const Panel = ({ loading, title, plugins, children, className, ref, ...rest }) => {
  const panelRef = __WEBPACK_EXTERNAL_MODULE_react_useRef__();
  const validPlugin = isValid(plugins);
  const isValidPlugin = validPlugin?.length;
  const cls = className ? ` ${className}` : "";
  const container = utils_isRef(() => ref) ? ref : panelRef;
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: `${nd}${cls}`, ...rest, ref: container, children: [
    (title || isValidPlugin) && /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: $d, children: [
      title && /* @__PURE__ */ (0,jsx_runtime.jsx)("h4", { className: w_, children: title }),
      isValidPlugin && /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: kv, children: validPlugin.map((Item, i) => /* @__PURE__ */ (0,jsx_runtime.jsx)("span", { className: `link ${nf}`, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Item, { panel: container }) }, i)) })
    ] }),
    /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: CG, children }),
    loading && /* @__PURE__ */ (0,jsx_runtime.jsx)(spinner/* default */.A, {})
  ] });
};
/* harmony default export */ const panel = (Panel);

export { panel as default };
