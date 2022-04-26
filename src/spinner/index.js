/*! For license information please see index.js.LICENSE.txt */
!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("react")):"function"==typeof define&&define.amd?define("components",["react"],n):"object"==typeof exports?exports.components=n(require("react")):e.components=n(e.React)}(this,(function(e){return function(){"use strict";var n={1897:function(e,n,t){var r=t(9601),o=t.n(r),i=t(2609),a=t.n(i)()(o());a.push([e.id,'@keyframes before {\n  0% {\n    width: 0.6rem;\n    box-shadow: 1.2rem -0.6rem #ff3e38, -1.2rem 0.6rem #318ffa;\n  }\n  35% {\n    width: 3rem;\n    box-shadow: 0 -0.6rem #ff3e38, 0 0.6rem #318ffa;\n  }\n  70% {\n    width: 0.6rem;\n    box-shadow: -1.2rem -0.6rem #ff3e38, 1.2rem 0.6rem #318ffa;\n  }\n  100% {\n    box-shadow: 1.2rem -0.6rem #ff3e38, -1.2rem 0.6rem #318ffa;\n  }\n}\n@keyframes after {\n  0% {\n    height: 0.6rem;\n    box-shadow: 0.6rem 1.2rem #6ce581, -0.6rem -1.2rem #fecb2e;\n  }\n  35% {\n    height: 3rem;\n    box-shadow: 0.6rem 0 #6ce581, -0.6rem 0 #fecb2e;\n  }\n  70% {\n    height: 0.6rem;\n    box-shadow: 0.6rem -1.2rem #6ce581, -0.6rem 1.2rem #fecb2e;\n  }\n  100% {\n    box-shadow: 0.6rem 1.2rem #6ce581, -0.6rem -1.2rem #fecb2e;\n  }\n}\n.spinner {\n  position: relative;\n  display: block;\n  overflow: hidden;\n  pointer-events: auto;\n  min-height: 100px;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 999;\n  background-color: hsla(0, 0%, 72%, 0.24);\n}\n.spinner.global {\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n}\n.spinner .spinning {\n  width: 3rem;\n  height: 3rem;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%) rotate(165deg);\n  margin: 0;\n}\n.spinner .spinning::before,\n.spinner .spinning::after {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  display: block;\n  width: 0.6rem;\n  height: 0.6rem;\n  border-radius: 0.3rem;\n  transform: translate(-50%, -50%);\n}\n.spinner .spinning::before {\n  animation: before 1.5s infinite;\n}\n.spinner .spinning::after {\n  animation: after 1.5s infinite;\n}\n',""]),a.locals={},n.Z=a},2609:function(e){e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var f=0;f<e.length;f++){var u=[].concat(e[f]);r&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},9601:function(e){e.exports=function(e){return e[1]}},1837:function(e,n,t){var r=t(3899),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function f(e,n,t){var r,i={},f=null,u=null;for(r in void 0!==t&&(f=""+t),void 0!==n.key&&(f=""+n.key),void 0!==n.ref&&(u=n.ref),n)a.call(n,r)&&!c.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:o,type:e,key:f,ref:u,props:i,_owner:s.current}}n.jsx=f},2322:function(e,n,t){e.exports=t(1837)},6062:function(e){var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],s=0;s<e.length;s++){var c=e[s],f=r.base?c[0]+r.base:c[0],u=i[f]||0,p="".concat(f," ").concat(u);i[f]=u+1;var l=t(p),d={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==l)n[l].references++,n[l].updater(d);else{var m=o(d,r);r.byIndex=s,n.splice(s,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function o(e,n){var t=n.domAPI(n);t.update(e);return function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=t(i[a]);n[s].references--}for(var c=r(e,o),f=0;f<i.length;f++){var u=t(i[f]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}i=c}}},6793:function(e){var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},1173:function(e){e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},7892:function(e,n,t){e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},4036:function(e){e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},2464:function(e){e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},3899:function(n){n.exports=e}},t={};function r(e){var o=t[e];if(void 0!==o)return o.exports;var i=t[e]={id:e,exports:{}};return n[e](i,i.exports,r),i.exports}r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,{a:n}),n},r.d=function(e,n){for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return function(){r.r(o),r.d(o,{default:function(){return b}});var e=r(6062),n=r.n(e),t=r(4036),i=r.n(t),a=r(6793),s=r.n(a),c=r(7892),f=r.n(c),u=r(1173),p=r.n(u),l=r(2464),d=r.n(l),m=r(1897),h={};h.styleTagTransform=d(),h.setAttributes=f(),h.insert=s().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=p();n()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;var v=r(2322),b=function(e){var n=e.global;return(0,v.jsx)("div",{className:"spinner".concat(n?" global":""),children:(0,v.jsx)("figure",{className:"spinning"})})}}(),o}()}));