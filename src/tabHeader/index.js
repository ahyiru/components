(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define("components", ["react"], factory);
	else if(typeof exports === 'object')
		exports["components"] = factory(require("react"));
	else
		root["components"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__899__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
  "default": function() { return /* binding */ components_tabHeader; }
});

;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/defineProperty.js
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
// EXTERNAL MODULE: external {"root":"React","commonjs":"react","commonjs2":"react","amd":"react"}
var external_root_React_commonjs_react_commonjs2_react_amd_react_ = __webpack_require__(899);
;// CONCATENATED MODULE: ../huxy/utils/isBrowser.js
const isBrowser = () => ![typeof window, typeof document].includes('undefined');

/* harmony default export */ var utils_isBrowser = (isBrowser);
;// CONCATENATED MODULE: ../huxy/utils/getPosition.js


const getPosition = function () {
  var _ele$getBoundingClien;

  let ele = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : utils_isBrowser() && document.body;
  return ele == null ? void 0 : (_ele$getBoundingClien = ele.getBoundingClientRect) == null ? void 0 : _ele$getBoundingClien.call(ele);
};

/* harmony default export */ var utils_getPosition = (getPosition);
;// CONCATENATED MODULE: ../huxy/components/tabHeader/index.less
// extracted by mini-css-extract-plugin
/* harmony default export */ var tabHeader = ({});
// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(322);
;// CONCATENATED MODULE: ../huxy/components/tabHeader/index.jsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }







const renderTabs = value => /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
  style: {
    padding: '6px 15px'
  },
  children: value
});

const Index = (_ref, ref) => {
  var _tabs$;

  let {
    activekey,
    tabs = [],
    switchTab,
    trackColor,
    flex
  } = _ref;
  const [active, setActive] = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useState)(activekey || ((_tabs$ = tabs[0]) == null ? void 0 : _tabs$.key));
  const [pos, setPos] = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useState)({});
  const listRef = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useRef)({});
  const trackRef = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useRef)();
  (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useEffect)(() => {
    const activeItem = listRef.current[active];
    activeItem && setTrackPos(activeItem);
  }, []);

  const setTrackPos = ele => {
    const {
      left,
      width
    } = utils_getPosition(ele);
    const trackLeft = utils_getPosition(trackRef.current).left;
    setPos({
      left: left - trackLeft,
      width
    });
  };

  const onChange = (e, key) => {
    e.stopPropagation();
    setActive(key);

    if (typeof switchTab === 'function') {
      switchTab(key);
    } // track position


    setTrackPos(e.currentTarget);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: "tabs-header-wrap",
    ref: ref,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("ul", {
      className: `tabs-header${flex ? ' flex' : ''}`,
      ref: trackRef,
      children: tabs.map(v => /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
        ref: el => listRef.current[v.key] = el,
        className: `th-item${active === v.key ? ' active' : ''}`,
        onClick: e => onChange(e, v.key),
        children: typeof v.renderTabs === 'function' ? v.renderTabs(v, active === v.key) : renderTabs(v.value)
      }, v.key))
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "th-track",
      style: _objectSpread(_objectSpread({}, pos), {}, {
        color: trackColor
      })
    })]
  });
};

/* harmony default export */ var components_tabHeader = (/*#__PURE__*/(0,external_root_React_commonjs_react_commonjs2_react_amd_react_.forwardRef)(Index));
}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});