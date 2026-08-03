import { createPortal as __WEBPACK_EXTERNAL_MODULE_react_dom_20ef40a6_createPortal__ } from "react-dom";
import { useEffect as __WEBPACK_EXTERNAL_MODULE_react_useEffect__, useRef as __WEBPACK_EXTERNAL_MODULE_react_useRef__, useState as __WEBPACK_EXTERNAL_MODULE_react_useState__ } from "react";
/******/ var __webpack_modules__ = ({

/***/ 826
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ portal)
});

;// external "react-dom"

;// ../huxy/components/portal/index.jsx

const Portal = ({ children, mountNode = document.body }) => __WEBPACK_EXTERNAL_MODULE_react_dom_20ef40a6_createPortal__(children, mountNode);
/* harmony default export */ const portal = (Portal);


/***/ },

/***/ 197
(__unused_webpack_module, exports) {

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


/***/ },

/***/ 85
(module, __unused_webpack_exports, __webpack_require__) {



if (true) {
  module.exports = __webpack_require__(197);
} else // removed by dead control flow
{}


/***/ }

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ const __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	const cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	const module = __webpack_module_cache__[moduleId] = {
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
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		if(Array.isArray(definition)) {
/******/ 			var i = 0;
/******/ 			while(i < definition.length) {
/******/ 				var key = definition[i++];
/******/ 				var binding = definition[i++];
/******/ 				if(!__webpack_require__.o(exports, key)) {
/******/ 					if(binding === 0) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 					} else {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 					}
/******/ 				} else if(binding === 0) { i++; }
/******/ 			}
/******/ 		} else {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
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
/******/ 		if(Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/

// NAMESPACE OBJECT (decoupled): css ../huxy/components/drop/index.module.less
var index_module_namespaceObject = {};
__webpack_require__.r(index_module_namespaceObject);
__webpack_require__.d(index_module_namespaceObject, {
  "animate-drop-in": () => (kM),
  "animate-drop-out": () => (dz),
  "drop-target": () => (og),
  "drop-wrap": () => (Zr),
  "huxy-drop-arrow-bl": () => (YC),
  "huxy-drop-arrow-br": () => (Yd),
  "huxy-drop-arrow-lb": () => (Ak),
  "huxy-drop-arrow-lt": () => (AX),
  "huxy-drop-arrow-rb": () => (Yt),
  "huxy-drop-arrow-rt": () => (IO),
  "huxy-drop-arrow-tl": () => (mw),
  "huxy-drop-arrow-tr": () => (_p),
  open: () => (ho)
});

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85);
;// external "react"

;// ../huxy/utils/hasProp.js
const hasProp = (obj, prop) => Object.prototype.hasOwnProperty.call(obj ?? {}, prop);
/* harmony default export */ const utils_hasProp = (hasProp);

;// ../huxy/utils/isRef.js

const isRef = (ref) => {
  const refObj = typeof ref === "function" ? ref() : ref;
  return utils_hasProp(refObj, "current");
};
/* harmony default export */ const utils_isRef = (isRef);

;// ../huxy/use/useClickAway/index.jsx


const useClickAway = (elRef, handleEvent, events = "click") => {
  __WEBPACK_EXTERNAL_MODULE_react_useEffect__(() => {
    const handler = (event) => {
      const ele = typeof elRef === "function" ? elRef() : elRef;
      const el = utils_isRef(ele) ? ele.current : ele;
      if (el?.contains && !el.contains(event.target)) {
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
  }, [elRef]);
};
/* harmony default export */ const use_useClickAway = (useClickAway);

;// ../huxy/utils/isReactEle.js
const isReactEle = (value) => value?.["$$typeof"] && typeof value["$$typeof"] === "symbol" && value["$$typeof"]["description"]?.indexOf("react.") === 0;
/* harmony default export */ const utils_isReactEle = (isReactEle);

;// ../huxy/utils/firstUpper.js
const firstUpper = (str = "") => str.replace(/^\S/, (s) => s.toUpperCase());
/* harmony default export */ const utils_firstUpper = (firstUpper);

;// ../huxy/utils/debounce.js
const debounce = (func = () => {
}, delay = 60) => {
  let timer = null;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
};
/* harmony default export */ const utils_debounce = (debounce);

;// ../huxy/utils/isBrowser.js
const isBrowser = () => ![typeof window, typeof document].includes("undefined");
/* harmony default export */ const utils_isBrowser = (isBrowser);

;// ../huxy/utils/getType.js
const getType = (value) => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
/* harmony default export */ const utils_getType = (getType);

;// ../huxy/utils/isElement.js

const isElement = (value) => utils_getType(value).indexOf("element") > -1;
/* harmony default export */ const utils_isElement = (isElement);

;// ../huxy/utils/getViewportSize.js


const getViewportSize = (element = null) => {
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
    width: window.innerWidth ?? document.documentElement.clientWidth,
    height: window.innerHeight ?? document.documentElement.clientHeight
  };
};
/* harmony default export */ const utils_getViewportSize = (getViewportSize);

;// ../huxy/utils/getPosition.js


const getPosition = (ele) => {
  if (!utils_isBrowser()) {
    return;
  }
  ele = utils_isRef(ele) ? ele.current : ele ?? document.body;
  return ele.getBoundingClientRect?.();
};
/* harmony default export */ const utils_getPosition = (getPosition);

;// ../huxy/utils/str2Html.js

const str2Html = (str) => {
  if (!utils_isBrowser()) {
    return;
  }
  const templ = document.createElement("div");
  templ.innerHTML = str;
  const ele = templ.children[0];
  return ele;
};
/* harmony default export */ const utils_str2Html = (str2Html);

;// ../huxy/utils/setStyle.js

const setStyle = (ele, styles = {}, reset = false) => {
  if (!utils_isElement(ele)) {
    return;
  }
  if (reset) {
    let objStr = "";
    Object.keys(styles).map((key) => {
      objStr += `${key}: ${styles[key]};`;
    });
    ele.style = objStr;
    return;
  }
  Object.keys(styles).map((key) => ele.style.setProperty(key, styles[key]));
};
/* harmony default export */ const utils_setStyle = (setStyle);

;// ../huxy/utils/sleep.js
const formatMs = (ms = 350, unit = "ms") => ({
  ms: ms * 1,
  s: ms * 1e3,
  m: ms * 6e4,
  h: ms * 36e5,
  d: ms * 864e5
})[unit] ?? ms;
const sleep = (ms = 350, unit = "ms") => new Promise((resolve) => setTimeout(resolve, formatMs(ms, unit)));
const sleepSync = (ms = 100) => {
  const start = Date.now();
  while (Date.now() - start <= ms) {
  }
};
/* harmony default export */ const utils_sleep = (sleep);

;// ../huxy/utils/getElementsSize.js







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
/* harmony default export */ const utils_getElementsSize = (getElementsSize);

;// ../huxy/utils/dropInfo.js





const reg = /(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/;
const classReg = /huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/;
const setDirectionCls = (showEle, direction) => {
  direction = `huxy-drop-arrow-${direction}`;
  const cls = showEle.getAttribute("class") ?? "";
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
/* harmony default export */ const utils_dropInfo = (dropInfo);

;// ../huxy/use/useUpdateEffect/index.jsx

const useUpdateEffect = (effect, deps = []) => {
  const isMounted = __WEBPACK_EXTERNAL_MODULE_react_useRef__(false);
  __WEBPACK_EXTERNAL_MODULE_react_useEffect__(() => {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      return effect();
    }
  }, deps);
};
/* harmony default export */ const use_useUpdateEffect = (useUpdateEffect);

;// ../huxy/use/useDelayState/index.jsx


const useDelayState = (state, delay = 450) => {
  const [delayState, setDelayState] = __WEBPACK_EXTERNAL_MODULE_react_useState__(state);
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
var portal = __webpack_require__(826);
;// ../huxy/components/drop/mask.jsx



const Mask = ({ open, delay = 280, children, mountNode, style, ...rest }) => {
  const [delayOpen] = use_useDelayState(open, delay);
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(portal/* default */.A, { mountNode, children: /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { style: { ...style, display: delayOpen ? "block" : "none" }, ...rest, children }) }) });
};
/* harmony default export */ const mask = (Mask);

;// css ../huxy/components/drop/index.module.less
const kM = "_905_+ikVl";
const dz = "_905_0bNew";
const og = "_905_xOfox";
const Zr = "_905_5AGrV";
const ho = "_905_zuisc";
const AX = "_905_ZRSgP";
const IO = "_905_Z5/SM";
const Ak = "_905_JRkKq";
const Yt = "_905_cYz1Y";
const mw = "_905_rLaKV";
const _p = "_905_v1j+2";
const YC = "_905_R3T5R";
const Yd = "_905_ShsPw";


;// ../huxy/components/drop/index.jsx








const Drop = ({ trigger = "click", type, dropList, className, children, targetProps, ...rest }) => {
  const [open, setOpen] = __WEBPACK_EXTERNAL_MODULE_react_useState__(false);
  const targetRef = __WEBPACK_EXTERNAL_MODULE_react_useRef__();
  const dropRef = __WEBPACK_EXTERNAL_MODULE_react_useRef__();
  const destroyFn = __WEBPACK_EXTERNAL_MODULE_react_useRef__();
  use_useClickAway(targetRef, (e) => setOpen(false), [.../* @__PURE__ */ new Set(["click", trigger.toLowerCase()])]);
  __WEBPACK_EXTERNAL_MODULE_react_useEffect__(() => {
    return () => destroyFn.current?.();
  }, []);
  const handler = (e) => {
    e.preventDefault();
    setOpen(true);
    destroyFn.current = utils_dropInfo(targetRef.current, dropRef.current, type);
  };
  const events = {
    [`on${utils_firstUpper(trigger)}`]: handler
  };
  const cls = ["drop-wrap", open ? "open" : "", className].filter(Boolean).map((c) => index_module_namespaceObject[c]).join(" ");
  const droplistEle = utils_isReactEle(dropList) ? dropList : dropList?.(() => setOpen(false), open);
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)("span", { ref: targetRef, className: og, ...targetProps, ...events, children: [
    children,
    /* @__PURE__ */ (0,jsx_runtime.jsx)(mask, { open, className: "huxy-drop", children: /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { ref: dropRef, className: cls, ...rest, children: droplistEle }) })
  ] });
};
/* harmony default export */ const drop = (Drop);

export { drop as default };
