import * as __WEBPACK_EXTERNAL_MODULE_react_dom_7dac9eee__ from "react-dom";
import * as __WEBPACK_EXTERNAL_MODULE_react__ from "react";
/******/ var __webpack_modules__ = ({

/***/ 3482:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   HM: () => (/* binding */ btn),
/* harmony export */   QN: () => (/* binding */ _2),
/* harmony export */   R8: () => (/* binding */ _1),
/* harmony export */   Y8: () => (/* binding */ _4),
/* harmony export */   ho: () => (/* binding */ open),
/* harmony export */   k3: () => (/* binding */ _3),
/* harmony export */   kb: () => (/* binding */ left),
/* harmony export */   pG: () => (/* binding */ right),
/* harmony export */   ww: () => (/* binding */ _5)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6758);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(935);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@keyframes animate-modal-in {
  0% {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
@keyframes animate-modal-out {
  0% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  100% {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
}
.SqXAN {
  position: fixed;
  background: #ffffff;
  border-radius: 12px;
  min-width: 333px;
  opacity: 0;
  transform: translate3d(0, -100%, 0);
}
.SqXAN {
  animation: animate-modal-out 0.25s forwards;
}
.SqXAN.S3vb_ {
  animation: animate-modal-in 0.25s forwards;
}
.RiDlb {
  position: relative;
}
.RiDlb .xdqLE {
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  color: #000000;
  padding: 20px 12px 0;
}
.RiDlb .C91AO {
  padding: 8px 12px 24px;
}
.RiDlb .J6dpF {
  height: 44px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-top: 1px solid #edeff2;
}
.RiDlb .J6dpF .XOnmm {
  font-weight: 500;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 50%;
  height: 100%;
}
.RiDlb .J6dpF .XOnmm.t1Fx9 {
  color: #666666;
  border-right: 1px solid #edeff2;
}
.RiDlb .J6dpF .XOnmm.YGj9K {
  color: #036dff;
}
`, ""]);
// Exports
var _1 = `SqXAN`;

var open = `S3vb_`;
var _2 = `RiDlb`;

var _3 = `xdqLE`;

var _4 = `C91AO`;

var _5 = `J6dpF`;

var btn = `XOnmm`;
var left = `t1Fx9`;
var right = `YGj9K`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 935:
/***/ ((module) => {



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

/***/ 6758:
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 2768:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_mask)
});

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(1085);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1649);
;// CONCATENATED MODULE: ../huxy/use/useFirstMounted/index.jsx

const useFirstMounted = () => {
  const isFirst = (0,external_react_.useRef)(true);
  if (isFirst.current) {
    isFirst.current = false;
    return true;
  }
  return false;
};
/* harmony default export */ const use_useFirstMounted = (useFirstMounted);

;// CONCATENATED MODULE: ../huxy/use/useUpdateEffect/index.jsx


const useUpdateEffect = (effect, deps = []) => {
  const isFirst = use_useFirstMounted();
  (0,external_react_.useEffect)(() => {
    if (!isFirst) {
      return effect();
    }
  }, deps);
};
/* harmony default export */ const use_useUpdateEffect = (useUpdateEffect);

;// CONCATENATED MODULE: ../huxy/use/useDelayState/index.jsx


const useDelayState = (state, delay = 450) => {
  const [delayState, setDelayState] = (0,external_react_.useState)(state);
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
/* harmony default export */ const use_useDelayState = (useDelayState);

// EXTERNAL MODULE: ../huxy/components/portal/index.jsx + 1 modules
var portal = __webpack_require__(2147);
;// CONCATENATED MODULE: ../huxy/components/mask/index.jsx




const wrapper = {
  position: "fixed",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999
};
const mask = {
  position: "fixed",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  background: "rgba(0, 0, 0, 0.5)",
  zIndex: 1e4
};
const body = document.body;
const changeOverflow = (mountNode, delayOpen) => (mountNode ?? body).style.overflow = delayOpen ? "hidden" : "";
const Mask = ({ open, close, delay = 300, children, mountNode, hasMask = true, style, className = "h-mask", relative }) => {
  const [delayOpen] = use_useDelayState(open, delay);
  changeOverflow(mountNode, delayOpen);
  const position = relative ? "absolute" : "fixed";
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(portal/* default */.A, { mountNode, children: /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { children: delayOpen ? /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className, style: { ...wrapper, position }, children: [
    hasMask ? /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { style: { ...mask, position }, onClick: (e) => close?.(e) }) : null,
    external_react_.Children.map(children, (child) => {
      if (!(0,external_react_.isValidElement)(child)) {
        return child;
      }
      return (0,external_react_.cloneElement)(child, {
        style: {
          position: "relative",
          zIndex: 100001,
          ...child.props.style
        }
      });
    })
  ] }) : null }) });
};
/* harmony default export */ const components_mask = (Mask);


/***/ }),

/***/ 2147:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ portal)
});

;// CONCATENATED MODULE: external "react-dom"
var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = (x) => (() => (x))
const external_react_dom_namespaceObject = x({ ["createPortal"]: () => (__WEBPACK_EXTERNAL_MODULE_react_dom_7dac9eee__.createPortal) });
;// CONCATENATED MODULE: ../huxy/components/portal/index.jsx

const Portal = ({ children, mountNode = document.body }) => (0,external_react_dom_namespaceObject.createPortal)(children, mountNode);
/* harmony default export */ const portal = (Portal);


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


/***/ }),

/***/ 2591:
/***/ ((module) => {



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

/***/ 8128:
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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

/***/ 3051:
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 855:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 1740:
/***/ ((module) => {



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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ 3656:
/***/ ((module) => {



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

/***/ 1649:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var x = (y) => {
	var x = {}; __webpack_require__.d(x, y); return x
} 
var y = (x) => (() => (x))
module.exports = x({ ["Children"]: () => (__WEBPACK_EXTERNAL_MODULE_react__.Children), ["cloneElement"]: () => (__WEBPACK_EXTERNAL_MODULE_react__.cloneElement), ["isValidElement"]: () => (__WEBPACK_EXTERNAL_MODULE_react__.isValidElement), ["useEffect"]: () => (__WEBPACK_EXTERNAL_MODULE_react__.useEffect), ["useRef"]: () => (__WEBPACK_EXTERNAL_MODULE_react__.useRef), ["useState"]: () => (__WEBPACK_EXTERNAL_MODULE_react__.useState) });

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
/******/ 		id: moduleId,
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
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
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
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/nonce */
/******/ (() => {
/******/ 	__webpack_require__.nc = undefined;
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ huxy_components_modal)
});

// NAMESPACE OBJECT: ../huxy/components/modal/index.less
var modal_namespaceObject = {};
__webpack_require__.r(modal_namespaceObject);
__webpack_require__.d(modal_namespaceObject, {
  btn: () => (modal/* btn */.HM),
  "default": () => (components_modal),
  left: () => (modal/* left */.kb),
  "modal-container": () => (modal/* modal-container */.QN),
  "modal-content": () => (modal/* modal-content */.Y8),
  "modal-footer": () => (modal/* modal-footer */.ww),
  "modal-header": () => (modal/* modal-header */.k3),
  "modal-wrap": () => (modal/* modal-wrap */.R8),
  open: () => (modal/* open */.ho),
  right: () => (modal/* right */.pG)
});

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(1085);
// EXTERNAL MODULE: ../huxy/components/mask/index.jsx + 3 modules
var mask = __webpack_require__(2768);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(2591);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(1740);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(8128);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(855);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(3051);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(3656);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../../node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!../huxy/components/modal/index.less
var modal = __webpack_require__(3482);
;// CONCATENATED MODULE: ../huxy/components/modal/index.less

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(modal/* default */.Ay, options);




       /* harmony default export */ const components_modal = (modal/* default */.Ay && modal/* default */.Ay.locals ? modal/* default */.Ay.locals : undefined);

;// CONCATENATED MODULE: ../huxy/components/modal/index.jsx



const Modal = ({ open, close, hasMask = true, cancelText = "\u53D6\u6D88", submit, submitText = "\u786E\u5B9A", title = "Modal \u5F39\u7A97", className, children, delay = 250, ...rest }) => {
  const cls = ["modal-wrap", open ? "open" : "", ...className?.split(" ") ?? []].filter(Boolean).map((c) => modal_namespaceObject[c]).join(" ");
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(mask/* default */.A, { open, close, delay, hasMask, className: "huxy-modal", children: /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: cls, ...rest, children: /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: modal/* modal-container */.QN, children: [
    /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: modal/* modal-header */.k3, children: title }),
    /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: modal/* modal-content */.Y8, children }),
    /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: modal/* modal-footer */.ww, children: [
      /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: `${modal/* btn */.HM} ${modal/* left */.kb}`, onClick: (e) => close?.(e), children: cancelText }),
      /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: `${modal/* btn */.HM} ${modal/* right */.pG}`, onClick: (e) => submit?.(e), children: submitText })
    ] })
  ] }) }) });
};
/* harmony default export */ const huxy_components_modal = (Modal);

var __webpack_exports__default = __webpack_exports__.A;
export { __webpack_exports__default as default };
