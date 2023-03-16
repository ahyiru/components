import * as __WEBPACK_EXTERNAL_MODULE_react__ from "react";
/******/ var __webpack_modules__ = ({

/***/ 942:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(609);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".node-right-icon-close {\n  height: 100%;\n  width: var(--rightIconWidth);\n  position: absolute;\n  top: 0;\n}\n.node-right-icon-close .default-right-icon {\n  --pos: calc(5px - 1px) / 2;\n  position: relative;\n  display: inline-block;\n  font-style: normal;\n  float: right;\n  cursor: pointer;\n  height: 100%;\n  width: 10px;\n  width: 100%;\n}\n.node-right-icon-close .default-right-icon::before,\n.node-right-icon-close .default-right-icon::after {\n  content: '';\n  display: block;\n  position: absolute;\n  border-radius: 1px;\n  background-color: currentColor;\n  height: 1px;\n  width: 5px;\n  left: 0;\n  transform-origin: 100% 50% 0;\n  transition: all 0.3s;\n}\n.node-right-icon-close .default-right-icon::before {\n  left: 0;\n}\n.node-right-icon-close .default-right-icon::after {\n  left: calc(1px * 0.7);\n}\n.node-right-icon-close .default-right-icon::before,\n.node-right-icon-close .default-right-icon::after {\n  top: calc(50% + var(--pos));\n}\n.node-right-icon-close .default-right-icon::before {\n  transform: rotate(135deg);\n}\n.node-right-icon-close .default-right-icon::after {\n  transform: rotate(45deg);\n}\n.node-right-icon-open {\n  height: 100%;\n  width: var(--rightIconWidth);\n  position: absolute;\n  top: 0;\n}\n.node-right-icon-open .default-right-icon {\n  --pos: calc(5px - 1px) / 2;\n  position: relative;\n  display: inline-block;\n  font-style: normal;\n  float: right;\n  cursor: pointer;\n  height: 100%;\n  width: 10px;\n  width: 100%;\n}\n.node-right-icon-open .default-right-icon::before,\n.node-right-icon-open .default-right-icon::after {\n  content: '';\n  display: block;\n  position: absolute;\n  border-radius: 1px;\n  background-color: currentColor;\n  height: 1px;\n  width: 5px;\n  left: 0;\n  transform-origin: 100% 50% 0;\n  transition: all 0.3s;\n}\n.node-right-icon-open .default-right-icon::before {\n  left: 0;\n}\n.node-right-icon-open .default-right-icon::after {\n  left: calc(1px * 0.7);\n}\n.node-right-icon-open .default-right-icon::before,\n.node-right-icon-open .default-right-icon::after {\n  top: calc(50% - var(--pos));\n}\n.node-right-icon-open .default-right-icon::before {\n  transform: rotate(225deg);\n}\n.node-right-icon-open .default-right-icon::after {\n  transform: rotate(-45deg);\n}\n.hide-scrollbar {\n  scrollbar-width: none;\n  scrollbar-color: transparent transparent;\n}\n.hide-scrollbar::-webkit-scrollbar {\n  display: none;\n}\n.huxy-tree {\n  --topBar: 0px;\n  --downBar: var(--footerHeight, 0);\n  --width: var(--menuWidth, 100%);\n  --bgColor: var(--menuBgColor, transparent);\n  --itemHeight: var(--menuItemHeight, 40px);\n  --nodeListWidth: var(--collapseMenuWidth, 200px);\n  --treeBorderColor: var(--borderColor, rgba(0, 0, 0, 0.06));\n  --subItemHeight: calc(var(--itemHeight) - 3px);\n  --leftIconWidth: 38px;\n  --rightIconWidth: 24px;\n  --trackWidth: 15px;\n  --collapsedWidth: var(--collapseWidth, 60px);\n  --ulPadding: 2px 0;\n  --ulPosition: calc(100% + 8px);\n  --arrowPosition: 16px;\n  position: relative;\n  height: calc(100% - var(--topBar) - var(--downBar));\n  overflow: hidden;\n}\n.huxy-tree .huxy-tree-track {\n  width: calc(100% + var(--trackWidth));\n  height: 100%;\n  overflow-y: auto;\n  overflow-x: hidden;\n  scrollbar-width: none;\n  scrollbar-color: transparent transparent;\n}\n.huxy-tree .huxy-tree-track::-webkit-scrollbar {\n  display: none;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root {\n  width: calc(100% - var(--trackWidth));\n  min-height: 100%;\n  padding: var(--ulPadding);\n  margin: 0;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root > li > .link {\n  padding-left: 6px;\n  font-size: 1.3rem;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul {\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;\n  background-color: hsla(0, 0%, 0%, 0.03);\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > .link {\n  padding-left: 22px;\n  font-size: 1.2rem;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul {\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;\n  background-color: hsla(0, 0%, 0%, 0.03);\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > .link {\n  padding-left: 38px;\n  font-size: 1.1rem;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > ul {\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;\n  background-color: hsla(0, 0%, 0%, 0.03);\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > ul > li > .link {\n  padding-left: 54px;\n  font-size: 1rem;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > ul > li > ul {\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;\n  background-color: hsla(0, 0%, 0%, 0.03);\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > ul > li > ul > li > .link {\n  padding-left: 70px;\n  font-size: 0.9rem;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > ul > li > ul > li > ul {\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;\n  background-color: hsla(0, 0%, 0%, 0.03);\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li {\n  user-select: none;\n  position: relative;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li[has-children=\"true\"] > .link.active {\n  background-color: hsla(0, 0%, 0%, 0.02);\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li[has-children=\"true\"] > .link.active::after {\n  display: none;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li[has-children=\"true\"] > .link .node-text {\n  padding-right: calc(var(--rightIconWidth) + 5px);\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li > .link {\n  /*&:hover,*/\n  position: relative;\n  display: block;\n  height: var(--subItemHeight);\n  line-height: var(--subItemHeight);\n  text-decoration: none;\n  transition: all 0.3s;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li > .link::after {\n  content: '';\n  display: block;\n  position: absolute;\n  left: 0px;\n  bottom: 0;\n  top: auto;\n  height: 3px;\n  width: calc(100% - 0px * 2);\n  background-color: currentColor;\n  transform: scale(0);\n  transition: transform 0.3s;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li > .link.active::after {\n  transform: scale(1);\n  transition: transform 0.3s;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li > .link::after {\n  left: 0;\n  bottom: 0;\n  top: 0;\n  height: 100%;\n  width: 3px;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li > .link.active {\n  background-color: hsla(0, 0%, 0%, 0.02);\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li > .link:hover {\n  background-color: hsla(0, 0%, 0%, 0.03);\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon {\n  display: block;\n  position: absolute;\n  top: 0;\n  width: var(--leftIconWidth);\n  height: var(--subItemHeight);\n  line-height: var(--subItemHeight);\n  text-align: center;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon .default-left-icon:after {\n  content: \"\";\n  position: absolute;\n  width: 4px;\n  height: 4px;\n  border-radius: 100%;\n  background: currentColor;\n  opacity: 0.7;\n  left: 50%;\n  top: 50%;\n  transform: translate(-2px, -2px);\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon + .node-text {\n  padding-left: var(--leftIconWidth);\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon > * {\n  vertical-align: middle;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text {\n  display: block;\n  padding: 0 10px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon {\n  right: 0;\n  height: 100%;\n  width: var(--rightIconWidth);\n  position: absolute;\n  top: 0;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon {\n  --pos: calc(5px - 1px) / 2;\n  position: relative;\n  display: inline-block;\n  font-style: normal;\n  float: right;\n  cursor: pointer;\n  height: 100%;\n  width: 10px;\n  width: 100%;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before,\n.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {\n  content: '';\n  display: block;\n  position: absolute;\n  border-radius: 1px;\n  background-color: currentColor;\n  height: 1px;\n  width: 5px;\n  left: 0;\n  transform-origin: 100% 50% 0;\n  transition: all 0.3s;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before {\n  left: 0;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {\n  left: calc(1px * 0.7);\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before,\n.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {\n  top: calc(50% + var(--pos));\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before {\n  transform: rotate(135deg);\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {\n  transform: rotate(45deg);\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon {\n  height: 100%;\n  width: var(--rightIconWidth);\n  position: absolute;\n  top: 0;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon {\n  --pos: calc(5px - 1px) / 2;\n  position: relative;\n  display: inline-block;\n  font-style: normal;\n  float: right;\n  cursor: pointer;\n  height: 100%;\n  width: 10px;\n  width: 100%;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before,\n.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {\n  content: '';\n  display: block;\n  position: absolute;\n  border-radius: 1px;\n  background-color: currentColor;\n  height: 1px;\n  width: 5px;\n  left: 0;\n  transform-origin: 100% 50% 0;\n  transition: all 0.3s;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before {\n  left: 0;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {\n  left: calc(1px * 0.7);\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before,\n.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {\n  top: calc(50% - var(--pos));\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before {\n  transform: rotate(225deg);\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {\n  transform: rotate(-45deg);\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li.open > ul {\n  height: calc(var(--subItemHeight) * var(--count));\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li.hidden {\n  display: none;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root li > ul {\n  --count: 0;\n  overflow: hidden;\n  height: 0;\n  transition: height 0.3s;\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root > li > .link {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.03);\n  height: var(--itemHeight);\n  line-height: var(--itemHeight);\n}\n.huxy-tree .huxy-tree-track .huxy-tree-root > li > .link .node-left-icon {\n  height: var(--itemHeight);\n  line-height: var(--itemHeight);\n}\n.collapsed.huxy-tree {\n  width: var(--collapsedWidth);\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root {\n  width: var(--collapsedWidth);\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > .link {\n  padding-left: 0px;\n  position: relative;\n  /*&:hover,*/\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > .link::after {\n  content: '';\n  display: block;\n  position: absolute;\n  left: 0px;\n  bottom: 0;\n  top: auto;\n  height: 3px;\n  width: calc(100% - 0px * 2);\n  background-color: currentColor;\n  transform: scale(0);\n  transition: transform 0.3s;\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > .link.active::after {\n  transform: scale(1);\n  transition: transform 0.3s;\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul {\n  overflow: visible;\n  height: auto;\n  position: relative;\n  background: var(--bgColor);\n  border: 1px solid var(--treeBorderColor);\n  position: absolute;\n  top: 0;\n  left: var(--ulPosition);\n  width: var(--nodeListWidth);\n  padding: var(--ulPadding);\n  opacity: 0.99;\n  border-radius: 2px;\n  transform: scale(0);\n  transform-origin: 0 0;\n  transition: 0.3s transform;\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::before,\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::after {\n  content: '';\n  position: absolute;\n  width: 0;\n  height: 0;\n  border: solid transparent;\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::before {\n  border-width: 6px;\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::after {\n  border-width: 5px;\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::before,\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::after {\n  left: auto;\n  right: 100%;\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::before {\n  top: var(--arrowPosition);\n  border-right-color: var(--treeBorderColor);\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::after {\n  top: calc(var(--arrowPosition) + 1px);\n  border-right-color: var(--bgColor);\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon {\n  height: 100%;\n  width: var(--rightIconWidth);\n  position: absolute;\n  top: 0;\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon {\n  --pos: calc(5px - 1px) / 2;\n  position: relative;\n  display: inline-block;\n  font-style: normal;\n  float: right;\n  cursor: pointer;\n  height: 100%;\n  width: 10px;\n  width: 100%;\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before,\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {\n  content: '';\n  display: block;\n  position: absolute;\n  border-radius: 1px;\n  background-color: currentColor;\n  height: 1px;\n  width: 5px;\n  left: 0;\n  transform-origin: 100% 50% 0;\n  transition: all 0.3s;\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before {\n  left: 0;\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {\n  left: calc(1px * 0.7);\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before,\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {\n  top: calc(50% - var(--pos));\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before {\n  transform: rotate(225deg);\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {\n  transform: rotate(-45deg);\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > ul {\n  transform: scale(1);\n  transition: 0.3s transform;\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root > li {\n  z-index: 10001;\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root > li > .link .node-text,\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root > li > .link .node-right-icon {\n  display: none;\n}\n.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root > li > .link .node-left-icon {\n  width: var(--collapsedWidth);\n  font-size: 1.6rem;\n}\n.huxy-horizontal-tree {\n  --bgColor: var(--navBgColor, transparent);\n  --itemHeight: var(--menuItemHeight, 40px);\n  --nodeListWidth: var(--collapseMenuWidth, 200px);\n  --treeBorderColor: var(--borderColor, rgba(0, 0, 0, 0.06));\n  --subItemHeight: calc(var(--itemHeight) - 3px);\n  --leftIconWidth: 38px;\n  --rightIconWidth: 24px;\n  --itemPadding: 0 8px;\n  --nodeFloat: auto;\n  --ulPadding: 2px 0;\n  --ulPosition: calc(100% + 8px);\n  --arrowPosition: 16px;\n  position: relative;\n  border-top: 1px solid var(--treeBorderColor);\n  float: var(--nodeFloat);\n}\n.huxy-horizontal-tree .huxy-tree-track {\n  max-width: 100%;\n  height: 100%;\n  margin: 0 auto;\n  scrollbar-width: none;\n  scrollbar-color: transparent transparent;\n}\n.huxy-horizontal-tree .huxy-tree-track::-webkit-scrollbar {\n  display: none;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root {\n  float: var(--nodeFloat);\n  width: max-content;\n  padding: 0 10px;\n  margin: 0;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root::after {\n  clear: both;\n  content: \"\";\n  display: block;\n  height: 0;\n  visibility: hidden;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li {\n  user-select: none;\n  position: relative;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li[has-children=\"true\"] > .link.active {\n  background-color: hsla(0, 0%, 0%, 0.02);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li[has-children=\"true\"] > .link.active::after {\n  display: none;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li[has-children=\"true\"] > .link .node-text {\n  padding-right: calc(var(--rightIconWidth) + 5px);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link {\n  /*&:hover,*/\n  position: relative;\n  display: block;\n  height: var(--subItemHeight);\n  line-height: var(--subItemHeight);\n  text-decoration: none;\n  transition: all 0.3s;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link::after {\n  content: '';\n  display: block;\n  position: absolute;\n  left: 0px;\n  bottom: 0;\n  top: auto;\n  height: 3px;\n  width: calc(100% - 0px * 2);\n  background-color: currentColor;\n  transform: scale(0);\n  transition: transform 0.3s;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link.active::after {\n  transform: scale(1);\n  transition: transform 0.3s;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link.active {\n  background-color: hsla(0, 0%, 0%, 0.02);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link:hover {\n  background-color: hsla(0, 0%, 0%, 0.03);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon {\n  display: block;\n  position: absolute;\n  top: 0;\n  width: var(--leftIconWidth);\n  height: var(--subItemHeight);\n  line-height: var(--subItemHeight);\n  text-align: center;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon .default-left-icon:after {\n  content: \"\";\n  position: absolute;\n  width: 4px;\n  height: 4px;\n  border-radius: 100%;\n  background: currentColor;\n  opacity: 0.7;\n  left: 50%;\n  top: 50%;\n  transform: translate(-2px, -2px);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon + .node-text {\n  padding-left: var(--leftIconWidth);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon > * {\n  vertical-align: middle;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text {\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon {\n  height: 100%;\n  width: var(--rightIconWidth);\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon {\n  --pos: calc(5px - 1px) / 2;\n  position: relative;\n  display: inline-block;\n  font-style: normal;\n  float: right;\n  cursor: pointer;\n  height: 100%;\n  width: 10px;\n  width: 100%;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before,\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {\n  content: '';\n  display: block;\n  position: absolute;\n  border-radius: 1px;\n  background-color: currentColor;\n  height: 1px;\n  width: 5px;\n  left: 0;\n  transform-origin: 100% 50% 0;\n  transition: all 0.3s;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before {\n  left: 0;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {\n  left: calc(1px * 0.7);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before,\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {\n  top: calc(50% + var(--pos));\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before {\n  transform: rotate(135deg);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {\n  transform: rotate(45deg);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon {\n  height: 100%;\n  width: var(--rightIconWidth);\n  position: absolute;\n  top: 0;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon {\n  --pos: calc(5px - 1px) / 2;\n  position: relative;\n  display: inline-block;\n  font-style: normal;\n  float: right;\n  cursor: pointer;\n  height: 100%;\n  width: 10px;\n  width: 100%;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before,\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {\n  content: '';\n  display: block;\n  position: absolute;\n  border-radius: 1px;\n  background-color: currentColor;\n  height: 1px;\n  width: 5px;\n  left: 0;\n  transform-origin: 100% 50% 0;\n  transition: all 0.3s;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before {\n  left: 0;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {\n  left: calc(1px * 0.7);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before,\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {\n  top: calc(50% - var(--pos));\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before {\n  transform: rotate(225deg);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {\n  transform: rotate(-45deg);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul {\n  position: relative;\n  background: var(--bgColor);\n  border: 1px solid var(--treeBorderColor);\n  position: absolute;\n  top: 0;\n  left: var(--ulPosition);\n  right: auto;\n  width: var(--nodeListWidth);\n  padding: var(--ulPadding);\n  opacity: 0.99;\n  transform: scale(0);\n  transform-origin: 0 0;\n  transition: 0.3s transform;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::before,\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::after {\n  content: '';\n  position: absolute;\n  width: 0;\n  height: 0;\n  border: solid transparent;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::before {\n  border-width: 6px;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::after {\n  border-width: 5px;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::before,\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::after {\n  left: auto;\n  right: 100%;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::before {\n  top: var(--arrowPosition);\n  border-right-color: var(--treeBorderColor);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::after {\n  top: calc(var(--arrowPosition) + 1px);\n  border-right-color: var(--bgColor);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left {\n  position: relative;\n  background: var(--bgColor);\n  border: 1px solid var(--treeBorderColor);\n  left: auto;\n  right: var(--ulPosition);\n  position: absolute;\n  transform-origin: 100% 0;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::before,\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::after {\n  content: '';\n  position: absolute;\n  width: 0;\n  height: 0;\n  border: solid transparent;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::before {\n  border-width: 6px;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::after {\n  border-width: 5px;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::before,\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::after {\n  right: auto;\n  left: 100%;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::before {\n  top: var(--arrowPosition);\n  border-left-color: var(--treeBorderColor);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::after {\n  top: calc(var(--arrowPosition) + 1px);\n  border-left-color: var(--bgColor);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon {\n  height: 100%;\n  width: var(--rightIconWidth);\n  position: absolute;\n  top: 0;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon {\n  --pos: calc(5px - 1px) / 2;\n  position: relative;\n  display: inline-block;\n  font-style: normal;\n  float: right;\n  cursor: pointer;\n  height: 100%;\n  width: 10px;\n  width: 100%;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before,\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {\n  content: '';\n  display: block;\n  position: absolute;\n  border-radius: 1px;\n  background-color: currentColor;\n  height: 1px;\n  width: 5px;\n  left: 0;\n  transform-origin: 100% 50% 0;\n  transition: all 0.3s;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before {\n  left: 0;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {\n  left: calc(1px * 0.7);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before,\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {\n  top: calc(50% - var(--pos));\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before {\n  transform: rotate(225deg);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {\n  transform: rotate(-45deg);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > ul {\n  transform: scale(1);\n  transition: 0.3s transform;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li {\n  float: left;\n  padding: var(--itemPadding);\n  z-index: 10001;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: calc(50% - 10px);\n  height: 20px;\n  width: 1px;\n  background-color: rgba(0, 0, 0, 0.02);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > .link {\n  height: var(--itemHeight);\n  line-height: var(--itemHeight);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > .link .node-left-icon {\n  height: var(--itemHeight);\n  line-height: var(--itemHeight);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul {\n  position: relative;\n  background: var(--bgColor);\n  border: 1px solid var(--treeBorderColor);\n  position: absolute;\n  top: var(--ulPosition);\n  left: 0;\n  transform-origin: 50% 0;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::before,\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::after {\n  content: '';\n  position: absolute;\n  width: 0;\n  height: 0;\n  border: solid transparent;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::before {\n  border-width: 8px;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::after {\n  border-width: 7px;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::before,\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::after {\n  top: auto;\n  bottom: 100%;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::before {\n  left: 16px;\n  border-bottom-color: var(--treeBorderColor);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::after {\n  left: calc(16px + 1px);\n  border-bottom-color: var(--bgColor);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left {\n  position: relative;\n  background: var(--bgColor);\n  border: 1px solid var(--treeBorderColor);\n  position: absolute;\n  left: auto;\n  right: 0;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::before,\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::after {\n  content: '';\n  position: absolute;\n  width: 0;\n  height: 0;\n  border: solid transparent;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::before {\n  border-width: 6px;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::after {\n  border-width: 5px;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::before,\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::after {\n  left: auto;\n  top: auto;\n  bottom: 100%;\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::before {\n  right: 10px;\n  border-bottom-color: var(--treeBorderColor);\n}\n.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::after {\n  right: calc(10px + 1px);\n  border-bottom-color: var(--bgColor);\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 609:
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

/***/ 601:
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 532:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ renderTree)
});

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(322);
// EXTERNAL MODULE: ../huxy/utils/isArray.js + 1 modules
var isArray = __webpack_require__(481);
;// CONCATENATED MODULE: ../huxy/utils/isValidArr.js

