import t from"memoizee";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var r,o=function(t,n){return t.map(function(t){return n[t]||t}).join(" ")},e=(r=t,function(t){return r(function(r){if(r){if(Array.isArray(r))return" ".concat(o(r,t));if("string"==typeof r)return" ".concat(o(r.split(" "),t));if("object"===n(r)){var e=Object.keys(r).filter(function(t){return r[t]});return" ".concat(o(e,t))}}return""},{length:1,maxAge:5e3,primitive:!0})});console.warn("USING MEMO IMPLEMENTATION");export default e;
//# sourceMappingURL=bindStyleNameMemo.mjs.map
