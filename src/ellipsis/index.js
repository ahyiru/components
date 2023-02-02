(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE__899__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(703);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(414);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_7_3_webpack_5_75_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".ofth_ {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  display: inline-block;\n  width: 100%;\n}\n.hVmF3 {\n  position: relative;\n}\n.hVmF3:hover::before, .hVmF3:hover::after {\n  opacity: 1;\n  transition: opacity 0.2s, transform 0.2s;\n}\n.hVmF3:hover::before {\n  transform: translateY(0);\n}\n.hVmF3:hover::after {\n  transform: translateY(0) rotate(var(--rotate));\n}\n.hVmF3::before, .hVmF3::after {\n  position: absolute;\n  opacity: 0;\n  pointer-events: none;\n  z-index: 10000;\n  background-color: var(--tooltipBgColor);\n  border: 1px solid var(--tooltipBorderColor);\n  transition: opacity 0.2s, transform 0.2s;\n}\n.hVmF3::before {\n  content: attr(tooltip);\n  z-index: 100002;\n  padding: 4px 10px;\n  text-align: left;\n  font-size: 1.2rem;\n  line-height: 1.4;\n  color: var(--tooltipColor);\n  border-radius: 4px;\n  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.4);\n  white-space: nowrap;\n  transform: translateY(100%);\n}\n.hVmF3::after {\n  content: \"\";\n  height: calc(var(--arrowSize) + 2px);\n  width: calc(var(--arrowSize) + 2px);\n  border-left-color: transparent;\n  border-bottom-color: transparent;\n  transform: translateY(100%) rotate(var(--rotate));\n}\n.uzFyE {\n  --tooltipBgColor: #303133;\n  --tooltipBorderColor: #303133;\n  --tooltipColor: #fff;\n  --position: 15px;\n  --arrowSize: 8px;\n  --rotate: 135deg;\n}\n.uzFyE[tooltip] {\n  position: relative;\n}\n.uzFyE[tooltip]:hover::before, .uzFyE[tooltip]:hover::after {\n  opacity: 1;\n  transition: opacity 0.2s, transform 0.2s;\n}\n.uzFyE[tooltip]:hover::before {\n  transform: translateY(0);\n}\n.uzFyE[tooltip]:hover::after {\n  transform: translateY(0) rotate(var(--rotate));\n}\n.uzFyE[tooltip]::before, .uzFyE[tooltip]::after {\n  position: absolute;\n  opacity: 0;\n  pointer-events: none;\n  z-index: 10000;\n  background-color: var(--tooltipBgColor);\n  border: 1px solid var(--tooltipBorderColor);\n  transition: opacity 0.2s, transform 0.2s;\n}\n.uzFyE[tooltip]::before {\n  content: attr(tooltip);\n  z-index: 100002;\n  padding: 4px 10px;\n  text-align: left;\n  font-size: 1.2rem;\n  line-height: 1.4;\n  color: var(--tooltipColor);\n  border-radius: 4px;\n  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.4);\n  white-space: nowrap;\n  transform: translateY(100%);\n}\n.uzFyE[tooltip]::after {\n  content: \"\";\n  height: calc(var(--arrowSize) + 2px);\n  width: calc(var(--arrowSize) + 2px);\n  border-left-color: transparent;\n  border-bottom-color: transparent;\n  transform: translateY(100%) rotate(var(--rotate));\n}\n.uzFyE[tooltip]::before {\n  left: 0;\n  bottom: calc(100% + var(--arrowSize));\n}\n.uzFyE[tooltip]::after {\n  left: var(--position);\n  bottom: calc(100% + var(--arrowSize) / 2);\n  transform: translateY(0) rotate(var(--rotate));\n}\n.Giihu {\n  --tooltipBgColor: #303133;\n  --tooltipBorderColor: #303133;\n  --tooltipColor: #fff;\n  --position: 15px;\n  --arrowSize: 8px;\n  --rotate: 135deg;\n}\n.Giihu[tooltip] {\n  position: relative;\n}\n.Giihu[tooltip]:hover::before, .Giihu[tooltip]:hover::after {\n  opacity: 1;\n  transition: opacity 0.2s, transform 0.2s;\n}\n.Giihu[tooltip]:hover::before {\n  transform: translateY(0);\n}\n.Giihu[tooltip]:hover::after {\n  transform: translateY(0) rotate(var(--rotate));\n}\n.Giihu[tooltip]::before, .Giihu[tooltip]::after {\n  position: absolute;\n  opacity: 0;\n  pointer-events: none;\n  z-index: 10000;\n  background-color: var(--tooltipBgColor);\n  border: 1px solid var(--tooltipBorderColor);\n  transition: opacity 0.2s, transform 0.2s;\n}\n.Giihu[tooltip]::before {\n  content: attr(tooltip);\n  z-index: 100002;\n  padding: 4px 10px;\n  text-align: left;\n  font-size: 1.2rem;\n  line-height: 1.4;\n  color: var(--tooltipColor);\n  border-radius: 4px;\n  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.4);\n  white-space: nowrap;\n  transform: translateY(100%);\n}\n.Giihu[tooltip]::after {\n  content: \"\";\n  height: calc(var(--arrowSize) + 2px);\n  width: calc(var(--arrowSize) + 2px);\n  border-left-color: transparent;\n  border-bottom-color: transparent;\n  transform: translateY(100%) rotate(var(--rotate));\n}\n.Giihu[tooltip]::before {\n  right: 0;\n  bottom: calc(100% + var(--arrowSize));\n}\n.Giihu[tooltip]::after {\n  right: var(--position);\n  bottom: calc(100% + var(--arrowSize) / 2);\n  transform: translateY(0) rotate(var(--rotate));\n}\n.bFVVt {\n  --tooltipBgColor: #303133;\n  --tooltipBorderColor: #303133;\n  --tooltipColor: #fff;\n  --position: 15px;\n  --arrowSize: 8px;\n  --rotate: -45deg;\n}\n.bFVVt[tooltip] {\n  position: relative;\n}\n.bFVVt[tooltip]:hover::before, .bFVVt[tooltip]:hover::after {\n  opacity: 1;\n  transition: opacity 0.2s, transform 0.2s;\n}\n.bFVVt[tooltip]:hover::before {\n  transform: translateY(0);\n}\n.bFVVt[tooltip]:hover::after {\n  transform: translateY(0) rotate(var(--rotate));\n}\n.bFVVt[tooltip]::before, .bFVVt[tooltip]::after {\n  position: absolute;\n  opacity: 0;\n  pointer-events: none;\n  z-index: 10000;\n  background-color: var(--tooltipBgColor);\n  border: 1px solid var(--tooltipBorderColor);\n  transition: opacity 0.2s, transform 0.2s;\n}\n.bFVVt[tooltip]::before {\n  content: attr(tooltip);\n  z-index: 100002;\n  padding: 4px 10px;\n  text-align: left;\n  font-size: 1.2rem;\n  line-height: 1.4;\n  color: var(--tooltipColor);\n  border-radius: 4px;\n  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.4);\n  white-space: nowrap;\n  transform: translateY(100%);\n}\n.bFVVt[tooltip]::after {\n  content: \"\";\n  height: calc(var(--arrowSize) + 2px);\n  width: calc(var(--arrowSize) + 2px);\n  border-left-color: transparent;\n  border-bottom-color: transparent;\n  transform: translateY(100%) rotate(var(--rotate));\n}\n.bFVVt[tooltip]::before {\n  left: 0;\n  top: calc(100% + var(--arrowSize));\n}\n.bFVVt[tooltip]::after {\n  left: var(--position);\n  top: calc(100% + var(--arrowSize) / 2);\n  transform: translateY(0) rotate(var(--rotate));\n}\n.oGmKq {\n  --tooltipBgColor: #303133;\n  --tooltipBorderColor: #303133;\n  --tooltipColor: #fff;\n  --position: 15px;\n  --arrowSize: 8px;\n  --rotate: -45deg;\n}\n.oGmKq[tooltip] {\n  position: relative;\n}\n.oGmKq[tooltip]:hover::before, .oGmKq[tooltip]:hover::after {\n  opacity: 1;\n  transition: opacity 0.2s, transform 0.2s;\n}\n.oGmKq[tooltip]:hover::before {\n  transform: translateY(0);\n}\n.oGmKq[tooltip]:hover::after {\n  transform: translateY(0) rotate(var(--rotate));\n}\n.oGmKq[tooltip]::before, .oGmKq[tooltip]::after {\n  position: absolute;\n  opacity: 0;\n  pointer-events: none;\n  z-index: 10000;\n  background-color: var(--tooltipBgColor);\n  border: 1px solid var(--tooltipBorderColor);\n  transition: opacity 0.2s, transform 0.2s;\n}\n.oGmKq[tooltip]::before {\n  content: attr(tooltip);\n  z-index: 100002;\n  padding: 4px 10px;\n  text-align: left;\n  font-size: 1.2rem;\n  line-height: 1.4;\n  color: var(--tooltipColor);\n  border-radius: 4px;\n  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.4);\n  white-space: nowrap;\n  transform: translateY(100%);\n}\n.oGmKq[tooltip]::after {\n  content: \"\";\n  height: calc(var(--arrowSize) + 2px);\n  width: calc(var(--arrowSize) + 2px);\n  border-left-color: transparent;\n  border-bottom-color: transparent;\n  transform: translateY(100%) rotate(var(--rotate));\n}\n.oGmKq[tooltip]::before {\n  right: 0;\n  top: calc(100% + var(--arrowSize));\n}\n.oGmKq[tooltip]::after {\n  right: var(--position);\n  top: calc(100% + var(--arrowSize) / 2);\n  transform: translateY(0) rotate(var(--rotate));\n}\n.svYWD {\n  --tooltipBgColor: #303133;\n  --tooltipBorderColor: #303133;\n  --tooltipColor: #fff;\n  --position: 15px;\n  --arrowSize: 8px;\n  --rotate: -45deg;\n}\n.svYWD[tooltip] {\n  position: relative;\n}\n.svYWD[tooltip]:hover::before, .svYWD[tooltip]:hover::after {\n  opacity: 1;\n  transition: opacity 0.2s, transform 0.2s;\n}\n.svYWD[tooltip]:hover::before {\n  transform: translateY(0);\n}\n.svYWD[tooltip]:hover::after {\n  transform: translateY(0) rotate(var(--rotate));\n}\n.svYWD[tooltip]::before, .svYWD[tooltip]::after {\n  position: absolute;\n  opacity: 0;\n  pointer-events: none;\n  z-index: 10000;\n  background-color: var(--tooltipBgColor);\n  border: 1px solid var(--tooltipBorderColor);\n  transition: opacity 0.2s, transform 0.2s;\n}\n.svYWD[tooltip]::before {\n  content: attr(tooltip);\n  z-index: 100002;\n  padding: 4px 10px;\n  text-align: left;\n  font-size: 1.2rem;\n  line-height: 1.4;\n  color: var(--tooltipColor);\n  border-radius: 4px;\n  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.4);\n  white-space: nowrap;\n  transform: translateY(100%);\n}\n.svYWD[tooltip]::after {\n  content: \"\";\n  height: calc(var(--arrowSize) + 2px);\n  width: calc(var(--arrowSize) + 2px);\n  border-left-color: transparent;\n  border-bottom-color: transparent;\n  transform: translateY(100%) rotate(var(--rotate));\n}\n.svYWD[tooltip]::before {\n  top: 0;\n  left: calc(100% + var(--arrowSize));\n}\n.svYWD[tooltip]::after {\n  top: var(--position);\n  left: calc(100% + var(--arrowSize) / 2);\n  transform: translateY(0) rotate(var(--rotate));\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"ellipsis": "ofth_",
	"huxy-tooltip": "hVmF3",
	"huxy-tooltip-topRight": "uzFyE",
	"huxy-tooltip-topLeft": "Giihu",
	"huxy-tooltip-bottomRight": "bFVVt",
	"huxy-tooltip-bottomLeft": "oGmKq",
	"huxy-tooltip-rightTop": "svYWD"
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

/***/ 257:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ huxy_components_tooltip; }
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(458);
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
// EXTERNAL MODULE: ../../node_modules/.pnpm/css-loader@6.7.3_webpack@5.75.0/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[2].use[1]!../../node_modules/.pnpm/less-loader@11.1.0_less@4.1.3+webpack@5.75.0/node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[2].use[2]!../huxy/components/tooltip/index.less
var tooltip = __webpack_require__(626);
;// CONCATENATED MODULE: ../huxy/components/tooltip/index.less

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(tooltip/* default */.Z, options);




       /* harmony default export */ var components_tooltip = (tooltip/* default */.Z && tooltip/* default.locals */.Z.locals ? tooltip/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ../huxy/components/tooltip/index.jsx


const Tooltip = ({ title, placement = "topRight", children, ellipsis, className, ...rest }) => /* @__PURE__ */ (0,jsx_runtime.jsx)(
  "span",
  {
    className: `${components_tooltip[`huxy-tooltip-${placement}`]}${className ? ` ${className}` : ""}`,
    tooltip: title != null ? title : children,
    ...rest,
    children: /* @__PURE__ */ (0,jsx_runtime.jsx)("span", { className: ellipsis ? components_tooltip.ellipsis : "", children })
  }
);
/* harmony default export */ var huxy_components_tooltip = (Tooltip);


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
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}__webpack_unused_export__=l;exports.jsx=q;__webpack_unused_export__=q;


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
  "default": function() { return /* binding */ ellipsis; }
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(458);
// EXTERNAL MODULE: external {"root":"React","commonjs":"react","commonjs2":"react","amd":"react"}
var external_root_React_commonjs_react_commonjs2_react_amd_react_ = __webpack_require__(899);
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

