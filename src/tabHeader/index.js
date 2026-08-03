import { useEffect as __WEBPACK_EXTERNAL_MODULE_react_useEffect__, useRef as __WEBPACK_EXTERNAL_MODULE_react_useRef__, useState as __WEBPACK_EXTERNAL_MODULE_react_useState__ } from "react";
/******/ var __webpack_modules__ = ({

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

;// ../huxy/utils/getPosition.js


const getPosition = (ele) => {
  if (!utils_isBrowser()) {
    return;
  }
  ele = utils_isRef(ele) ? ele.current : ele ?? document.body;
  return ele.getBoundingClientRect?.();
};
/* harmony default export */ const utils_getPosition = (getPosition);

;// ../huxy/components/tabHeader/index.jsx




const renderTabs = (value) => /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { style: { padding: "6px 15px" }, children: value });
const TabHeader = ({ activekey, tabs = [], switchTab, trackColor, flex, ref, ...rest }) => {
  const [active, setActive] = __WEBPACK_EXTERNAL_MODULE_react_useState__(activekey ?? tabs[0]?.key);
  const [pos, setPos] = __WEBPACK_EXTERNAL_MODULE_react_useState__({});
  const listRef = __WEBPACK_EXTERNAL_MODULE_react_useRef__({});
  const trackRef = __WEBPACK_EXTERNAL_MODULE_react_useRef__();
  __WEBPACK_EXTERNAL_MODULE_react_useEffect__(() => {
    const activeItem = listRef.current[active];
    activeItem && setTrackPos(activeItem);
  }, []);
  const setTrackPos = (ele) => {
    const { left, width } = utils_getPosition(ele);
    const trackLeft = utils_getPosition(trackRef.current).left;
    setPos({ left: left - trackLeft, width });
  };
  const onChange = (e, key) => {
    e.stopPropagation();
    setActive(key);
    if (typeof switchTab === "function") {
      switchTab(key);
    }
    setTrackPos(e.currentTarget);
  };
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "tabs-header-wrap", ...rest, ref, children: [
    /* @__PURE__ */ (0,jsx_runtime.jsx)("ul", { className: `tabs-header${flex ? " flex" : ""}`, ref: trackRef, children: tabs.map((v) => /* @__PURE__ */ (0,jsx_runtime.jsx)("li", { ref: (el) => listRef.current[v.key] = el, className: `th-item${active === v.key ? " active" : ""}`, onClick: (e) => onChange(e, v.key), children: typeof v.renderTabs === "function" ? v.renderTabs(v, active === v.key) : renderTabs(v.value) }, v.key)) }),
    /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "th-track", style: { ...pos, color: trackColor } })
  ] });
};
/* harmony default export */ const tabHeader = (TabHeader);

export { tabHeader as default };
