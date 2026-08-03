import { createPortal as __WEBPACK_EXTERNAL_MODULE_react_dom_20ef40a6_createPortal__ } from "react-dom";
import * as __WEBPACK_EXTERNAL_MODULE_react__ from "react";
/******/ var __webpack_modules__ = ({

/***/ 767
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ anico)
});

// NAMESPACE OBJECT (decoupled): css ../huxy/components/anico/index.module.less
var index_module_namespaceObject = {};
__webpack_require__.r(index_module_namespaceObject);
__webpack_require__.d(index_module_namespaceObject, {
  anico: () => (Zx),
  bottom: () => (sQ),
  close: () => (VN),
  hline: () => (t6),
  pause: () => (v7),
  play: () => (ZH),
  right: () => (pG)
});

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85);
;// css ../huxy/components/anico/index.module.less
const Zx = "_198_3AFLm";
const t6 = "_198_DlfIN";
const VN = "_198_VX6Dc";
const pG = "_198_5se+N";
const sQ = "_198_+P6zZ";
const ZH = "_198_GBHSA";
const v7 = "_198_CcQ8S";


;// ../huxy/components/anico/index.jsx


const Anico = (props) => /* @__PURE__ */ (0,jsx_runtime.jsx)("span", { className: Zx, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
  "span",
  {
    className: [
      t6,
      ...(props.type || "").split(" ").map((cls) => index_module_namespaceObject[cls]).filter(Boolean)
    ].join(" ")
  }
) });
/* harmony default export */ const anico = (Anico);


/***/ },

/***/ 988
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ drawer)
});

// NAMESPACE OBJECT (decoupled): css ../huxy/components/drawer/index.module.less
var index_module_namespaceObject = {};
__webpack_require__.r(index_module_namespaceObject);
__webpack_require__.d(index_module_namespaceObject, {
  "animate-drawer-left-in": () => (uA),
  "animate-drawer-left-out": () => (xK),
  "animate-drawer-right-in": () => (nY),
  "animate-drawer-right-out": () => (k5),
  "drawer-container": () => (iD),
  "drawer-content": () => (_I),
  "drawer-footer": () => (Ih),
  "drawer-header": () => (Y8),
  "drawer-wrap": () => (Vn),
  "ico-close": () => (pz),
  left: () => (kb),
  open: () => (ho),
  right: () => (pG)
});

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85);
// EXTERNAL MODULE: ../huxy/components/mask/index.jsx + 2 modules
var mask = __webpack_require__(140);
;// css ../huxy/components/drawer/index.module.less
const nY = "_609_xoxMP";
const k5 = "_609_vkbSj";
const uA = "_609_rvRKn";
const xK = "_609_/CS0P";
const Vn = "_609_vgFmf";
const ho = "_609_GI/FX";
const pG = "_609_RDqTV";
const kb = "_609_Slj5/";
const iD = "_609_6i6Vb";
const _I = "_609_tewra";
const Y8 = "_609_oYOsl";
const pz = "_609_rHWY9";
const Ih = "_609_/KNWb";


;// ../huxy/components/drawer/index.jsx



const Drawer = ({ open, close, footer, header, className, style, children, width = "300px", mountNode, position = "right", relative }) => {
  const cls = ["drawer-wrap", position, open ? "open" : "", ...className?.split(" ") ?? []].filter(Boolean).map((c) => index_module_namespaceObject[c]).join(" ");
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(mask/* default */.A, { open, close, delay: 250, hasMask: true, relative, mountNode, className: "huxy-drawer", children: /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: cls, style: { width, position: relative ? "absolute" : "fixed", "--footerHeight": footer ? "44px" : "0px", "--headerHeight": header ? "44px" : "0px", ...style }, children: /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: iD, children: [
    header ? /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: Y8, children: [
      position === "right" ? /* @__PURE__ */ (0,jsx_runtime.jsx)("span", { className: `link ${pz}`, onClick: (e) => close?.(e) }) : null,
      /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { children: header }),
      position === "left" ? /* @__PURE__ */ (0,jsx_runtime.jsx)("span", { className: `link ${pz}`, onClick: (e) => close?.(e) }) : null
    ] }) : null,
    /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: _I, children }),
    footer ? /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: Ih, children: footer }) : null
  ] }) }) });
};
/* harmony default export */ const drawer = (Drawer);


