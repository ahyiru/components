(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE__3899__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 97:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ renderTree; }
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.20.6/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(9641);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.20.6/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(8901);
// EXTERNAL MODULE: ../huxy/utils/isArray.js + 1 modules
var isArray = __webpack_require__(9874);
;// CONCATENATED MODULE: ../huxy/utils/isValidArr.js

const isValidArr = value => (0,isArray/* default */.Z)(value) && !!value.length;
/* harmony default export */ var utils_isValidArr = (isValidArr);
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7458);
;// CONCATENATED MODULE: ../huxy/components/renderTree/index.jsx


const _excluded = ["to", "preventDefault", "stopPropagation"],
  _excluded2 = ["item"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



const DefLink = _ref => {
  let {
      to,
      preventDefault,
      stopPropagation
    } = _ref,
    rest = (0,objectWithoutProperties/* default */.Z)(_ref, _excluded);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("a", _objectSpread({
    href: preventDefault ? null : to
  }, rest));
};
const DefList = _ref2 => {
  let {
      item
    } = _ref2,
    rest = (0,objectWithoutProperties/* default */.Z)(_ref2, _excluded2);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("ul", _objectSpread({}, rest));
};
const fixEvents = function (events) {
  for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    params[_key - 1] = arguments[_key];
  }
  const newEvent = {};
  Object.keys(events).filter(Boolean).map(key => {
    newEvent[key] = e => events[key](e, ...params);
  });
  return newEvent;
};
const render = _ref3 => {
  let {
    data = [],
    events = {},
    Link = DefLink,
    List = DefList,
    leftIcon,
    rightIcon,
    level = 0
  } = _ref3;
  return data.map(item => {
    const {
      name,
      path,
      icon,
      rightIcon: rIcon,
      active,
      open,
      children,
      linkProps
    } = item;
    const hasChildren = utils_isValidArr(children);
    const fixedEvents = fixEvents(events, item, hasChildren, level);
    const key = item.id || path || name;
    const li = icon != null ? icon : leftIcon;
    const ri = rIcon != null ? rIcon : rightIcon;
    if (hasChildren) {
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("li", _objectSpread(_objectSpread({
        className: open ? 'open' : '',
        "has-children": "true"
      }, fixedEvents), {}, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Link, _objectSpread(_objectSpread({
          className: active ? 'active' : '',
          to: path,
          preventDefault: true,
          stopPropagation: false
        }, linkProps), {}, {
          children: [li ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "node-left-icon",
            children: li === true ? /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
              className: "default-left-icon"
            }) : li
          }) : null, name ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "node-text",
            children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              children: name
            })
          }) : null, ri ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
            className: "node-right-icon",
            children: ri === true ? /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
              className: "default-right-icon"
            }) : ri
          }) : null]
        })), /*#__PURE__*/(0,jsx_runtime.jsx)(List, {
          item: item,
          children: render({
            data: children,
            events,
            Link,
            List,
            leftIcon,
            rightIcon,
            level: level + 1
          })
        })]
      }), key);
    }
    return /*#__PURE__*/(0,jsx_runtime.jsx)("li", _objectSpread(_objectSpread({}, fixedEvents), {}, {
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Link, _objectSpread(_objectSpread({
        className: active ? 'active' : '',
        to: path
      }, linkProps), {}, {
        children: [li ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "node-left-icon",
          children: li === true ? /*#__PURE__*/(0,jsx_runtime.jsx)("i", {
            className: "default-left-icon"
          }) : li
        }) : null, name ? /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
          className: "node-text",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            children: name
          })
        }) : null]
      }))
    }), key);
  });
};
/* harmony default export */ var renderTree = (render);

/***/ }),

/***/ 9874:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ utils_isArray; }
});

;// CONCATENATED MODULE: ../huxy/utils/getType.js
const getType = value => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
/* harmony default export */ var utils_getType = (getType);
;// CONCATENATED MODULE: ../huxy/utils/isArray.js

const isArray = value => utils_getType(value) === 'array';
/* harmony default export */ var utils_isArray = (isArray);

/***/ }),

