'use strict'
var ba = {},
  k = function (a) {
    function b (c) {
      return a.next(c)
    }
    function e (c) {
      return a.throw(c)
    }
    return new Promise(function (c, d) {
      function g (f) {
        f.done ? c(f.value) : Promise.resolve(f.value).then(b, e).then(g, d)
      }
      g(a.next())
    })
  } /*

 Copyright 2020 Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
function q (a) {
  const b = []
  let e = 0
  for (let c = 0; c < a.length; c++) {
    const d = a.charCodeAt(c)
    b[e++] = d
  }
  new Uint8Array(b)
} /*

 Copyright 2022 Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
v(1, 0)
v(2, 16)
v(2, 18)
v(2, 1)
v(2, 3)
v(2, 1)
v(2, 2)
q('KEM')
q('HPKE')
q('HPKE-v1')
function v (a, b) {
  const e = new Uint8Array(a)
  for (let c = 0; c < a; c++) e[c] = (b >> (8 * (a - c - 1))) & 255
}
const w = /^[0-9A-Fa-f]{64}$/
function x (a) {
  try {
    return new TextEncoder().encode(a)
  } catch (b) {
    const e = []
    for (let c = 0; c < a.length; c++) {
      let d = a.charCodeAt(c)
      d < 128
        ? e.push(d)
        : d < 2048
        ? e.push(192 | (d >> 6), 128 | (d & 63))
        : d < 55296 || d >= 57344
        ? e.push(224 | (d >> 12), 128 | ((d >> 6) & 63), 128 | (d & 63))
        : ((d = 65536 + (((d & 1023) << 10) | (a.charCodeAt(++c) & 1023))),
          e.push(
            240 | (d >> 18),
            128 | ((d >> 12) & 63),
            128 | ((d >> 6) & 63),
            128 | (d & 63)
          ))
    }
    return new Uint8Array(e)
  }
}
function D (a, b) {
  if (a === '' || a === 'e0') return Promise.resolve(a)
  let e
  if ((e = b.crypto) == null ? 0 : e.subtle) {
    if (w.test(a)) return Promise.resolve(a)
    try {
      const c = x(a)
      return b.crypto.subtle
        .digest('SHA-256', c)
        .then(d => F(d, b))
        .catch(() => 'e2')
    } catch (c) {
      return Promise.resolve('e2')
    }
  } else return Promise.resolve('e1')
}
function F (a, b) {
  const e = Array.from(new Uint8Array(a))
    .map(c => String.fromCharCode(c))
    .join('')
  return b.btoa(e).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
} /*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license.
*/
var G = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
  K = function (a) {
    var b
    if (!(b = !a)) {
      var e
      if (a == null) e = String(a)
      else {
        var c = G.exec(Object.prototype.toString.call(Object(a)))
        e = c ? c[1].toLowerCase() : 'object'
      }
      b = e != 'object'
    }
    if (b || a.nodeType || a == a.window) return !1
    try {
      if (
        a.constructor &&
        !Object.prototype.hasOwnProperty.call(Object(a), 'constructor') &&
        !Object.prototype.hasOwnProperty.call(
          Object(a.constructor.prototype),
          'isPrototypeOf'
        )
      )
        return !1
    } catch (g) {
      return !1
    }
    for (var d in a);
    return d === void 0 || Object.prototype.hasOwnProperty.call(Object(a), d)
  }