/***/ },

/***/ 140
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ components_mask)
});

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(649);
;// ../huxy/use/useUpdateEffect/index.jsx

const useUpdateEffect = (effect, deps = []) => {
  const isMounted = (0,external_react_.useRef)(false);
  (0,external_react_.useEffect)(() => {
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
var portal = __webpack_require__(826);
;// ../huxy/components/mask/index.jsx




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
const changeOverflow = (mountNode, delayOpen) => mountNode.style.overflow = delayOpen ? "hidden" : "";
const Mask = ({ open, close, delay = 300, children, mountNode = document.body, hasMask = true, style, className = "h-mask", relative }) => {
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


/***/ },

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

/***/ 809
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ spinner)
});

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85);
;// ../huxy/components/spinner/index.jsx


const Spinner = ({ global, absolute }) => /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: `spinner${global ? " global" : ""}${absolute ? " absolute" : ""}`, children: /* @__PURE__ */ (0,jsx_runtime.jsx)("figure", { className: "spinning" }) });
/* harmony default export */ const spinner = (Spinner);


/***/ },

/***/ 877
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);

const str2React = (str, props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { dangerouslySetInnerHTML: { __html: str }, ...props });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (str2React);

/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 197
(__unused_webpack_module, exports) {

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
exports.Fragment = REACT_FRAGMENT_TYPE;
exports.jsx = jsxProd;
exports.jsxs = jsxProd;


/***/ },

/***/ 85
(module, __unused_webpack_exports, __webpack_require__) {



if (true) {
  module.exports = __webpack_require__(197);
} else // removed by dead control flow
{}


/***/ },

/***/ 649
(module, __unused_webpack_exports, __webpack_require__) {

const x = (y) => {
	const x = {}; __webpack_require__.d(x, y); return x
} 
const y = (x) => (() => (x))
module.exports = x({ ["Children"]: () => (__WEBPACK_EXTERNAL_MODULE_react__.Children), ["cloneElement"]: () => (__WEBPACK_EXTERNAL_MODULE_react__.cloneElement), ["isValidElement"]: () => (__WEBPACK_EXTERNAL_MODULE_react__.isValidElement), ["useCallback"]: () => (__WEBPACK_EXTERNAL_MODULE_react__.useCallback), ["useEffect"]: () => (__WEBPACK_EXTERNAL_MODULE_react__.useEffect), ["useRef"]: () => (__WEBPACK_EXTERNAL_MODULE_react__.useRef), ["useState"]: () => (__WEBPACK_EXTERNAL_MODULE_react__.useState) });

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

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(649);
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

;// ../huxy/use/useRaf/index.jsx

const useRaf = (initState = {}) => {
  const frame = (0,external_react_.useRef)(0);
  const [state, setState] = (0,external_react_.useState)(initState);
  const setRaf = (0,external_react_.useCallback)((value) => {
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => setState(value));
  }, []);
  (0,external_react_.useEffect)(() => () => cancelAnimationFrame(frame.current), []);
  return [state, setRaf];
};
/* harmony default export */ const use_useRaf = (useRaf);

;// ../huxy/use/useWinResize/index.jsx



const useWinResize = () => {
  const [state, setState] = use_useRaf(utils_getViewportSize());
  (0,external_react_.useEffect)(() => {
    const handler = () => setState(utils_getViewportSize());
    window.addEventListener("resize", handler, false);
    return () => window.removeEventListener("resize", handler, false);
  }, []);
  return state;
};
/* harmony default export */ const use_useWinResize = (useWinResize);

// EXTERNAL MODULE: ../huxy/components/anico/index.jsx + 1 modules
var anico = __webpack_require__(767);
// EXTERNAL MODULE: ../huxy/components/drawer/index.jsx + 1 modules
var drawer = __webpack_require__(988);
;// ../huxy/components/md2html/renderMenu.jsx

