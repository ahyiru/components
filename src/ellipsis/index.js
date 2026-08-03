import { useEffect as __WEBPACK_EXTERNAL_MODULE_react_useEffect__, useRef as __WEBPACK_EXTERNAL_MODULE_react_useRef__, useState as __WEBPACK_EXTERNAL_MODULE_react_useState__ } from "react";
/******/ var __webpack_modules__ = ({

/***/ 484
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ tooltip)
});

// NAMESPACE OBJECT (decoupled): css ../huxy/components/tooltip/index.module.less
var index_module_namespaceObject = {};
__webpack_require__.r(index_module_namespaceObject);
__webpack_require__.d(index_module_namespaceObject, {
  ellipsis: () => (gO),
  "huxy-tooltip": () => (Vz),
  "huxy-tooltip-bottomLeft": () => (o7),
  "huxy-tooltip-bottomRight": () => ($x),
  "huxy-tooltip-rightTop": () => (l3),
  "huxy-tooltip-topLeft": () => (E9),
  "huxy-tooltip-topRight": () => (ZG)
});

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85);
;// css ../huxy/components/tooltip/index.module.less
const gO = "_271_3kH5Q";
const Vz = "_271_6YCYv";
const ZG = "_271_3O9SW";
const E9 = "_271_NDGNW";
const $x = "_271_1ydKf";
const o7 = "_271_Hb+Xa";
const l3 = "_271_e36RK";


;// ../huxy/components/tooltip/index.jsx


const Tooltip = ({ title, placement = "topRight", children, ellipsis, className, ...rest }) => /* @__PURE__ */ (0,jsx_runtime.jsx)("span", { className: `${index_module_namespaceObject[`huxy-tooltip-${placement}`]}${className ? ` ${className}` : ""}`, tooltip: title ?? children, ...rest, children: /* @__PURE__ */ (0,jsx_runtime.jsx)("span", { className: ellipsis ? gO : "", children }) });
/* harmony default export */ const tooltip = (Tooltip);


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
__webpack_unused_export__ = jsxProd;


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

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85);
;// external "react"

;// ../huxy/utils/isBrowser.js
const isBrowser = () => ![typeof window, typeof document].includes("undefined");
/* harmony default export */ const utils_isBrowser = (isBrowser);

;// ../huxy/utils/getType.js
const getType = (value) => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
/* harmony default export */ const utils_getType = (getType);

;// ../huxy/utils/isElement.js

const isElement = (value) => utils_getType(value).indexOf("element") > -1;
/* harmony default export */ const utils_isElement = (isElement);

;// ../huxy/utils/setStyle.js

const setStyle = (ele, styles = {}, reset = false) => {
  if (!utils_isElement(ele)) {
    return;
  }
  if (reset) {
    let objStr = "";
    Object.keys(styles).map((key) => {
      objStr += `${key}: ${styles[key]};`;
    });
    ele.style = objStr;
    return;
  }
  Object.keys(styles).map((key) => ele.style.setProperty(key, styles[key]));
};
/* harmony default export */ const utils_setStyle = (setStyle);

;// ../huxy/utils/hasProp.js
const hasProp = (obj, prop) => Object.prototype.hasOwnProperty.call(obj ?? {}, prop);
/* harmony default export */ const utils_hasProp = (hasProp);

;// ../huxy/utils/isRef.js

const isRef = (ref) => {
  const refObj = typeof ref === "function" ? ref() : ref;
  return utils_hasProp(refObj, "current");
};
/* harmony default export */ const utils_isRef = (isRef);

;// ../huxy/utils/getTextSize.js



const getTextSize = (text, styles, ele) => {
  if (!utils_isBrowser()) {
    return;
  }
  ele = utils_isRef(ele) ? ele.current : ele ?? document.body;
  const span = document.createElement("span");
  span.setAttribute("style", `pointer-events: none; z-index: -1; opacity: 0;`);
  styles && utils_setStyle(span, styles);
  span.innerText = (text ?? "").replace(/[\r\n]/g, "");
  ele.appendChild(span);
  const rect = span.getBoundingClientRect();
  ele.removeChild(span);
  return rect;
};
/* harmony default export */ const utils_getTextSize = (getTextSize);

;// ../huxy/utils/getPosition.js


const getPosition = (ele) => {
  if (!utils_isBrowser()) {
    return;
  }
  ele = utils_isRef(ele) ? ele.current : ele ?? document.body;
  return ele.getBoundingClientRect?.();
};
/* harmony default export */ const utils_getPosition = (getPosition);

// EXTERNAL MODULE: ../huxy/components/tooltip/index.jsx + 1 modules
var tooltip = __webpack_require__(484);
;// ../huxy/components/ellipsis/index.jsx





const ellipsisStyle = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  display: "inline-block",
  width: "100%"
};
const EllipsisTooltip = (props) => {
  const { children, style } = props;
  const isStringChild = typeof children === "string";
  const text = isStringChild ? children : children?.props?.title ?? children?.props?.children;
  const spanRef = __WEBPACK_EXTERNAL_MODULE_react_useRef__();
  const [ellipsis, setEllipsis] = __WEBPACK_EXTERNAL_MODULE_react_useState__(true);
  __WEBPACK_EXTERNAL_MODULE_react_useEffect__(() => {
    if (spanRef.current) {
      const { width: tWidth } = utils_getTextSize(text, null, spanRef.current.parentNode);
      const { width } = utils_getPosition(spanRef.current);
      const isEllipsis = ~~tWidth > ~~width;
      if (isEllipsis !== ellipsis) {
        setEllipsis(isEllipsis);
      }
    }
  }, [
    text
    /* , state.width */
  ]);
  return /* @__PURE__ */ (0,jsx_runtime.jsx)("span", { ref: spanRef, style: { display: "flex", width: "100%", ...style }, children: ellipsis ? isStringChild ? /* @__PURE__ */ (0,jsx_runtime.jsx)(tooltip/* default */.A, { ...props, ellipsis: true }) : /* @__PURE__ */ (0,jsx_runtime.jsx)("span", { style: ellipsisStyle, children }) : isStringChild ? children : children?.props?.children });
};
const Ellipsis = (props) => {
  if (props.children == null) {
    return "";
  }
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(EllipsisTooltip, { ...props });
};
/* harmony default export */ const ellipsis = (Ellipsis);

export { ellipsis as default };