var L = function (a, b) {
    a.h = b
    return a
  },
  N = function (a, b) {
    b &&
      (M(b.send_pixel, b.options, a.i),
      M(b.create_iframe, b.options, a.j),
      M(b.fetch, b.options, a.h))
  },
  O = function (a, b) {
    b = a.g + b
    let e = b.indexOf('\n\n')
    for (; e !== -1; ) {
      var c = a,
        d
      a: {
        const [g, f] = b.substring(0, e).split('\n')
        if (g.indexOf('event: message') === 0 && f.indexOf('data: ') === 0)
          try {
            d = JSON.parse(f.substring(f.indexOf(':') + 1))
            break a
          } catch (E) {}
        d = void 0
      }
      N(c, d)
      b = b.substring(e + 2)
      e = b.indexOf('\n\n')
    }
    a.g = b
  },
  P = function (a, b) {
    return () => {
      b.fallback_url &&
        b.fallback_url_method &&
        N(a, { [b.fallback_url_method]: [b.fallback_url], options: {} })
    }
  },
  Q = class {
    constructor (a) {
      this.i = a
      this.g = ''
    }
  }
function M (a, b, e) {
  if (a && e) {
    var c = a || []
    if (Array.isArray(c)) {
      var d = K(b) ? b : {}
      for (const g of c) e(g, d)
    }
  }
}
var R = { m: 0, o: 1, 0: 'GET', 1: 'POST' }
var U = function (a, b, e) {
    return k(
      (function* () {
        if (!b.url) return { failureType: 9, command: 0, data: 'url required.' }
        const c = yield S(a, b, e)
        if ('failureType' in c) return c
        yield T(a, c, b)
        return c
      })()
    )
  },
  V = function (a, b, e, c) {
    k(
      (function* () {
        let d
        const g = b.commandType,
          f = b.params
        switch (g) {
          case 0:
            d = yield U(a, f)
            break
          default:
            d = {
              failureType: 8,
              command: g,
              data: `Command with type ${g} unknown.`
            }
        }
        'failureType' in d ? c(d) : f.suppressSuccessCallback || e(d)
      })()
    )
  },
  S = function (a, b, e) {
    return k(
      (function* () {
        function c (h) {
          return k(
            (function* () {
              const [l, m] = h.split('|')
              let [y, t] = l.split('.'),
                n = t,
                p = Y[y]
              p || ((p = l), (n = ''))
              const A = u =>
                k(
                  (function* () {
                    try {
                      return yield Z(m)(u)
                    } catch (z) {
                      throw new W(z.message)
                    }
                  })()
                )
              if (!n) {
                if (typeof p === 'string') return yield A(p)
                const u = p,
                  z = Object.keys(u).map(H =>
                    k(
                      (function* () {
                        const aa = yield A(u[H])
                        return `${H}=${aa}`
                      })()
                    )
                  )
                return (yield Promise.all(z)).join('&')
              }
              return typeof p === 'object' && p[n] ? yield A(p[n]) : h
            })()
          )
        }
        function d (h) {
          return k(
            (function* () {
              let l,
                m = ''
              for (; h.match(B) && m !== h; ) {
                m = h
                l = h.matchAll(B)
                const y = [...l].map(n => c(n[1])),
                  t = yield Promise.all(y)
                t.length !== 0 && (h = h.replace(B, n => t.shift() || n))
              }
              return h
            })()
          )
        }
        let { url: g, body: f } = b
        const {
            attributionReporting: E,
            templates: Y,
            processResponse: I,
            method: J = 0,
            referer: C
          } = b,
          B = RegExp('\\${([^${}]*?)}', 'g'),
          Z = h => {
            if (h == null)
              return m =>
                k(
                  (function* () {
                    return m
                  })()
                )
            const l = a.h[h]
            if (l == null) throw Error(`Unknown filter: ${h}`)
            return m =>
              k(
                (function* () {
                  return yield l(m, b)
                })()
              )
          }
        try {
          ;(g = yield d(g)), (f = f ? yield d(f) : void 0)
        } catch (h) {
          return (
            e == null || e(),
            {
              failureType: 9,
              command: 0,
              data: `Failed to inject template values: ${h}`
            }
          )
        }
        const r = {
          method: R[J],
          credentials: 'include',
          body: J === 1 ? f : void 0,
          keepalive: !0,
          redirect: 'follow'
        }
        if (C)
          try {
            r.headers = {
              'X-Effective-Origin': new URL(C).origin,
              'X-Effective-Referer': C
            }
          } catch (h) {}
        I || (r.mode = 'no-cors')
        E &&
          (r.attributionReporting = {
            eventSourceEligible: !1,
            triggerEligible: !0
          })
        try {
          const h = yield a.g.fetch(g, r)
          return r.mode === 'no-cors' || h.ok
            ? { data: I ? yield h.text() : g }
            : (e == null || e(),
              { failureType: 9, command: 0, data: 'Fetch failed' })
        } catch (h) {
          return (
            e == null || e(),
            { failureType: 9, command: 0, data: `Fetch failed: ${h}` }
          )
        }
      })()
    )
  },
  T = function (a, b, e) {
    return k(
      (function* () {
        if (e.processResponse) {
          var c = [],
            d
          d = L(
            new Q((g, f) => {
              c.push(
                U(
                  a,
                  {
                    url: g,
                    method: 0,
                    templates: e.templates,
                    processResponse: !1,
                    attributionReporting: f.attribution_reporting
                  },
                  P(d, f)
                )
              )
            }),
            (g, f) => {
              c.push(
                U(
                  a,
                  {
                    url: g,
                    method: 0,
                    templates: e.templates,
                    processResponse: f.process_response || !1,
                    attributionReporting: f.attribution_reporting
                  },
                  P(d, f)
                )
              )
            }
          )
          O(d, b.data)
          return Promise.all(c)
        }
      })()
    )
  },
  ca = class {
    constructor (a) {
      this.g = a
      this.h = {
        sha256: b => {
          const e = this
          return k(
            (function* () {
              return yield D(b, e.g)
            })()
          )
        },
        encode: b =>
          k(
            (function* () {
              return encodeURIComponent(b)
            })()
          ),
        encrypt: () =>
          k(
            (function* () {
              throw new W('Encryption not supported.')
            })()
          )
      }
    }
  }
