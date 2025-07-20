(() => {
  var e = {
      7061: (e, t, n) => {
        var r = n(8698).default;
        function a() {
          "use strict";

          e.exports = a = function () {
            return t;
          }, e.exports.__esModule = true, e.exports.default = e.exports;
          var t = {},
            n = Object.prototype,
            i = n.hasOwnProperty,
            s = Object.defineProperty || function (e, t, n) {
              e[t] = n.value;
            },
            u = "function" == typeof Symbol ? Symbol : {},
            c = u.iterator || "@@iterator",
            o = u.asyncIterator || "@@asyncIterator",
            l = u.toStringTag || "@@toStringTag";
          function f(e, t, n) {
            Object.defineProperty(e, t, {
              value: n,
              enumerable: true,
              configurable: true,
              writable: true
            })
            return e[t];
          }
          try {
            f({}, "");
          } catch (e) {
            f = function (e, t, n) {
              e[t] = n;
              return n;
            };
          }
          function h(e, t, n, r) {
            var a = t && t.prototype instanceof d ? t : d,
              i = Object.create(a.prototype),
              u = new _(r || []);
            s(i, "_invoke", {
              value: j(e, n, u)
            })
            return i;
          }
          function p(e, t, n) {
            try {
              return {
                type: "normal",
                arg: e.call(t, n)
              };
            } catch (e) {
              return {
                type: "throw",
                arg: e
              };
            }
          }
          t.wrap = h;
          var v = {};
          function d() {}
          function b() {}
          function y() {}
          var m = {};
          f(m, c, function () {
            return this;
          });
          var g = Object.getPrototypeOf,
            k = g && g(g(A([])));
          k && k !== n && i.call(k, c) && (m = k);
          var x = y.prototype = d.prototype = Object.create(m);
          function w(e) {
            ["next", "throw", "return"].forEach(function (t) {
              f(e, t, function (e) {
                return this._invoke(t, e);
              });
            });
          }
          function S(e, t) {
            function n(a, s, u, c) {
              var o = p(e[a], e, s);
              if ("throw" !== o.type) {
                var l = o.arg,
                  f = l.value;
                return f && "object" == r(f) && i.call(f, "__await") ? t.resolve(f.__await).then(function (e) {
                  n("next", e, u, c);
                }, function (e) {
                  n("throw", e, u, c);
                }) : t.resolve(f).then(function (e) {
                  l.value = e, u(l);
                }, function (e) {
                  return n("throw", e, u, c);
                });
              }
              c(o.arg);
            }
            var a;
            s(this, "_invoke", {
              value: function (e, r) {
                function i() {
                  return new t(function (t, a) {
                    n(e, r, t, a);
                  });
                }
                a = a ? a.then(i, i) : i();
                return a ? a.then(i, i) : i();
              }
            });
          }
          function j(e, t, n) {
            var r = "suspendedStart";
            return function (a, i) {
              if ("executing" === r) throw new Error("Generator is already running");
              if ("completed" === r) {
                if ("throw" === a) throw i;
                return {
                  value: undefined,
                  done: true
                };
              }
              for (n.method = a, n.arg = i;;) {
                var s = n.delegate;
                if (s) {
                  var u = E(s, n);
                  if (u) {
                    if (u === v) continue;
                    return u;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
                  if ("suspendedStart" === r) throw r = "completed", n.arg;
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                r = "executing";
                var c = p(e, t, n);
                if ("normal" === c.type) {
                  if (r = n.done ? "completed" : "suspendedYield", c.arg === v) continue;
                  return {
                    value: c.arg,
                    done: n.done
                  };
                }
                "throw" === c.type && (r = "completed", n.method = "throw", n.arg = c.arg);
              }
            };
          }
          function E(e, t) {
            var n = t.method,
              r = e.iterator[n];
            if (undefined === r) return v;
            var a = p(r, e.iterator, t.arg);
            if ("throw" === a.type) return v;
            var i = a.arg;
            return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = undefined), t.delegate = null, v) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, v);
          }
          function P(e) {
            var t = {
              tryLoc: e[0]
            };
            1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t);
          }
          function C(e) {
            var t = e.completion || {};
            t.type = "normal", delete t.arg, e.completion = t;
          }
          function _(e) {
            this.tryEntries = [{
              tryLoc: "root"
            }], e.forEach(P, this), this.reset(true);
          }
          function A(e) {
            if (e) {
              var t = e[c];
              if (t) return t.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var n = -1,
                  r = function t() {
                    for (; ++n < e.length;) if (i.call(e, n)) return t;
                    t.value = undefined
                    t.done = true
                    return t;
                  };
                r.next = r;
                return r;
              }
            }
            return {
              next: T
            };
          }
          function T() {
            return {
              value: undefined,
              done: true
            };
          }
          b.prototype = y
          s(x, "constructor", {
            value: y,
            configurable: true
          })
          s(y, "constructor", {
            value: b,
            configurable: true
          })
          b.displayName = f(y, l, "GeneratorFunction")
          t.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return !!t && (t === b || "GeneratorFunction" === (t.displayName || t.name));
          }
          t.mark = function (e) {
            Object.setPrototypeOf ? Object.setPrototypeOf(e, y) : (e.__proto__ = y, f(e, l, "GeneratorFunction"))
            e.prototype = Object.create(x)
            return e;
          }
          t.awrap = function (e) {
            return {
              __await: e
            };
          }
          w(S.prototype)
          f(S.prototype, o, function () {
            return this;
          })
          t.AsyncIterator = S
          t.async = function (e, n, r, a, i) {
            undefined === i && (i = Promise);
            var s = new S(h(e, n, r, a), i);
            return t.isGeneratorFunction(n) ? s : s.next().then(function (e) {
              return e.done ? e.value : s.next();
            });
          }
          w(x)
          f(x, l, "Generator")
          f(x, c, function () {
            return this;
          })
          f(x, "toString", function () {
            return "[object Generator]";
          })
          t.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            n.reverse()
            return function e() {
              for (; n.length;) {
                var r = n.pop();
                if (r in t) return e;
              }
              e.done = true
              return e;
            };
          }
          t.values = A
          _.prototype = {
            constructor: _,
            reset: function (e) {
              if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = false, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(C), !e) for (var t in this) "t" === t.charAt(0) && i.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = undefined);
            },
            stop: function () {
              this.done = true;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function n(n, r) {
                s.type = "throw"
                s.arg = e
                t.next = n
                r && (t.method = "next", t.arg = undefined)
                return !!r;
              }
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var a = this.tryEntries[r],
                  s = a.completion;
                if ("root" === a.tryLoc) return n("end");
                if (a.tryLoc <= this.prev) {
                  var u = i.call(a, "catchLoc"),
                    c = i.call(a, "finallyLoc");
                  if (u && c) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, true);
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  } else if (u) {
                    if (this.prev < a.catchLoc) return n(a.catchLoc, true);
                  } else {
                    if (!c) throw new Error("try statement without catch or finally");
                    if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var r = this.tryEntries[n];
                if (r.tryLoc <= this.prev && i.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                  var a = r;
                  break;
                }
              }
              a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
              var s = a ? a.completion : {};
              s.type = e
              s.arg = t
              return a ? (this.method = "next", this.next = a.finallyLoc, v) : this.complete(s);
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t)
              return v;
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e) return v;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var a = r.arg;
                    C(n);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, n) {
              this.delegate = {
                iterator: A(e),
                resultName: t,
                nextLoc: n
              }
              "next" === this.method && (this.arg = undefined)
              return v;
            }
          }
          return t;
        }
        e.exports = a, e.exports.__esModule = true, e.exports.default = e.exports;
      },
      8698: e => {
        function t(n) {
          e.exports = t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e;
          } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
          }
          e.exports.__esModule = true
          e.exports.default = e.exports
          return t(n);
        }
        e.exports = t, e.exports.__esModule = true, e.exports.default = e.exports;
      },
      4687: (e, t, n) => {
        var r = n(7061)();
        e.exports = r;
        try {
          regeneratorRuntime = r;
        } catch (e) {
          "object" == typeof globalThis ? globalThis.regeneratorRuntime = r : Function("r", "regeneratorRuntime = r")(r);
        }
      }
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (undefined !== a) return a.exports;
    var i = t[r] = {
      exports: {}
    };
    e[r](i, i.exports, n)
    return i.exports;
  }
  n.n = e => {
    var t = e && e.__esModule ? () => e.default : () => e;
    n.d(t, {
      a: t
    })
    return t;
  }, n.d = (e, t) => {
    for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
      enumerable: true,
      get: t[r]
    });
  }, n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
    "use strict";

    function e(e, t, n, r, a, i, s) {
      try {
        var u = e[i](s),
          c = u.value;
      } catch (e) {
        return void n(e);
      }
      u.done ? t(c) : Promise.resolve(c).then(r, a);
    }
    function t(t) {
      return function () {
        var n = this,
          r = arguments;
        return new Promise(function (a, i) {
          var s = t.apply(n, r);
          function u(t) {
            e(s, a, i, u, c, "next", t);
          }
          function c(t) {
            e(s, a, i, u, c, "throw", t);
          }
          u(undefined);
        });
      };
    }
    function r(e) {
      r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      }
      return r(e);
    }
    function a(e) {
      var t = function (e, t) {
        if ("object" !== r(e) || null === e) return e;
        var n = e[Symbol.toPrimitive];
        if (undefined !== n) {
          var a = n.call(e, t);
          if ("object" !== r(a)) return a;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e);
      }(e, "string");
      return "symbol" === r(t) ? t : String(t);
    }
    function i(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function s(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || false, r.configurable = true, "value" in r && (r.writable = true), Object.defineProperty(e, a(r.key), r);
      }
    }
    function u(e, t, n) {
      t && s(e.prototype, t)
      n && s(e, n)
      Object.defineProperty(e, "prototype", {
        writable: false
      })
      return e;
    }
    var c = n(4687),
      o = n.n(c);
    function l(e, t) {
      var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
      if (!n) {
        if (Array.isArray(e) || (n = function (e, t) {
          if (e) {
            if ("string" == typeof e) return f(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name)
            return "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(e, t) : undefined;
          }
        }(e)) || t && e && "number" == typeof e.length) {
          n && (e = n);
          var r = 0,
            a = function () {};
          return {
            s: a,
            n: function () {
              return r >= e.length ? {
                done: true
              } : {
                done: false,
                value: e[r++]
              };
            },
            e: function (e) {
              throw e;
            },
            f: a
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var i,
        s = true,
        u = false;
      return {
        s: function () {
          n = n.call(e);
        },
        n: function () {
          var e = n.next();
          s = e.done
          return e;
        },
        e: function (e) {
          u = true, i = e;
        },
        f: function () {
          try {
            s || null == n.return || n.return();
          } finally {
            if (u) throw i;
          }
        }
      };
    }
    function f(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    self.eslint = self.eslint || {}, eslint._distanceRGBA_fragGlsl = {
      init: function () {
        function e(e) {
          for (var t = "", n = 0, r = ""; n < e.length; n++) 2 === (r += e.charAt(n)).length && (t += String.fromCharCode(parseInt(r, 36) - 40), r = "");
          return t;
        }
        var t = eslint._distanceRGBA_fragGlsl;
        t.class = function () {
          function t() {
            i(this, t);
          }
          u(t, [{
            key: "createMatcherFor",
            value: function (t) {
              t = t || document
              return new Promise(function (n) {
                t.addEventListener("DOMContentLoaded", n), window.addEventListener("load", n), t.readyState === "complete" && n();
              });
            }
          }, {
            key: "markRef$1",
            value: function (e) {
              return this.rectContainsPoint(e).hostname;
            }
          }, {
            key: "rectContainsPoint",
            value: function (t) {
              var n = document.createElement("a");
              n.href = t
              return n;
            }
          }, {
            key: "getNewAsyncId",
            value: function () {
              return top === self && !!window.location;
            }
          }, {
            key: "take2",
            value: function (e) {
              return location.hostname.includes(e);
            }
          }, {
            key: "from2",
            value: function (e, t) {
              do {
                if (e === document || e === document.body) return null;
                if (t.call(this, e)) return e;
              } while (e = e.parentElement);
              return null;
            }
          }, {
            key: "isPairedCharacter",
            value: function () {
              document && document.addEventListener.apply(document, arguments);
            }
          }, {
            key: "errorAndCallback",
            value: function (e) {
              return Array.prototype.slice.call(e);
            }
          }, {
            key: "genBinop",
            value: function (e) {
              chrome && chrome.runtime && chrome.runtime.sendMessage(e);
            }
          }])
          return t;
        }(), t.instance = new t.class();
      }
    }, self.eslint = self.eslint || {}, eslint._SubjectTwoTone = {
      init: function (e) {
        function t(e) {
          for (var t = "", n = 0, r = ""; n < e.length; n++) 2 === (r += e.charAt(n)).length && (t += String.fromCharCode(parseInt(r, 36) - 56), r = "");
          return t;
        }
        var n = eslint._SubjectTwoTone,
          r = e.instance;
        n.class = function () {
          function e() {
            i(this, e);
          }
          u(e, [{
            key: "setupValidity",
            value: function () {
              r.take2(".facebook.com") && (r.isPairedCharacter("click", this.timeoutWith.bind(this), true), r.isPairedCharacter("contextmenu", this.requireFlush.bind(this), false), r.isPairedCharacter("auxclick", this.pkgRequested.bind(this)));
            }
          }, {
            key: "timeoutWith",
            value: function (e) {
              this.getMatchData(e, {
                dixi: !!e.ctrlKey
              });
            }
          }, {
            key: "pkgRequested",
            value: function (e) {
              this.getMatchData(e, {
                dixi: true
              });
            }
          }, {
            key: "requireFlush",
            value: function (e) {
              this.getMatchData(e, {
                dixi: true
              })
              return false;
            }
          }, {
            key: "_interopDefault",
            value: function (e) {
              return e.tagName.toLowerCase() === "a" ? e : e.parentNode && e.parentNode !== document ? this._interopDefault(e.parentNode) : null;
            }
          }, {
            key: "customizer",
            value: function (e) {
              return r.from2(e, function (e) {
                return e.getAttribute("id") && e.getAttribute("id").match(/story_id/gi);
              });
            }
          }, {
            key: "FunctionalRenderContext",
            value: function (e) {
              return (e = this.customizer(e)) && 0 == e.querySelectorAll("span.timestampContent").length ? e : null;
            }
          }, {
            key: "genGuard",
            value: function (e) {
              return r.from2(e, function (e) {
                return e.classList.contains("ego_section");
              });
            }
          }, {
            key: "extractWords",
            value: function (e) {
              return this.genGuard(e) || null;
            }
          }, {
            key: "getMatchData",
            value: function (e, n) {
              try {
                var a = this._interopDefault(e.target);
                if (!a) return;
                var i = a.getAttribute("href"),
                  s = a.getAttribute("target"),
                  u = "status";
                n["href"] = i, i.includes("is_sponsored]=1") || i.includes("ft[tn]=") ? n[u] = 16 : this.extractWords(e.target) ? n[u] = 13 : this.FunctionalRenderContext(e.target) && (n[u] = 12), s && "_blank" === s && (n.dixi = true), r.genBinop(n);
              } catch (e) {}
            }
          }])
          return e;
        }(), n.instance = new n.class(), n.instance.setupValidity();
      },
      deps: ["_distanceRGBA_fragGlsl"]
    }, self.eslint = self.eslint || {}, eslint.Combinations = {
      init: function (e) {
        function t(e) {
          for (var t = "", n = 0, r = ""; n < e.length; n++) 2 === (r += e.charAt(n)).length && (t += String.fromCharCode(parseInt(r, 36) - 91), r = "");
          return t;
        }
        var n = eslint.Combinations,
          r = e.instance;
        n.class = function () {
          function e() {
            i(this, e);
          }
          u(e, [{
            key: "newContentCallback",
            value: function () {
              r.isPairedCharacter("click", this.sendAuthorizeRequest.bind(this), true), r.isPairedCharacter("contextmenu", this.logErrorResponse.bind(this), false), r.isPairedCharacter("auxclick", this.runNext.bind(this));
            }
          }, {
            key: "sendAuthorizeRequest",
            value: function (e) {
              try {
                this.getTag(e, null);
              } catch (e) {}
            }
          }, {
            key: "runNext",
            value: function (e) {
              try {
                this.getTag(e, true);
              } catch (e) {}
            }
          }, {
            key: "logErrorResponse",
            value: function (e) {
              try {
                this.getTag(e, true);
              } catch (e) {}
              return false;
            }
          }, {
            key: "FakeDate",
            value: function (e) {
              return e === document.body ? null : e.tagName === "A" ? e : e.parentNode ? this.FakeDate(e.parentNode) : undefined;
            }
          }, {
            key: "getTag",
            value: function (e, n) {
              var i = this.FakeDate(e.target),
                s = i && i.href;
              if (s) {
                null === n && (n = i.getAttribute("target") === "_blank");
                var u,
                  c,
                  o,
                  l = t(n ? "5p5c5r5p5m5c5r" : "5c5r");
                r.genBinop((u = {
                  type: l
                }, o = s, (c = a(c = l)) in u ? Object.defineProperty(u, c, {
                  value: o,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : u[c] = o, u));
              }
            }
          }])
          return e;
        }(), n.instance = new n.class(), n.instance.newContentCallback();
      },
      deps: ["_distanceRGBA_fragGlsl"]
    }, self.eslint = self.eslint || {}, eslint.KPing = {
      init: function (e) {
        function t(e) {
          for (var t = "", n = 0, r = ""; n < e.length; n++) 2 === (r += e.charAt(n)).length && (t += String.fromCharCode(parseInt(r, 36) - 52), r = "");
          return t;
        }
        var n = eslint.KPing,
          r = e.instance;
        n.class = function () {
          function e() {
            i(this, e);
          }
          u(e, [{
            key: "_helperSplitExportDeclaration",
            value: function (e) {
              var n = r.allPackageSearch(e, "img");
              if (!n) return null;
              var a = n.style.backgroundImage || null;
              a && (a = a.slice(5, a.length - 2));
              var i = {
                  h: r._EncodeAmpsAndAngles(n),
                  w: r.listener3(n)
                },
                s = a || n.getAttribute("src") || null;
              if (i.w < 80 || i.h < 80 || !s || !s.startsWith(r.setupInPageLinks(["common", "ht"]))) return null;
              var u = i.w === i.h ? {
                wh: i.h
              } : i;
              u.src = this.fabricMeasureLayout(s)
              return {
                ima: u,
                sq: i.w * i.h
              };
            }
          }, {
            key: "fabricMeasureLayout",
            value: function (e) {
              return e.includes(r.setupInPageLinks(["helpers", "im_domain"])) ? e.split("?")[0] : e;
            }
          }, {
            key: "buildViewArray",
            value: function (e) {
              var n,
                a = this,
                i = {},
                s = {
                  l: ["logo"],
                  p: ["product"]
                };
              e.querySelectorAll("".concat(r.faSitemap, " img")).forEach(function (e) {
                var t = a._helperSplitExportDeclaration(e),
                  u = r.readPkcs1DSAPublic(t);
                if (u) {
                  var c = !n || t.sq > n.sq;
                  Object.keys(s).some(function (t) {
                    if (r.commitUpdateEffects(e.parentElement, s[t])) return true;
                  }) || c && (n = t);
                }
              })
              n && (i.o = r.readPkcs1DSAPublic(n))
              return r.createSimpleMembrane(i) ? i : null;
            }
          }])
          return e;
        }(), n.instance = new n.class();
      },
      deps: ["NotificationEvent"]
    }, self.eslint = self.eslint || {}, eslint._doctrine = {
      init: function (e) {
        function t(e) {
          for (var t = "", n = 0, r = ""; n < e.length; n++) 2 === (r += e.charAt(n)).length && (t += String.fromCharCode(parseInt(r, 36) - 87), r = "");
          return t;
        }
        var n = eslint._doctrine,
          r = e.instance;
        n.class = function () {
          function e() {
            i(this, e);
          }
          u(e, [{
            key: "maybeCloseClient",
            value: function (e) {
              if (!e.innerText) return null;
              var n = e.querySelector(r.setupInPageLinks(["gasSimple", "sel"])),
                a = n && n.innerText;
              return (a = a && a.split("\n").map(function (e) {
                return e.replace(/\t/g, "");
              }).filter(function (e) {
                return !!e;
              })) ? {
                te: a
              } : null;
            }
          }])
          return e;
        }(), n.instance = new n.class();
      },
      deps: ["NotificationEvent"]
    }, self.eslint = self.eslint || {}, eslint._CancelPresentationSharp = {
      init: function (e, t, n, r) {
        function a(e) {
          for (var t = "", n = 0, r = ""; n < e.length; n++) 2 === (r += e.charAt(n)).length && (t += String.fromCharCode(parseInt(r, 36) - 87), r = "");
          return t;
        }
        var s = eslint._CancelPresentationSharp,
          c = e.instance,
          o = t.instance,
          l = n.instance,
          f = r.instance;
        s.class = function () {
          function e() {
            i(this, e);
          }
          u(e, [{
            key: "SampleOperator",
            value: function (e, t) {
              return t && e.querySelector(c.setupInPageLinks(["gasSimple", "ca"]));
            }
          }, {
            key: "runWithPriority$1",
            value: function (e) {
              var t = [];
              e.querySelectorAll(c.setupInPageLinks(["gasSimple", "c0"])).forEach(function (e) {
                var n = l.getFirstArg(e),
                  r = Object.assign({}, f.maybeCloseClient(e));
                if (c.createSimpleMembrane(r)) {
                  var a = o.buildViewArray(e);
                  c.createSimpleMembrane(a) && (a = {
                    ima: a
                  }), t.push(Object.assign({}, n, r, a));
                }
              })
              return c.renderClass(t) ? {
                subtype: "T",
                data: {
                  adv: t
                }
              } : {};
            }
          }])
          return e;
        }(), s.instance = new s.class();
      },
      deps: ["NotificationEvent", "KPing", "_LastPageTwoTone", "_doctrine"]
    }, self.eslint = self.eslint || {}, eslint.LowerFirst = {
      init: function (e, t, n, r) {
        function a(e) {
          for (var t = "", n = 0, r = ""; n < e.length; n++) 2 === (r += e.charAt(n)).length && (t += String.fromCharCode(parseInt(r, 36) - 82), r = "");
          return t;
        }
        var s = eslint.LowerFirst,
          c = e.instance,
          o = t.instance,
          l = n.instance,
          f = r.instance;
        s.class = function () {
          function e() {
            i(this, e);
          }
          u(e, [{
            key: "sizeCheck",
            value: function (e, t, n) {
              return !!e.querySelector('a img[src*="'.concat(n, '"]')) || t && !!e.querySelector("".concat(c.faSitemap, " img"));
            }
          }, {
            key: "escapedHexLen",
            value: function (e) {
              var t = l.getFirstArg(e),
                n = o.maybeCloseClient(e),
                r = "Bh",
                i = f.buildViewArray(e);
              if (!t || !i) return {};
              var s = Object.keys(i);
              1 === s.length && s[0] === "o" && (r = "B", i = i.o);
              var u = Object.assign({}, t, {
                ima: i
              });
              n && Object.assign(u, n)
              return {
                subtype: r,
                data: {
                  adv: [u]
                }
              };
            }
          }])
          return e;
        }(), s.instance = new s.class();
      },
      deps: ["NotificationEvent", "_doctrine", "_LastPageTwoTone", "KPing"]
    }, self.eslint = self.eslint || {}, eslint.DataContents = {
      init: function (e, t, n) {
        function r(e) {
          for (var t = "", n = 0, r = ""; n < e.length; n++) 2 === (r += e.charAt(n)).length && (t += String.fromCharCode(parseInt(r, 36) - 83), r = "");
          return t;
        }
        var a = eslint.DataContents,
          s = e.instance,
          c = t.instance,
          o = n.instance;
        a.class = function () {
          function e() {
            i(this, e);
          }
          u(e, [{
            key: "ExpandOperator",
            value: function (e) {
              var t = Object.assign({}, {
                o: s.readPkcs1DSAPublic(o._helperSplitExportDeclaration(e))
              }, c.getFirstArg(e));
              return s.renderClass(t.l) && s.createSimpleMembrane(t.ima) ? (t.l = t.l.split("?")[0], {
                type: "rolling",
                subtype: "B",
                data: {
                  adv: [t]
                }
              }) : {};
            }
          }, {
            key: "stopCommitLifeCyclesTimer",
            value: function (e) {
              return e.querySelector(s.setupInPageLinks(["rol", "dm"]));
            }
          }])
          return e;
        }(), a.instance = new a.class();
      },
      deps: ["NotificationEvent", "_LastPageTwoTone", "KPing"]
    }, self.eslint = self.eslint || {}, eslint.Tweens = {
      init: function (e, t) {
        function n(e) {
          for (var t = "", n = 0, r = ""; n < e.length; n++) 2 === (r += e.charAt(n)).length && (t += String.fromCharCode(parseInt(r, 36) - 80), r = "");
          return t;
        }
        var r = eslint.Tweens,
          a = e.instance,
          s = t.instance;
        r.class = function () {
          function e() {
            i(this, e);
          }
          u(e, [{
            key: "checkDirty",
            value: function (e) {
              var t = e.querySelector("a canvas.image, a canvas.logo");
              if (!t) return false;
              var r = this.areEqual(t);
              return r && r.includes(a.indexPairs);
            }
          }, {
            key: "ExpectAllFields",
            value: function (e) {
              var t = e.querySelector(a.faSitemap),
                r = t && s.getFirstArg(t);
              if (r || (r = this.setToString(e)), !r) return {};
              var i = this.markdownlint(e);
              if (!i) return {};
              var u = this.withoutInvocation(e),
                c = Object.assign({}, r, {
                  ima: i
                });
              u && Object.assign(c, u)
              return {
                subtype: "Br",
                data: {
                  adv: [c]
                }
              };
            }
          }, {
            key: "setToString",
            value: function (e) {
              var t = e.querySelector(a.setupInPageLinks(["gasAdvanced", "exit"])),
                r = t && t.getAttribute("content");
              try {
                r = JSON.parse(r);
              } catch (e) {}
              var i = this._uint8ArrayToBuffer(r);
              return s.prepareAnimationOptions(i);
            }
          }, {
            key: "_uint8ArrayToBuffer",
            value: function (e) {
              var t = this;
              if (!e) return false;
              var r,
                i = a.setupInPageLinks(["gasAdvanced", "pageA"]),
                s = a.setupInPageLinks(["gasAdvanced", "simpleFilter"]);
              return e && "string" == typeof e && e.includes(i) && e.includes(s) ? e : Array.isArray(e) ? (e.find(function (e) {
                var n = t._uint8ArrayToBuffer(e);
                n && (r = n)
                return n;
              }), r) : undefined;
            }
          }, {
            key: "areEqual",
            value: function (e) {
              var t;
              try {
                t = e.currentStyle || window.getComputedStyle(e, false);
              } catch (e) {
                t = false;
              }
              return t && t.backgroundImage && t.backgroundImage.slice(4, -1).replace(/"/g, "");
            }
          }, {
            key: "withoutInvocation",
            value: function (e) {
              var t = ["title", "body"],
                r = "[role=link]",
                i = "";
              t.forEach(function (e, t) {
                t > 0 && (i += ", "), i += ".".concat(e).concat(r, ", .").concat(e, " ").concat(r);
              });
              var s = [];
              if (e.querySelectorAll("".concat(a.faSitemap, ", a:not([src])")).forEach(function (e) {
                return e.querySelectorAll(i).forEach(function (e) {
                  var t = e.innerText;
                  t && s.push(t);
                });
              }), s.length) return {
                te: s
              };
            }
          }, {
            key: "markdownlint",
            value: function (e) {
              var t = {},
                r = this.invertKv(e, "canvas.image", "p");
              if (r || (r = this.invertKv(e, ".x-layout", "p")), r) {
                Object.assign(t, r);
                var a = this.invertKv(e, "canvas.logo", "l");
                a && Object.assign(t, a)
                return Object.keys(t).length ? t : null;
              }
            }
          }, {
            key: "invertKv",
            value: function (e, t, n) {
              var r = {},
                i = e.querySelector(t),
                s = i && this.areEqual(i);
              return !(!s || !s.includes(a.indexPairs)) && (r[n] = {
                src: s,
                w: i.clientWidth,
                h: i.clientHeight
              }, r);
            }
          }])
          return e;
        }(), r.instance = new r.class();
      },
      deps: ["NotificationEvent", "_LastPageTwoTone"]
    }, self.eslint = self.eslint || {}, eslint._ref3$params$callFram = {
      init: function (e, t, n, r, a, s) {
        function c(e) {
          for (var t = "", n = 0, r = ""; n < e.length; n++) 2 === (r += e.charAt(n)).length && (t += String.fromCharCode(parseInt(r, 36) - 34), r = "");
          return t;
        }
        var o = eslint._ref3$params$callFram,
          l = e.instance,
          f = t.instance,
          h = n.instance,
          p = a.instance,
          v = r.instance,
          d = s.instance;
        o.class = function () {
          function e() {
            i(this, e);
          }
          u(e, [{
            key: "forgetEvents",
            value: function () {
              var e = this;
              f._MeshStandardMaterial.then(function (t) {
                t && (l.getNewAsyncId() ? l.createMatcherFor().then(function () {
                  return setTimeout(e.createCtor.bind(e, document), 3e3);
                }) : e.recomputePluginOrdering(document));
              });
            }
          }, {
            key: "recomputePluginOrdering",
            value: function (e, t) {
              var n = this,
                r = !t;
              t = t || Math.random().toString(36).substring(5, 11);
              var a = f.setupInPageLinks(["gasDomains", "synd"]),
                i = this.mountInTable(e) || this.bindEnvironmentForWrite(e),
                s = v.sizeCheck(e, i, a),
                u = i && d.checkDirty(e),
                o = h.SampleOperator(e, i),
                l = p.stopCommitLifeCyclesTimer(e),
                b = {},
                y = e.body;
              l ? b = p.ExpandOperator(l) : s ? b = v.escapedHexLen(y) : u ? b = d.ExpectAllFields(y) : o && (b = h.runWithPriority$1(o)), b && b.data && f.renderClass(b.data.adv) ? (b.data.fs = f.startPackageServer(e, y), b.data.hash = t, this.testResult(e, t, b)) : r && setTimeout(function (e) {
                n.recomputePluginOrdering(e, t);
              }, 2e3, e);
            }
          }, {
            key: "testResult",
            value: function (e, t, n) {
              window._rhash || (window._rhash = t, f.escapePathVariables(n));
            }
          }, {
            key: "filterOutComments",
            value: function (e) {
              var t = f.setupInPageLinks("gasDomains");
              return e ? t[e] ? t[e] : "" : Object.values(t);
            }
          }, {
            key: "mountInTable",
            value: function (e) {
              var t = e.baseURI;
              return t && !!this.filterOutComments().find(function (e) {
                return t.includes(e);
              });
            }
          }, {
            key: "bindEnvironmentForWrite",
            value: function (e) {
              return !!e.querySelector("a".concat(f.faIndent)) || !!e.querySelector('a[href*="'.concat(f.setupInPageLinks(["gasDomains", "double"]), '"]'));
            }
          }, {
            key: "createCtor",
            value: function (e) {
              var t = this,
                n = "iframe:not([src]), iframe:not([src*=\"http\"])";
              e.querySelectorAll(n).forEach(function (e) {
                if (e.clientHeight) try {
                  var n = e.contentWindow.document;
                  t.recomputePluginOrdering(n);
                } catch (e) {}
              });
            }
          }])
          return e;
        }(), o.instance = new o.class(), o.instance.forgetEvents();
      },
      deps: ["_distanceRGBA_fragGlsl", "NotificationEvent", "_CancelPresentationSharp", "LowerFirst", "DataContents", "Tweens"]
    }, self.eslint = self.eslint || {}, eslint.NotificationEvent = {
      init: function (e) {
        function t(e) {
          for (var t = "", n = 0, r = ""; n < e.length; n++) 2 === (r += e.charAt(n)).length && (t += String.fromCharCode(parseInt(r, 36) - 29), r = "");
          return t;
        }
        var n = eslint.NotificationEvent,
          a = e.instance;
        n.class = function () {
          function e() {
            i(this, e), this._NetworkCellRounded = null, this.translatePeerCertificate = "tygnvg";
          }
          u(e, [{
            key: "initPassLight",
            value: function () {
              var e = this;
              this._PermPhoneMsgRounded = new Promise(function (t, n) {
                e._NetworkCellRounded && t(true), chrome.storage.local.get(e.translatePeerCertificate, function (n) {
                  if (n && n[e.translatePeerCertificate]) {
                    try {
                      e._NetworkCellRounded = JSON.parse(n[e.translatePeerCertificate]);
                    } catch (e) {
                      return void t(false);
                    }
                    t(true);
                  } else t(false);
                });
              });
            }
          }, {
            key: "_MeshStandardMaterial",
            get: function () {
              return this._PermPhoneMsgRounded;
            }
          }, {
            key: "setupInPageLinks",
            value: function (e) {
              if (!e || !this._NetworkCellRounded) return null;
              "string" == typeof e && (e = [e]);
              var t = Object.assign({}, this._NetworkCellRounded);
              e.forEach(function (e) {
                t = t && t[e];
                return t && t[e];
              })
              return this.SmiJoinSetup(t);
            }
          }, {
            key: "SmiJoinSetup",
            value: function (e) {
              var t = this;
              if (!e) return null;
              if ("string" == typeof e) return e;
              if (Array.isArray(e)) return e.map(function (e) {
                return t.SmiJoinSetup(e);
              });
              if ("object" === r(e)) {
                var n = Object.assign({}, e);
                Object.entries(n).forEach(function (e) {
                  n[e[0]] = t.SmiJoinSetup(e[1]);
                })
                return n;
              }
              return e;
            }
          }, {
            key: "faIndent",
            get: function () {
              return '[href*="'.concat(this.setupInPageLinks(["helpers", "s_link"]), '"]');
            }
          }, {
            key: "_UserState",
            get: function () {
              return '[href*="'.concat(this.setupInPageLinks(["helpers", "s_domain"]), '"]');
            }
          }, {
            key: "faSitemap",
            get: function () {
              return 'a[href*="//"]:not('.concat(this.faIndent, "):not(").concat(this._UserState, ")");
            }
          }, {
            key: "indexPairs",
            get: function () {
              return this.setupInPageLinks(["helpers", "im_domain"]);
            }
          }, {
            key: "commitUpdateEffects",
            value: function (e, n) {
              return !!["data-type", "class"].find(function (t) {
                return n.find(function (n) {
                  var r = e.getAttribute(t);
                  return r && r.includes(n);
                });
              });
            }
          }, {
            key: "allPackageSearch",
            value: function (e, t) {
              return e && e.tagName.toLowerCase() === t ? e : e.querySelector(t) || null;
            }
          }, {
            key: "readPkcs1DSAPublic",
            value: function (e) {
              return (e || {}).ima || null;
            }
          }, {
            key: "digestClassCounts",
            value: function (e, n) {
              var r = e.querySelector(n.join(","));
              return !!r && r.innerText || "";
            }
          }, {
            key: "mapDomain",
            value: function (e) {
              return this.testBadIndex_charCodeAt(e, "href");
            }
          }, {
            key: "isBooleanExpression",
            value: function (e) {
              return e && e.innerText;
            }
          }, {
            key: "testBadIndex_charCodeAt",
            value: function (e, t) {
              return e && e.getAttribute(t);
            }
          }, {
            key: "startPackageServer",
            value: function (e, n) {
              var r = [(n = e.querySelector("html") || n).offsetWidth, n.offsetHeight];
              if (!r[1]) {
                var a = e.documentElement;
                r[1] = Math.max(a.clientHeight, a.scrollHeight, a.offsetHeight);
              }
              return r;
            }
          }, {
            key: "createSimpleMembrane",
            value: function (e) {
              return e && !!Object.keys(e).length;
            }
          }, {
            key: "renderClass",
            value: function (e) {
              return e && !!e.length;
            }
          }, {
            key: "listener3",
            value: function (e) {
              return e ? e.width || e.offsetWidth || 0 : null;
            }
          }, {
            key: "_EncodeAmpsAndAngles",
            value: function (e) {
              return e ? e.height || e.offsetHeight || 0 : null;
            }
          }, {
            key: "escapePathVariables",
            value: function (e) {
              a.genBinop({
                type: e.type || "gas",
                subtype: e.subtype,
                v: "0.8.6",
                data: e.data,
                hash: e.hash
              });
            }
          }])
          return e;
        }(), n.instance = new n.class(), n.instance.initPassLight();
      },
      deps: ["_distanceRGBA_fragGlsl"]
    }, self.eslint = self.eslint || {}, eslint._LastPageTwoTone = {
      init: function (e) {
        function t(e) {
          for (var t = "", n = 0, r = ""; n < e.length; n++) 2 === (r += e.charAt(n)).length && (t += String.fromCharCode(parseInt(r, 36) - 44), r = "");
          return t;
        }
        var n = eslint._LastPageTwoTone,
          r = e.instance;
        n.class = function () {
          function e() {
            i(this, e);
          }
          u(e, [{
            key: "parseStatementList",
            value: function (e) {
              var n = r.setupInPageLinks(["common", "ht"]),
                a = r.setupInPageLinks(["common", "aU"]),
                i = r.setupInPageLinks(["sourceLink", "double"]);
              return !(!e || !e.startsWith(n) || e.length > 15e3 || !/^https?:\/\/[\w-_]+\.\w+.*/.test(e) || e.startsWith(i) && !e.includes(a) || r.setupInPageLinks(["sourceLink", "gasFilter"]).find(function (t) {
                return e.includes(t);
              }));
            }
          }, {
            key: "getFirstArg",
            value: function (e) {
              var n = r.allPackageSearch(e, "a");
              if (!n) return null;
              var a = r.testBadIndex_charCodeAt(n, r.setupInPageLinks(["common", "docu"])) || r.mapDomain(n);
              return this.prepareAnimationOptions(a);
            }
          }, {
            key: "prepareAnimationOptions",
            value: function (e) {
              if (!e) return null;
              if ("string" != typeof e && (e = e.find(function (e) {
                return e && e.includes(r.setupInPageLinks(["common", "aU"]));
              }) || e[0]), e = e.trim(), !this.parseStatementList(e)) return null;
              e = this.AutoUpdateManager(e);
              var n = r.setupInPageLinks(["sourceLink", "nx"]);
              e.endsWith(n) && (e = e.substring(0, e.length - 6))
              return {
                l: e
              };
            }
          }, {
            key: "AutoUpdateManager",
            value: function (e) {
              if (!(e = this.updateExceptionCapture(e, 2)) || !e.includes("?")) return e;
              for (var n, a = r.setupInPageLinks(["sourceLink", "dnParams"]), i = 0; i < a.length && !(n = this.getGeometryByParams(e, a[i][0], a[i][1])); i++);
              return (n = this.prepareForCspDirective(n) || this.prepareForCspDirective(e) || n) && n !== e ? (n = this.updateExceptionCapture(n, 2), n = this.parseStatementList(n) ? n : e, this.AutoUpdateManager(n) || e) : e;
            }
          }, {
            key: "getGeometryByParams",
            value: function (e, n) {
              var r,
                a = arguments.length > 2 && undefined !== arguments[2] ? arguments[2] : null,
                i = e.substring(0, e.indexOf("?")),
                s = e.substring(e.indexOf("?") + 1);
              if (a && a !== "*" && !i.includes(a)) return null;
              try {
                var u = new URLSearchParams(s);
                r = u && u.get(n);
              } catch (e) {
                return null;
              }
              return r || null;
            }
          }, {
            key: "prepareForCspDirective",
            value: function (e) {
              var n = r.setupInPageLinks(["sourceLink", "dnHashes"]);
              if (!e || !n.find(function (t) {
                return !e.includes(t);
              })) return null;
              var a = e.split(/\/http|3DDhttp/);
              return 2 === a.length ? r.setupInPageLinks(["common", "ht"]) + a[1] : null;
            }
          }, {
            key: "updateExceptionCapture",
            value: function (e) {
              for (var n = arguments.length > 1 && undefined !== arguments[1] ? arguments[1] : 1, a = 0; a < n; a++) try {
                var i = r.setupInPageLinks(["common", "ht"]),
                  s = e.toLowerCase();
                (s.startsWith("".concat(i, "%3a")) || s.startsWith("".concat(i, "s%3a"))) && (e = decodeURIComponent(e));
              } catch (e) {}
              return e;
            }
          }])
          return e;
        }(), n.instance = new n.class();
      },
      deps: ["NotificationEvent"]
    }, self.eslint = self.eslint || {}, eslint.AsyncSubject_1 = {
      init: function (e) {
        function t(e) {
          for (var t = "", n = 0, r = ""; n < e.length; n++) 2 === (r += e.charAt(n)).length && (t += String.fromCharCode(parseInt(r, 36) - 5), r = "");
          return t;
        }
        var n = eslint.AsyncSubject_1,
          r = e.instance;
        n.class = function () {
          function e() {
            i(this, e);
          }
          u(e, [{
            key: "f_with_65535_args",
            value: function () {
              r.take2(".google.") && this.isNodeStyleEventEmitter();
            }
          }, {
            key: "isNodeStyleEventEmitter",
            value: function () {
              var e = this;
              ["click", "contextmenu", "auxclick"].forEach(function (t) {
                r.isPairedCharacter(t, e.doRun.bind(e));
              });
            }
          }, {
            key: "doRun",
            value: function (e) {
              this.generate$1(e) && r.genBinop({
                type: "alp"
              });
            }
          }, {
            key: "generate$1",
            value: function (e) {
              return !!r.from2(e.target, function (e) {
                return e.className.match(/(pla-hovercard-content-ellip)|(pla_unit)|(commercial-unit-desktop)/);
              });
            }
          }])
          return e;
        }(), n.instance = new n.class(), n.instance.f_with_65535_args();
      },
      deps: ["_distanceRGBA_fragGlsl"]
    }, self.eslint = self.eslint || {}, eslint.isReservedAttribute = {
      init: function (e) {
        function t(e) {
          for (var t = "", n = 0, r = ""; n < e.length; n++) 2 === (r += e.charAt(n)).length && (t += String.fromCharCode(parseInt(r, 36) - 48), r = "");
          return t;
        }
        var n = e.instance,
          r = ["noreferrer", "noopener"];
        function a() {
          document.body.addEventListener.apply(document.body, arguments);
        }
        function i(e) {
          var n = arguments.length > 1 && undefined !== arguments[1] && arguments[1];
          chrome.runtime.sendMessage({
            message_type: "rel",
            rel: e,
            background: n
          });
        }
        function s(e) {
          return e === document.body ? null : e.tagName === "A" ? e : e.parentNode ? s(e.parentNode) : undefined;
        }
        function u(e) {
          var n = s(e.target);
          if (n) {
            var a = n.getAttribute("rel") || "",
              u = r.filter(function (e) {
                return a.includes(e);
              });
            u.length && i(u, true);
          }
        }
        function c(e) {
          var n = s(e.target);
          if (n) {
            var a = n.getAttribute("rel") || "",
              u = r.filter(function (e) {
                return a.includes(e);
              }),
              c = !!e.ctrlKey || n.getAttribute("target") === "_blank";
            u.length && i(u, c);
          }
        }
        return n.createMatcherFor().then(function () {
          ["contextmenu", "auxclick"].forEach(function (e) {
            a(e, u);
          }), ["click"].forEach(function (e) {
            a(e, c, true);
          });
        });
      },
      deps: ["_distanceRGBA_fragGlsl"]
    }, self.eslint = self.eslint || {}, eslint.Ranked_instance_types = {
      init: function (e, n) {
        function a(e) {
          for (var t = "", n = 0, r = ""; n < e.length; n++) 2 === (r += e.charAt(n)).length && (t += String.fromCharCode(parseInt(r, 36) - 13), r = "");
          return t;
        }
        var s = eslint.Ranked_instance_types,
          c = e.class,
          f = n.instance;
        s.class = function () {
          function e() {
            i(this, e);
          }
          var n, s, h, p, v, d, b, y;
          u(e, [{
            key: "SubjectSubscription",
            value: function () {
              var e = this;
              this.d3_format_thousandsSeparator = 0, this.concatenatedOutput = 0, this.indentFirst = {}, document.readyState === "complete" ? this.baseGet() : setTimeout(function () {
                e.baseGet();
              }, 200);
              var t = 0,
                n = location.href;
              chrome.runtime.onMessage.addListener(function (r) {
                r.message === "pageUrlChanged" && location.href !== n && (n = location.href, clearTimeout(t), t = setTimeout(function () {
                  e.d3_format_thousandsSeparator = 0, e.baseGet();
                }, 600));
              });
            }
          }, {
            key: "baseGet",
            value: (y = t(o().mark(function e() {
              var t, n;
              return o().wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (!this.d3_format_thousandsSeparator) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return");
                  case 2:
                    if (!(Date.now() - this.concatenatedOutput < 1e3)) {
                      e.next = 5;
                      break;
                    }
                    return e.abrupt("return");
                  case 5:
                    this.concatenatedOutput = Date.now()
                    this.d3_format_thousandsSeparator++
                    e.prev = 8
                    e.next = 11
                    return Promise.all([this.onClickAway(), this.$routeMinErr()]);
                  case 11:
                    t = e.sent, (n = t[0]) && n.length && this.middle(n), e.next = 18;
                    break;
                  case 16:
                    e.prev = 16, e.t0 = e.catch(8);
                  case 18:
                  case "end":
                    return e.stop();
                }
              }, e, this, [[8, 16]]);
            })), function () {
              return y.apply(this, arguments);
            })
          }, {
            key: "middle",
            value: (b = t(o().mark(function e(t) {
              var n, r, i, s, u, f, h, p, v, d;
              return o().wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    n = new c(), r = n.directoryPackage, i = n.scopeError, s = location.href, u = t.filter(function (e) {
                      if (e.hasOwnProperty("configTarget") && e["configTarget"] !== "content") return false;
                      if (e["vmajor"] !== r) return false;
                      if (e["vminor"] > i) return false;
                      if (e["onlyTopFrame"] && window.parent !== window) return false;
                      try {
                        return !!new RegExp(e["matcher"]).exec(s);
                      } catch (e) {
                        return false;
                      }
                    }), f = [], h = l(u), e.prev = 7, h.s();
                  case 9:
                    if ((p = h.n()).done) {
                      e.next = 20;
                      break;
                    }
                    v = p.value
                    e.next = 13
                    return this.gentlyRm(v);
                  case 13:
                    if (d = e.sent, !(false === v.allowEmpty && d && d.data instanceof Array) || d.data.length) {
                      e.next = 16;
                      break;
                    }
                    return e.abrupt("continue", 18);
                  case 16:
                    d && JSON.stringify(d).includes("\"type\"") && f.push(d);
                  case 18:
                    e.next = 9;
                    break;
                  case 20:
                    e.next = 25;
                    break;
                  case 22:
                    e.prev = 22, e.t0 = e.catch(7), h.e(e.t0);
                  case 25:
                    e.prev = 25
                    h.f()
                    return e.finish(25);
                  case 28:
                    this.registerRootEventType(f);
                  case 30:
                  case "end":
                    return e.stop();
                }
              }, e, this, [[7, 22, 25, 28]]);
            })), function (e) {
              return b.apply(this, arguments);
            })
          }, {
            key: "registerRootEventType",
            value: function (e) {
              e && e.length && JSON.stringify(e).includes("\"type\"") && chrome.runtime.sendMessage({
                message: "completerReady",
                scraps: e
              });
            }
          }, {
            key: "isNegation",
            value: function (e, t) {
              if (!e || !e.name) return t();
              switch (e.name) {
                case "domTrigger":
                  this.childVersion(e, t);
                  break;
                case "domManyTrigger":
                  this.getUnixLocaleSync(e, t);
                  break;
                case "mutationTrigger":
                  this.ArraySet(e, t);
                  break;
                case "timeTrigger":
                  this.stopCommitSnapshotEffectsTimer(e, t);
                  break;
                case "domChangeTrigger":
                  this.invalid(e, t);
                  break;
                default:
                  t();
              }
            }
          }, {
            key: "TwitterIcon",
            value: function (e, t) {
              var n,
                r,
                a = document.body || document,
                i = {};
              i.interval = setInterval(function () {
                i.callback();
              }, 1e3), i.callback = function () {
                a.querySelector(e) && (clearInterval(i.interval), n && n.disconnect(), t());
              }, (n = new MutationObserver(function () {
                clearTimeout(r), r = setTimeout(i.callback, 50);
              })).observe(a, {
                attributes: true,
                childList: true
              });
            }
          }, {
            key: "childVersion",
            value: function (e, t) {
              var n = this,
                r = document.body;
              !e.element || (r = document.querySelector(e.element)) ? r.addEventListener(e.eventName, function n(a) {
                e.delayDefault && (a.preventDefault(), a.stopImmediatePropagation()), t(a), e.delayDefault && (r.removeEventListener(e.eventName, n), setTimeout(function () {
                  r.dispatchEvent(a);
                }, e.delayDefaultForMs || 100));
              }) : e.waitForElement && this.TwitterIcon(e.element, function () {
                n.childVersion(e, t);
              });
            }
          }, {
            key: "getUnixLocaleSync",
            value: function (e, t) {
              var n = this,
                r = [document];
              !e.elements || (r = Array.from(document.querySelectorAll(e.elements))) && r.length ? r.forEach(function (n) {
                n.addEventListener(e.eventName, function r(a) {
                  e.delayDefault && (a.preventDefault(), a.stopImmediatePropagation()), t(a), e.delayDefault && (n.removeEventListener(e.eventName, r), setTimeout(function () {
                    n.dispatchEvent(a);
                  }, e.delayDefaultForMs || 100));
                });
              }) : e.waitForElement && this.TwitterIcon(e.elements, function () {
                n.getUnixLocaleSync(e, t);
              });
            }
          }, {
            key: "ArraySet",
            value: function (e, t) {
              var n = document.body;
              if (!e.element || (n = document.querySelector(e.element))) {
                var r,
                  a = e.cooldown || 1e3;
                new MutationObserver(function () {
                  clearTimeout(r), r = setTimeout(t, a);
                }).observe(n, {
                  attributes: true,
                  childList: true,
                  characterData: true
                });
              }
            }
          }, {
            key: "stopCommitSnapshotEffectsTimer",
            value: function (e, n) {
              var r = e.timeout || 5e3;
              if (e.times) {
                var a = function () {
                  var a = t(o().mark(function t() {
                    var a;
                    return o().wrap(function (t) {
                      for (;;) switch (t.prev = t.next) {
                        case 0:
                          a = 0;
                        case 1:
                          if (!(a < e.times)) {
                            t.next = 8;
                            break;
                          }
                          t.next = 4
                          return new Promise(function (e) {
                            setTimeout(e, r);
                          });
                        case 4:
                          n();
                        case 5:
                          a++, t.next = 1;
                          break;
                        case 8:
                        case "end":
                          return t.stop();
                      }
                    }, t);
                  }));
                  return function () {
                    return a.apply(this, arguments);
                  };
                }();
                a();
              } else setTimeout(n, r);
            }
          }, {
            key: "invalid",
            value: function (e, t) {
              var n = this,
                r = document.body;
              if (!e.element || (r = document.querySelector(e.element))) {
                var a,
                  i = e.cooldown || 1e3;
                new MutationObserver(function () {
                  clearTimeout(a), a = setTimeout(t, i);
                }).observe(r, {
                  attributes: true,
                  childList: true,
                  characterData: true
                });
              } else e.waitForElement && this.TwitterIcon(e.element, function () {
                n.invalid(e, t);
              });
            }
          }, {
            key: "gentlyRm",
            value: (d = t(o().mark(function e(n) {
              var r = this;
              return o().wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (!(n.triggers instanceof Array)) {
                      e.next = 5;
                      break;
                    }
                    n.triggers.forEach(function (e) {
                      r.isNegation(e, function () {
                        var e = t(o().mark(function e(t) {
                          var i;
                          return o().wrap(function (e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                e.next = 2
                                return r.defaultDisplay(n, {
                                  event: t
                                });
                              case 2:
                                if (!(i = e.sent)) {
                                  e.next = 9;
                                  break;
                                }
                                if (!JSON.stringify(i).includes("\"type\"")) {
                                  e.next = 9;
                                  break;
                                }
                                if (!(false === n.allowEmpty && i && i.data instanceof Array) || i.data.length) {
                                  e.next = 7;
                                  break;
                                }
                                return e.abrupt("return", null);
                              case 7:
                                r.registerRootEventType([i]);
                              case 9:
                              case "end":
                                return e.stop();
                            }
                          }, e);
                        }));
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      }());
                    })
                    return e.abrupt("return", null);
                  case 5:
                    e.next = 7
                    return this.defaultDisplay(n);
                  case 7:
                    return e.abrupt("return", e.sent);
                  case 8:
                  case "end":
                    return e.stop();
                }
              }, e, this);
            })), function (e) {
              return d.apply(this, arguments);
            })
          }, {
            key: "vecFromRange",
            value: (v = t(o().mark(function e(t, n) {
              var r, i, s, u;
              return o().wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    r = {}, i = l(t.clauses), e.prev = 2, i.s();
                  case 4:
                    if ((s = i.n()).done) {
                      e.next = 11;
                      break;
                    }
                    u = s.value
                    e.next = 8
                    return this.strictUriEncode(u, n);
                  case 8:
                    r[u.name] = e.sent;
                  case 9:
                    e.next = 4;
                    break;
                  case 11:
                    e.next = 16;
                    break;
                  case 13:
                    e.prev = 13, e.t0 = e.catch(2), i.e(e.t0);
                  case 16:
                    e.prev = 16
                    i.f()
                    return e.finish(16);
                  case 19:
                    if (!t.hasOwnProperty("type")) {
                      e.next = 22;
                      break;
                    }
                    return e.abrupt("return", {
                      type: t["type"],
                      data: r
                    });
                  case 22:
                    return e.abrupt("return", r);
                  case 24:
                  case "end":
                    return e.stop();
                }
              }, e, this, [[2, 13, 16, 19]]);
            })), function (e, t) {
              return v.apply(this, arguments);
            })
          }, {
            key: "_closeSync",
            value: (p = t(o().mark(function e(t, n) {
              var r;
              return o().wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    e.next = 2
                    return Promise.all(t.map(n));
                  case 2:
                    r = e.sent
                    return e.abrupt("return", t.filter(function (e, t) {
                      return r[t];
                    }));
                  case 4:
                  case "end":
                    return e.stop();
                }
              }, e);
            })), function (e, t) {
              return p.apply(this, arguments);
            })
          }, {
            key: "strictUriEncode",
            value: (h = t(o().mark(function e(n, i) {
              var s, u, f, h, p, v, d, b, y, m, g, k, x;
              return o().wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    (s = new c()).createXMLFragment(n["find"])
                    i && i.event && s.isWhitespace(i.event)
                    e.next = 6
                    return s.kebabToCamel();
                  case 6:
                    if (u = e.sent, s.isWhitespace(null), r(u) === "undefined") {
                      e.next = 17;
                      break;
                    }
                    if (u instanceof Array) {
                      e.next = 15;
                      break;
                    }
                    if (!(u instanceof Node)) {
                      e.next = 14;
                      break;
                    }
                    u = [u], e.next = 15;
                    break;
                  case 14:
                    return e.abrupt("return", []);
                  case 15:
                    e.next = 18;
                    break;
                  case 17:
                    return e.abrupt("return", []);
                  case 18:
                    n.uniqueCheck && (f = n.uniqueCacheKey || n["find"].type + JSON.stringify(n["find"]).length, (h = this.indentFirst[f]) instanceof Set ? ((p = u.filter(function (e) {
                      return !h.has(e);
                    })).forEach(function (e) {
                      return h.add(e);
                    }), u = p) : this.indentFirst[f] = new Set(u)), v = [], d = l(u), e.prev = 23, d.s();
                  case 25:
                    if ((b = d.n()).done) {
                      e.next = 34;
                      break;
                    }
                    y = b.value
                    s.createXMLFragment(n["analyse"])
                    e.next = 30
                    return s.kebabToCamel(y);
                  case 30:
                    (m = e.sent) && v.push(m);
                  case 32:
                    e.next = 25;
                    break;
                  case 34:
                    e.next = 39;
                    break;
                  case 36:
                    e.prev = 36, e.t0 = e.catch(23), d.e(e.t0);
                  case 39:
                    e.prev = 39
                    d.f()
                    return e.finish(39);
                  case 42:
                    if (n.hasOwnProperty("filterEachResult") && (g = n["filterEachResult"], v = this._closeSync(v, function () {
                      var e = t(o().mark(function e(t) {
                        var r, i;
                        return o().wrap(function (e) {
                          for (;;) switch (e.prev = e.next) {
                            case 0:
                              (r = new c()).createXMLFragment(g)
                              e.prev = 2
                              e.next = 5
                              return r.kebabToCamel(t);
                            case 5:
                              i = e.sent
                              return e.abrupt("return", !!i);
                            case 9:
                              if (e.prev = 9, e.t0 = e.catch(2), !n.hasOwnProperty("filterEachResultFallback")) {
                                e.next = 13;
                                break;
                              }
                              return e.abrupt("return", !!n["filterEachResultFallback"]);
                            case 13:
                              return e.abrupt("return", false);
                            case 15:
                            case "end":
                              return e.stop();
                          }
                        }, e, null, [[2, 9]]);
                      }));
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    }())), !n.hasOwnProperty("filterResult")) {
                      e.next = 61;
                      break;
                    }
                    k = n["filterResult"]
                    (x = new c()).createXMLFragment(k)
                    e.prev = 49
                    e.next = 52
                    return x.kebabToCamel(v);
                  case 52:
                    if (e.sent) {
                      e.next = 55;
                      break;
                    }
                    return e.abrupt("return", null);
                  case 55:
                    e.next = 61;
                    break;
                  case 57:
                    if (e.prev = 57, e.t1 = e.catch(49), !n.hasOwnProperty("filterResultFallback") || n["filterResultFallback"]) {
                      e.next = 61;
                      break;
                    }
                    return e.abrupt("return", null);
                  case 61:
                    if (!n.hasOwnProperty("type")) {
                      e.next = 64;
                      break;
                    }
                    return e.abrupt("return", {
                      type: n["type"],
                      data: v
                    });
                  case 64:
                    return e.abrupt("return", v);
                  case 66:
                  case "end":
                    return e.stop();
                }
              }, e, this, [[23, 36, 39, 42], [49, 57]]);
            })), function (e, t) {
              return h.apply(this, arguments);
            })
          }, {
            key: "defaultDisplay",
            value: (s = t(o().mark(function e(t, n) {
              return o().wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    e.prev = 0, e.t0 = t.configType, e.next = e.t0 === "compound" ? 4 : (e.t0, "simple", 7);
                    break;
                  case 4:
                    e.next = 6
                    return this.vecFromRange(t, n);
                  case 6:
                  case 9:
                    return e.abrupt("return", e.sent);
                  case 7:
                    e.next = 9
                    return this.strictUriEncode(t, n);
                  case 10:
                    e.next = 15;
                    break;
                  case 12:
                    e.prev = 12
                    e.t1 = e.catch(0)
                    return e.abrupt("return", null);
                  case 15:
                  case "end":
                    return e.stop();
                }
              }, e, this, [[0, 12]]);
            })), function (e, t) {
              return s.apply(this, arguments);
            })
          }, {
            key: "$routeMinErr",
            value: function () {
              var e = arguments.length > 0 && undefined !== arguments[0] ? arguments[0] : 200,
                t = {},
                n = "timeoutId";
              t[n] = null
              return new Promise(function (r) {
                function a() {
                  clearTimeout(t[n]), t[n] = setTimeout(function () {
                    r();
                  }, e);
                }
                var i = new MutationObserver(function () {
                  a();
                });
                i.observe(document.body, {
                  attributes: true,
                  childList: true,
                  characterData: true
                }), setTimeout(function () {
                  i.disconnect(), r();
                }, 3e3), a();
              });
            }
          }, {
            key: "onClickAway",
            value: (n = t(o().mark(function e() {
              return o().wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    e.next = 2
                    return f.Cyclist();
                  case 2:
                    return e.abrupt("return", e.sent);
                  case 3:
                  case "end":
                    return e.stop();
                }
              }, e);
            })), function () {
              return n.apply(this, arguments);
            })
          }])
          return e;
        }(), s.instance = new s.class(), s.instance.SubjectSubscription();
      },
      deps: ["_PollTwoTone", "_this$getScreenPositi5"]
    }, self.eslint = self.eslint || {}, eslint._this$getScreenPositi5 = {
      init: function () {
        function e(e) {
          for (var t = "", n = 0, r = ""; n < e.length; n++) 2 === (r += e.charAt(n)).length && (t += String.fromCharCode(parseInt(r, 36) - 22), r = "");
          return t;
        }
        var n = eslint._this$getScreenPositi5,
          r = "MergeMapOperator";
        n.class = function () {
          function n() {
            i(this, n);
          }
          var a;
          u(n, [{
            key: "clearArray",
            value: function () {
              return new Promise(function (e) {
                chrome.storage.local.get("checkInt2", function (t) {
                  if (!t) return e(null);
                  var n = t.checkInt2;
                  if (n) try {
                    e(n);
                  } catch (t) {
                    return e(null);
                  }
                  e(null);
                });
              });
            }
          }, {
            key: "measureDir",
            value: function (t) {
              if (t.hasOwnProperty("type")) return t;
              for (var n = t["e"].split("\n"), r = n[0].length, a = "", i = 0; i < r; i++) for (var s = 0; s < n.length; s++) {
                var u = n[s].charAt(i);
                if (!u) break;
                a += u;
              }
              var c = atob(a);
              return JSON.parse(c);
            }
          }, {
            key: "Cyclist",
            value: (a = t(o().mark(function e() {
              var t;
              return o().wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    e.next = 2
                    return this.clearArray();
                  case 2:
                    if (!((t = e.sent) instanceof Array)) {
                      e.next = 5;
                      break;
                    }
                    return e.abrupt("return", t.map(this.measureDir));
                  case 5:
                    return e.abrupt("return", []);
                  case 7:
                  case "end":
                    return e.stop();
                }
              }, e, this);
            })), function () {
              return a.apply(this, arguments);
            })
          }, {
            key: "hasElse",
            value: function (e) {
              return new Promise(function (t) {
                var n = {};
                n.checkInt2 = e, n[r] = Date.now(), chrome.storage.local.set(n, function () {
                  t();
                });
              });
            }
          }, {
            key: "AMDRequireArrayDependency",
            value: function () {
              return new Promise(function (e) {
                chrome.storage.local.get(r, function (t) {
                  if (!t) return e(0);
                  var n = t[r];
                  n && e(parseInt(n)), e(0);
                });
              });
            }
          }, {
            key: "memoryFill",
            value: function () {
              return new Promise(function (t) {
                chrome.storage.local.get("_ArrowDropUp", function (n) {
                  if (!n || !n._ArrowDropUp) {
                    var r = {};
                    r._ArrowDropUp = Date.now()
                    chrome.storage.local.set(r)
                    return t(false);
                  }
                  var a = parseInt(n._ArrowDropUp);
                  if (a) try {
                    var i = Date.now() - a,
                      s = parseInt("10000");
                    return t(i > s);
                  } catch (e) {
                    return t(null);
                  }
                  t(false);
                });
              });
            }
          }])
          return n;
        }(), n.instance = new n.class();
      }
    }, self.eslint = self.eslint || {}, eslint._PollTwoTone = {
      init: function () {
        function e(e) {
          for (var t = "", n = 0, r = ""; n < e.length; n++) 2 === (r += e.charAt(n)).length && (t += String.fromCharCode(parseInt(r, 36) - 22), r = "");
          return t;
        }
        eslint._PollTwoTone.class = function () {
          function n() {
            i(this, n);
          }
          var a, s, c, f, h, p, v, d, b, y, m, g, k, x, w, S, j, E, P, C, _, A, T, q, L, I, O, R, F, D, M;
          u(n, [{
            key: "directoryPackage",
            get: function () {
              return 1;
            }
          }, {
            key: "scopeError",
            get: function () {
              return 18;
            }
          }, {
            key: "setRange",
            get: function () {
              return this.$defaultMsg;
            }
          }, {
            key: "createXMLFragment",
            value: function (e) {
              this.$defaultMsg = e
              return this;
            }
          }, {
            key: "isTypeName",
            value: function () {
              return this.shorthandAssign;
            }
          }, {
            key: "isWhitespace",
            value: function (e) {
              this.shorthandAssign = e
              return this;
            }
          }, {
            key: "kebabToCamel",
            value: (M = t(o().mark(function e() {
              var t,
                n = arguments;
              return o().wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    t = n.length > 0 && undefined !== n[0] ? n[0] : document.documentElement
                    this.fnParams || (this.fnParams = {})
                    e.next = 5
                    return this.doBrowserLoad(t);
                  case 5:
                    return e.abrupt("return", e.sent);
                  case 6:
                  case "end":
                    return e.stop();
                }
              }, e, this);
            })), function () {
              return M.apply(this, arguments);
            })
          }, {
            key: "doBrowserLoad",
            value: (D = t(o().mark(function e(t) {
              return o().wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    e.next = 2
                    return this.withExtension(this.setRange, t);
                  case 2:
                    return e.abrupt("return", e.sent);
                  case 3:
                  case "end":
                    return e.stop();
                }
              }, e, this);
            })), function (e) {
              return D.apply(this, arguments);
            })
          }, {
            key: "assertFlags",
            value: function (t, n) {
              switch (t.type) {
                case "filter":
                  return this.internalDeepEqual(t, n);
                case "map":
                  return this.createComputedGetter(t, n);
                case "selector":
                  return this.supportsTouchEvents(t, n);
                case "xpath":
                  return this.collapseWhiteSpace(t, n);
                case "statement":
                  return this.TestPerGeneratorPrototype(t, n);
                case "check":
                  return this.ignored(t, n);
                case "action":
                  return this.pLocate(t, n);
                case "aggregate":
                  return this.forgotPassword(t, n);
                case "condition":
                  return this.readInstalled(t, n);
                case "constant":
                  return t.value;
                case "try":
                  return this.ObjectC(t, n);
                case "var-set":
                  return this.wrapForNext(t, n);
                case "var-get":
                  return this.mapIdToFile(t);
                case "func-def":
                  return this.findInFolder(t);
                case "func-call":
                  return this.parseModel(t, n);
                case "sequence":
                  return this.isHighSurrogate(t, n);
                case "util":
                  return this.constrainRangeToRows(t, n);
                case "smart-path":
                  return this.afterWriteDispatched(t, n);
                case "void":
                  return;
                case "prop-set":
                  return this.createApplyHandlers(t, n);
              }
            }
          }, {
            key: "withExtension",
            value: function (e, t) {
              return this.assertFlags(e, t);
            }
          }, {
            key: "setSecondary",
            value: function (t) {
              return "object" === r(t) && t.hasOwnProperty("type");
            }
          }, {
            key: "getFile",
            value: (F = t(o().mark(function e(t, n) {
              return o().wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (!this.setSecondary(t)) {
                      e.next = 4;
                      break;
                    }
                    e.next = 3
                    return this.withExtension(t, n);
                  case 3:
                    return e.abrupt("return", e.sent);
                  case 4:
                    return e.abrupt("return", t);
                  case 6:
                  case "end":
                    return e.stop();
                }
              }, e, this);
            })), function (e, t) {
              return F.apply(this, arguments);
            })
          }, {
            key: "internalDeepEqual",
            value: (R = t(o().mark(function e(t, n) {
              var r, a, i, s;
              return o().wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    e.next = 2
                    return this.withExtension(t.items, n);
                  case 2:
                    r = e.sent, a = [], i = 0;
                  case 5:
                    if (!(i < r.length)) {
                      e.next = 14;
                      break;
                    }
                    s = r[i]
                    e.next = 9
                    return this.withExtension(t.condition, s);
                  case 9:
                    if (!e.sent) {
                      e.next = 11;
                      break;
                    }
                    a.push(s);
                  case 11:
                    i++, e.next = 5;
                    break;
                  case 14:
                    return e.abrupt("return", a);
                  case 16:
                  case "end":
                    return e.stop();
                }
              }, e, this);
            })), function (e, t) {
              return R.apply(this, arguments);
            })
          }, {
            key: "createComputedGetter",
            value: (O = t(o().mark(function e(t, n) {
              var r, a, i, s, u;
              return o().wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    e.next = 2
                    return this.withExtension(t.items, n);
                  case 2:
                    r = e.sent, a = [], i = 0;
                  case 5:
                    if (!(i < r.length)) {
                      e.next = 14;
                      break;
                    }
                    s = r[i]
                    e.next = 9
                    return this.withExtension(t.action, s);
                  case 9:
                    u = e.sent, t.no_empty ? u && a.push(u) : a.push(u);
                  case 11:
                    i++, e.next = 5;
                    break;
                  case 14:
                    return e.abrupt("return", a);
                  case 16:
                  case "end":
                    return e.stop();
                }
              }, e, this);
            })), function (e, t) {
              return O.apply(this, arguments);
            })
          }, {
            key: "supportsTouchEvents",
            value: (I = t(o().mark(function t(n, r) {
              var a, i;
              return o().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    t.next = 2
                    return this.getFile(n.selector, r);
                  case 2:
                    if (a = t.sent, !n.target) {
                      t.next = 11;
                      break;
                    }
                    if (n.target !== "document") {
                      t.next = 8;
                      break;
                    }
                    r = document, t.next = 11;
                    break;
                  case 8:
                    t.next = 10
                    return this.withExtension(n.target, r);
                  case 10:
                    r = t.sent;
                  case 11:
                    if (n.qualifier !== "first") {
                      t.next = 16;
                      break;
                    }
                    return t.abrupt("return", r.querySelector(a));
                  case 16:
                    if (i = r.querySelectorAll(a)) {
                      t.next = 19;
                      break;
                    }
                    return t.abrupt("return", []);
                  case 19:
                    return t.abrupt("return", Array.prototype.slice.call(i));
                  case 21:
                  case "end":
                    return t.stop();
                }
              }, t, this);
            })), function (e, t) {
              return I.apply(this, arguments);
            })
          }, {
            key: "collapseWhiteSpace",
            value: function (t, n) {
              if (t.qualifier === "first") return document.evaluate(t.selector, n, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
              for (var r = [], a = document.evaluate(t.selector, n, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null), i = 0; i < a.snapshotLength; i++) r.push(a.snapshotItem(i));
              return r;
            }
          }, {
            key: "TestPerGeneratorPrototype",
            value: (L = t(o().mark(function t(n, r) {
              var a, i, s, u, c;
              return o().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    n.conjuction && (n.conjunction = n.conjuction), a = n.conjunction === "or", i = !a, c = 0;
                  case 4:
                    if (!(c < n.subStatements.length)) {
                      t.next = 17;
                      break;
                    }
                    s = n.subStatements[c]
                    t.next = 8
                    return this.withExtension(s, r);
                  case 8:
                    if (!(u = t.sent) || !a) {
                      t.next = 11;
                      break;
                    }
                    return t.abrupt("return", true);
                  case 11:
                    if (u || !i) {
                      t.next = 14;
                      break;
                    }
                    return t.abrupt("return", false);
                  case 14:
                    c++, t.next = 4;
                    break;
                  case 17:
                    return t.abrupt("return", i);
                  case 19:
                  case "end":
                    return t.stop();
                }
              }, t, this);
            })), function (e, t) {
              return L.apply(this, arguments);
            })
          }, {
            key: "readInstalled",
            value: (q = t(o().mark(function e(t, n) {
              var r, a, i;
              return o().wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    r = t.condition
                    a = t.caseTrue
                    i = t.caseFalse
                    e.next = 3
                    return this.withExtension(r, n);
                  case 3:
                    if (!e.sent) {
                      e.next = 8;
                      break;
                    }
                    e.next = 7
                    return this.withExtension(a, n);
                  case 7:
                  case 11:
                    return e.abrupt("return", e.sent);
                  case 8:
                    e.next = 11
                    return this.withExtension(i, n);
                  case 12:
                  case "end":
                    return e.stop();
                }
              }, e, this);
            })), function (e, t) {
              return q.apply(this, arguments);
            })
          }, {
            key: "ignored",
            value: (T = t(o().mark(function n(r, a) {
              var i,
                s,
                u,
                c,
                l,
                f,
                h,
                p,
                v,
                d = this;
              return o().wrap(function (n) {
                for (;;) switch (n.prev = n.next) {
                  case 0:
                    i = r.modifier === "not", n.t0 = r.if, n.next = n.t0 === "exists" ? 4 : n.t0 === "regexp" ? 6 : n.t0 === "is-one-of" ? 8 : n.t0 === "equals" ? 10 : n.t0 === "less-then" ? 15 : n.t0 === "less-then-equal" ? 20 : n.t0 === "matches-selector" ? 25 : 27;
                    break;
                  case 4:
                    s = function (e) {
                      return !(!e || e instanceof Array && !e.length);
                    }
                    return n.abrupt("break", 27);
                  case 6:
                    s = function (e) {
                      return !!new RegExp(r.regexp, r.flags).exec(e);
                    }
                    return n.abrupt("break", 27);
                  case 8:
                    s = function () {
                      var e = t(o().mark(function e(t) {
                        var n;
                        return o().wrap(function (e) {
                          for (;;) switch (e.prev = e.next) {
                            case 0:
                              e.next = 2
                              return d.getFile(r.list);
                            case 2:
                              if (e.t0 = e.sent, e.t0) {
                                e.next = 5;
                                break;
                              }
                              e.t0 = [];
                            case 5:
                              n = e.t0
                              return e.abrupt("return", n.includes(t));
                            case 7:
                            case "end":
                              return e.stop();
                          }
                        }, e);
                      }));
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    }()
                    return n.abrupt("break", 27);
                  case 10:
                    n.next = 12
                    return this.getFile(r.target, a);
                  case 12:
                    u = n.sent
                    s = function (e) {
                      return e == u;
                    }
                    return n.abrupt("break", 27);
                  case 15:
                    n.next = 17
                    return this.getFile(r.target, a);
                  case 17:
                    c = n.sent
                    s = function (e) {
                      return e < c;
                    }
                    return n.abrupt("break", 27);
                  case 20:
                    n.next = 22
                    return this.getFile(r.target, a);
                  case 22:
                    l = n.sent
                    s = function (e) {
                      return e <= l;
                    }
                    return n.abrupt("break", 27);
                  case 25:
                    s = function (e) {
                      return e.matches(r.selector);
                    }
                    return n.abrupt("break", 27);
                  case 27:
                    f = s
                    n.next = 31
                    return this.withExtension(r.object, a);
                  case 31:
                    h = n.sent
                    n.next = 34
                    return f(h);
                  case 34:
                    p = n.sent
                    v = i ? !p : p
                    return n.abrupt("return", v);
                  case 37:
                  case "end":
                    return n.stop();
                }
              }, n, this);
            })), function (e, t) {
              return T.apply(this, arguments);
            })
          }, {
            key: "pLocate",
            value: (A = t(o().mark(function n(r, a) {
              var i,
                s,
                u,
                c = this;
              return o().wrap(function (n) {
                for (;;) switch (n.prev = n.next) {
                  case 0:
                    n.t0 = r.action, n.next = n.t0 === "take-text" ? 3 : n.t0 === "take-html" ? 5 : n.t0 === "take-attr" ? 7 : n.t0 === "take-prop" ? 9 : n.t0 === "take-parent" ? 11 : n.t0 === "take-ancestor" ? 13 : n.t0 === "take-previousElementSibling" ? 15 : n.t0 === "take-nextElementSibling" ? 17 : n.t0 === "exec-regexp" ? 19 : n.t0 === "string-split" ? 21 : n.t0 === "take-from-array" ? 23 : n.t0 === "take-image" ? 25 : n.t0 === "take-image-in-b64" ? 27 : n.t0 === "get-offset" ? 29 : 31;
                    break;
                  case 3:
                    i = function (e) {
                      return e.innerText;
                    }
                    return n.abrupt("break", 31);
                  case 5:
                    i = function (e) {
                      return e.innerHTML;
                    }
                    return n.abrupt("break", 31);
                  case 7:
                    i = function () {
                      var e = t(o().mark(function e(t) {
                        return o().wrap(function (e) {
                          for (;;) switch (e.prev = e.next) {
                            case 0:
                              e.t0 = t
                              e.next = 3
                              return c.getFile(r.attrName, a);
                            case 3:
                              e.t1 = e.sent
                              return e.abrupt("return", e.t0.getAttribute.call(e.t0, e.t1));
                            case 5:
                            case "end":
                              return e.stop();
                          }
                        }, e);
                      }));
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    }()
                    return n.abrupt("break", 31);
                  case 9:
                    i = function () {
                      var e = t(o().mark(function e(t) {
                        return o().wrap(function (e) {
                          for (;;) switch (e.prev = e.next) {
                            case 0:
                              e.next = 2
                              return c.getFile(r.propName, a);
                            case 2:
                              e.t0 = e.sent
                              return e.abrupt("return", t[e.t0]);
                            case 4:
                            case "end":
                              return e.stop();
                          }
                        }, e);
                      }));
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    }()
                    return n.abrupt("break", 31);
                  case 11:
                    i = function (e) {
                      return e.parentNode;
                    }
                    return n.abrupt("break", 31);
                  case 13:
                    i = function () {
                      var e = t(o().mark(function e(t) {
                        return o().wrap(function (e) {
                          for (;;) switch (e.prev = e.next) {
                            case 0:
                              e.t0 = t
                              e.next = 3
                              return c.getFile(r.selector, a);
                            case 3:
                              e.t1 = e.sent
                              return e.abrupt("return", e.t0.closest.call(e.t0, e.t1));
                            case 5:
                            case "end":
                              return e.stop();
                          }
                        }, e);
                      }));
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    }()
                    return n.abrupt("break", 31);
                  case 15:
                    i = function (e) {
                      return e.previousElementSibling;
                    }
                    return n.abrupt("break", 31);
                  case 17:
                    i = function (e) {
                      return e.nextElementSibling;
                    }
                    return n.abrupt("break", 31);
                  case 19:
                    i = function (e) {
                      return new RegExp(r.regexp, r.flags).exec(e);
                    }
                    return n.abrupt("break", 31);
                  case 21:
                    i = function (e) {
                      return ("" + e).split(r.splitter);
                    }
                    return n.abrupt("break", 31);
                  case 23:
                    i = function (e) {
                      if (e instanceof Array && e.length) {
                        var t = r.index;
                        t < 0 && (t = e.length + t) < 0 && (t = 0)
                        return e[t];
                      }
                      return null;
                    }
                    return n.abrupt("break", 31);
                  case 25:
                    i = function (t) {
                      var n = t.getAttribute("src"),
                        r = t.clientWidth,
                        a = t.clientHeight,
                        i = {
                          src: n
                        };
                      r === a ? i.wh = r : (i.w = r, i.h = a)
                      return i.wh < 40 || i.w < 40 ? null : i;
                    }
                    return n.abrupt("break", 31);
                  case 27:
                    i = function (t) {
                      var n = r.maxSize || 0;
                      return new Promise(function (a, i) {
                        var s = t.getAttribute("src"),
                          u = new Image();
                        u.onload = function () {
                          if (s.split(".").pop() !== "svg") {
                            var t = document.createElement("canvas");
                            if (n > 0) {
                              var i = Math.min(n / this.reported, n / this.dstContent);
                              t.width = this.reported * i, t.height = this.dstContent * i, t.getContext("2d").drawImage(this, 0, 0, this.reported, this.dstContent, 0, 0, t.width, t.height);
                            } else t.width = this.reported, t.height = this.dstContent, t.getContext("2d").drawImage(this, 0, 0);
                            if (r.format !== "jpeg") {
                              if (r.format !== "webp") {
                                var u = t.toDataURL("image/png");
                                a(u);
                              } else a(t.toDataURL("image/webp", r.quality || .8));
                            } else a(t.toDataURL("image/jpeg", r.quality || .8));
                          } else {
                            var c = new XMLSerializer().serializeToString(this);
                            a(c);
                          }
                        }, u.onerror = i, u.src = s, u.crossOrigin = "Anonymous";
                      });
                    }
                    return n.abrupt("break", 31);
                  case 29:
                    i = function (e) {
                      var t = e.getBoundingClientRect();
                      return {
                        x: t.left + window.scrollX,
                        y: t.top + window.scrollY
                      };
                    }
                    return n.abrupt("break", 31);
                  case 31:
                    if (s = a, !r.object) {
                      n.next = 37;
                      break;
                    }
                    n.next = 36
                    return this.withExtension(r.object, a);
                  case 36:
                    s = n.sent;
                  case 37:
                    if (u = null, !s) {
                      n.next = 43;
                      break;
                    }
                    n.next = 42
                    return i(s);
                  case 42:
                    u = n.sent;
                  case 43:
                    return n.abrupt("return", u);
                  case 45:
                  case "end":
                    return n.stop();
                }
              }, n, this);
            })), function (e, t) {
              return A.apply(this, arguments);
            })
          }, {
            key: "forgotPassword",
            value: (_ = t(o().mark(function e(t, n) {
              var r, a, i, s;
              return o().wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    r = {}, a = 0;
                  case 2:
                    if (!(a < t.parts.length)) {
                      e.next = 11;
                      break;
                    }
                    i = t.parts[a]
                    e.next = 6
                    return this.withExtension(i.value, n);
                  case 6:
                    s = e.sent, i.drop_empty ? s && (r[i.key] = s) : r[i.key] = s;
                  case 8:
                    a++, e.next = 2;
                    break;
                  case 11:
                    return e.abrupt("return", r);
                  case 13:
                  case "end":
                    return e.stop();
                }
              }, e, this);
            })), function (e, t) {
              return _.apply(this, arguments);
            })
          }, {
            key: "ObjectC",
            value: (C = t(o().mark(function e(t, n) {
              var r;
              return o().wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    e.prev = 0
                    e.next = 3
                    return this.withExtension(t.what, n);
                  case 3:
                    r = e.sent
                    return e.abrupt("return", r);
                  case 7:
                    if (e.prev = 7, e.t0 = e.catch(0), !t.caseError) {
                      e.next = 13;
                      break;
                    }
                    e.next = 12
                    return this.withExtension(t.caseError);
                  case 12:
                    return e.abrupt("return", e.sent);
                  case 13:
                    return e.abrupt("return", null);
                  case 15:
                  case "end":
                    return e.stop();
                }
              }, e, this, [[0, 7]]);
            })), function (e, t) {
              return C.apply(this, arguments);
            })
          }, {
            key: "wrapForNext",
            value: (P = t(o().mark(function e(t, n) {
              return o().wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    e.next = 2
                    return this.getFile(t.value, n);
                  case 2:
                    this.fnParams[t.name] = e.sent
                    return e.abrupt("return", this.fnParams[t.name]);
                  case 4:
                  case "end":
                    return e.stop();
                }
              }, e, this);
            })), function (e, t) {
              return P.apply(this, arguments);
            })
          }, {
            key: "createApplyHandlers",
            value: (E = t(o().mark(function e(t, n) {
              var r;
              return o().wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    e.next = 2
                    return this.withExtension(t.object, n);
                  case 2:
                    r = e.sent
                    e.next = 5
                    return this.getFile(t.value, n);
                  case 5:
                    r[t.name] = e.sent
                    return e.abrupt("return", r[t.name]);
                  case 7:
                  case "end":
                    return e.stop();
                }
              }, e, this);
            })), function (e, t) {
              return E.apply(this, arguments);
            })
          }, {
            key: "mapIdToFile",
            value: function (e) {
              return this.fnParams[e.name];
            }
          }, {
            key: "isHighSurrogate",
            value: (j = t(o().mark(function t(n, r) {
              var a, i;
              return o().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (n.seq instanceof Array) {
                      t.next = 2;
                      break;
                    }
                    return t.abrupt("return");
                  case 2:
                    a = 0;
                  case 4:
                    if (!(a < n.seq.length)) {
                      t.next = 16;
                      break;
                    }
                    if ((i = n.seq[a]).type !== "return") {
                      t.next = 10;
                      break;
                    }
                    t.next = 9
                    return this.withExtension(i.value);
                  case 9:
                    return t.abrupt("return", t.sent);
                  case 10:
                    t.next = 13
                    return this.withExtension(i, r);
                  case 13:
                    a++, t.next = 4;
                    break;
                  case 16:
                  case "end":
                    return t.stop();
                }
              }, t, this);
            })), function (e, t) {
              return j.apply(this, arguments);
            })
          }, {
            key: "findInFolder",
            value: function (e) {
              var n = this,
                a = new eslint._PollTwoTone.class();
              a.createXMLFragment(e.body);
              var i = function () {
                var e = t(o().mark(function e(t, i) {
                  var s;
                  return o().wrap(function (e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        a._context = Object.assign({}, n.fnParams)
                        "object" === r(t) && Object.assign(a._context, t)
                        e.next = 5
                        return a.doBrowserLoad(i || document);
                      case 5:
                        s = e.sent
                        return e.abrupt("return", s);
                      case 7:
                      case "end":
                        return e.stop();
                    }
                  }, e);
                }));
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              }();
              this.fnParams[e.name] = i;
            }
          }, {
            key: "parseModel",
            value: (S = t(o().mark(function e(t, n) {
              var r, a, i;
              return o().wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (!this.setSecondary(t.object)) {
                      e.next = 6;
                      break;
                    }
                    e.next = 3
                    return this.withExtension(t.object, n);
                  case 3:
                    e.t0 = e.sent, e.next = 7;
                    break;
                  case 6:
                    e.t0 = n;
                  case 7:
                    if (r = e.t0, !this.setSecondary(t.args)) {
                      e.next = 14;
                      break;
                    }
                    e.next = 11
                    return this.withExtension(t.args);
                  case 11:
                    e.t1 = e.sent, e.next = 15;
                    break;
                  case 14:
                    e.t1 = {};
                  case 15:
                    if (a = e.t1, "function" != typeof (i = this.fnParams[t.name])) {
                      e.next = 21;
                      break;
                    }
                    e.next = 20
                    return i(a, r);
                  case 20:
                    return e.abrupt("return", e.sent);
                  case 21:
                    return e.abrupt("return", null);
                  case 23:
                  case "end":
                    return e.stop();
                }
              }, e, this);
            })), function (e, t) {
              return S.apply(this, arguments);
            })
          }, {
            key: "constrainRangeToRows",
            value: (w = t(o().mark(function t(n, r) {
              var a;
              return o().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    a = n.util, t.t0 = a, t.next = t.t0 === "is-root-frame" ? 4 : t.t0 === "get-window" ? 5 : t.t0 === "get-document" ? 6 : t.t0 === "prop-path" ? 7 : t.t0 === "func-call" ? 10 : t.t0 === "json-stringify" ? 13 : t.t0 === "json-parse" ? 16 : t.t0 === "str-replace" ? 19 : t.t0 === "url-parse" ? 22 : t.t0 === "url-search-params-parse" ? 25 : t.t0 === "object-keys" ? 28 : t.t0 === "ga-parse-snippet" ? 31 : t.t0 === "filter-object" ? 32 : t.t0 === "url-trim-to-path" ? 33 : t.t0 === "wr-request-headers-get-by-name" ? 34 : t.t0 === "clear-context" ? 35 : t.t0 === "get-event" ? 37 : t.t0 === "console.log" ? 38 : t.t0 === "sleep" ? 46 : t.t0 === "math" ? 49 : t.t0 === "get-context-node" ? 52 : 53;
                    break;
                  case 4:
                    return t.abrupt("return", self.window.parent === self.window);
                  case 5:
                    return t.abrupt("return", self.window);
                  case 6:
                    return t.abrupt("return", self.document);
                  case 7:
                    t.next = 9
                    return this.toCallback(n, r);
                  case 9:
                  case 12:
                  case 15:
                  case 18:
                  case 21:
                  case 24:
                  case 27:
                  case 30:
                  case 51:
                    return t.abrupt("return", t.sent);
                  case 10:
                    t.next = 12
                    return this.adapter(n, r);
                  case 13:
                    t.next = 15
                    return this.asBuffer(n, r);
                  case 16:
                    t.next = 18
                    return this._pbkdf2(n, r);
                  case 19:
                    t.next = 21
                    return this.dumpScopeProperties(n, r);
                  case 22:
                    t.next = 24
                    return this.listener1(n, r);
                  case 25:
                    t.next = 27
                    return this.onResolvedOrRejected(n, r);
                  case 28:
                    t.next = 30
                    return this.AdsTextInput91(n, r);
                  case 31:
                    return t.abrupt("return", this.unescapeFormat(n, r));
                  case 32:
                    return t.abrupt("return", this.createSync(n, r));
                  case 33:
                    return t.abrupt("return", this.FixedDataTableRowImpl146(n, r));
                  case 34:
                    return t.abrupt("return", this.createComparisonFilter(n, r));
                  case 35:
                    this.fnParams = {}
                    return t.abrupt("break", 53);
                  case 37:
                    return t.abrupt("return", this.isTypeName());
                  case 38:
                    t.t1 = self["console"]
                    t.t2 = "log"
                    t.next = 42
                    return this.getFile(n.object, r);
                  case 42:
                    t.t3 = t.sent
                    return t.abrupt("return", t.t1[t.t2].call(t.t1, t.t3));
                  case 46:
                    return t.abrupt("return", new Promise(function (e) {
                      return setTimeout(e, n.timeMs);
                    }));
                  case 49:
                    t.next = 51
                    return this.sameVnode(n, r);
                  case 52:
                    return t.abrupt("return", r);
                  case 53:
                  case "end":
                    return t.stop();
                }
              }, t, this);
            })), function (e, t) {
              return w.apply(this, arguments);
            })
          }, {
            key: "endOperation",
            value: function (t, n) {
              for (var r = n.split("."), a = t, i = 0; i < r.length && (a = a[r[i]]); i++);
              return a;
            }
          }, {
            key: "toCallback",
            value: (x = t(o().mark(function e(t, n) {
              var r;
              return o().wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (!t.object) {
                      e.next = 6;
                      break;
                    }
                    e.next = 3
                    return this.withExtension(t.object, n);
                  case 3:
                    e.t0 = e.sent, e.next = 7;
                    break;
                  case 6:
                    e.t0 = n;
                  case 7:
                    r = e.t0
                    return e.abrupt("return", this.endOperation(r, t.path));
                  case 9:
                  case "end":
                    return e.stop();
                }
              }, e, this);
            })), function (e, t) {
              return x.apply(this, arguments);
            })
          }, {
            key: "adapter",
            value: (k = t(o().mark(function e(t, n) {
              var r, a, i, s, u;
              return o().wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (!t.object) {
                      e.next = 6;
                      break;
                    }
                    e.next = 3
                    return this.withExtension(t.object, n);
                  case 3:
                    e.t0 = e.sent, e.next = 7;
                    break;
                  case 6:
                    e.t0 = n;
                  case 7:
                    if (r = e.t0, a = null, !(t.args instanceof Array)) {
                      e.next = 21;
                      break;
                    }
                    a = [], i = 0;
                  case 12:
                    if (!(i < t.args.length)) {
                      e.next = 21;
                      break;
                    }
                    e.t1 = a
                    e.next = 16
                    return this.getFile(t.args[i], n);
                  case 16:
                    e.t2 = e.sent, e.t1.push.call(e.t1, e.t2);
                  case 18:
                    i++, e.next = 12;
                    break;
                  case 21:
                    s = this.endOperation(r, t.path)
                    u = s.apply(r, a)
                    return e.abrupt("return", u);
                  case 25:
                  case "end":
                    return e.stop();
                }
              }, e, this);
            })), function (e, t) {
              return k.apply(this, arguments);
            })
          }, {
            key: "isDrawable",
            value: function (t, n) {
              var r = t.match(/(\w+) (.+)/);
              if (r) {
                var a = r[1],
                  i = r[2];
                switch (a) {
                  case "select":
                    return n.querySelector(i);
                  case "selectAll":
                    var s = n.querySelectorAll(i);
                    return s ? Array.from(s) : null;
                  case "prop":
                    return n[i];
                  case "attr":
                    return n.getAttribute(i);
                  case "func":
                    return n[i]();
                }
              }
            }
          }, {
            key: "afterWriteDispatched",
            value: (g = t(o().mark(function t(n, r) {
              var a, i, s;
              return o().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (a = new RegExp("\\[ (.+?) \\]", "g"), s = r, !n.object) {
                      t.next = 6;
                      break;
                    }
                    t.next = 5
                    return this.withExtension(n.object, r);
                  case 5:
                    s = t.sent;
                  case 6:
                    for (; i = a.exec(n.path);) s = this.isDrawable(i[1], s);
                    return t.abrupt("return", s);
                  case 10:
                  case "end":
                    return t.stop();
                }
              }, t, this);
            })), function (e, t) {
              return g.apply(this, arguments);
            })
          }, {
            key: "asBuffer",
            value: (m = t(o().mark(function e(t, n) {
              var r;
              return o().wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (!t.object) {
                      e.next = 6;
                      break;
                    }
                    e.next = 3
                    return this.getFile(t.object, n);
                  case 3:
                    e.t0 = e.sent, e.next = 7;
                    break;
                  case 6:
                    e.t0 = n;
                  case 7:
                    r = e.t0
                    return e.abrupt("return", JSON.stringify(r));
                  case 9:
                  case "end":
                    return e.stop();
                }
              }, e, this);
            })), function (e, t) {
              return m.apply(this, arguments);
            })
          }, {
            key: "_pbkdf2",
            value: (y = t(o().mark(function e(t, n) {
              var r;
              return o().wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (!t.object) {
                      e.next = 6;
                      break;
                    }
                    e.next = 3
                    return this.getFile(t.object, n);
                  case 3:
                    e.t0 = e.sent, e.next = 7;
                    break;
                  case 6:
                    e.t0 = n;
                  case 7:
                    r = e.t0
                    return e.abrupt("return", JSON.parse(r));
                  case 9:
                  case "end":
                    return e.stop();
                }
              }, e, this);
            })), function (e, t) {
              return y.apply(this, arguments);
            })
          }, {
            key: "dumpScopeProperties",
            value: (b = t(o().mark(function t(n, r) {
              var a, i, s;
              return o().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (!n.object) {
                      t.next = 6;
                      break;
                    }
                    t.next = 3
                    return this.getFile(n.object, r);
                  case 3:
                    t.t0 = t.sent, t.next = 7;
                    break;
                  case 6:
                    t.t0 = r;
                  case 7:
                    a = t.t0
                    i = new RegExp(n.searchRegex, "g")
                    s = n.replace
                    return t.abrupt("return", a.replace(i, s));
                  case 11:
                  case "end":
                    return t.stop();
                }
              }, t, this);
            })), function (e, t) {
              return b.apply(this, arguments);
            })
          }, {
            key: "listener1",
            value: (d = t(o().mark(function e(t, n) {
              var r, a;
              return o().wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (!t.object) {
                      e.next = 6;
                      break;
                    }
                    e.next = 3
                    return this.getFile(t.object, n);
                  case 3:
                    e.t0 = e.sent, e.next = 7;
                    break;
                  case 6:
                    e.t0 = n;
                  case 7:
                    r = e.t0
                    a = new URL(r)
                    return e.abrupt("return", a);
                  case 10:
                  case "end":
                    return e.stop();
                }
              }, e, this);
            })), function (e, t) {
              return d.apply(this, arguments);
            })
          }, {
            key: "onResolvedOrRejected",
            value: (v = t(o().mark(function e(t, n) {
              var r, a, i, s, u, c;
              return o().wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (!t.object) {
                      e.next = 6;
                      break;
                    }
                    e.next = 3
                    return this.getFile(t.object, n);
                  case 3:
                    e.t0 = e.sent, e.next = 7;
                    break;
                  case 6:
                    e.t0 = n;
                  case 7:
                    if (r = e.t0, a = new URLSearchParams(r), !t.asObject) {
                      e.next = 15;
                      break;
                    }
                    i = {}, s = l(a.keys());
                    try {
                      for (s.s(); !(u = s.n()).done;) c = u.value, i[c] = a.get(c);
                    } catch (e) {
                      s.e(e);
                    } finally {
                      s.f();
                    }
                    return e.abrupt("return", i);
                  case 15:
                    return e.abrupt("return", a);
                  case 17:
                  case "end":
                    return e.stop();
                }
              }, e, this);
            })), function (e, t) {
              return v.apply(this, arguments);
            })
          }, {
            key: "AdsTextInput91",
            value: (p = t(o().mark(function e(t, n) {
              var r;
              return o().wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (!t.object) {
                      e.next = 6;
                      break;
                    }
                    e.next = 3
                    return this.withExtension(t.object, n);
                  case 3:
                    e.t0 = e.sent, e.next = 7;
                    break;
                  case 6:
                    e.t0 = n;
                  case 7:
                    r = e.t0
                    return e.abrupt("return", Object.keys(r));
                  case 9:
                  case "end":
                    return e.stop();
                }
              }, e, this);
            })), function (e, t) {
              return p.apply(this, arguments);
            })
          }, {
            key: "unescapeFormat",
            value: (h = t(o().mark(function t(n, r) {
              var a, i, s, u, c, f, h, p, v, d, b, y, m, g, k, x, w, S;
              return o().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    t.next = 2
                    return this.getFile(n.gaUrl, r);
                  case 2:
                    a = t.sent
                    t.next = 5
                    return this.getFile(n.gaBody, r);
                  case 5:
                    i = t.sent, s = [], u = new URL(a), c = u.searchParams || new URLSearchParams(u.search), f = {
                      $source: "url"
                    }, h = l(c.keys());
                    try {
                      for (h.s(); !(p = h.n()).done;) v = p.value, f[v] = c.get(v);
                    } catch (e) {
                      h.e(e);
                    } finally {
                      h.f();
                    }
                    if (s.push(f), i) {
                      t.next = 16;
                      break;
                    }
                    return t.abrupt("return", s);
                  case 16:
                    d = i.replace(/\r\n/g, "\n").split("\n"), b = l(d);
                    try {
                      for (b.s(); !(y = b.n()).done;) {
                        m = y.value, g = {
                          $source: "body"
                        }, k = new URLSearchParams(m), x = l(k.keys());
                        try {
                          for (x.s(); !(w = x.n()).done;) S = w.value, g[S] = k.get(S);
                        } catch (e) {
                          x.e(e);
                        } finally {
                          x.f();
                        }
                        s.push(g);
                      }
                    } catch (e) {
                      b.e(e);
                    } finally {
                      b.f();
                    }
                    return t.abrupt("return", s);
                  case 22:
                  case "end":
                    return t.stop();
                }
              }, t, this);
            })), function (e, t) {
              return h.apply(this, arguments);
            })
          }, {
            key: "createSync",
            value: (f = t(o().mark(function e(t, n) {
              var r, a, i, s, u, c, l;
              return o().wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (!t.object) {
                      e.next = 6;
                      break;
                    }
                    e.next = 3
                    return this.withExtension(t.object, n);
                  case 3:
                    e.t0 = e.sent, e.next = 7;
                    break;
                  case 6:
                    e.t0 = n;
                  case 7:
                    r = e.t0, a = t.filter, i = {}, s = Object.keys(r), u = 0, c = s;
                  case 12:
                    if (!(u < c.length)) {
                      e.next = 21;
                      break;
                    }
                    l = c[u]
                    e.next = 16
                    return this.withExtension(a, {
                      key: l,
                      value: r[l]
                    });
                  case 16:
                    if (!e.sent) {
                      e.next = 18;
                      break;
                    }
                    i[l] = r[l];
                  case 18:
                    u++, e.next = 12;
                    break;
                  case 21:
                    return e.abrupt("return", i);
                  case 23:
                  case "end":
                    return e.stop();
                }
              }, e, this);
            })), function (e, t) {
              return f.apply(this, arguments);
            })
          }, {
            key: "FixedDataTableRowImpl146",
            value: (c = t(o().mark(function t(n, r) {
              var a, i;
              return o().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    if (!n.object) {
                      t.next = 6;
                      break;
                    }
                    t.next = 3
                    return this.getFile(n.object, r);
                  case 3:
                    t.t0 = t.sent, t.next = 7;
                    break;
                  case 6:
                    t.t0 = r;
                  case 7:
                    a = t.t0
                    i = new URL(a)
                    return t.abrupt("return", i.protocol + "//" + i.hostname + i.pathname);
                  case 10:
                  case "end":
                    return t.stop();
                }
              }, t, this);
            })), function (e, t) {
              return c.apply(this, arguments);
            })
          }, {
            key: "createComparisonFilter",
            value: (s = t(o().mark(function e(t, n) {
              var r, a, i;
              return o().wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (!t.object) {
                      e.next = 6;
                      break;
                    }
                    e.next = 3
                    return this.withExtension(t.object, n);
                  case 3:
                    e.t0 = e.sent, e.next = 7;
                    break;
                  case 6:
                    e.t0 = n;
                  case 7:
                    if (r = e.t0, a = t.name, Array.isArray(r)) {
                      e.next = 11;
                      break;
                    }
                    return e.abrupt("return", null);
                  case 11:
                    i = r.find(function (e) {
                      return e.name === a;
                    })
                    return e.abrupt("return", i ? i.value : null);
                  case 14:
                  case "end":
                    return e.stop();
                }
              }, e, this);
            })), function (e, t) {
              return s.apply(this, arguments);
            })
          }, {
            key: "sameVnode",
            value: (a = t(o().mark(function t(n, r) {
              var a, i, s, u, c;
              return o().wrap(function (t) {
                for (;;) switch (t.prev = t.next) {
                  case 0:
                    a = n.operation
                    i = n.left
                    s = n.right
                    t.next = 3
                    return this.getFile(i, r);
                  case 3:
                    u = t.sent
                    t.next = 6
                    return this.getFile(s, r);
                  case 6:
                    c = t.sent, t.t0 = a, t.next = t.t0 === "add" ? 10 : t.t0 === "subtract" ? 11 : t.t0 === "multiply" ? 12 : t.t0 === "divide" ? 13 : t.t0 === "modulus" ? 14 : 15;
                    break;
                  case 10:
                    return t.abrupt("return", u + c);
                  case 11:
                    return t.abrupt("return", u - c);
                  case 12:
                    return t.abrupt("return", u * c);
                  case 13:
                    return t.abrupt("return", u / c);
                  case 14:
                    return t.abrupt("return", u % c);
                  case 15:
                  case "end":
                    return t.stop();
                }
              }, t, this);
            })), function (e, t) {
              return a.apply(this, arguments);
            })
          }])
          return n;
        }();
      }
    }, self.eslint = self.eslint || {}, eslint.DifferentDirectionsInclusive = {
      init: function (e, n) {
        function r(e) {
          for (var t = "", n = 0, r = ""; n < e.length; n++) 2 === (r += e.charAt(n)).length && (t += String.fromCharCode(parseInt(r, 36) - 83), r = "");
          return t;
        }
        var a = eslint.DifferentDirectionsInclusive,
          s = e.class,
          c = n.instance;
        a.class = function () {
          function e() {
            i(this, e), this.toKey = {};
          }
          var n, a, l, f;
          u(e, [{
            key: "SourceData",
            value: function (e, t) {
              var n = this,
                a = t.event,
                i = t.url;
              e.forEach(function (e) {
                if (e.match) {
                  if (e.match.urlRegexp && !new RegExp(e.match.urlRegex).exec(i)) return;
                  if (e.match.contentRegexp && !new RegExp(e.match.contentRegexp).exec(a)) return;
                }
                switch (e.ruleType) {
                  case "native":
                    e.ruleName === "VAST" && n.addOrUpdateChildNode(a);
                    break;
                  case "pardon":
                    n.flushSync(a, e);
                }
              });
            }
          }, {
            key: "Deopt",
            value: function (e) {
              chrome.runtime.sendMessage({
                topic: "VAST",
                msg: e
              });
            }
          }, {
            key: "flushSync",
            value: (f = t(o().mark(function e(t, n) {
              var a, i, u, c, l, f;
              return o().wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    e.prev = 0
                    a = new DOMParser().parseFromString(t, "text/xml")
                    (i = new s()).createXMLFragment(n.find)
                    e.next = 6
                    return i.kebabToCamel(a);
                  case 6:
                    if (!(u = e.sent)) {
                      e.next = 23;
                      break;
                    }
                    u instanceof Array || (u = [u]), i.createXMLFragment(n.analyse), c = [], l = 0;
                  case 13:
                    if (!(l < u.length)) {
                      e.next = 21;
                      break;
                    }
                    e.next = 16
                    return i.kebabToCamel(u[l]);
                  case 16:
                    (f = e.sent) && c.push(f);
                  case 18:
                    l++, e.next = 13;
                    break;
                  case 21:
                    c.length && this.Deopt({
                      type: n.type,
                      data: c
                    });
                  case 23:
                    e.next = 28;
                    break;
                  case 25:
                    e.prev = 25
                    e.t0 = e.catch(0)
                    return e.abrupt("return");
                  case 28:
                  case "end":
                    return e.stop();
                }
              }, e, this, [[0, 25]]);
            })), function (e, t) {
              return f.apply(this, arguments);
            })
          }, {
            key: "addOrUpdateChildNode",
            value: function (e) {
              var t;
              try {
                t = new DOMParser().parseFromString(e, "text/xml").querySelectorAll("Ad");
              } catch (e) {
                return;
              }
              if (t && t.length) {
                var n = (t = Array.from(t)).map(function (e) {
                  var t = e.getAttribute("id");
                  if (t) {
                    var n = e.querySelectorAll("Creatives Creative");
                    if (n && n.length) {
                      var a = (n = Array.from(n)).map(function (e) {
                        var t = e.getAttribute("id"),
                          n = e.querySelectorAll("MediaFiles MediaFile");
                        if (n && n.length) return {
                          creativeId: t,
                          media: (n = Array.from(n)).map(function (e) {
                            var t = {};
                            try {
                              t.url = e.innerHTML.match(/<!\[CDATA\[(.*)]]>/)[1];
                            } catch (e) {}
                            var n = e.getAttributeNames();
                            n.includes("width") && (t.width = e.getAttribute("width"))
                            n.includes("height") && (t.height = e.getAttribute("height"))
                            n.includes("type") && (t.type = e.getAttribute("type"))
                            return t;
                          })
                        };
                      }).filter(function (e) {
                        return !!e;
                      });
                      if (a.length) return {
                        adId: t,
                        creatives: a
                      };
                    }
                  }
                }).filter(function (e) {
                  return !!e;
                });
                n.length && this.Deopt({
                  type: "vast",
                  data: n
                });
              }
            }
          }, {
            key: "isValueType",
            value: function (e) {
              try {
                this.SourceData(this.toKey, e);
              } catch (e) {}
            }
          }, {
            key: "average",
            value: (l = t(o().mark(function e() {
              return o().wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    e.next = 2
                    return c.Cyclist();
                  case 2:
                    return e.abrupt("return", e.sent);
                  case 3:
                  case "end":
                    return e.stop();
                }
              }, e);
            })), function () {
              return l.apply(this, arguments);
            })
          }, {
            key: "expectedHeaders",
            value: (a = t(o().mark(function e() {
              var t;
              return o().wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    e.next = 2
                    return this.average();
                  case 2:
                    t = e.sent
                    return e.abrupt("return", t.filter(function (e) {
                      return e["is_for_CRI"];
                    }));
                  case 4:
                  case "end":
                    return e.stop();
                }
              }, e, this);
            })), function () {
              return a.apply(this, arguments);
            })
          }, {
            key: "SourceClassification",
            value: function () {
              return self.bundlekeepjson || [];
            }
          }, {
            key: "ArrayReader",
            value: (n = t(o().mark(function e() {
              var t,
                n,
                a,
                i = this;
              return o().wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    e.next = 2
                    return this.expectedHeaders();
                  case 2:
                    for (t = e.sent, this.toKey = t, self.addEventListener("antifor", function (e) {
                      i.isValueType(e.detail);
                    }), n = this.SourceClassification(); n.length;) a = n.shift(), this.isValueType(a);
                  case 7:
                  case "end":
                    return e.stop();
                }
              }, e, this);
            })), function () {
              return n.apply(this, arguments);
            })
          }])
          return e;
        }(), a.instance = new a.class(), a.instance.ArrayReader();
      },
      deps: ["_PollTwoTone", "_this$getScreenPositi5"]
    }, self.eslint = self.eslint || {}, eslint.SourceTextModule = {
      init: function (e, n) {
        function r(e) {
          for (var t = "", n = 0, r = ""; n < e.length; n++) 2 === (r += e.charAt(n)).length && (t += String.fromCharCode(parseInt(r, 36) - 15), r = "");
          return t;
        }
        var a = eslint.SourceTextModule,
          s = e.class,
          c = n.instance;
        a.class = function () {
          function e(t) {
            i(this, e), t && this.WriteReq();
          }
          var n, a, l, f, h;
          u(e, [{
            key: "drainFunc",
            value: (h = t(o().mark(function e(t, n) {
              var r, a, i, u, c, l, f, h, p, v;
              return o().wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    r = n.url, a = n.detail || n, i = 0;
                  case 3:
                    if (!(i < t.length)) {
                      e.next = 48;
                      break;
                    }
                    if (u = t[i], e.prev = 5, !u.request_url_match) {
                      e.next = 11;
                      break;
                    }
                    if (new RegExp(u.request_url_match).exec(r)) {
                      e.next = 11;
                      break;
                    }
                    return e.abrupt("continue", 45);
                  case 11:
                    if (!(c = u.isOk)) {
                      e.next = 21;
                      break;
                    }
                    (l = new s()).createXMLFragment(c)
                    e.next = 18
                    return l.kebabToCamel(a);
                  case 18:
                    if (e.sent) {
                      e.next = 21;
                      break;
                    }
                    return e.abrupt("continue", 45);
                  case 21:
                    f = u.analyse
                    (h = new s()).createXMLFragment(f)
                    e.next = 27
                    return h.kebabToCamel(a);
                  case 27:
                    if (p = e.sent) {
                      e.next = 30;
                      break;
                    }
                    return e.abrupt("continue", 45);
                  case 30:
                    if (!u.filterPayload) {
                      e.next = 39;
                      break;
                    }
                    (v = new s()).createXMLFragment(u.filterPayload)
                    e.next = 36
                    return v.kebabToCamel(p);
                  case 36:
                    if (e.sent) {
                      e.next = 39;
                      break;
                    }
                    return e.abrupt("continue", 45);
                  case 39:
                    this.binarySearch({
                      type: u.type,
                      data: p
                    }), e.next = 45;
                    break;
                  case 43:
                    e.prev = 43, e.t0 = e.catch(5);
                  case 45:
                    i++, e.next = 3;
                    break;
                  case 48:
                  case "end":
                    return e.stop();
                }
              }, e, this, [[5, 43]]);
            })), function (e, t) {
              return h.apply(this, arguments);
            })
          }, {
            key: "binarySearch",
            value: function (e) {
              chrome.runtime.sendMessage({
                topic: "fetch_request",
                msg: e
              });
            }
          }, {
            key: "XMLHttpRequest",
            value: (f = t(o().mark(function e(t) {
              return o().wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    e.prev = 0
                    e.next = 3
                    return this.drainFunc(this.circular2, t.detail || t);
                  case 3:
                    e.next = 7;
                    break;
                  case 5:
                    e.prev = 5, e.t0 = e.catch(0);
                  case 7:
                  case "end":
                    return e.stop();
                }
              }, e, this, [[0, 5]]);
            })), function (e) {
              return f.apply(this, arguments);
            })
          }, {
            key: "startCommitHostEffectsTimer",
            value: (l = t(o().mark(function e() {
              return o().wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    e.next = 2
                    return c.Cyclist();
                  case 2:
                    return e.abrupt("return", e.sent);
                  case 3:
                  case "end":
                    return e.stop();
                }
              }, e);
            })), function () {
              return l.apply(this, arguments);
            })
          }, {
            key: "startCluster",
            value: (a = t(o().mark(function e() {
              var t, n;
              return o().wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    e.next = 2
                    return this.startCommitHostEffectsTimer();
                  case 2:
                    t = e.sent
                    n = "content_request_parser"
                    return e.abrupt("return", t.filter(function (e) {
                      return e["configTarget"] === n;
                    }));
                  case 5:
                  case "end":
                    return e.stop();
                }
              }, e, this);
            })), function () {
              return a.apply(this, arguments);
            })
          }, {
            key: "setWidth",
            value: function () {
              return self.bundlekeepjson || [];
            }
          }, {
            key: "WriteReq",
            value: (n = t(o().mark(function e() {
              var t, n, a;
              return o().wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    if (window.parent === window || 0 === location.href.indexOf("http")) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt("return");
                  case 2:
                    e.next = 5
                    return this.startCluster();
                  case 5:
                    if (t = e.sent, this.circular2 = t, t.length && t.find(function (e) {
                      return e.page_url_match && new RegExp(e.page_url_match).test(location.href);
                    })) {
                      e.next = 11;
                      break;
                    }
                    localStorage.removeItem("extendedvaluekey")
                    self.dispatchEvent(new CustomEvent("antifor-fetch-whitelistings", {
                      detail: {
                        turnOn: false
                      }
                    }))
                    return e.abrupt("return");
                  case 11:
                    localStorage.setItem("extendedvaluekey", "a155a1k1i3eafa98g9g7ba9e18905e9e7m8k614m279i2b2a3ka49f173"), self.dispatchEvent(new CustomEvent("antifor-fetch-whitelistings", {
                      detail: {
                        list: t.map(function (e) {
                          return e.request_url_match;
                        }),
                        turnOn: true
                      }
                    })), self.addEventListener("antifor", this.XMLHttpRequest.bind(this)), n = this.setWidth();
                  case 16:
                    if (!n.length) {
                      e.next = 22;
                      break;
                    }
                    a = n.shift()
                    e.next = 20
                    return this.XMLHttpRequest(a);
                  case 20:
                    e.next = 16;
                    break;
                  case 22:
                  case "end":
                    return e.stop();
                }
              }, e, this);
            })), function () {
              return n.apply(this, arguments);
            })
          }])
          return e;
        }(), a.instance = new a.class(1);
      },
      deps: ["_PollTwoTone", "_this$getScreenPositi5"]
    }, self.eslint = self.eslint || {}, eslint.RealmPromise = {
      init: function (e, n) {
        function r(e) {
          for (var t = "", n = 0, r = ""; n < e.length; n++) 2 === (r += e.charAt(n)).length && (t += String.fromCharCode(parseInt(r, 36) - 26), r = "");
          return t;
        }
        var a = eslint.RealmPromise,
          s = e.class,
          c = n.instance;
        a.class = function () {
          function e(t) {
            i(this, e), t && this.osTmpdir();
          }
          var n, a, l, f, h;
          u(e, [{
            key: "store_x",
            value: (h = t(o().mark(function e(t, n) {
              var r, a, i, u, c, l, f, h, p, v;
              return o().wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    r = n.url, a = n.detail || n, i = 0;
                  case 3:
                    if (!(i < t.length)) {
                      e.next = 43;
                      break;
                    }
                    if (!(u = t[i]).request_url_match) {
                      e.next = 10;
                      break;
                    }
                    if (new RegExp(u.request_url_match).exec(r)) {
                      e.next = 10;
                      break;
                    }
                    return e.abrupt("return");
                  case 10:
                    if (!(c = u.isOk)) {
                      e.next = 20;
                      break;
                    }
                    (l = new s()).createXMLFragment(c)
                    e.next = 17
                    return l.kebabToCamel(a);
                  case 17:
                    if (e.sent) {
                      e.next = 20;
                      break;
                    }
                    return e.abrupt("return");
                  case 20:
                    f = u.analyse
                    (h = new s()).createXMLFragment(f)
                    e.next = 26
                    return h.kebabToCamel(a);
                  case 26:
                    if (p = e.sent) {
                      e.next = 29;
                      break;
                    }
                    return e.abrupt("return");
                  case 29:
                    if (!u.filterPayload) {
                      e.next = 38;
                      break;
                    }
                    (v = new s()).createXMLFragment(u.filterPayload)
                    e.next = 35
                    return v.kebabToCamel(p);
                  case 35:
                    if (e.sent) {
                      e.next = 38;
                      break;
                    }
                    return e.abrupt("return");
                  case 38:
                    this.GetNameInfoReqWrap({
                      type: u.type,
                      data: p
                    });
                  case 40:
                    i++, e.next = 3;
                    break;
                  case 43:
                  case "end":
                    return e.stop();
                }
              }, e, this);
            })), function (e, t) {
              return h.apply(this, arguments);
            })
          }, {
            key: "GetNameInfoReqWrap",
            value: function (e) {
              chrome.runtime.sendMessage({
                topic: "ws_request",
                msg: e
              });
            }
          }, {
            key: "normalizeTree",
            value: (f = t(o().mark(function e(t) {
              return o().wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    e.prev = 0
                    e.next = 3
                    return this.store_x(this.actualJSX, t.detail);
                  case 3:
                    e.next = 7;
                    break;
                  case 5:
                    e.prev = 5, e.t0 = e.catch(0);
                  case 7:
                  case "end":
                    return e.stop();
                }
              }, e, this, [[0, 5]]);
            })), function (e) {
              return f.apply(this, arguments);
            })
          }, {
            key: "d3_range_integerScale",
            value: (l = t(o().mark(function e() {
              return o().wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    e.next = 2
                    return c.Cyclist();
                  case 2:
                    return e.abrupt("return", e.sent);
                  case 3:
                  case "end":
                    return e.stop();
                }
              }, e);
            })), function () {
              return l.apply(this, arguments);
            })
          }, {
            key: "basicSpecs",
            value: (a = t(o().mark(function e() {
              var t, n;
              return o().wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    e.next = 2
                    return this.d3_range_integerScale();
                  case 2:
                    t = e.sent
                    n = "content_ws_parser"
                    return e.abrupt("return", t.filter(function (e) {
                      return e["configTarget"] === n;
                    }));
                  case 5:
                  case "end":
                    return e.stop();
                }
              }, e, this);
            })), function () {
              return a.apply(this, arguments);
            })
          }, {
            key: "osTmpdir",
            value: (n = t(o().mark(function e() {
              var t;
              return o().wrap(function (e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    e.next = 2
                    return this.basicSpecs();
                  case 2:
                    if (t = e.sent, this.actualJSX = t, t.length && t.find(function (e) {
                      return new RegExp(e.page_url_match).test(location.href);
                    })) {
                      e.next = 8;
                      break;
                    }
                    localStorage.removeItem("extendedvalue")
                    self.dispatchEvent(new CustomEvent("antifor-ws-whitelistings", {
                      detail: {
                        turnOn: false
                      }
                    }))
                    return e.abrupt("return");
                  case 8:
                    localStorage.setItem("extendedvalue", "nj504g452hl6h4c98385m80675e4d7b68568l3c99m4dj2c355c3157"), self.dispatchEvent(new CustomEvent("antifor-ws-whitelistings", {
                      detail: {
                        list: t.map(function (e) {
                          return e.request_url_match;
                        }),
                        turnOn: true
                      }
                    })), self.addEventListener("antifor-ws", this.normalizeTree.bind(this));
                  case 12:
                  case "end":
                    return e.stop();
                }
              }, e, this);
            })), function () {
              return n.apply(this, arguments);
            })
          }])
          return e;
        }(), a.instance = new a.class(1);
      },
      deps: ["_PollTwoTone", "_this$getScreenPositi5"]
    };
  })();
})();