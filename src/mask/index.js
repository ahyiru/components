import * as __WEBPACK_EXTERNAL_MODULE_react_dom_7dac9eee__ from "react-dom";
import * as __WEBPACK_EXTERNAL_MODULE_react__ from "react";
/******/ var __webpack_modules__ = ({

/***/ 2147:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ portal)
});

;// CONCATENATED MODULE: external "react-dom"
var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = (x) => (() => (x))
const external_react_dom_namespaceObject = x({ ["createPortal"]: () => (__WEBPACK_EXTERNAL_MODULE_react_dom_7dac9eee__.createPortal) });
;// CONCATENATED MODULE: ../huxy/components/portal/index.jsx

const Portal = ({ children, mountNode = document.body }) => (0,external_react_dom_namespaceObject.createPortal)(children, mountNode);
/* harmony default export */ const portal = (Portal);


/***/ }),

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
__webpack_require__(1649);var e=Symbol.for("react.element"),g=Symbol.for("react.fragment"),h=Object.prototype.hasOwnProperty;function k(l,a,f){var b,c={},d=null;void 0!==f&&(d=""+f);void 0!==a.key&&(d=""+a.key);for(b in a)h.call(a,b)&&"key"!==b&&(c[b]=a[b]);a=c.ref;return{$$typeof:e,type:l,key:d,ref:void 0!==a?a:null,props:c}}__webpack_unused_export__=g;exports.jsx=k;exports.jsxs=k;

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

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_mask)
});

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(1085);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1649);
;// CONCATENATED MODULE: ../huxy/use/useFirstMounted/index.jsx

const useFirstMounted = () => {
  const isFirst = (0,external_react_.useRef)(true);
  if (isFirst.current) {
    isFirst.current = false;
    return true;
  }
  return false;
};
/* harmony default export */ const use_useFirstMounted = (useFirstMounted);

;// CONCATENATED MODULE: ../huxy/use/useUpdateEffect/index.jsx


const useUpdateEffect = (effect, deps = []) => {
  const isFirst = use_useFirstMounted();
  (0,external_react_.useEffect)(() => {
    if (!isFirst) {
      return effect();
    }
  }, deps);
};
/* harmony default export */ const use_useUpdateEffect = (useUpdateEffect);

;// CONCATENATED MODULE: ../huxy/use/useDelayState/index.jsx


const useDelayState = (state, delay = 450) => {
  const [delayState, setDelayState] = (0,external_react_.useState)(state);
  use_useUpdateEffect(() => {
    let timer;
    if (state || delay === 0) {
      setDelayState(state);
    } else {
      timer = setTimeout(() => setDelayState(state), delay);
    }
    return () => timer && clearTimeout(timer);
  }, [state]);
  return [delayState, setDelayState];
};
/* harmony default export */ const use_useDelayState = (useDelayState);

// EXTERNAL MODULE: ../huxy/components/portal/index.jsx + 1 modules
var portal = __webpack_require__(2147);
;// CONCATENATED MODULE: ../huxy/components/mask/index.jsx




const wrapper = {
  position: "fixed",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999
};
const mask = {
  position: "fixed",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  background: "rgba(0, 0, 0, 0.5)",
  zIndex: 1e4
};
const body = document.body;
const Mask = ({ open, close, delay = 300, children, mountNode, hasMask = true, style, className = "h-mask", relative }) => {
  const [delayOpen] = use_useDelayState(open, delay);
  (mountNode ?? body).style.overflow = delayOpen ? "hidden" : "";
  const position = relative ? "absolute" : "fixed";
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(portal/* default */.A, { mountNode, children: /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { children: delayOpen ? /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className, style: { ...wrapper, position }, children: [
    hasMask ? /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { style: { ...mask, position }, onClick: (e) => close?.(e) }) : null,
    external_react_.Children.map(children, (child) => {
      if (!(0,external_react_.isValidElement)(child)) {
        return child;
      }
      return (0,external_react_.cloneElement)(child, {
        style: {
          position: "relative",
          zIndex: 100001,
          ...child.props.style
        }
      });
    })
  ] }) : null }) });
};
/* harmony default export */ const components_mask = (Mask);

})();

var __webpack_exports__default = __webpack_exports__.A;
export { __webpack_exports__default as default };