class W extends Error {
  constructor (a) {
    super(a)
  }
}
var da = function (a, b, e) {
  a.g[b] == null && ((a.g[b] = 0), (a.h[b] = e), a.i++)
  a.g[b]++
  return {
    targetId: a.id,
    clientCount: a.i,
    totalLifeMs: Math.round(e - a.j),
    heartbeatCount: a.g[b],
    clientLifeMs: Math.round(e - a.h[b])
  }
}
class ea {
  constructor (a) {
    this.j = a
    this.g = {}
    this.h = {}
    this.i = 0
    this.id = String(Math.floor(Number.MAX_SAFE_INTEGER * Math.random()))
  }
}
function X (a) {
  return (a.performance && a.performance.now()) || Date.now()
}
var fa = function (a, b) {
  class e {
    constructor (c, d) {
      this.h = c
      this.g = d
      this.i = new ea(X(d))
    }
    l (c, d) {
      const g = c.clientId
      if (c.type === 0) (c.stats = da(this.i, g, X(this.g))), d(c)
      else if (c.type === 1)
        try {
          this.h(
            c.command,
            f => {
              c.result = f
              d(c)
            },
            f => {
              c.failure = f
              d(c)
            }
          )
        } catch (f) {
          ;(c.failure = { failureType: 11, data: f.toString() }), d(c)
        }
    }
  }
  return new e(a, b)
}
new (class {
  constructor (a) {
    this.g = a
    const b = new ca(a)
    this.h = fa((e, c, d) => {
      V(b, e, c, d)
    }, a)
  }
  init () {
    this.g.addEventListener('install', () => {
      this.g.skipWaiting()
    })
    this.g.addEventListener('activate', a => {
      a.waitUntil(this.g.clients.claim())
    })
    this.g.addEventListener('message', a => {
      const b = a.source
      if (b) {
        var e = a.data,
          c = new Promise(d => {
            this.h.l(e, g => {
              b.postMessage(g)
              d(void 0)
            })
          })
        a.waitUntil(c)
      }
    })
  }
})(self).init()
