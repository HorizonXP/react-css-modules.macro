function t(n) {
  return (t =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function(t) {
          return typeof t;
        }
      : function(t) {
          return t &&
            "function" == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? "symbol"
            : typeof t;
        })(n);
}
var n,
  r = function(t, n) {
    return t
      .map(function(t) {
        return n[t] || t;
      })
      .join(" ");
  },
  o =
    ((n = function(t) {
      return t;
    }),
    function(o) {
      return n(function(n) {
        if (n) {
          if (Array.isArray(n)) return " ".concat(r(n, o));
          if ("string" == typeof n) return " ".concat(r(n.split(" "), o));
          if ("object" === t(n)) {
            var e = Object.keys(n).filter(function(t) {
              return n[t];
            });
            return " ".concat(r(e, o));
          }
        }
        return "";
      });
    });
console.warn("USING PURE IMPLEMENTATION"), (module.exports = o);
//# sourceMappingURL=bindStyleNamePure.js.map