/***/ 6006:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_pnpm_css_loader_6_7_2_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6751);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_2_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_2_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_2_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5427);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_2_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_2_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_7_2_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_7_2_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".node-right-icon-close {\n  height: 100%;\n  width: var(--rightIconWidth);\n  position: absolute;\n  top: 0;\n}\n.node-right-icon-close .default-right-icon {\n  --pos: calc(5px - 1px) / 2;\n  position: relative;\n  display: inline-block;\n  font-style: normal;\n  float: right;\n  cursor: pointer;\n  height: 100%;\n  width: 10px;\n  width: 100%;\n}\n.node-right-icon-close .default-right-icon::before,\n.node-right-icon-close .default-right-icon::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  border-radius: 1px;\n  background-color: currentColor;\n  height: 1px;\n  width: 5px;\n  left: 0;\n  transform-origin: 100% 50% 0;\n  transition: all 0.3s;\n}\n.node-right-icon-close .default-right-icon::before {\n  left: 0;\n}\n.node-right-icon-close .default-right-icon::after {\n  left: calc(1px * 0.7);\n}\n.node-right-icon-close .default-right-icon::before,\n.node-right-icon-close .default-right-icon::after {\n  top: calc(50% + var(--pos));\n}\n.node-right-icon-close .default-right-icon::before {\n  transform: rotate(135deg);\n}\n.node-right-icon-close .default-right-icon::after {\n  transform: rotate(45deg);\n}\n.node-right-icon-open {\n  height: 100%;\n  width: var(--rightIconWidth);\n  position: absolute;\n  top: 0;\n}\n.node-right-icon-open .default-right-icon {\n  --pos: calc(5px - 1px) / 2;\n  position: relative;\n  display: inline-block;\n  font-style: normal;\n  float: right;\n  cursor: pointer;\n  height: 100%;\n  width: 10px;\n  width: 100%;\n}\n.node-right-icon-open .default-right-icon::before,\n.node-right-icon-open .default-right-icon::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  border-radius: 1px;\n  background-color: currentColor;\n  height: 1px;\n  width: 5px;\n  left: 0;\n  transform-origin: 100% 50% 0;\n  transition: all 0.3s;\n}\n.node-right-icon-open .default-right-icon::before {\n  left: 0;\n}\n.node-right-icon-open .default-right-icon::after {\n  left: calc(1px * 0.7);\n}\n.node-right-icon-open .default-right-icon::before,\n.node-right-icon-open .default-right-icon::after {\n  top: calc(50% - var(--pos));\n}\n.node-right-icon-open .default-right-icon::before {\n  transform: rotate(225deg);\n}\n.node-right-icon-open .default-right-icon::after {\n  transform: rotate(-45deg);\n}\n.hide-scrollbar {\n  scrollbar-width: none;\n  scrollbar-color: transparent transparent;\n}\n.hide-scrollbar::-webkit-scrollbar {\n  display: none;\n}\n.huxy-tree {\n  --topBar: 0px;\n  --downBar: var(--footerHeight, 0);\n  --width: var(--menuWidth, 100%);\n  --bgColor: var(--menuBgColor, transparent);\n  --itemHeight: var(--menuItemHeight, 40px);\n  --nodeListWidth: var(--collapseMenuWidth, 200px);\n  --treeBorderColor: var(--borderColor, rgba(0, 0, 0, 0.06));\n  --subItemHeight: calc(var(--itemHeight) - 3px);\n  --leftIconWidth: 38px;\n  --rightIconWidth: 24px;\n  --trackWidth: 15px;\n  --collapsedWidth: var(--collapseWidth, 60px);\n  --ulPadding: 2px 0;\n  --ulPosition: calc(100% + 8px);\n  --arrowPosition: 16px;\n  position: relative;\n  height: calc(100% - var(--topBar) - var(--downBar));\n  overflow: hidden;\n}\n.huxy-tree .huxy-tree-track {\n  width: calc(100% + var(--trackWidth));\n  height: 100%;\n  overflow-y: auto;\n  overflow-x: hidden;\n  scrollbar-width: none;\n  scrollbar-color: transparent transparent;\n}\n.huxy-tree .huxy-tree-track::-webkit-scrollbar {\n  display: none;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root {\n  width: calc(100% - var(--trackWidth));\n  min-height: 100%;\n  padding: var(--ulPadding);\n  margin: 0;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root > li > a {\n  padding-left: 6px;\n  font-size: 1.3rem;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul {\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;\n  background-color: hsla(0, 0%, 0%, 0.03);\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > a {\n  padding-left: 22px;\n  font-size: 1.2rem;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul {\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;\n  background-color: hsla(0, 0%, 0%, 0.03);\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > a {\n  padding-left: 38px;\n  font-size: 1.1rem;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > ul {\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;\n  background-color: hsla(0, 0%, 0%, 0.03);\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > ul > li > a {\n  padding-left: 54px;\n  font-size: 1rem;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > ul > li > ul {\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;\n  background-color: hsla(0, 0%, 0%, 0.03);\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > ul > li > ul > li > a {\n  padding-left: 70px;\n  font-size: 0.9rem;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > ul > li > ul > li > ul {\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;\n  background-color: hsla(0, 0%, 0%, 0.03);\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li {\n  user-select: none;\n  position: relative;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li[has-children=\"true\"] > a.active {\n  background-color: hsla(0, 0%, 0%, 0.02);\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li[has-children=\"true\"] > a.active::after {\n  display: none;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li[has-children=\"true\"] > a .node-text {\n  padding-right: calc(var(--rightIconWidth) + 5px);\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li > a {\n  /*&:hover,*/\n  position: relative;\n  display: block;\n  height: var(--subItemHeight);\n  line-height: var(--subItemHeight);\n  text-decoration: none;\n  transition: all 0.3s;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li > a::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 0px;\n  bottom: 0;\n  top: auto;\n  height: 3px;\n  width: calc(100% - 0px * 2);\n  background-color: currentColor;\n  transform: scale(0);\n  transition: transform 0.3s;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li > a.active::after {\n  transform: scale(1);\n  transition: transform 0.3s;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li > a::after {\n  left: 0;\n  bottom: 0;\n  top: 0;\n  height: 100%;\n  width: 3px;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li > a.active {\n  background-color: hsla(0, 0%, 0%, 0.02);\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li > a:hover {\n  background-color: hsla(0, 0%, 0%, 0.03);\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-left-icon {\n  display: block;\n  position: absolute;\n  top: 0;\n  width: var(--leftIconWidth);\n  height: var(--subItemHeight);\n  line-height: var(--subItemHeight);\n  text-align: center;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-left-icon .default-left-icon:after {\n  content: \"\";\n  position: absolute;\n  width: 4px;\n  height: 4px;\n  border-radius: 100%;\n  background: currentColor;\n  opacity: 0.7;\n  left: 50%;\n  top: 50%;\n  transform: translate(-2px, -2px);\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-left-icon + .node-text {\n  padding-left: var(--leftIconWidth);\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-left-icon > * {\n  vertical-align: middle;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-text {\n  display: block;\n  padding: 0 10px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon {\n  right: 0;\n  height: 100%;\n  width: var(--rightIconWidth);\n  position: absolute;\n  top: 0;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon {\n  --pos: calc(5px - 1px) / 2;\n  position: relative;\n  display: inline-block;\n  font-style: normal;\n  float: right;\n  cursor: pointer;\n  height: 100%;\n  width: 10px;\n  width: 100%;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::before,\n.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  border-radius: 1px;\n  background-color: currentColor;\n  height: 1px;\n  width: 5px;\n  left: 0;\n  transform-origin: 100% 50% 0;\n  transition: all 0.3s;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::before {\n  left: 0;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::after {\n  left: calc(1px * 0.7);\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::before,\n.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::after {\n  top: calc(50% + var(--pos));\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::before {\n  transform: rotate(135deg);\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::after {\n  transform: rotate(45deg);\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon {\n  height: 100%;\n  width: var(--rightIconWidth);\n  position: absolute;\n  top: 0;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon {\n  --pos: calc(5px - 1px) / 2;\n  position: relative;\n  display: inline-block;\n  font-style: normal;\n  float: right;\n  cursor: pointer;\n  height: 100%;\n  width: 10px;\n  width: 100%;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::before,\n.huxy-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  border-radius: 1px;\n  background-color: currentColor;\n  height: 1px;\n  width: 5px;\n  left: 0;\n  transform-origin: 100% 50% 0;\n  transition: all 0.3s;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::before {\n  left: 0;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::after {\n  left: calc(1px * 0.7);\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::before,\n.huxy-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::after {\n  top: calc(50% - var(--pos));\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::before {\n  transform: rotate(225deg);\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::after {\n  transform: rotate(-45deg);\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li > ul {\n  overflow: hidden;\n  transition: max-height 0.3s;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root > li > a {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.03);\n  height: var(--itemHeight);\n  line-height: var(--itemHeight);\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root > li > a .node-left-icon {\n  height: var(--itemHeight);\n  line-height: var(--itemHeight);\n}\n.collapsed.huxy-tree {\n  width: var(--collapsedWidth);\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root {\n  width: var(--collapsedWidth);\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > a {\n  padding-left: 0px;\n  position: relative;\n  /*&:hover,*/\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > a::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 0px;\n  bottom: 0;\n  top: auto;\n  height: 3px;\n  width: calc(100% - 0px * 2);\n  background-color: currentColor;\n  transform: scale(0);\n  transition: transform 0.3s;\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > a.active::after {\n  transform: scale(1);\n  transition: transform 0.3s;\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul {\n  overflow: visible;\n  position: relative;\n  background: var(--bgColor);\n  border: 1px solid var(--treeBorderColor);\n  position: absolute;\n  top: 0;\n  left: var(--ulPosition);\n  width: var(--nodeListWidth);\n  padding: var(--ulPadding);\n  opacity: 0.99;\n  border-radius: 2px;\n  transform: scale(0);\n  transform-origin: 0 0;\n  transition: 0.3s transform;\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::before,\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::after {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 0;\n  border: solid transparent;\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::before {\n  border-width: 6px;\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::after {\n  border-width: 5px;\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::before,\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::after {\n  left: auto;\n  right: 100%;\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::before {\n  top: var(--arrowPosition);\n  border-right-color: var(--treeBorderColor);\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::after {\n  top: calc(var(--arrowPosition) + 1px);\n  border-right-color: var(--bgColor);\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon {\n  height: 100%;\n  width: var(--rightIconWidth);\n  position: absolute;\n  top: 0;\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon {\n  --pos: calc(5px - 1px) / 2;\n  position: relative;\n  display: inline-block;\n  font-style: normal;\n  float: right;\n  cursor: pointer;\n  height: 100%;\n  width: 10px;\n  width: 100%;\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::before,\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  border-radius: 1px;\n  background-color: currentColor;\n  height: 1px;\n  width: 5px;\n  left: 0;\n  transform-origin: 100% 50% 0;\n  transition: all 0.3s;\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::before {\n  left: 0;\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::after {\n  left: calc(1px * 0.7);\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::before,\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::after {\n  top: calc(50% - var(--pos));\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::before {\n  transform: rotate(225deg);\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::after {\n  transform: rotate(-45deg);\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > ul {\n  transform: scale(1);\n  transition: 0.3s transform;\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root > li {\n  z-index: 10001;\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root > li > a .node-text,\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root > li > a .node-right-icon {\n  display: none;\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root > li > a .node-left-icon {\n  width: var(--collapsedWidth);\n  font-size: 1.6rem;\n}\n.huxy-horizontal-tree {\n  --bgColor: var(--navBgColor, transparent);\n  --itemHeight: var(--menuItemHeight, 40px);\n  --nodeListWidth: var(--collapseMenuWidth, 200px);\n  --treeBorderColor: var(--borderColor, rgba(0, 0, 0, 0.06));\n  --subItemHeight: calc(var(--itemHeight) - 3px);\n  --leftIconWidth: 38px;\n  --rightIconWidth: 24px;\n  --itemPadding: 8px;\n  --nodeFloat: auto;\n  --ulPadding: 2px 0;\n  --ulPosition: calc(100% + 8px);\n  --arrowPosition: 16px;\n  position: relative;\n  border-top: 1px solid var(--treeBorderColor);\n  float: var(--nodeFloat);\n}\n.huxy-horizontal-tree .huxy-tree-track {\n  max-width: 100%;\n  height: 100%;\n  margin: 0 auto;\n  scrollbar-width: none;\n  scrollbar-color: transparent transparent;\n}\n.huxy-horizontal-tree .huxy-tree-track::-webkit-scrollbar {\n  display: none;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root {\n  float: var(--nodeFloat);\n  width: max-content;\n  padding: 0 10px;\n  margin: 0;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root::after {\n  clear: both;\n  content: \"\";\n  display: block;\n  height: 0;\n  visibility: hidden;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li {\n  user-select: none;\n  position: relative;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li[has-children=\"true\"] > a.active {\n  background-color: hsla(0, 0%, 0%, 0.02);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li[has-children=\"true\"] > a.active::after {\n  display: none;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li[has-children=\"true\"] > a .node-text {\n  padding-right: calc(var(--rightIconWidth) + 5px);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a {\n  /*&:hover,*/\n  position: relative;\n  display: block;\n  height: var(--subItemHeight);\n  line-height: var(--subItemHeight);\n  text-decoration: none;\n  transition: all 0.3s;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 0px;\n  bottom: 0;\n  top: auto;\n  height: 3px;\n  width: calc(100% - 0px * 2);\n  background-color: currentColor;\n  transform: scale(0);\n  transition: transform 0.3s;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a.active::after {\n  transform: scale(1);\n  transition: transform 0.3s;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a.active {\n  background-color: hsla(0, 0%, 0%, 0.02);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a:hover {\n  background-color: hsla(0, 0%, 0%, 0.03);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-left-icon {\n  display: block;\n  position: absolute;\n  top: 0;\n  width: var(--leftIconWidth);\n  height: var(--subItemHeight);\n  line-height: var(--subItemHeight);\n  text-align: center;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-left-icon .default-left-icon:after {\n  content: \"\";\n  position: absolute;\n  width: 4px;\n  height: 4px;\n  border-radius: 100%;\n  background: currentColor;\n  opacity: 0.7;\n  left: 50%;\n  top: 50%;\n  transform: translate(-2px, -2px);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-left-icon + .node-text {\n  padding-left: var(--leftIconWidth);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-left-icon > * {\n  vertical-align: middle;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-text {\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon {\n  height: 100%;\n  width: var(--rightIconWidth);\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon {\n  --pos: calc(5px - 1px) / 2;\n  position: relative;\n  display: inline-block;\n  font-style: normal;\n  float: right;\n  cursor: pointer;\n  height: 100%;\n  width: 10px;\n  width: 100%;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::before,\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  border-radius: 1px;\n  background-color: currentColor;\n  height: 1px;\n  width: 5px;\n  left: 0;\n  transform-origin: 100% 50% 0;\n  transition: all 0.3s;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::before {\n  left: 0;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::after {\n  left: calc(1px * 0.7);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::before,\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::after {\n  top: calc(50% + var(--pos));\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::before {\n  transform: rotate(135deg);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::after {\n  transform: rotate(45deg);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon {\n  height: 100%;\n  width: var(--rightIconWidth);\n  position: absolute;\n  top: 0;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon {\n  --pos: calc(5px - 1px) / 2;\n  position: relative;\n  display: inline-block;\n  font-style: normal;\n  float: right;\n  cursor: pointer;\n  height: 100%;\n  width: 10px;\n  width: 100%;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::before,\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  border-radius: 1px;\n  background-color: currentColor;\n  height: 1px;\n  width: 5px;\n  left: 0;\n  transform-origin: 100% 50% 0;\n  transition: all 0.3s;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::before {\n  left: 0;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::after {\n  left: calc(1px * 0.7);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::before,\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::after {\n  top: calc(50% - var(--pos));\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::before {\n  transform: rotate(225deg);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::after {\n  transform: rotate(-45deg);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul {\n  position: relative;\n  background: var(--bgColor);\n  border: 1px solid var(--treeBorderColor);\n  position: absolute;\n  top: 0;\n  left: var(--ulPosition);\n  right: auto;\n  width: var(--nodeListWidth);\n  padding: var(--ulPadding);\n  opacity: 0.99;\n  transform: scale(0);\n  transform-origin: 0 0;\n  transition: 0.3s transform;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::before,\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::after {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 0;\n  border: solid transparent;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::before {\n  border-width: 6px;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::after {\n  border-width: 5px;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::before,\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::after {\n  left: auto;\n  right: 100%;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::before {\n  top: var(--arrowPosition);\n  border-right-color: var(--treeBorderColor);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::after {\n  top: calc(var(--arrowPosition) + 1px);\n  border-right-color: var(--bgColor);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left {\n  position: relative;\n  background: var(--bgColor);\n  border: 1px solid var(--treeBorderColor);\n  left: auto;\n  right: var(--ulPosition);\n  position: absolute;\n  transform-origin: 100% 0;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::before,\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::after {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 0;\n  border: solid transparent;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::before {\n  border-width: 6px;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::after {\n  border-width: 5px;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::before,\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::after {\n  right: auto;\n  left: 100%;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::before {\n  top: var(--arrowPosition);\n  border-left-color: var(--treeBorderColor);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::after {\n  top: calc(var(--arrowPosition) + 1px);\n  border-left-color: var(--bgColor);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon {\n  height: 100%;\n  width: var(--rightIconWidth);\n  position: absolute;\n  top: 0;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon {\n  --pos: calc(5px - 1px) / 2;\n  position: relative;\n  display: inline-block;\n  font-style: normal;\n  float: right;\n  cursor: pointer;\n  height: 100%;\n  width: 10px;\n  width: 100%;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::before,\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  border-radius: 1px;\n  background-color: currentColor;\n  height: 1px;\n  width: 5px;\n  left: 0;\n  transform-origin: 100% 50% 0;\n  transition: all 0.3s;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::before {\n  left: 0;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::after {\n  left: calc(1px * 0.7);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::before,\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::after {\n  top: calc(50% - var(--pos));\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::before {\n  transform: rotate(225deg);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::after {\n  transform: rotate(-45deg);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > ul {\n  transform: scale(1);\n  transition: 0.3s transform;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li {\n  float: left;\n  padding: 0 var(--itemPadding);\n  z-index: 10001;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: calc(50% - 10px);\n  height: 20px;\n  width: 1px;\n  background-color: rgba(0, 0, 0, 0.02);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > a {\n  height: var(--itemHeight);\n  line-height: var(--itemHeight);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > a .node-left-icon {\n  height: var(--itemHeight);\n  line-height: var(--itemHeight);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul {\n  position: relative;\n  background: var(--bgColor);\n  border: 1px solid var(--treeBorderColor);\n  position: absolute;\n  top: var(--ulPosition);\n  left: 0;\n  transform-origin: 50% 0;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::before,\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::after {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 0;\n  border: solid transparent;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::before {\n  border-width: 8px;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::after {\n  border-width: 7px;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::before,\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::after {\n  top: auto;\n  bottom: 100%;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::before {\n  left: 16px;\n  border-bottom-color: var(--treeBorderColor);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::after {\n  left: calc(16px + 1px);\n  border-bottom-color: var(--bgColor);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left {\n  position: relative;\n  background: var(--bgColor);\n  border: 1px solid var(--treeBorderColor);\n  position: absolute;\n  left: auto;\n  right: 0;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::before,\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::after {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 0;\n  border: solid transparent;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::before {\n  border-width: 6px;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::after {\n  border-width: 5px;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::before,\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::after {\n  left: auto;\n  top: auto;\n  bottom: 100%;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::before {\n  right: 10px;\n  border-bottom-color: var(--treeBorderColor);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::after {\n  right: calc(10px + 1px);\n  border-bottom-color: var(--bgColor);\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* harmony default export */ __webpack_exports__["Z"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 5427:
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

