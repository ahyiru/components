import { useCallback as __WEBPACK_EXTERNAL_MODULE_react_useCallback__, useEffect as __WEBPACK_EXTERNAL_MODULE_react_useEffect__, useRef as __WEBPACK_EXTERNAL_MODULE_react_useRef__, useState as __WEBPACK_EXTERNAL_MODULE_react_useState__ } from "react";
/******/ var __webpack_modules__ = ({

/***/ 892
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ renderTree)
});

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85);
// EXTERNAL MODULE: ../huxy/utils/isArray.js + 1 modules
var isArray = __webpack_require__(244);
;// ../huxy/utils/isValidArr.js

const isValidArr = (value) => (0,isArray/* default */.A)(value) && !!value.length;
/* harmony default export */ const utils_isValidArr = (isValidArr);

;// ../huxy/components/renderTree/index.jsx


const DefLink = ({ to, preventDefault, stopPropagation, ...rest }) => preventDefault ? /* @__PURE__ */ (0,jsx_runtime.jsx)("span", { ...rest }) : /* @__PURE__ */ (0,jsx_runtime.jsx)("a", { href: to, ...rest });
const DefList = ({ item, ...rest }) => /* @__PURE__ */ (0,jsx_runtime.jsx)("ul", { ...rest });
const fixEvents = (events, ...params) => {
  const newEvent = {};
  Object.keys(events).filter(Boolean).map((key) => {
    newEvent[key] = (e) => events[key](e, ...params);
  });
  return newEvent;
};
const render = ({ data = [], events = {}, List = DefList, Link = DefLink, leftIcon, rightIcon, isHorizontal, isCollapsed, level = 0, parentOpen = true }) => {
  const hasTitle = isCollapsed && !level;
  const hideChild = !isHorizontal && !isCollapsed && !parentOpen;
  return data.map((item) => {
    const { name, path, icon, rightIcon: rIcon, active, open, children, linkProps } = item;
    const hasChildren = utils_isValidArr(children);
    const key = item.id || `${path}${item.childSameRouteLevel ?? ""}`;
    const title = hasTitle ? item.title ?? name : void 0;
    const hidden = hideChild ? "hidden" : "";
    const li = icon ?? leftIcon;
    const ri = rIcon ?? rightIcon;
    const leftIconEle = li ? /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "node-left-icon", children: li === true ? /* @__PURE__ */ (0,jsx_runtime.jsx)("i", { className: "default-left-icon" }) : li }) : null;
    const nameEle = name ? /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "node-text", children: /* @__PURE__ */ (0,jsx_runtime.jsx)("span", { children: name }) }) : null;
    if (hasChildren) {
      const fixedEvents = fixEvents(events, item, level);
      const cls = [hidden, open ? "open" : ""].filter(Boolean).join(" ");
      return /* @__PURE__ */ (0,jsx_runtime.jsxs)("li", { className: cls, "has-children": "true", ...fixedEvents, children: [
        /* @__PURE__ */ (0,jsx_runtime.jsxs)(Link, { title, className: `link${active ? " active" : ""}`, to: path, preventDefault: true, stopPropagation: false, ...linkProps, children: [
          leftIconEle,
          nameEle,
          ri ? /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "node-right-icon", children: ri === true ? /* @__PURE__ */ (0,jsx_runtime.jsx)("i", { className: "default-right-icon" }) : ri }) : null
        ] }),
        /* @__PURE__ */ (0,jsx_runtime.jsx)(List, { item, children: render({ data: children, events, List, Link, leftIcon, rightIcon, isHorizontal, isCollapsed, level: level + 1, parentOpen: !!open }) })
      ] }, key);
    }
    return /* @__PURE__ */ (0,jsx_runtime.jsx)("li", { className: hidden, children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(Link, { title, className: `link${active ? " active" : ""}`, to: path, ...linkProps, children: [
      leftIconEle,
      nameEle
    ] }) }, key);
  });
};
/* harmony default export */ const renderTree = (render);


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


/***/ },

/***/ 244
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ utils_isArray)
});

;// ../huxy/utils/getType.js
const getType = (value) => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
/* harmony default export */ const utils_getType = (getType);

;// ../huxy/utils/isArray.js

const isArray = (value) => utils_getType(value) === "array";
/* harmony default export */ const utils_isArray = (isArray);


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
;// external "react"

// EXTERNAL MODULE: ../huxy/utils/isArray.js + 1 modules
var isArray = __webpack_require__(244);
;// ../huxy/utils/getSelected.js

