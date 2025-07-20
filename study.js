 function browserVersion (e, t, r) {
            var n = {
              'Internet Explorer Mobile': /rv:(\d+(\.\d+)?)/,
              'Microsoft Edge': /Edge?\/(\d+(\.\d+)?)/,
              Chrome: /Chrome\/(\d+(\.\d+)?)/,
              'Chrome iOS': /CriOS\/(\d+(\.\d+)?)/,
              'UC Browser': /(UCBrowser|UCWEB)\/(\d+(\.\d+)?)/,
              Safari: /Version\/(\d+(\.\d+)?)/,
              'Mobile Safari': /Version\/(\d+(\.\d+)?)/,
              Opera: /(Opera|OPR)\/(\d+(\.\d+)?)/,
              Firefox: /Firefox\/(\d+(\.\d+)?)/,
              'Firefox iOS': /FxiOS\/(\d+(\.\d+)?)/,
              Konqueror: /Konqueror:(\d+(\.\d+)?)/,
              BlackBerry: /BlackBerry (\d+(\.\d+)?)/,
              'Android Mobile': /android\s(\d+(\.\d+)?)/,
              'Samsung Internet': /SamsungBrowser\/(\d+(\.\d+)?)/,
              'Internet Explorer': /(rv:|MSIE )(\d+(\.\d+)?)/,
              Mozilla: /rv:(\d+(\.\d+)?)/
            }["Microsoft Edge"];
            if (undefined === n) return null;
            var i = e.match(n);
            return i ? parseFloat(i[i.length - 2]) : null;
          }
var b = browserVersion(
'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36 Edg/138.0.0.0', 'Google Inc.', undefined)
var n = {
            hostname: ''
          };
var t = {
            navigator: {
              userAgent: ''
            },
            document: {
              location: n,
              referrer: ''
            },
            screen: {
              width: 0,
              height: 0
            },
            location: n
          };
