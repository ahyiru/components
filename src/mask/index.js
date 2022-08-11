(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("react-dom")) : factory(root["React"], root["ReactDOM"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE__687__, __WEBPACK_EXTERNAL_MODULE__994__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 409:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(994);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);


const Index = _ref => {
  let {
    children,
    mountNode = document.body
  } = _ref;
  return /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_0__.createPortal)(children, mountNode);
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

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
var f=__webpack_require__(687),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}__webpack_unused_export__=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 458:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



if (true) {
  module.exports = __webpack_require__(53);
} else {}


/***/ }),

/***/ 687:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__687__;

/***/ }),

/***/ 994:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__994__;

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
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
  "default": function() { return /* binding */ components_mask; }
});

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@babel+runtime@7.18.9/node_modules/@babel/runtime/helpers/esm/defineProperty.js
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
// EXTERNAL MODULE: ../huxy/components/portal/index.jsx
var portal = __webpack_require__(409);
// EXTERNAL MODULE: external {"root":"React","commonjs":"react","commonjs2":"react","amd":"react"}
var external_root_React_commonjs_react_commonjs2_react_amd_react_ = __webpack_require__(687);
;// CONCATENATED MODULE: ../huxy/use/useFirstMounted/index.jsx


const useFirstMounted = () => {
  const isFirst = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useRef)(true);

  if (isFirst.current) {
    isFirst.current = false;
    return true;
  }

  return false;
};

/* harmony default export */ var use_useFirstMounted = (useFirstMounted);
;// CONCATENATED MODULE: ../huxy/use/useUpdateEffect/index.jsx



const useUpdateEffect = function (effect) {
  let deps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  const isFirst = use_useFirstMounted();
  (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useEffect)(() => {
    if (!isFirst) {
      return effect();
    }
  }, deps);
};

/* harmony default export */ var use_useUpdateEffect = (useUpdateEffect);
;// CONCATENATED MODULE: ../huxy/use/useDelayState/index.jsx



const useDelayState = function (state) {
  let delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 450;
  const [delayState, setDelayState] = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useState)(state);
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

/* harmony default export */ var use_useDelayState = (useDelayState);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(458);
;// CONCATENATED MODULE: ../huxy/components/mask/index.jsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





const wrapper = {
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 9999
};
const mask = {
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  background: 'rgba(0, 0, 0, 0.5)',
  zIndex: 100000
};
const container = {
  position: 'relative',
  zIndex: 100001,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const Mask = _ref => {
  let {
    open,
    close,
    delay = 300,
    children,
    mountNode,
    hasMask = true,
    style,
    className = 'mask'
  } = _ref;
  const [delayOpen] = use_useDelayState(open, delay);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(portal["default"], {
    mountNode: mountNode,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      children: delayOpen ? /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: className,
        style: wrapper,
        children: [hasMask ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          style: mask,
          onClick: close
        }) : null, /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          style: _objectSpread(_objectSpread({}, container), style),
          children: children
        })]
      }) : null
    })
  });
};

/* harmony default export */ var components_mask = (Mask);
}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});