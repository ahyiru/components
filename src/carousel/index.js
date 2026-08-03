import { flushSync as __WEBPACK_EXTERNAL_MODULE_react_dom_20ef40a6_flushSync__ } from "react-dom";
import { useCallback as __WEBPACK_EXTERNAL_MODULE_react_useCallback__, useEffect as __WEBPACK_EXTERNAL_MODULE_react_useEffect__, useRef as __WEBPACK_EXTERNAL_MODULE_react_useRef__, useState as __WEBPACK_EXTERNAL_MODULE_react_useState__ } from "react";
/******/ var __webpack_modules__ = ({

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
/************************************************************************/

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85);
;// external "react-dom"

;// external "react"

;// ../huxy/use/useInterval/index.jsx

const useInterval = (callback, delay) => {
  const savedCallback = __WEBPACK_EXTERNAL_MODULE_react_useRef__();
  __WEBPACK_EXTERNAL_MODULE_react_useEffect__(() => {
    savedCallback.current = callback;
  }, [callback]);
  __WEBPACK_EXTERNAL_MODULE_react_useEffect__(() => {
    if (delay) {
      const timer = setInterval(() => savedCallback.current(), delay);
      return () => clearInterval(timer);
    }
  }, [delay]);
};
/* harmony default export */ const use_useInterval = (useInterval);

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

;// ../huxy/utils/hasProp.js
const hasProp = (obj, prop) => Object.prototype.hasOwnProperty.call(obj ?? {}, prop);
/* harmony default export */ const utils_hasProp = (hasProp);

;// ../huxy/utils/isRef.js

const isRef = (ref) => {
  const refObj = typeof ref === "function" ? ref() : ref;
  return utils_hasProp(refObj, "current");
};
/* harmony default export */ const utils_isRef = (isRef);

;// ../huxy/utils/findChildEle.js
const findChildEle = (target, cname) => {
  const childrenEle = [];
  const children = target.children ?? [];
  for (let i = 0, l = children.length; i < l; i++) {
    const childEle = children[i];
    if (childEle.className.indexOf(cname) > -1) {
      childrenEle.push(childEle);
    }
  }
  if (childrenEle.length === 0) {
    return null;
  }
  if (childrenEle.length === 1) {
    return childrenEle[0];
  }
  return childrenEle;
};
/* harmony default export */ const utils_findChildEle = (findChildEle);

;// ../huxy/utils/resize.js




const createObj = (element, resizeListener) => {
  if (getComputedStyle(element).position === "static") {
    element.style.position = "relative";
  }
  const obj = document.createElement("object");
  obj.setAttribute("style", "display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0");
  obj.setAttribute("class", "resize-sensor");
  obj.onload = () => {
    obj.contentDocument.defaultView.addEventListener("resize", resizeListener, false);
    resizeListener();
  };
  obj.type = "text/html";
  element.appendChild(obj);
  obj.data = "about:blank";
  return obj;
};
const resize = (element, delay = 60) => {
  if (!utils_isBrowser()) {
    return;
  }
  element = utils_isRef(element) ? element.current : element ?? document.body;
  let domObj = utils_findChildEle(element, "resize-sensor");
  let listeners = [];
  const resizeListener = utils_debounce(() => listeners.map((listener) => listener(element)), delay);
  const bind = (cb) => {
    if (!utils_findChildEle(element, "resize-sensor")) {
      domObj = createObj(element, resizeListener);
    }
    if (listeners.indexOf(cb) === -1) {
      listeners.push(cb);
    }
  };
  const unbind = (cb) => {
    const idx = listeners.indexOf(cb);
    if (idx !== -1) {
      listeners.splice(idx, 1);
    }
    if (listeners.length === 0 && domObj) {
      destroy();
    }
  };
  const destroy = () => {
    if (domObj && domObj.parentNode) {
      if (domObj.contentDocument) {
        domObj.contentDocument.defaultView.removeEventListener("resize", resizeListener, false);
      }
      domObj.parentNode.removeChild(domObj);
      domObj = void 0;
      listeners = [];
    }
  };
  return {
    element,
    bind,
    unbind,
    destroy
  };
};
/* harmony default export */ const utils_resize = (resize);

;// ../huxy/use/useRaf/index.jsx

const useRaf = (initState = {}) => {
  const frame = __WEBPACK_EXTERNAL_MODULE_react_useRef__(0);
  const [state, setState] = __WEBPACK_EXTERNAL_MODULE_react_useState__(initState);
  const setRaf = __WEBPACK_EXTERNAL_MODULE_react_useCallback__((value) => {
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => setState(value));
  }, []);
  __WEBPACK_EXTERNAL_MODULE_react_useEffect__(() => () => cancelAnimationFrame(frame.current), []);
  return [state, setRaf];
};
/* harmony default export */ const use_useRaf = (useRaf);

