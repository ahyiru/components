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
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}__webpack_unused_export__=l;exports.jsx=q;__webpack_unused_export__=q;


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
  "default": function() { return /* binding */ col; }
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
;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
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
;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
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
// EXTERNAL MODULE: external {"root":"React","commonjs":"react","commonjs2":"react","amd":"react"}
var external_root_React_commonjs_react_commonjs2_react_amd_react_ = __webpack_require__(899);
// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(322);
;// CONCATENATED MODULE: ../huxy/components/col/index.jsx


const _excluded = ["span", "offset", "xl", "lg", "md", "sm", "xs", "style", "width", "auto", "offsetWidth", "className"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




const getCls = (type, size) => {
  let sp = '',
      os = '';

  if (typeof size === 'number') {
    sp = `col-${type}-${size}`;
  }

  if (typeof size === 'object') {
    const {
      span,
      offset
    } = size;
    sp = span ? `col-${type}-${span}` : ``;
    os = offset ? `offset-${type}-${offset}` : ``;
  }

  return {
    sp,
    os
  };
};

const Col = /*#__PURE__*/(0,external_root_React_commonjs_react_commonjs2_react_amd_react_.forwardRef)((_ref, ref) => {
  let {
    span,
    offset,
    xl,
    lg,
    md,
    sm,
    xs,
    style,
    width,
    auto,
    offsetWidth = '0px',
    className
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  const defCls = className ? ` ${className}` : '';
  const sp = `col-${span || 12}`;
  const os = offset ? `offset-${offset}` : '';
  const {
    sp: xs_sp,
    os: xs_os
  } = getCls('xs', xs);
  const {
    sp: sm_sp,
    os: sm_os
  } = getCls('sm', sm);
  const {
    sp: md_sp,
    os: md_os
  } = getCls('md', md);
  const {
    sp: lg_sp,
    os: lg_os
  } = getCls('lg', lg);
  const {
    sp: xl_sp,
    os: xl_os
  } = getCls('xl', xl);
  const cls = [sp, xl_sp, lg_sp, md_sp, sm_sp, xs_sp, os, xl_os, lg_os, md_os, sm_os, xs_os].filter(Boolean).join(' ');
  const autoStyle = auto ? {
    width: 'auto',
    flex: 1,
    //'auto',
    maxWidth: `calc(100% - ${offsetWidth})`
  } : {
    width
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", _objectSpread(_objectSpread({
    className: `${cls}${defCls}`
  }, rest), {}, {
    style: _objectSpread(_objectSpread({}, autoStyle), style),
    ref: ref
  }));
});
/* harmony default export */ var col = (Col);
}();
/******/ 	return __webpack_exports__;
/******/ })()
;
});