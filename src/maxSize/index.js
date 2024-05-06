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

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ maxSize)
});

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(1085);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1649);
;// CONCATENATED MODULE: ../huxy/utils/isBrowser.js
const isBrowser = () => ![typeof window, typeof document].includes("undefined");
/* harmony default export */ const utils_isBrowser = (isBrowser);

;// CONCATENATED MODULE: ../huxy/utils/hasProp.js
const hasProp = (obj, prop) => Object.prototype.hasOwnProperty.call(obj ?? {}, prop);
/* harmony default export */ const utils_hasProp = (hasProp);

;// CONCATENATED MODULE: ../huxy/utils/isRef.js

const isRef = (ref) => utils_hasProp(ref, "current");
/* harmony default export */ const utils_isRef = (isRef);

;// CONCATENATED MODULE: ../huxy/utils/getPosition.js


const getPosition = (ele) => {
  if (!utils_isBrowser()) {
    return;
  }
  ele = utils_isRef(ele) ? ele.current : ele ?? document.body;
  return ele.getBoundingClientRect?.();
};
/* harmony default export */ const utils_getPosition = (getPosition);

;// CONCATENATED MODULE: ../huxy/utils/getType.js
const getType = (value) => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
/* harmony default export */ const utils_getType = (getType);

;// CONCATENATED MODULE: ../huxy/utils/isElement.js

const isElement = (value) => utils_getType(value).indexOf("element") > -1;
/* harmony default export */ const utils_isElement = (isElement);

;// CONCATENATED MODULE: ../huxy/utils/getViewportSize.js


const getViewportSize = (element = null) => {
  if (!utils_isBrowser()) {
    return {
      width: 0,
      height: 0
    };
  }
  if (utils_isElement(element)) {
    return {
      width: element.clientWidth,
      height: element.clientHeight
    };
  }
  return {
    width: window.innerWidth ?? document.documentElement.clientWidth,
    height: window.innerHeight ?? document.documentElement.clientHeight
  };
};
/* harmony default export */ const utils_getViewportSize = (getViewportSize);

;// CONCATENATED MODULE: ../huxy/components/maxSize/index.jsx





const setStyles = (ele, styles) => Object.keys(styles).map((v) => ele.style[v] = styles[v]);
const resetStyles = (ele, styles) => Object.keys(styles).map((v) => ele.style[v] = "");
const maxStyle = {
  overflow: "auto",
  position: "fixed",
  zIndex: 5555,
  transition: "all .2s"
};
const getStyles = ({ left, top, width, height }) => ({
  left: `${left}px`,
  top: `${top}px`,
  width: `${width}px`,
  height: `${height}px`
});
const defaultIcon = (props) => /* @__PURE__ */ (0,jsx_runtime.jsx)("i", { ...props, children: "..." });
const getEleSize = (ele) => {
  const { left, top } = utils_getPosition(ele);
  const { width, height } = utils_getViewportSize(ele);
  return { left, top, width, height };
};
const MaxSize = ({ panel, target, fullIcon = defaultIcon, exitIcon = defaultIcon }) => {
  panel = utils_isRef(panel) ? panel.current : panel || document.body;
  const [isMax, setIsMax] = (0,external_react_.useState)();
  const panelStyleRef = (0,external_react_.useRef)();
  (0,external_react_.useEffect)(() => {
    panelStyleRef.current = {
      ...maxStyle,
      ...getStyles(getEleSize(panel))
    };
  }, [panel]);
  const handle = (isMax2, ele) => {
    if (isMax2) {
      const getTarget = typeof target === "function" ? target : () => document.getElementsByClassName(target)[0];
      const targetStyles = getStyles(getEleSize(getTarget()));
      setStyles(ele, panelStyleRef.current);
      setTimeout(() => {
        setStyles(ele, targetStyles);
      }, 0);
    } else {
      resetStyles(ele, panelStyleRef.current);
    }
    setIsMax(isMax2);
  };
  const Icon = isMax ? exitIcon : fullIcon;
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(Icon, { onClick: (e) => handle(!isMax, panel) });
};
/* harmony default export */ const maxSize = (MaxSize);

})();

var __webpack_exports__default = __webpack_exports__.A;
export { __webpack_exports__default as default };
