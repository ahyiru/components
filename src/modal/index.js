(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define("components", ["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["components"] = factory(require("react"), require("react-dom"));
	else
		root["components"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__899__, __WEBPACK_EXTERNAL_MODULE__994__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 785:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ components_mask; }
});

// EXTERNAL MODULE: ../huxy/components/portal/index.jsx
var portal = __webpack_require__(280);
// EXTERNAL MODULE: external {"root":"React","commonjs":"react","commonjs2":"react","amd":"react"}
var external_root_React_commonjs_react_commonjs2_react_amd_react_ = __webpack_require__(899);
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
// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(322);
;// CONCATENATED MODULE: ../huxy/components/mask/index.jsx




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
    mountNode
  } = _ref;
  const [delayOpen] = use_useDelayState(open, delay);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(portal["default"], {
    mountNode: mountNode,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      children: delayOpen ? /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        style: wrapper,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          style: mask,
          onClick: close
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          style: container,
          children: children
        })]
      }) : null
    })
  });
};

/* harmony default export */ var components_mask = (Mask);

/***/ }),

/***/ 280:
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

/***/ 837:
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

/***/ 322:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



if (true) {
  module.exports = __webpack_require__(837);
} else {}


/***/ }),

/***/ 899:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__899__;

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ components_modal; }
});

// EXTERNAL MODULE: ../huxy/components/mask/index.jsx + 3 modules
var mask = __webpack_require__(785);
;// CONCATENATED MODULE: ../huxy/components/modal/index.less
// extracted by mini-css-extract-plugin
/* harmony default export */ var modal = ({});
// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(322);
;// CONCATENATED MODULE: ../huxy/components/modal/index.jsx





const Modal = _ref => {
  let {
    open,
    cancel,
    cancelText = '取消',
    submit,
    submitText = '确定',
    title = 'Modal 弹窗',
    className,
    children,
    delay = 0
  } = _ref;
  const cls = ['modal-wrap', open ? 'open' : '', className].filter(Boolean).join(' ');
  return /*#__PURE__*/(0,jsx_runtime.jsx)(mask["default"], {
    open: open,
    close: cancel,
    delay: delay,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: cls,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "modal-container",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "modal-header",
          children: title
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "modal-content",
          children: children
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "modal-footer",
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "btn left",
            onClick: e => cancel == null ? void 0 : cancel(),
            children: cancelText
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "btn right",
            onClick: e => submit == null ? void 0 : submit(),
            children: submitText
          })]
        })]
      })
    })
  });
};

/* harmony default export */ var components_modal = (Modal);
}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});