const RenderMenu = ({ menu, curName, Link }) => menu.map((item) => {
  const { path, name, open, children } = item;
  const active = name === curName;
  if (children?.length) {
    return /* @__PURE__ */ (0,jsx_runtime.jsxs)("li", { className: open ? "open" : "", children: [
      /* @__PURE__ */ (0,jsx_runtime.jsx)(Link, { to: { query: { name } }, className: `link${active ? " active" : ""}`, preventDefault: true, children: /* @__PURE__ */ (0,jsx_runtime.jsx)("span", { children: name }) }),
      /* @__PURE__ */ (0,jsx_runtime.jsx)("ul", { children: /* @__PURE__ */ (0,jsx_runtime.jsx)(RenderMenu, { menu: children, curName: name, Link }) })
    ] }, path || name);
  }
  return /* @__PURE__ */ (0,jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Link, { to: { query: { name } }, className: `link${active ? " active" : ""}`, children: /* @__PURE__ */ (0,jsx_runtime.jsx)("span", { children: name }) }) }, path || name);
});
/* harmony default export */ const renderMenu = (RenderMenu);

;// ../huxy/utils/hasProp.js
const hasProp = (obj, prop) => Object.prototype.hasOwnProperty.call(obj ?? {}, prop);
/* harmony default export */ const utils_hasProp = (hasProp);

;// ../huxy/utils/isRef.js

const isRef = (ref) => {
  const refObj = typeof ref === "function" ? ref() : ref;
  return utils_hasProp(refObj, "current");
};
/* harmony default export */ const utils_isRef = (isRef);

;// ../huxy/utils/scrollTo.js


const scrollTo = (top = 0, ele) => {
  if (!utils_isBrowser()) {
    return;
  }
  ele = utils_isRef(ele) ? ele.current : ele ?? window;
  ele.scrollTo?.({ top, behavior: "smooth" });
};
/* harmony default export */ const utils_scrollTo = (scrollTo);

;// ../huxy/utils/scrollTop.js

const scrollTop = () => utils_isBrowser() && (window.pageYOffset ?? document.documentElement.scrollTop ?? document.body.scrollTop);
/* harmony default export */ const utils_scrollTop = (scrollTop);

;// ../huxy/utils/throttle.js
const throttle = (fn = () => {
}, delay = 60) => {
  let timer = null;
  return function(...args) {
    if (!timer) {
      fn.apply(this, args);
      timer = setTimeout(() => timer = null, delay);
    }
  };
};
/* harmony default export */ const utils_throttle = (throttle);

;// ../huxy/utils/sort.js
const sort = (arr, key = null, desc = false) => {
  return [...arr || []].sort((x, y) => {
    const a = key ? x[key] : x;
    const b = key ? y[key] : y;
    if (!isNaN(Number(a)) && !isNaN(Number(a))) {
      return desc ? b - a : a - b;
    }
    if (typeof a === "string" && typeof b === "string") {
      return desc ? b.localeCompare(a) : a.localeCompare(b);
    }
    if (typeof a === "string" && typeof b === "number") {
      return desc ? -1 : 1;
    }
    if (typeof a === "number" || typeof a === "string") {
      return desc ? 1 : -1;
    }
    return desc ? -1 : 1;
  });
};
/* harmony default export */ const utils_sort = (sort);

;// ../huxy/utils/validObj.js
const validObj = (obj = {}) => {
  const newObj = {};
  Object.keys(obj).map((v) => {
    if (obj[v] != null) {
      newObj[v] = obj[v];
    }
  });
  return newObj;
};
/* harmony default export */ const utils_validObj = (validObj);

;// ../huxy/components/md2html/useAnchor/index.jsx






