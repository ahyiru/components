/*! For license information please see index.js.LICENSE.txt */
!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("react")):"function"==typeof define&&define.amd?define("components",["react"],r):"object"==typeof exports?exports.components=r(require("react")):e.components=r(e.React)}(this,(function(e){return function(){"use strict";var r={7320:function(e){var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,f){for(var i,c,u=o(e),a=1;a<arguments.length;a++){for(var p in i=Object(arguments[a]))t.call(i,p)&&(u[p]=i[p]);if(r){c=r(i);for(var s=0;s<c.length;s++)n.call(i,c[s])&&(u[c[s]]=i[c[s]])}}return u}},1837:function(e,r,t){t(7320);var n=t(3899),o=60103;if(60107,"function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),f("react.fragment")}var i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,u={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,t){var n,f={},a=null,p=null;for(n in void 0!==t&&(a=""+t),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(p=r.ref),r)c.call(r,n)&&!u.hasOwnProperty(n)&&(f[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===f[n]&&(f[n]=r[n]);return{$$typeof:o,type:e,key:a,ref:p,props:f,_owner:i.current}}r.jsx=a},2322:function(e,r,t){e.exports=t(1837)},3899:function(r){r.exports=e}},t={};function n(e){var o=t[e];if(void 0!==o)return o.exports;var f=t[e]={exports:{}};return r[e](f,f.exports,n),f.exports}n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return function(){n.r(o);var e=n(2322);o.default=function(r){var t=r.list,n=r.Value;if("function"==typeof n||"function"==typeof(null==n?void 0:n.render))return(0,e.jsx)(n,{});if("string"==typeof n){var o=null==t?void 0:t[n];return o?(0,e.jsx)(o,{}):(0,e.jsx)("i",{className:n})}return n||null}}(),o}()}));