/***/ 6751:
/***/ (function(module) {



module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 6053:
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
var f=__webpack_require__(3899),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}__webpack_unused_export__=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 7458:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



if (true) {
  module.exports = __webpack_require__(6053);
} else {}


/***/ }),

/***/ 5748:
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

/***/ 9736:
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

/***/ 7706:
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

/***/ 1567:
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

/***/ 6306:
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

/***/ 2062:
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

/***/ 3899:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3899__;

/***/ }),

/***/ 9641:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7644);

function _defineProperty(obj, key, value) {
  key = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(key);
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

/***/ }),

/***/ 8901:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _objectWithoutProperties; }
/* harmony export */ });
/* harmony import */ var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3645);

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = (0,_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(source, excluded);
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

/***/ }),

/***/ 3645:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _objectWithoutPropertiesLoose; }
/* harmony export */ });
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

/***/ }),

/***/ 1572:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _toPrimitive; }
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8193);

function _toPrimitive(input, hint) {
  if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

/***/ }),

/***/ 7644:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _toPropertyKey; }
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8193);
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1572);


function _toPropertyKey(arg) {
  var key = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(arg, "string");
  return (0,_typeof_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(key) === "symbol" ? key : String(key);
}

/***/ }),

/***/ 8193:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _typeof; }
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

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
  "default": function() { return /* binding */ huxy_components_tree; }
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.20.6/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(8901);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.20.6/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(9641);
// EXTERNAL MODULE: external {"root":"React","commonjs":"react","commonjs2":"react","amd":"react"}
var external_root_React_commonjs_react_commonjs2_react_amd_react_ = __webpack_require__(3899);
// EXTERNAL MODULE: ../huxy/utils/isArray.js + 1 modules
var isArray = __webpack_require__(9874);
;// CONCATENATED MODULE: ../huxy/utils/getSelected.js