;// ../huxy/use/useEleResize/index.jsx





const useEleResize = (ref = null, delay = 60) => {
  const [state, setState] = use_useRaf({});
  __WEBPACK_EXTERNAL_MODULE_react_useEffect__(() => {
    const ele = typeof ref === "function" ? ref() : ref;
    const element = utils_isRef(ele) ? ele.current : ele;
    const { bind, destroy } = utils_resize(element, delay);
    const handler = () => element && setState(utils_getViewportSize(element));
    bind(handler);
    return () => destroy();
  }, []);
  return state;
};
/* harmony default export */ const use_useEleResize = (useEleResize);

;// css ../huxy/components/carousel/index.module.less
const UM = "_684_ZhiSh";
const Ri = "_684_D3KWl";
const fv = "_684_9Ss/4";
const S$ = "_684_kohlU";
const Om = "_684_UNdp7";
const vu = "_684_CG9IZ";


;// ../huxy/components/carousel/index.jsx






const Carousel = ({ children, active = 0, delay = 5e3, className, ...rest }) => {
  const [activeItem, setActiveItem] = __WEBPACK_EXTERNAL_MODULE_react_useState__(active + 1);
  const [stop, setStop] = __WEBPACK_EXTERNAL_MODULE_react_useState__(false);
  const container = __WEBPACK_EXTERNAL_MODULE_react_useRef__();
  const [transition, setTransition] = __WEBPACK_EXTERNAL_MODULE_react_useState__("");
  const { width } = use_useEleResize(() => container);
  children = Array.isArray(children) ? children : [children];
  const first = children[0];
  const last = children[children.length - 1];
  const list = [last, ...children, first];
  const len = list.length;
  use_useInterval(
    () => {
      let current = activeItem + 1;
      current = current === len ? 1 : current;
      setTransition("");
      setActiveItem(current);
      if (current === len - 1) {
        setTimeout(() => {
          setTransition("none");
          setActiveItem(1);
        }, 500);
      }
    },
    stop ? null : delay
  );
  const switchItem = (i, e) => {
    e.stopPropagation();
    setTransition("");
    setActiveItem(i);
    __WEBPACK_EXTERNAL_MODULE_react_dom_20ef40a6_flushSync__(() => setStop(true));
    setStop(false);
  };
  const wrapStyles = {
    width: `${len * width}px`,
    transform: `translateX(${-width * activeItem}px)`,
    transition
  };
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: `${UM}${className ? ` ${className}` : ""}`, ...rest, ref: container, children: [
    /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: Ri, style: wrapStyles, children: list.map((child, i) => /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: `${fv} ${activeItem === i ? vu : ""}`, style: { width: `${width}px` }, children: child }, `huxy-carousel-${i}`)) }),
    /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: S$, children: children.map((child, i) => /* @__PURE__ */ (0,jsx_runtime.jsx)("span", { className: `${Om} ${activeItem === i + 1 ? vu : ""}`, onClick: (e) => switchItem(i + 1, e) }, `huxy-carousel-switch-${i}`)) })
  ] });
};
/* harmony default export */ const carousel = (Carousel);

export { carousel as default };