;// CONCATENATED MODULE: ../huxy/utils/hasProp.js
const hasProp = (obj, prop) => Object.prototype.hasOwnProperty.call(obj != null ? obj : {}, prop);
/* harmony default export */ var utils_hasProp = (hasProp);

;// CONCATENATED MODULE: ../huxy/utils/isRef.js

const isRef = (ref) => utils_hasProp(ref, "current");
/* harmony default export */ var utils_isRef = (isRef);

;// CONCATENATED MODULE: ../huxy/utils/resize.js



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
  element = utils_isRef(element) ? element.current : element != null ? element : document.body;
  let domObj = void 0;
  let listeners = [];
  const resizeListener = utils_debounce(() => listeners.map((listener) => listener(element)), delay);
  const bind = (cb) => {
    if (!domObj) {
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
/* harmony default export */ var utils_resize = (resize);

;// CONCATENATED MODULE: ../huxy/use/useRaf/index.jsx

const useRaf = (initState = {}) => {
  const frame = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useRef)(0);
  const [state, setState] = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useState)(initState);
  const setRaf = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useCallback)((value) => {
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => setState(value));
  }, []);
  (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useEffect)(() => () => cancelAnimationFrame(frame.current), []);
  return [state, setRaf];
};
/* harmony default export */ var use_useRaf = (useRaf);