const Anchor = ({ curName, itemList }) => {
  const isScrolling = (0,external_react_.useRef)(false);
  const currentName = (0,external_react_.useRef)("");
  const [name, setName] = (0,external_react_.useState)(curName);
  (0,external_react_.useEffect)(() => {
    const validItemList = utils_validObj(itemList.current);
    if (!curName) {
      const items = Object.keys(validItemList).map((key) => ({ name: key, offsetTop: validItemList[key]?.offsetTop ?? 0 }));
      setName(items[0]?.name);
    }
    let animateDelay = 0;
    let initDelay = 0;
    if (currentName.current !== curName) {
      currentName.current = curName;
      const currentRef = validItemList[curName];
      isScrolling.current = true;
      if (currentRef) {
        utils_scrollTo(currentRef.offsetTop);
        animateDelay = setTimeout(() => isScrolling.current = false, 1050);
      } else {
        initDelay = setTimeout(() => {
          window.scrollTo?.({ top: validItemList[curName]?.offsetTop ?? 0, behavior: "instant" });
          animateDelay = setTimeout(() => isScrolling.current = false, 1050);
        }, 550);
      }
    }
    return () => {
      clearTimeout(animateDelay);
      clearTimeout(initDelay);
      isScrolling.current = false;
    };
  }, [curName]);
  (0,external_react_.useEffect)(() => {
    const scrollToAnchor = utils_throttle(() => {
      if (!isScrolling.current) {
        const offsetTops = utils_sort(
          Object.keys(itemList.current).map((key) => ({ name: key, offsetTop: itemList.current[key]?.offsetTop ?? 0 })),
          "offsetTop",
          true
        );
        const name2 = offsetTops.find((item) => item.offsetTop < utils_scrollTop())?.name;
        if (currentName.current !== name2) {
          currentName.current = name2;
          setName(name2);
        }
      }
    });
    window.addEventListener("scroll", scrollToAnchor, false);
    return () => window.removeEventListener("scroll", scrollToAnchor, false);
  }, []);
  return [name];
};
/* harmony default export */ const useAnchor = (Anchor);

// EXTERNAL MODULE: ../huxy/components/spinner/index.jsx + 1 modules
var spinner = __webpack_require__(809);
// EXTERNAL MODULE: ../huxy/components/str2React/index.jsx
var str2React = __webpack_require__(877);
;// ../huxy/components/md2html/utils/replacePath.js
const imgReg = /!\[.*\]\((.*)\)/g;
const getPaths = async (defaultPaths, folder, getContext) => {
  const asyncPaths = {};
  for (let i = 0, j = defaultPaths.length; i < j; i++) {
    const defaultPath = defaultPaths[i];
    const name = defaultPath.slice(2);
    asyncPaths[defaultPath] = await getContext({ folder, name });
  }
  return asyncPaths;
};
const replacePath = async (context, { folder }, getContext) => {
  const src = [...context.matchAll(imgReg)].filter(Boolean);
  const defaultPaths = src.map((item) => item[1]);
  if (defaultPaths?.length) {
    const asyncPaths = await getPaths(defaultPaths, folder, getContext);
    defaultPaths.map((defaultPath) => {
      context = context.replace(defaultPath, asyncPaths[defaultPath]);
    });
  }
  return context;
};
/* harmony default export */ const utils_replacePath = (replacePath);

;// ../huxy/components/md2html/renderPage/renderContext.jsx





const RenderContext = ({ item, marked, getContext }) => {
  const [context, setContext] = (0,external_react_.useState)("");
  (0,external_react_.useEffect)(() => {
    const getMd = async () => {
      try {
        const context2 = await getContext({ ...item, type: ".md" });
        const newContext = await utils_replacePath(context2, item, getContext);
        const text = typeof marked === "function" ? marked.parse(newContext) : text;
        setContext(text);
      } catch (err) {
        setContext(err?.message);
      }
    };
    getMd();
  }, []);
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "huxy-content", children: [
    (0,str2React/* default */.A)(context),
    !context && /* @__PURE__ */ (0,jsx_runtime.jsx)(spinner/* default */.A, { global: true })
  ] });
};
/* harmony default export */ const renderContext = (RenderContext);

;// ../huxy/components/md2html/renderPage/index.jsx