const isValidArr = (value) => (0,isArray/* default */.Z)(value) && !!value.length;
/* harmony default export */ const utils_isValidArr = (isValidArr);

;// CONCATENATED MODULE: ../huxy/components/renderTree/index.jsx


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
    const key = item.id || path || name;
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


/***/ }),

/***/ 837:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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
var f=__webpack_require__(810),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}__webpack_unused_export__=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 322:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



if (true) {
  module.exports = __webpack_require__(837);
} else {}


/***/ }),

/***/ 62:
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

/***/ 793:
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

/***/ 173:
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

/***/ 892:
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

/***/ 36:
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

/***/ 464:
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

/***/ 810:
/***/ ((module) => {

var x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var y = x => () => x
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ 481:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ utils_isArray)
});

;// CONCATENATED MODULE: ../huxy/utils/getType.js
const getType = (value) => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
/* harmony default export */ const utils_getType = (getType);

;// CONCATENATED MODULE: ../huxy/utils/isArray.js

const isArray = (value) => utils_getType(value) === "array";
/* harmony default export */ const utils_isArray = (isArray);


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
/******/ /* webpack/runtime/nonce */
/******/ (() => {
/******/ 	__webpack_require__.nc = undefined;
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ huxy_components_tree)
});

// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(322);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(810);
// EXTERNAL MODULE: ../huxy/utils/isArray.js + 1 modules
var isArray = __webpack_require__(481);
;// CONCATENATED MODULE: ../huxy/utils/getSelected.js

