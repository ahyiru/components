import { createPortal as __WEBPACK_EXTERNAL_MODULE_react_dom_20ef40a6_createPortal__ } from "react-dom";
import * as __WEBPACK_EXTERNAL_MODULE_react__ from "react";
/******/ var __webpack_modules__ = ({

/***/ 140
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_mask)
});

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(649);
;// ../huxy/use/useUpdateEffect/index.jsx

const useUpdateEffect = (effect, deps = []) => {
  const isMounted = (0,external_react_.useRef)(false);
  (0,external_react_.useEffect)(() => {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      return effect();
    }
  }, deps);
};
/* harmony default export */ const use_useUpdateEffect = (useUpdateEffect);

;// ../huxy/use/useDelayState/index.jsx


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
var portal = __webpack_require__(826);
;// ../huxy/components/mask/index.jsx




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
const changeOverflow = (mountNode, delayOpen) => mountNode.style.overflow = delayOpen ? "hidden" : "";
const Mask = ({ open, close, delay = 300, children, mountNode = document.body, hasMask = true, style, className = "h-mask", relative }) => {
  const [delayOpen] = use_useDelayState(open, delay);
  changeOverflow(mountNode, delayOpen);
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


/***/ },

/***/ 826
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ portal)
});

;// external "react-dom"

;// ../huxy/components/portal/index.jsx

const Portal = ({ children, mountNode = document.body }) => __WEBPACK_EXTERNAL_MODULE_react_dom_20ef40a6_createPortal__(children, mountNode);
/* harmony default export */ const portal = (Portal);


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


/***/ },

/***/ 649
(module, __unused_webpack_exports, __webpack_require__) {

const x = (y) => {
	const x = {}; __webpack_require__.d(x, y); return x
} 
const y = (x) => (() => (x))
module.exports = x({ ["Children"]: () => (__WEBPACK_EXTERNAL_MODULE_react__.Children), ["cloneElement"]: () => (__WEBPACK_EXTERNAL_MODULE_react__.cloneElement), ["isValidElement"]: () => (__WEBPACK_EXTERNAL_MODULE_react__.isValidElement), ["useEffect"]: () => (__WEBPACK_EXTERNAL_MODULE_react__.useEffect), ["useRef"]: () => (__WEBPACK_EXTERNAL_MODULE_react__.useRef), ["useState"]: () => (__WEBPACK_EXTERNAL_MODULE_react__.useState) });

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
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/

// NAMESPACE OBJECT (decoupled): css ../huxy/components/drawer/index.module.less
var index_module_namespaceObject = {};
__webpack_require__.r(index_module_namespaceObject);
__webpack_require__.d(index_module_namespaceObject, {
  "animate-drawer-left-in": () => (uA),
  "animate-drawer-left-out": () => (xK),
  "animate-drawer-right-in": () => (nY),
  "animate-drawer-right-out": () => (k5),
  "drawer-container": () => (iD),
  "drawer-content": () => (_I),
  "drawer-footer": () => (Ih),
  "drawer-header": () => (Y8),
  "drawer-wrap": () => (Vn),
  "ico-close": () => (pz),
  left: () => (kb),
  open: () => (ho),
  right: () => (pG)
});

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85);
// EXTERNAL MODULE: ../huxy/components/mask/index.jsx + 2 modules
var mask = __webpack_require__(140);
;// css ../huxy/components/drawer/index.module.less
const nY = "_609_xoxMP";
const k5 = "_609_vkbSj";
const uA = "_609_rvRKn";
const xK = "_609_/CS0P";
const Vn = "_609_vgFmf";
const ho = "_609_GI/FX";
const pG = "_609_RDqTV";
const kb = "_609_Slj5/";
const iD = "_609_6i6Vb";
const _I = "_609_tewra";
const Y8 = "_609_oYOsl";
const pz = "_609_rHWY9";
const Ih = "_609_/KNWb";


;// ../huxy/components/drawer/index.jsx



const Drawer = ({ open, close, footer, header, className, style, children, width = "300px", mountNode, position = "right", relative }) => {
  const cls = ["drawer-wrap", position, open ? "open" : "", ...className?.split(" ") ?? []].filter(Boolean).map((c) => index_module_namespaceObject[c]).join(" ");
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(mask/* default */.A, { open, close, delay: 250, hasMask: true, relative, mountNode, className: "huxy-drawer", children: /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: cls, style: { width, position: relative ? "absolute" : "fixed", "--footerHeight": footer ? "44px" : "0px", "--headerHeight": header ? "44px" : "0px", ...style }, children: /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: iD, children: [
    header ? /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: Y8, children: [
      position === "right" ? /* @__PURE__ */ (0,jsx_runtime.jsx)("span", { className: `link ${pz}`, onClick: (e) => close?.(e) }) : null,
      /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { children: header }),
      position === "left" ? /* @__PURE__ */ (0,jsx_runtime.jsx)("span", { className: `link ${pz}`, onClick: (e) => close?.(e) }) : null
    ] }) : null,
    /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: _I, children }),
    footer ? /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: Ih, children: footer }) : null
  ] }) }) });
};
/* harmony default export */ const drawer = (Drawer);

export { drawer as default };