const getSelected = function (arr, id) {
  let idKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'id';
  let childKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'children';
  if (!(0,isArray/* default */.Z)(arr)) {
    return null;
  }
  const selected = data => {
    for (let i = 0, l = data.length; i < l; i++) {
      const item = data[i];
      if (item[idKey] === id) {
        return [item];
      }
      if ((0,isArray/* default */.Z)(item[childKey])) {
        const selChildren = selected(item[childKey]);
        if (selChildren) {
          return [item].concat(selChildren);
        }
      }
    }
  };
  return selected(arr);
};
/* harmony default export */ var utils_getSelected = (getSelected);
;// CONCATENATED MODULE: ../huxy/utils/timestamp.js
const timestamp = () => {
  if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
    return performance.now();
  }
  return new Date().getTime();
};
/* harmony default export */ var utils_timestamp = (timestamp);
;// CONCATENATED MODULE: ../huxy/utils/uuidv4.js

const uuidv4 = () => {
  let timeKey = utils_timestamp();
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (timeKey + Math.random() * 16) % 16 | 0;
    timeKey = Math.floor(timeKey / 16);
    return (c === 'x' ? r : r & 0x3 | 0x8).toString(16);
  });
};
/* harmony default export */ var utils_uuidv4 = (uuidv4);
;// CONCATENATED MODULE: ../huxy/use/useUpdate/index.jsx