var i,
          o,
          s,
          a,
          c,
          u,
          l,
          p,
          f,
          h,
          d,
          v = Array.prototype,
          g = Function.prototype,
          y = Object.prototype,
          m = v.slice,
          _ = y.toString,
          b = y.hasOwnProperty,
          k = t.console,
          w = t.navigator,
          x = t.document,
          j = t.opera,
          S = t.screen,
          O = w.userAgent,
          E = g.bind,
          q = v.forEach,
          C = v.indexOf,
          I = v.map,
          P = Array.isArray,
          A = {},
          T = {
            trim: function (e) {
              return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
            }
          },
          L = {
            log: function () {
              if (r.DEBUG && !T.isUndefined(k) && k) try {
                k.log.apply(k, arguments);
              } catch (e) {
                T.each(arguments, function (e) {
                  k.log(e);
                });
              }
            },
            warn: function () {
              if (r.DEBUG && !T.isUndefined(k) && k) {
                var e = ['Mixpanel warning:'].concat(T.toArray(arguments));
                try {
                  k.warn.apply(k, e);
                } catch (t) {
                  T.each(e, function (e) {
                    k.warn(e);
                  });
                }
              }
            },
            error: function () {
              if (r.DEBUG && !T.isUndefined(k) && k) {
                var e = ['Mixpanel error:'].concat(T.toArray(arguments));
                try {
                  k.error.apply(k, e);
                } catch (t) {
                  T.each(e, function (e) {
                    k.error(e);
                  });
                }
              }
            },
            critical: function () {
              if (!T.isUndefined(k) && k) {
                var e = ['Mixpanel error:'].concat(T.toArray(arguments));
                try {
                  k.error.apply(k, e);
                } catch (t) {
                  T.each(e, function (e) {
                    k.error(e);
                  });
                }
              }
            }
          },
          R = function (e, t) {
            return function () {
              arguments[0] = '[' + t + '] ' + arguments[0]
              return e.apply(L, arguments);
            };
          },
          z = function (e) {
            return {
              log: R(L.log, e),
              error: R(L.error, e),
              critical: R(L.critical, e)
            };
          };
        T.bind = function (e, t) {
          var r, n;
          if (E && e.bind === E) return E.apply(e, m.call(arguments, 1));
          if (!T.isFunction(e)) throw new TypeError();
          r = m.call(arguments, 2)
          n = function () {
            if (!(this instanceof n)) return e.apply(t, r.concat(m.call(arguments)));
            var i = {};
            i.prototype = e.prototype;
            var o = new i();
            i.prototype = null;
            var s = e.apply(o, r.concat(m.call(arguments)));
            return Object(s) === s ? s : o;
          }
          return n;
        }, T.each = function (e, t, r) {
          if (null != e) if (q && e.forEach === q) e.forEach(t, r);else if (e.length === +e.length) {
            for (var n = 0, i = e.length; n < i; n++) if (n in e && t.call(r, e[n], n, e) === A) return;
          } else for (var o in e) if (b.call(e, o) && t.call(r, e[o], o, e) === A) return;
        }, T.extend = function (e) {
          T.each(m.call(arguments, 1), function (t) {
            for (var r in t) undefined !== t[r] && (e[r] = t[r]);
          })
          return e;
        }, T.isArray = P || function (e) {
          return '[object Array]' === _.call(e);
        }, T.isFunction = function (e) {
          try {
            return /^\s*\bfunction\b/.test(e);
          } catch (e) {
            return false;
          }
        }, T.isArguments = function (e) {
          return !(!e || !b.call(e, 'callee'));
        }, T.toArray = function (e) {
          return e ? e.toArray ? e.toArray() : T.isArray(e) || T.isArguments(e) ? m.call(e) : T.values(e) : [];
        }, T.map = function (e, t, r) {
          if (I && e.map === I) return e.map(t, r);
          var n = [];
          T.each(e, function (e) {
            n.push(t.call(r, e));
          })
          return n;
        }, T.keys = function (e) {
          var t = [];
          null === e || T.each(e, function (e, r) {
            t[t.length] = r;
          })
          return t;
        }, T.values = function (e) {
          var t = [];
          null === e || T.each(e, function (e) {
            t[t.length] = e;
          })
          return t;
        }, T.include = function (e, t) {
          var r = false;
          return null === e ? r : C && e.indexOf === C ? -1 != e.indexOf(t) : (T.each(e, function (e) {
            if (r || (r = e === t)) return A;
          }), r);
        }, T.includes = function (e, t) {
          return -1 !== e.indexOf(t);
        }, T.inherit = function (e, t) {
          e.prototype = new t()
          e.prototype.constructor = e
          e.superclass = t.prototype
          return e;
        }, T.isObject = function (e) {
          return e === Object(e) && !T.isArray(e);
        }, T.isEmptyObject = function (e) {
          if (T.isObject(e)) {
            for (var t in e) if (b.call(e, t)) return false;
            return true;
          }
          return false;
        }, T.isUndefined = function (e) {
          return undefined === e;
        }, T.isString = function (e) {
          return '[object String]' == _.call(e);
        }, T.isDate = function (e) {
          return '[object Date]' == _.call(e);
        }, T.isNumber = function (e) {
          return '[object Number]' == _.call(e);
        }, T.isElement = function (e) {
          return !(!e || 1 !== e.nodeType);
        }, T.encodeDates = function (e) {
          T.each(e, function (t, r) {
            T.isDate(t) ? e[r] = T.formatDate(t) : T.isObject(t) && (e[r] = T.encodeDates(t));
          })
          return e;
        }, T.timestamp = function () {
          Date.now = Date.now || function () {
            return +new Date();
          }
          return Date.now();
        }, T.formatDate = function (e) {
          function t(e) {
            return e < 10 ? '0' + e : e;
          }
          return e.getUTCFullYear() + '-' + t(e.getUTCMonth() + 1) + '-' + t(e.getUTCDate()) + 'T' + t(e.getUTCHours()) + ':' + t(e.getUTCMinutes()) + ':' + t(e.getUTCSeconds());
        }, T.strip_empty_properties = function (e) {
          var t = {};
          T.each(e, function (e, r) {
            T.isString(e) && e.length > 0 && (t[r] = e);
          })
          return t;
        }, T.truncate = function (e, t) {
          var r;
          'string' == typeof e ? r = e.slice(0, t) : T.isArray(e) ? (r = [], T.each(e, function (e) {
            r.push(T.truncate(e, t));
          })) : T.isObject(e) ? (r = {}, T.each(e, function (e, n) {
            r[n] = T.truncate(e, t);
          })) : r = e
          return r;
        }, T.JSONEncode = function (e) {
          var t = function (e) {
              var t = /[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                r = {
                  '\b': '\\b',
                  '\t': '\\t',
                  '\n': '\\n',
                  '\f': '\\f',
                  '\r': '\\r',
                  '"': '\\"',
                  '\\': '\\\\'
                };
              t.lastIndex = 0
              return t.test(e) ? '"' + e.replace(t, function (e) {
                var t = r[e];
                return 'string' == typeof t ? t : '\\u' + ('0000' + e.charCodeAt(0).toString(16)).slice(-4);
              }) + '"' : '"' + e + '"';
            },
            r = function (e, n) {
              var i = '',
                o = 0,
                s = '',
                a = '',
                c = 0,
                u = i,
                l = [],
                p = n[e];
              switch (p && 'object' == typeof p && 'function' == typeof p.toJSON && (p = p.toJSON(e)), typeof p) {
                case 'string':
                  return t(p);
                case 'number':
                  return isFinite(p) ? String(p) : 'null';
                case 'boolean':
                case 'null':
                  return String(p);
                case 'object':
                  if (!p) return 'null';
                  if (i += '    ', l = [], '[object Array]' === _.apply(p)) {
                    for (c = p.length, o = 0; o < c; o += 1) l[o] = r(o, p) || 'null';
                    a = 0 === l.length ? '[]' : i ? '[\n' + i + l.join(',\n' + i) + '\n' + u + ']' : '[' + l.join(',') + ']'
                    i = u
                    return a;
                  }
                  for (s in p) b.call(p, s) && (a = r(s, p)) && l.push(t(s) + (i ? ': ' : ':') + a);
                  a = 0 === l.length ? '{}' : i ? '{' + l.join(',') + u + '}' : '{' + l.join(',') + '}'
                  i = u
                  return a;
              }
            };
          return r('', {
            '': e
          });
        }, T.JSONDecode = (c = {
          '"': '"',
          '\\': '\\',
          '/': '/',
          b: '\b',
          f: '\f',
          n: '\n',
          r: '\r',
          t: '\t'
        }, u = function (e) {
          var t = new SyntaxError(e);
          throw t.at = i, t.text = s, t;
        }, l = function (e) {
          e && e !== o && u("Expected '" + e + "' instead of '" + o + "'")
          o = s.charAt(i)
          i += 1
          return o;
        }, p = function () {
          var e,
            t = '';
          for ('-' === o && (t = '-', l('-')); o >= '0' && o <= '9';) t += o, l();
          if ('.' === o) for (t += '.'; l() && o >= '0' && o <= '9';) t += o;
          if ('e' === o || 'E' === o) for (t += o, l(), '-' !== o && '+' !== o || (t += o, l()); o >= '0' && o <= '9';) t += o, l();
          if (e = +t, isFinite(e)) return e;
          u('Bad number');
        }, f = function () {
          var e,
            t,
            r,
            n = '';
          if ('"' === o) for (; l();) {
            if ('"' === o) return n;
            if ('\\' === o) {
              if (l(), 'u' === o) {
                for (r = 0, t = 0; t < 4 && (e = parseInt(l(), 16), isFinite(e)); t += 1) r = 16 * r + e;
                n += String.fromCharCode(r);
              } else {
                if ('string' != typeof c[o]) break;
                n += c[o];
              }
            } else n += o;
          }
          u('Bad string');
        }, h = function () {
          for (; o && o <= ' ';) l();
        }, a = function () {
          switch (h(), o) {
            case '{':
              return function () {
                var e,
                  t = {};
                if ('{' === o) {
                  if (l('{'), h(), '}' === o) return t;
                  for (; o;) {
                    if (e = f(), h(), l(':'), Object.hasOwnProperty.call(t, e) && u('Duplicate key "' + e + '"'), t[e] = a(), h(), '}' === o) return t;
                    l(','), h();
                  }
                }
                u('Bad object');
              }();
            case '[':
              return function () {
                var e = [];
                if ('[' === o) {
                  if (l('['), h(), ']' === o) return e;
                  for (; o;) {
                    if (e.push(a()), h(), ']' === o) return e;
                    l(','), h();
                  }
                }
                u('Bad array');
              }();
            case '"':
              return f();
            case '-':
              return p();
            default:
              return o >= '0' && o <= '9' ? p() : function () {
                switch (o) {
                  case 't':
                    l('t')
                    l('r')
                    l('u')
                    l('e')
                    return true;
                  case 'f':
                    l('f')
                    l('a')
                    l('l')
                    l('s')
                    l('e')
                    return false;
                  case 'n':
                    l('n')
                    l('u')
                    l('l')
                    l('l')
                    return null;
                }
                u('Unexpected "' + o + '"');
              }();
          }
        }, function (e) {
          var t;
          s = e
          i = 0
          o = ' '
          t = a()
          h()
          o && u('Syntax error')
          return t;
        }), T.base64Encode = function (e) {
          var t,
            r,
            n,
            i,
            o,
            s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
            a = 0,
            c = 0,
            u = '',
            l = [];
          if (!e) return e;
          e = T.utf8Encode(e);
          do {
            ;
            t = (o = e.charCodeAt(a++) << 16 | e.charCodeAt(a++) << 8 | e.charCodeAt(a++)) >> 18 & 63, r = o >> 12 & 63, n = o >> 6 & 63, i = 63 & o, l[c++] = s.charAt(t) + s.charAt(r) + s.charAt(n) + s.charAt(i);
          } while (a < e.length);
          switch (u = l.join(''), e.length % 3) {
            case 1:
              u = u.slice(0, -2) + '==';
              break;
            case 2:
              u = u.slice(0, -1) + '=';
          }
          return u;
        }, T.utf8Encode = function (e) {
          var t,
            r,
            n,
            i,
            o = '';
          for (t = r = 0, n = (e = (e + '').replace(/\r\n/g, '\n').replace(/\r/g, '\n')).length, i = 0; i < n; i++) {
            var s = e.charCodeAt(i),
              a = null;
            s < 128 ? r++ : a = s > 127 && s < 2048 ? String.fromCharCode(s >> 6 | 192, 63 & s | 128) : String.fromCharCode(s >> 12 | 224, s >> 6 & 63 | 128, 63 & s | 128), null !== a && (r > t && (o += e.substring(t, r)), o += a, t = r = i + 1);
          }
          r > t && (o += e.substring(t, e.length))
          return o;
        }, T.UUID = (d = function () {
          for (var e = 1 * new Date(), t = 0; e == 1 * new Date();) t++;
          return e.toString(16) + t.toString(16);
        }, function () {
          var e = (S.height * S.width).toString(16);
          return d() + '-' + Math.random().toString(16).replace('.', '') + '-' + function () {
            var e,
              t,
              r = O,
              n = [],
              i = 0;
            function o(e, t) {
              var r,
                i = 0;
              for (r = 0; r < t.length; r++) i |= n[r] << 8 * r;
              return e ^ i;
            }
            for (e = 0; e < r.length; e++) t = r.charCodeAt(e), n.unshift(255 & t), n.length >= 4 && (i = o(i, n), n = []);
            n.length > 0 && (i = o(i, n))
            return i.toString(16);
          }() + '-' + e + '-' + d();
        });
        var D = ['ahrefsbot', 'baiduspider', 'bingbot', 'bingpreview', 'facebookexternal', 'petalbot', 'pinterest', 'screaming frog', 'yahoo! slurp', 'yandexbot', 'adsbot-google', 'apis-google', 'duplexweb-google', 'feedfetcher-google', 'google favicon', 'google web preview', 'google-read-aloud', 'googlebot', 'googleweblight', 'mediapartners-google', 'storebot-google'];
        T.isBlockedUA = function (e) {
          var t;
          for (e = e.toLowerCase(), t = 0; t < D.length; t++) if (-1 !== e.indexOf(D[t])) return true;
          return false;
        }, T.HTTPBuildQuery = function (e, t) {
          var r,
            n,
            i = [];
          T.isUndefined(t) && (t = '&')
          T.each(e, function (e, t) {
            ;
            r = encodeURIComponent(e.toString()), n = encodeURIComponent(t), i[i.length] = n + '=' + r;
          })
          return i.join(t);
        }, T.getQueryParam = function (e, t) {
          t = t.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
          var r = new RegExp('[\\?&]' + t + '=([^&#]*)').exec(e);
          if (null === r || r && 'string' != typeof r[1] && r[1].length) return '';
          var n = r[1];
          try {
            n = decodeURIComponent(n);
          } catch (e) {
            L.error('Skipping decoding for malformed query param: ' + n);
          }
          return n.replace(/\+/g, ' ');
        }, T.cookie = {
          get: function (e) {
            for (var t = e + '=', r = x.cookie.split(';'), n = 0; n < r.length; n++) {
              for (var i = r[n]; ' ' == i.charAt(0);) i = i.substring(1, i.length);
              if (0 === i.indexOf(t)) return decodeURIComponent(i.substring(t.length, i.length));
            }
            return null;
          },
          parse: function (e) {
            var t;
            try {
              t = T.JSONDecode(T.cookie.get(e)) || {};
            } catch (e) {}
            return t;
          },
          set_seconds: function (e, t, r, n, i, o, s) {
            var a = '',
              c = '',
              u = '';
            if (s) a = '; domain=' + s;else if (n) {
              var l = G(x.location.hostname);
              a = l ? '; domain=.' + l : '';
            }
            if (r) {
              var p = new Date();
              p.setTime(p.getTime() + 1e3 * r), c = '; expires=' + p.toGMTString();
            }
            o && (i = true, u = '; SameSite=None'), i && (u += '; secure'), x.cookie = e + '=' + encodeURIComponent(t) + c + '; path=/' + a + u;
          },
          set: function (e, t, r, n, i, o, s) {
            var a = '',
              c = '',
              u = '';
            if (s) a = '; domain=' + s;else if (n) {
              var l = G(x.location.hostname);
              a = l ? '; domain=.' + l : '';
            }
            if (r) {
              var p = new Date();
              p.setTime(p.getTime() + 24 * r * 60 * 60 * 1e3), c = '; expires=' + p.toGMTString();
            }
            o && (i = true, u = '; SameSite=None'), i && (u += '; secure');
            var f = e + '=' + encodeURIComponent(t) + c + '; path=/' + a + u;
            x.cookie = f
            return f;
          },
          remove: function (e, t, r) {
            T.cookie.set(e, '', -1, t, false, false, r);
          }
        };
        var F = null,
          M = function (e, t) {
            if (null !== F && !t) return F;
            var r = true;
            try {
              e = e || window.localStorage;
              var n = '__mplss_' + B(8);
              e.setItem(n, 'xyz'), 'xyz' !== e.getItem(n) && (r = false), e.removeItem(n);
            } catch (e) {
              r = false;
            }
            F = r
            return r;
          };
        T.localStorage = {
          is_supported: function (e) {
            var t = M(null, e);
            t || L.error('localStorage unsupported; falling back to cookie store')
            return t;
          },
          error: function (e) {
            L.error('localStorage error: ' + e);
          },
          get: function (e) {
            try {
              return window.localStorage.getItem(e);
            } catch (e) {
              T.localStorage.error(e);
            }
            return null;
          },
          parse: function (e) {
            try {
              return T.JSONDecode(T.localStorage.get(e)) || {};
            } catch (e) {}
            return null;
          },
          set: function (e, t) {
            try {
              window.localStorage.setItem(e, t);
            } catch (e) {
              T.localStorage.error(e);
            }
          },
          remove: function (e) {
            try {
              window.localStorage.removeItem(e);
            } catch (e) {
              T.localStorage.error(e);
            }
          }
        }, T.register_event = function () {
          function e(t) {
            t && (t.preventDefault = e.preventDefault, t.stopPropagation = e.stopPropagation)
            return t;
          }
          e.preventDefault = function () {
            this.returnValue = false;
          }
          e.stopPropagation = function () {
            this.cancelBubble = true;
          }
          return function (t, r, n, i, o) {
            if (t) {
              if (t.addEventListener && !i) t.addEventListener(r, n, !!o);else {
                var s = 'on' + r,
                  a = t[s];
                t[s] = function (t, r, n) {
                  return function (i) {
                    if (i = i || e(window.event)) {
                      var o,
                        s,
                        a = true;
                      T.isFunction(n) && (o = n(i))
                      s = r.call(t, i)
                      false !== o && false !== s || (a = false)
                      return a;
                    }
                  };
                }(t, n, a);
              }
            } else L.error('No valid element provided to register_event');
          };
        }();
        var N = new RegExp('^(\\w*)\\[(\\w+)([=~\\|\\^\\$\\*]?)=?"?([^\\]"]*)"?\\]$');
        T.dom_query = function () {
          function e(e) {
            return e.all ? e.all : e.getElementsByTagName('*');
          }
          var t = /[\t\r\n]/g;
          function r(e, r) {
            var n = ' ' + r + ' ';
            return (' ' + e.className + ' ').replace(t, ' ').indexOf(n) >= 0;
          }
          function n(t) {
            if (!x.getElementsByTagName) return [];
            var n,
              i,
              o,
              s,
              a,
              c,
              u,
              l,
              p,
              f,
              h = t.split(' '),
              d = [x];
            for (c = 0; c < h.length; c++) if ((n = h[c].replace(/^\s+/, '').replace(/\s+$/, '')).indexOf('#') > -1) {
              o = (i = n.split('#'))[0];
              var v = i[1],
                g = x.getElementById(v);
              if (!g || o && g.nodeName.toLowerCase() != o) return [];
              d = [g];
            } else if (n.indexOf('.') > -1) {
              o = (i = n.split('.'))[0];
              var y = i[1];
              for (o || (o = '*'), s = [], a = 0, u = 0; u < d.length; u++) for (p = '*' == o ? e(d[u]) : d[u].getElementsByTagName(o), l = 0; l < p.length; l++) s[a++] = p[l];
              for (d = [], f = 0, u = 0; u < s.length; u++) s[u].className && T.isString(s[u].className) && r(s[u], y) && (d[f++] = s[u]);
            } else {
              var m = n.match(N);
              if (m) {
                o = m[1];
                var _,
                  b = m[2],
                  k = m[3],
                  w = m[4];
                for (o || (o = '*'), s = [], a = 0, u = 0; u < d.length; u++) for (p = '*' == o ? e(d[u]) : d[u].getElementsByTagName(o), l = 0; l < p.length; l++) s[a++] = p[l];
                switch (d = [], f = 0, k) {
                  case '=':
                    _ = function (e) {
                      return e.getAttribute(b) == w;
                    };
                    break;
                  case '~':
                    _ = function (e) {
                      return e.getAttribute(b).match(new RegExp('\\b' + w + '\\b'));
                    };
                    break;
                  case '|':
                    _ = function (e) {
                      return e.getAttribute(b).match(new RegExp('^' + w + '-?'));
                    };
                    break;
                  case '^':
                    _ = function (e) {
                      return 0 === e.getAttribute(b).indexOf(w);
                    };
                    break;
                  case '$':
                    _ = function (e) {
                      return e.getAttribute(b).lastIndexOf(w) == e.getAttribute(b).length - w.length;
                    };
                    break;
                  case '*':
                    _ = function (e) {
                      return e.getAttribute(b).indexOf(w) > -1;
                    };
                    break;
                  default:
                    _ = function (e) {
                      return e.getAttribute(b);
                    };
                }
                for (d = [], f = 0, u = 0; u < s.length; u++) _(s[u]) && (d[f++] = s[u]);
              } else {
                for (o = n, s = [], a = 0, u = 0; u < d.length; u++) for (p = d[u].getElementsByTagName(o), l = 0; l < p.length; l++) s[a++] = p[l];
                d = s;
              }
            }
            return d;
          }
          return function (e) {
            return T.isElement(e) ? [e] : T.isObject(e) && !T.isUndefined(e.length) ? e : n.call(this, e);
          };
        }(), T.info = {
          campaignParams: function () {
            var e = 'utm_source utm_medium utm_campaign utm_content utm_term'.split(' '),
              t = '',
              r = {};
            T.each(e, function (e) {
              ;
              (t = T.getQueryParam(x.URL, e)).length && (r[e] = t);
            })
            return r;
          },
          searchEngine: function (e) {
            return 0 === e.search('https?://(.*)google.([^/?]*)') ? 'google' : 0 === e.search('https?://(.*)bing.com') ? 'bing' : 0 === e.search('https?://(.*)yahoo.com') ? 'yahoo' : 0 === e.search('https?://(.*)duckduckgo.com') ? 'duckduckgo' : null;
          },
          searchInfo: function (e) {
            var t = T.info.searchEngine(e),
              r = 'yahoo' != t ? 'q' : 'p',
              n = {};
            if (null !== t) {
              n.$search_engine = t;
              var i = T.getQueryParam(e, r);
              i.length && (n.mp_keyword = i);
            }
            return n;
          },
          browser: function (e, t, r) {
            t = t || ''
            return r || T.includes(e, ' OPR/') ? T.includes(e, 'Mini') ? 'Opera Mini' : 'Opera' : /(BlackBerry|PlayBook|BB10)/i.test(e) ? 'BlackBerry' : T.includes(e, 'IEMobile') || T.includes(e, 'WPDesktop') ? 'Internet Explorer Mobile' : T.includes(e, 'SamsungBrowser/') ? 'Samsung Internet' : T.includes(e, 'Edge') || T.includes(e, 'Edg/') ? 'Microsoft Edge' : T.includes(e, 'FBIOS') ? 'Facebook Mobile' : T.includes(e, 'Chrome') ? 'Chrome' : T.includes(e, 'CriOS') ? 'Chrome iOS' : T.includes(e, 'UCWEB') || T.includes(e, 'UCBrowser') ? 'UC Browser' : T.includes(e, 'FxiOS') ? 'Firefox iOS' : T.includes(t, 'Apple') ? T.includes(e, 'Mobile') ? 'Mobile Safari' : 'Safari' : T.includes(e, 'Android') ? 'Android Mobile' : T.includes(e, 'Konqueror') ? 'Konqueror' : T.includes(e, 'Firefox') ? 'Firefox' : T.includes(e, 'MSIE') || T.includes(e, 'Trident/') ? 'Internet Explorer' : T.includes(e, 'Gecko') ? 'Mozilla' : '';
          },
          browserVersion: function (e, t, r) {
            var n = {
              'Internet Explorer Mobile': /rv:(\d+(\.\d+)?)/,
              'Microsoft Edge': /Edge?\/(\d+(\.\d+)?)/,
              Chrome: /Chrome\/(\d+(\.\d+)?)/,
              'Chrome iOS': /CriOS\/(\d+(\.\d+)?)/,
              'UC Browser': /(UCBrowser|UCWEB)\/(\d+(\.\d+)?)/,
              Safari: /Version\/(\d+(\.\d+)?)/,
              'Mobile Safari': /Version\/(\d+(\.\d+)?)/,
              Opera: /(Opera|OPR)\/(\d+(\.\d+)?)/,
              Firefox: /Firefox\/(\d+(\.\d+)?)/,
              'Firefox iOS': /FxiOS\/(\d+(\.\d+)?)/,
              Konqueror: /Konqueror:(\d+(\.\d+)?)/,
              BlackBerry: /BlackBerry (\d+(\.\d+)?)/,
              'Android Mobile': /android\s(\d+(\.\d+)?)/,
              'Samsung Internet': /SamsungBrowser\/(\d+(\.\d+)?)/,
              'Internet Explorer': /(rv:|MSIE )(\d+(\.\d+)?)/,
              Mozilla: /rv:(\d+(\.\d+)?)/
            }[T.info.browser(e, t, r)];
            if (undefined === n) return null;
            var i = e.match(n);
            return i ? parseFloat(i[i.length - 2]) : null;
          },
          os: function () {
            var e = O;
            return /Windows/i.test(e) ? /Phone/.test(e) || /WPDesktop/.test(e) ? 'Windows Phone' : 'Windows' : /(iPhone|iPad|iPod)/.test(e) ? 'iOS' : /Android/.test(e) ? 'Android' : /(BlackBerry|PlayBook|BB10)/i.test(e) ? 'BlackBerry' : /Mac/i.test(e) ? 'Mac OS X' : /Linux/.test(e) ? 'Linux' : /CrOS/.test(e) ? 'Chrome OS' : '';
          },
          device: function (e) {
            return /Windows Phone/i.test(e) || /WPDesktop/.test(e) ? 'Windows Phone' : /iPad/.test(e) ? 'iPad' : /iPod/.test(e) ? 'iPod Touch' : /iPhone/.test(e) ? 'iPhone' : /(BlackBerry|PlayBook|BB10)/i.test(e) ? 'BlackBerry' : /Android/.test(e) ? 'Android' : '';
          },
          referringDomain: function (e) {
            var t = e.split('/');
            return t.length >= 3 ? t[2] : '';
          }
        }
const data = {
    "$os": "Windows",
    "$browser": "Microsoft Edge",
    "$referrer": "https://www.iploong.com/",
    "referring_domain": "www.iploong.com/",
    "$device": "",
    "$current_url": "https://www.iploong.com/",
    "$browser_version": 138,
    "$screen_height": 2560,
    "$screen_width": 1440,
    "mp_lib": "web",
    "$lib_version": "2.45.0",
    "$insert_id": "kkm9pjgo8pnsvc2u",
    "time": 1751355343.194
}
const request = {
  event: 'mp_page_view',
  properties: data
}
// console.log(T.truncate(request, 255))
// console.log(T.base64Encode(T.JSONEncode(request)))
var u = "q prev hreferer cr et link",
  l = "sr",
  p = u.split(" ").concat(l),
  h = "app",
  v = p,
  g = p.concat([h, "ht"]),
  y = ["ht"];
  console.log(p, g)