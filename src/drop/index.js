(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("react-dom")) : factory(root["React"], root["ReactDOM"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE__899__, __WEBPACK_EXTERNAL_MODULE__994__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(703);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(414);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@keyframes animate-drop-in {\n  0% {\n    opacity: 0;\n    transform: translate3d(0, -30px, 0);\n  }\n  100% {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes animate-drop-out {\n  0% {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n  100% {\n    opacity: 0;\n    transform: translate3d(0, -30px, 0);\n  }\n}\n.TEYHV {\n  position: relative;\n  overflow: hidden;\n  cursor: pointer;\n  zoom: 1;\n}\n.TEYHV::after {\n  clear: both;\n  content: \"\";\n  display: block;\n  height: 0;\n  visibility: hidden;\n}\n.NCYpg {\n  position: fixed !important;\n  z-index: 10001;\n  opacity: 0;\n  min-width: 100px;\n  min-height: 50px;\n  border-radius: 4px;\n  background: #ffffff;\n  border: 1px solid #f0f0f0;\n  transform: translate3d(0, -30px, 0);\n}\n.NCYpg {\n  animation: animate-drop-out 0.25s forwards;\n}\n.NCYpg.qjBWI {\n  animation: animate-drop-in 0.25s forwards;\n}\n.huxy-drop-arrow-lt {\n  position: relative;\n  background: #ffffff;\n  border: 1px solid #f0f0f0;\n}\n.huxy-drop-arrow-lt::before,\n.huxy-drop-arrow-lt::after {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 0;\n  border: solid transparent;\n}\n.huxy-drop-arrow-lt::before {\n  border-width: 6px;\n}\n.huxy-drop-arrow-lt::after {\n  border-width: 5px;\n}\n.huxy-drop-arrow-lt::before,\n.huxy-drop-arrow-lt::after {\n  top: auto;\n  bottom: 100%;\n}\n.huxy-drop-arrow-lt::before {\n  left: 10px;\n  border-bottom-color: #f0f0f0;\n}\n.huxy-drop-arrow-lt::after {\n  left: calc(10px + 1px);\n  border-bottom-color: #ffffff;\n}\n.huxy-drop-arrow-rt {\n  position: relative;\n  background: #ffffff;\n  border: 1px solid #f0f0f0;\n}\n.huxy-drop-arrow-rt::before,\n.huxy-drop-arrow-rt::after {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 0;\n  border: solid transparent;\n}\n.huxy-drop-arrow-rt::before {\n  border-width: 6px;\n}\n.huxy-drop-arrow-rt::after {\n  border-width: 5px;\n}\n.huxy-drop-arrow-rt::before,\n.huxy-drop-arrow-rt::after {\n  left: auto;\n  top: auto;\n  bottom: 100%;\n}\n.huxy-drop-arrow-rt::before {\n  right: 10px;\n  border-bottom-color: #f0f0f0;\n}\n.huxy-drop-arrow-rt::after {\n  right: calc(10px + 1px);\n  border-bottom-color: #ffffff;\n}\n.huxy-drop-arrow-lb {\n  position: relative;\n  background: #ffffff;\n  border: 1px solid #f0f0f0;\n}\n.huxy-drop-arrow-lb::before,\n.huxy-drop-arrow-lb::after {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 0;\n  border: solid transparent;\n}\n.huxy-drop-arrow-lb::before {\n  border-width: 6px;\n}\n.huxy-drop-arrow-lb::after {\n  border-width: 5px;\n}\n.huxy-drop-arrow-lb::before,\n.huxy-drop-arrow-lb::after {\n  bottom: auto;\n  top: 100%;\n  border-top-color: #f0f0f0;\n}\n.huxy-drop-arrow-lb::before {\n  left: 10px;\n}\n.huxy-drop-arrow-lb::after {\n  left: calc(10px + 1px);\n  border-top-color: #ffffff;\n}\n.huxy-drop-arrow-rb {\n  position: relative;\n  background: #ffffff;\n  border: 1px solid #f0f0f0;\n}\n.huxy-drop-arrow-rb::before,\n.huxy-drop-arrow-rb::after {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 0;\n  border: solid transparent;\n}\n.huxy-drop-arrow-rb::before {\n  border-width: 6px;\n}\n.huxy-drop-arrow-rb::after {\n  border-width: 5px;\n}\n.huxy-drop-arrow-rb::before,\n.huxy-drop-arrow-rb::after {\n  bottom: auto;\n  top: 100%;\n}\n.huxy-drop-arrow-rb::before {\n  right: 10px;\n  border-top-color: #f0f0f0;\n}\n.huxy-drop-arrow-rb::after {\n  right: calc(10px + 1px);\n  border-top-color: #ffffff;\n}\n.huxy-drop-arrow-tl {\n  position: relative;\n  background: #ffffff;\n  border: 1px solid #f0f0f0;\n}\n.huxy-drop-arrow-tl::before,\n.huxy-drop-arrow-tl::after {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 0;\n  border: solid transparent;\n}\n.huxy-drop-arrow-tl::before {\n  border-width: 6px;\n}\n.huxy-drop-arrow-tl::after {\n  border-width: 5px;\n}\n.huxy-drop-arrow-tl::before,\n.huxy-drop-arrow-tl::after {\n  left: auto;\n  right: 100%;\n}\n.huxy-drop-arrow-tl::before {\n  top: 10px;\n  border-right-color: #f0f0f0;\n}\n.huxy-drop-arrow-tl::after {\n  top: calc(10px + 1px);\n  border-right-color: #ffffff;\n}\n.huxy-drop-arrow-tr {\n  position: relative;\n  background: #ffffff;\n  border: 1px solid #f0f0f0;\n}\n.huxy-drop-arrow-tr::before,\n.huxy-drop-arrow-tr::after {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 0;\n  border: solid transparent;\n}\n.huxy-drop-arrow-tr::before {\n  border-width: 6px;\n}\n.huxy-drop-arrow-tr::after {\n  border-width: 5px;\n}\n.huxy-drop-arrow-tr::before,\n.huxy-drop-arrow-tr::after {\n  right: auto;\n  left: 100%;\n}\n.huxy-drop-arrow-tr::before {\n  top: 10px;\n  border-left-color: #f0f0f0;\n}\n.huxy-drop-arrow-tr::after {\n  top: calc(10px + 1px);\n  border-left-color: #ffffff;\n}\n.huxy-drop-arrow-bl {\n  position: relative;\n  background: #ffffff;\n  border: 1px solid #f0f0f0;\n}\n.huxy-drop-arrow-bl::before,\n.huxy-drop-arrow-bl::after {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 0;\n  border: solid transparent;\n}\n.huxy-drop-arrow-bl::before {\n  border-width: 6px;\n}\n.huxy-drop-arrow-bl::after {\n  border-width: 5px;\n}\n.huxy-drop-arrow-bl::before,\n.huxy-drop-arrow-bl::after {\n  left: auto;\n  right: 100%;\n}\n.huxy-drop-arrow-bl::before {\n  bottom: 10px;\n  border-right-color: #f0f0f0;\n}\n.huxy-drop-arrow-bl::after {\n  bottom: calc(10px + 1px);\n  border-right-color: #ffffff;\n}\n.huxy-drop-arrow-br {\n  position: relative;\n  background: #ffffff;\n  border: 1px solid #f0f0f0;\n}\n.huxy-drop-arrow-br::before,\n.huxy-drop-arrow-br::after {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 0;\n  border: solid transparent;\n}\n.huxy-drop-arrow-br::before {\n  border-width: 6px;\n}\n.huxy-drop-arrow-br::after {\n  border-width: 5px;\n}\n.huxy-drop-arrow-br::before,\n.huxy-drop-arrow-br::after {\n  right: auto;\n  left: 100%;\n}\n.huxy-drop-arrow-br::before {\n  bottom: 10px;\n  border-left-color: #f0f0f0;\n}\n.huxy-drop-arrow-br::after {\n  bottom: calc(10px + 1px);\n  border-left-color: #ffffff;\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"drop-target": "TEYHV",
	"drop-wrap": "NCYpg",
	"open": "qjBWI"
};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 414:
/***/ (function(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 703:
/***/ (function(module) {



module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 116:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(994);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);

const Portal = ({ children, mountNode = document.body }) => (0,react_dom__WEBPACK_IMPORTED_MODULE_0__.createPortal)(children, mountNode);
/* harmony default export */ __webpack_exports__["default"] = (Portal);


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

/***/ 748:
/***/ (function(module) {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 736:
/***/ (function(module) {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ 706:
/***/ (function(module) {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ 567:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 306:
/***/ (function(module) {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ 62:
/***/ (function(module) {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	!function() {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ huxy_components_drop; }
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(458);
// EXTERNAL MODULE: external {"root":"React","commonjs":"react","commonjs2":"react","amd":"react"}
var external_root_React_commonjs_react_commonjs2_react_amd_react_ = __webpack_require__(899);
;// CONCATENATED MODULE: ../huxy/utils/hasProp.js
const hasProp = (obj, prop) => Object.prototype.hasOwnProperty.call(obj != null ? obj : {}, prop);
/* harmony default export */ var utils_hasProp = (hasProp);

;// CONCATENATED MODULE: ../huxy/utils/isRef.js

const isRef = (ref) => utils_hasProp(ref, "current");
/* harmony default export */ var utils_isRef = (isRef);

;// CONCATENATED MODULE: ../huxy/use/useClickAway/index.jsx


const useClickAway = (elRef, handleEvent, events = "click") => {
  (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useEffect)(() => {
    const handler = (event) => {
      const el = utils_isRef(elRef) ? elRef.current : elRef;
      if ((el == null ? void 0 : el.contains) && !el.contains(event.target)) {
        handleEvent(event);
      }
    };
    const evts = typeof events === "string" ? [events] : events;
    evts.map((evt) => {
      document.addEventListener(evt, handler, false);
    });
    return () => {
      evts.map((evt) => {
        document.removeEventListener(evt, handler, false);
      });
    };
  }, [elRef, handleEvent, events]);
};
/* harmony default export */ var use_useClickAway = (useClickAway);

;// CONCATENATED MODULE: ../huxy/utils/isReactEle.js
const isReactEle = (value) => (value == null ? void 0 : value["$$typeof"]) && typeof value["$$typeof"] === "symbol" && value["$$typeof"]["description"] === "react.element";
/* harmony default export */ var utils_isReactEle = (isReactEle);

;// CONCATENATED MODULE: ../huxy/utils/firstUpper.js
const firstUpper = (str = "") => str.replace(/^\S/, (s) => s.toUpperCase());
/* harmony default export */ var utils_firstUpper = (firstUpper);

;// CONCATENATED MODULE: ../huxy/utils/debounce.js
const debounce = (func = () => {
}, delay = 60) => {
  let timer = null;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
};
/* harmony default export */ var utils_debounce = (debounce);

;// CONCATENATED MODULE: ../huxy/utils/isBrowser.js
const isBrowser = () => ![typeof window, typeof document].includes("undefined");
/* harmony default export */ var utils_isBrowser = (isBrowser);

;// CONCATENATED MODULE: ../huxy/utils/getType.js
const getType = (value) => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
/* harmony default export */ var utils_getType = (getType);

;// CONCATENATED MODULE: ../huxy/utils/isElement.js

const isElement = (value) => utils_getType(value).indexOf("element") > -1;
/* harmony default export */ var utils_isElement = (isElement);

;// CONCATENATED MODULE: ../huxy/utils/getViewportSize.js


const getViewportSize = (element = null) => {
  var _a, _b;
  if (!utils_isBrowser()) {
    return {
      width: 0,
      height: 0
    };
  }
  if (utils_isElement(element)) {
    return {
      width: element.clientWidth,
      height: element.clientHeight
    };
  }
  return {
    width: (_a = window.innerWidth) != null ? _a : document.documentElement.clientWidth,
    height: (_b = window.innerHeight) != null ? _b : document.documentElement.clientHeight
  };
};
/* harmony default export */ var utils_getViewportSize = (getViewportSize);

;// CONCATENATED MODULE: ../huxy/utils/getPosition.js


const getPosition = (ele) => {
  var _a;
  if (!utils_isBrowser()) {
    return;
  }
  ele = utils_isRef(ele) ? ele.current : ele != null ? ele : document.body;
  return (_a = ele.getBoundingClientRect) == null ? void 0 : _a.call(ele);
};
/* harmony default export */ var utils_getPosition = (getPosition);

;// CONCATENATED MODULE: ../huxy/utils/str2Html.js

const str2Html = (str) => {
  if (!utils_isBrowser()) {
    return;
  }
  const templ = document.createElement("div");
  templ.innerHTML = str;
  const ele = templ.children[0];
  return ele;
};
/* harmony default export */ var utils_str2Html = (str2Html);

;// CONCATENATED MODULE: ../huxy/utils/setStyle.js

const setStyle = (ele, styles = {}, reset = false) => {
  if (!utils_isElement(ele)) {
    return;
  }
  Object.keys(styles).map((key) => {
    ele.style.setProperty(key, reset ? "" : styles[key]);
  });
};
/* harmony default export */ var utils_setStyle = (setStyle);

;// CONCATENATED MODULE: ../huxy/utils/sleep.js
const sleep = (ms = 350) => new Promise((resolve) => setTimeout(resolve, ms));
const sleepSync = (ms = 100) => {
  const start = Date.now();
  while (Date.now() - start <= ms) {
  }
};
/* harmony default export */ var utils_sleep = (sleep);

;// CONCATENATED MODULE: ../huxy/utils/getElementsSize.js







const getElementsSize = async (ele, delay = 15) => {
  if (!utils_isBrowser()) {
    return;
  }
  if (typeof ele === "string") {
    ele = utils_str2Html(ele);
  }
  ele = utils_isRef(ele) ? ele.current : ele;
  if (!utils_isElement(ele)) {
    return {};
  }
  const shadow = ele.cloneNode(true);
  utils_setStyle(shadow, { "pointer-events": "none", "z-index": -1, opacity: 0, display: "block", animation: "none" });
  ele.parentNode.appendChild(shadow);
  await utils_sleep(delay);
  const info = utils_getPosition(shadow);
  ele.parentNode.removeChild(shadow);
  return info;
};
/* harmony default export */ var utils_getElementsSize = (getElementsSize);

;// CONCATENATED MODULE: ../huxy/utils/dropInfo.js





const reg = /(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/;
const classReg = /huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/;
const setDirectionCls = (showEle, direction) => {
  var _a;
  direction = `huxy-drop-arrow-${direction}`;
  const cls = (_a = showEle.getAttribute("class")) != null ? _a : "";
  if (reg.test(cls)) {
    showEle.setAttribute("class", cls.replace(classReg, direction));
  } else {
    showEle.setAttribute("class", `${cls} ${direction}`);
  }
};
const setPosition = async (triggerEle, showEle, type) => {
  const { left, right, top, bottom } = utils_getPosition(triggerEle);
  const { width, height } = utils_getViewportSize();
  const { width: sWidth, height: sHeight } = await utils_getElementsSize(showEle);
  if (right < 0 || bottom < 0 || left > width || top > height) {
    return {};
  }
  if (type === "vertical") {
    const style = {
      left: left + "px",
      top: bottom + 10 + "px",
      right: "auto",
      bottom: "auto"
    };
    let direction = "lt";
    if (left + sWidth > width) {
      style.left = right - sWidth + "px";
      direction = "rt";
    }
    if (bottom + 10 + sHeight > height) {
      style.top = top - 10 - sHeight + "px";
      direction = direction === "lt" ? "lb" : "rb";
    }
    utils_setStyle(showEle, style);
    setDirectionCls(showEle, direction);
  } else {
    const style = {
      left: right + 10 + "px",
      top: top + "px",
      right: "auto",
      bottom: "auto"
    };
    let direction = "tl";
    if (right + 10 + sWidth > width) {
      style.left = left - 10 - sWidth + "px";
      direction = "tr";
    }
    if (top + sHeight > height) {
      style.top = bottom - sHeight + "px";
      direction = direction === "tl" ? "bl" : "br";
    }
    utils_setStyle(showEle, style);
    setDirectionCls(showEle, direction);
  }
};
const dropInfo = (triggerEle, showEle, type = "horizontal") => {
  const debounced = utils_debounce(setPosition);
  const listener = () => debounced(triggerEle, showEle, type);
  window.addEventListener("scroll", listener, false);
  window.addEventListener("resize", listener, false);
  const destroyFn = () => {
    window.removeEventListener("scroll", listener);
    window.removeEventListener("resize", listener);
    utils_setStyle(showEle, { left: "", top: "", right: "", bottom: "" });
  };
  setPosition(triggerEle, showEle, type);
  return destroyFn;
};
/* harmony default export */ var utils_dropInfo = (dropInfo);

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


const useUpdateEffect = (effect, deps = []) => {
  const isFirst = use_useFirstMounted();
  (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useEffect)(() => {
    if (!isFirst) {
      return effect();
    }
  }, deps);
};
/* harmony default export */ var use_useUpdateEffect = (useUpdateEffect);

;// CONCATENATED MODULE: ../huxy/use/useDelayState/index.jsx


const useDelayState = (state, delay = 450) => {
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

// EXTERNAL MODULE: ../huxy/components/portal/index.jsx
var portal = __webpack_require__(116);
;// CONCATENATED MODULE: ../huxy/components/drop/mask.jsx



const Mask = ({ open, delay = 250, children, mountNode, style, className = "huxy-mask" }) => {
  const [delayOpen] = use_useDelayState(open, delay);
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(portal["default"], { mountNode, children: /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className, children: /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { style: { ...style, display: delayOpen ? "block" : "none" }, children }) }) }) });
};
/* harmony default export */ var mask = (Mask);

// EXTERNAL MODULE: ../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(748);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(306);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(736);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(567);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(706);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(62);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../node_modules/.pnpm/less-loader@11.1.0_less@4.1.3+webpack@5.75.0/node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../huxy/components/drop/index.less
var drop = __webpack_require__(563);
;// CONCATENATED MODULE: ../huxy/components/drop/index.less

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(drop/* default */.Z, options);




       /* harmony default export */ var components_drop = (drop/* default */.Z && drop/* default.locals */.Z.locals ? drop/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ../huxy/components/drop/index.jsx








const Drop = ({ trigger = "click", type, dropList, className, children, ...rest }) => {
  const [open, setOpen] = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useState)(false);
  const targetRef = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useRef)();
  const dropRef = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useRef)();
  const destroyFn = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useRef)();
  use_useClickAway(targetRef, (e) => open && setOpen(false), [.../* @__PURE__ */ new Set(["click", trigger.toLowerCase()])]);
  (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useEffect)(() => {
    return () => {
      var _a;
      return (_a = destroyFn.current) == null ? void 0 : _a.call(destroyFn);
    };
  }, []);
  const handler = (e) => {
    e.preventDefault();
    setOpen(true);
    destroyFn.current = utils_dropInfo(targetRef.current, dropRef.current, type);
  };
  const events = {
    [`on${utils_firstUpper(trigger)}`]: handler
  };
  const cls = ["drop-wrap", open ? "open" : ""].filter(Boolean).map((c) => components_drop[c]).join(" ");
  const droplistEle = utils_isReactEle(dropList) ? dropList : dropList == null ? void 0 : dropList(() => setOpen(false), open);
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)("span", { ref: targetRef, className: `${components_drop["drop-target"]}${className ? ` ${className}` : ""}`, ...events, ...rest, children: [
    children,
    /* @__PURE__ */ (0,jsx_runtime.jsx)(mask, { open, className: "huxy-drop", children: /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { ref: dropRef, className: cls, children: droplistEle }) })
  ] });
};
/* harmony default export */ var huxy_components_drop = (Drop);

}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});