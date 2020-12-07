(function (n) {
  var r = {};
  function i(e) {
    if (r[e]) return r[e].exports;
    var t = (r[e] = { i: e, l: false, exports: {} });
    n[e].call(t.exports, t, t.exports, i);
    t.l = true;
    return t.exports;
  }
  i.m = n;
  i.c = r;
  i.d = function (e, t, n) {
    i.o(e, t) || Object.defineProperty(e, t, { enumerable: true, get: n });
  };
  i.r = function (e) {
    'undefined' !== typeof Symbol &&
      Symbol.toStringTag &&
      Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' });
    Object.defineProperty(e, '__esModule', { value: true });
  };
  i.t = function (t, e) {
    1 & e && (t = i(t));
    if (8 & e) return t;
    if (4 & e && 'object' === typeof t && t && t.__esModule) return t;
    var n = Object.create(null);
    i.r(n);
    Object.defineProperty(n, 'default', { enumerable: true, value: t });
    if (2 & e && 'string' != typeof t)
      for (var r in t)
        i.d(
          n,
          r,
          function (e) {
            return t[e];
          }.bind(null, r)
        );
    return n;
  };
  i.n = function (t) {
    var e =
      t && t.__esModule
        ? function e() {
            return t['default'];
          }
        : function e() {
            return t;
          };
    i.d(e, 'a', e);
    return e;
  };
  i.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  };
  i.p = 'https://assets.squarespace.com/universal/scripts-compressed/';
  return i((i.s = 10465));
})({
  1016: function (e, t) {
    e.exports = function (e) {
      if (!e.webpackPolyfill) {
        var t = Object.create(e);
        t.children || (t.children = []);
        Object.defineProperty(t, 'loaded', {
          enumerable: true,
          get: function () {
            return t.l;
          },
        });
        Object.defineProperty(t, 'id', {
          enumerable: true,
          get: function () {
            return t.i;
          },
        });
        Object.defineProperty(t, 'exports', { enumerable: true });
        t.webpackPolyfill = 1;
      }
      return t;
    };
  },
  10465: function (e, t, n) {
    'use strict';
    var r = n(4);
    var i = r(n(2));
    var o = r(n(3071));
    var c = r(n(651));
    var a = r(n(1612));
    var s = n(321);
    function u(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          }));
        n.push.apply(n, r);
      }
      return n;
    }
    function f(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? u(Object(n), true).forEach(function (e) {
              (0, i.default)(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : u(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    var l = window.Static && window.Static.SQUARESPACE_CONTEXT;
    var d = window.top !== window;
    var p = Object.freeze(
      (0, i.default)({}, a.default.COMMERCE_CART_V2, 'commerce-cart')
    );
    function v() {
      var e = (window.location && window.location.pathname) || '';
      return !d && /^\/config(\/.*)?$/.test(e);
    }
    function h() {
      return {
        inFrame: d,
        templateId: l.templateId || '',
        impersonatedSession: !!l.impersonatedSession,
        pageType: 'number' === typeof l.pageType ? l.pageType : -1,
      };
    }
    function _() {
      var e = l.website,
        t = void 0 === e ? {} : e;
      return {
        authenticUrl: t.authenticUrl || '',
        cloneable: !!t.cloneable,
        developerMode: !!t.developerMode,
        isHstsEnabled: !!t.isHstsEnabled,
        language: t.language || '',
        timeZone: t.timeZone || '',
        websiteId: t.id || '',
        websiteType: t.websiteType || -1,
      };
    }
    function g() {
      var e = l.websiteSettings,
        t = void 0 === e ? {} : e;
      return { ampEnabled: !!t.ampEnabled };
    }
    function y() {
      var e = l.collection,
        t = void 0 === e ? {} : e;
      return { collectionType: t.type || -1 };
    }
    function m() {
      return window.Squarespace && 'SECTION_CONTEXT' in window.Squarespace;
    }
    function b() {
      if (l.hasOwnProperty('templateVersion'))
        return l.templateVersion.replace('.', '_');
      if (m()) return '8';
      return null;
    }
    function w(e) {
      var t = v();
      var n = p[l.pageType];
      var r = {
        appName: n || 'v'.concat(e, '-').concat(t ? 'config' : 'user-sites'),
        context: f({}, h(), {}, _(), {}, g(), {}, y()),
        captureException: function e(t, n) {
          (0, s.withScope)(function (e) {
            e.setTag('project', 'rum-collector');
            void 0 !== n && e.setExtra('extras', n);
            (0, s.captureException)(t);
          });
        },
      };
      if (t) {
        var i = l.website.siteStatus.value === c.default.INTERNAL;
        var o = l.authenticatedAccount,
          a = o.createdOn,
          u = o.id;
        r.context.isInternal = i;
        r.context.createdOn = a;
        r.context.memberId = u;
      }
      return r;
    }
    function E() {
      if ((true, l)) {
        var e = b();
        if (null === e) return;
        var t = w(e);
        (0, o.default)(t);
      }
    }
    E();
  },
  119: function (e, t, n) {
    'use strict';
    n.d(t, 'd', function () {
      return r;
    });
    n.d(t, 'e', function () {
      return i;
    });
    n.d(t, 'a', function () {
      return o;
    });
    n.d(t, 'b', function () {
      return a;
    });
    n.d(t, 'k', function () {
      return u;
    });
    n.d(t, 'i', function () {
      return c;
    });
    n.d(t, 'h', function () {
      return s;
    });
    n.d(t, 'f', function () {
      return f;
    });
    n.d(t, 'c', function () {
      return l;
    });
    n.d(t, 'j', function () {
      return d;
    });
    n.d(t, 'm', function () {
      return p;
    });
    n.d(t, 'l', function () {
      return v;
    });
    n.d(t, 'g', function () {
      return h;
    });
    function r(e) {
      switch (Object.prototype.toString.call(e)) {
        case '[object Error]':
          return true;
        case '[object Exception]':
          return true;
        case '[object DOMException]':
          return true;
        default:
          return h(e, Error);
      }
    }
    function i(e) {
      return '[object ErrorEvent]' === Object.prototype.toString.call(e);
    }
    function o(e) {
      return '[object DOMError]' === Object.prototype.toString.call(e);
    }
    function a(e) {
      return '[object DOMException]' === Object.prototype.toString.call(e);
    }
    function u(e) {
      return '[object String]' === Object.prototype.toString.call(e);
    }
    function c(e) {
      return null === e || ('object' !== typeof e && 'function' !== typeof e);
    }
    function s(e) {
      return '[object Object]' === Object.prototype.toString.call(e);
    }
    function f(e) {
      return 'undefined' !== typeof Event && h(e, Event);
    }
    function l(e) {
      return 'undefined' !== typeof Element && h(e, Element);
    }
    function d(e) {
      return '[object RegExp]' === Object.prototype.toString.call(e);
    }
    function p(e) {
      return Boolean(e && e.then && 'function' === typeof e.then);
    }
    function v(e) {
      return (
        s(e) &&
        'nativeEvent' in e &&
        'preventDefault' in e &&
        'stopPropagation' in e
      );
    }
    function h(e, t) {
      try {
        return e instanceof t;
      } catch (e) {
        return false;
      }
    }
  },
  1270: function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return r;
    });
    var r = (function () {
      function e() {
        this._hasWeakSet = 'function' === typeof WeakSet;
        this._inner = this._hasWeakSet ? new WeakSet() : [];
      }
      e.prototype.memoize = function (e) {
        if (this._hasWeakSet) {
          if (this._inner.has(e)) return true;
          this._inner.add(e);
          return false;
        }
        for (var t = 0; t < this._inner.length; t++) {
          var n = this._inner[t];
          if (n === e) return true;
        }
        this._inner.push(e);
        return false;
      };
      e.prototype.unmemoize = function (e) {
        if (this._hasWeakSet) this._inner.delete(e);
        else
          for (var t = 0; t < this._inner.length; t++)
            if (this._inner[t] === e) {
              this._inner.splice(t, 1);
              break;
            }
      };
      return e;
    })();
  },
  13: function (e, t, n) {
    'use strict';
    n.r(t);
    n.d(t, '__extends', function () {
      return i;
    });
    n.d(t, '__assign', function () {
      return o;
    });
    n.d(t, '__rest', function () {
      return a;
    });
    n.d(t, '__decorate', function () {
      return u;
    });
    n.d(t, '__param', function () {
      return c;
    });
    n.d(t, '__metadata', function () {
      return s;
    });
    n.d(t, '__awaiter', function () {
      return f;
    });
    n.d(t, '__generator', function () {
      return l;
    });
    n.d(t, '__createBinding', function () {
      return d;
    });
    n.d(t, '__exportStar', function () {
      return p;
    });
    n.d(t, '__values', function () {
      return v;
    });
    n.d(t, '__read', function () {
      return h;
    });
    n.d(t, '__spread', function () {
      return _;
    });
    n.d(t, '__spreadArrays', function () {
      return g;
    });
    n.d(t, '__await', function () {
      return y;
    });
    n.d(t, '__asyncGenerator', function () {
      return m;
    });
    n.d(t, '__asyncDelegator', function () {
      return b;
    });
    n.d(t, '__asyncValues', function () {
      return w;
    });
    n.d(t, '__makeTemplateObject', function () {
      return E;
    });
    n.d(t, '__importStar', function () {
      return S;
    });
    n.d(t, '__importDefault', function () {
      return O;
    });
    n.d(t, '__classPrivateFieldGet', function () {
      return T;
    });
    n.d(t, '__classPrivateFieldSet', function () {
      return j;
    });
    var r = function (e, t) {
      r =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (e, t) {
            e.__proto__ = t;
          }) ||
        function (e, t) {
          for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        };
      return r(e, t);
    };
    function i(e, t) {
      r(e, t);
      function n() {
        this.constructor = e;
      }
      e.prototype =
        null === t ? Object.create(t) : ((n.prototype = t.prototype), new n());
    }
    var o = function () {
      o =
        Object.assign ||
        function e(t) {
          for (var n, r = 1, i = arguments.length; r < i; r++) {
            n = arguments[r];
            for (var o in n)
              Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
          }
          return t;
        };
      return o.apply(this, arguments);
    };
    function a(e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          t.indexOf(r) < 0 &&
          (n[r] = e[r]);
      if (null != e && 'function' === typeof Object.getOwnPropertySymbols)
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
            (n[r[i]] = e[r[i]]);
      return n;
    }
    function u(e, t, n, r) {
      var i = arguments.length,
        o =
          i < 3
            ? t
            : null === r
            ? (r = Object.getOwnPropertyDescriptor(t, n))
            : r,
        a;
      if ('object' === typeof Reflect && 'function' === typeof Reflect.decorate)
        o = Reflect.decorate(e, t, n, r);
      else
        for (var u = e.length - 1; u >= 0; u--)
          (a = e[u]) &&
            (o = (i < 3 ? a(o) : i > 3 ? a(t, n, o) : a(t, n)) || o);
      return i > 3 && o && Object.defineProperty(t, n, o), o;
    }
    function c(n, r) {
      return function (e, t) {
        r(e, t, n);
      };
    }
    function s(e, t) {
      if ('object' === typeof Reflect && 'function' === typeof Reflect.metadata)
        return Reflect.metadata(e, t);
    }
    function f(e, a, n, u) {
      function c(t) {
        return t instanceof n
          ? t
          : new n(function (e) {
              e(t);
            });
      }
      return new (n = n || Promise)(function (t, n) {
        function r(e) {
          try {
            o(u.next(e));
          } catch (e) {
            n(e);
          }
        }
        function i(e) {
          try {
            o(u['throw'](e));
          } catch (e) {
            n(e);
          }
        }
        function o(e) {
          e.done ? t(e.value) : c(e.value).then(r, i);
        }
        o((u = u.apply(e, a || [])).next());
      });
    }
    function l(e, n) {
      var r = {
          label: 0,
          sent: function () {
            if (1 & a[0]) throw a[1];
            return a[1];
          },
          trys: [],
          ops: [],
        },
        i,
        o,
        a,
        t;
      return (
        (t = { next: u(0), throw: u(1), return: u(2) }),
        'function' === typeof Symbol &&
          (t[Symbol.iterator] = function () {
            return this;
          }),
        t
      );
      function u(t) {
        return function (e) {
          return c([t, e]);
        };
      }
      function c(t) {
        if (i) throw new TypeError('Generator is already executing.');
        while (r)
          try {
            if (
              ((i = 1),
              o &&
                (a =
                  2 & t[0]
                    ? o['return']
                    : t[0]
                    ? o['throw'] || ((a = o['return']) && a.call(o), 0)
                    : o.next) &&
                !(a = a.call(o, t[1])).done)
            )
              return a;
            ((o = 0), a) && (t = [2 & t[0], a.value]);
            switch (t[0]) {
              case 0:
              case 1:
                a = t;
                break;
              case 4:
                r.label++;
                return { value: t[1], done: false };
              case 5:
                r.label++;
                o = t[1];
                t = [0];
                continue;
              case 7:
                t = r.ops.pop();
                r.trys.pop();
                continue;
              default:
                if (
                  !((a = r.trys), (a = a.length > 0 && a[a.length - 1])) &&
                  (6 === t[0] || 2 === t[0])
                ) {
                  r = 0;
                  continue;
                }
                if (3 === t[0] && (!a || (t[1] > a[0] && t[1] < a[3]))) {
                  r.label = t[1];
                  break;
                }
                if (6 === t[0] && r.label < a[1]) {
                  r.label = a[1];
                  a = t;
                  break;
                }
                if (a && r.label < a[2]) {
                  r.label = a[2];
                  r.ops.push(t);
                  break;
                }
                a[2] && r.ops.pop();
                r.trys.pop();
                continue;
            }
            t = n.call(e, r);
          } catch (e) {
            t = [6, e];
            o = 0;
          } finally {
            i = a = 0;
          }
        if (5 & t[0]) throw t[1];
        return { value: t[0] ? t[1] : void 0, done: true };
      }
    }
    function d(e, t, n, r) {
      void 0 === r && (r = n);
      e[r] = t[n];
    }
    function p(e, t) {
      for (var n in e) 'default' === n || t.hasOwnProperty(n) || (t[n] = e[n]);
    }
    function v(e) {
      var t = 'function' === typeof Symbol && Symbol.iterator,
        n = t && e[t],
        r = 0;
      if (n) return n.call(e);
      if (e && 'number' === typeof e.length)
        return {
          next: function () {
            e && r >= e.length && (e = void 0);
            return { value: e && e[r++], done: !e };
          },
        };
      throw new TypeError(
        t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
      );
    }
    function h(e, t) {
      var n = 'function' === typeof Symbol && e[Symbol.iterator];
      if (!n) return e;
      var r = n.call(e),
        i,
        o = [],
        a;
      try {
        while ((void 0 === t || t-- > 0) && !(i = r.next()).done)
          o.push(i.value);
      } catch (e) {
        a = { error: e };
      } finally {
        try {
          i && !i.done && (n = r['return']) && n.call(r);
        } finally {
          if (a) throw a.error;
        }
      }
      return o;
    }
    function _() {
      for (var e = [], t = 0; t < arguments.length; t++)
        e = e.concat(h(arguments[t]));
      return e;
    }
    function g() {
      for (var e = 0, t = 0, n = arguments.length; t < n; t++)
        e += arguments[t].length;
      for (var r = Array(e), i = 0, t = 0; t < n; t++)
        for (var o = arguments[t], a = 0, u = o.length; a < u; a++, i++)
          r[i] = o[a];
      return r;
    }
    function y(e) {
      return this instanceof y ? ((this.v = e), this) : new y(e);
    }
    function m(e, t, n) {
      if (!Symbol.asyncIterator)
        throw new TypeError('Symbol.asyncIterator is not defined.');
      var i = n.apply(e, t || []),
        o,
        a = [];
      return (
        (o = {}),
        r('next'),
        r('throw'),
        r('return'),
        (o[Symbol.asyncIterator] = function () {
          return this;
        }),
        o
      );
      function r(r) {
        i[r] &&
          (o[r] = function (n) {
            return new Promise(function (e, t) {
              a.push([r, n, e, t]) > 1 || u(r, n);
            });
          });
      }
      function u(e, t) {
        try {
          c(i[e](t));
        } catch (e) {
          l(a[0][3], e);
        }
      }
      function c(e) {
        e.value instanceof y
          ? Promise.resolve(e.value.v).then(s, f)
          : l(a[0][2], e);
      }
      function s(e) {
        u('next', e);
      }
      function f(e) {
        u('throw', e);
      }
      function l(e, t) {
        (e(t), a.shift(), a.length) && u(a[0][0], a[0][1]);
      }
    }
    function b(r) {
      var e, i;
      return (
        (e = {}),
        t('next'),
        t('throw', function (e) {
          throw e;
        }),
        t('return'),
        (e[Symbol.iterator] = function () {
          return this;
        }),
        e
      );
      function t(t, n) {
        e[t] = r[t]
          ? function (e) {
              return (i = !i)
                ? { value: y(r[t](e)), done: 'return' === t }
                : n
                ? n(e)
                : e;
            }
          : n;
      }
    }
    function w(i) {
      if (!Symbol.asyncIterator)
        throw new TypeError('Symbol.asyncIterator is not defined.');
      var e = i[Symbol.asyncIterator],
        t;
      return e
        ? e.call(i)
        : ((i = 'function' === typeof v ? v(i) : i[Symbol.iterator]()),
          (t = {}),
          n('next'),
          n('throw'),
          n('return'),
          (t[Symbol.asyncIterator] = function () {
            return this;
          }),
          t);
      function n(r) {
        t[r] =
          i[r] &&
          function (n) {
            return new Promise(function (e, t) {
              (n = i[r](n)), o(e, t, n.done, n.value);
            });
          };
      }
      function o(t, e, n, r) {
        Promise.resolve(r).then(function (e) {
          t({ value: e, done: n });
        }, e);
      }
    }
    function E(e, t) {
      Object.defineProperty
        ? Object.defineProperty(e, 'raw', { value: t })
        : (e.raw = t);
      return e;
    }
    function S(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      t.default = e;
      return t;
    }
    function O(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function T(e, t) {
      if (!t.has(e))
        throw new TypeError('attempted to get private field on non-instance');
      return t.get(e);
    }
    function j(e, t, n) {
      if (!t.has(e))
        throw new TypeError('attempted to set private field on non-instance');
      t.set(e, n);
      return n;
    }
  },
  130: function (e, t) {
    var n = (e.exports = {});
    var r;
    var i;
    function o() {
      throw new Error('setTimeout has not been defined');
    }
    function a() {
      throw new Error('clearTimeout has not been defined');
    }
    (function () {
      try {
        r = 'function' === typeof setTimeout ? setTimeout : o;
      } catch (e) {
        r = o;
      }
      try {
        i = 'function' === typeof clearTimeout ? clearTimeout : a;
      } catch (e) {
        i = a;
      }
    })();
    function u(t) {
      if (r === setTimeout) return setTimeout(t, 0);
      if ((r === o || !r) && setTimeout) {
        r = setTimeout;
        return setTimeout(t, 0);
      }
      try {
        return r(t, 0);
      } catch (e) {
        try {
          return r.call(null, t, 0);
        } catch (e) {
          return r.call(this, t, 0);
        }
      }
    }
    function c(t) {
      if (i === clearTimeout) return clearTimeout(t);
      if ((i === a || !i) && clearTimeout) {
        i = clearTimeout;
        return clearTimeout(t);
      }
      try {
        return i(t);
      } catch (e) {
        try {
          return i.call(null, t);
        } catch (e) {
          return i.call(this, t);
        }
      }
    }
    var s = [];
    var f = false;
    var l;
    var d = -1;
    function p() {
      if (!f || !l) return;
      f = false;
      l.length ? (s = l.concat(s)) : (d = -1);
      s.length && v();
    }
    function v() {
      if (f) return;
      var e = u(p);
      f = true;
      var t = s.length;
      while (t) {
        l = s;
        s = [];
        while (++d < t) l && l[d].run();
        d = -1;
        t = s.length;
      }
      l = null;
      f = false;
      c(e);
    }
    n.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      s.push(new h(e, t));
      1 !== s.length || f || u(v);
    };
    function h(e, t) {
      this.fun = e;
      this.array = t;
    }
    h.prototype.run = function () {
      this.fun.apply(null, this.array);
    };
    n.title = 'browser';
    n.browser = true;
    n.env = {};
    n.argv = [];
    n.version = '';
    n.versions = {};
    function _() {}
    n.on = _;
    n.addListener = _;
    n.once = _;
    n.off = _;
    n.removeListener = _;
    n.removeAllListeners = _;
    n.emit = _;
    n.prependListener = _;
    n.prependOnceListener = _;
    n.listeners = function (e) {
      return [];
    };
    n.binding = function (e) {
      throw new Error('process.binding is not supported');
    };
    n.cwd = function () {
      return '/';
    };
    n.chdir = function (e) {
      throw new Error('process.chdir is not supported');
    };
    n.umask = function () {
      return 0;
    };
  },
  1444: function (T, j, e) {
    (function (E) {
      var S, O;
      (function () {
        var t =
            'undefined' != typeof window && window === this
              ? this
              : 'undefined' != typeof E && null != E
              ? E
              : this,
          n =
            'function' == typeof Object.defineProperties
              ? Object.defineProperty
              : function (e, t, n) {
                  e != Array.prototype &&
                    e != Object.prototype &&
                    (e[t] = n.value);
                };
        function r() {
          r = function () {};
          t.Symbol || (t.Symbol = e);
        }
        var i = 0;
        function e(e) {
          return 'jscomp_symbol_' + (e || '') + i++;
        }
        function o() {
          r();
          var e = t.Symbol.iterator;
          e = e || (t.Symbol.iterator = t.Symbol('iterator'));
          'function' != typeof Array.prototype[e] &&
            n(Array.prototype, e, {
              configurable: !0,
              writable: !0,
              value: function () {
                return a(this);
              },
            });
          o = function () {};
        }
        function a(e) {
          var t = 0;
          return u(function () {
            return t < e.length ? { done: !1, value: e[t++] } : { done: !0 };
          });
        }
        function u(e) {
          o();
          e = { next: e };
          e[t.Symbol.iterator] = function () {
            return this;
          };
          return e;
        }
        function c(e) {
          o();
          var t = e[Symbol.iterator];
          return t ? t.call(e) : a(e);
        }
        function s(e) {
          if (!(e instanceof Array)) {
            e = c(e);
            for (var t, n = []; !(t = e.next()).done; ) n.push(t.value);
            e = n;
          }
          return e;
        }
        var f = 0;
        function l(i, o) {
          var a = XMLHttpRequest.prototype.send,
            u = f++;
          XMLHttpRequest.prototype.send = function (e) {
            for (var t = [], n = 0; n < arguments.length; ++n)
              t[n - 0] = arguments[n];
            var r = this;
            i(u);
            this.addEventListener('readystatechange', function () {
              4 === r.readyState && o(u);
            });
            return a.apply(this, t);
          };
        }
        function d(o, a) {
          var u = fetch;
          fetch = function (e) {
            for (var i = [], t = 0; t < arguments.length; ++t)
              i[t - 0] = arguments[t];
            return new Promise(function (t, n) {
              var r = f++;
              o(r);
              u.apply(null, [].concat(s(i))).then(
                function (e) {
                  a(r);
                  t(e);
                },
                function (e) {
                  a(e);
                  n(e);
                }
              );
            });
          };
        }
        var p = 'img script iframe link audio video source'.split(' ');
        function v(e, t) {
          e = c(e);
          for (var n = e.next(); !n.done; n = e.next())
            if (
              ((n = n.value),
              t.includes(n.nodeName.toLowerCase()) || v(n.children, t))
            )
              return !0;
          return !1;
        }
        function h(n) {
          var e = new MutationObserver(function (e) {
            e = c(e);
            for (var t = e.next(); !t.done; t = e.next())
              (t = t.value),
                'childList' == t.type && v(t.addedNodes, p)
                  ? n(t)
                  : 'attributes' == t.type &&
                    p.includes(t.target.tagName.toLowerCase()) &&
                    n(t);
          });
          e.observe(document, {
            attributes: !0,
            childList: !0,
            subtree: !0,
            attributeFilter: ['href', 'src'],
          });
          return e;
        }
        function _(e, t) {
          if (2 < e.length) return performance.now();
          var n = [];
          t = c(t);
          for (var r = t.next(); !r.done; r = t.next())
            (r = r.value),
              n.push({ timestamp: r.start, type: 'requestStart' }),
              n.push({ timestamp: r.end, type: 'requestEnd' });
          t = c(e);
          for (r = t.next(); !r.done; r = t.next())
            n.push({ timestamp: r.value, type: 'requestStart' });
          n.sort(function (e, t) {
            return e.timestamp - t.timestamp;
          });
          e = e.length;
          for (t = n.length - 1; 0 <= t; t--)
            switch (((r = n[t]), r.type)) {
              case 'requestStart':
                e--;
                break;
              case 'requestEnd':
                e++;
                if (2 < e) return r.timestamp;
                break;
              default:
                throw Error('Internal Error: This should never happen');
            }
          return 0;
        }
        function g(e) {
          e = e || {};
          this.w = !!e.useMutationObserver;
          this.u = e.minValue || null;
          e = window.__tti && window.__tti.e;
          var t = window.__tti && window.__tti.o;
          this.a = e
            ? e.map(function (e) {
                return { start: e.startTime, end: e.startTime + e.duration };
              })
            : [];
          t && t.disconnect();
          this.b = [];
          this.f = new Map();
          this.j = null;
          this.v = -1 / 0;
          this.i = !1;
          this.h = this.c = this.s = null;
          l(this.m.bind(this), this.l.bind(this));
          d(this.m.bind(this), this.l.bind(this));
          b(this);
          this.w && (this.h = h(this.B.bind(this)));
        }
        g.prototype.getFirstConsistentlyInteractive = function () {
          var t = this;
          return new Promise(function (e) {
            t.s = e;
            'complete' == document.readyState
              ? y(t)
              : window.addEventListener('load', function () {
                  y(t);
                });
          });
        };
        function y(e) {
          e.i = !0;
          var t = 0 < e.a.length ? e.a[e.a.length - 1].end : 0,
            n = _(e.g, e.b);
          m(e, Math.max(n + 5e3, t));
        }
        function m(o, e) {
          !o.i ||
            o.v > e ||
            (clearTimeout(o.j),
            (o.j = setTimeout(function () {
              var e = performance.timing.navigationStart,
                t = _(o.g, o.b),
                e =
                  (window.a && window.a.A ? 1e3 * window.a.A().C - e : 0) ||
                  performance.timing.domContentLoadedEventEnd - e;
              if (o.u) var n = o.u;
              else
                n = performance.timing.domContentLoadedEventEnd
                  ? ((n = performance.timing),
                    n.domContentLoadedEventEnd - n.navigationStart)
                  : null;
              var r = performance.now();
              null === n && m(o, Math.max(t + 5e3, r + 1e3));
              var i = o.a;
              t =
                5e3 > r - t
                  ? null
                  : ((t = i.length ? i[i.length - 1].end : e),
                    5e3 > r - t ? null : Math.max(t, n));
              t &&
                (o.s(t),
                clearTimeout(o.j),
                (o.i = !1),
                o.c && o.c.disconnect(),
                o.h && o.h.disconnect());
              m(o, performance.now() + 1e3);
            }, e - performance.now())),
            (o.v = e));
        }
        function b(r) {
          r.c = new PerformanceObserver(function (e) {
            e = c(e.getEntries());
            for (var t = e.next(); !t.done; t = e.next())
              if (
                ((t = t.value),
                'resource' === t.entryType &&
                  (r.b.push({ start: t.fetchStart, end: t.responseEnd }),
                  m(r, _(r.g, r.b) + 5e3)),
                'longtask' === t.entryType)
              ) {
                var n = t.startTime + t.duration;
                r.a.push({ start: t.startTime, end: n });
                m(r, n + 5e3);
              }
          });
          r.c.observe({ entryTypes: ['longtask', 'resource'] });
        }
        g.prototype.m = function (e) {
          this.f.set(e, performance.now());
        };
        g.prototype.l = function (e) {
          this.f.delete(e);
        };
        g.prototype.B = function () {
          m(this, performance.now() + 5e3);
        };
        t.Object.defineProperties(g.prototype, {
          g: {
            configurable: !0,
            enumerable: !0,
            get: function () {
              return [].concat(s(this.f.values()));
            },
          },
        });
        var w = {
          getFirstConsistentlyInteractive: function (e) {
            e = e || {};
            return 'PerformanceLongTaskTiming' in window
              ? new g(e).getFirstConsistentlyInteractive()
              : Promise.resolve(null);
          },
        };
        true,
          T.exports
            ? (T.exports = w)
            : (true,
              !((S = []),
              (O = function () {
                return w;
              }.apply(j, S)),
              void 0 !== O && (T.exports = O)));
      })();
    }.call(this, e(98)));
  },
  1609: function (e, t, n) {
    'use strict';
    n.r(t);
    n.d(t, 'Severity', function () {
      return s['a'];
    });
    n.d(t, 'Status', function () {
      return a;
    });
    n.d(t, 'addGlobalEventProcessor', function () {
      return u['b'];
    });
    n.d(t, 'addBreadcrumb', function () {
      return h;
    });
    n.d(t, 'captureException', function () {
      return l;
    });
    n.d(t, 'captureEvent', function () {
      return p;
    });
    n.d(t, 'captureMessage', function () {
      return d;
    });
    n.d(t, 'configureScope', function () {
      return v;
    });
    n.d(t, 'getHubFromCarrier', function () {
      return f['c'];
    });
    n.d(t, 'getCurrentHub', function () {
      return f['b'];
    });
    n.d(t, 'Hub', function () {
      return f['a'];
    });
    n.d(t, 'Scope', function () {
      return u['a'];
    });
    n.d(t, 'setContext', function () {
      return g;
    });
    n.d(t, 'setExtra', function () {
      return b;
    });
    n.d(t, 'setExtras', function () {
      return y;
    });
    n.d(t, 'setTag', function () {
      return w;
    });
    n.d(t, 'setTags', function () {
      return m;
    });
    n.d(t, 'setUser', function () {
      return E;
    });
    n.d(t, 'withScope', function () {
      return S;
    });
    n.d(t, 'BrowserClient', function () {
      return he;
    });
    n.d(t, 'defaultIntegrations', function () {
      return De;
    });
    n.d(t, 'forceLoad', function () {
      return Ue;
    });
    n.d(t, 'init', function () {
      return Ne;
    });
    n.d(t, 'lastEventId', function () {
      return Be;
    });
    n.d(t, 'onLoad', function () {
      return Fe;
    });
    n.d(t, 'showReportDialog', function () {
      return Me;
    });
    n.d(t, 'flush', function () {
      return qe;
    });
    n.d(t, 'close', function () {
      return He;
    });
    n.d(t, 'wrap', function () {
      return ze;
    });
    n.d(t, 'SDK_NAME', function () {
      return pe;
    });
    n.d(t, 'SDK_VERSION', function () {
      return ve;
    });
    n.d(t, 'Integrations', function () {
      return Ve;
    });
    n.d(t, 'Transports', function () {
      return o;
    });
    var r = {};
    n.r(r);
    n.d(r, 'FunctionToString', function () {
      return ge;
    });
    n.d(r, 'InboundFilters', function () {
      return me;
    });
    var i = {};
    n.r(i);
    n.d(i, 'GlobalHandlers', function () {
      return Ie;
    });
    n.d(i, 'TryCatch', function () {
      return Te;
    });
    n.d(i, 'Breadcrumbs', function () {
      return xe;
    });
    n.d(i, 'LinkedErrors', function () {
      return Pe;
    });
    n.d(i, 'UserAgent', function () {
      return Le;
    });
    var o = {};
    n.r(o);
    n.d(o, 'BaseTransport', function () {
      return ce;
    });
    n.d(o, 'FetchTransport', function () {
      return fe;
    });
    n.d(o, 'XHRTransport', function () {
      return le;
    });
    var _ = n(13);
    var s = n(3655);
    var a;
    (function (e) {
      e['Unknown'] = 'unknown';
      e['Skipped'] = 'skipped';
      e['Success'] = 'success';
      e['RateLimit'] = 'rate_limit';
      e['Invalid'] = 'invalid';
      e['Failed'] = 'failed';
    })((a = a || {}));
    (function (t) {
      function e(e) {
        if (e >= 200 && e < 300) return t.Success;
        if (429 === e) return t.RateLimit;
        if (e >= 400 && e < 500) return t.Invalid;
        if (e >= 500) return t.Failed;
        return t.Unknown;
      }
      t.fromHttpCode = e;
    })((a = a || {}));
    var u = n(791);
    var f = n(3656);
    function c(e) {
      var t = [];
      for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      var r = Object(f['b'])();
      if (r && r[e]) return r[e].apply(r, _['__spread'](t));
      throw new Error(
        'No hub defined or ' +
          e +
          ' was not found on the hub, please open a bug report.'
      );
    }
    function l(e) {
      var t;
      try {
        throw new Error('Sentry syntheticException');
      } catch (e) {
        t = e;
      }
      return c('captureException', e, {
        originalException: e,
        syntheticException: t,
      });
    }
    function d(e, t) {
      var n;
      try {
        throw new Error(e);
      } catch (e) {
        n = e;
      }
      return c('captureMessage', e, t, {
        originalException: e,
        syntheticException: n,
      });
    }
    function p(e) {
      return c('captureEvent', e);
    }
    function v(e) {
      c('configureScope', e);
    }
    function h(e) {
      c('addBreadcrumb', e);
    }
    function g(e, t) {
      c('setContext', e, t);
    }
    function y(e) {
      c('setExtras', e);
    }
    function m(e) {
      c('setTags', e);
    }
    function b(e, t) {
      c('setExtra', e, t);
    }
    function w(e, t) {
      c('setTag', e, t);
    }
    function E(e) {
      c('setUser', e);
    }
    function S(e) {
      c('withScope', e);
    }
    function O(e) {
      var t = [];
      for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      c.apply(void 0, _['__spread'](['_invokeClient', e], t));
    }
    var T = n(3098);
    var j = n(282);
    var x = '7';
    var k = (function () {
      function e(e) {
        this.dsn = e;
        this._dsnObject = new T['a'](e);
      }
      e.prototype.getDsn = function () {
        return this._dsnObject;
      };
      e.prototype.getStoreEndpoint = function () {
        return '' + this._getBaseUrl() + this.getStoreEndpointPath();
      };
      e.prototype.getStoreEndpointWithUrlEncodedAuth = function () {
        var e = this._dsnObject;
        var t = { sentry_key: e.user, sentry_version: x };
        return this.getStoreEndpoint() + '?' + Object(j['f'])(t);
      };
      e.prototype._getBaseUrl = function () {
        var e = this._dsnObject;
        var t = e.protocol ? e.protocol + ':' : '';
        var n = e.port ? ':' + e.port : '';
        return t + '//' + e.host + n;
      };
      e.prototype.getStoreEndpointPath = function () {
        var e = this._dsnObject;
        return (e.path ? '/' + e.path : '') + '/api/' + e.projectId + '/store/';
      };
      e.prototype.getRequestHeaders = function (e, t) {
        var n = this._dsnObject;
        var r = ['Sentry sentry_version=' + x];
        r.push('sentry_client=' + e + '/' + t);
        r.push('sentry_key=' + n.user);
        n.pass && r.push('sentry_secret=' + n.pass);
        return {
          'Content-Type': 'application/json',
          'X-Sentry-Auth': r.join(', '),
        };
      };
      e.prototype.getReportDialogEndpoint = function (e) {
        void 0 === e && (e = {});
        var t = this._dsnObject;
        var n =
          this._getBaseUrl() +
          (t.path ? '/' + t.path : '') +
          '/api/embed/error-page/';
        var r = [];
        r.push('dsn=' + t.toString());
        for (var i in e)
          if ('user' === i) {
            if (!e.user) continue;
            e.user.name && r.push('name=' + encodeURIComponent(e.user.name));
            e.user.email && r.push('email=' + encodeURIComponent(e.user.email));
          } else r.push(encodeURIComponent(i) + '=' + encodeURIComponent(e[i]));
        if (r.length) return n + '?' + r.join('&');
        return n;
      };
      return e;
    })();
    var I = n(432);
    var R = n(119);
    var C = n(648);
    var P = n(431);
    var A = n(94);
    var L = [];
    function D(e) {
      var t =
        (e.defaultIntegrations && _['__spread'](e.defaultIntegrations)) || [];
      var n = e.integrations;
      var r = [];
      if (Array.isArray(n)) {
        var i = n.map(function (e) {
          return e.name;
        });
        var o = [];
        t.forEach(function (e) {
          if (-1 === i.indexOf(e.name) && -1 === o.indexOf(e.name)) {
            r.push(e);
            o.push(e.name);
          }
        });
        n.forEach(function (e) {
          if (-1 === o.indexOf(e.name)) {
            r.push(e);
            o.push(e.name);
          }
        });
      } else if ('function' === typeof n) {
        r = n(t);
        r = Array.isArray(r) ? r : [r];
      } else r = _['__spread'](t);
      var a = r.map(function (e) {
        return e.name;
      });
      var u = 'Debug';
      -1 !== a.indexOf(u) &&
        r.push.apply(r, _['__spread'](r.splice(a.indexOf(u), 1)));
      return r;
    }
    function N(e) {
      if (-1 !== L.indexOf(e.name)) return;
      e.setupOnce(u['b'], f['b']);
      L.push(e.name);
      I['a'].log('Integration installed: ' + e.name);
    }
    function M(e) {
      var t = {};
      D(e).forEach(function (e) {
        t[e.name] = e;
        N(e);
      });
      return t;
    }
    var B = (function () {
      function e(e, t) {
        this._integrations = {};
        this._processing = false;
        this._backend = new e(t);
        this._options = t;
        t.dsn && (this._dsn = new T['a'](t.dsn));
      }
      e.prototype.captureException = function (e, t, n) {
        var r = this;
        var i = t && t.event_id;
        this._processing = true;
        this._getBackend()
          .eventFromException(e, t)
          .then(function (e) {
            return r._processEvent(e, t, n);
          })
          .then(function (e) {
            i = e && e.event_id;
            r._processing = false;
          })
          .then(null, function (e) {
            I['a'].error(e);
            r._processing = false;
          });
        return i;
      };
      e.prototype.captureMessage = function (e, t, n, r) {
        var i = this;
        var o = n && n.event_id;
        this._processing = true;
        var a = Object(R['i'])(e)
          ? this._getBackend().eventFromMessage('' + e, t, n)
          : this._getBackend().eventFromException(e, n);
        a.then(function (e) {
          return i._processEvent(e, n, r);
        })
          .then(function (e) {
            o = e && e.event_id;
            i._processing = false;
          })
          .then(null, function (e) {
            I['a'].error(e);
            i._processing = false;
          });
        return o;
      };
      e.prototype.captureEvent = function (e, t, n) {
        var r = this;
        var i = t && t.event_id;
        this._processing = true;
        this._processEvent(e, t, n)
          .then(function (e) {
            i = e && e.event_id;
            r._processing = false;
          })
          .then(null, function (e) {
            I['a'].error(e);
            r._processing = false;
          });
        return i;
      };
      e.prototype.getDsn = function () {
        return this._dsn;
      };
      e.prototype.getOptions = function () {
        return this._options;
      };
      e.prototype.flush = function (e) {
        var n = this;
        return this._isClientProcessing(e).then(function (t) {
          clearInterval(t.interval);
          return n
            ._getBackend()
            .getTransport()
            .close(e)
            .then(function (e) {
              return t.ready && e;
            });
        });
      };
      e.prototype.close = function (e) {
        var t = this;
        return this.flush(e).then(function (e) {
          t.getOptions().enabled = false;
          return e;
        });
      };
      e.prototype.setupIntegrations = function () {
        this._isEnabled() && (this._integrations = M(this._options));
      };
      e.prototype.getIntegration = function (t) {
        try {
          return this._integrations[t.id] || null;
        } catch (e) {
          I['a'].warn(
            'Cannot retrieve integration ' + t.id + ' from the current Client'
          );
          return null;
        }
      };
      e.prototype._isClientProcessing = function (i) {
        var o = this;
        return new C['a'](function (e) {
          var t = 0;
          var n = 1;
          var r = 0;
          clearInterval(r);
          r = setInterval(function () {
            if (o._processing) {
              t += n;
              i && t >= i && e({ interval: r, ready: false });
            } else e({ interval: r, ready: true });
          }, n);
        });
      };
      e.prototype._getBackend = function () {
        return this._backend;
      };
      e.prototype._isEnabled = function () {
        return false !== this.getOptions().enabled && void 0 !== this._dsn;
      };
      e.prototype._prepareEvent = function (e, t, n) {
        var r = this;
        var i = this.getOptions(),
          o = i.environment,
          a = i.release,
          u = i.dist,
          c = i.maxValueLength,
          s = void 0 === c ? 250 : c,
          f = i.normalizeDepth,
          l = void 0 === f ? 3 : f;
        var d = _['__assign']({}, e);
        void 0 === d.environment && void 0 !== o && (d.environment = o);
        void 0 === d.release && void 0 !== a && (d.release = a);
        void 0 === d.dist && void 0 !== u && (d.dist = u);
        d.message && (d.message = Object(P['d'])(d.message, s));
        var p = d.exception && d.exception.values && d.exception.values[0];
        p && p.value && (p.value = Object(P['d'])(p.value, s));
        var v = d.request;
        v && v.url && (v.url = Object(P['d'])(v.url, s));
        void 0 === d.event_id &&
          (d.event_id = n && n.event_id ? n.event_id : Object(A['q'])());
        this._addIntegrations(d.sdk);
        var h = C['a'].resolve(d);
        t && (h = t.applyToEvent(d, n));
        return h.then(function (e) {
          if ('number' === typeof l && l > 0) return r._normalizeEvent(e, l);
          return e;
        });
      };
      e.prototype._normalizeEvent = function (e, t) {
        if (!e) return null;
        return _['__assign'](
          {},
          e,
          e.breadcrumbs && {
            breadcrumbs: e.breadcrumbs.map(function (e) {
              return _['__assign'](
                {},
                e,
                e.data && { data: Object(j['d'])(e.data, t) }
              );
            }),
          },
          e.user && { user: Object(j['d'])(e.user, t) },
          e.contexts && { contexts: Object(j['d'])(e.contexts, t) },
          e.extra && { extra: Object(j['d'])(e.extra, t) }
        );
      };
      e.prototype._addIntegrations = function (e) {
        var t = Object.keys(this._integrations);
        e && t.length > 0 && (e.integrations = t);
      };
      e.prototype._processEvent = function (e, a, t) {
        var u = this;
        var n = this.getOptions(),
          c = n.beforeSend,
          r = n.sampleRate;
        if (!this._isEnabled())
          return C['a'].reject('SDK not enabled, will not send event.');
        if ('number' === typeof r && Math.random() > r)
          return C['a'].reject(
            'This event has been sampled, will not send event.'
          );
        return new C['a'](function (i, o) {
          u._prepareEvent(e, t, a)
            .then(function (e) {
              if (null === e) {
                o('An event processor returned null, will not send event.');
                return;
              }
              var t = e;
              var n = a && a.data && true === a.data.__sentry__;
              if (n || !c) {
                u._getBackend().sendEvent(t);
                i(t);
                return;
              }
              var r = c(e, a);
              if ('undefined' === typeof r)
                I['a'].error(
                  '`beforeSend` method has to return `null` or a valid event.'
                );
              else if (Object(R['m'])(r)) u._handleAsyncBeforeSend(r, i, o);
              else {
                t = r;
                if (null === t) {
                  I['a'].log(
                    '`beforeSend` returned `null`, will not send event.'
                  );
                  i(null);
                  return;
                }
                u._getBackend().sendEvent(t);
                i(t);
              }
            })
            .then(null, function (e) {
              u.captureException(e, {
                data: { __sentry__: true },
                originalException: e,
              });
              o(
                'Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: ' +
                  e
              );
            });
        });
      };
      e.prototype._handleAsyncBeforeSend = function (e, t, n) {
        var r = this;
        e.then(function (e) {
          if (null === e) {
            n('`beforeSend` returned `null`, will not send event.');
            return;
          }
          r._getBackend().sendEvent(e);
          t(e);
        }).then(null, function (e) {
          n('beforeSend rejected with ' + e);
        });
      };
      return e;
    })();
    var U = n(433);
    var F = (function () {
      function e() {}
      e.prototype.sendEvent = function (e) {
        return C['a'].resolve({
          reason:
            'NoopTransport: Event has been skipped because no Dsn is configured.',
          status: a.Skipped,
        });
      };
      e.prototype.close = function (e) {
        return C['a'].resolve(true);
      };
      return e;
    })();
    var q = (function () {
      function e(e) {
        this._options = e;
        this._options.dsn ||
          I['a'].warn('No DSN provided, backend will not do anything.');
        this._transport = this._setupTransport();
      }
      e.prototype._setupTransport = function () {
        return new F();
      };
      e.prototype.eventFromException = function (e, t) {
        throw new U['a'](
          'Backend has to implement `eventFromException` method'
        );
      };
      e.prototype.eventFromMessage = function (e, t, n) {
        throw new U['a']('Backend has to implement `eventFromMessage` method');
      };
      e.prototype.sendEvent = function (e) {
        this._transport.sendEvent(e).then(null, function (e) {
          I['a'].error('Error while sending event: ' + e);
        });
      };
      e.prototype.getTransport = function () {
        return this._transport;
      };
      return e;
    })();
    var H = n(917);
    var z = '?';
    var Y = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
    var W = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js))(?::(\d+))?(?::(\d+))?\s*$/i;
    var V = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
    var G = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
    var X = /\((\S*)(?::(\d+))(?::(\d+))\)/;
    function K(e) {
      var t = null;
      var n = e && e.framesToPop;
      try {
        t = J(e);
        if (t) return Z(t, n);
      } catch (e) {}
      try {
        t = $(e);
        if (t) return Z(t, n);
      } catch (e) {}
      return { message: Q(e), name: e && e.name, stack: [], failed: true };
    }
    function $(e) {
      if (!e || !e.stack) return null;
      var t = [];
      var n = e.stack.split('\n');
      var r;
      var i;
      var o;
      var a;
      for (var u = 0; u < n.length; ++u) {
        if ((o = Y.exec(n[u]))) {
          var c = o[2] && 0 === o[2].indexOf('native');
          r = o[2] && 0 === o[2].indexOf('eval');
          if (r && (i = X.exec(o[2]))) {
            o[2] = i[1];
            o[3] = i[2];
            o[4] = i[3];
          }
          a = {
            url:
              o[2] && 0 === o[2].indexOf('address at ')
                ? o[2].substr('address at '.length)
                : o[2],
            func: o[1] || z,
            args: c ? [o[2]] : [],
            line: o[3] ? +o[3] : null,
            column: o[4] ? +o[4] : null,
          };
        } else if ((o = V.exec(n[u])))
          a = {
            url: o[2],
            func: o[1] || z,
            args: [],
            line: +o[3],
            column: o[4] ? +o[4] : null,
          };
        else {
          if (!(o = W.exec(n[u]))) continue;
          r = o[3] && o[3].indexOf(' > eval') > -1;
          if (r && (i = G.exec(o[3]))) {
            o[1] = o[1] || 'eval';
            o[3] = i[1];
            o[4] = i[2];
            o[5] = '';
          } else
            0 !== u ||
              o[5] ||
              void 0 === e.columnNumber ||
              (t[0].column = e.columnNumber + 1);
          a = {
            url: o[3],
            func: o[1] || z,
            args: o[2] ? o[2].split(',') : [],
            line: o[4] ? +o[4] : null,
            column: o[5] ? +o[5] : null,
          };
        }
        !a.func && a.line && (a.func = z);
        t.push(a);
      }
      if (!t.length) return null;
      return { message: Q(e), name: e.name, stack: t };
    }
    function J(e) {
      if (!e || !e.stacktrace) return null;
      var t = e.stacktrace;
      var n = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i;
      var r = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\))? in (.*):\s*$/i;
      var i = t.split('\n');
      var o = [];
      var a;
      for (var u = 0; u < i.length; u += 2) {
        var c = null;
        (a = n.exec(i[u]))
          ? (c = { url: a[2], func: a[3], args: [], line: +a[1], column: null })
          : (a = r.exec(i[u])) &&
            (c = {
              url: a[6],
              func: a[3] || a[4],
              args: a[5] ? a[5].split(',') : [],
              line: +a[1],
              column: +a[2],
            });
        if (c) {
          !c.func && c.line && (c.func = z);
          o.push(c);
        }
      }
      if (!o.length) return null;
      return { message: Q(e), name: e.name, stack: o };
    }
    function Z(t, e) {
      try {
        return _['__assign']({}, t, { stack: t.stack.slice(e) });
      } catch (e) {
        return t;
      }
    }
    function Q(e) {
      var t = e && e.message;
      if (!t) return 'No error message';
      if (t.error && 'string' === typeof t.error.message)
        return t.error.message;
      return t;
    }
    var ee = 50;
    function te(e) {
      var t = ie(e.stack);
      var n = { type: e.name, value: e.message };
      t && t.length && (n.stacktrace = { frames: t });
      void 0 === n.type &&
        '' === n.value &&
        (n.value = 'Unrecoverable error caught');
      return n;
    }
    function ne(e, t, n) {
      var r = {
        exception: {
          values: [
            {
              type: Object(R['f'])(e)
                ? e.constructor.name
                : n
                ? 'UnhandledRejection'
                : 'Error',
              value:
                'Non-Error ' +
                (n ? 'promise rejection' : 'exception') +
                ' captured with keys: ' +
                Object(j['b'])(e),
            },
          ],
        },
        extra: { __serialized__: Object(j['e'])(e) },
      };
      if (t) {
        var i = K(t);
        var o = ie(i.stack);
        r.stacktrace = { frames: o };
      }
      return r;
    }
    function re(e) {
      var t = te(e);
      return { exception: { values: [t] } };
    }
    function ie(e) {
      if (!e || !e.length) return [];
      var t = e;
      var n = t[0].func || '';
      var r = t[t.length - 1].func || '';
      (-1 === n.indexOf('captureMessage') &&
        -1 === n.indexOf('captureException')) ||
        (t = t.slice(1));
      -1 !== r.indexOf('sentryWrapped') && (t = t.slice(0, -1));
      return t
        .map(function (e) {
          return {
            colno: null === e.column ? void 0 : e.column,
            filename: e.url || t[0].url,
            function: e.func || '?',
            in_app: true,
            lineno: null === e.line ? void 0 : e.line,
          };
        })
        .slice(0, ee)
        .reverse();
    }
    function oe(e, t, n) {
      void 0 === n && (n = {});
      var r;
      if (Object(R['e'])(e) && e.error) {
        var i = e;
        e = i.error;
        r = re(K(e));
        return r;
      }
      if (Object(R['a'])(e) || Object(R['b'])(e)) {
        var o = e;
        var a = o.name || (Object(R['a'])(o) ? 'DOMError' : 'DOMException');
        var u = o.message ? a + ': ' + o.message : a;
        r = ae(u, t, n);
        Object(A['c'])(r, u);
        return r;
      }
      if (Object(R['d'])(e)) {
        r = re(K(e));
        return r;
      }
      if (Object(R['h'])(e) || Object(R['f'])(e)) {
        var c = e;
        r = ne(c, t, n.rejection);
        Object(A['b'])(r, { synthetic: true });
        return r;
      }
      r = ae(e, t, n);
      Object(A['c'])(r, '' + e, void 0);
      Object(A['b'])(r, { synthetic: true });
      return r;
    }
    function ae(e, t, n) {
      void 0 === n && (n = {});
      var r = { message: e };
      if (n.attachStacktrace && t) {
        var i = K(t);
        var o = ie(i.stack);
        r.stacktrace = { frames: o };
      }
      return r;
    }
    var ue = n(3097);
    var ce = (function () {
      function e(e) {
        this.options = e;
        this._buffer = new ue['a'](30);
        this.url = new k(this.options.dsn).getStoreEndpointWithUrlEncodedAuth();
      }
      e.prototype.sendEvent = function (e) {
        throw new U['a']('Transport Class has to implement `sendEvent` method');
      };
      e.prototype.close = function (e) {
        return this._buffer.drain(e);
      };
      return e;
    })();
    var se = Object(A['i'])();
    var fe = (function (t) {
      _['__extends'](e, t);
      function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e._disabledUntil = new Date(Date.now());
        return e;
      }
      e.prototype.sendEvent = function (e) {
        var o = this;
        if (new Date(Date.now()) < this._disabledUntil)
          return Promise.reject({
            event: e,
            reason:
              'Transport locked till ' +
              this._disabledUntil +
              ' due to too many requests.',
            status: 429,
          });
        var t = {
          body: JSON.stringify(e),
          method: 'POST',
          referrerPolicy: Object(H['g'])() ? 'origin' : '',
        };
        void 0 !== this.options.headers && (t.headers = this.options.headers);
        return this._buffer.add(
          new C['a'](function (r, i) {
            se.fetch(o.url, t)
              .then(function (e) {
                var t = a.fromHttpCode(e.status);
                if (t === a.Success) {
                  r({ status: t });
                  return;
                }
                if (t === a.RateLimit) {
                  var n = Date.now();
                  o._disabledUntil = new Date(
                    n + Object(A['m'])(n, e.headers.get('Retry-After'))
                  );
                  I['a'].warn(
                    'Too many requests, backing off till: ' + o._disabledUntil
                  );
                }
                i(e);
              })
              .catch(i);
          })
        );
      };
      return e;
    })(ce);
    var le = (function (t) {
      _['__extends'](e, t);
      function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        e._disabledUntil = new Date(Date.now());
        return e;
      }
      e.prototype.sendEvent = function (t) {
        var o = this;
        if (new Date(Date.now()) < this._disabledUntil)
          return Promise.reject({
            event: t,
            reason:
              'Transport locked till ' +
              this._disabledUntil +
              ' due to too many requests.',
            status: 429,
          });
        return this._buffer.add(
          new C['a'](function (n, r) {
            var i = new XMLHttpRequest();
            i.onreadystatechange = function () {
              if (4 !== i.readyState) return;
              var e = a.fromHttpCode(i.status);
              if (e === a.Success) {
                n({ status: e });
                return;
              }
              if (e === a.RateLimit) {
                var t = Date.now();
                o._disabledUntil = new Date(
                  t + Object(A['m'])(t, i.getResponseHeader('Retry-After'))
                );
                I['a'].warn(
                  'Too many requests, backing off till: ' + o._disabledUntil
                );
              }
              r(i);
            };
            i.open('POST', o.url);
            for (var e in o.options.headers)
              o.options.headers.hasOwnProperty(e) &&
                i.setRequestHeader(e, o.options.headers[e]);
            i.send(JSON.stringify(t));
          })
        );
      };
      return e;
    })(ce);
    var de = (function (t) {
      _['__extends'](e, t);
      function e() {
        return (null !== t && t.apply(this, arguments)) || this;
      }
      e.prototype._setupTransport = function () {
        if (!this._options.dsn) return t.prototype._setupTransport.call(this);
        var e = _['__assign']({}, this._options.transportOptions, {
          dsn: this._options.dsn,
        });
        if (this._options.transport) return new this._options.transport(e);
        if (Object(H['d'])()) return new fe(e);
        return new le(e);
      };
      e.prototype.eventFromException = function (e, t) {
        var n = (t && t.syntheticException) || void 0;
        var r = oe(e, n, { attachStacktrace: this._options.attachStacktrace });
        Object(A['b'])(r, { handled: true, type: 'generic' });
        r.level = s['a'].Error;
        t && t.event_id && (r.event_id = t.event_id);
        return C['a'].resolve(r);
      };
      e.prototype.eventFromMessage = function (e, t, n) {
        void 0 === t && (t = s['a'].Info);
        var r = (n && n.syntheticException) || void 0;
        var i = ae(e, r, { attachStacktrace: this._options.attachStacktrace });
        i.level = t;
        n && n.event_id && (i.event_id = n.event_id);
        return C['a'].resolve(i);
      };
      return e;
    })(q);
    var pe = 'sentry.javascript.browser';
    var ve = '5.15.0';
    var he = (function (r) {
      _['__extends'](e, r);
      function e(e) {
        void 0 === e && (e = {});
        return r.call(this, de, e) || this;
      }
      e.prototype._prepareEvent = function (e, t, n) {
        e.platform = e.platform || 'javascript';
        e.sdk = _['__assign']({}, e.sdk, {
          name: pe,
          packages: _['__spread']((e.sdk && e.sdk.packages) || [], [
            { name: 'npm:@sentry/browser', version: ve },
          ]),
          version: ve,
        });
        return r.prototype._prepareEvent.call(this, e, t, n);
      };
      e.prototype.showReportDialog = function (e) {
        void 0 === e && (e = {});
        var t = Object(A['i'])().document;
        if (!t) return;
        if (!this._isEnabled()) {
          I['a'].error(
            'Trying to call showReportDialog with Sentry Client is disabled'
          );
          return;
        }
        var n = e.dsn || this.getDsn();
        if (!e.eventId) {
          I['a'].error('Missing `eventId` option in showReportDialog call');
          return;
        }
        if (!n) {
          I['a'].error('Missing `Dsn` option in showReportDialog call');
          return;
        }
        var r = t.createElement('script');
        r.async = true;
        r.src = new k(n).getReportDialogEndpoint(e);
        e.onLoad && (r.onload = e.onLoad);
        (t.head || t.body).appendChild(r);
      };
      return e;
    })(B);
    var _e;
    var ge = (function () {
      function e() {
        this.name = e.id;
      }
      e.prototype.setupOnce = function () {
        _e = Function.prototype.toString;
        Function.prototype.toString = function () {
          var e = [];
          for (var t = 0; t < arguments.length; t++) e[t] = arguments[t];
          var n = this.__sentry_original__ || this;
          return _e.apply(n, e);
        };
      };
      e.id = 'FunctionToString';
      return e;
    })();
    var ye = [
      /^Script error\.?$/,
      /^Javascript error: Script error\.? on line 0$/,
    ];
    var me = (function () {
      function a(e) {
        void 0 === e && (e = {});
        this._options = e;
        this.name = a.id;
      }
      a.prototype.setupOnce = function () {
        Object(u['b'])(function (e) {
          var t = Object(f['b'])();
          if (!t) return e;
          var n = t.getIntegration(a);
          if (n) {
            var r = t.getClient();
            var i = r ? r.getOptions() : {};
            var o = n._mergeOptions(i);
            if (n._shouldDropEvent(e, o)) return null;
          }
          return e;
        });
      };
      a.prototype._shouldDropEvent = function (e, t) {
        if (this._isSentryError(e, t)) {
          I['a'].warn(
            'Event dropped due to being internal Sentry Error.\nEvent: ' +
              Object(A['g'])(e)
          );
          return true;
        }
        if (this._isIgnoredError(e, t)) {
          I['a'].warn(
            'Event dropped due to being matched by `ignoreErrors` option.\nEvent: ' +
              Object(A['g'])(e)
          );
          return true;
        }
        if (this._isBlacklistedUrl(e, t)) {
          I['a'].warn(
            'Event dropped due to being matched by `blacklistUrls` option.\nEvent: ' +
              Object(A['g'])(e) +
              '.\nUrl: ' +
              this._getEventFilterUrl(e)
          );
          return true;
        }
        if (!this._isWhitelistedUrl(e, t)) {
          I['a'].warn(
            'Event dropped due to not being matched by `whitelistUrls` option.\nEvent: ' +
              Object(A['g'])(e) +
              '.\nUrl: ' +
              this._getEventFilterUrl(e)
          );
          return true;
        }
        return false;
      };
      a.prototype._isSentryError = function (e, t) {
        void 0 === t && (t = {});
        if (!t.ignoreInternal) return false;
        try {
          return (
            (e &&
              e.exception &&
              e.exception.values &&
              e.exception.values[0] &&
              'SentryError' === e.exception.values[0].type) ||
            false
          );
        } catch (e) {
          return false;
        }
      };
      a.prototype._isIgnoredError = function (e, n) {
        void 0 === n && (n = {});
        if (!n.ignoreErrors || !n.ignoreErrors.length) return false;
        return this._getPossibleEventMessages(e).some(function (t) {
          return n.ignoreErrors.some(function (e) {
            return Object(P['a'])(t, e);
          });
        });
      };
      a.prototype._isBlacklistedUrl = function (e, t) {
        void 0 === t && (t = {});
        if (!t.blacklistUrls || !t.blacklistUrls.length) return false;
        var n = this._getEventFilterUrl(e);
        return (
          !!n &&
          t.blacklistUrls.some(function (e) {
            return Object(P['a'])(n, e);
          })
        );
      };
      a.prototype._isWhitelistedUrl = function (e, t) {
        void 0 === t && (t = {});
        if (!t.whitelistUrls || !t.whitelistUrls.length) return true;
        var n = this._getEventFilterUrl(e);
        return (
          !n ||
          t.whitelistUrls.some(function (e) {
            return Object(P['a'])(n, e);
          })
        );
      };
      a.prototype._mergeOptions = function (e) {
        void 0 === e && (e = {});
        return {
          blacklistUrls: _['__spread'](
            this._options.blacklistUrls || [],
            e.blacklistUrls || []
          ),
          ignoreErrors: _['__spread'](
            this._options.ignoreErrors || [],
            e.ignoreErrors || [],
            ye
          ),
          ignoreInternal:
            'undefined' === typeof this._options.ignoreInternal ||
            this._options.ignoreInternal,
          whitelistUrls: _['__spread'](
            this._options.whitelistUrls || [],
            e.whitelistUrls || []
          ),
        };
      };
      a.prototype._getPossibleEventMessages = function (t) {
        if (t.message) return [t.message];
        if (t.exception)
          try {
            var e = (t.exception.values && t.exception.values[0]) || {},
              n = e.type,
              r = void 0 === n ? '' : n,
              i = e.value,
              o = void 0 === i ? '' : i;
            return ['' + o, r + ': ' + o];
          } catch (e) {
            I['a'].error(
              'Cannot extract message for event ' + Object(A['g'])(t)
            );
            return [];
          }
        return [];
      };
      a.prototype._getEventFilterUrl = function (t) {
        try {
          if (t.stacktrace) {
            var e = t.stacktrace.frames;
            return (e && e[e.length - 1].filename) || null;
          }
          if (t.exception) {
            var n =
              t.exception.values &&
              t.exception.values[0].stacktrace &&
              t.exception.values[0].stacktrace.frames;
            return (n && n[n.length - 1].filename) || null;
          }
          return null;
        } catch (e) {
          I['a'].error('Cannot extract url for event ' + Object(A['g'])(t));
          return null;
        }
      };
      a.id = 'InboundFilters';
      return a;
    })();
    function be(e, t) {
      true === t.debug && I['a'].enable();
      var n = Object(f['b'])();
      var r = new e(t);
      n.bindClient(r);
    }
    var we = 0;
    function Ee() {
      return we > 0;
    }
    function Se() {
      we += 1;
      setTimeout(function () {
        we -= 1;
      });
    }
    function Oe(t, r, i) {
      void 0 === r && (r = {});
      if ('function' !== typeof t) return t;
      try {
        if (t.__sentry__) return t;
        if (t.__sentry_wrapped__) return t.__sentry_wrapped__;
      } catch (e) {
        return t;
      }
      var e = function () {
        var n = Array.prototype.slice.call(arguments);
        try {
          i && 'function' === typeof i && i.apply(this, arguments);
          var e = n.map(function (e) {
            return Oe(e, r);
          });
          if (t.handleEvent) return t.handleEvent.apply(this, e);
          return t.apply(this, e);
        } catch (t) {
          Se();
          S(function (e) {
            e.addEventProcessor(function (e) {
              var t = _['__assign']({}, e);
              if (r.mechanism) {
                Object(A['c'])(t, void 0, void 0);
                Object(A['b'])(t, r.mechanism);
              }
              t.extra = _['__assign']({}, t.extra, { arguments: n });
              return t;
            });
            l(t);
          });
          throw t;
        }
      };
      try {
        for (var n in t)
          Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      } catch (e) {}
      t.prototype = t.prototype || {};
      e.prototype = t.prototype;
      Object.defineProperty(t, '__sentry_wrapped__', {
        enumerable: false,
        value: e,
      });
      Object.defineProperties(e, {
        __sentry__: { enumerable: false, value: true },
        __sentry_original__: { enumerable: false, value: t },
      });
      try {
        var o = Object.getOwnPropertyDescriptor(e, 'name');
        o.configurable &&
          Object.defineProperty(e, 'name', {
            get: function () {
              return t.name;
            },
          });
      } catch (e) {}
      return e;
    }
    var Te = (function () {
      function e() {
        this._ignoreOnError = 0;
        this.name = e.id;
      }
      e.prototype._wrapTimeFunction = function (r) {
        return function () {
          var e = [];
          for (var t = 0; t < arguments.length; t++) e[t] = arguments[t];
          var n = e[0];
          e[0] = Oe(n, {
            mechanism: {
              data: { function: Object(A['h'])(r) },
              handled: true,
              type: 'instrument',
            },
          });
          return r.apply(this, e);
        };
      };
      e.prototype._wrapRAF = function (t) {
        return function (e) {
          return t(
            Oe(e, {
              mechanism: {
                data: {
                  function: 'requestAnimationFrame',
                  handler: Object(A['h'])(t),
                },
                handled: true,
                type: 'instrument',
              },
            })
          );
        };
      };
      e.prototype._wrapEventTarget = function (i) {
        var e = Object(A['i'])();
        var t = e[i] && e[i].prototype;
        if (!t || !t.hasOwnProperty || !t.hasOwnProperty('addEventListener'))
          return;
        Object(j['c'])(t, 'addEventListener', function (r) {
          return function (e, t, n) {
            try {
              'function' === typeof t.handleEvent &&
                (t.handleEvent = Oe(t.handleEvent.bind(t), {
                  mechanism: {
                    data: {
                      function: 'handleEvent',
                      handler: Object(A['h'])(t),
                      target: i,
                    },
                    handled: true,
                    type: 'instrument',
                  },
                }));
            } catch (e) {}
            return r.call(
              this,
              e,
              Oe(t, {
                mechanism: {
                  data: {
                    function: 'addEventListener',
                    handler: Object(A['h'])(t),
                    target: i,
                  },
                  handled: true,
                  type: 'instrument',
                },
              }),
              n
            );
          };
        });
        Object(j['c'])(t, 'removeEventListener', function (i) {
          return function (e, t, n) {
            var r = t;
            try {
              r = r && (r.__sentry_wrapped__ || r);
            } catch (e) {}
            return i.call(this, e, r, n);
          };
        });
      };
      e.prototype._wrapXHR = function (i) {
        return function () {
          var e = [];
          for (var t = 0; t < arguments.length; t++) e[t] = arguments[t];
          var r = this;
          var n = ['onload', 'onerror', 'onprogress', 'onreadystatechange'];
          n.forEach(function (n) {
            n in r &&
              'function' === typeof r[n] &&
              Object(j['c'])(r, n, function (e) {
                var t = {
                  mechanism: {
                    data: { function: n, handler: Object(A['h'])(e) },
                    handled: true,
                    type: 'instrument',
                  },
                };
                e.__sentry_original__ &&
                  (t.mechanism.data.handler = Object(A['h'])(
                    e.__sentry_original__
                  ));
                return Oe(e, t);
              });
          });
          return i.apply(this, e);
        };
      };
      e.prototype.setupOnce = function () {
        this._ignoreOnError = this._ignoreOnError;
        var e = Object(A['i'])();
        Object(j['c'])(e, 'setTimeout', this._wrapTimeFunction.bind(this));
        Object(j['c'])(e, 'setInterval', this._wrapTimeFunction.bind(this));
        Object(j['c'])(e, 'requestAnimationFrame', this._wrapRAF.bind(this));
        'XMLHttpRequest' in e &&
          Object(j['c'])(
            XMLHttpRequest.prototype,
            'send',
            this._wrapXHR.bind(this)
          );
        [
          'EventTarget',
          'Window',
          'Node',
          'ApplicationCache',
          'AudioTrackList',
          'ChannelMergerNode',
          'CryptoOperation',
          'EventSource',
          'FileReader',
          'HTMLUnknownElement',
          'IDBDatabase',
          'IDBRequest',
          'IDBTransaction',
          'KeyOperation',
          'MediaController',
          'MessagePort',
          'ModalWindow',
          'Notification',
          'SVGElementInstance',
          'Screen',
          'TextTrack',
          'TextTrackCue',
          'TextTrackList',
          'WebSocket',
          'WebSocketWorker',
          'Worker',
          'XMLHttpRequest',
          'XMLHttpRequestEventTarget',
          'XMLHttpRequestUpload',
        ].forEach(this._wrapEventTarget.bind(this));
      };
      e.id = 'TryCatch';
      return e;
    })();
    var je = n(3099);
    var xe = (function () {
      function t(e) {
        this.name = t.id;
        this._options = _['__assign'](
          {
            console: true,
            dom: true,
            fetch: true,
            history: true,
            sentry: true,
            xhr: true,
          },
          e
        );
      }
      t.prototype._consoleBreadcrumb = function (e) {
        var t = {
          category: 'console',
          data: { arguments: e.args, logger: 'console' },
          level: s['a'].fromString(e.level),
          message: Object(P['b'])(e.args, ' '),
        };
        if ('assert' === e.level) {
          if (false !== e.args[0]) return;
          t.message =
            'Assertion failed: ' +
            (Object(P['b'])(e.args.slice(1), ' ') || 'console.assert');
          t.data.arguments = e.args.slice(1);
        }
        Object(f['b'])().addBreadcrumb(t, { input: e.args, level: e.level });
      };
      t.prototype._domBreadcrumb = function (e) {
        var t;
        try {
          t = e.event.target
            ? Object(A['k'])(e.event.target)
            : Object(A['k'])(e.event);
        } catch (e) {
          t = '<unknown>';
        }
        if (0 === t.length) return;
        Object(f['b'])().addBreadcrumb(
          { category: 'ui.' + e.name, message: t },
          { event: e.event, name: e.name }
        );
      };
      t.prototype._xhrBreadcrumb = function (e) {
        if (e.endTimestamp) {
          if (e.xhr.__sentry_own_request__) return;
          Object(f['b'])().addBreadcrumb(
            { category: 'xhr', data: e.xhr.__sentry_xhr__, type: 'http' },
            { xhr: e.xhr }
          );
          return;
        }
        this._options.sentry && e.xhr.__sentry_own_request__ && ke(e.args[0]);
      };
      t.prototype._fetchBreadcrumb = function (e) {
        if (!e.endTimestamp) return;
        var t = Object(f['b'])().getClient();
        var n = t && t.getDsn();
        if (this._options.sentry && n) {
          var r = new k(n).getStoreEndpoint();
          if (
            r &&
            -1 !== e.fetchData.url.indexOf(r) &&
            'POST' === e.fetchData.method &&
            e.args[1] &&
            e.args[1].body
          ) {
            ke(e.args[1].body);
            return;
          }
        }
        e.error
          ? Object(f['b'])().addBreadcrumb(
              {
                category: 'fetch',
                data: _['__assign']({}, e.fetchData, {
                  status_code: e.response.status,
                }),
                level: s['a'].Error,
                type: 'http',
              },
              { data: e.error, input: e.args }
            )
          : Object(f['b'])().addBreadcrumb(
              {
                category: 'fetch',
                data: _['__assign']({}, e.fetchData, {
                  status_code: e.response.status,
                }),
                type: 'http',
              },
              { input: e.args, response: e.response }
            );
      };
      t.prototype._historyBreadcrumb = function (e) {
        var t = Object(A['i'])();
        var n = e.from;
        var r = e.to;
        var i = Object(A['o'])(t.location.href);
        var o = Object(A['o'])(n);
        var a = Object(A['o'])(r);
        o.path || (o = i);
        i.protocol === a.protocol && i.host === a.host && (r = a.relative);
        i.protocol === o.protocol && i.host === o.host && (n = o.relative);
        Object(f['b'])().addBreadcrumb({
          category: 'navigation',
          data: { from: n, to: r },
        });
      };
      t.prototype.setupOnce = function () {
        var n = this;
        this._options.console &&
          Object(je['a'])({
            callback: function () {
              var e = [];
              for (var t = 0; t < arguments.length; t++) e[t] = arguments[t];
              n._consoleBreadcrumb.apply(n, _['__spread'](e));
            },
            type: 'console',
          });
        this._options.dom &&
          Object(je['a'])({
            callback: function () {
              var e = [];
              for (var t = 0; t < arguments.length; t++) e[t] = arguments[t];
              n._domBreadcrumb.apply(n, _['__spread'](e));
            },
            type: 'dom',
          });
        this._options.xhr &&
          Object(je['a'])({
            callback: function () {
              var e = [];
              for (var t = 0; t < arguments.length; t++) e[t] = arguments[t];
              n._xhrBreadcrumb.apply(n, _['__spread'](e));
            },
            type: 'xhr',
          });
        this._options.fetch &&
          Object(je['a'])({
            callback: function () {
              var e = [];
              for (var t = 0; t < arguments.length; t++) e[t] = arguments[t];
              n._fetchBreadcrumb.apply(n, _['__spread'](e));
            },
            type: 'fetch',
          });
        this._options.history &&
          Object(je['a'])({
            callback: function () {
              var e = [];
              for (var t = 0; t < arguments.length; t++) e[t] = arguments[t];
              n._historyBreadcrumb.apply(n, _['__spread'](e));
            },
            type: 'history',
          });
      };
      t.id = 'Breadcrumbs';
      return t;
    })();
    function ke(e) {
      try {
        var t = JSON.parse(e);
        Object(f['b'])().addBreadcrumb(
          {
            category:
              'sentry.' + ('transaction' === t.type ? 'transaction' : 'event'),
            event_id: t.event_id,
            level: t.level || s['a'].fromString('error'),
            message: Object(A['g'])(t),
          },
          { event: t }
        );
      } catch (e) {
        I['a'].error('Error while adding sentry type breadcrumb');
      }
    }
    var Ie = (function () {
      function c(e) {
        this.name = c.id;
        this._onErrorHandlerInstalled = false;
        this._onUnhandledRejectionHandlerInstalled = false;
        this._options = _['__assign'](
          { onerror: true, onunhandledrejection: true },
          e
        );
      }
      c.prototype.setupOnce = function () {
        Error.stackTraceLimit = 50;
        if (this._options.onerror) {
          I['a'].log('Global Handler attached: onerror');
          this._installGlobalOnErrorHandler();
        }
        if (this._options.onunhandledrejection) {
          I['a'].log('Global Handler attached: onunhandledrejection');
          this._installGlobalOnUnhandledRejectionHandler();
        }
      };
      c.prototype._installGlobalOnErrorHandler = function () {
        var u = this;
        if (this._onErrorHandlerInstalled) return;
        Object(je['a'])({
          callback: function (e) {
            var t = e.error;
            var n = Object(f['b'])();
            var r = n.getIntegration(c);
            var i = t && true === t.__sentry_own_request__;
            if (!r || Ee() || i) return;
            var o = n.getClient();
            var a = Object(R['i'])(t)
              ? u._eventFromIncompleteOnError(e.msg, e.url, e.line, e.column)
              : u._enhanceEventWithInitialFrame(
                  oe(t, void 0, {
                    attachStacktrace: o && o.getOptions().attachStacktrace,
                    rejection: false,
                  }),
                  e.url,
                  e.line,
                  e.column
                );
            Object(A['b'])(a, { handled: false, type: 'onerror' });
            n.captureEvent(a, { originalException: t });
          },
          type: 'error',
        });
        this._onErrorHandlerInstalled = true;
      };
      c.prototype._installGlobalOnUnhandledRejectionHandler = function () {
        var u = this;
        if (this._onUnhandledRejectionHandlerInstalled) return;
        Object(je['a'])({
          callback: function (e) {
            var t = e;
            try {
              'reason' in e
                ? (t = e.reason)
                : 'detail' in e &&
                  'reason' in e.detail &&
                  (t = e.detail.reason);
            } catch (e) {}
            var n = Object(f['b'])();
            var r = n.getIntegration(c);
            var i = t && true === t.__sentry_own_request__;
            if (!r || Ee() || i) return true;
            var o = n.getClient();
            var a = Object(R['i'])(t)
              ? u._eventFromIncompleteRejection(t)
              : oe(t, void 0, {
                  attachStacktrace: o && o.getOptions().attachStacktrace,
                  rejection: true,
                });
            a.level = s['a'].Error;
            Object(A['b'])(a, { handled: false, type: 'onunhandledrejection' });
            n.captureEvent(a, { originalException: t });
            return;
          },
          type: 'unhandledrejection',
        });
        this._onUnhandledRejectionHandlerInstalled = true;
      };
      c.prototype._eventFromIncompleteOnError = function (e, t, n, r) {
        var i = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i;
        var o = Object(R['e'])(e) ? e.message : e;
        var a;
        if (Object(R['k'])(o)) {
          var u = o.match(i);
          if (u) {
            a = u[1];
            o = u[2];
          }
        }
        var c = { exception: { values: [{ type: a || 'Error', value: o }] } };
        return this._enhanceEventWithInitialFrame(c, t, n, r);
      };
      c.prototype._eventFromIncompleteRejection = function (e) {
        return {
          exception: {
            values: [
              {
                type: 'UnhandledRejection',
                value: 'Non-Error promise rejection captured with value: ' + e,
              },
            ],
          },
        };
      };
      c.prototype._enhanceEventWithInitialFrame = function (e, t, n, r) {
        e.exception = e.exception || {};
        e.exception.values = e.exception.values || [];
        e.exception.values[0] = e.exception.values[0] || {};
        e.exception.values[0].stacktrace =
          e.exception.values[0].stacktrace || {};
        e.exception.values[0].stacktrace.frames =
          e.exception.values[0].stacktrace.frames || [];
        var i = isNaN(parseInt(r, 10)) ? void 0 : r;
        var o = isNaN(parseInt(n, 10)) ? void 0 : n;
        var a = Object(R['k'])(t) && t.length > 0 ? t : Object(A['j'])();
        0 === e.exception.values[0].stacktrace.frames.length &&
          e.exception.values[0].stacktrace.frames.push({
            colno: i,
            filename: a,
            function: '?',
            in_app: true,
            lineno: o,
          });
        return e;
      };
      c.id = 'GlobalHandlers';
      return c;
    })();
    var Re = 'cause';
    var Ce = 5;
    var Pe = (function () {
      function r(e) {
        void 0 === e && (e = {});
        this.name = r.id;
        this._key = e.key || Re;
        this._limit = e.limit || Ce;
      }
      r.prototype.setupOnce = function () {
        Object(u['b'])(function (e, t) {
          var n = Object(f['b'])().getIntegration(r);
          if (n) return n._handler(e, t);
          return e;
        });
      };
      r.prototype._handler = function (e, t) {
        if (
          !e.exception ||
          !e.exception.values ||
          !t ||
          !Object(R['g'])(t.originalException, Error)
        )
          return e;
        var n = this._walkErrorTree(t.originalException, this._key);
        e.exception.values = _['__spread'](n, e.exception.values);
        return e;
      };
      r.prototype._walkErrorTree = function (e, t, n) {
        void 0 === n && (n = []);
        if (!Object(R['g'])(e[t], Error) || n.length + 1 >= this._limit)
          return n;
        var r = K(e[t]);
        var i = te(r);
        return this._walkErrorTree(e[t], t, _['__spread']([i], n));
      };
      r.id = 'LinkedErrors';
      return r;
    })();
    var Ae = Object(A['i'])();
    var Le = (function () {
      function n() {
        this.name = n.id;
      }
      n.prototype.setupOnce = function () {
        Object(u['b'])(function (e) {
          if (Object(f['b'])().getIntegration(n)) {
            if (!Ae.navigator || !Ae.location) return e;
            var t = e.request || {};
            t.url = t.url || Ae.location.href;
            t.headers = t.headers || {};
            t.headers['User-Agent'] = Ae.navigator.userAgent;
            return _['__assign']({}, e, { request: t });
          }
          return e;
        });
      };
      n.id = 'UserAgent';
      return n;
    })();
    var De = [
      new r.InboundFilters(),
      new r.FunctionToString(),
      new Te(),
      new xe(),
      new Ie(),
      new Pe(),
      new Le(),
    ];
    function Ne(e) {
      void 0 === e && (e = {});
      void 0 === e.defaultIntegrations && (e.defaultIntegrations = De);
      if (void 0 === e.release) {
        var t = Object(A['i'])();
        t.SENTRY_RELEASE &&
          t.SENTRY_RELEASE.id &&
          (e.release = t.SENTRY_RELEASE.id);
      }
      be(he, e);
    }
    function Me(e) {
      void 0 === e && (e = {});
      e.eventId || (e.eventId = Object(f['b'])().lastEventId());
      var t = Object(f['b'])().getClient();
      t && t.showReportDialog(e);
    }
    function Be() {
      return Object(f['b'])().lastEventId();
    }
    function Ue() {}
    function Fe(e) {
      e();
    }
    function qe(e) {
      var t = Object(f['b'])().getClient();
      if (t) return t.flush(e);
      return C['a'].reject(false);
    }
    function He(e) {
      var t = Object(f['b'])().getClient();
      if (t) return t.close(e);
      return C['a'].reject(false);
    }
    function ze(e) {
      return Oe(e)();
    }
    var Ye = {};
    var We = Object(A['i'])();
    We.Sentry && We.Sentry.Integrations && (Ye = We.Sentry.Integrations);
    var Ve = _['__assign']({}, Ye, r, i);
  },
  1612: function (e, t) {
    var n = {
      MAIN_CONTENT: 1,
      CONTENT_COLLECTION: 1,
      PAGE: 2,
      SPLASH_PAGE: 3,
      CONTENT_ITEM: 50,
      NOT_FOUND: 100,
      ERROR: 101,
      SEARCH: 102,
      LOCK_SCREEN: 103,
      POPUP_OVERLAY: 104,
      PROTECTED_CONTENT: 105,
      MEMBER_AREA_ACCESS_DENIED: 106,
      SHOW_CART: 200,
      CHECKOUT: 201,
      ORDER_CONFIRMED: 202,
      DONATE: 203,
      CONTRIBUTION_CONFIRMED: 204,
      COMMERCE_CART_V2: 205,
      SUBSCRIPTION_CONFIRMED: 206,
      ORDER_RECEIVED: 207,
      MEMBERSHIP_CONFIRMED: 208,
      NEWSLETTER_UNSUBSCRIBE: 300,
      COMMERCE_EMAIL_PREVIEW: 301,
    };
    e.exports = n;
  },
  2: function (e, t) {
    function n(e, t, n) {
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true,
          })
        : (e[t] = n);
      return e;
    }
    e.exports = n;
  },
  2573: function (n, r, e) {
    var i, o;
    (function (v) {
      'use strict';
      var e;
      var t;
      if ('undefined' !== typeof v) {
        e = v;
        t = e.ResourceTimingCompression;
      }
      var p = {};
      p.HOSTNAMES_REVERSED = true;
      p.INITIATOR_TYPES = {
        other: 0,
        img: 1,
        link: 2,
        script: 3,
        css: 4,
        xmlhttprequest: 5,
        html: 6,
        image: 7,
        beacon: 8,
        fetch: 9,
        iframe: 'a',
        subdocument: 'a',
        body: 'b',
        input: 'c',
        frame: 'a',
        object: 'd',
        video: 'e',
        audio: 'f',
        source: 'g',
        track: 'h',
        embed: 'i',
        eventsource: 'j',
        navigation: 6,
      };
      p.DEFAULT_XSS_BREAK_WORDS = [/(h)(ref)/gi, /(s)(rc)/gi, /(a)(ction)/gi];
      p.XSS_BREAK_DELIM = '\n';
      p.DEFAULT_URL_LIMIT = 500;
      p.SPECIAL_DATA_PREFIX = '*';
      p.SPECIAL_DATA_DIMENSION_TYPE = '0';
      p.SPECIAL_DATA_SIZE_TYPE = '1';
      p.SPECIAL_DATA_SCRIPT_TYPE = '2';
      p.SPECIAL_DATA_SCRIPT_ASYNC_ATTR = 1;
      p.SPECIAL_DATA_SCRIPT_DEFER_ATTR = 2;
      p.SPECIAL_DATA_SCRIPT_LOCAT_ATTR = 4;
      p.SPECIAL_DATA_SERVERTIMING_TYPE = '3';
      p.SPECIAL_DATA_LINK_ATTR_TYPE = '4';
      p.REL_TYPES = { prefetch: 1, preload: 2, prerender: 3, stylesheet: 4 };
      p.HOSTNAME_REGEX = /^(https?:\/\/)([^\/]+)(.*)/;
      p.trimUrls = [];
      p.xssBreakWords = p.DEFAULT_XSS_BREAK_WORDS;
      p.noConflict = function () {
        e.ResourceTimingCompression = t;
        return p;
      };
      p.convertToTrie = function (e) {
        var t = {},
          n,
          r,
          i,
          o,
          a,
          u,
          c,
          s;
        for (n in e) {
          if (!e.hasOwnProperty(n)) continue;
          r = n;
          for (i = 0; i < this.xssBreakWords.length; i++)
            r = r.replace(
              this.xssBreakWords[i],
              '$1' + p.XSS_BREAK_DELIM + '$2'
            );
          o = e[n];
          a = r.split('');
          c = t;
          for (i = 0; i < a.length; i++) {
            u = a[i];
            s = c[u];
            'undefined' === typeof s
              ? (c = c[u] = i === a.length - 1 ? o : {})
              : 'string' === typeof s
              ? (c = c[u] = { '|': s })
              : i === a.length - 1
              ? (c[u]['|'] = o)
              : (c = c[u]);
          }
        }
        return t;
      };
      p.optimizeTrie = function (e, t) {
        var n = 0,
          r,
          i,
          o;
        var a = [];
        for (r in e) e.hasOwnProperty(r) && a.push(r);
        for (var u = 0; u < a.length; u++) {
          r = a[u];
          if ('object' === typeof e[r]) {
            i = this.optimizeTrie(e[r], false);
            if (i) {
              delete e[r];
              if (r === p.XSS_BREAK_DELIM) {
                r = i.name;
                n++;
              } else r += i.name;
              e[r] = i.value;
            }
          }
          n++;
        }
        if (1 === n) {
          if (t) {
            o = {};
            o[r] = e[r];
            return o;
          }
          return { name: r, value: e[r] };
        }
        if (t) return e;
        return false;
      };
      p.trimTiming = function (e, t) {
        'number' !== typeof e && (e = 0);
        'number' !== typeof t && (t = 0);
        var n = Math.round(e || 0),
          r = Math.round(t || 0);
        return 0 === n ? 0 : n - r;
      };
      p.getNavStartTime = function (e) {
        var t = 0,
          n;
        if (!e) return t;
        try {
          n = e.location && e.location.href;
          'performance' in e &&
            e.performance &&
            e.performance.timing &&
            e.performance.timing.navigationStart &&
            (t = e.performance.timing.navigationStart);
        } catch (e) {}
        return t;
      };
      p.findPerformanceEntriesForFrame = function (e, t, n, r) {
        var i = [],
          o,
          a,
          u,
          c,
          s,
          f,
          l,
          d,
          p,
          v = {},
          h = {},
          _;
        'undefined' === typeof t && (t = true);
        'undefined' === typeof n && (n = 0);
        'undefined' === typeof r && (r = 0);
        if (r > 10) return i;
        try {
          u = this.getNavStartTime(e);
          _ = e.document.createElement('a');
          m(_, h, 'script');
          m(_, v, 'link');
          if (e.frames)
            for (o = 0; o < e.frames.length; o++) {
              c = this.getNavStartTime(e.frames[o]);
              s = 0;
              c > u && (s = n + (c - u));
              i = i.concat(
                this.findPerformanceEntriesForFrame(e.frames[o], false, s, ++r)
              );
            }
          try {
            d = e.location && e.location.href;
            if (
              !('performance' in e) ||
              !e.performance ||
              !e.performance.getEntriesByType
            )
              return i;
          } catch (e) {
            return i;
          }
          if (t) {
            a = e.performance.getEntriesByType('navigation');
            if (a && 1 === a.length) {
              f = a[0];
              i.push({
                name: e.location.href,
                startTime: 0,
                initiatorType: 'html',
                redirectStart: f.redirectStart,
                redirectEnd: f.redirectEnd,
                fetchStart: f.fetchStart,
                domainLookupStart: f.domainLookupStart,
                domainLookupEnd: f.domainLookupEnd,
                connectStart: f.connectStart,
                secureConnectionStart: f.secureConnectionStart,
                connectEnd: f.connectEnd,
                requestStart: f.requestStart,
                responseStart: f.responseStart,
                responseEnd: f.responseEnd,
                serverTiming: f.serverTiming || [],
              });
            } else if (e.performance.timing) {
              l = e.performance.timing;
              0 !== l.navigationStart &&
                l.responseEnd <= l.navigationStart + 36e5 &&
                i.push({
                  name: e.location.href,
                  startTime: 0,
                  initiatorType: 'html',
                  redirectStart: l.redirectStart
                    ? l.redirectStart - l.navigationStart
                    : 0,
                  redirectEnd: l.redirectEnd
                    ? l.redirectEnd - l.navigationStart
                    : 0,
                  fetchStart: l.fetchStart
                    ? l.fetchStart - l.navigationStart
                    : 0,
                  domainLookupStart: l.domainLookupStart
                    ? l.domainLookupStart - l.navigationStart
                    : 0,
                  domainLookupEnd: l.domainLookupEnd
                    ? l.domainLookupEnd - l.navigationStart
                    : 0,
                  connectStart: l.connectStart
                    ? l.connectStart - l.navigationStart
                    : 0,
                  secureConnectionStart: l.secureConnectionStart
                    ? l.secureConnectionStart - l.navigationStart
                    : 0,
                  connectEnd: l.connectEnd
                    ? l.connectEnd - l.navigationStart
                    : 0,
                  requestStart: l.requestStart
                    ? l.requestStart - l.navigationStart
                    : 0,
                  responseStart: l.responseStart
                    ? l.responseStart - l.navigationStart
                    : 0,
                  responseEnd: l.responseEnd
                    ? l.responseEnd - l.navigationStart
                    : 0,
                });
            }
          }
          var g = e.performance.getEntriesByType('resource');
          var y = [];
          for (o = 0; g && o < g.length; o++) {
            l = g[o];
            p = {
              name: l.name,
              initiatorType: l.initiatorType,
              startTime: l.startTime + n,
              redirectStart: l.redirectStart ? l.redirectStart + n : 0,
              redirectEnd: l.redirectEnd ? l.redirectEnd + n : 0,
              fetchStart: l.fetchStart ? l.fetchStart + n : 0,
              domainLookupStart: l.domainLookupStart
                ? l.domainLookupStart + n
                : 0,
              domainLookupEnd: l.domainLookupEnd ? l.domainLookupEnd + n : 0,
              connectStart: l.connectStart ? l.connectStart + n : 0,
              secureConnectionStart: l.secureConnectionStart
                ? l.secureConnectionStart + n
                : 0,
              connectEnd: l.connectEnd ? l.connectEnd + n : 0,
              requestStart: l.requestStart ? l.requestStart + n : 0,
              responseStart: l.responseStart ? l.responseStart + n : 0,
              responseEnd: l.responseEnd ? l.responseEnd + n : 0,
            };
            if (l.encodedBodySize || l.decodedBodySize || l.transferSize) {
              p.encodedBodySize = l.encodedBodySize;
              p.decodedBodySize = l.decodedBodySize;
              p.transferSize = l.transferSize;
            }
            l.serverTiming &&
              l.serverTiming.length &&
              (p.serverTiming = l.serverTiming);
            this.updateScriptFlags(h, l, p);
            this.updateLinkFlags(v, l, p);
            y.push(p);
          }
          i = i.concat(y);
        } catch (e) {
          return i;
        }
        return i;
      };
      p.updateScriptFlags = function (e, t, n) {
        if (
          ('script' === t.initiatorType || 'link' === t.initiatorType) &&
          e[t.name]
        ) {
          var r = e[t.name];
          n.scriptAttrs =
            (r.async ? p.SPECIAL_DATA_SCRIPT_ASYNC_ATTR : 0) |
            (r.defer ? p.SPECIAL_DATA_SCRIPT_DEFER_ATTR : 0);
          while (1 === r.nodeType && 'BODY' !== r.nodeName) r = r.parentNode;
          n.scriptAttrs |=
            'BODY' === r.nodeName ? p.SPECIAL_DATA_SCRIPT_LOCAT_ATTR : 0;
        }
      };
      p.updateLinkFlags = function (e, t, n) {
        'link' === t.initiatorType &&
          e[t.name] &&
          e[t.name].rel
            .split(/[\u0009\u000A\u000C\u000D\u0020]+/)
            .find(function (e) {
              e = e.toLowerCase();
              if (p.REL_TYPES[e]) {
                n.linkAttrs = p.REL_TYPES[e];
                return true;
              }
              return false;
            });
      };
      p.toBase36 = function (e) {
        if ('number' === typeof e && 0 !== e) return e.toString(36);
        return 'string' === typeof e ? e : '';
      };
      function m(t, n, e) {
        Array.prototype.forEach.call(
          t.ownerDocument.getElementsByTagName(e),
          function (e) {
            t.href =
              e.currentSrc || e.src || e.getAttribute('xlink:href') || e.href;
            t.href.match(/^https?:\/\//) && (n[t.href] = e);
          }
        );
      }
      p.getVisibleEntries = function (e) {
        if (!e) return {};
        var t = ['img', 'iframe', 'image'],
          s = {},
          f,
          l,
          d = e.document,
          p = d.createElement('A');
        f =
          void 0 !== e.pageXOffset
            ? e.pageXOffset
            : (d.documentElement || d.body.parentNode || d.body).scrollLeft;
        l =
          void 0 !== e.pageYOffset
            ? e.pageYOffset
            : (d.documentElement || d.body.parentNode || d.body).scrollTop;
        t.forEach(function (e) {
          var t = d.getElementsByTagName(e),
            n,
            r,
            i,
            o;
          for (r = 0; r < t.length; r++) {
            n = t[r];
            if (!n) continue;
            o =
              n.currentSrc ||
              n.src ||
              ('function' === typeof n.getAttribute && n.getAttribute('src')) ||
              n.getAttribute('xlink:href');
            p.href = o;
            o = p.href;
            if (!o || s[o]) continue;
            i = n.getBoundingClientRect();
            if ((i.height || n.offsetHeight) && (i.width || n.offsetWidth)) {
              s[o] = [
                i.height || n.offsetHeight,
                i.width || n.offsetWidth,
                Math.round(i.top + l),
                Math.round(i.left + f),
              ];
              if (!n.naturalHeight && !n.naturalWidth) continue;
              var a, u, c;
              if (
                n.currentSrc &&
                (n.srcset ||
                  (n.parentNode &&
                    n.parentNode.nodeName &&
                    'PICTURE' === n.parentNode.nodeName.toUpperCase()))
              ) {
                a = n.isConnected
                  ? n.ownerDocument.createElement('IMG')
                  : new v.Image();
                a.src = o;
              } else a = n;
              u = a.naturalHeight || n.naturalHeight;
              c = a.naturalWidth || n.naturalWidth;
              (!u && !c) || (s[o][0] === u && s[o][1] === c) || s[o].push(u, c);
            }
          }
        });
        return s;
      };
      p.inArray = function (e, t) {
        var n;
        if ('undefined' === typeof e || 'undefined' === typeof t || !t.length)
          return false;
        for (n = 0; n < t.length; n++) if (t[n] === e) return true;
        return false;
      };
      p.getFilteredResourceTiming = function (e, t, n, r) {
        var i = this.findPerformanceEntriesForFrame(e, true, 0, 0),
          o,
          a,
          u = this.getNavStartTime(e),
          c = {};
        if (!i || !i.length) return { entries: [] };
        var s = [];
        for (o = 0; o < i.length; o++) {
          a = i[o];
          if (
            0 === a.name.indexOf('about:') ||
            0 === a.name.indexOf('javascript:')
          )
            continue;
          if (t && u + a.startTime < t) continue;
          if (n && u + a.startTime > n) break;
          if (
            'undefined' !== typeof r &&
            '*' !== r &&
            r.length &&
            (!a.initiatorType || !this.inArray(a.initiatorType, r))
          )
            continue;
          p.accumulateServerTimingEntries(c, a.serverTiming);
          s.push(a);
        }
        var f = p.compressServerTiming(c);
        return {
          entries: s,
          serverTiming: { lookup: f, indexed: p.indexServerTiming(f) },
        };
      };
      p.compressSize = function (e) {
        var t, n, r, i;
        if (e.encodedBodySize || e.decodedBodySize || e.transferSize) {
          t = e.transferSize;
          n = e.encodedBodySize;
          r = e.decodedBodySize;
          i = [n, t ? t - n : '_', r - n];
          return i.map(this.toBase36).join(',').replace(/,+$/, '');
        }
        return '';
      };
      p.cleanupURL = function (e, t) {
        var n;
        if (!e || '[object Array]' === Object.prototype.toString.call(e))
          return '';
        if ('undefined' !== typeof t && e && e.length > t) {
          n = e.indexOf('?');
          e =
            -1 !== n && n < t
              ? e.substr(0, n) + '?...'
              : e.substr(0, t - 3) + '...';
        }
        return e;
      };
      p.trimUrl = function (e, t) {
        var n, r, i;
        if (e && t)
          for (n = 0; n < t.length; n++) {
            i = t[n];
            if ('string' === typeof i) {
              r = e.indexOf(i);
              if (-1 !== r) {
                e = e.substr(0, r + i.length) + '...';
                break;
              }
            } else
              i instanceof RegExp &&
                i.test(e) &&
                (e = e.replace(i, '$1') + '...');
          }
        return this.cleanupURL(e, p.DEFAULT_URL_LIMIT);
      };
      p.getResourceTiming = function (e, t, n, r) {
        'undefined' === typeof e && (e = v);
        var i = p.getFilteredResourceTiming(e, t, n);
        var o = i.entries,
          a = i.serverTiming;
        if (!o || !o.length) return {};
        return p.compressResourceTiming(e, o, a, r);
      };
      p.compressResourceTiming = function (e, t, o, n) {
        var r,
          i,
          a = {},
          u,
          c,
          s,
          f,
          l = {};
        n || (l = this.getVisibleEntries(e));
        for (r = 0; r < t.length; r++) {
          i = t[r];
          u = this.INITIATOR_TYPES[i.initiatorType];
          'undefined' === typeof u && (u = 0);
          f =
            u +
            [
              this.trimTiming(i.startTime, 0),
              this.trimTiming(i.responseEnd, i.startTime),
              this.trimTiming(i.responseStart, i.startTime),
              this.trimTiming(i.requestStart, i.startTime),
              this.trimTiming(i.connectEnd, i.startTime),
              this.trimTiming(i.secureConnectionStart, i.startTime),
              this.trimTiming(i.connectStart, i.startTime),
              this.trimTiming(i.domainLookupEnd, i.startTime),
              this.trimTiming(i.domainLookupStart, i.startTime),
              this.trimTiming(i.redirectEnd, i.startTime),
              this.trimTiming(i.redirectStart, i.startTime),
            ]
              .map(this.toBase36)
              .join(',')
              .replace(/,+$/, '');
          var d = this.compressSize(i);
          '' !== d &&
            (f += p.SPECIAL_DATA_PREFIX + p.SPECIAL_DATA_SIZE_TYPE + d);
          i.hasOwnProperty('scriptAttrs') &&
            (f +=
              p.SPECIAL_DATA_PREFIX +
              p.SPECIAL_DATA_SCRIPT_TYPE +
              i.scriptAttrs);
          i.hasOwnProperty('linkAttrs') &&
            (f +=
              p.SPECIAL_DATA_PREFIX +
              p.SPECIAL_DATA_LINK_ATTR_TYPE +
              i.linkAttrs);
          i.serverTiming &&
            i.serverTiming.length &&
            (f +=
              p.SPECIAL_DATA_PREFIX +
              p.SPECIAL_DATA_SERVERTIMING_TYPE +
              i.serverTiming.reduce(function (e, t, n) {
                var r = String(t.duration);
                '0.' === r.substring(0, 2) && (r = r.substring(1));
                var i = p.identifyServerTimingEntry(
                  o.indexed[t.name].index,
                  o.indexed[t.name].descriptions[t.description]
                );
                e += (n > 0 ? ',' : '') + r + i;
                return e;
              }, ''));
          s = c = this.trimUrl(i.name, this.trimUrls);
          p.HOSTNAMES_REVERSED && (s = this.reverseHostname(c));
          void 0 !== a[s]
            ? (a[s] += '|' + f)
            : void 0 !== l[c]
            ? (a[s] =
                p.SPECIAL_DATA_PREFIX +
                p.SPECIAL_DATA_DIMENSION_TYPE +
                l[c].map(this.toBase36).join(',').replace(/,+$/, '') +
                '|' +
                f)
            : (a[s] = f);
        }
        return {
          restiming: this.optimizeTrie(this.convertToTrie(a), true),
          servertiming: o.lookup,
        };
      };
      p.reverseHostname = function (e) {
        return e.replace(p.HOSTNAME_REGEX, function (e, t, n, r) {
          return t + p.reverseString(n) + r;
        });
      };
      p.reverseString = function (e) {
        var t = e.length,
          n = '';
        while (t--) n += e[t];
        return n;
      };
      p.accumulateServerTimingEntries = function (n, e) {
        (e || []).forEach(function (e) {
          'undefined' === typeof n[e.name] &&
            (n[e.name] = { count: 0, counts: {} });
          var t = n[e.name];
          t.counts[e.description] = t.counts[e.description] || 0;
          t.counts[e.description]++;
          t.count++;
        });
      };
      p.compressServerTiming = function (r) {
        return Object.keys(r)
          .sort(function (e, t) {
            return r[t].count - r[e].count;
          })
          .reduce(function (e, n) {
            var t = Object.keys(r[n].counts).sort(function (e, t) {
              return r[n].counts[t] - r[n].counts[e];
            });
            e.push(1 === t.length && '' === t[0] ? n : [n].concat(t));
            return e;
          }, []);
      };
      p.indexServerTiming = function (e) {
        return e.reduce(function (e, t, n) {
          var r, i;
          if (Array.isArray(t)) {
            r = t[0];
            i = t.slice(1).reduce(function (e, t, n) {
              e[t] = n;
              return e;
            }, {});
          } else {
            r = t;
            i = { '': 0 };
          }
          e[r] = { index: n, descriptions: i };
          return e;
        }, {});
      };
      p.identifyServerTimingEntry = function (e, t) {
        var n = '';
        e && (n += e);
        t && (n += '.' + t);
        n.length && (n = ':' + n);
        return n;
      };
      true;
      !((i = []),
      (o = function () {
        return p;
      }.apply(r, i)),
      void 0 !== o && (n.exports = o));
    })('undefined' !== typeof window ? window : void 0);
  },
  2574: function (e, t) {
    e.exports = (function (n) {
      var r = {};
      function i(e) {
        if (r[e]) return r[e].exports;
        var t = (r[e] = { i: e, l: false, exports: {} });
        n[e].call(t.exports, t, t.exports, i);
        t.l = true;
        return t.exports;
      }
      i.m = n;
      i.c = r;
      i.d = function (e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, { enumerable: true, get: n });
      };
      i.r = function (e) {
        'undefined' !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' });
        Object.defineProperty(e, '__esModule', { value: true });
      };
      i.t = function (t, e) {
        1 & e && (t = i(t));
        if (8 & e) return t;
        if (4 & e && 'object' === typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        i.r(n);
        Object.defineProperty(n, 'default', { enumerable: true, value: t });
        if (2 & e && 'string' != typeof t)
          for (var r in t)
            i.d(
              n,
              r,
              function (e) {
                return t[e];
              }.bind(null, r)
            );
        return n;
      };
      i.n = function (t) {
        var e =
          t && t.__esModule
            ? function e() {
                return t['default'];
              }
            : function e() {
                return t;
              };
        i.d(e, 'a', e);
        return e;
      };
      i.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      };
      i.p = '';
      return i((i.s = 14));
    })([
      function (e, d, p) {
        'use strict';
        (function (t) {
          var e = p(3);
          var n = setTimeout;
          function r() {}
          function i(e, t) {
            return function () {
              e.apply(t, arguments);
            };
          }
          function o(e) {
            if (!(this instanceof o))
              throw new TypeError('Promises must be constructed via new');
            if ('function' !== typeof e) throw new TypeError('not a function');
            this._state = 0;
            this._handled = false;
            this._value = void 0;
            this._deferreds = [];
            l(e, this);
          }
          function a(n, r) {
            while (3 === n._state) n = n._value;
            if (0 === n._state) {
              n._deferreds.push(r);
              return;
            }
            n._handled = true;
            o._immediateFn(function () {
              var e = 1 === n._state ? r.onFulfilled : r.onRejected;
              if (null === e) {
                (1 === n._state ? u : c)(r.promise, n._value);
                return;
              }
              var t;
              try {
                t = e(n._value);
              } catch (e) {
                c(r.promise, e);
                return;
              }
              u(r.promise, t);
            });
          }
          function u(t, e) {
            try {
              if (e === t)
                throw new TypeError(
                  'A promise cannot be resolved with itself.'
                );
              if (e && ('object' === typeof e || 'function' === typeof e)) {
                var n = e.then;
                if (e instanceof o) {
                  t._state = 3;
                  t._value = e;
                  s(t);
                  return;
                }
                if ('function' === typeof n) {
                  l(i(n, e), t);
                  return;
                }
              }
              t._state = 1;
              t._value = e;
              s(t);
            } catch (e) {
              c(t, e);
            }
          }
          function c(e, t) {
            e._state = 2;
            e._value = t;
            s(e);
          }
          function s(e) {
            2 === e._state &&
              0 === e._deferreds.length &&
              o._immediateFn(function () {
                e._handled || o._unhandledRejectionFn(e._value);
              });
            for (var t = 0, n = e._deferreds.length; t < n; t++)
              a(e, e._deferreds[t]);
            e._deferreds = null;
          }
          function f(e, t, n) {
            this.onFulfilled = 'function' === typeof e ? e : null;
            this.onRejected = 'function' === typeof t ? t : null;
            this.promise = n;
          }
          function l(e, t) {
            var n = false;
            try {
              e(
                function (e) {
                  if (n) return;
                  n = true;
                  u(t, e);
                },
                function (e) {
                  if (n) return;
                  n = true;
                  c(t, e);
                }
              );
            } catch (e) {
              if (n) return;
              n = true;
              c(t, e);
            }
          }
          o.prototype['catch'] = function (e) {
            return this.then(null, e);
          };
          o.prototype.then = function (e, t) {
            var n = new this.constructor(r);
            a(this, new f(e, t, n));
            return n;
          };
          o.prototype['finally'] = e['a'];
          o.all = function (t) {
            return new o(function (r, i) {
              if (!t || 'undefined' === typeof t.length)
                throw new TypeError('Promise.all accepts an array');
              var o = Array.prototype.slice.call(t);
              if (0 === o.length) return r([]);
              var a = o.length;
              function u(t, e) {
                try {
                  if (e && ('object' === typeof e || 'function' === typeof e)) {
                    var n = e.then;
                    if ('function' === typeof n) {
                      n.call(
                        e,
                        function (e) {
                          u(t, e);
                        },
                        i
                      );
                      return;
                    }
                  }
                  o[t] = e;
                  0 === --a && r(o);
                } catch (e) {
                  i(e);
                }
              }
              for (var e = 0; e < o.length; e++) u(e, o[e]);
            });
          };
          o.resolve = function (t) {
            if (t && 'object' === typeof t && t.constructor === o) return t;
            return new o(function (e) {
              e(t);
            });
          };
          o.reject = function (n) {
            return new o(function (e, t) {
              t(n);
            });
          };
          o.race = function (i) {
            return new o(function (e, t) {
              for (var n = 0, r = i.length; n < r; n++) i[n].then(e, t);
            });
          };
          o._immediateFn =
            ('function' === typeof t &&
              function (e) {
                t(e);
              }) ||
            function (e) {
              n(e, 0);
            };
          o._unhandledRejectionFn = function e(t) {
            'undefined' !== typeof console &&
              console &&
              console.warn('Possible Unhandled Promise Rejection:', t);
          };
          d['a'] = o;
        }.call(this, p(7).setImmediate));
      },
      function (e, t) {
        var u = /^([^=]+)=([^;]*)$/;
        var t = (e.exports = function (o, e) {
          o = o || {};
          'string' === typeof o && (o = { cookie: o });
          void 0 === o.cookie && (o.cookie = '');
          false !== e && (e = true);
          var t = function (e) {
            return e;
          };
          var i = e ? escape : t;
          var a = e ? unescape : t;
          var n = {};
          n.get = function (e) {
            var t = o.cookie.split(/;\s*/);
            for (var n = 0; n < t.length; n++) {
              var r = (t[n] || '').match(u) || [];
              var i = a(r[1] || '');
              if (i === e) return a(r[2] || '');
            }
            return;
          };
          n.set = function (e, t, n) {
            n = n || {};
            var r = i(e) + '=' + i(t);
            n.expires && (r += '; expires=' + n.expires);
            n.path && (r += '; path=' + i(n.path));
            n.domain && (r += '; domain=' + i(n.domain));
            n.secure && (r += '; secure');
            o.cookie = r;
            return r;
          };
          return n;
        });
        if ('undefined' !== typeof document) {
          var n = t(document);
          t.get = n.get;
          t.set = n.set;
        }
      },
      function (e, t) {
        var n;
        n = (function () {
          return this;
        })();
        try {
          n = n || new Function('return this')();
        } catch (e) {
          'object' === typeof window && (n = window);
        }
        e.exports = n;
      },
      function (e, t, n) {
        'use strict';
        function r(t) {
          var n = this.constructor;
          return this.then(
            function (e) {
              return n.resolve(t()).then(function () {
                return e;
              });
            },
            function (e) {
              return n.resolve(t()).then(function () {
                return n.reject(e);
              });
            }
          );
        }
        t['a'] = r;
      },
      function (e, t, n) {
        'use strict';
        t.decode = t.parse = n(10);
        t.encode = t.stringify = n(11);
      },
      function (e, t, n) {
        var a = n(12);
        var u = n(13);
        function r(e, t, n) {
          var r = (t && n) || 0;
          if ('string' == typeof e) {
            t = 'binary' === e ? new Array(16) : null;
            e = null;
          }
          e = e || {};
          var i = e.random || (e.rng || a)();
          i[6] = (15 & i[6]) | 64;
          i[8] = (63 & i[8]) | 128;
          if (t) for (var o = 0; o < 16; ++o) t[r + o] = i[o];
          return t || u(i);
        }
        e.exports = r;
      },
      function (e, t) {
        e.exports = (function (n) {
          var r = {};
          function i(e) {
            if (r[e]) return r[e].exports;
            var t = (r[e] = { i: e, l: false, exports: {} });
            n[e].call(t.exports, t, t.exports, i);
            t.l = true;
            return t.exports;
          }
          i.m = n;
          i.c = r;
          i.d = function (e, t, n) {
            i.o(e, t) ||
              Object.defineProperty(e, t, { enumerable: true, get: n });
          };
          i.r = function (e) {
            'undefined' !== typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' });
            Object.defineProperty(e, '__esModule', { value: true });
          };
          i.t = function (t, e) {
            1 & e && (t = i(t));
            if (8 & e) return t;
            if (4 & e && 'object' === typeof t && t && t.__esModule) return t;
            var n = Object.create(null);
            i.r(n);
            Object.defineProperty(n, 'default', { enumerable: true, value: t });
            if (2 & e && 'string' != typeof t)
              for (var r in t)
                i.d(
                  n,
                  r,
                  function (e) {
                    return t[e];
                  }.bind(null, r)
                );
            return n;
          };
          i.n = function (t) {
            var e =
              t && t.__esModule
                ? function e() {
                    return t['default'];
                  }
                : function e() {
                    return t;
                  };
            i.d(e, 'a', e);
            return e;
          };
          i.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          };
          i.p = '';
          return i((i.s = 0));
        })([
          function (e, t, n) {
            'use strict';
            Object.defineProperty(t, '__esModule', { value: true });
            t.getSessionInfo = p;
            var r = n(1);
            var o = u(r);
            var i = n(4);
            var a = u(i);
            function u(e) {
              return e && e.__esModule ? e : { default: e };
            }
            var c = 'SS_IS_FIRST_SESSION';
            var s = 'SS_HAS_LANDED';
            var f = 'SS_SESSION_ID';
            var l = ['squarespace.com', 'squarespace.net', 'sqsp.net'];
            var d = function e(t, n) {
              var r = void 0;
              l.forEach(function (e) {
                window.location.hostname.indexOf(e) > -1 && (r = e);
              });
              r = r || window.location.hostname;
              a.default.set(t, n, {
                domain: r,
                path: '/',
                secure: window.location.protocol.indexOf('https') > -1,
              });
            };
            function p() {
              if ('undefined' === typeof window) return;
              if (window._sessionInfo) return window._sessionInfo;
              try {
                var e = localStorage.getItem(s);
                var t = sessionStorage.getItem(c);
                var n = null === t;
                var r = null === e || 'true' === t;
                var i = a.default.get(f);
                localStorage.setItem(s, 'true');
                n &&
                  (r
                    ? sessionStorage.setItem(c, 'true')
                    : sessionStorage.setItem(c, 'false'));
                if (!i) {
                  i = (0, o.default)();
                  d(f, i);
                }
                window._sessionInfo = {
                  isFirstLanding: n,
                  isFirstSession: r,
                  sessionId: i,
                };
                return window._sessionInfo;
              } catch (e) {
                console.warn('Unable access local/session storage.');
                return { isFirstLanding: false, isFirstSession: false };
              }
            }
          },
          function (e, t, n) {
            var a = n(2);
            var u = n(3);
            function r(e, t, n) {
              var r = (t && n) || 0;
              if ('string' == typeof e) {
                t = 'binary' === e ? new Array(16) : null;
                e = null;
              }
              e = e || {};
              var i = e.random || (e.rng || a)();
              i[6] = (15 & i[6]) | 64;
              i[8] = (63 & i[8]) | 128;
              if (t) for (var o = 0; o < 16; ++o) t[r + o] = i[o];
              return t || u(i);
            }
            e.exports = r;
          },
          function (e, t) {
            var n =
              ('undefined' != typeof crypto &&
                crypto.getRandomValues &&
                crypto.getRandomValues.bind(crypto)) ||
              ('undefined' != typeof msCrypto &&
                'function' == typeof window.msCrypto.getRandomValues &&
                msCrypto.getRandomValues.bind(msCrypto));
            if (n) {
              var r = new Uint8Array(16);
              e.exports = function e() {
                n(r);
                return r;
              };
            } else {
              var i = new Array(16);
              e.exports = function e() {
                for (var t = 0, n; t < 16; t++) {
                  0 === (3 & t) && (n = 4294967296 * Math.random());
                  i[t] = (n >>> ((3 & t) << 3)) & 255;
                }
                return i;
              };
            }
          },
          function (e, t) {
            var i = [];
            for (var n = 0; n < 256; ++n)
              i[n] = (n + 256).toString(16).substr(1);
            function r(e, t) {
              var n = t || 0;
              var r = i;
              return [
                r[e[n++]],
                r[e[n++]],
                r[e[n++]],
                r[e[n++]],
                '-',
                r[e[n++]],
                r[e[n++]],
                '-',
                r[e[n++]],
                r[e[n++]],
                '-',
                r[e[n++]],
                r[e[n++]],
                '-',
                r[e[n++]],
                r[e[n++]],
                r[e[n++]],
                r[e[n++]],
                r[e[n++]],
                r[e[n++]],
              ].join('');
            }
            e.exports = r;
          },
          function (e, t) {
            var u = /^([^=]+)=([^;]*)$/;
            var t = (e.exports = function (o, e) {
              o = o || {};
              'string' === typeof o && (o = { cookie: o });
              void 0 === o.cookie && (o.cookie = '');
              false !== e && (e = true);
              var t = function (e) {
                return e;
              };
              var i = e ? escape : t;
              var a = e ? unescape : t;
              var n = {};
              n.get = function (e) {
                var t = o.cookie.split(/;\s*/);
                for (var n = 0; n < t.length; n++) {
                  var r = (t[n] || '').match(u) || [];
                  var i = a(r[1] || '');
                  if (i === e) return a(r[2] || '');
                }
                return;
              };
              n.set = function (e, t, n) {
                n = n || {};
                var r = i(e) + '=' + i(t);
                n.expires && (r += '; expires=' + n.expires);
                n.path && (r += '; path=' + i(n.path));
                n.domain && (r += '; domain=' + i(n.domain));
                n.secure && (r += '; secure');
                o.cookie = r;
                return r;
              };
              return n;
            });
            if ('undefined' !== typeof document) {
              var n = t(document);
              t.get = n.get;
              t.set = n.set;
            }
          },
        ]);
      },
      function (e, i, o) {
        (function (e) {
          var t =
            ('undefined' !== typeof e && e) ||
            ('undefined' !== typeof self && self) ||
            window;
          var n = Function.prototype.apply;
          i.setTimeout = function () {
            return new r(n.call(setTimeout, t, arguments), clearTimeout);
          };
          i.setInterval = function () {
            return new r(n.call(setInterval, t, arguments), clearInterval);
          };
          i.clearTimeout = i.clearInterval = function (e) {
            e && e.close();
          };
          function r(e, t) {
            this._id = e;
            this._clearFn = t;
          }
          r.prototype.unref = r.prototype.ref = function () {};
          r.prototype.close = function () {
            this._clearFn.call(t, this._id);
          };
          i.enroll = function (e, t) {
            clearTimeout(e._idleTimeoutId);
            e._idleTimeout = t;
          };
          i.unenroll = function (e) {
            clearTimeout(e._idleTimeoutId);
            e._idleTimeout = -1;
          };
          i._unrefActive = i.active = function (t) {
            clearTimeout(t._idleTimeoutId);
            var e = t._idleTimeout;
            e >= 0 &&
              (t._idleTimeoutId = setTimeout(function e() {
                t._onTimeout && t._onTimeout();
              }, e));
          };
          o(8);
          i.setImmediate =
            ('undefined' !== typeof self && self.setImmediate) ||
            ('undefined' !== typeof e && e.setImmediate) ||
            (this && this.setImmediate);
          i.clearImmediate =
            ('undefined' !== typeof self && self.clearImmediate) ||
            ('undefined' !== typeof e && e.clearImmediate) ||
            (this && this.clearImmediate);
        }.call(this, o(2)));
      },
      function (e, t, n) {
        (function (e, y) {
          (function (n, r) {
            'use strict';
            if (n.setImmediate) return;
            var i = 1;
            var o = {};
            var a = false;
            var u = n.document;
            var c;
            function e(e) {
              'function' !== typeof e && (e = new Function('' + e));
              var t = new Array(arguments.length - 1);
              for (var n = 0; n < t.length; n++) t[n] = arguments[n + 1];
              var r = { callback: e, args: t };
              o[i] = r;
              c(i);
              return i++;
            }
            function s(e) {
              delete o[e];
            }
            function f(e) {
              var t = e.callback;
              var n = e.args;
              switch (n.length) {
                case 0:
                  t();
                  break;
                case 1:
                  t(n[0]);
                  break;
                case 2:
                  t(n[0], n[1]);
                  break;
                case 3:
                  t(n[0], n[1], n[2]);
                  break;
                default:
                  t.apply(r, n);
                  break;
              }
            }
            function l(e) {
              if (a) setTimeout(l, 0, e);
              else {
                var t = o[e];
                if (t) {
                  a = true;
                  try {
                    f(t);
                  } finally {
                    s(e);
                    a = false;
                  }
                }
              }
            }
            function t() {
              c = function (e) {
                y.nextTick(function () {
                  l(e);
                });
              };
            }
            function d() {
              if (n.postMessage && !n.importScripts) {
                var e = true;
                var t = n.onmessage;
                n.onmessage = function () {
                  e = false;
                };
                n.postMessage('', '*');
                n.onmessage = t;
                return e;
              }
            }
            function p() {
              var t = 'setImmediate$' + Math.random() + '$';
              var e = function (e) {
                e.source === n &&
                  'string' === typeof e.data &&
                  0 === e.data.indexOf(t) &&
                  l(+e.data.slice(t.length));
              };
              n.addEventListener
                ? n.addEventListener('message', e, false)
                : n.attachEvent('onmessage', e);
              c = function (e) {
                n.postMessage(t + e, '*');
              };
            }
            function v() {
              var t = new MessageChannel();
              t.port1.onmessage = function (e) {
                var t = e.data;
                l(t);
              };
              c = function (e) {
                t.port2.postMessage(e);
              };
            }
            function h() {
              var n = u.documentElement;
              c = function (e) {
                var t = u.createElement('script');
                t.onreadystatechange = function () {
                  l(e);
                  t.onreadystatechange = null;
                  n.removeChild(t);
                  t = null;
                };
                n.appendChild(t);
              };
            }
            function _() {
              c = function (e) {
                setTimeout(l, 0, e);
              };
            }
            var g = Object.getPrototypeOf && Object.getPrototypeOf(n);
            g = g && g.setTimeout ? g : n;
            '[object process]' === {}.toString.call(n.process)
              ? t()
              : d()
              ? p()
              : n.MessageChannel
              ? v()
              : u && 'onreadystatechange' in u.createElement('script')
              ? h()
              : _();
            g.setImmediate = e;
            g.clearImmediate = s;
          })(
            'undefined' === typeof self
              ? 'undefined' === typeof e
                ? this
                : e
              : self
          );
        }.call(this, n(2), n(9)));
      },
      function (e, t) {
        var n = (e.exports = {});
        var r;
        var i;
        function o() {
          throw new Error('setTimeout has not been defined');
        }
        function a() {
          throw new Error('clearTimeout has not been defined');
        }
        (function () {
          try {
            r = 'function' === typeof setTimeout ? setTimeout : o;
          } catch (e) {
            r = o;
          }
          try {
            i = 'function' === typeof clearTimeout ? clearTimeout : a;
          } catch (e) {
            i = a;
          }
        })();
        function u(t) {
          if (r === setTimeout) return setTimeout(t, 0);
          if ((r === o || !r) && setTimeout) {
            r = setTimeout;
            return setTimeout(t, 0);
          }
          try {
            return r(t, 0);
          } catch (e) {
            try {
              return r.call(null, t, 0);
            } catch (e) {
              return r.call(this, t, 0);
            }
          }
        }
        function c(t) {
          if (i === clearTimeout) return clearTimeout(t);
          if ((i === a || !i) && clearTimeout) {
            i = clearTimeout;
            return clearTimeout(t);
          }
          try {
            return i(t);
          } catch (e) {
            try {
              return i.call(null, t);
            } catch (e) {
              return i.call(this, t);
            }
          }
        }
        var s = [];
        var f = false;
        var l;
        var d = -1;
        function p() {
          if (!f || !l) return;
          f = false;
          l.length ? (s = l.concat(s)) : (d = -1);
          s.length && v();
        }
        function v() {
          if (f) return;
          var e = u(p);
          f = true;
          var t = s.length;
          while (t) {
            l = s;
            s = [];
            while (++d < t) l && l[d].run();
            d = -1;
            t = s.length;
          }
          l = null;
          f = false;
          c(e);
        }
        n.nextTick = function (e) {
          var t = new Array(arguments.length - 1);
          if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          s.push(new h(e, t));
          1 !== s.length || f || u(v);
        };
        function h(e, t) {
          this.fun = e;
          this.array = t;
        }
        h.prototype.run = function () {
          this.fun.apply(null, this.array);
        };
        n.title = 'browser';
        n.browser = true;
        n.env = {};
        n.argv = [];
        n.version = '';
        n.versions = {};
        function _() {}
        n.on = _;
        n.addListener = _;
        n.once = _;
        n.off = _;
        n.removeListener = _;
        n.removeAllListeners = _;
        n.emit = _;
        n.prependListener = _;
        n.prependOnceListener = _;
        n.listeners = function (e) {
          return [];
        };
        n.binding = function (e) {
          throw new Error('process.binding is not supported');
        };
        n.cwd = function () {
          return '/';
        };
        n.chdir = function (e) {
          throw new Error('process.chdir is not supported');
        };
        n.umask = function () {
          return 0;
        };
      },
      function (e, t, n) {
        'use strict';
        function h(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }
        e.exports = function (e, t, n, r) {
          t = t || '&';
          n = n || '=';
          var i = {};
          if ('string' !== typeof e || 0 === e.length) return i;
          var o = /\+/g;
          e = e.split(t);
          var a = 1e3;
          r && 'number' === typeof r.maxKeys && (a = r.maxKeys);
          var u = e.length;
          a > 0 && u > a && (u = a);
          for (var c = 0; c < u; ++c) {
            var s = e[c].replace(o, '%20'),
              f = s.indexOf(n),
              l,
              d,
              p,
              v;
            if (f >= 0) {
              l = s.substr(0, f);
              d = s.substr(f + 1);
            } else {
              l = s;
              d = '';
            }
            p = decodeURIComponent(l);
            v = decodeURIComponent(d);
            h(i, p)
              ? _(i[p])
                ? i[p].push(v)
                : (i[p] = [i[p], v])
              : (i[p] = v);
          }
          return i;
        };
        var _ =
          Array.isArray ||
          function (e) {
            return '[object Array]' === Object.prototype.toString.call(e);
          };
      },
      function (e, t, n) {
        'use strict';
        var o = function (e) {
          switch (typeof e) {
            case 'string':
              return e;
            case 'boolean':
              return e ? 'true' : 'false';
            case 'number':
              return isFinite(e) ? e : '';
            default:
              return '';
          }
        };
        e.exports = function (n, r, i, e) {
          r = r || '&';
          i = i || '=';
          null === n && (n = void 0);
          if ('object' === typeof n)
            return u(c(n), function (e) {
              var t = encodeURIComponent(o(e)) + i;
              return a(n[e])
                ? u(n[e], function (e) {
                    return t + encodeURIComponent(o(e));
                  }).join(r)
                : t + encodeURIComponent(o(n[e]));
            }).join(r);
          if (!e) return '';
          return encodeURIComponent(o(e)) + i + encodeURIComponent(o(n));
        };
        var a =
          Array.isArray ||
          function (e) {
            return '[object Array]' === Object.prototype.toString.call(e);
          };
        function u(e, t) {
          if (e.map) return e.map(t);
          var n = [];
          for (var r = 0; r < e.length; r++) n.push(t(e[r], r));
          return n;
        }
        var c =
          Object.keys ||
          function (e) {
            var t = [];
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
            return t;
          };
      },
      function (e, t) {
        var n =
          ('undefined' != typeof crypto &&
            crypto.getRandomValues &&
            crypto.getRandomValues.bind(crypto)) ||
          ('undefined' != typeof msCrypto &&
            'function' == typeof window.msCrypto.getRandomValues &&
            msCrypto.getRandomValues.bind(msCrypto));
        if (n) {
          var r = new Uint8Array(16);
          e.exports = function e() {
            n(r);
            return r;
          };
        } else {
          var i = new Array(16);
          e.exports = function e() {
            for (var t = 0, n; t < 16; t++) {
              0 === (3 & t) && (n = 4294967296 * Math.random());
              i[t] = (n >>> ((3 & t) << 3)) & 255;
            }
            return i;
          };
        }
      },
      function (e, t) {
        var i = [];
        for (var n = 0; n < 256; ++n) i[n] = (n + 256).toString(16).substr(1);
        function r(e, t) {
          var n = t || 0;
          var r = i;
          return [
            r[e[n++]],
            r[e[n++]],
            r[e[n++]],
            r[e[n++]],
            '-',
            r[e[n++]],
            r[e[n++]],
            '-',
            r[e[n++]],
            r[e[n++]],
            '-',
            r[e[n++]],
            r[e[n++]],
            '-',
            r[e[n++]],
            r[e[n++]],
            r[e[n++]],
            r[e[n++]],
            r[e[n++]],
            r[e[n++]],
          ].join('');
        }
        e.exports = r;
      },
      function (e, t, n) {
        'use strict';
        n.r(t);
        n.d(t, 'ClientConfig', function () {
          return;
        });
        n.d(t, 'EventSource', function () {
          return f;
        });
        n.d(t, 'SourceEnvironment', function () {
          return s;
        });
        n.d(t, 'default', function () {
          return P;
        });
        var u = n(0);
        var r = n(1);
        var d = n.n(r);
        var i = n(4);
        var o = n.n(i);
        var a = n(5);
        var c = n.n(a);
        var s;
        (function (e) {
          e['DEV'] = 'dev';
          e['STAGING'] = 'staging';
          e['PROD'] = 'prod';
        })((s = s || {}));
        var f;
        (function (e) {
          e['WEB'] = 'WEB';
          e['IOS'] = 'IOS';
          e['ANDROID'] = 'ANDROID';
          e['SERVER'] = 'SERVER';
        })((f = f || {}));
        function l(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }
        function p(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || false;
            r.configurable = true;
            'value' in r && (r.writable = true);
            Object.defineProperty(e, r.key, r);
          }
        }
        function v(e, t, n) {
          t && p(e.prototype, t);
          n && p(e, n);
          return e;
        }
        function h(e, t, n) {
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: true,
                configurable: true,
                writable: true,
              })
            : (e[t] = n);
          return e;
        }
        var _ = (function () {
          function e() {
            l(this, e);
            h(this, '_analyticsId', void 0);
            h(this, '_config', void 0);
            h(this, '_defaultPayload', void 0);
          }
          v(e, [
            {
              key: 'track',
              value: function e() {
                var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                if (false === this._config.fireEvents) return u['a'].resolve();
                var n = this._generatePayload(t);
                if (this._config.validateMode) return this._validateEvent(n);
                if (!this._config.url) return u['a'].resolve();
                if (!n) return u['a'].reject(new Error('no payload'));
                return this._config.useBeacon
                  ? this._sendBeacon(n)
                  : this._sendXhr(n);
              },
            },
            {
              key: '_getAnalyticsId',
              value: function e() {
                var t = function e(t) {
                  return t && 'null' !== t ? t : null;
                };
                var n = t(d.a.get(this._config.storageKey));
                var r = t(this._getLocalStorageItem());
                var i = t(this._analyticsId);
                var o = n || r || i || c()();
                this._setAnalyticsId(o);
                return o;
              },
            },
            {
              key: '_getLocalStorageItem',
              value: function e() {
                var t = false;
                var n = localStorage.getItem(this._config.expirationKey);
                if (n) {
                  var r = new Date();
                  var i = new Date(n);
                  t = r > i;
                }
                if (t) {
                  localStorage.removeItem(this._config.storageKey);
                  localStorage.removeItem(this._config.expirationKey);
                  return null;
                }
                return localStorage.getItem(this._config.storageKey);
              },
            },
            {
              key: '_getNormalizedPathname',
              value: function e() {
                var t = window.location.pathname;
                '/' === t[t.length - 1] && (t = t.substring(0, t.length - 1));
                return t;
              },
            },
            {
              key: '_generatePayload',
              value: function e(t) {
                return t;
              },
            },
            {
              key: '_log',
              value: function e(t) {
                this._config.logging && console.log(t);
              },
            },
            {
              key: '_sendBeacon',
              value: function e(t) {
                var n = { type: 'application/x-www-form-urlencoded' };
                var r = new Blob([o.a.stringify(t)], n);
                navigator.sendBeacon(this._config.url, r);
                return u['a'].resolve();
              },
            },
            {
              key: '_sendXhr',
              value: function e(t, n) {
                var r = this;
                n = n || this._config.url;
                var i = new XMLHttpRequest();
                var o = JSON.stringify(t);
                var a = new Set([200, 202]);
                return new u['a'](function (e, t) {
                  i.open('POST', n, true);
                  i.setRequestHeader('Content-Type', 'application/json');
                  i.send(o);
                  i.addEventListener('readystatechange', function () {
                    if (4 !== i.readyState) return;
                    if (a.has(i.status)) e();
                    else {
                      r._warn(
                        'Error tracking event: HTTP Status '.concat(i.status)
                      );
                      t(
                        new Error(
                          'Error tracking event: HTTP Status '.concat(i.status)
                        )
                      );
                    }
                  });
                });
              },
            },
            {
              key: '_setAnalyticsId',
              value: function e(t) {
                this._analyticsId = t;
                var n = this._config.cookie,
                  r = n.path,
                  i = n.secure;
                var o = window.location.hostname;
                this._config.cookie.domains.forEach(function (e) {
                  window.location.hostname.indexOf(e) > -1 && (o = e);
                });
                var a = new Date();
                a.setDate(a.getDate() + this._config.cookie.daysToStore);
                var u = a.toUTCString();
                try {
                  d.a.set(this._config.storageKey, t, {
                    domain: o,
                    expires: u,
                    path: r,
                    secure: i,
                  });
                  var c =
                    document.cookie.indexOf(this._config.storageKey) !==
                    document.cookie.lastIndexOf(this._config.storageKey);
                  if (c) {
                    var s = new Date(0).toUTCString();
                    d.a.set(this._config.storageKey, null, { expires: s });
                  }
                  localStorage.setItem(this._config.storageKey, t);
                  localStorage.setItem(this._config.expirationKey, u);
                } catch (e) {
                  this._warn('Unable to store analyticsId');
                }
              },
            },
            {
              key: '_validateEvent',
              value: function e(t) {
                return u['a'].resolve(t);
              },
            },
            {
              key: '_warn',
              value: function e(t) {
                this._config.logging && console.warn(t);
              },
            },
          ]);
          return e;
        })();
        var g = n(6);
        var y = {
          actor: { type: 'string', nullable: false },
          action: { type: 'string', nullable: false },
          event_owner_team: { type: 'string', nullable: false },
          event_source: { type: 'string', nullable: false },
          object_type: { type: 'string', nullable: false },
          context_website_identifier: { type: 'string', nullable: true },
          destination_url: { type: 'string', nullable: true },
          object_identifier: { type: 'string', nullable: true },
          object_id: { type: 'string', nullable: true },
          object_display_name: { type: 'string', nullable: true },
          object_value: { type: 'string', nullable: true },
          indirect_object_identifier: { type: 'string', nullable: true },
          indirect_object_id: { type: 'string', nullable: true },
          indirect_object_display_name: { type: 'string', nullable: true },
          indirect_object_value: { type: 'string', nullable: true },
          indirect_object_type: { type: 'string', nullable: true },
          product_area: { type: 'string', nullable: true },
          product_page: { type: 'string', nullable: true },
          product_section: { type: 'string', nullable: true },
          product_design_identifier: { type: 'string', nullable: true },
          user_member_account_id: { type: 'string', nullable: true },
          user_session_id: { type: 'string', nullable: true },
        };
        var m = function e() {
          var t =
            window.location.hostname.indexOf('squarespace.com') > -1
              ? 'https://events.squarespace.com'
              : 'https://events.stage.sqsp.net';
          return {
            customSchemaName: null,
            fireEvents: true,
            logging: false,
            url: ''.concat(t, '/api/v1/events'),
            useBeacon: true,
            storageKey: 'SS_ANALYTICS_ID',
            expirationKey: 'SS_ANALYTICS_EXPIRATION',
            cookie: {
              daysToStore: 390,
              domains: ['squarespace.com', 'squarespace.net', 'sqsp.net'],
              path: '/',
              secure: window.location.protocol.indexOf('https') > -1,
            },
          };
        };
        function b(e) {
          b =
            'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
              ? function e(t) {
                  return typeof t;
                }
              : function e(t) {
                  return t &&
                    'function' === typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
                };
          return b(e);
        }
        function w() {
          w =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            };
          return w.apply(this, arguments);
        }
        function E(e, t) {
          if (!(e instanceof t))
            throw new TypeError('Cannot call a class as a function');
        }
        function S(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || false;
            r.configurable = true;
            'value' in r && (r.writable = true);
            Object.defineProperty(e, r.key, r);
          }
        }
        function O(e, t, n) {
          t && S(e.prototype, t);
          n && S(e, n);
          return e;
        }
        function T(e, t) {
          if ('function' !== typeof t && null !== t)
            throw new TypeError(
              'Super expression must either be null or a function'
            );
          e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: true, configurable: true },
          });
          t && j(e, t);
        }
        function j(e, t) {
          j =
            Object.setPrototypeOf ||
            function e(t, n) {
              t.__proto__ = n;
              return t;
            };
          return j(e, t);
        }
        function x(r) {
          return function () {
            var e = C(r),
              t;
            if (R()) {
              var n = C(this).constructor;
              t = Reflect.construct(e, arguments, n);
            } else t = e.apply(this, arguments);
            return k(this, t);
          };
        }
        function k(e, t) {
          if (t && ('object' === b(t) || 'function' === typeof t)) return t;
          return I(e);
        }
        function I(e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        }
        function R() {
          if ('undefined' === typeof Reflect || !Reflect.construct)
            return false;
          if (Reflect.construct.sham) return false;
          if ('function' === typeof Proxy) return true;
          try {
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            );
            return true;
          } catch (e) {
            return false;
          }
        }
        function C(e) {
          C = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function e(t) {
                return t.__proto__ || Object.getPrototypeOf(t);
              };
          return C(e);
        }
        var P = (function (e) {
          T(o, e);
          var i = x(o);
          function o(e) {
            var t;
            var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            E(this, o);
            t = i.call(this);
            var r = m();
            t._config = w(r, e);
            t._defaultPayload = n;
            'sendBeacon' in navigator || (t._config.useBeacon = false);
            return t;
          }
          O(o, [
            {
              key: '_generatePayload',
              value: function e(t) {
                var n = w({}, this._defaultPayload, t);
                var r = new Date();
                var i = Object(g['getSessionInfo'])();
                var o = {
                  analyticsId: this._getAnalyticsId(),
                  commonData: '',
                  customData: '',
                  customSchemaName: this._config.customSchemaName,
                };
                var a = {
                  browser_window_height: window.innerHeight,
                  browser_window_width: window.innerWidth,
                  browser_language: navigator.language,
                  page_host: window.location.hostname,
                  page_path: this._getNormalizedPathname(),
                  page_query_params: window.location.search,
                  page_referrer_url: document.referrer,
                  resolved_locale: document.documentElement.lang || 'en-US',
                  timestamp_client: r.getTime(),
                  user_marketing_id: d.a.get('SS_MID') || null,
                  user_session_id: i.sessionId || null,
                };
                var u = {};
                for (var c in n)
                  if (n.hasOwnProperty(c)) {
                    var s = n[c];
                    if (y.hasOwnProperty(c)) {
                      var f = y[c];
                      if (b(s) === f.type || (f.nullable && null === s)) {
                        a[c] = s;
                        this._log(
                          'common field '.concat(c, ' set successfully')
                        );
                      } else
                        this._warn(
                          'common field '.concat(
                            c,
                            ' was not set or was the incorrect type'
                          )
                        );
                    } else {
                      u[c] = s;
                      this._log('custom field '.concat(c, ' set successfully'));
                    }
                  }
                var l = window.Static && window.Static.SQUARESPACE_CONTEXT;
                if (l && l.website) {
                  a.context_website_id = l.website.id;
                  a.user_website_id = l.website.id;
                }
                l &&
                  l.templateId &&
                  (a.context_template_website_id = l.templateId);
                l &&
                  l.authenticatedAccount &&
                  (a.user_member_account_id = l.authenticatedAccount.id);
                o.commonData = JSON.stringify(a);
                o.customData = JSON.stringify(u);
                return o;
              },
            },
            {
              key: 'spawnTracker',
              value: function e() {
                var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                var n = w({}, this._defaultPayload, t);
                return new o(this._config, n);
              },
            },
          ]);
          return o;
        })(_);
      },
    ]);
  },
  282: function (e, y, m) {
    'use strict';
    (function (n) {
      m.d(y, 'c', function () {
        return e;
      });
      m.d(y, 'f', function () {
        return t;
      });
      m.d(y, 'e', function () {
        return u;
      });
      m.d(y, 'g', function () {
        return v;
      });
      m.d(y, 'd', function () {
        return h;
      });
      m.d(y, 'b', function () {
        return _;
      });
      m.d(y, 'a', function () {
        return g;
      });
      var c = m(13);
      var s = m(119);
      var f = m(1270);
      var a = m(94);
      var o = m(431);
      function e(e, t, n) {
        if (!(t in e)) return;
        var r = e[t];
        var i = n(r);
        if ('function' === typeof i)
          try {
            i.prototype = i.prototype || {};
            Object.defineProperties(i, {
              __sentry_original__: { enumerable: false, value: r },
            });
          } catch (e) {}
        e[t] = i;
      }
      function t(t) {
        return Object.keys(t)
          .map(function (e) {
            return encodeURIComponent(e) + '=' + encodeURIComponent(t[e]);
          })
          .join('&');
      }
      function l(e) {
        if (Object(s['d'])(e)) {
          var t = e;
          var n = { message: t.message, name: t.name, stack: t.stack };
          for (var r in t)
            Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
          return n;
        }
        if (Object(s['f'])(e)) {
          var i = e;
          var o = {};
          o.type = i.type;
          try {
            o.target = Object(s['c'])(i.target)
              ? Object(a['k'])(i.target)
              : Object.prototype.toString.call(i.target);
          } catch (e) {
            o.target = '<unknown>';
          }
          try {
            o.currentTarget = Object(s['c'])(i.currentTarget)
              ? Object(a['k'])(i.currentTarget)
              : Object.prototype.toString.call(i.currentTarget);
          } catch (e) {
            o.currentTarget = '<unknown>';
          }
          'undefined' !== typeof CustomEvent &&
            Object(s['g'])(e, CustomEvent) &&
            (o.detail = i.detail);
          for (var r in i)
            Object.prototype.hasOwnProperty.call(i, r) && (o[r] = i);
          return o;
        }
        return e;
      }
      function r(e) {
        return ~-encodeURI(e).split(/%..|./).length;
      }
      function i(e) {
        return r(JSON.stringify(e));
      }
      function u(e, t, n) {
        void 0 === t && (t = 3);
        void 0 === n && (n = 102400);
        var r = h(e, t);
        if (i(r) > n) return u(e, t - 1, n);
        return r;
      }
      function d(e) {
        var t = Object.prototype.toString.call(e);
        if ('string' === typeof e) return e;
        if ('[object Object]' === t) return '[Object]';
        if ('[object Array]' === t) return '[Array]';
        var n = p(e);
        return Object(s['i'])(n) ? n : t;
      }
      function p(e, t) {
        if ('domain' === t && e && 'object' === typeof e && e._events)
          return '[Domain]';
        if ('domainEmitter' === t) return '[DomainEmitter]';
        if ('undefined' !== typeof n && e === n) return '[Global]';
        if ('undefined' !== typeof window && e === window) return '[Window]';
        if ('undefined' !== typeof document && e === document)
          return '[Document]';
        if (Object(s['l'])(e)) return '[SyntheticEvent]';
        if ('number' === typeof e && e !== e) return '[NaN]';
        if (void 0 === e) return '[undefined]';
        if ('function' === typeof e)
          return '[Function: ' + Object(a['h'])(e) + ']';
        return e;
      }
      function v(e, t, n, r) {
        void 0 === n && (n = 1 / 0);
        void 0 === r && (r = new f['a']());
        if (0 === n) return d(t);
        if (null !== t && void 0 !== t && 'function' === typeof t.toJSON)
          return t.toJSON();
        var i = p(t, e);
        if (Object(s['i'])(i)) return i;
        var o = l(t);
        var a = Array.isArray(t) ? [] : {};
        if (r.memoize(t)) return '[Circular ~]';
        for (var u in o) {
          if (!Object.prototype.hasOwnProperty.call(o, u)) continue;
          a[u] = v(u, o[u], n - 1, r);
        }
        r.unmemoize(t);
        return a;
      }
      function h(e, n) {
        try {
          return JSON.parse(
            JSON.stringify(e, function (e, t) {
              return v(e, t, n);
            })
          );
        } catch (e) {
          return '**non-serializable**';
        }
      }
      function _(e, t) {
        void 0 === t && (t = 40);
        var n = Object.keys(l(e));
        n.sort();
        if (!n.length) return '[object has no keys]';
        if (n[0].length >= t) return Object(o['d'])(n[0], t);
        for (var r = n.length; r > 0; r--) {
          var i = n.slice(0, r).join(', ');
          if (i.length > t) continue;
          if (r === n.length) return i;
          return Object(o['d'])(i, t);
        }
        return '';
      }
      function g(e) {
        var t, n;
        if (Object(s['h'])(e)) {
          var r = e;
          var i = {};
          try {
            for (
              var o = c['__values'](Object.keys(r)), a = o.next();
              !a.done;
              a = o.next()
            ) {
              var u = a.value;
              'undefined' !== typeof r[u] && (i[u] = g(r[u]));
            }
          } catch (e) {
            t = { error: e };
          } finally {
            try {
              a && !a.done && (n = o.return) && n.call(o);
            } finally {
              if (t) throw t.error;
            }
          }
          return i;
        }
        if (Array.isArray(e)) return e.map(g);
        return e;
      }
    }.call(this, m(98)));
  },
  3071: function (e, t, n) {
    'use strict';
    n.r(t);
    n.d(t, 'default', function () {
      return gt;
    });
    n.d(t, 'getPerformanceData', function () {
      return Re;
    });
    n.d(t, 'getPerformanceMetrics', function () {
      return Rt;
    });
    n.d(t, 'mark', function () {
      return Pt;
    });
    n.d(t, 'measure', function () {
      return At;
    });
    n.d(t, 'getDecodedBodySize', function () {
      return yt;
    });
    n.d(t, 'getDomContentLoadedEventEnd', function () {
      return mt;
    });
    n.d(t, 'getDomContentLoadedEventStart', function () {
      return bt;
    });
    n.d(t, 'getEncodedBodySize', function () {
      return wt;
    });
    n.d(t, 'getFirstContentfulPaint', function () {
      return St;
    });
    n.d(t, 'getLargestContentfulPaint', function () {
      return Tt;
    });
    n.d(t, 'getLoadEventEnd', function () {
      return jt;
    });
    n.d(t, 'getLoadEventStart', function () {
      return xt;
    });
    n.d(t, 'getResponseStart', function () {
      return kt;
    });
    n.d(t, 'getTimeToInteractive', function () {
      return It;
    });
    n.d(t, 'trackLoadPerformance', function () {
      return qt;
    });
    var i = n(916);
    var v = n(13);
    var r = n(1444);
    var o = '/api/1/performance';
    var a = '/records';
    var u = '/settings';
    var c = '/error';
    var s = '2.4.3';
    var f = function (e) {
      return {
        app: 'a',
        data: { __encoding_config__: e, __encoding_key__: 'd' },
        event: 'e',
        pageLoadId: 'pl',
        ts: 't',
      };
    };
    var l = { downlink: 'do', effectiveType: 'ef', rtt: 'rtt', saveData: 'sd' };
    var d = {
      devicePixelRatio: 'dpr',
      screenHeight: 'sh',
      screenWidth: 'sw',
      viewportHeight: 'vh',
      viewportWidth: 'vw',
    };
    var p = { deviceMemory: 'dm', hardwareConcurrency: 'hc' };
    var h = {
      abTest: 'ab',
      analyticsId: 'aid',
      connectEnd: 'ce',
      connectStart: 'c',
      connection: { __encoding_config__: l, __encoding_key__: 'con' },
      context: 'ctx',
      decodedBodySize: 'db',
      deliveryType: 'dt',
      display: { __encoding_config__: d, __encoding_key__: 'disp' },
      domComplete: 'dc',
      domContentLoadedEventEnd: 'de',
      domContentLoadedEventStart: 'ds',
      domInteractive: 'di',
      domLoading: 'd',
      domainLookupEnd: 'dle',
      domainLookupStart: 'dl',
      encodedBodySize: 'eb',
      fetchStart: 'f',
      firstContentfulPaint: 'fcp',
      firstInputDelay: 'fid',
      firstInteraction: 'fi',
      firstPaint: 'fp',
      hardware: { __encoding_config__: p, __encoding_key__: 'hdw' },
      hash: 'h',
      hostname: 'hn',
      loadEventEnd: 'le',
      loadEventStart: 'l',
      marketingId: 'mid',
      memberId: 'mem',
      navigationStart: 'n',
      navigationType: 'nt',
      nextHopProtocol: 'nh',
      pathname: 'p',
      redirectCount: 'rc',
      redirectEnd: 'rde',
      redirectStart: 'rd',
      requestStart: 'r',
      responseEnd: 're',
      responseStart: 'rs',
      secureConnectionStart: 's',
      supportLevel: 'sl',
      transferSize: 't',
      tti: 'tti',
      unloadEventEnd: 'ue',
      unloadEventStart: 'u',
      version: 'v',
      visibilityStateOnDCL: 'vs',
    };
    var _ = {
      duration: 'd',
      endMarkDetail: 'e',
      measureDetail: 'm',
      name: 'n',
      startMarkDetail: 's',
      startTime: 'st',
    };
    var g = {
      info: {
        __encoding_config__: {
          img: {
            __encoding_config__: {
              __encoding_config__: {
                assetUrl: 'a',
                naturalHeight: 'nh',
                naturalWidth: 'nw',
                parentHeight: 'ph',
                parentWidth: 'pw',
                squarespaceSize: 's',
                visibleInSession: 'vs',
                visibleOnLoad: 'vl',
              },
              __encoding_skip__: true,
            },
            __encoding_key__: 'img',
          },
        },
        __encoding_key__: 'i',
      },
      timings: 't',
    };
    var y = Object.keys(h);
    var m = Object.keys(_);
    var b = Object.keys(g);
    var w = 'userTiming';
    var E = 'mark';
    var S = 'measure';
    var O = ['click', 'mousedown', 'keydown', 'touchstart', 'pointerdown'];
    var T = 'DOMContentLoaded';
    var j = 'load';
    var x = 'sqsImageLoad';
    var k = [T, j];
    var I = 'beforeunload';
    var R = 'pagehide';
    var C = 'resourcetimingbufferfull';
    var P = ['first-paint', 'first-contentful-paint'];
    var A = [x, I, j, C, R];
    var L = [j, I, R];
    var D = 'rum-';
    var N = 'ss_ab';
    var M = 'SS_MID';
    var B = 'SS_ANALYTICS_ID';
    var U = 3e4;
    var F = 3e4;
    var q = 5e4;
    var H = /(iPhone|iPod|iPad) OS ((1[0-2])|[2-9])_\d+.*AppleWebKit(?!.*Safari)/i;
    function z(e) {
      var t = e.timeStamp;
      var n = t > 1e12 ? +new Date() : window.performance.now();
      var r = Math.max(n - t, 0);
      return { firstInputDelay: r, firstInteraction: n };
    }
    function Y() {
      return !!(
        window.performance &&
        window.performance.now &&
        window.addEventListener
      );
    }
    function W() {
      return !!(
        window.PerformanceMeasure &&
        window.PerformanceMark &&
        window.performance &&
        window.performance.mark &&
        window.performance.measure
      );
    }
    function V() {
      if (!window.hasOwnProperty('PerformanceObserver')) return false;
      try {
        var e = new window.PerformanceObserver(function () {
          return null;
        });
        e.observe({ type: 'mark' });
        e.disconnect();
      } catch (e) {
        return false;
      }
      return true;
    }
    function G() {
      return !!(
        window.performance &&
        window.performance.getEntriesByType &&
        window.PerformanceNavigationTiming
      );
    }
    function X() {
      return !!(
        window.performance &&
        window.performance.timing &&
        window.PerformanceTiming
      );
    }
    function K() {
      return (
        'function' === typeof window.navigator.sendBeacon &&
        !H.test(window.navigator.userAgent)
      );
    }
    function $() {
      return !!window.PerformancePaintTiming;
    }
    function J() {
      return !!window.LargestContentfulPaint;
    }
    function Z() {
      return !!window.PerformanceLongTaskTiming;
    }
    function Q(e) {
      var t = {};
      for (var n in e) 'function' !== typeof e[n] && (t[n] = e[n]);
      return t;
    }
    var ee = function (e) {
      var n = e.type,
        t = e.buffered,
        r = void 0 === t || t,
        i = e.isReadyFn,
        o =
          void 0 === i
            ? function () {
                return true;
              }
            : i;
      return new Promise(function (t) {
        var e = new PerformanceObserver(function (e) {
          o(e) && t(e);
        });
        e.observe({ type: n, buffered: r });
      });
    };
    function te() {
      var e = {};
      if (window.performance) {
        if (G()) {
          e.supportLevel = 2;
          Object.assign(
            e,
            Q(window.performance.getEntriesByType('navigation')[0])
          );
        } else if (X()) {
          e.supportLevel = 1;
          Object.assign(e, window.performance.timing);
        }
        if (performance.navigation) {
          e.navigationType = window.performance.navigation.type;
          e.redirectCount = window.performance.navigation.redirectCount;
        }
      }
      return e;
    }
    var ne = null;
    var re = function () {
      return Object(v['__awaiter'])(void 0, void 0, void 0, function () {
        return Object(v['__generator'])(this, function (e) {
          switch (e.label) {
            case 0:
              if (!!ne) return [3, 4];
              if (!(G() && V())) return [3, 2];
              return [4, oe()];
            case 1:
              ne = e.sent();
              return [3, 4];
            case 2:
              if (!X()) return [3, 4];
              return [4, ae()];
            case 3:
              ne = e.sent();
              e.label = 4;
            case 4:
              return [2, ne];
          }
        });
      });
    };
    var ie = function (n) {
      return Object(v['__awaiter'])(void 0, void 0, void 0, function () {
        var t;
        return Object(v['__generator'])(this, function (e) {
          switch (e.label) {
            case 0:
              return [4, re()];
            case 1:
              t = e.sent();
              if (!t || 'number' !== typeof t[n]) return [2, null];
              return [2, Math.round(t[n])];
          }
        });
      });
    };
    function oe() {
      return Object(v['__awaiter'])(this, void 0, void 0, function () {
        var t, n, r;
        return Object(v['__generator'])(this, function (e) {
          switch (e.label) {
            case 0:
              e.trys.push([0, 2, , 3]);
              return [
                4,
                ee({
                  type: 'navigation',
                  isReadyFn: function (e) {
                    var t = e.getEntries()[0];
                    return !!(t.duration && t.duration > 0);
                  },
                }),
              ];
            case 1:
              t = e.sent();
              n = t.getEntries()[0];
              return [2, Q(n)];
            case 2:
              r = e.sent();
              return [2, null];
            case 3:
              return [2];
          }
        });
      });
    }
    function ae() {
      var t = function () {
        var e = Q(window.performance.timing);
        var t = e.navigationStart;
        delete e.navigationStart;
        for (var n in e) e[n] > 0 && (e[n] = e[n] - t);
        return e;
      };
      return new Promise(function (e) {
        'complete' !== document.readyState
          ? window.addEventListener('load', function () {
              setTimeout(function () {
                e(t());
              });
            })
          : e(t());
      });
    }
    function ue(e) {
      var t = new RegExp('(^| )' + e + '=([^;]+)');
      var n = document.cookie.match(t);
      if (n) return n[2];
      return '';
    }
    function ce(e) {
      if (window.localStorage && window.localStorage.getItem)
        return window.localStorage.getItem(e);
      return null;
    }
    var se;
    (function (e) {
      e['Beacon'] = 'beacon';
      e['XHR'] = 'xhr';
    })((se = se || {}));
    function fe() {
      var e = de();
      var t = pe();
      var n = he();
      return {
        abTest: le(),
        analyticsId: ue(B),
        connection: e,
        deliveryType: K() ? se.Beacon : se.XHR,
        display: t,
        hardware: n,
        hash: window.location.hash || '',
        hostname: window.location.hostname || '',
        marketingId: ue(M),
        memberId: ve(),
        pathname: window.location.pathname || '/',
        version: s,
      };
    }
    function le() {
      if (!window.atob) return null;
      var e = ce(N);
      if (e)
        try {
          return JSON.parse(window.atob(e));
        } catch (e) {
          return null;
        }
      return null;
    }
    function de() {
      var e = {};
      var t =
        navigator.connection ||
        navigator.mozConnection ||
        navigator.webkitConnection;
      if (t) {
        var n = (1e3 * t.downlink).toString();
        e = {
          downlink: parseInt(n, 10),
          effectiveType: t.effectiveType,
          rtt: t.rtt,
          saveData: t.saveData,
        };
      }
      return e;
    }
    function pe() {
      var e = window.devicePixelRatio;
      var t = window.screen,
        n = t.width,
        r = t.height;
      var i = document.documentElement,
        o = i.clientHeight,
        a = i.clientWidth;
      var u = {
        devicePixelRatio: e,
        screenHeight: r,
        screenWidth: n,
        viewportHeight: o,
        viewportWidth: a,
      };
      return u;
    }
    function ve() {
      try {
        return window.Static.SQUARESPACE_CONTEXT.authenticatedAccount.id;
      } catch (e) {
        return '';
      }
    }
    function he() {
      return {
        deviceMemory: navigator.deviceMemory,
        hardwareConcurrency: navigator.hardwareConcurrency,
      };
    }
    function _e(e) {
      var t;
      var n = e.name,
        r = e.startTime;
      if (P.indexOf(n) >= 0) return (t = {}), (t[ge(n)] = r), t;
      return {};
    }
    function ge(e) {
      return e.replace(/-([a-zA-Z])/g, function (e, t) {
        var n = t && t.toUpperCase();
        return n || e;
      });
    }
    function ye(l, d) {
      var p = {};
      Object.keys(d).forEach(function (e) {
        var t = d[e];
        var n;
        var r;
        var i = l[e] || l;
        var o = typeof i;
        var a = 'string' === o;
        var u = 'object' === o || 'undefined' === i;
        if (!a && !u) return;
        if (a) {
          n = i;
          r = me(t);
        } else {
          var c = i.__encoding_skip__;
          var s = i.__encoding_config__;
          var f = i.__encoding_fn__;
          if (!c && !s && !l) throw new Error('Invalid encoding map');
          n = c ? e : i.__encoding_key__;
          r = s ? ye(s, t) : f ? f(t) : t;
        }
        n && (p['' + n] = r);
      });
      return p;
    }
    function me(e) {
      if ('boolean' === typeof e) return e ? 1 : 0;
      if (be(e)) return e.toString(36);
      return e;
    }
    function be(e) {
      return ('number' === typeof e || e instanceof Number) && isFinite(e);
    }
    var we;
    var Ee = [];
    function Se(e, t) {
      if (K() && navigator.sendBeacon(e, t)) return;
      var n = new XMLHttpRequest();
      n.open('POST', e, true);
      n.setRequestHeader('Content-Type', 'text/plain;charset=UTF-8');
      n.send(t);
    }
    function Oe(n) {
      L.forEach(function (t) {
        window.addEventListener(t, function () {
          try {
            if (t === j) we = window.setTimeout(je, F, n);
            else if ('number' === typeof we) {
              window.clearTimeout(we);
              we = void 0;
            }
            je(n);
          } catch (e) {
            n(e, t);
          }
        });
      });
    }
    function Te(e) {
      Ee.push(e);
    }
    function je(t) {
      try {
        if (Ee.length) {
          var e = [];
          while (Ee.length) {
            var n = Ee.pop();
            var r = JSON.stringify(n);
            if (!(r.length <= q && n))
              throw new Error(
                "Omitting individual metric because it's over the PER_METRIC_DELIVERY_SIZE (metric is " +
                  r.length +
                  ' bytes, delivered from ' +
                  window.location.href +
                  ')'
              );
            e.push(n);
          }
          if (e.length) {
            var i = JSON.stringify(e);
            Se(o + a, i);
          }
        }
      } catch (e) {
        t(e);
      }
    }
    function xe(e) {
      Se(o + c, e);
    }
    function ke(e, t) {
      var n = ye(e, t);
      if (!n) throw new Error('Data is empty');
      Te(n);
    }
    var Ie = [];
    function Re() {
      return Ie;
    }
    function Ce(e) {
      Ie.push(e);
    }
    function Pe(e, t, n, r) {
      var i = Object.freeze({
        app: e,
        data: r,
        event: t,
        pageLoadId: n,
        ts: Date.now(),
      });
      Ce(i);
      return i;
    }
    var Ae;
    (function (e) {
      e['OBSERVE'] = 'observe';
      e['GATHER'] = 'gather';
      e['BOTH'] = 'both';
      e['NONE'] = '';
    })((Ae = Ae || {}));
    var Le = (function () {
      function e() {
        this.requiresContext = false;
        this.context = {};
        this.deliveryBuffer = [];
        this.entryTypes = [e.eventName];
        this.fireOnce = false;
        this.gatherEvents = [];
        this.supportType = Ae.NONE;
        this.encodeConfig = f({});
        this.appName = '';
        this.pageLoadId = '';
      }
      e.prototype.getDeliveryBuffer = function () {
        return this.deliveryBuffer;
      };
      e.prototype.getEventName = function () {
        return this.constructor.eventName;
      };
      e.prototype.getEntryTypes = function () {
        return this.entryTypes;
      };
      e.prototype.getGatherEvents = function () {
        return this.gatherEvents;
      };
      e.prototype.getSupportType = function () {
        return this.supportType;
      };
      e.prototype.shouldFireOnce = function () {
        return this.fireOnce;
      };
      e.prototype.observerParse = function (e) {
        this.deliveryBuffer.push(e);
        return true;
      };
      e.prototype.gather = function (e) {
        return e;
      };
      e.prototype.gatherParse = function (e) {
        this.deliveryBuffer.push(e);
        return true;
      };
      e.prototype.deliver = function () {
        while (this.deliveryBuffer.length) {
          var e = this.deliveryBuffer.shift();
          if (e) {
            var t = Pe(this.appName, this.getEventName(), this.pageLoadId, e);
            ke(this.getEncodeConfig(), t);
          }
        }
        this.deliveryBuffer = [];
      };
      e.prototype.getEncodeConfig = function () {
        return this.encodeConfig;
      };
      e.prototype.setApp = function (e) {
        this.appName = e;
        return this;
      };
      e.prototype.setId = function (e) {
        this.pageLoadId = e;
        return this;
      };
      e.eventName = '';
      return e;
    })();
    var De = Le;
    var Ne = (function (n) {
      Object(v['__extends'])(e, n);
      function e() {
        var e;
        var t = n.call(this) || this;
        t.requiresContext = true;
        t.fireOnce = true;
        t.gatherEvents = [j, I, R];
        t.entryTypes = ['paint', 'longtask'];
        t.supportType = Ae.BOTH;
        t.deliveryBuffer = [{}];
        t.encodeConfig = f(h);
        t.visibilityStateOnDCL = '';
        t.metricsCollected = { load: false };
        window.addEventListener('DOMContentLoaded', function () {
          return (t.visibilityStateOnDCL = document.visibilityState || '');
        });
        if (Y()) {
          t.metricsCollected.interaction = false;
          (e = t.gatherEvents).push.apply(e, O);
        }
        V() && (t.metricsCollected.paint = false);
        t.setupTTI();
        return t;
      }
      e.prototype.gather = function (e) {
        if (e.type === j) {
          this.metricsCollected.load = true;
          return Object(v['__assign'])(
            Object(v['__assign'])(
              {
                context: this.context,
                visibilityStateOnDCL: this.visibilityStateOnDCL,
              },
              fe()
            ),
            te()
          );
        }
        if (
          -1 !== O.indexOf(e.type) &&
          false === this.metricsCollected.interaction
        ) {
          this.metricsCollected.interaction = true;
          return z(e);
        }
        e.type === I && (this.metricsCollected = {});
        return {};
      };
      e.prototype.gatherParse = function (e) {
        return this.parse(e);
      };
      e.prototype.observerParse = function (e) {
        if ('paint' === e.entryType) {
          this.metricsCollected.paint = true;
          return this.parse(_e(e));
        }
        'longtask' === e.entryType && window.__tti && window.__tti.e.push(e);
        return false;
      };
      e.prototype.parse = function (n) {
        var t = this;
        this.deliveryBuffer.length &&
          y.reduce(function (e, t) {
            t in n && (e[t] = n[t]);
            return e;
          }, this.deliveryBuffer[0]);
        var e = Object.keys(this.metricsCollected).every(function (e) {
          return t.metricsCollected[e];
        });
        return e;
      };
      e.prototype.setupTTI = function () {
        var t = this;
        if (window.PerformanceLongTaskTiming && window.PerformanceObserver) {
          window.__tti = { e: [] };
          this.metricsCollected.tti = false;
          Object(r['getFirstConsistentlyInteractive'])().then(function (e) {
            t.metricsCollected.tti = true;
            t.parse({ tti: e });
          });
        }
      };
      e.eventName = 'page_speed';
      return e;
    })(De);
    var Me = Ne;
    var Be = n(2573);
    var Ue = n.n(Be);
    var Fe = (function (t) {
      Object(v['__extends'])(e, t);
      function e() {
        var e = t.call(this) || this;
        e.entryTypes = ['resource'];
        e.gatherEvents = A;
        e.encodeConfig = f(g);
        e.readyToDeliver = false;
        e.dataBuffer = { info: {}, timings: {} };
        e.resourceTimingData = [];
        window.performance &&
        window.performance.getEntriesByType &&
        window.performance.clearResourceTimings &&
        window.PerformanceResourceTiming &&
        window.performance.getEntriesByType('resource')[0] instanceof
          PerformanceResourceTiming
          ? (e.supportType = Ae.GATHER)
          : (e.supportType = Ae.NONE);
        e.initImageLoaderData();
        return e;
      }
      e.prototype.gather = function (e) {
        if (e.type === x) {
          var t = e.detail.imageData,
            n = void 0 === t ? {} : t;
          Object.assign(this.dataBuffer.info.img, this.gatherImageInfo(n));
          return this.dataBuffer;
        }
        e.type === I && (this.readyToDeliver = true);
        this.resourceTimingData = Object(v['__spreadArrays'])(
          this.resourceTimingData,
          this.gatherImageTimingData()
        );
        return this.dataBuffer;
      };
      e.prototype.gatherParse = function () {
        if (this.readyToDeliver) {
          var e = Ue.a.compressResourceTiming(
            window,
            this.resourceTimingData,
            [],
            false
          ).restiming;
          this.dataBuffer.timings = e;
          this.deliveryBuffer = [this.dataBuffer];
        }
        return this.readyToDeliver;
      };
      e.prototype.initImageLoaderData = function () {
        var t = this;
        this.dataBuffer.info.img = {};
        if (
          window.ImageLoader &&
          window.ImageLoader.imageInfo &&
          Object.keys(window.ImageLoader.imageInfo).length
        ) {
          var n = window.ImageLoader.imageInfo;
          Object.keys(n).forEach(function (e) {
            Object.assign(t.dataBuffer.info.img, t.gatherImageInfo(n[e], true));
          });
        }
      };
      e.prototype.isSquarespaceImage = function (e) {
        var t = e.name,
          n = e.initiatorType;
        var r = document.createElement('a');
        r.href = t;
        var i = r.hostname,
          o = r.pathname;
        return Boolean(
          'img' === n &&
            (i.indexOf('images.squarespace-cdn.com') > -1 ||
              ((i.indexOf('squarespace.com') ||
                i.indexOf('sqsp.net') > -1 ||
                i.indexOf('squarespace.net') > -1) &&
                o.indexOf('static') > -1))
        );
      };
      e.prototype.gatherImageTimingData = function () {
        var e = window.performance
          .getEntriesByType('resource')
          .filter(this.isSquarespaceImage);
        window.performance.clearResourceTimings();
        return e;
      };
      e.prototype.gatherImageInfo = function (e, t) {
        var n;
        void 0 === t && (t = false);
        var r = e.naturalDimensions,
          i = void 0 === r ? {} : r,
          o = e.parentElementDimensions,
          a = void 0 === o ? {} : o,
          u = e.isVisible,
          c = void 0 !== u && u,
          s = e.assetUrl,
          f = e.squarespaceSize,
          l = Object(v['__rest'])(e, [
            'naturalDimensions',
            'parentElementDimensions',
            'isVisible',
            'assetUrl',
            'squarespaceSize',
          ]);
        if (!s || !f) return {};
        var d = s + '?format=' + e.squarespaceSize;
        var p = Object(v['__assign'])({ assetUrl: d, squarespaceSize: f }, l);
        if (i.hasOwnProperty('height') && i.hasOwnProperty('width')) {
          p.naturalHeight = Math.round(i.height);
          p.naturalWidth = Math.round(i.width);
        }
        if (a.hasOwnProperty('height') && a.hasOwnProperty('width')) {
          p.parentHeight = Math.round(a.height);
          p.parentWidth = Math.round(a.width);
        }
        p.visibleInSession = c;
        p.visibleOnLoad = t && c;
        return (n = {}), (n[d] = p), n;
      };
      e.eventName = 'resource';
      return e;
    })(De);
    var qe = Fe;
    function He(e) {
      return (
        'string' === typeof e && e.substring && 'rum-' === e.substring(0, 4)
      );
    }
    function ze(e) {
      return 'number' === typeof e ? Math.round(e) : e;
    }
    var Ye = (function (o) {
      Object(v['__extends'])(e, o);
      function e() {
        var e = o.call(this) || this;
        e.gatherEvents = [w];
        e.encodeConfig = f(_);
        e.supportType = Ae.GATHER;
        e.detailCache = {};
        e.measureMarkCache = {};
        if (W()) {
          var t = window.performance.getEntriesByType('measure');
          for (var n = 0, r = t; n < r.length; n++) {
            var i = r[n];
            e.parse(Q(i));
          }
        } else e.supportType = Ae.NONE;
        return e;
      }
      e.prototype.gather = function (e) {
        if (e && Ge(e.detail) && Ge(e.detail.userTimingEntry)) {
          var t = e.detail,
            n = t.userTimingEntry,
            r = t.startMark,
            i = t.endMark,
            o = t.detail;
          if (n.entryType === E) this.addDetail(n.name, o);
          else if (n.entryType === S) {
            this.addMeasure(n.name, r, i);
            return Object(v['__assign'])(
              Object(v['__assign'])(
                Object(v['__assign'])({}, Q(n)),
                this.getDetails(n.name)
              ),
              { measureDetail: o }
            );
          }
        }
        return {};
      };
      e.prototype.gatherParse = function (e) {
        this.parse(e);
        return true;
      };
      e.prototype.parse = function (e) {
        if (!He(e.name)) return false;
        var t = {};
        for (var n = 0, r = m; n < r.length; n++) {
          var i = r[n];
          e.hasOwnProperty(i) && (t[i] = ze(e[i]));
        }
        this.deliveryBuffer.push(t);
        return true;
      };
      e.prototype.addMeasure = function (e, t, n) {
        this.measureMarkCache[e] = { startMarkName: t, endMarkName: n };
      };
      e.prototype.addDetail = function (e, t) {
        this.detailCache[e] = Ve(t);
      };
      e.prototype.getDetails = function (e) {
        var t = {};
        var n = this.measureMarkCache[e];
        if (void 0 !== n) {
          delete this.measureMarkCache[e];
          var r = n.startMarkName,
            i = n.endMarkName;
          if (void 0 !== r && this.detailCache.hasOwnProperty(r)) {
            t.startMarkDetail = this.detailCache[r];
            delete this.detailCache[r];
          }
          if (void 0 !== i && this.detailCache.hasOwnProperty(i)) {
            t.endMarkDetail = this.detailCache[i];
            delete this.detailCache[i];
          }
        }
        return t;
      };
      e.eventName = 'user';
      return e;
    })(De);
    var We = Ye;
    function Ve(e) {
      if ('object' !== typeof e || null === e) return e;
      var t = {};
      for (var n in e) n in e && (t[n] = e[n]);
      return t;
    }
    function Ge(e) {
      return null !== e && 'object' === typeof e;
    }
    var Xe = (function (t) {
      Object(v['__extends'])(e, t);
      function e() {
        var e = t.call(this) || this;
        e.gatherEvents = [I, R];
        e.supportType = Ae.GATHER;
        e.encodeConfig = f();
        K() || (e.supportType = Ae.NONE);
        return e;
      }
      e.prototype.gather = function () {
        if ($e()) return window.YUI.stats.getSerializedDataForReporter();
        return {};
      };
      e.prototype.gatherParse = function (e) {
        this.deliveryBuffer.push(e);
        return true;
      };
      e.eventName = 'yui_stats';
      return e;
    })(De);
    var Ke = Xe;
    function $e() {
      return (
        window.YUI &&
        window.YUI.stats &&
        window.YUI.stats.getSerializedDataForReporter &&
        'function' === typeof window.YUI.stats.getSerializedDataForReporter
      );
    }
    var Je = [Me, We, qe, Ke];
    function Ze(n, e, r, i) {
      e.forEach(function (e) {
        k.indexOf(e) > -1 && tt()
          ? n({ type: e })
          : window.addEventListener(e, function e(t) {
              try {
                r && window.removeEventListener(t.type, e);
                return n(t);
              } catch (e) {
                i(e, { fireOnce: r, event: t });
              }
            });
      });
    }
    function Qe(n, r) {
      if (!('PerformanceObserver' in window)) return;
      var i = function (e) {
        e.forEach(function (e) {
          var t = new CustomEvent(et(e.entryType), { detail: e.toJSON() });
          window.dispatchEvent(t);
        });
      };
      var t = function (e) {
        var t = e.entryType;
        return n.indexOf(t) > -1;
      };
      var o = function (e) {
        var t = e.entryType;
        return 'navigation' === t;
      };
      i(
        performance.getEntries().filter(function (e) {
          return (t(e) && !o(e)) || (tt() && o(e));
        })
      );
      var e = new window.PerformanceObserver(function (e) {
        var t;
        try {
          t = e.getEntries();
          i(t);
        } catch (e) {
          r(e, t);
        }
      });
      if (n.length > 0)
        try {
          e.observe({ entryTypes: n });
        } catch (e) {}
    }
    function et(e) {
      return e + '-observer';
    }
    function tt() {
      return 'complete' === document.readyState;
    }
    var nt = [];
    var rt;
    var it = 2e3;
    function ot(e, t, n) {
      void 0 === n && (n = false);
      if (window.requestIdleCallback && !n) {
        nt.push(e);
        rt =
          rt ||
          window.requestIdleCallback(
            function (e) {
              return at(e, t);
            },
            { timeout: it }
          );
      } else e.deliver();
    }
    function at(e, t) {
      try {
        while ((e.timeRemaining() > 0 || e.didTimeout) && nt.length) {
          var n = nt.shift();
          n && n.deliver();
        }
        rt = nt.length
          ? window.requestIdleCallback(
              function (e) {
                return at(e, t);
              },
              { timeout: it }
            )
          : void 0;
      } catch (e) {
        t(e);
      }
    }
    var ut = { passive: true, capture: true };
    function ct(t, e, n) {
      var r = function () {
        try {
          e(t);
          o();
        } catch (e) {
          n(e, t);
        }
      };
      var i = function () {
        try {
          o();
        } catch (e) {
          n(e);
        }
      };
      function o() {
        window.removeEventListener('pointerup', r, ut);
        window.removeEventListener('pointercancel', i, ut);
      }
      window.addEventListener('pointerup', r, ut);
      window.addEventListener('pointercancel', i, ut);
    }
    function st(i) {
      return function (e, t) {
        void 0 === t && (t = false);
        var n = i.getABTestVariant(e + '-rollout', t.toString()).variant;
        var r = 'true' === n;
        return r;
      };
    }
    function ft(i, o, a, u) {
      return function (e, t) {
        var n = i(t.eventName + '-plugin');
        if (n) {
          var r = new t().setApp(o).setId(a);
          r.requiresContext && (r.context = u);
          e.push(r);
        }
        return e;
      };
    }
    function lt(n, r, i) {
      return function (e) {
        var t = e.detail;
        try {
          n.observerParse(t) && ot(n, i);
        } catch (e) {
          i(e, {
            observerEventType: r,
            parsedData: n.getDeliveryBuffer(),
            observerData: t,
          });
        }
      };
    }
    function dt(r, i) {
      function e(e) {
        var t;
        try {
          t = r.gather(e);
          if ('pointerdown' === t.eventType)
            ct(
              t,
              function (e) {
                return pt(r, e, i);
              },
              i
            );
          else {
            var n = e.type === I || e.type === R;
            pt(r, t, i, n);
          }
        } catch (e) {
          i(e, {
            eventName: r.getEventName(),
            parsedData: r.getDeliveryBuffer(),
            rawData: t,
          });
        }
      }
      return e;
    }
    function pt(e, t, n, r) {
      void 0 === r && (r = false);
      var i = e.gatherParse(t);
      i && ot(e, n, r);
    }
    var vt = function () {
      return new Promise(function (e, t) {
        var n = new XMLHttpRequest();
        n.onreadystatechange = function () {
          if (n.readyState === XMLHttpRequest.DONE)
            if (200 === n.status)
              try {
                e(JSON.parse(n.response));
              } catch (e) {
                t(e);
              }
            else
              0 !== n.status &&
                t(
                  new Error(
                    'XHR request DONE with unexpected status: ' + n.status
                  )
                );
        };
        n.ontimeout = function () {
          t(new Error('Metric settings request timeout'));
        };
        n.open('GET', o + u, true);
        n.timeout = U;
        n.send();
      });
    };
    var ht = function (n, r) {
      return function (e, t) {
        xe('RUMError[' + n + ']: ' + e);
        r && r(e, t);
      };
    };
    var _t = function (e) {
      var t = {
        appName: e.appName || '',
        context: e.context || {},
        enabled: 'boolean' !== typeof e.enabled || e.enabled,
      };
      t.captureException = ht(t.appName, e.captureException);
      return t;
    };
    function gt(e) {
      var a = _t(e);
      var r;
      return vt()
        .then(function (e) {
          r = e.pageLoadId;
          if (!r) throw new Error('Unable to resolve pageLoadId');
          return new i['StaticPraetorClient'](e);
        })
        .then(function (e) {
          var t = st(e);
          if (
            ['rum', a.appName + '-app'].some(function (e) {
              return !t(e);
            })
          )
            return;
          var n = Je.reduce(ft(t, a.appName, r, a.context), []);
          var o = [];
          n.forEach(function (r) {
            var e = r.getSupportType();
            if (e === Ae.OBSERVE || e === Ae.BOTH) {
              var t = r.getEntryTypes();
              t.forEach(function (e) {
                var t = et(e);
                o.push(e);
                var n = lt(r, t, a.captureException);
                window.addEventListener(t, n);
              });
            }
            if (e === Ae.GATHER || e === Ae.BOTH) {
              var n = r.getGatherEvents();
              var i = dt(r, a.captureException);
              Ze(i, n, r.shouldFireOnce(), a.captureException);
            }
          });
          Qe(o, a.captureException);
          a.enabled && Oe(a.captureException);
        })
        .catch(function (e) {
          a.captureException(e, { pageLoadId: r, parsedOptions: a });
        });
    }
    var yt = function () {
      return Object(v['__awaiter'])(void 0, void 0, void 0, function () {
        var t;
        return Object(v['__generator'])(this, function (e) {
          switch (e.label) {
            case 0:
              return [4, ie('decodedBodySize')];
            case 1:
              t = e.sent();
              return [2, t ? { decodedBodySize: t } : null];
          }
        });
      });
    };
    var mt = function () {
      return Object(v['__awaiter'])(void 0, void 0, void 0, function () {
        var t;
        return Object(v['__generator'])(this, function (e) {
          switch (e.label) {
            case 0:
              return [4, ie('domContentLoadedEventEnd')];
            case 1:
              t = e.sent();
              return [2, t ? { domContentLoadedEventEnd: t } : null];
          }
        });
      });
    };
    var bt = function () {
      return Object(v['__awaiter'])(void 0, void 0, void 0, function () {
        var t;
        return Object(v['__generator'])(this, function (e) {
          switch (e.label) {
            case 0:
              return [4, ie('domContentLoadedEventStart')];
            case 1:
              t = e.sent();
              return [2, t ? { domContentLoadedEventStart: t } : null];
          }
        });
      });
    };
    var wt = function () {
      return Object(v['__awaiter'])(void 0, void 0, void 0, function () {
        var t;
        return Object(v['__generator'])(this, function (e) {
          switch (e.label) {
            case 0:
              return [4, ie('encodedBodySize')];
            case 1:
              t = e.sent();
              return [2, t ? { encodedBodySize: t } : null];
          }
        });
      });
    };
    var Et = function (e) {
      var t = e.getEntries()[0];
      var n = t ? Math.round(t.startTime) : null;
      return n ? { firstContentfulPaint: n } : null;
    };
    var St = function () {
      return Object(v['__awaiter'])(void 0, void 0, void 0, function () {
        var t, n;
        return Object(v['__generator'])(this, function (e) {
          switch (e.label) {
            case 0:
              if (!($() && V())) return [2, null];
              e.label = 1;
            case 1:
              e.trys.push([1, 3, , 4]);
              return [
                4,
                ee({
                  type: 'paint',
                  isReadyFn: function (e) {
                    var t = e.getEntriesByName(
                      'first-contentful-paint',
                      'paint'
                    )[0];
                    return !!t;
                  },
                }),
              ];
            case 2:
              t = e.sent();
              return [2, Et(t)];
            case 3:
              n = e.sent();
              return [2, null];
            case 4:
              return [2];
          }
        });
      });
    };
    var Ot = function (e) {
      if (!e) return null;
      var t = e.getEntries();
      var n = t && t.length > 0 ? Math.round(t[t.length - 1].startTime) : null;
      return n ? { largestContentfulPaint: n } : null;
    };
    var Tt = function () {
      return Object(v['__awaiter'])(void 0, void 0, void 0, function () {
        return Object(v['__generator'])(this, function (e) {
          if (!(J() && V())) return [2, null];
          return [
            2,
            new Promise(function (i) {
              var o = null;
              ee({
                type: 'largest-contentful-paint',
                isReadyFn: function (e) {
                  var t, n;
                  o = e;
                  var r =
                    null ===
                      (n =
                        null === (t = window.performance) || void 0 === t
                          ? void 0
                          : t.timing) || void 0 === n
                      ? void 0
                      : n.loadEventStart;
                  if (r > 0) {
                    i(Ot(o));
                    return true;
                  }
                  return false;
                },
              });
              window.addEventListener('load', function () {
                o && i(Ot(o));
              });
            }),
          ];
        });
      });
    };
    var jt = function () {
      return Object(v['__awaiter'])(void 0, void 0, void 0, function () {
        var t;
        return Object(v['__generator'])(this, function (e) {
          switch (e.label) {
            case 0:
              return [4, ie('loadEventEnd')];
            case 1:
              t = e.sent();
              return [2, t ? { loadEventEnd: t } : null];
          }
        });
      });
    };
    var xt = function () {
      return Object(v['__awaiter'])(void 0, void 0, void 0, function () {
        var t;
        return Object(v['__generator'])(this, function (e) {
          switch (e.label) {
            case 0:
              return [4, ie('loadEventStart')];
            case 1:
              t = e.sent();
              return [2, t ? { loadEventStart: t } : null];
          }
        });
      });
    };
    var kt = function () {
      return Object(v['__awaiter'])(void 0, void 0, void 0, function () {
        var t;
        return Object(v['__generator'])(this, function (e) {
          switch (e.label) {
            case 0:
              return [4, ie('responseStart')];
            case 1:
              t = e.sent();
              return [2, t ? { responseStart: t } : null];
          }
        });
      });
    };
    var It = function () {
      return Object(v['__awaiter'])(void 0, void 0, void 0, function () {
        var t;
        return Object(v['__generator'])(this, function (e) {
          if (!(Z() && V())) return [2, null];
          t = false;
          window.__tti = { e: [] };
          ee({
            type: 'longtask',
            buffered: false,
            isReadyFn: function (e) {
              window.__tti.e = window.__tti.e.concat(e.getEntries());
              return t;
            },
          });
          return [
            2,
            Object(r['getFirstConsistentlyInteractive'])().then(function (e) {
              t = true;
              return { timeToInteractive: Math.round(e) };
            }),
          ];
        });
      });
    };
    function Rt() {
      return Object(v['__awaiter'])(this, void 0, void 0, function () {
        var t, n, r, i, o;
        return Object(v['__generator'])(this, function (e) {
          switch (e.label) {
            case 0:
              e.trys.push([0, 2, , 3]);
              n = (t = Object.assign).apply;
              r = [Object];
              i = [[{}]];
              return [
                4,
                Promise.all([
                  yt(),
                  mt(),
                  bt(),
                  wt(),
                  St(),
                  Tt(),
                  jt(),
                  xt(),
                  kt(),
                  It(),
                ]),
              ];
            case 1:
              return [
                2,
                n.apply(
                  t,
                  r.concat([
                    v['__spreadArrays'].apply(void 0, i.concat([e.sent()])),
                  ])
                ),
              ];
            case 2:
              o = e.sent();
              return [2, {}];
            case 3:
              return [2];
          }
        });
      });
    }
    function Ct(e, t) {
      'function' === typeof window.dispatchEvent &&
        'function' === typeof CustomEvent &&
        window.dispatchEvent(new CustomEvent(e, { detail: t }));
    }
    function Pt(e, t) {
      try {
        if (!Dt()) return;
        var n = D + e;
        window.performance.mark(n);
        var r = { userTimingEntry: Nt(n) };
        'object' === typeof t && null !== t && (r.detail = t.detail);
        Ct(w, r);
      } catch (e) {
        xe('RUMError[mark]: ' + e);
      }
    }
    function At(e, t) {
      try {
        if (!(Dt() && Lt())) return;
        var n = 'object' === typeof t && null !== t;
        var r = n && 'string' === typeof t.end;
        var i = n && 'string' === typeof t.start;
        var o = n && !!t.requireStart;
        var a = D + e;
        var u = i ? D + t.start : a;
        var c = r ? D + t.end : void 0;
        if (o && 0 === window.performance.getEntriesByName(u, 'mark').length)
          return;
        Mt(a, u, c);
        var s = Nt(a);
        var f = {
          detail: n ? t.detail : void 0,
          endMark: c,
          startMark: u,
          userTimingEntry: s,
        };
        Ct(w, f);
        return s;
      } catch (e) {
        xe('RUMError[measure]: ' + e);
      }
    }
    function Lt() {
      return (
        'performance' in window &&
        'getEntries' in window.performance &&
        'getEntriesByType' in window.performance &&
        'getEntriesByName' in window.performance
      );
    }
    function Dt() {
      return 'mark' in window.performance && 'measure' in window.performance;
    }
    function Nt(e) {
      var t = window.performance.getEntriesByName(e);
      return t[t.length - 1];
    }
    function Mt(t, e, n) {
      try {
        window.performance.measure(t, e, n);
      } catch (e) {
        if (!(e instanceof DOMException)) throw e;
        try {
          window.performance.measure(t, 'navigationStart');
        } catch (e) {
          if (!(e instanceof DOMException)) throw e;
          window.performance.measure(t);
        }
      }
    }
    var Bt = n(2574);
    var Ut = n.n(Bt);
    var Ft = {
      action: 'load',
      actor: 'user',
      event_owner_team: 'web_performance',
      event_source: 'web',
      object_type: 'website',
    };
    var qt = function (r) {
      return Object(v['__awaiter'])(void 0, void 0, void 0, function () {
        var t, n;
        return Object(v['__generator'])(this, function (e) {
          switch (e.label) {
            case 0:
              t = new Ut.a({ customSchemaName: 'performance' }, Ft);
              return [4, Rt()];
            case 1:
              n = e.sent();
              t.track(
                Object(v['__assign'])(Object(v['__assign'])({}, r), {
                  decoded_body_size_bytes: n.decodedBodySize,
                  dom_content_loaded_event_end_ms: n.domContentLoadedEventEnd,
                  dom_content_loaded_event_start_ms:
                    n.domContentLoadedEventStart,
                  encoded_body_size_bytes: n.encodedBodySize,
                  first_contentful_paint_ms: n.firstContentfulPaint,
                  largest_contentful_paint_ms: n.largestContentfulPaint,
                  load_event_end_ms: n.loadEventEnd,
                  load_event_start_ms: n.loadEventStart,
                  response_start_ms: n.responseStart,
                  time_to_interactive_ms: n.timeToInteractive,
                })
              );
              return [2];
          }
        });
      });
    };
  },
  3097: function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return o;
    });
    var r = n(433);
    var i = n(648);
    var o = (function () {
      function e(e) {
        this._limit = e;
        this._buffer = [];
      }
      e.prototype.isReady = function () {
        return void 0 === this._limit || this.length() < this._limit;
      };
      e.prototype.add = function (e) {
        var t = this;
        if (!this.isReady())
          return i['a'].reject(
            new r['a']('Not adding Promise due to buffer limit reached.')
          );
        -1 === this._buffer.indexOf(e) && this._buffer.push(e);
        e.then(function () {
          return t.remove(e);
        }).then(null, function () {
          return t.remove(e).then(null, function () {});
        });
        return e;
      };
      e.prototype.remove = function (e) {
        var t = this._buffer.splice(this._buffer.indexOf(e), 1)[0];
        return t;
      };
      e.prototype.length = function () {
        return this._buffer.length;
      };
      e.prototype.drain = function (n) {
        var r = this;
        return new i['a'](function (e) {
          var t = setTimeout(function () {
            n && n > 0 && e(false);
          }, n);
          i['a']
            .all(r._buffer)
            .then(function () {
              clearTimeout(t);
              e(true);
            })
            .then(null, function () {
              e(true);
            });
        });
      };
      return e;
    })();
  },
  3098: function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return r;
    });
    var v = n(13);
    var h = n(433);
    var _ = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w\.-]+)(?::(\d+))?\/(.+)/;
    var g = 'Invalid Dsn';
    var r = (function () {
      function e(e) {
        'string' === typeof e ? this._fromString(e) : this._fromComponents(e);
        this._validate();
      }
      e.prototype.toString = function (e) {
        void 0 === e && (e = false);
        var t = this,
          n = t.host,
          r = t.path,
          i = t.pass,
          o = t.port,
          a = t.projectId,
          u = t.protocol,
          c = t.user;
        return (
          u +
          '://' +
          c +
          (e && i ? ':' + i : '') +
          '@' +
          n +
          (o ? ':' + o : '') +
          '/' +
          (r ? r + '/' : r) +
          a
        );
      };
      e.prototype._fromString = function (e) {
        var t = _.exec(e);
        if (!t) throw new h['a'](g);
        var n = v['__read'](t.slice(1), 6),
          r = n[0],
          i = n[1],
          o = n[2],
          a = void 0 === o ? '' : o,
          u = n[3],
          c = n[4],
          s = void 0 === c ? '' : c,
          f = n[5];
        var l = '';
        var d = f;
        var p = d.split('/');
        if (p.length > 1) {
          l = p.slice(0, -1).join('/');
          d = p.pop();
        }
        this._fromComponents({
          host: u,
          pass: a,
          path: l,
          projectId: d,
          port: s,
          protocol: r,
          user: i,
        });
      };
      e.prototype._fromComponents = function (e) {
        this.protocol = e.protocol;
        this.user = e.user;
        this.pass = e.pass || '';
        this.host = e.host;
        this.port = e.port || '';
        this.path = e.path || '';
        this.projectId = e.projectId;
      };
      e.prototype._validate = function () {
        var t = this;
        ['protocol', 'user', 'host', 'projectId'].forEach(function (e) {
          if (!t[e]) throw new h['a'](g);
        });
        if ('http' !== this.protocol && 'https' !== this.protocol)
          throw new h['a'](g);
        if (this.port && isNaN(parseInt(this.port, 10))) throw new h['a'](g);
      };
      return e;
    })();
  },
  3099: function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return p;
    });
    var u = n(13);
    var i = n(119);
    var c = n(432);
    var s = n(94);
    var o = n(282);
    var r = n(917);
    var a = Object(s['i'])();
    var f = {};
    var l = {};
    function d(e) {
      if (l[e]) return;
      l[e] = true;
      switch (e) {
        case 'console':
          h();
          break;
        case 'dom':
          E();
          break;
        case 'xhr':
          m();
          break;
        case 'fetch':
          _();
          break;
        case 'history':
          w();
          break;
        case 'error':
          R();
          break;
        case 'unhandledrejection':
          P();
          break;
        default:
          c['a'].warn('unknown instrumentation type:', e);
      }
    }
    function p(e) {
      if (!e || 'string' !== typeof e.type || 'function' !== typeof e.callback)
        return;
      f[e.type] = f[e.type] || [];
      f[e.type].push(e.callback);
      d(e.type);
    }
    function v(t, e) {
      var n, r;
      if (!t || !f[t]) return;
      try {
        for (
          var i = u['__values'](f[t] || []), o = i.next();
          !o.done;
          o = i.next()
        ) {
          var a = o.value;
          try {
            a(e);
          } catch (e) {
            c['a'].error(
              'Error while triggering instrumentation handler.\nType: ' +
                t +
                '\nName: ' +
                Object(s['h'])(a) +
                '\nError: ' +
                e
            );
          }
        }
      } catch (e) {
        n = { error: e };
      } finally {
        try {
          o && !o.done && (r = i.return) && r.call(i);
        } finally {
          if (n) throw n.error;
        }
      }
    }
    function h() {
      if (!('console' in a)) return;
      ['debug', 'info', 'warn', 'error', 'log', 'assert'].forEach(function (r) {
        if (!(r in a.console)) return;
        Object(o['c'])(a.console, r, function (n) {
          return function () {
            var e = [];
            for (var t = 0; t < arguments.length; t++) e[t] = arguments[t];
            v('console', { args: e, level: r });
            n && Function.prototype.apply.call(n, a.console, e);
          };
        });
      });
    }
    function _() {
      if (!Object(r['f'])()) return;
      Object(o['c'])(a, 'fetch', function (r) {
        return function () {
          var e = [];
          for (var t = 0; t < arguments.length; t++) e[t] = arguments[t];
          var n = {
            args: e,
            fetchData: { method: g(e), url: y(e) },
            startTimestamp: Date.now(),
          };
          v('fetch', u['__assign']({}, n));
          return r.apply(a, e).then(
            function (e) {
              v(
                'fetch',
                u['__assign']({}, n, { endTimestamp: Date.now(), response: e })
              );
              return e;
            },
            function (e) {
              v(
                'fetch',
                u['__assign']({}, n, { endTimestamp: Date.now(), error: e })
              );
              throw e;
            }
          );
        };
      });
    }
    function g(e) {
      void 0 === e && (e = []);
      if ('Request' in a && Object(i['g'])(e[0], Request) && e[0].method)
        return String(e[0].method).toUpperCase();
      if (e[1] && e[1].method) return String(e[1].method).toUpperCase();
      return 'GET';
    }
    function y(e) {
      void 0 === e && (e = []);
      if ('string' === typeof e[0]) return e[0];
      if ('Request' in a && Object(i['g'])(e[0], Request)) return e[0].url;
      return String(e[0]);
    }
    function m() {
      if (!('XMLHttpRequest' in a)) return;
      var e = XMLHttpRequest.prototype;
      Object(o['c'])(e, 'open', function (r) {
        return function () {
          var e = [];
          for (var t = 0; t < arguments.length; t++) e[t] = arguments[t];
          var n = e[1];
          this.__sentry_xhr__ = {
            method: Object(i['k'])(e[0]) ? e[0].toUpperCase() : e[0],
            url: e[1],
          };
          Object(i['k'])(n) &&
            'POST' === this.__sentry_xhr__.method &&
            n.match(/sentry_key/) &&
            (this.__sentry_own_request__ = true);
          return r.apply(this, e);
        };
      });
      Object(o['c'])(e, 'send', function (i) {
        return function () {
          var e = [];
          for (var t = 0; t < arguments.length; t++) e[t] = arguments[t];
          var n = this;
          var r = { args: e, startTimestamp: Date.now(), xhr: n };
          v('xhr', u['__assign']({}, r));
          n.addEventListener('readystatechange', function () {
            if (4 === n.readyState) {
              try {
                n.__sentry_xhr__ && (n.__sentry_xhr__.status_code = n.status);
              } catch (e) {}
              v('xhr', u['__assign']({}, r, { endTimestamp: Date.now() }));
            }
          });
          return i.apply(this, e);
        };
      });
    }
    var b;
    function w() {
      if (!Object(r['e'])()) return;
      var i = a.onpopstate;
      a.onpopstate = function () {
        var e = [];
        for (var t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var n = a.location.href;
        var r = b;
        b = n;
        v('history', { from: r, to: n });
        if (i) return i.apply(this, e);
      };
      function e(o) {
        return function () {
          var e = [];
          for (var t = 0; t < arguments.length; t++) e[t] = arguments[t];
          var n = e.length > 2 ? e[2] : void 0;
          if (n) {
            var r = b;
            var i = String(n);
            b = i;
            v('history', { from: r, to: i });
          }
          return o.apply(this, e);
        };
      }
      Object(o['c'])(a.history, 'pushState', e);
      Object(o['c'])(a.history, 'replaceState', e);
    }
    function E() {
      if (!('document' in a)) return;
      a.document.addEventListener(
        'click',
        x('click', v.bind(null, 'dom')),
        false
      );
      a.document.addEventListener('keypress', k(v.bind(null, 'dom')), false);
      ['EventTarget', 'Node'].forEach(function (e) {
        var t = a[e] && a[e].prototype;
        if (!t || !t.hasOwnProperty || !t.hasOwnProperty('addEventListener'))
          return;
        Object(o['c'])(t, 'addEventListener', function (r) {
          return function (e, t, n) {
            if (t && t.handleEvent) {
              'click' === e &&
                Object(o['c'])(t, 'handleEvent', function (t) {
                  return function (e) {
                    x('click', v.bind(null, 'dom'))(e);
                    return t.call(this, e);
                  };
                });
              'keypress' === e &&
                Object(o['c'])(t, 'handleEvent', function (t) {
                  return function (e) {
                    k(v.bind(null, 'dom'))(e);
                    return t.call(this, e);
                  };
                });
            } else {
              'click' === e && x('click', v.bind(null, 'dom'), true)(this);
              'keypress' === e && k(v.bind(null, 'dom'))(this);
            }
            return r.call(this, e, t, n);
          };
        });
        Object(o['c'])(t, 'removeEventListener', function (i) {
          return function (e, t, n) {
            var r = t;
            try {
              r = r && (r.__sentry_wrapped__ || r);
            } catch (e) {}
            return i.call(this, e, r, n);
          };
        });
      });
    }
    var S = 1e3;
    var O = 0;
    var T;
    var j;
    function x(t, n, r) {
      void 0 === r && (r = false);
      return function (e) {
        T = void 0;
        if (!e || j === e) return;
        j = e;
        O && clearTimeout(O);
        r
          ? (O = setTimeout(function () {
              n({ event: e, name: t });
            }))
          : n({ event: e, name: t });
      };
    }
    function k(r) {
      return function (e) {
        var t;
        try {
          t = e.target;
        } catch (e) {
          return;
        }
        var n = t && t.tagName;
        if (!n || ('INPUT' !== n && 'TEXTAREA' !== n && !t.isContentEditable))
          return;
        T || x('input', r)(e);
        clearTimeout(T);
        T = setTimeout(function () {
          T = void 0;
        }, S);
      };
    }
    var I = null;
    function R() {
      I = a.onerror;
      a.onerror = function (e, t, n, r, i) {
        v('error', { column: r, error: i, line: n, msg: e, url: t });
        if (I) return I.apply(this, arguments);
        return false;
      };
    }
    var C = null;
    function P() {
      C = a.onunhandledrejection;
      a.onunhandledrejection = function (e) {
        v('unhandledrejection', e);
        if (C) return C.apply(this, arguments);
        return true;
      };
    }
  },
  321: function (e, t, n) {
    'use strict';
    var r = n(36);
    Object.defineProperty(t, '__esModule', { value: true });
    t.withScope = t.configureScope = t.captureEvent = t.captureException = t.captureMessage = void 0;
    var i = r(n(1609));
    var o, a, u, c, s;
    t.withScope = s;
    t.configureScope = c;
    t.captureEvent = u;
    t.captureException = a;
    t.captureMessage = o;
    var f = function e(t) {
      var n =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : i.Severity.Debug;
      console.log(''.concat(n, ': ').concat(t));
      return 'some-error-identifier';
    };
    if (window.SQUARESPACE_SENTRY) {
      t.captureMessage = o = window.SQUARESPACE_SENTRY.captureMessage;
      t.captureException = a = window.SQUARESPACE_SENTRY.captureException;
      t.captureEvent = u = window.SQUARESPACE_SENTRY.captureEvent;
      t.configureScope = c = window.SQUARESPACE_SENTRY.configureScope;
      t.withScope = s = window.SQUARESPACE_SENTRY.withScope;
    } else {
      t.captureMessage = o = f;
      t.captureException = a = f;
      t.captureEvent = u = f;
      t.configureScope = c = function e() {};
      t.withScope = s = function e() {};
    }
  },
  36: function (e, t) {
    function n(e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e)
        for (var n in e)
          if (Object.prototype.hasOwnProperty.call(e, n)) {
            var r =
              Object.defineProperty && Object.getOwnPropertyDescriptor
                ? Object.getOwnPropertyDescriptor(e, n)
                : {};
            r.get || r.set ? Object.defineProperty(t, n, r) : (t[n] = e[n]);
          }
      t['default'] = e;
      return t;
    }
    e.exports = n;
  },
  3655: function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return r;
    });
    var r;
    (function (e) {
      e['Fatal'] = 'fatal';
      e['Error'] = 'error';
      e['Warning'] = 'warning';
      e['Log'] = 'log';
      e['Info'] = 'info';
      e['Debug'] = 'debug';
      e['Critical'] = 'critical';
    })((r = r || {}));
    (function (t) {
      function e(e) {
        switch (e) {
          case 'debug':
            return t.Debug;
          case 'info':
            return t.Info;
          case 'warn':
          case 'warning':
            return t.Warning;
          case 'error':
            return t.Error;
          case 'fatal':
            return t.Fatal;
          case 'critical':
            return t.Critical;
          case 'log':
          default:
            return t.Log;
        }
      }
      t.fromString = e;
    })((r = r || {}));
  },
  3656: function (e, r, g) {
    'use strict';
    (function (i) {
      g.d(r, 'a', function () {
        return c;
      });
      g.d(r, 'b', function () {
        return e;
      });
      g.d(r, 'c', function () {
        return h;
      });
      var l = g(13);
      var d = g(94);
      var o = g(432);
      var a = g(791);
      var u = 3;
      var p = 100;
      var v = 100;
      var c = (function () {
        function e(e, t, n) {
          void 0 === t && (t = new a['a']());
          void 0 === n && (n = u);
          this._version = n;
          this._stack = [];
          this._stack.push({ client: e, scope: t });
        }
        e.prototype._invokeClient = function (e) {
          var t;
          var n = [];
          for (var r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
          var i = this.getStackTop();
          i &&
            i.client &&
            i.client[e] &&
            (t = i.client)[e].apply(t, l['__spread'](n, [i.scope]));
        };
        e.prototype.isOlderThan = function (e) {
          return this._version < e;
        };
        e.prototype.bindClient = function (e) {
          var t = this.getStackTop();
          t.client = e;
          e && e.setupIntegrations && e.setupIntegrations();
        };
        e.prototype.pushScope = function () {
          var e = this.getStack();
          var t = e.length > 0 ? e[e.length - 1].scope : void 0;
          var n = a['a'].clone(t);
          this.getStack().push({ client: this.getClient(), scope: n });
          return n;
        };
        e.prototype.popScope = function () {
          return void 0 !== this.getStack().pop();
        };
        e.prototype.withScope = function (e) {
          var t = this.pushScope();
          try {
            e(t);
          } finally {
            this.popScope();
          }
        };
        e.prototype.getClient = function () {
          return this.getStackTop().client;
        };
        e.prototype.getScope = function () {
          return this.getStackTop().scope;
        };
        e.prototype.getStack = function () {
          return this._stack;
        };
        e.prototype.getStackTop = function () {
          return this._stack[this._stack.length - 1];
        };
        e.prototype.captureException = function (e, t) {
          var n = (this._lastEventId = Object(d['q'])());
          var r = t;
          if (!t) {
            var i = void 0;
            try {
              throw new Error('Sentry syntheticException');
            } catch (e) {
              i = e;
            }
            r = { originalException: e, syntheticException: i };
          }
          this._invokeClient(
            'captureException',
            e,
            l['__assign']({}, r, { event_id: n })
          );
          return n;
        };
        e.prototype.captureMessage = function (e, t, n) {
          var r = (this._lastEventId = Object(d['q'])());
          var i = n;
          if (!n) {
            var o = void 0;
            try {
              throw new Error(e);
            } catch (e) {
              o = e;
            }
            i = { originalException: e, syntheticException: o };
          }
          this._invokeClient(
            'captureMessage',
            e,
            t,
            l['__assign']({}, i, { event_id: r })
          );
          return r;
        };
        e.prototype.captureEvent = function (e, t) {
          var n = (this._lastEventId = Object(d['q'])());
          this._invokeClient(
            'captureEvent',
            e,
            l['__assign']({}, t, { event_id: n })
          );
          return n;
        };
        e.prototype.lastEventId = function () {
          return this._lastEventId;
        };
        e.prototype.addBreadcrumb = function (e, t) {
          var n = this.getStackTop();
          if (!n.scope || !n.client) return;
          var r = (n.client.getOptions && n.client.getOptions()) || {},
            i = r.beforeBreadcrumb,
            o = void 0 === i ? null : i,
            a = r.maxBreadcrumbs,
            u = void 0 === a ? p : a;
          if (u <= 0) return;
          var c = Object(d['p'])();
          var s = l['__assign']({ timestamp: c }, e);
          var f = o
            ? Object(d['d'])(function () {
                return o(s, t);
              })
            : s;
          if (null === f) return;
          n.scope.addBreadcrumb(f, Math.min(u, v));
        };
        e.prototype.setUser = function (e) {
          var t = this.getStackTop();
          if (!t.scope) return;
          t.scope.setUser(e);
        };
        e.prototype.setTags = function (e) {
          var t = this.getStackTop();
          if (!t.scope) return;
          t.scope.setTags(e);
        };
        e.prototype.setExtras = function (e) {
          var t = this.getStackTop();
          if (!t.scope) return;
          t.scope.setExtras(e);
        };
        e.prototype.setTag = function (e, t) {
          var n = this.getStackTop();
          if (!n.scope) return;
          n.scope.setTag(e, t);
        };
        e.prototype.setExtra = function (e, t) {
          var n = this.getStackTop();
          if (!n.scope) return;
          n.scope.setExtra(e, t);
        };
        e.prototype.setContext = function (e, t) {
          var n = this.getStackTop();
          if (!n.scope) return;
          n.scope.setContext(e, t);
        };
        e.prototype.configureScope = function (e) {
          var t = this.getStackTop();
          t.scope && t.client && e(t.scope);
        };
        e.prototype.run = function (e) {
          var t = n(this);
          try {
            e(this);
          } finally {
            n(t);
          }
        };
        e.prototype.getIntegration = function (t) {
          var e = this.getClient();
          if (!e) return null;
          try {
            return e.getIntegration(t);
          } catch (e) {
            o['a'].warn(
              'Cannot retrieve integration ' + t.id + ' from the current Hub'
            );
            return null;
          }
        };
        e.prototype.startSpan = function (e, t) {
          void 0 === t && (t = false);
          return this._callExtensionMethod('startSpan', e, t);
        };
        e.prototype.traceHeaders = function () {
          return this._callExtensionMethod('traceHeaders');
        };
        e.prototype._callExtensionMethod = function (e) {
          var t = [];
          for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          var r = s();
          var i = r.__SENTRY__;
          if (i && i.extensions && 'function' === typeof i.extensions[e])
            return i.extensions[e].apply(this, t);
          o['a'].warn(
            'Extension method ' + e + " couldn't be found, doing nothing."
          );
        };
        return e;
      })();
      function s() {
        var e = Object(d['i'])();
        e.__SENTRY__ = e.__SENTRY__ || { extensions: {}, hub: void 0 };
        return e;
      }
      function n(e) {
        var t = s();
        var n = h(t);
        _(t, e);
        return n;
      }
      function e() {
        var e = s();
        (f(e) && !h(e).isOlderThan(u)) || _(e, new c());
        if (Object(d['l'])()) return t(e);
        return h(e);
      }
      function t(t) {
        try {
          var e = Object(d['f'])(i, 'domain');
          var n = e.active;
          if (!n) return h(t);
          if (!f(n) || h(n).isOlderThan(u)) {
            var r = h(t).getStackTop();
            _(n, new c(r.client, a['a'].clone(r.scope)));
          }
          return h(n);
        } catch (e) {
          return h(t);
        }
      }
      function f(e) {
        if (e && e.__SENTRY__ && e.__SENTRY__.hub) return true;
        return false;
      }
      function h(e) {
        if (e && e.__SENTRY__ && e.__SENTRY__.hub) return e.__SENTRY__.hub;
        e.__SENTRY__ = e.__SENTRY__ || {};
        e.__SENTRY__.hub = new c();
        return e.__SENTRY__.hub;
      }
      function _(e, t) {
        if (!e) return false;
        e.__SENTRY__ = e.__SENTRY__ || {};
        e.__SENTRY__.hub = t;
        return true;
      }
    }.call(this, g(1016)(e)));
  },
  4: function (e, t) {
    function n(e) {
      return e && e.__esModule ? e : { default: e };
    }
    e.exports = n;
  },
  431: function (e, t, n) {
    'use strict';
    n.d(t, 'd', function () {
      return i;
    });
    n.d(t, 'c', function () {
      return o;
    });
    n.d(t, 'b', function () {
      return a;
    });
    n.d(t, 'a', function () {
      return u;
    });
    var r = n(119);
    function i(e, t) {
      void 0 === t && (t = 0);
      if ('string' !== typeof e || 0 === t) return e;
      return e.length <= t ? e : e.substr(0, t) + '...';
    }
    function o(e, t) {
      var n = e;
      var r = n.length;
      if (r <= 150) return n;
      t > r && (t = r);
      var i = Math.max(t - 60, 0);
      i < 5 && (i = 0);
      var o = Math.min(i + 140, r);
      o > r - 5 && (o = r);
      o === r && (i = Math.max(o - 140, 0));
      n = n.slice(i, o);
      i > 0 && (n = "'{snip} " + n);
      o < r && (n += ' {snip}');
      return n;
    }
    function a(e, t) {
      if (!Array.isArray(e)) return '';
      var n = [];
      for (var r = 0; r < e.length; r++) {
        var i = e[r];
        try {
          n.push(String(i));
        } catch (e) {
          n.push('[value cannot be serialized]');
        }
      }
      return n.join(t);
    }
    function u(e, t) {
      if (Object(r['j'])(t)) return t.test(e);
      if ('string' === typeof t) return -1 !== e.indexOf(t);
      return false;
    }
  },
  432: function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return u;
    });
    var r = n(94);
    var i = Object(r['i'])();
    var o = 'Sentry Logger ';
    var a = (function () {
      function e() {
        this._enabled = false;
      }
      e.prototype.disable = function () {
        this._enabled = false;
      };
      e.prototype.enable = function () {
        this._enabled = true;
      };
      e.prototype.log = function () {
        var e = [];
        for (var t = 0; t < arguments.length; t++) e[t] = arguments[t];
        if (!this._enabled) return;
        Object(r['d'])(function () {
          i.console.log(o + '[Log]: ' + e.join(' '));
        });
      };
      e.prototype.warn = function () {
        var e = [];
        for (var t = 0; t < arguments.length; t++) e[t] = arguments[t];
        if (!this._enabled) return;
        Object(r['d'])(function () {
          i.console.warn(o + '[Warn]: ' + e.join(' '));
        });
      };
      e.prototype.error = function () {
        var e = [];
        for (var t = 0; t < arguments.length; t++) e[t] = arguments[t];
        if (!this._enabled) return;
        Object(r['d'])(function () {
          i.console.error(o + '[Error]: ' + e.join(' '));
        });
      };
      return e;
    })();
    i.__SENTRY__ = i.__SENTRY__ || {};
    var u = i.__SENTRY__.logger || (i.__SENTRY__.logger = new a());
  },
  433: function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return u;
    });
    var i = n(13);
    var o =
      Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? r : a);
    function r(e, t) {
      e.__proto__ = t;
      return e;
    }
    function a(e, t) {
      for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
      return e;
    }
    var u = (function (r) {
      i['__extends'](e, r);
      function e(e) {
        var t = this.constructor;
        var n = r.call(this, e) || this;
        n.message = e;
        n.name = t.prototype.constructor.name;
        o(n, t.prototype);
        return n;
      }
      return e;
    })(Error);
  },
  648: function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return o;
    });
    var r = n(119);
    var i;
    (function (e) {
      e['PENDING'] = 'PENDING';
      e['RESOLVED'] = 'RESOLVED';
      e['REJECTED'] = 'REJECTED';
    })((i = i || {}));
    var o = (function () {
      function a(e) {
        var n = this;
        this._state = i.PENDING;
        this._handlers = [];
        this._resolve = function (e) {
          n._setResult(i.RESOLVED, e);
        };
        this._reject = function (e) {
          n._setResult(i.REJECTED, e);
        };
        this._setResult = function (e, t) {
          if (n._state !== i.PENDING) return;
          if (Object(r['m'])(t)) {
            t.then(n._resolve, n._reject);
            return;
          }
          n._state = e;
          n._value = t;
          n._executeHandlers();
        };
        this._attachHandler = function (e) {
          n._handlers = n._handlers.concat(e);
          n._executeHandlers();
        };
        this._executeHandlers = function () {
          if (n._state === i.PENDING) return;
          n._state === i.REJECTED
            ? n._handlers.forEach(function (e) {
                e.onrejected && e.onrejected(n._value);
              })
            : n._handlers.forEach(function (e) {
                e.onfulfilled && e.onfulfilled(n._value);
              });
          n._handlers = [];
        };
        try {
          e(this._resolve, this._reject);
        } catch (e) {
          this._reject(e);
        }
      }
      a.prototype.toString = function () {
        return '[object SyncPromise]';
      };
      a.resolve = function (t) {
        return new a(function (e) {
          e(t);
        });
      };
      a.reject = function (n) {
        return new a(function (e, t) {
          t(n);
        });
      };
      a.all = function (e) {
        return new a(function (n, r) {
          if (!Array.isArray(e)) {
            r(new TypeError('Promise.all requires an array as input.'));
            return;
          }
          if (0 === e.length) {
            n([]);
            return;
          }
          var i = e.length;
          var o = [];
          e.forEach(function (e, t) {
            a.resolve(e)
              .then(function (e) {
                o[t] = e;
                i -= 1;
                if (0 !== i) return;
                n(o);
              })
              .then(null, r);
          });
        });
      };
      a.prototype.then = function (r, i) {
        var e = this;
        return new a(function (t, n) {
          e._attachHandler({
            onfulfilled: function (e) {
              if (!r) {
                t(e);
                return;
              }
              try {
                t(r(e));
                return;
              } catch (e) {
                n(e);
                return;
              }
            },
            onrejected: function (e) {
              if (!i) {
                n(e);
                return;
              }
              try {
                t(i(e));
                return;
              } catch (e) {
                n(e);
                return;
              }
            },
          });
        });
      };
      a.prototype.catch = function (e) {
        return this.then(function (e) {
          return e;
        }, e);
      };
      a.prototype.finally = function (i) {
        var o = this;
        return new a(function (e, t) {
          var n;
          var r;
          return o
            .then(
              function (e) {
                r = false;
                n = e;
                i && i();
              },
              function (e) {
                r = true;
                n = e;
                i && i();
              }
            )
            .then(function () {
              if (r) {
                t(n);
                return;
              }
              e(n);
            });
        });
      };
      return a;
    })();
  },
  651: function (e, t) {
    var n = {
      EXPIRED: 1,
      PASTDUE: 2,
      TRIAL: 3,
      BETA: 4,
      REMOVED: 5,
      INTERNAL: 6,
      COMPED: 7,
      PAID: 8,
      V5_LINKED: 11,
      ACTIVE_PARKING_PAGE: 12,
      RESOLD: 13,
      RESOLD_GRACE_PERIOD: 14,
    };
    e.exports = n;
  },
  791: function (e, t, n) {
    'use strict';
    n.d(t, 'a', function () {
      return o;
    });
    n.d(t, 'b', function () {
      return u;
    });
    var s = n(13);
    var r = n(648);
    var f = n(119);
    var i = n(94);
    var o = (function () {
      function n() {
        this._notifyingListeners = false;
        this._scopeListeners = [];
        this._eventProcessors = [];
        this._breadcrumbs = [];
        this._user = {};
        this._tags = {};
        this._extra = {};
        this._context = {};
      }
      n.prototype.addScopeListener = function (e) {
        this._scopeListeners.push(e);
      };
      n.prototype.addEventProcessor = function (e) {
        this._eventProcessors.push(e);
        return this;
      };
      n.prototype._notifyScopeListeners = function () {
        var t = this;
        if (!this._notifyingListeners) {
          this._notifyingListeners = true;
          setTimeout(function () {
            t._scopeListeners.forEach(function (e) {
              e(t);
            });
            t._notifyingListeners = false;
          });
        }
      };
      n.prototype._notifyEventProcessors = function (i, o, a, u) {
        var c = this;
        void 0 === u && (u = 0);
        return new r['a'](function (t, e) {
          var n = i[u];
          if (null === o || 'function' !== typeof n) t(o);
          else {
            var r = n(s['__assign']({}, o), a);
            Object(f['m'])(r)
              ? r
                  .then(function (e) {
                    return c._notifyEventProcessors(i, e, a, u + 1).then(t);
                  })
                  .then(null, e)
              : c
                  ._notifyEventProcessors(i, r, a, u + 1)
                  .then(t)
                  .then(null, e);
          }
        });
      };
      n.prototype.setUser = function (e) {
        this._user = e || {};
        this._notifyScopeListeners();
        return this;
      };
      n.prototype.setTags = function (e) {
        this._tags = s['__assign']({}, this._tags, e);
        this._notifyScopeListeners();
        return this;
      };
      n.prototype.setTag = function (e, t) {
        var n;
        this._tags = s['__assign']({}, this._tags, ((n = {}), (n[e] = t), n));
        this._notifyScopeListeners();
        return this;
      };
      n.prototype.setExtras = function (e) {
        this._extra = s['__assign']({}, this._extra, e);
        this._notifyScopeListeners();
        return this;
      };
      n.prototype.setExtra = function (e, t) {
        var n;
        this._extra = s['__assign']({}, this._extra, ((n = {}), (n[e] = t), n));
        this._notifyScopeListeners();
        return this;
      };
      n.prototype.setFingerprint = function (e) {
        this._fingerprint = e;
        this._notifyScopeListeners();
        return this;
      };
      n.prototype.setLevel = function (e) {
        this._level = e;
        this._notifyScopeListeners();
        return this;
      };
      n.prototype.setTransaction = function (e) {
        this._transaction = e;
        this._span && (this._span.transaction = e);
        this._notifyScopeListeners();
        return this;
      };
      n.prototype.setContext = function (e, t) {
        var n;
        this._context = s['__assign'](
          {},
          this._context,
          ((n = {}), (n[e] = t), n)
        );
        this._notifyScopeListeners();
        return this;
      };
      n.prototype.setSpan = function (e) {
        this._span = e;
        this._notifyScopeListeners();
        return this;
      };
      n.prototype.getSpan = function () {
        return this._span;
      };
      n.clone = function (e) {
        var t = new n();
        if (e) {
          t._breadcrumbs = s['__spread'](e._breadcrumbs);
          t._tags = s['__assign']({}, e._tags);
          t._extra = s['__assign']({}, e._extra);
          t._context = s['__assign']({}, e._context);
          t._user = e._user;
          t._level = e._level;
          t._span = e._span;
          t._transaction = e._transaction;
          t._fingerprint = e._fingerprint;
          t._eventProcessors = s['__spread'](e._eventProcessors);
        }
        return t;
      };
      n.prototype.clear = function () {
        this._breadcrumbs = [];
        this._tags = {};
        this._extra = {};
        this._user = {};
        this._context = {};
        this._level = void 0;
        this._transaction = void 0;
        this._fingerprint = void 0;
        this._span = void 0;
        this._notifyScopeListeners();
        return this;
      };
      n.prototype.addBreadcrumb = function (e, t) {
        var n = s['__assign']({ timestamp: Object(i['p'])() }, e);
        this._breadcrumbs =
          void 0 !== t && t >= 0
            ? s['__spread'](this._breadcrumbs, [n]).slice(-t)
            : s['__spread'](this._breadcrumbs, [n]);
        this._notifyScopeListeners();
        return this;
      };
      n.prototype.clearBreadcrumbs = function () {
        this._breadcrumbs = [];
        this._notifyScopeListeners();
        return this;
      };
      n.prototype._applyFingerprint = function (e) {
        e.fingerprint = e.fingerprint
          ? Array.isArray(e.fingerprint)
            ? e.fingerprint
            : [e.fingerprint]
          : [];
        this._fingerprint &&
          (e.fingerprint = e.fingerprint.concat(this._fingerprint));
        e.fingerprint && !e.fingerprint.length && delete e.fingerprint;
      };
      n.prototype.applyToEvent = function (e, t) {
        this._extra &&
          Object.keys(this._extra).length &&
          (e.extra = s['__assign']({}, this._extra, e.extra));
        this._tags &&
          Object.keys(this._tags).length &&
          (e.tags = s['__assign']({}, this._tags, e.tags));
        this._user &&
          Object.keys(this._user).length &&
          (e.user = s['__assign']({}, this._user, e.user));
        this._context &&
          Object.keys(this._context).length &&
          (e.contexts = s['__assign']({}, this._context, e.contexts));
        this._level && (e.level = this._level);
        this._transaction && (e.transaction = this._transaction);
        this._span &&
          (e.contexts = s['__assign'](
            { trace: this._span.getTraceContext() },
            e.contexts
          ));
        this._applyFingerprint(e);
        e.breadcrumbs = s['__spread'](e.breadcrumbs || [], this._breadcrumbs);
        e.breadcrumbs = e.breadcrumbs.length > 0 ? e.breadcrumbs : void 0;
        return this._notifyEventProcessors(
          s['__spread'](a(), this._eventProcessors),
          e,
          t
        );
      };
      return n;
    })();
    function a() {
      var e = Object(i['i'])();
      e.__SENTRY__ = e.__SENTRY__ || {};
      e.__SENTRY__.globalEventProcessors =
        e.__SENTRY__.globalEventProcessors || [];
      return e.__SENTRY__.globalEventProcessors;
    }
    function u(e) {
      a().push(e);
    }
  },
  916: function (e, t, n) {
    'use strict';
    n.r(t);
    n.d(t, 'StaticPraetorClient', function () {
      return c;
    });
    n.d(t, 'Configuration', function () {
      return i;
    });
    n.d(t, 'ExperimentType', function () {
      return a;
    });
    var r = 'true';
    var o = 'default';
    var a;
    (function (e) {
      e['FEATURE_TOGGLE'] = 'FEATURE_TOGGLE';
      e['AB_TEST'] = 'AB_TEST';
    })((a = a || {}));
    var i = (function () {
      function e(e) {
        var t = this;
        this.experiments = {};
        this.isConfigurationLoaded = Boolean(e.isConfigurationLoaded);
        Array.isArray(e.experimentContextList) &&
          e.experimentContextList.forEach(function (e) {
            null !== e &&
              'object' === typeof e &&
              e.hasOwnProperty('name') &&
              (t.experiments[e.name] = e);
          });
      }
      e.prototype.isValid = function () {
        return this.isConfigurationLoaded;
      };
      e.prototype.getContext = function (e) {
        return this.experiments[e];
      };
      return e;
    })();
    var u = (function () {
      function e(e) {
        this.configuration = new i(e);
      }
      e.prototype.getFeatureToggle = function (e, t) {
        var n = this.getContextValidity(e, a.FEATURE_TOGGLE),
          r = n.context,
          i = n.error;
        if (i || null === r) return { enabled: t, error: i };
        if (r.containsError)
          return {
            enabled: this.isFeatureToggleEnabled(r),
            error:
              'The specified feature has an invalid server-side definition',
          };
        return { enabled: this.isFeatureToggleEnabled(r) };
      };
      e.prototype.getABTestVariant = function (e, t) {
        var n = this.getContextValidity(e, a.AB_TEST),
          r = n.context,
          i = n.error;
        if (i || null === r) return { error: i, segment: o, variant: t };
        if (r.containsError)
          return {
            error:
              'The specified feature has an invalid server-side definition',
            segment: r.segmentName,
            variant: r.variant,
          };
        return { segment: r.segmentName, variant: r.variant };
      };
      e.prototype.getAllExperiments = function () {
        return this.configuration;
      };
      e.prototype.getContextValidity = function (e, t) {
        if (!this.configuration.isValid())
          return {
            context: null,
            error: 'The underlying Praetor configuration is not loaded',
          };
        var n = this.configuration.getContext(e);
        if (void 0 === n)
          return {
            context: null,
            error: 'The specified feature does not exist',
          };
        if (n.experimentType !== t)
          return {
            context: null,
            error: 'The specified feature is not a ' + t,
          };
        return { context: n };
      };
      e.prototype.isFeatureToggleEnabled = function (e) {
        return e.variant === r;
      };
      return e;
    })();
    var c = u;
  },
  917: function (e, t, n) {
    'use strict';
    n.d(t, 'c', function () {
      return r;
    });
    n.d(t, 'a', function () {
      return a;
    });
    n.d(t, 'b', function () {
      return u;
    });
    n.d(t, 'd', function () {
      return c;
    });
    n.d(t, 'f', function () {
      return f;
    });
    n.d(t, 'h', function () {
      return l;
    });
    n.d(t, 'g', function () {
      return d;
    });
    n.d(t, 'e', function () {
      return p;
    });
    var i = n(432);
    var o = n(94);
    function r() {
      try {
        new ErrorEvent('');
        return true;
      } catch (e) {
        return false;
      }
    }
    function a() {
      try {
        new DOMError('');
        return true;
      } catch (e) {
        return false;
      }
    }
    function u() {
      try {
        new DOMException('');
        return true;
      } catch (e) {
        return false;
      }
    }
    function c() {
      if (!('fetch' in Object(o['i'])())) return false;
      try {
        new Headers();
        new Request('');
        new Response();
        return true;
      } catch (e) {
        return false;
      }
    }
    function s(e) {
      return (
        e &&
        /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
      );
    }
    function f() {
      if (!c()) return false;
      var e = Object(o['i'])();
      if (s(e.fetch)) return true;
      var t = false;
      var n = e.document;
      if (n)
        try {
          var r = n.createElement('iframe');
          r.hidden = true;
          n.head.appendChild(r);
          r.contentWindow &&
            r.contentWindow.fetch &&
            (t = s(r.contentWindow.fetch));
          n.head.removeChild(r);
        } catch (e) {
          i['a'].warn(
            'Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ',
            e
          );
        }
      return t;
    }
    function l() {
      return 'ReportingObserver' in Object(o['i'])();
    }
    function d() {
      if (!c()) return false;
      try {
        new Request('_', { referrerPolicy: 'origin' });
        return true;
      } catch (e) {
        return false;
      }
    }
    function p() {
      var e = Object(o['i'])();
      var t = e.chrome;
      var n = t && t.app && t.app.runtime;
      var r =
        'history' in e && !!e.history.pushState && !!e.history.replaceState;
      return !n && r;
    }
  },
  94: function (e, R, C) {
    'use strict';
    (function (e, t, n) {
      C.d(R, 'f', function () {
        return r;
      });
      C.d(R, 'l', function () {
        return i;
      });
      C.d(R, 'i', function () {
        return u;
      });
      C.d(R, 'q', function () {
        return c;
      });
      C.d(R, 'o', function () {
        return f;
      });
      C.d(R, 'g', function () {
        return l;
      });
      C.d(R, 'd', function () {
        return d;
      });
      C.d(R, 'c', function () {
        return p;
      });
      C.d(R, 'b', function () {
        return v;
      });
      C.d(R, 'j', function () {
        return h;
      });
      C.d(R, 'k', function () {
        return _;
      });
      C.d(R, 'e', function () {
        return w;
      });
      C.d(R, 'p', function () {
        return E;
      });
      C.d(R, 'n', function () {
        return O;
      });
      C.d(R, 'm', function () {
        return j;
      });
      C.d(R, 'h', function () {
        return k;
      });
      C.d(R, 'a', function () {
        return I;
      });
      var s = C(119);
      var a = C(431);
      function r(e, t) {
        return e.require(t);
      }
      function i() {
        return (
          '[object process]' ===
          Object.prototype.toString.call('undefined' !== typeof e ? e : 0)
        );
      }
      var o = {};
      function u() {
        return i()
          ? t
          : 'undefined' !== typeof window
          ? window
          : 'undefined' !== typeof self
          ? self
          : o;
      }
      function c() {
        var e = u();
        var t = e.crypto || e.msCrypto;
        if (!(void 0 === t) && t.getRandomValues) {
          var n = new Uint16Array(8);
          t.getRandomValues(n);
          n[3] = (4095 & n[3]) | 16384;
          n[4] = (16383 & n[4]) | 32768;
          var r = function (e) {
            var t = e.toString(16);
            while (t.length < 4) t = '0' + t;
            return t;
          };
          return (
            r(n[0]) +
            r(n[1]) +
            r(n[2]) +
            r(n[3]) +
            r(n[4]) +
            r(n[5]) +
            r(n[6]) +
            r(n[7])
          );
        }
        return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (
          e
        ) {
          var t = (16 * Math.random()) | 0;
          var n = 'x' === e ? t : (3 & t) | 8;
          return n.toString(16);
        });
      }
      function f(e) {
        if (!e) return {};
        var t = e.match(
          /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/
        );
        if (!t) return {};
        var n = t[6] || '';
        var r = t[8] || '';
        return {
          host: t[4],
          path: t[5],
          protocol: t[2],
          relative: t[5] + n + r,
        };
      }
      function l(e) {
        if (e.message) return e.message;
        if (e.exception && e.exception.values && e.exception.values[0]) {
          var t = e.exception.values[0];
          if (t.type && t.value) return t.type + ': ' + t.value;
          return t.type || t.value || e.event_id || '<unknown>';
        }
        return e.event_id || '<unknown>';
      }
      function d(e) {
        var t = u();
        var n = ['debug', 'info', 'warn', 'error', 'log', 'assert'];
        if (!('console' in t)) return e();
        var r = t.console;
        var i = {};
        n.forEach(function (e) {
          if (e in t.console && r[e].__sentry_original__) {
            i[e] = r[e];
            r[e] = r[e].__sentry_original__;
          }
        });
        var o = e();
        Object.keys(i).forEach(function (e) {
          r[e] = i[e];
        });
        return o;
      }
      function p(e, t, n) {
        e.exception = e.exception || {};
        e.exception.values = e.exception.values || [];
        e.exception.values[0] = e.exception.values[0] || {};
        e.exception.values[0].value = e.exception.values[0].value || t || '';
        e.exception.values[0].type = e.exception.values[0].type || n || 'Error';
      }
      function v(t, n) {
        void 0 === n && (n = {});
        try {
          t.exception.values[0].mechanism =
            t.exception.values[0].mechanism || {};
          Object.keys(n).forEach(function (e) {
            t.exception.values[0].mechanism[e] = n[e];
          });
        } catch (e) {}
      }
      function h() {
        try {
          return document.location.href;
        } catch (e) {
          return '';
        }
      }
      function _(e) {
        try {
          var t = e;
          var n = 5;
          var r = 80;
          var i = [];
          var o = 0;
          var a = 0;
          var u = ' > ';
          var c = u.length;
          var s = void 0;
          while (t && o++ < n) {
            s = g(t);
            if ('html' === s || (o > 1 && a + i.length * c + s.length >= r))
              break;
            i.push(s);
            a += s.length;
            t = t.parentNode;
          }
          return i.reverse().join(u);
        } catch (e) {
          return '<unknown>';
        }
      }
      function g(e) {
        var t = e;
        var n = [];
        var r;
        var i;
        var o;
        var a;
        var u;
        if (!t || !t.tagName) return '';
        n.push(t.tagName.toLowerCase());
        t.id && n.push('#' + t.id);
        r = t.className;
        if (r && Object(s['k'])(r)) {
          i = r.split(/\s+/);
          for (u = 0; u < i.length; u++) n.push('.' + i[u]);
        }
        var c = ['type', 'name', 'title', 'alt'];
        for (u = 0; u < c.length; u++) {
          o = c[u];
          a = t.getAttribute(o);
          a && n.push('[' + o + '="' + a + '"]');
        }
        return n.join('');
      }
      var y = Date.now();
      var m = 0;
      var b = {
        now: function () {
          var e = Date.now() - y;
          e < m && (e = m);
          m = e;
          return e;
        },
        timeOrigin: y,
      };
      var w = (function () {
        if (i())
          try {
            var e = r(n, 'perf_hooks');
            return e.performance;
          } catch (e) {
            return b;
          }
        u().performance &&
          void 0 === performance.timeOrigin &&
          (performance.timeOrigin =
            (performance.timing && performance.timing.navigationStart) || y);
        return u().performance || b;
      })();
      function E() {
        return (w.timeOrigin + w.now()) / 1e3;
      }
      var S = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;
      function O(e) {
        var t = e.match(S) || [];
        var n = parseInt(t[1], 10);
        var r = parseInt(t[2], 10);
        var i = parseInt(t[3], 10);
        return {
          buildmetadata: t[5],
          major: isNaN(n) ? void 0 : n,
          minor: isNaN(r) ? void 0 : r,
          patch: isNaN(i) ? void 0 : i,
          prerelease: t[4],
        };
      }
      var T = 6e4;
      function j(e, t) {
        if (!t) return T;
        var n = parseInt('' + t, 10);
        if (!isNaN(n)) return 1e3 * n;
        var r = Date.parse('' + t);
        if (!isNaN(r)) return r - e;
        return T;
      }
      var x = '<anonymous>';
      function k(e) {
        try {
          if (!e || 'function' !== typeof e) return x;
          return e.name || x;
        } catch (e) {
          return x;
        }
      }
      function I(e, t, n) {
        void 0 === n && (n = 5);
        var r = t.lineno || 0;
        var i = e.length;
        var o = Math.max(Math.min(i, r - 1), 0);
        t.pre_context = e.slice(Math.max(0, o - n), o).map(function (e) {
          return Object(a['c'])(e, 0);
        });
        t.context_line = Object(a['c'])(e[Math.min(i - 1, o)], t.colno || 0);
        t.post_context = e
          .slice(Math.min(o + 1, i), o + 1 + n)
          .map(function (e) {
            return Object(a['c'])(e, 0);
          });
      }
    }.call(this, C(130), C(98), C(1016)(e)));
  },
  98: function (e, t) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function('return this')();
    } catch (e) {
      'object' === typeof window && (n = window);
    }
    e.exports = n;
  },
});
//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/performance-0385197ef69d3ce60c85c-min.en-US.js.map
