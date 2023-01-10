(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE__899__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 805:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ utils_isArray; }
});

;// CONCATENATED MODULE: ../huxy/utils/getType.js
const getType = (value) => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
/* harmony default export */ var utils_getType = (getType);

;// CONCATENATED MODULE: ../huxy/utils/isArray.js

const isArray = (value) => utils_getType(value) === "array";
/* harmony default export */ var utils_isArray = (isArray);


/***/ }),

/***/ 53:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__(899),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}__webpack_unused_export__=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 458:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



if (true) {
  module.exports = __webpack_require__(53);
} else {}


/***/ }),

/***/ 899:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__899__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ renderTree; }
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(458);
// EXTERNAL MODULE: ../huxy/utils/isArray.js + 1 modules
var isArray = __webpack_require__(805);
;// CONCATENATED MODULE: ../huxy/utils/isValidArr.js

const isValidArr = (value) => (0,isArray/* default */.Z)(value) && !!value.length;
/* harmony default export */ var utils_isValidArr = (isValidArr);

;// CONCATENATED MODULE: ../huxy/components/renderTree/index.jsx


const DefLink = ({ to, preventDefault, stopPropagation, ...rest }) => preventDefault ? /* @__PURE__ */ (0,jsx_runtime.jsx)("span", { ...rest }) : /* @__PURE__ */ (0,jsx_runtime.jsx)("a", { href: to, ...rest });
const DefList = ({ item, ...rest }) => /* @__PURE__ */ (0,jsx_runtime.jsx)("ul", { ...rest });
const fixEvents = (events, ...params) => {
  const newEvent = {};
  Object.keys(events).filter(Boolean).map((key) => {
    newEvent[key] = (e) => events[key](e, ...params);
  });
  return newEvent;
};
const render = ({ data = [], events = {}, List = DefList, Link = DefLink, leftIcon, rightIcon, isHorizontal, isCollapsed, level = 0, parentOpen = true }) => {
  const hasTitle = isCollapsed && !level;
  const hideChild = !isHorizontal && !isCollapsed && !parentOpen;
  return data.map((item) => {
    var _a;
    const { name, path, icon, rightIcon: rIcon, active, open, children, linkProps } = item;
    const hasChildren = utils_isValidArr(children);
    const key = item.id || path || name;
    const title = hasTitle ? (_a = item.title) != null ? _a : name : void 0;
    const hidden = hideChild ? "hidden" : "";
    const li = icon != null ? icon : leftIcon;
    const ri = rIcon != null ? rIcon : rightIcon;
    const leftIconEle = li ? /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "node-left-icon", children: li === true ? /* @__PURE__ */ (0,jsx_runtime.jsx)("i", { className: "default-left-icon" }) : li }) : null;
    const nameEle = name ? /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "node-text", children: /* @__PURE__ */ (0,jsx_runtime.jsx)("span", { children: name }) }) : null;
    if (hasChildren) {
      const fixedEvents = fixEvents(events, item, level);
      const cls = [hidden, open ? "open" : ""].filter(Boolean).join(" ");
      return /* @__PURE__ */ (0,jsx_runtime.jsxs)("li", { className: cls, "has-children": "true", ...fixedEvents, children: [
        /* @__PURE__ */ (0,jsx_runtime.jsxs)(Link, { title, className: `link${active ? " active" : ""}`, to: path, preventDefault: true, stopPropagation: false, ...linkProps, children: [
          leftIconEle,
          nameEle,
          ri ? /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "node-right-icon", children: ri === true ? /* @__PURE__ */ (0,jsx_runtime.jsx)("i", { className: "default-right-icon" }) : ri }) : null
        ] }),
        /* @__PURE__ */ (0,jsx_runtime.jsx)(List, { item, children: render({ data: children, events, List, Link, leftIcon, rightIcon, isHorizontal, isCollapsed, level: level + 1, parentOpen: !!open }) })
      ] }, key);
    }
    return /* @__PURE__ */ (0,jsx_runtime.jsx)("li", { className: hidden, children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(Link, { title, className: `link${active ? " active" : ""}`, to: path, ...linkProps, children: [
      leftIconEle,
      nameEle
    ] }) }, key);
  });
};
/* harmony default export */ var renderTree = (render);

}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});