const getSelected = (arr, id, idKey = "id", childKey = "children") => {
  if (!(0,isArray/* default */.A)(arr)) {
    return null;
  }
  const selected = (data) => {
    for (let i = 0, l = data.length; i < l; i++) {
      const item = data[i];
      if (item[idKey] === id) {
        return [item];
      }
      if ((0,isArray/* default */.A)(item[childKey])) {
        const selChildren = selected(item[childKey]);
        if (selChildren) {
          return [item].concat(selChildren);
        }
      }
    }
  };
  return selected(arr);
};
/* harmony default export */ const utils_getSelected = (getSelected);

;// ../huxy/use/useUpdate/index.jsx

const incrementParameter = (num) => ++num;
const useUpdate = () => {
  const [, setState] = __WEBPACK_EXTERNAL_MODULE_react_useState__(0);
  return __WEBPACK_EXTERNAL_MODULE_react_useCallback__(() => setState(incrementParameter), []);
};
/* harmony default export */ const use_useUpdate = (useUpdate);

// EXTERNAL MODULE: ../huxy/components/renderTree/index.jsx + 1 modules
var renderTree = __webpack_require__(892);
;// ../huxy/components/tree/listRender.jsx

const getChildrenCount = (item) => {
  const { children, open } = item;
  let count = 0;
  if (open && children?.length) {
    count = children.length;
    let childrenCount = 0;
    children.map((child) => childrenCount += getChildrenCount(child));
    return count + childrenCount;
  }
  return count;
};
const ListRender = ({ item, style, ...rest }) => /* @__PURE__ */ (0,jsx_runtime.jsx)("ul", { style: { ...style, "--count": getChildrenCount(item) }, ...rest });
/* harmony default export */ const listRender = (ListRender);

;// ../huxy/components/tree/index.jsx







const ListContauner = (props) => /* @__PURE__ */ (0,jsx_runtime.jsx)("ul", { ...props });
const getList = (isNormal, float) => isNormal ? listRender : ({ item, ...rest }) => /* @__PURE__ */ (0,jsx_runtime.jsx)(ListContauner, { className: float === "right" ? "left" : "", ...rest });
const Tree = (props) => {
  const {
    data = [],
    collapsed = false,
    type = "vertical",
    Link,
    width,
    bgColor,
    itemHeight,
    collapsedWidth,
    itemPadding,
    style,
    className,
    ...rest
  } = props;
  const timer = __WEBPACK_EXTERNAL_MODULE_react_useRef__();
  const menuRef = __WEBPACK_EXTERNAL_MODULE_react_useRef__();
  __WEBPACK_EXTERNAL_MODULE_react_useEffect__(() => () => clearTimeout(timer.current), []);
  const rerender = use_useUpdate();
  const isHorizontal = type === "horizontal";
  const isCollapsed = !isHorizontal && collapsed;
  const events = {
    onClick: (e, item) => {
      e.stopPropagation();
      if (!isHorizontal && !isCollapsed) {
        const selecteds = utils_getSelected(data, item.path, "path");
        const targetItem = selecteds[selecteds.length - 1];
        targetItem.open = !targetItem.open;
        rerender();
      }
    },
    onMouseEnter: (e, item, level) => {
      if (isCollapsed && !level) {
        clearTimeout(timer.current);
        menuRef.current.style.width = "var(--maxWidth)";
      }
    },
    onMouseLeave: (e, item, level) => {
      if (isCollapsed && !level) {
        timer.current = setTimeout(() => menuRef.current.style.width = "", 200);
      }
    }
  };
  const cls = (isHorizontal ? ["huxy-horizontal-tree", className] : ["huxy-tree", className, isCollapsed ? "collapsed" : ""]).filter(Boolean).join(" ");
  const { float, ...restStyle } = rest?.style ?? {};
  const treeStyles = {
    "--bgColor": bgColor,
    "--itemHeight": itemHeight,
    "--nodeListWidth": width,
    ...restStyle
  };
  if (isHorizontal) {
    treeStyles["--itemPadding"] = itemPadding;
    treeStyles["--nodeFloat"] = float;
  } else {
    treeStyles["--width"] = width;
    treeStyles["--collapsedWidth"] = collapsedWidth;
  }
  const List = getList(!isHorizontal && !isCollapsed, float);
  return /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { ref: menuRef, className: cls, style: treeStyles, ...rest, children: /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "huxy-tree-track", children: /* @__PURE__ */ (0,jsx_runtime.jsx)("ul", { className: "huxy-tree-root", children: (0,renderTree/* default */.A)({ data, events, List, Link, leftIcon: true, rightIcon: true, isHorizontal, isCollapsed }) }) }) });
};
/* harmony default export */ const tree = (Tree);

export { tree as default };
