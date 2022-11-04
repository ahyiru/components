(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE__3899__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 4914:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ utils_isArray; }
});

;// CONCATENATED MODULE: ../huxy/utils/getType.js
const getType = value => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
/* harmony default export */ var utils_getType = (getType);
;// CONCATENATED MODULE: ../huxy/utils/isArray.js

const isArray = value => utils_getType(value) === 'array';
/* harmony default export */ var utils_isArray = (isArray);

/***/ }),

/***/ 6053:
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
var f=__webpack_require__(3899),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}__webpack_unused_export__=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 7458:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



if (true) {
  module.exports = __webpack_require__(6053);
} else {}


/***/ }),

/***/ 3899:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3899__;

/***/ }),

/***/ 537:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

/***/ }),

/***/ 149:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _objectWithoutProperties; }
/* harmony export */ });
/* harmony import */ var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5498);

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = (0,_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

/***/ }),

/***/ 5498:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _objectWithoutPropertiesLoose; }
/* harmony export */ });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

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

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.20.1/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(537);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.20.1/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(149);
// EXTERNAL MODULE: ../huxy/utils/isArray.js + 1 modules
var isArray = __webpack_require__(4914);
;// CONCATENATED MODULE: ../huxy/utils/isValidArr.js

const isValidArr = value => (0,isArray/* default */.Z)(value) && !!value.length;
/* harmony default export */ var utils_isValidArr = (isValidArr);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7458);
;// CONCATENATED MODULE: ../huxy/components/renderTree/index.jsx


const _excluded = ["to", "preventDefault", "stopPropagation"],
  _excluded2 = ["item"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



const DefLink = _ref => {
  let {
      to,
      preventDefault,
      stopPropagation
    } = _ref,
    rest = (0,objectWithoutProperties/* default */.Z)(_ref, _excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("a", _objectSpread({
    href: preventDefault ? null : to
  }, rest));
};
const DefList = _ref2 => {
  let {
      item
    } = _ref2,
    rest = (0,objectWithoutProperties/* default */.Z)(_ref2, _excluded2);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("ul", _objectSpread({}, rest));
};
const fixEvents = function (events) {
  for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    params[_key - 1] = arguments[_key];
  }
  const newEvent = {};
  Object.keys(events).filter(Boolean).map(key => {
    newEvent[key] = e => events[key](e, ...params);
  });
  return newEvent;
};
const render = _ref3 => {
  let {
    data = [],
    events = {},
    Link = DefLink,
    List = DefList,
    leftIcon,
    rightIcon,
    level = 0
  } = _ref3;
  return data.map(item => {
    const {
      name,
      path,
      icon,
      rightIcon: rIcon,
      active,
      open,
      children,
      linkProps
    } = item;
    const hasChildren = utils_isValidArr(children);
    const fixedEvents = fixEvents(events, item, hasChildren, level);
    const key = item.id || path || name;
    const li = icon != null ? icon : leftIcon;
    const ri = rIcon != null ? rIcon : rightIcon;
    if (hasChildren) {
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("li", _objectSpread(_objectSpread({
        className: open ? 'open' : '',
        "has-children": "true"
      }, fixedEvents), {}, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Link, _objectSpread(_objectSpread({
          className: active ? 'active' : '',
          to: path,
          preventDefault: true,
          stopPropagation: false
        }, linkProps), {}, {
          children: [li ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "node-left-icon",
            children: li === true ? /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
              className: "default-left-icon"
            }) : li
          }) : null, name ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "node-text",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              children: name
            })
          }) : null, ri ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "node-right-icon",
            children: ri === true ? /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
              className: "default-right-icon"
            }) : ri
          }) : null]
        })), /*#__PURE__*/(0,jsx_runtime.jsx)(List, {
          item: item,
          children: render({
            data: children,
            events,
            Link,
            List,
            leftIcon,
            rightIcon,
            level: level + 1
          })
        })]
      }), key);
    }
    return /*#__PURE__*/(0,jsx_runtime.jsx)("li", _objectSpread(_objectSpread({}, fixedEvents), {}, {
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Link, _objectSpread(_objectSpread({
        className: active ? 'active' : '',
        to: path
      }, linkProps), {}, {
        children: [li ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "node-left-icon",
          children: li === true ? /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
            className: "default-left-icon"
          }) : li
        }) : null, name ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "node-text",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            children: name
          })
        }) : null]
      }))
    }), key);
  });
};
/* harmony default export */ var renderTree = (render);
}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});