const incrementParameter = num => ++num;
const useUpdate = () => {
  const [, setState] = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useState)(0);
  return (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useCallback)(() => setState(incrementParameter), []);
};
/* harmony default export */ var use_useUpdate = (useUpdate);
// EXTERNAL MODULE: ../huxy/components/renderTree/index.jsx + 1 modules
var renderTree = __webpack_require__(97);
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
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(7458);
;// CONCATENATED MODULE: ../huxy/components/tree/listRender.jsx


const _excluded = ["item", "style"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



const ListRender = _ref => {
  var _item$children;
  let {
      item,
      style
    } = _ref,
    rest = (0,objectWithoutProperties/* default */.Z)(_ref, _excluded);
  const {
    uuid,
    open
  } = item;
  const ul = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useRef)();
  const timer = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useRef)();
  const isMounted = use_useFirstMounted();
  const [maxHeight, setMaxHeight] = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useState)('');
  (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useEffect)(() => {
    const el = ul.current;
    const height = open ? `${el.scrollHeight}px` : '0px';
    // el.style.maxHeight=height;
    setMaxHeight(height);
  }, []);
  (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useEffect)(() => {
    if (isMounted) {
      return;
    }
    const el = ul.current;
    const initH = open ? '0px' : `${el.scrollHeight}px`;
    // el.style.maxHeight=initH;
    setMaxHeight(initH);
    timer.current = setTimeout(() => {
      const height = open ? `${el.scrollHeight}px` : '0px';
      // el.style.maxHeight=height;
      setMaxHeight(height);
    }, 5);
    return () => clearTimeout(timer.current);
  }, [open, (_item$children = item.children) == null ? void 0 : _item$children.length]);
  (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useEffect)(() => {
    // 多层级触发
    if (uuid) {
      // ul.current.style.maxHeight='';
      setMaxHeight('');
    }
  }, [uuid]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("ul", _objectSpread({
    ref: ul,
    style: _objectSpread(_objectSpread({}, style), {}, {
      maxHeight
    })
  }, rest));
};
/* harmony default export */ var listRender = (ListRender);
// EXTERNAL MODULE: ../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(5748);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(6306);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(9736);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(1567);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(7706);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ../../node_modules/.pnpm/style-loader@3.3.1_webpack@5.75.0/node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(2062);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ../../node_modules/.pnpm/css-loader@6.7.2_webpack@5.75.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../node_modules/.pnpm/less-loader@11.1.0_less@4.1.3+webpack@5.75.0/node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../huxy/components/tree/index.less
var tree = __webpack_require__(6006);
;// CONCATENATED MODULE: ../huxy/components/tree/index.less

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(tree/* default */.Z, options);




       /* harmony default export */ var components_tree = (tree/* default */.Z && tree/* default.locals */.Z.locals ? tree/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ../huxy/components/tree/index.jsx


const tree_excluded = ["data", "collapsed", "type", "Link", "width", "bgColor", "itemHeight", "collapsedWidth", "itemPadding", "style"],
  _excluded2 = ["float"],
  _excluded3 = ["item"];
function tree_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function tree_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? tree_ownKeys(Object(source), !0).forEach(function (key) { (0,defineProperty/* default */.Z)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : tree_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }








const ListContauner = props => /*#__PURE__*/(0,jsx_runtime.jsx)("ul", tree_objectSpread({}, props));
const Index = props => {
  var _rest$style;
  const {
      data = [],
      collapsed = false,
      type = 'vertical',
      Link,
      width,
      bgColor,
      itemHeight,
      collapsedWidth,
      itemPadding,
      style
    } = props,
    rest = (0,objectWithoutProperties/* default */.Z)(props, tree_excluded);
  const timer = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useRef)();
  const menuRef = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useRef)();
  (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useEffect)(() => () => clearTimeout(timer.current), []);
  const rerender = use_useUpdate();
  const isCollapsed = type !== 'horizontal' && collapsed;
  const events = {
    onClick: (e, item) => {
      e.stopPropagation();
      const selecteds = utils_getSelected(data, item.path, 'path');
      selecteds.map(sel => sel.path === item.path ? sel.open = !sel.open : sel.uuid = utils_uuidv4());
      rerender();
    },
    onMouseEnter: (e, item, hasChildren, level) => {
      if (isCollapsed && hasChildren && !level) {
        clearTimeout(timer.current);
        menuRef.current.style.width = 'var(--maxWidth)';
      }
    },
    onMouseLeave: (e, item, hasChildren, level) => {
      if (isCollapsed && hasChildren && !level) {
        timer.current = setTimeout(() => menuRef.current.style.width = '', 200);
      }
    }
  };
  const cls = type === 'horizontal' ? 'huxy-horizontal-tree' : ['huxy-tree', collapsed ? 'collapsed' : ''].filter(Boolean).join(' ');
  const _ref = (_rest$style = rest == null ? void 0 : rest.style) != null ? _rest$style : {},
    {
      float
    } = _ref,
    restStyle = (0,objectWithoutProperties/* default */.Z)(_ref, _excluded2);
  const treeStyles = tree_objectSpread({
    '--bgColor': bgColor,
    '--itemHeight': itemHeight,
    '--nodeListWidth': width
  }, restStyle);
  if (type === 'horizontal') {
    treeStyles['--itemPadding'] = itemPadding;
    treeStyles['--nodeFloat'] = float;
  } else {
    treeStyles['--width'] = width;
    treeStyles['--collapsedWidth'] = collapsedWidth;
  }
  const List = type === 'horizontal' || collapsed ? _ref2 => {
    let {
        item
      } = _ref2,
      rest = (0,objectWithoutProperties/* default */.Z)(_ref2, _excluded3);
    return /*#__PURE__*/(0,jsx_runtime.jsx)(ListContauner, tree_objectSpread({
      className: float === 'right' ? 'left' : ''
    }, rest));
  } : listRender;
  return /*#__PURE__*/(0,jsx_runtime.jsx)("div", tree_objectSpread(tree_objectSpread({
    ref: menuRef,
    className: cls,
    style: treeStyles
  }, rest), {}, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: "huxy-tree-track",
      children: /*#__PURE__*/(0,jsx_runtime.jsx)("ul", {
        className: "huxy-tree-root",
        children: (0,renderTree["default"])({
          data,
          events,
          Link,
          List,
          leftIcon: true,
          rightIcon: true
        })
      })
    })
  }));
};
/* harmony default export */ var huxy_components_tree = (Index);
}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});