const RenderPage = ({ router, curName, context, marked, getContext }) => {
  const itemList = (0,external_react_.useRef)({});
  const [name] = useAnchor({ curName, itemList });
  (0,external_react_.useEffect)(() => {
    name && router.push({ query: { name } });
  }, [name]);
  return /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "huxy-anchor-page", children: context.map((item, i) => /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "huxy-anchor-item", ref: (ref) => itemList.current[item.name] = ref, children: [
    /* @__PURE__ */ (0,jsx_runtime.jsx)("h2", { children: `${item.name}` }),
    /* @__PURE__ */ (0,jsx_runtime.jsx)(renderContext, { item, marked, getContext })
  ] }, item.name)) });
};
/* harmony default export */ const renderPage = (RenderPage);

;// ../huxy/components/md2html/utils/getFiles.js
const getFiles = (list) => {
  const newArr = [];
  list.map((item) => {
    const [folder, name] = item.name.split("/");
    const hasFolder = newArr.find((item2) => item2.name === folder);
    if (!hasFolder) {
      newArr.push({
        name: folder,
        children: [{ name, folder }]
      });
    } else {
      hasFolder.children.push({ name, folder });
    }
  });
  return newArr;
};
/* harmony default export */ const utils_getFiles = (getFiles);

;// ../huxy/components/md2html/index.jsx









const getSidebar = (list, folder, Link) => ({
  sidebar: list.find((item) => item.name === folder)?.children ?? [],
  listEle: list.map(({ name, children }) => /* @__PURE__ */ (0,jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Link, { to: { query: { folder: name, name: children[0]?.name } }, className: `link${name === folder ? " active" : ""}`, children: /* @__PURE__ */ (0,jsx_runtime.jsx)("span", { children: name }) }) }, name))
});
const Md2html = (props) => {
  const { params, router, Link, listFiles, getContext, marked, title, routeLink, routeName, className, style } = props;
  const { folder, name } = params;
  const { width } = use_useWinResize();
  const [list, setList] = (0,external_react_.useState)([]);
  const [collapsed, setCollapsed] = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    const readFiles = async () => {
      const files = await listFiles();
      const list2 = utils_getFiles(files);
      setList(list2);
      if (!folder) {
        router.push({ query: { folder: list2[0]?.name, name: list2[0]?.children[0]?.name } });
      }
    };
    readFiles();
  }, []);
  const isSmall = width <= 1024;
  const { sidebar, listEle } = getSidebar(list, folder, Link);
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: `huxy-doc-frame ${className ?? ""}`, style, children: [
    /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "huxy-doc-header", children: [
      /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "huxy-doc-banner", children: title || "\u6587\u6863\u7CFB\u7EDF" }),
      /* @__PURE__ */ (0,jsx_runtime.jsx)("ul", { className: "huxy-doc-nav", children: isSmall ? /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [
        /* @__PURE__ */ (0,jsx_runtime.jsx)("li", { className: "huxy-doc-collapsed", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
          "span",
          {
            className: "link",
            onClick: (e) => {
              e.stopPropagation();
              setCollapsed(!collapsed);
            },
            children: /* @__PURE__ */ (0,jsx_runtime.jsx)(anico/* default */.A, { type: collapsed ? "right" : "" })
          }
        ) }),
        /* @__PURE__ */ (0,jsx_runtime.jsx)(drawer/* default */.A, { open: collapsed, close: () => setCollapsed(false), width: "220px", children: /* @__PURE__ */ (0,jsx_runtime.jsx)("ul", { className: "huxy-doc-menu-drawer", children: listEle }) })
      ] }) : listEle }),
      routeLink ? /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "huxy-doc-back", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Link, { to: routeLink, children: /* @__PURE__ */ (0,jsx_runtime.jsx)("span", { children: routeName ?? "\u8FD4\u56DE\u4E3B\u9875" }) }) }) : null
    ] }),
    /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "huxy-doc-container", children: [
      /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "huxy-doc-main-page", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(renderPage, { router, curName: name, context: sidebar, marked, getContext }) }),
      /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "huxy-doc-menu", children: /* @__PURE__ */ (0,jsx_runtime.jsx)("ul", { className: "huxy-doc-menu-root", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(renderMenu, { menu: sidebar, curName: name, Link }) }) })
    ] })
  ] });
};
/* harmony default export */ const md2html = (Md2html);

export { md2html as default };