;// CONCATENATED MODULE: ../huxy/use/useEleResize/index.jsx





const useEleResize = (ref = null, delay = 60) => {
  const element = utils_isRef(ref) ? ref.current : ref;
  const { bind, destroy } = utils_resize(element, delay);
  const [state, setState] = use_useRaf(utils_getViewportSize(element));
  (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useEffect)(() => {
    const handler = () => element && setState(utils_getViewportSize(element));
    bind(handler);
    return () => destroy();
  }, [element]);
  return state;
};
/* harmony default export */ var use_useEleResize = (useEleResize);

;// CONCATENATED MODULE: ../huxy/utils/setStyle.js

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
/* harmony default export */ var utils_setStyle = (setStyle);

;// CONCATENATED MODULE: ../huxy/utils/getTextSize.js



const getTextSize = (text, styles = {}, ele) => {
  if (!utils_isBrowser()) {
    return;
  }
  ele = utils_isRef(ele) ? ele.current : ele != null ? ele : document.body;
  const span = document.createElement("span");
  span.setAttribute("style", `pointer-events: none; z-index: -1; opacity: 0;`);
  styles && utils_setStyle(span, styles);
  span.innerText = text;
  ele.appendChild(span);
  const rect = span.getBoundingClientRect();
  ele.removeChild(span);
  return rect;
};
/* harmony default export */ var utils_getTextSize = (getTextSize);

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