const getSelected = (arr, id, idKey = "id", childKey = "children") => {
  if (!(0,isArray/* default */.Z)(arr)) {
    return null;
  }
  const selected = (data) => {
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
/* harmony default export */ const utils_getSelected = (getSelected);

;// CONCATENATED MODULE: ../huxy/use/useUpdate/index.jsx

const incrementParameter = (num) => ++num;
const useUpdate = () => {
  const [, setState] = (0,external_react_.useState)(0);
  return (0,external_react_.useCallback)(() => setState(incrementParameter), []);
};
/* harmony default export */ const use_useUpdate = (useUpdate);

// EXTERNAL MODULE: ../huxy/components/renderTree/index.jsx + 1 modules
var renderTree = __webpack_require__(532);
;// CONCATENATED MODULE: ../huxy/components/tree/listRender.jsx

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

// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(62);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(36);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(793);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(892);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(173);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(464);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../../node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[3].use[2]!../huxy/components/tree/index.less
var tree = __webpack_require__(942);
;// CONCATENATED MODULE: ../huxy/components/tree/index.less

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(tree/* default */.Z, options);




       /* harmony default export */ const components_tree = (tree/* default */.Z && tree/* default.locals */.Z.locals ? tree/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ../huxy/components/tree/index.jsx







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
  const timer = (0,external_react_.useRef)();
  const menuRef = (0,external_react_.useRef)();
  (0,external_react_.useEffect)(() => () => clearTimeout(timer.current), []);
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
  return /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { ref: menuRef, className: cls, style: treeStyles, ...rest, children: /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "huxy-tree-track", children: /* @__PURE__ */ (0,jsx_runtime.jsx)("ul", { className: "huxy-tree-root", children: (0,renderTree["default"])({ data, events, List, Link, leftIcon: true, rightIcon: true, isHorizontal, isCollapsed }) }) }) });
};
/* harmony default export */ const huxy_components_tree = (Tree);

})();

__webpack_exports__ = __webpack_exports__["default"];
var __webpack_exports__default = __webpack_exports__["default"];
export { __webpack_exports__default as default };
