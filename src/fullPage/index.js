/*! For license information please see index.js.LICENSE.txt */
!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("react")):"function"==typeof define&&define.amd?define("components",["react"],n):"object"==typeof exports?exports.components=n(require("react")):t.components=n(t.React)}(this,(function(t){return function(){var n={7111:function(t,n,r){var e=r(9859),o=r(6733),u=r(9821),i=e.TypeError;t.exports=function(t){if(o(t))return t;throw i(u(t)+" is not a function")}},9736:function(t,n,r){var e=r(95),o=r(2391),u=r(1787),i=e("unscopables"),c=Array.prototype;null==c[i]&&u.f(c,i,{configurable:!0,value:o(null)}),t.exports=function(t){c[i][t]=!0}},1176:function(t,n,r){var e=r(9859),o=r(5052),u=e.String,i=e.TypeError;t.exports=function(t){if(o(t))return t;throw i(u(t)+" is not an object")}},9540:function(t,n,r){var e=r(905),o=r(3231),u=r(9646),i=function(t){return function(n,r,i){var c,f=e(n),a=u(f),s=o(i,a);if(t&&r!=r){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:i(!0),indexOf:i(!1)}},9996:function(t,n,r){var e=r(7636),o=r(5968),u=r(9337),i=r(2991),c=r(9646),f=r(7501),a=o([].push),s=function(t){var n=1==t,r=2==t,o=3==t,s=4==t,p=6==t,l=7==t,v=5==t||p;return function(y,d,b,m){for(var h,g,x=i(y),O=u(x),w=e(d,b),S=c(O),j=0,E=m||f,P=n?E(y,S):r||l?E(y,0):void 0;S>j;j++)if((v||j in O)&&(g=w(h=O[j],j,x),t))if(n)P[j]=g;else if(g)switch(t){case 3:return!0;case 5:return h;case 6:return j;case 2:a(P,h)}else switch(t){case 4:return!1;case 7:a(P,h)}return p?-1:o||s?s:P}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterReject:s(7)}},1460:function(t,n,r){var e=r(4229),o=r(95),u=r(6358),i=o("species");t.exports=function(t){return u>=51||!e((function(){var n=[];return(n.constructor={})[i]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},8760:function(t,n,r){var e=r(9859),o=r(3718),u=r(2359),i=r(5052),c=r(95)("species"),f=e.Array;t.exports=function(t){var n;return o(t)&&(n=t.constructor,(u(n)&&(n===f||o(n.prototype))||i(n)&&null===(n=n[c]))&&(n=void 0)),void 0===n?f:n}},7501:function(t,n,r){var e=r(8760);t.exports=function(t,n){return new(e(t))(0===n?0:n)}},7079:function(t,n,r){var e=r(5968),o=e({}.toString),u=e("".slice);t.exports=function(t){return u(o(t),8,-1)}},1589:function(t,n,r){var e=r(9859),o=r(1601),u=r(6733),i=r(7079),c=r(95)("toStringTag"),f=e.Object,a="Arguments"==i(function(){return arguments}());t.exports=o?i:function(t){var n,r,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=f(t),c))?r:a?i(n):"Object"==(e=i(n))&&u(n.callee)?"Arguments":e}},7081:function(t,n,r){var e=r(8270),o=r(4826),u=r(7933),i=r(1787);t.exports=function(t,n,r){for(var c=o(n),f=i.f,a=u.f,s=0;s<c.length;s++){var p=c[s];e(t,p)||r&&e(r,p)||f(t,p,a(n,p))}}},8127:function(t,n,r){var e=r(95)("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(r){try{return n[e]=!1,"/./"[t](n)}catch(t){}}return!1}},5762:function(t,n,r){var e=r(7400),o=r(1787),u=r(5358);t.exports=e?function(t,n,r){return o.f(t,n,u(1,r))}:function(t,n,r){return t[n]=r,t}},5358:function(t){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},7400:function(t,n,r){var e=r(4229);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},2635:function(t,n,r){var e=r(9859),o=r(5052),u=e.document,i=o(u)&&o(u.createElement);t.exports=function(t){return i?u.createElement(t):{}}},598:function(t,n,r){var e=r(1333);t.exports=e("navigator","userAgent")||""},6358:function(t,n,r){var e,o,u=r(9859),i=r(598),c=u.process,f=u.Deno,a=c&&c.versions||f&&f.version,s=a&&a.v8;s&&(o=(e=s.split("."))[0]>0&&e[0]<4?1:+(e[0]+e[1])),!o&&i&&(!(e=i.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=i.match(/Chrome\/(\d+)/))&&(o=+e[1]),t.exports=o},3837:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},3103:function(t,n,r){var e=r(9859),o=r(7933).f,u=r(5762),i=r(7487),c=r(2079),f=r(7081),a=r(6541);t.exports=function(t,n){var r,s,p,l,v,y=t.target,d=t.global,b=t.stat;if(r=d?e:b?e[y]||c(y,{}):(e[y]||{}).prototype)for(s in n){if(l=n[s],p=t.noTargetGet?(v=o(r,s))&&v.value:r[s],!a(d?s:y+(b?".":"#")+s,t.forced)&&void 0!==p){if(typeof l==typeof p)continue;f(l,p)}(t.sham||p&&p.sham)&&u(l,"sham",!0),i(r,s,l,t)}}},4229:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},7636:function(t,n,r){var e=r(5968),o=r(7111),u=r(7188),i=e(e.bind);t.exports=function(t,n){return o(t),void 0===n?t:u?i(t,n):function(){return t.apply(n,arguments)}}},7188:function(t,n,r){var e=r(4229);t.exports=!e((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},266:function(t,n,r){var e=r(7188),o=Function.prototype.call;t.exports=e?o.bind(o):function(){return o.apply(o,arguments)}},1805:function(t,n,r){var e=r(7400),o=r(8270),u=Function.prototype,i=e&&Object.getOwnPropertyDescriptor,c=o(u,"name"),f=c&&"something"===function(){}.name,a=c&&(!e||e&&i(u,"name").configurable);t.exports={EXISTS:c,PROPER:f,CONFIGURABLE:a}},5968:function(t,n,r){var e=r(7188),o=Function.prototype,u=o.bind,i=o.call,c=e&&u.bind(i,i);t.exports=e?function(t){return t&&c(t)}:function(t){return t&&function(){return i.apply(t,arguments)}}},1333:function(t,n,r){var e=r(9859),o=r(6733),u=function(t){return o(t)?t:void 0};t.exports=function(t,n){return arguments.length<2?u(e[t]):e[t]&&e[t][n]}},5300:function(t,n,r){var e=r(7111);t.exports=function(t,n){var r=t[n];return null==r?void 0:e(r)}},9859:function(t,n,r){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},8270:function(t,n,r){var e=r(5968),o=r(2991),u=e({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,n){return u(o(t),n)}},5977:function(t){t.exports={}},3777:function(t,n,r){var e=r(1333);t.exports=e("document","documentElement")},4394:function(t,n,r){var e=r(7400),o=r(4229),u=r(2635);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(u("div"),"a",{get:function(){return 7}}).a}))},9337:function(t,n,r){var e=r(9859),o=r(5968),u=r(4229),i=r(7079),c=e.Object,f=o("".split);t.exports=u((function(){return!c("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?f(t,""):c(t)}:c},8511:function(t,n,r){var e=r(5968),o=r(6733),u=r(5353),i=e(Function.toString);o(u.inspectSource)||(u.inspectSource=function(t){return i(t)}),t.exports=u.inspectSource},6407:function(t,n,r){var e,o,u,i=r(8694),c=r(9859),f=r(5968),a=r(5052),s=r(5762),p=r(8270),l=r(5353),v=r(4399),y=r(5977),d="Object already initialized",b=c.TypeError,m=c.WeakMap;if(i||l.state){var h=l.state||(l.state=new m),g=f(h.get),x=f(h.has),O=f(h.set);e=function(t,n){if(x(h,t))throw new b(d);return n.facade=t,O(h,t,n),n},o=function(t){return g(h,t)||{}},u=function(t){return x(h,t)}}else{var w=v("state");y[w]=!0,e=function(t,n){if(p(t,w))throw new b(d);return n.facade=t,s(t,w,n),n},o=function(t){return p(t,w)?t[w]:{}},u=function(t){return p(t,w)}}t.exports={set:e,get:o,has:u,enforce:function(t){return u(t)?o(t):e(t,{})},getterFor:function(t){return function(n){var r;if(!a(n)||(r=o(n)).type!==t)throw b("Incompatible receiver, "+t+" required");return r}}}},3718:function(t,n,r){var e=r(7079);t.exports=Array.isArray||function(t){return"Array"==e(t)}},6733:function(t){t.exports=function(t){return"function"==typeof t}},2359:function(t,n,r){var e=r(5968),o=r(4229),u=r(6733),i=r(1589),c=r(1333),f=r(8511),a=function(){},s=[],p=c("Reflect","construct"),l=/^\s*(?:class|function)\b/,v=e(l.exec),y=!l.exec(a),d=function(t){if(!u(t))return!1;try{return p(a,s,t),!0}catch(t){return!1}},b=function(t){if(!u(t))return!1;switch(i(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return y||!!v(l,f(t))}catch(t){return!0}};b.sham=!0,t.exports=!p||o((function(){var t;return d(d.call)||!d(Object)||!d((function(){t=!0}))||t}))?b:d},6541:function(t,n,r){var e=r(4229),o=r(6733),u=/#|\.prototype\./,i=function(t,n){var r=f[c(t)];return r==s||r!=a&&(o(n)?e(n):!!n)},c=i.normalize=function(t){return String(t).replace(u,".").toLowerCase()},f=i.data={},a=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},5052:function(t,n,r){var e=r(6733);t.exports=function(t){return"object"==typeof t?null!==t:e(t)}},4231:function(t){t.exports=!1},8311:function(t,n,r){var e=r(5052),o=r(7079),u=r(95)("match");t.exports=function(t){var n;return e(t)&&(void 0!==(n=t[u])?!!n:"RegExp"==o(t))}},9395:function(t,n,r){var e=r(9859),o=r(1333),u=r(6733),i=r(1321),c=r(6969),f=e.Object;t.exports=c?function(t){return"symbol"==typeof t}:function(t){var n=o("Symbol");return u(n)&&i(n.prototype,f(t))}},9646:function(t,n,r){var e=r(4237);t.exports=function(t){return e(t.length)}},3839:function(t,n,r){var e=r(6358),o=r(4229);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&e&&e<41}))},8694:function(t,n,r){var e=r(9859),o=r(6733),u=r(8511),i=e.WeakMap;t.exports=o(i)&&/native code/.test(u(i))},7272:function(t,n,r){var e=r(9859),o=r(8311),u=e.TypeError;t.exports=function(t){if(o(t))throw u("The method doesn't accept regular expressions");return t}},2391:function(t,n,r){var e,o=r(1176),u=r(219),i=r(3837),c=r(5977),f=r(3777),a=r(2635),s=r(4399),p=s("IE_PROTO"),l=function(){},v=function(t){return"<script>"+t+"</"+"script>"},y=function(t){t.write(v("")),t.close();var n=t.parentWindow.Object;return t=null,n},d=function(){try{e=new ActiveXObject("htmlfile")}catch(t){}var t,n;d="undefined"!=typeof document?document.domain&&e?y(e):((n=a("iframe")).style.display="none",f.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write(v("document.F=Object")),t.close(),t.F):y(e);for(var r=i.length;r--;)delete d.prototype[i[r]];return d()};c[p]=!0,t.exports=Object.create||function(t,n){var r;return null!==t?(l.prototype=o(t),r=new l,l.prototype=null,r[p]=t):r=d(),void 0===n?r:u.f(r,n)}},219:function(t,n,r){var e=r(7400),o=r(7137),u=r(1787),i=r(1176),c=r(905),f=r(5632);n.f=e&&!o?Object.defineProperties:function(t,n){i(t);for(var r,e=c(n),o=f(n),a=o.length,s=0;a>s;)u.f(t,r=o[s++],e[r]);return t}},1787:function(t,n,r){var e=r(9859),o=r(7400),u=r(4394),i=r(7137),c=r(1176),f=r(9310),a=e.TypeError,s=Object.defineProperty,p=Object.getOwnPropertyDescriptor,l="enumerable",v="configurable",y="writable";n.f=o?i?function(t,n,r){if(c(t),n=f(n),c(r),"function"==typeof t&&"prototype"===n&&"value"in r&&y in r&&!r.writable){var e=p(t,n);e&&e.writable&&(t[n]=r.value,r={configurable:v in r?r.configurable:e.configurable,enumerable:l in r?r.enumerable:e.enumerable,writable:!1})}return s(t,n,r)}:s:function(t,n,r){if(c(t),n=f(n),c(r),u)try{return s(t,n,r)}catch(t){}if("get"in r||"set"in r)throw a("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},7933:function(t,n,r){var e=r(7400),o=r(266),u=r(9195),i=r(5358),c=r(905),f=r(9310),a=r(8270),s=r(4394),p=Object.getOwnPropertyDescriptor;n.f=e?p:function(t,n){if(t=c(t),n=f(n),s)try{return p(t,n)}catch(t){}if(a(t,n))return i(!o(u.f,t,n),t[n])}},8151:function(t,n,r){var e=r(140),o=r(3837).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},894:function(t,n){n.f=Object.getOwnPropertySymbols},1321:function(t,n,r){var e=r(5968);t.exports=e({}.isPrototypeOf)},140:function(t,n,r){var e=r(5968),o=r(8270),u=r(905),i=r(9540).indexOf,c=r(5977),f=e([].push);t.exports=function(t,n){var r,e=u(t),a=0,s=[];for(r in e)!o(c,r)&&o(e,r)&&f(s,r);for(;n.length>a;)o(e,r=n[a++])&&(~i(s,r)||f(s,r));return s}},5632:function(t,n,r){var e=r(140),o=r(3837);t.exports=Object.keys||function(t){return e(t,o)}},9195:function(t,n){"use strict";var r={}.propertyIsEnumerable,e=Object.getOwnPropertyDescriptor,o=e&&!r.call({1:2},1);n.f=o?function(t){var n=e(this,t);return!!n&&n.enumerable}:r},4059:function(t,n,r){"use strict";var e=r(1601),o=r(1589);t.exports=e?{}.toString:function(){return"[object "+o(this)+"]"}},2914:function(t,n,r){var e=r(9859),o=r(266),u=r(6733),i=r(5052),c=e.TypeError;t.exports=function(t,n){var r,e;if("string"===n&&u(r=t.toString)&&!i(e=o(r,t)))return e;if(u(r=t.valueOf)&&!i(e=o(r,t)))return e;if("string"!==n&&u(r=t.toString)&&!i(e=o(r,t)))return e;throw c("Can't convert object to primitive value")}},4826:function(t,n,r){var e=r(1333),o=r(5968),u=r(8151),i=r(894),c=r(1176),f=o([].concat);t.exports=e("Reflect","ownKeys")||function(t){var n=u.f(c(t)),r=i.f;return r?f(n,r(t)):n}},7487:function(t,n,r){var e=r(9859),o=r(6733),u=r(8270),i=r(5762),c=r(2079),f=r(8511),a=r(6407),s=r(1805).CONFIGURABLE,p=a.get,l=a.enforce,v=String(String).split("String");(t.exports=function(t,n,r,f){var a,p=!!f&&!!f.unsafe,y=!!f&&!!f.enumerable,d=!!f&&!!f.noTargetGet,b=f&&void 0!==f.name?f.name:n;o(r)&&("Symbol("===String(b).slice(0,7)&&(b="["+String(b).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!u(r,"name")||s&&r.name!==b)&&i(r,"name",b),(a=l(r)).source||(a.source=v.join("string"==typeof b?b:""))),t!==e?(p?!d&&t[n]&&(y=!0):delete t[n],y?t[n]=r:i(t,n,r)):y?t[n]=r:c(n,r)})(Function.prototype,"toString",(function(){return o(this)&&p(this).source||f(this)}))},8885:function(t,n,r){var e=r(9859).TypeError;t.exports=function(t){if(null==t)throw e("Can't call method on "+t);return t}},2079:function(t,n,r){var e=r(9859),o=Object.defineProperty;t.exports=function(t,n){try{o(e,t,{value:n,configurable:!0,writable:!0})}catch(r){e[t]=n}return n}},4399:function(t,n,r){var e=r(3036),o=r(1441),u=e("keys");t.exports=function(t){return u[t]||(u[t]=o(t))}},5353:function(t,n,r){var e=r(9859),o=r(2079),u="__core-js_shared__",i=e[u]||o(u,{});t.exports=i},3036:function(t,n,r){var e=r(4231),o=r(5353);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.22.2",mode:e?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.2/LICENSE",source:"https://github.com/zloirock/core-js"})},3231:function(t,n,r){var e=r(3329),o=Math.max,u=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):u(r,n)}},905:function(t,n,r){var e=r(9337),o=r(8885);t.exports=function(t){return e(o(t))}},3329:function(t){var n=Math.ceil,r=Math.floor;t.exports=function(t){var e=+t;return e!=e||0===e?0:(e>0?r:n)(e)}},4237:function(t,n,r){var e=r(3329),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},2991:function(t,n,r){var e=r(9859),o=r(8885),u=e.Object;t.exports=function(t){return u(o(t))}},2066:function(t,n,r){var e=r(9859),o=r(266),u=r(5052),i=r(9395),c=r(5300),f=r(2914),a=r(95),s=e.TypeError,p=a("toPrimitive");t.exports=function(t,n){if(!u(t)||i(t))return t;var r,e=c(t,p);if(e){if(void 0===n&&(n="default"),r=o(e,t,n),!u(r)||i(r))return r;throw s("Can't convert object to primitive value")}return void 0===n&&(n="number"),f(t,n)}},9310:function(t,n,r){var e=r(2066),o=r(9395);t.exports=function(t){var n=e(t,"string");return o(n)?n:n+""}},1601:function(t,n,r){var e={};e[r(95)("toStringTag")]="z",t.exports="[object z]"===String(e)},3326:function(t,n,r){var e=r(9859),o=r(1589),u=e.String;t.exports=function(t){if("Symbol"===o(t))throw TypeError("Cannot convert a Symbol value to a string");return u(t)}},9821:function(t,n,r){var e=r(9859).String;t.exports=function(t){try{return e(t)}catch(t){return"Object"}}},1441:function(t,n,r){var e=r(5968),o=0,u=Math.random(),i=e(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+i(++o+u,36)}},6969:function(t,n,r){var e=r(3839);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},7137:function(t,n,r){var e=r(7400),o=r(4229);t.exports=e&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},95:function(t,n,r){var e=r(9859),o=r(3036),u=r(8270),i=r(1441),c=r(3839),f=r(6969),a=o("wks"),s=e.Symbol,p=s&&s.for,l=f?s:s&&s.withoutSetter||i;t.exports=function(t){if(!u(a,t)||!c&&"string"!=typeof a[t]){var n="Symbol."+t;c&&u(s,t)?a[t]=s[t]:a[t]=f&&p?p(n):l(n)}return a[t]}},9228:function(t,n,r){"use strict";var e=r(3103),o=r(9996).find,u=r(9736),i="find",c=!0;i in[]&&Array(1).find((function(){c=!1})),e({target:"Array",proto:!0,forced:c},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),u(i)},9529:function(t,n,r){"use strict";var e=r(3103),o=r(9540).includes,u=r(9736);e({target:"Array",proto:!0},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),u("includes")},3450:function(t,n,r){"use strict";var e=r(3103),o=r(9996).map;e({target:"Array",proto:!0,forced:!r(1460)("map")},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},8188:function(t,n,r){var e=r(1601),o=r(7487),u=r(4059);e||o(Object.prototype,"toString",u,{unsafe:!0})},1235:function(t,n,r){"use strict";var e=r(3103),o=r(5968),u=r(7272),i=r(8885),c=r(3326),f=r(8127),a=o("".indexOf);e({target:"String",proto:!0,forced:!f("includes")},{includes:function(t){return!!~a(c(i(this)),c(u(t)),arguments.length>1?arguments[1]:void 0)}})},1837:function(t,n,r){"use strict";var e=r(3899),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function a(t,n,r){var e,u={},a=null,s=null;for(e in void 0!==r&&(a=""+r),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(s=n.ref),n)i.call(n,e)&&!f.hasOwnProperty(e)&&(u[e]=n[e]);if(t&&t.defaultProps)for(e in n=t.defaultProps)void 0===u[e]&&(u[e]=n[e]);return{$$typeof:o,type:t,key:a,ref:s,props:u,_owner:c.current}}n.jsx=a},2322:function(t,n,r){"use strict";t.exports=r(1837)},3899:function(n){"use strict";n.exports=t}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var u=r[t]={exports:{}};return n[t](u,u.exports,e),u.exports}e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var o={};return function(){"use strict";e.r(o),e.d(o,{default:function(){return l}});var t=e(3899);e(9228),e(8188),e(3450);function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}e(9529),e(1235);var r=function(){return!["undefined"==typeof window?"undefined":n(window),"undefined"==typeof document?"undefined":n(document)].includes("undefined")},u=function(t,n){return Object.prototype.hasOwnProperty.call(null!=t?t:{},n)},i=function(t){return u(t,"current")},c=["","webkit","moz","ms"],f=c.map((function(t){return"".concat(t,"fullscreenchange")})),a=function(t){if(r()){t=(t=i(t)?t.current:t)||document.body;var n,e,o,u,f=function(t){return c.map((function(t){return t?"".concat(t,"FullscreenElement"):"fullscreenElement"})).find((function(n){return t[n]}))}(document),a=function(t){return c.map((function(t){return t?"".concat(t,"RequestFullscreen"):"requestFullscreen"})).find((function(n){return t[n]}))}(t),s=function(t){return c.map((function(t){return t?"".concat(t,"ExitFullscreen"):"exitFullscreen"})).find((function(n){return t[n]}))}(document);if(document[f])null==(n=(e=document)[s])||n.call(e);else null==(o=(u=t)[a])||o.call(u)}},s=e(2322),p=function(){return(0,s.jsx)("i",{children:"..."})},l=function(n){var e=n.panel,o=n.fullIcon,u=void 0===o?p:o,c=n.exitIcon,l=void 0===c?p:c,v=i(e)?e.current:e,y=(0,t.useState)(),d=y[0],b=y[1];(0,t.useEffect)((function(){var t=function(t){if(r())return f.map((function(n){return document.addEventListener(n,t,!1)})),function(){return f.map((function(n){return document.removeEventListener(n,t,!1)}))}}((function(){b((function(t){return!t}))}));return function(){return t()}}),[]);var m=d?l:u;return(0,s.jsx)(m,{onClick:function(t){return a(v)}})}}(),o}()}));