// EXTERNAL MODULE: ../huxy/components/tooltip/index.jsx + 1 modules
var tooltip = __webpack_require__(257);
;// CONCATENATED MODULE: ../huxy/components/ellipsis/index.jsx






const ellipsisStyle = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  display: "inline-block",
  width: "100%"
};
const Ellipsis = (props) => {
  var _a, _b, _c, _d;
  const { children } = props;
  const isStringChild = typeof children === "string";
  const text = isStringChild ? children : (_c = (_a = children == null ? void 0 : children.props) == null ? void 0 : _a.title) != null ? _c : (_b = children == null ? void 0 : children.props) == null ? void 0 : _b.children;
  const span = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useRef)();
  const [ellipsis, setEllipsis] = (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useState)(false);
  const state = use_useEleResize(span, 250);
  (0,external_root_React_commonjs_react_commonjs2_react_amd_react_.useEffect)(() => {
    if (span.current) {
      const { width: tWidth } = utils_getTextSize(text);
      const { width } = utils_getPosition(span.current);
      const isEllipsis = tWidth > width;
      if (isEllipsis !== ellipsis) {
        setEllipsis(isEllipsis);
      }
    }
  }, [text, state.width]);
  return /* @__PURE__ */ (0,jsx_runtime.jsx)("span", { ref: span, style: { width: "100%", display: "inline-block" }, children: ellipsis ? isStringChild ? /* @__PURE__ */ (0,jsx_runtime.jsx)(tooltip["default"], { ...props, ellipsis: true }) : /* @__PURE__ */ (0,jsx_runtime.jsx)("span", { style: ellipsisStyle, children }) : isStringChild ? children : (_d = children == null ? void 0 : children.props) == null ? void 0 : _d.children });
};
/* harmony default export */ var ellipsis = (Ellipsis);

}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});