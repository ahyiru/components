import * as __WEBPACK_EXTERNAL_MODULE_react__ from "react";
/******/ var __webpack_modules__ = ({

/***/ 4907:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ ErrorBoundary)
});

;// external "react"
var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = (x) => (() => (x))
const external_react_namespaceObject = x({ ["default"]: () => (__WEBPACK_EXTERNAL_MODULE_react__["default"]) });
;// ../huxy/components/errorBoundary/index.jsx

class ErrorBoundary extends external_react_namespaceObject["default"].Component {
  state = {
    error: null
  };
  static getDerivedStateFromError(error) {
    return { error };
  }
  componentDidCatch(error, info) {
    const { errorReport } = this.props;
    if (typeof errorReport === "function") {
      errorReport({ error, info: info.componentStack });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.error) {
      this.setState({
        error: null
      });
    }
  }
  render() {
    const { error } = this.state;
    const { fallback, children } = this.props;
    if (error) {
      return fallback?.(error) ?? error;
    }
    return children;
  }
}


/***/ }),

/***/ 8217:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1085);
/* harmony import */ var _huxy_components_str2React__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7877);


const LoadError = (props) => {
  const { error = {}, info = "" } = props || {};
  const { message, stack, errMsg } = error;
  let str = errMsg || stack || error.toString();
  str = `${str}
${info}`.replace(/\r|\n|\r\n/g, "<br/>");
  str = str.replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;");
  str = str.replace(/\s/g, "&nbsp;");
  const errStack = message?.slice(0, 120).split(". ").slice(0, 2).join(". ");
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { style: { padding: "15px 20px", backgroundColor: "#fff", wordWrap: "break-word" }, children: [
    (0,_huxy_components_str2React__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(str, { style: { color: "red" } }),
    errStack && /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", { style: { display: "inline-block", padding: "15px", color: "#00b4cf" }, href: `https://stackoverflow.com/search?q=${errStack}`, target: "_blank", children: [
      " ",
      "--> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"
    ] })
  ] });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadError);


/***/ }),

/***/ 7877:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1085);

const str2React = (str, props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { dangerouslySetInnerHTML: { __html: str }, ...props });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (str2React);


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
exports.jsxs = jsxProd;


/***/ }),

/***/ 1085:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(1197);
} else {}


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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (handleError)
/* harmony export */ });
/* harmony import */ var handleError_react_jsx_runtime_WEBPACK_IMPORTED_MODULE_0_ = __webpack_require__(1085);
/* harmony import */ var handleError_huxy_components_errorBoundary_WEBPACK_IMPORTED_MODULE_1_ = __webpack_require__(4907);
/* harmony import */ var handleError_huxy_components_loadError_WEBPACK_IMPORTED_MODULE_2_ = __webpack_require__(8217);



const handleError_HandleError = ({ children, report }) => {
  return /* @__PURE__ */ (0,handleError_react_jsx_runtime_WEBPACK_IMPORTED_MODULE_0_.jsx)(handleError_huxy_components_errorBoundary_WEBPACK_IMPORTED_MODULE_1_/* ["default"] */ .A, { fallback: (error, info) => (0,handleError_huxy_components_loadError_WEBPACK_IMPORTED_MODULE_2_/* ["default"] */ .A)({ error, info }), errorReport: report, children });
};
/* harmony default export */ const handleError = (handleError_HandleError);

var __webpack_exports__default = __webpack_exports__.A;
export { __webpack_exports__default as default };
