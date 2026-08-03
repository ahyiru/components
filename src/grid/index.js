import { Children as __WEBPACK_EXTERNAL_MODULE_react_Children__ } from "react";
/******/ var __webpack_modules__ = ({

/***/ 457
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);

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
const Col = ({ span, offset, xl, lg, md, sm, xs, style, width, auto, offsetWidth = "0px", className, ref, ...rest }) => {
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
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Col);

/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 728
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ row)
});

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85);
;// ../huxy/components/row/index.jsx


const Row = ({ gutter = 10, className, overflow = "hidden", ref, ...rest }) => {
  const defCls = className ? ` ${className}` : "";
  let rowgap = 10;
  if (Array.isArray(gutter)) {
    const tmp = [...gutter];
    gutter = tmp[0];
    rowgap = tmp[1] ?? tmp[0];
  }
  return /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "row-wrap", style: { "--gutter": `${Math.floor(gutter / 2)}px`, "--rowgap": `${Math.floor(rowgap / 2)}px`, overflow }, children: /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: `row${defCls}`, ...rest, ref }) });
};
/* harmony default export */ const row = (Row);


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
/************************************************************************/

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85);
;// external "react"

// EXTERNAL MODULE: ../huxy/components/row/index.jsx + 1 modules
var row = __webpack_require__(728);
// EXTERNAL MODULE: ../huxy/components/col/index.jsx
var col = __webpack_require__(457);
;// ../huxy/components/grid/index.jsx




const Grid = ({ rowProps, colProps, children, Row = row/* default */.A, Col = col/* default */.A }) => {
  const newChild = [];
  __WEBPACK_EXTERNAL_MODULE_react_Children__.map(children, (child) => {
    if (child) {
      if (child.type?.description === "react.fragment") {
        newChild.push(...child.props.children);
      } else {
        newChild.push(child);
      }
    }
  });
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(Row, { ...rowProps, children: newChild.map((child, i) => /* @__PURE__ */ (0,jsx_runtime.jsx)(Col, { ...colProps, ...child.props.itemprops, children: child }, `huuxy_grid_${i}`)) });
};
/* harmony default export */ const grid = (Grid);

export { grid as default };
