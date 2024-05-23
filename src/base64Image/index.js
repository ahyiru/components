import * as __WEBPACK_EXTERNAL_MODULE_react__ from "react";
/******/ var __webpack_modules__ = ({

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ base64Image)
});

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(1085);
;// CONCATENATED MODULE: external "react"
var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = (x) => (() => (x))
const external_react_namespaceObject = x({ ["useEffect"]: () => (__WEBPACK_EXTERNAL_MODULE_react__.useEffect), ["useState"]: () => (__WEBPACK_EXTERNAL_MODULE_react__.useState) });
;// CONCATENATED MODULE: ../huxy/utils/isUrl.js
const isUrl = (url) => /^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(url);
/* harmony default export */ const utils_isUrl = (isUrl);

;// CONCATENATED MODULE: ../huxy/utils/loadBase64.js
const loadBase64 = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.addEventListener("load", () => resolve(reader.result));
  reader.addEventListener("error", (error) => reject(error));
});
/* harmony default export */ const utils_loadBase64 = (loadBase64);

;// CONCATENATED MODULE: ../huxy/utils/loadBase64ByUrl.js


const loadBase64ByUrl = async (url) => {
  if (!utils_isUrl(url)) {
    return url;
  }
  const response = await fetch(decodeURIComponent(url));
  const blob = await response.blob();
  const result = await utils_loadBase64(blob);
  return result;
};
/* harmony default export */ const utils_loadBase64ByUrl = (loadBase64ByUrl);

;// CONCATENATED MODULE: ../huxy/use/useBase64/index.jsx


const useBase64 = (url) => {
  const [dataUrl, setDataUrl] = (0,external_react_namespaceObject.useState)(url);
  (0,external_react_namespaceObject.useEffect)(() => {
    const getBase64 = async (url2) => {
      const base64 = await utils_loadBase64ByUrl(url2);
      setDataUrl(base64);
    };
    getBase64(url);
  }, [url]);
  return dataUrl;
};
/* harmony default export */ const use_useBase64 = (useBase64);

;// CONCATENATED MODULE: ../huxy/components/base64Image/index.jsx


const Base64Image = ({ src, ...rest }) => {
  const url = use_useBase64(src);
  return /* @__PURE__ */ (0,jsx_runtime.jsx)("img", { ...rest, src: url });
};
/* harmony default export */ const base64Image = (Base64Image);

})();

var __webpack_exports__default = __webpack_exports__.A;
export { __webpack_exports__default as default };
