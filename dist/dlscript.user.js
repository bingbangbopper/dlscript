// ==UserScript==
// @name         dlscript
// @namespace    barbra/streisand
// @version      0.0.6
// @icon         https://vitejs.dev/logo.svg
// @downloadURL  https://github.com/bingbangbopper/dlscript/releases/latest/download/dlscript.user.js
// @updateURL    https://github.com/bingbangbopper/dlscript/releases/latest/download/dlscript.user.js
// @match        *://*.twitter.com/*
// @match        *://*.x.com/*
// @match        *://x.com/*
// @require      https://cdn.jsdelivr.net/npm/preact@10.28.4/dist/preact.min.js
// @grant        GM_addStyle
// @grant        unsafeWindow
// ==/UserScript==

(function (preact) {
  'use strict';

  var f$1 = 0;
  function u$1(e2, t2, n, o2, i2, u2) {
    t2 || (t2 = {});
    var a2, c2, p2 = t2;
    if ("ref" in p2) for (c2 in p2 = {}, t2) "ref" == c2 ? a2 = t2[c2] : p2[c2] = t2[c2];
    var l2 = { type: e2, props: p2, key: n, ref: a2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f$1, __i: -1, __u: 0, __source: i2, __self: u2 };
    if ("function" == typeof e2 && (a2 = e2.defaultProps)) for (c2 in a2) void 0 === p2[c2] && (p2[c2] = a2[c2]);
    return preact.options.vnode && preact.options.vnode(l2), l2;
  }
  var t, r$1, u, i, o = 0, f = [], c = preact.options, e = c.__b, a = c.__r, v = c.diffed, l = c.__c, m = c.unmount, s = c.__;
  function p(n, t2) {
    c.__h && c.__h(r$1, n, o || t2), o = 0;
    var u2 = r$1.__H || (r$1.__H = { __: [], __h: [] });
    return n >= u2.__.length && u2.__.push({}), u2.__[n];
  }
  function d(n) {
    return o = 1, h(D$2, n);
  }
  function h(n, u2, i2) {
    var o2 = p(t++, 2);
    if (o2.t = n, !o2.__c && (o2.__ = [i2 ? i2(u2) : D$2(void 0, u2), function(n2) {
      var t2 = o2.__N ? o2.__N[0] : o2.__[0], r2 = o2.t(t2, n2);
      t2 !== r2 && (o2.__N = [r2, o2.__[1]], o2.__c.setState({}));
    }], o2.__c = r$1, !r$1.__f)) {
      var f2 = function(n2, t2, r2) {
        if (!o2.__c.__H) return true;
        var u3 = o2.__c.__H.__.filter(function(n3) {
          return n3.__c;
        });
        if (u3.every(function(n3) {
          return !n3.__N;
        })) return !c2 || c2.call(this, n2, t2, r2);
        var i3 = o2.__c.props !== n2;
        return u3.some(function(n3) {
          if (n3.__N) {
            var t3 = n3.__[0];
            n3.__ = n3.__N, n3.__N = void 0, t3 !== n3.__[0] && (i3 = true);
          }
        }), c2 && c2.call(this, n2, t2, r2) || i3;
      };
      r$1.__f = true;
      var c2 = r$1.shouldComponentUpdate, e2 = r$1.componentWillUpdate;
      r$1.componentWillUpdate = function(n2, t2, r2) {
        if (this.__e) {
          var u3 = c2;
          c2 = void 0, f2(n2, t2, r2), c2 = u3;
        }
        e2 && e2.call(this, n2, t2, r2);
      }, r$1.shouldComponentUpdate = f2;
    }
    return o2.__N || o2.__;
  }
  function y$1(n, u2) {
    var i2 = p(t++, 3);
    !c.__s && C$1(i2.__H, u2) && (i2.__ = n, i2.u = u2, r$1.__H.__h.push(i2));
  }
  function _$1(n, u2) {
    var i2 = p(t++, 4);
    !c.__s && C$1(i2.__H, u2) && (i2.__ = n, i2.u = u2, r$1.__h.push(i2));
  }
  function A$1(n) {
    return o = 5, T$1(function() {
      return { current: n };
    }, []);
  }
  function F$3(n, t2, r2) {
    o = 6, _$1(function() {
      if ("function" == typeof n) {
        var r3 = n(t2());
        return function() {
          n(null), r3 && "function" == typeof r3 && r3();
        };
      }
      if (n) return n.current = t2(), function() {
        return n.current = null;
      };
    }, null == r2 ? r2 : r2.concat(n));
  }
  function T$1(n, r2) {
    var u2 = p(t++, 7);
    return C$1(u2.__H, r2) && (u2.__ = n(), u2.__H = r2, u2.__h = n), u2.__;
  }
  function q$1(n, t2) {
    return o = 8, T$1(function() {
      return n;
    }, t2);
  }
  function x$2(n) {
    var u2 = r$1.context[n.__c], i2 = p(t++, 9);
    return i2.c = n, u2 ? (null == i2.__ && (i2.__ = true, u2.sub(r$1)), u2.props.value) : n.__;
  }
  function P$3(n, t2) {
    c.useDebugValue && c.useDebugValue(t2 ? t2(n) : n);
  }
  function g$1() {
    var n = p(t++, 11);
    if (!n.__) {
      for (var u2 = r$1.__v; null !== u2 && !u2.__m && null !== u2.__; ) u2 = u2.__;
      var i2 = u2.__m || (u2.__m = [0, 0]);
      n.__ = "P" + i2[0] + "-" + i2[1]++;
    }
    return n.__;
  }
  function j$2() {
    for (var n; n = f.shift(); ) {
      var t2 = n.__H;
      if (n.__P && t2) try {
        t2.__h.some(z$2), t2.__h.some(B$2), t2.__h = [];
      } catch (r2) {
        t2.__h = [], c.__e(r2, n.__v);
      }
    }
  }
  c.__b = function(n) {
    r$1 = null, e && e(n);
  }, c.__ = function(n, t2) {
    n && t2.__k && t2.__k.__m && (n.__m = t2.__k.__m), s && s(n, t2);
  }, c.__r = function(n) {
    a && a(n), t = 0;
    var i2 = (r$1 = n.__c).__H;
    i2 && (u === r$1 ? (i2.__h = [], r$1.__h = [], i2.__.some(function(n2) {
      n2.__N && (n2.__ = n2.__N), n2.u = n2.__N = void 0;
    })) : (i2.__h.some(z$2), i2.__h.some(B$2), i2.__h = [], t = 0)), u = r$1;
  }, c.diffed = function(n) {
    v && v(n);
    var t2 = n.__c;
    t2 && t2.__H && (t2.__H.__h.length && (1 !== f.push(t2) && i === c.requestAnimationFrame || ((i = c.requestAnimationFrame) || w$1)(j$2)), t2.__H.__.some(function(n2) {
      n2.u && (n2.__H = n2.u), n2.u = void 0;
    })), u = r$1 = null;
  }, c.__c = function(n, t2) {
    t2.some(function(n2) {
      try {
        n2.__h.some(z$2), n2.__h = n2.__h.filter(function(n3) {
          return !n3.__ || B$2(n3);
        });
      } catch (r2) {
        t2.some(function(n3) {
          n3.__h && (n3.__h = []);
        }), t2 = [], c.__e(r2, n2.__v);
      }
    }), l && l(n, t2);
  }, c.unmount = function(n) {
    m && m(n);
    var t2, r2 = n.__c;
    r2 && r2.__H && (r2.__H.__.some(function(n2) {
      try {
        z$2(n2);
      } catch (n3) {
        t2 = n3;
      }
    }), r2.__H = void 0, t2 && c.__e(t2, r2.__v));
  };
  var k$1 = "function" == typeof requestAnimationFrame;
  function w$1(n) {
    var t2, r2 = function() {
      clearTimeout(u2), k$1 && cancelAnimationFrame(t2), setTimeout(n);
    }, u2 = setTimeout(r2, 35);
    k$1 && (t2 = requestAnimationFrame(r2));
  }
  function z$2(n) {
    var t2 = r$1, u2 = n.__c;
    "function" == typeof u2 && (n.__c = void 0, u2()), r$1 = t2;
  }
  function B$2(n) {
    var t2 = r$1;
    n.__c = n.__(), r$1 = t2;
  }
  function C$1(n, t2) {
    return !n || n.length !== t2.length || t2.some(function(t3, r2) {
      return t3 !== n[r2];
    });
  }
  function D$2(n, t2) {
    return "function" == typeof t2 ? t2(n) : t2;
  }
  function g(n, t2) {
    for (var e2 in t2) n[e2] = t2[e2];
    return n;
  }
  function E(n, t2) {
    for (var e2 in n) if ("__source" !== e2 && !(e2 in t2)) return true;
    for (var r2 in t2) if ("__source" !== r2 && n[r2] !== t2[r2]) return true;
    return false;
  }
  function C(n, t2) {
    var e2 = t2(), r2 = d({ t: { __: e2, u: t2 } }), u2 = r2[0].t, o2 = r2[1];
    return _$1(function() {
      u2.__ = e2, u2.u = t2, R$1(u2) && o2({ t: u2 });
    }, [n, e2, t2]), y$1(function() {
      return R$1(u2) && o2({ t: u2 }), n(function() {
        R$1(u2) && o2({ t: u2 });
      });
    }, [n]), e2;
  }
  function R$1(n) {
    try {
      return !((t2 = n.__) === (e2 = n.u()) && (0 !== t2 || 1 / t2 == 1 / e2) || t2 != t2 && e2 != e2);
    } catch (n2) {
      return true;
    }
    var t2, e2;
  }
  function x$1(n) {
    n();
  }
  function w(n) {
    return n;
  }
  function k() {
    return [false, x$1];
  }
  var I$2 = _$1;
  function N$2(n, t2) {
    this.props = n, this.context = t2;
  }
  function M(n, e2) {
    function r2(n2) {
      var t2 = this.props.ref, r3 = t2 == n2.ref;
      return !r3 && t2 && (t2.call ? t2(null) : t2.current = null), e2 ? !e2(this.props, n2) || !r3 : E(this.props, n2);
    }
    function u2(e3) {
      return this.shouldComponentUpdate = r2, preact.createElement(n, e3);
    }
    return u2.displayName = "Memo(" + (n.displayName || n.name) + ")", u2.prototype.isReactComponent = true, u2.__f = true, u2.type = n, u2;
  }
  (N$2.prototype = new preact.Component()).isPureReactComponent = true, N$2.prototype.shouldComponentUpdate = function(n, t2) {
    return E(this.props, n) || E(this.state, t2);
  };
  var T = preact.options.__b;
  preact.options.__b = function(n) {
    n.type && n.type.__f && n.ref && (n.props.ref = n.ref, n.ref = null), T && T(n);
  };
  var A = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
  function D$1(n) {
    function t2(t3) {
      var e2 = g({}, t3);
      return delete e2.ref, n(e2, t3.ref || null);
    }
    return t2.$$typeof = A, t2.render = n, t2.prototype.isReactComponent = t2.__f = true, t2.displayName = "ForwardRef(" + (n.displayName || n.name) + ")", t2;
  }
  var L$2 = function(n, t2) {
    return null == n ? null : preact.toChildArray(preact.toChildArray(n).map(t2));
  }, O = { map: L$2, forEach: L$2, count: function(n) {
    return n ? preact.toChildArray(n).length : 0;
  }, only: function(n) {
    var t2 = preact.toChildArray(n);
    if (1 !== t2.length) throw "Children.only";
    return t2[0];
  }, toArray: preact.toChildArray }, U$2 = preact.options.__e;
  preact.options.__e = function(n, t2, e2, r2) {
    if (n.then) {
      for (var u2, o2 = t2; o2 = o2.__; ) if ((u2 = o2.__c) && u2.__c) return null == t2.__e && (t2.__e = e2.__e, t2.__k = e2.__k), u2.__c(n, t2);
    }
    U$2(n, t2, e2, r2);
  };
  var F$2 = preact.options.unmount;
  function V$2(n, t2, e2) {
    return n && (n.__c && n.__c.__H && (n.__c.__H.__.forEach(function(n2) {
      "function" == typeof n2.__c && n2.__c();
    }), n.__c.__H = null), null != (n = g({}, n)).__c && (n.__c.__P === e2 && (n.__c.__P = t2), n.__c.__e = true, n.__c = null), n.__k = n.__k && n.__k.map(function(n2) {
      return V$2(n2, t2, e2);
    })), n;
  }
  function W$2(n, t2, e2) {
    return n && e2 && (n.__v = null, n.__k = n.__k && n.__k.map(function(n2) {
      return W$2(n2, t2, e2);
    }), n.__c && n.__c.__P === t2 && (n.__e && e2.appendChild(n.__e), n.__c.__e = true, n.__c.__P = e2)), n;
  }
  function P$2() {
    this.__u = 0, this.o = null, this.__b = null;
  }
  function j$1(n) {
    if (!n.__) return null;
    var t2 = n.__.__c;
    return t2 && t2.__a && t2.__a(n);
  }
  function z$1(n) {
    var e2, r2, u2, o2 = null;
    function i2(i3) {
      if (e2 || (e2 = n()).then(function(n2) {
        n2 && (o2 = n2.default || n2), u2 = true;
      }, function(n2) {
        r2 = n2, u2 = true;
      }), r2) throw r2;
      if (!u2) throw e2;
      return o2 ? preact.createElement(o2, i3) : null;
    }
    return i2.displayName = "Lazy", i2.__f = true, i2;
  }
  function B$1() {
    this.i = null, this.l = null;
  }
  preact.options.unmount = function(n) {
    var t2 = n.__c;
    t2 && (t2.__z = true), t2 && t2.__R && t2.__R(), t2 && 32 & n.__u && (n.type = null), F$2 && F$2(n);
  }, (P$2.prototype = new preact.Component()).__c = function(n, t2) {
    var e2 = t2.__c, r2 = this;
    null == r2.o && (r2.o = []), r2.o.push(e2);
    var u2 = j$1(r2.__v), o2 = false, i2 = function() {
      o2 || r2.__z || (o2 = true, e2.__R = null, u2 ? u2(c2) : c2());
    };
    e2.__R = i2;
    var l2 = e2.__P;
    e2.__P = null;
    var c2 = function() {
      if (!--r2.__u) {
        if (r2.state.__a) {
          var n2 = r2.state.__a;
          r2.__v.__k[0] = W$2(n2, n2.__c.__P, n2.__c.__O);
        }
        var t3;
        for (r2.setState({ __a: r2.__b = null }); t3 = r2.o.pop(); ) t3.__P = l2, t3.forceUpdate();
      }
    };
    r2.__u++ || 32 & t2.__u || r2.setState({ __a: r2.__b = r2.__v.__k[0] }), n.then(i2, i2);
  }, P$2.prototype.componentWillUnmount = function() {
    this.o = [];
  }, P$2.prototype.render = function(n, e2) {
    if (this.__b) {
      if (this.__v.__k) {
        var r2 = document.createElement("div"), o2 = this.__v.__k[0].__c;
        this.__v.__k[0] = V$2(this.__b, r2, o2.__O = o2.__P);
      }
      this.__b = null;
    }
    var i2 = e2.__a && preact.createElement(preact.Fragment, null, n.fallback);
    return i2 && (i2.__u &= -33), [preact.createElement(preact.Fragment, null, e2.__a ? null : n.children), i2];
  };
  var H$1 = function(n, t2, e2) {
    if (++e2[1] === e2[0] && n.l.delete(t2), n.props.revealOrder && ("t" !== n.props.revealOrder[0] || !n.l.size)) for (e2 = n.i; e2; ) {
      for (; e2.length > 3; ) e2.pop()();
      if (e2[1] < e2[0]) break;
      n.i = e2 = e2[2];
    }
  };
  function Z$2(n) {
    return this.getChildContext = function() {
      return n.context;
    }, n.children;
  }
  function Y$1(n) {
    var e2 = this, r2 = n.h;
    if (e2.componentWillUnmount = function() {
      preact.render(null, e2.v), e2.v = null, e2.h = null;
    }, e2.h && e2.h !== r2 && e2.componentWillUnmount(), !e2.v) {
      for (var u2 = e2.__v; null !== u2 && !u2.__m && null !== u2.__; ) u2 = u2.__;
      e2.h = r2, e2.v = { nodeType: 1, parentNode: r2, childNodes: [], __k: { __m: u2.__m }, contains: function() {
        return true;
      }, namespaceURI: r2.namespaceURI, insertBefore: function(n2, t2) {
        this.childNodes.push(n2), e2.h.insertBefore(n2, t2);
      }, removeChild: function(n2) {
        this.childNodes.splice(this.childNodes.indexOf(n2) >>> 1, 1), e2.h.removeChild(n2);
      } };
    }
    preact.render(preact.createElement(Z$2, { context: e2.context }, n.__v), e2.v);
  }
  function $$2(n, e2) {
    var r2 = preact.createElement(Y$1, { __v: n, h: e2 });
    return r2.containerInfo = e2, r2;
  }
  (B$1.prototype = new preact.Component()).__a = function(n) {
    var t2 = this, e2 = j$1(t2.__v), r2 = t2.l.get(n);
    return r2[0]++, function(u2) {
      var o2 = function() {
        t2.props.revealOrder ? (r2.push(u2), H$1(t2, n, r2)) : u2();
      };
      e2 ? e2(o2) : o2();
    };
  }, B$1.prototype.render = function(n) {
    this.i = null, this.l = new Map();
    var t2 = preact.toChildArray(n.children);
    n.revealOrder && "b" === n.revealOrder[0] && t2.reverse();
    for (var e2 = t2.length; e2--; ) this.l.set(t2[e2], this.i = [1, 0, this.i]);
    return n.children;
  }, B$1.prototype.componentDidUpdate = B$1.prototype.componentDidMount = function() {
    var n = this;
    this.l.forEach(function(t2, e2) {
      H$1(n, e2, t2);
    });
  };
  var q = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, G$1 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, J$1 = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, K$2 = /[A-Z0-9]/g, Q$2 = "undefined" != typeof document, X$3 = function(n) {
    return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(n);
  };
  function nn(n, t2, e2) {
    return null == t2.__k && (t2.textContent = ""), preact.render(n, t2), "function" == typeof e2 && e2(), n ? n.__c : null;
  }
  function tn(n, t2, e2) {
    return preact.hydrate(n, t2), "function" == typeof e2 && e2(), n ? n.__c : null;
  }
  preact.Component.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t2) {
    Object.defineProperty(preact.Component.prototype, t2, { configurable: true, get: function() {
      return this["UNSAFE_" + t2];
    }, set: function(n) {
      Object.defineProperty(this, t2, { configurable: true, writable: true, value: n });
    } });
  });
  var en = preact.options.event;
  function rn() {
  }
  function un() {
    return this.cancelBubble;
  }
  function on() {
    return this.defaultPrevented;
  }
  preact.options.event = function(n) {
    return en && (n = en(n)), n.persist = rn, n.isPropagationStopped = un, n.isDefaultPrevented = on, n.nativeEvent = n;
  };
  var ln, cn = { enumerable: false, configurable: true, get: function() {
    return this.class;
  } }, fn = preact.options.vnode;
  preact.options.vnode = function(n) {
    "string" == typeof n.type && (function(n2) {
      var t2 = n2.props, e2 = n2.type, u2 = {}, o2 = -1 === e2.indexOf("-");
      for (var i2 in t2) {
        var l2 = t2[i2];
        if (!("value" === i2 && "defaultValue" in t2 && null == l2 || Q$2 && "children" === i2 && "noscript" === e2 || "class" === i2 || "className" === i2)) {
          var c2 = i2.toLowerCase();
          "defaultValue" === i2 && "value" in t2 && null == t2.value ? i2 = "value" : "download" === i2 && true === l2 ? l2 = "" : "translate" === c2 && "no" === l2 ? l2 = false : "o" === c2[0] && "n" === c2[1] ? "ondoubleclick" === c2 ? i2 = "ondblclick" : "onchange" !== c2 || "input" !== e2 && "textarea" !== e2 || X$3(t2.type) ? "onfocus" === c2 ? i2 = "onfocusin" : "onblur" === c2 ? i2 = "onfocusout" : J$1.test(i2) && (i2 = c2) : c2 = i2 = "oninput" : o2 && G$1.test(i2) ? i2 = i2.replace(K$2, "-$&").toLowerCase() : null === l2 && (l2 = void 0), "oninput" === c2 && u2[i2 = c2] && (i2 = "oninputCapture"), u2[i2] = l2;
        }
      }
      "select" == e2 && u2.multiple && Array.isArray(u2.value) && (u2.value = preact.toChildArray(t2.children).forEach(function(n3) {
        n3.props.selected = -1 != u2.value.indexOf(n3.props.value);
      })), "select" == e2 && null != u2.defaultValue && (u2.value = preact.toChildArray(t2.children).forEach(function(n3) {
        n3.props.selected = u2.multiple ? -1 != u2.defaultValue.indexOf(n3.props.value) : u2.defaultValue == n3.props.value;
      })), t2.class && !t2.className ? (u2.class = t2.class, Object.defineProperty(u2, "className", cn)) : t2.className && (u2.class = u2.className = t2.className), n2.props = u2;
    })(n), n.$$typeof = q, fn && fn(n);
  };
  var an = preact.options.__r;
  preact.options.__r = function(n) {
    an && an(n), ln = n.__c;
  };
  var sn = preact.options.diffed;
  preact.options.diffed = function(n) {
    sn && sn(n);
    var t2 = n.props, e2 = n.__e;
    null != e2 && "textarea" === n.type && "value" in t2 && t2.value !== e2.value && (e2.value = null == t2.value ? "" : t2.value), ln = null;
  };
  var hn = { ReactCurrentDispatcher: { current: { readContext: function(n) {
    return ln.__n[n.__c].props.value;
  }, useCallback: q$1, useContext: x$2, useDebugValue: P$3, useDeferredValue: w, useEffect: y$1, useId: g$1, useImperativeHandle: F$3, useInsertionEffect: I$2, useLayoutEffect: _$1, useMemo: T$1, useReducer: h, useRef: A$1, useState: d, useSyncExternalStore: C, useTransition: k } } };
  function dn(n) {
    return preact.createElement.bind(null, n);
  }
  function mn(n) {
    return !!n && n.$$typeof === q;
  }
  function pn(n) {
    return mn(n) && n.type === preact.Fragment;
  }
  function yn(n) {
    return !!n && "string" == typeof n.displayName && n.displayName.startsWith("Memo(");
  }
  function _n(n) {
    return mn(n) ? preact.cloneElement.apply(null, arguments) : n;
  }
  function bn(n) {
    return !!n.__k && (preact.render(null, n), true);
  }
  function Sn(n) {
    return n && (n.base || 1 === n.nodeType && n) || null;
  }
  var gn = function(n, t2) {
    return n(t2);
  }, En = function(n, t2) {
    return n(t2);
  }, Cn = preact.Fragment, Rn = mn, xn = { useState: d, useId: g$1, useReducer: h, useEffect: y$1, useLayoutEffect: _$1, useInsertionEffect: I$2, useTransition: k, useDeferredValue: w, useSyncExternalStore: C, startTransition: x$1, useRef: A$1, useImperativeHandle: F$3, useMemo: T$1, useCallback: q$1, useContext: x$2, useDebugValue: P$3, version: "18.3.1", Children: O, render: nn, hydrate: tn, unmountComponentAtNode: bn, createPortal: $$2, createElement: preact.createElement, createContext: preact.createContext, createFactory: dn, cloneElement: _n, createRef: preact.createRef, Fragment: preact.Fragment, isValidElement: mn, isElement: Rn, isFragment: pn, isMemo: yn, findDOMNode: Sn, Component: preact.Component, PureComponent: N$2, memo: M, forwardRef: D$1, flushSync: En, unstable_batchedUpdates: gn, StrictMode: Cn, Suspense: P$2, SuspenseList: B$1, lazy: z$1, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: hn };
  function r(e2) {
    var t2, f2, n = "";
    if ("string" == typeof e2 || "number" == typeof e2) n += e2;
    else if ("object" == typeof e2) if (Array.isArray(e2)) {
      var o2 = e2.length;
      for (t2 = 0; t2 < o2; t2++) e2[t2] && (f2 = r(e2[t2])) && (n && (n += " "), n += f2);
    } else for (f2 in e2) e2[f2] && (n && (n += " "), n += f2);
    return n;
  }
  function clsx() {
    for (var e2, t2, f2 = 0, n = "", o2 = arguments.length; f2 < o2; f2++) (e2 = arguments[f2]) && (t2 = r(e2)) && (n && (n += " "), n += t2);
    return n;
  }
  function Mt(t2) {
    if (typeof document == "undefined") return;
    let o2 = document.head || document.getElementsByTagName("head")[0], e2 = document.createElement("style");
    e2.type = "text/css", o2.firstChild ? o2.insertBefore(e2, o2.firstChild) : o2.appendChild(e2), e2.styleSheet ? e2.styleSheet.cssText = t2 : e2.appendChild(document.createTextNode(t2));
  }
  Mt(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);
  var L$1 = (t2) => typeof t2 == "number" && !isNaN(t2), N$1 = (t2) => typeof t2 == "string", P$1 = (t2) => typeof t2 == "function", mt = (t2) => N$1(t2) || L$1(t2), B = (t2) => N$1(t2) || P$1(t2) ? t2 : null, pt = (t2, o2) => t2 === false || L$1(t2) && t2 > 0 ? t2 : o2, z = (t2) => mn(t2) || N$1(t2) || P$1(t2) || L$1(t2);
  function Z$1(t2, o2, e2 = 300) {
    let { scrollHeight: r2, style: s2 } = t2;
    requestAnimationFrame(() => {
      s2.minHeight = "initial", s2.height = r2 + "px", s2.transition = `all ${e2}ms`, requestAnimationFrame(() => {
        s2.height = "0", s2.padding = "0", s2.margin = "0", setTimeout(o2, e2);
      });
    });
  }
  function $$1({ enter: t2, exit: o2, appendPosition: e2 = false, collapse: r2 = true, collapseDuration: s2 = 300 }) {
    return function({ children: a2, position: d2, preventExitTransition: c2, done: T2, nodeRef: g2, isIn: v2, playToast: x2 }) {
      let C2 = e2 ? `${t2}--${d2}` : t2, S = e2 ? `${o2}--${d2}` : o2, E2 = A$1(0);
      return _$1(() => {
        let f2 = g2.current, p2 = C2.split(" "), b = (n) => {
          n.target === g2.current && (x2(), f2.removeEventListener("animationend", b), f2.removeEventListener("animationcancel", b), E2.current === 0 && n.type !== "animationcancel" && f2.classList.remove(...p2));
        };
        (() => {
          f2.classList.add(...p2), f2.addEventListener("animationend", b), f2.addEventListener("animationcancel", b);
        })();
      }, []), y$1(() => {
        let f2 = g2.current, p2 = () => {
          f2.removeEventListener("animationend", p2), r2 ? Z$1(f2, T2, s2) : T2();
        };
        v2 || (c2 ? p2() : (() => {
          E2.current = 1, f2.className += ` ${S}`, f2.addEventListener("animationend", p2);
        })());
      }, [v2]), xn.createElement(xn.Fragment, null, a2);
    };
  }
  function J(t2, o2) {
    return { content: tt(t2.content, t2.props), containerId: t2.props.containerId, id: t2.props.toastId, theme: t2.props.theme, type: t2.props.type, data: t2.props.data || {}, isLoading: t2.props.isLoading, icon: t2.props.icon, reason: t2.removalReason, status: o2 };
  }
  function tt(t2, o2, e2 = false) {
    return mn(t2) && !N$1(t2.type) ? _n(t2, { closeToast: o2.closeToast, toastProps: o2, data: o2.data, isPaused: e2 }) : P$1(t2) ? t2({ closeToast: o2.closeToast, toastProps: o2, data: o2.data, isPaused: e2 }) : t2;
  }
  function yt({ closeToast: t2, theme: o2, ariaLabel: e2 = "close" }) {
    return xn.createElement("button", { className: `Toastify__close-button Toastify__close-button--${o2}`, type: "button", onClick: (r2) => {
      r2.stopPropagation(), t2(true);
    }, "aria-label": e2 }, xn.createElement("svg", { "aria-hidden": "true", viewBox: "0 0 14 16" }, xn.createElement("path", { fillRule: "evenodd", d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z" })));
  }
  function gt({ delay: t2, isRunning: o2, closeToast: e2, type: r2 = "default", hide: s2, className: l2, controlledProgress: a2, progress: d2, rtl: c2, isIn: T2, theme: g2 }) {
    let v2 = s2 || a2 && d2 === 0, x2 = { animationDuration: `${t2}ms`, animationPlayState: o2 ? "running" : "paused" };
    a2 && (x2.transform = `scaleX(${d2})`);
    let C2 = clsx("Toastify__progress-bar", a2 ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", `Toastify__progress-bar-theme--${g2}`, `Toastify__progress-bar--${r2}`, { ["Toastify__progress-bar--rtl"]: c2 }), S = P$1(l2) ? l2({ rtl: c2, type: r2, defaultClassName: C2 }) : clsx(C2, l2), E2 = { [a2 && d2 >= 1 ? "onTransitionEnd" : "onAnimationEnd"]: a2 && d2 < 1 ? null : () => {
      T2 && e2();
    } };
    return xn.createElement("div", { className: "Toastify__progress-bar--wrp", "data-hidden": v2 }, xn.createElement("div", { className: `Toastify__progress-bar--bg Toastify__progress-bar-theme--${g2} Toastify__progress-bar--${r2}` }), xn.createElement("div", { role: "progressbar", "aria-hidden": v2 ? "true" : "false", "aria-label": "notification timer", className: S, style: x2, ...E2 }));
  }
  var Xt = 1, at = () => `${Xt++}`;
  function _t(t2, o2, e2) {
    let r2 = 1, s2 = 0, l2 = [], a2 = [], d2 = o2, c2 = new Map(), T2 = new Set(), g2 = (i2) => (T2.add(i2), () => T2.delete(i2)), v2 = () => {
      a2 = Array.from(c2.values()), T2.forEach((i2) => i2());
    }, x2 = ({ containerId: i2, toastId: n, updateId: u2 }) => {
      let h2 = i2 ? i2 !== t2 : t2 !== 1, m2 = c2.has(n) && u2 == null;
      return h2 || m2;
    }, C2 = (i2, n) => {
      c2.forEach((u2) => {
        var h2;
        (n == null || n === u2.props.toastId) && ((h2 = u2.toggle) == null || h2.call(u2, i2));
      });
    }, S = (i2) => {
      var n, u2;
      (u2 = (n = i2.props) == null ? void 0 : n.onClose) == null || u2.call(n, i2.removalReason), i2.isActive = false;
    }, E2 = (i2) => {
      if (i2 == null) c2.forEach(S);
      else {
        let n = c2.get(i2);
        n && S(n);
      }
      v2();
    }, f2 = () => {
      s2 -= l2.length, l2 = [];
    }, p2 = (i2) => {
      var m2, _2;
      let { toastId: n, updateId: u2 } = i2.props, h2 = u2 == null;
      i2.staleId && c2.delete(i2.staleId), i2.isActive = true, c2.set(n, i2), v2(), e2(J(i2, h2 ? "added" : "updated")), h2 && ((_2 = (m2 = i2.props).onOpen) == null || _2.call(m2));
    };
    return { id: t2, props: d2, observe: g2, toggle: C2, removeToast: E2, toasts: c2, clearQueue: f2, buildToast: (i2, n) => {
      if (x2(n)) return;
      let { toastId: u2, updateId: h2, data: m2, staleId: _2, delay: k2 } = n, M2 = h2 == null;
      M2 && s2++;
      let A2 = { ...d2, style: d2.toastStyle, key: r2++, ...Object.fromEntries(Object.entries(n).filter(([D2, Y2]) => Y2 != null)), toastId: u2, updateId: h2, data: m2, isIn: false, className: B(n.className || d2.toastClassName), progressClassName: B(n.progressClassName || d2.progressClassName), autoClose: n.isLoading ? false : pt(n.autoClose, d2.autoClose), closeToast(D2) {
        c2.get(u2).removalReason = D2, E2(u2);
      }, deleteToast() {
        let D2 = c2.get(u2);
        if (D2 != null) {
          if (e2(J(D2, "removed")), c2.delete(u2), s2--, s2 < 0 && (s2 = 0), l2.length > 0) {
            p2(l2.shift());
            return;
          }
          v2();
        }
      } };
      A2.closeButton = d2.closeButton, n.closeButton === false || z(n.closeButton) ? A2.closeButton = n.closeButton : n.closeButton === true && (A2.closeButton = z(d2.closeButton) ? d2.closeButton : true);
      let R2 = { content: i2, props: A2, staleId: _2 };
      d2.limit && d2.limit > 0 && s2 > d2.limit && M2 ? l2.push(R2) : L$1(k2) ? setTimeout(() => {
        p2(R2);
      }, k2) : p2(R2);
    }, setProps(i2) {
      d2 = i2;
    }, setToggle: (i2, n) => {
      let u2 = c2.get(i2);
      u2 && (u2.toggle = n);
    }, isToastActive: (i2) => {
      var n;
      return (n = c2.get(i2)) == null ? void 0 : n.isActive;
    }, getSnapshot: () => a2 };
  }
  var I$1 = new Map(), F$1 = [], st = new Set(), Vt = (t2) => st.forEach((o2) => o2(t2)), bt = () => I$1.size > 0;
  function Qt() {
    F$1.forEach((t2) => nt(t2.content, t2.options)), F$1 = [];
  }
  var vt = (t2, { containerId: o2 }) => {
    var e2;
    return (e2 = I$1.get(o2 || 1)) == null ? void 0 : e2.toasts.get(t2);
  };
  function X$2(t2, o2) {
    var r2;
    if (o2) return !!((r2 = I$1.get(o2)) != null && r2.isToastActive(t2));
    let e2 = false;
    return I$1.forEach((s2) => {
      s2.isToastActive(t2) && (e2 = true);
    }), e2;
  }
  function ht(t2) {
    if (!bt()) {
      F$1 = F$1.filter((o2) => t2 != null && o2.options.toastId !== t2);
      return;
    }
    if (t2 == null || mt(t2)) I$1.forEach((o2) => {
      o2.removeToast(t2);
    });
    else if (t2 && ("containerId" in t2 || "id" in t2)) {
      let o2 = I$1.get(t2.containerId);
      o2 ? o2.removeToast(t2.id) : I$1.forEach((e2) => {
        e2.removeToast(t2.id);
      });
    }
  }
  var Ct = (t2 = {}) => {
    I$1.forEach((o2) => {
      o2.props.limit && (!t2.containerId || o2.id === t2.containerId) && o2.clearQueue();
    });
  };
  function nt(t2, o2) {
    z(t2) && (bt() || F$1.push({ content: t2, options: o2 }), I$1.forEach((e2) => {
      e2.buildToast(t2, o2);
    }));
  }
  function xt(t2) {
    var o2;
    (o2 = I$1.get(t2.containerId || 1)) == null || o2.setToggle(t2.id, t2.fn);
  }
  function rt(t2, o2) {
    I$1.forEach((e2) => {
      (o2 == null || !(o2 != null && o2.containerId) || (o2 == null ? void 0 : o2.containerId) === e2.id) && e2.toggle(t2, o2 == null ? void 0 : o2.id);
    });
  }
  function Et(t2) {
    let o2 = t2.containerId || 1;
    return { subscribe(e2) {
      let r2 = _t(o2, t2, Vt);
      I$1.set(o2, r2);
      let s2 = r2.observe(e2);
      return Qt(), () => {
        s2(), I$1.delete(o2);
      };
    }, setProps(e2) {
      var r2;
      (r2 = I$1.get(o2)) == null || r2.setProps(e2);
    }, getSnapshot() {
      var e2;
      return (e2 = I$1.get(o2)) == null ? void 0 : e2.getSnapshot();
    } };
  }
  function Pt(t2) {
    return st.add(t2), () => {
      st.delete(t2);
    };
  }
  function Wt(t2) {
    return t2 && (N$1(t2.toastId) || L$1(t2.toastId)) ? t2.toastId : at();
  }
  function U$1(t2, o2) {
    return nt(t2, o2), o2.toastId;
  }
  function V$1(t2, o2) {
    return { ...o2, type: o2 && o2.type || t2, toastId: Wt(o2) };
  }
  function Q$1(t2) {
    return (o2, e2) => U$1(o2, V$1(t2, e2));
  }
  function y(t2, o2) {
    return U$1(t2, V$1("default", o2));
  }
  y.loading = (t2, o2) => U$1(t2, V$1("default", { isLoading: true, autoClose: false, closeOnClick: false, closeButton: false, draggable: false, ...o2 }));
  function Gt(t2, { pending: o2, error: e2, success: r2 }, s2) {
    let l2;
    o2 && (l2 = N$1(o2) ? y.loading(o2, s2) : y.loading(o2.render, { ...s2, ...o2 }));
    let a2 = { isLoading: null, autoClose: null, closeOnClick: null, closeButton: null, draggable: null }, d2 = (T2, g2, v2) => {
      if (g2 == null) {
        y.dismiss(l2);
        return;
      }
      let x2 = { type: T2, ...a2, ...s2, data: v2 }, C2 = N$1(g2) ? { render: g2 } : g2;
      return l2 ? y.update(l2, { ...x2, ...C2 }) : y(C2.render, { ...x2, ...C2 }), v2;
    }, c2 = P$1(t2) ? t2() : t2;
    return c2.then((T2) => d2("success", r2, T2)).catch((T2) => d2("error", e2, T2)), c2;
  }
  y.promise = Gt;
  y.success = Q$1("success");
  y.info = Q$1("info");
  y.error = Q$1("error");
  y.warning = Q$1("warning");
  y.warn = y.warning;
  y.dark = (t2, o2) => U$1(t2, V$1("default", { theme: "dark", ...o2 }));
  function qt(t2) {
    ht(t2);
  }
  y.dismiss = qt;
  y.clearWaitingQueue = Ct;
  y.isActive = X$2;
  y.update = (t2, o2 = {}) => {
    let e2 = vt(t2, o2);
    if (e2) {
      let { props: r2, content: s2 } = e2, l2 = { delay: 100, ...r2, ...o2, toastId: o2.toastId || t2, updateId: at() };
      l2.toastId !== t2 && (l2.staleId = t2);
      let a2 = l2.render || s2;
      delete l2.render, U$1(a2, l2);
    }
  };
  y.done = (t2) => {
    y.update(t2, { progress: 1 });
  };
  y.onChange = Pt;
  y.play = (t2) => rt(true, t2);
  y.pause = (t2) => rt(false, t2);
  function It(t2) {
    var a2;
    let { subscribe: o2, getSnapshot: e2, setProps: r2 } = A$1(Et(t2)).current;
    r2(t2);
    let s2 = (a2 = C(o2, e2)) == null ? void 0 : a2.slice();
    function l2(d2) {
      if (!s2) return [];
      let c2 = new Map();
      return t2.newestOnTop && s2.reverse(), s2.forEach((T2) => {
        let { position: g2 } = T2.props;
        c2.has(g2) || c2.set(g2, []), c2.get(g2).push(T2);
      }), Array.from(c2, (T2) => d2(T2[0], T2[1]));
    }
    return { getToastToRender: l2, isToastActive: X$2, count: s2 == null ? void 0 : s2.length };
  }
  function At(t2) {
    let [o2, e2] = d(false), [r2, s2] = d(false), l2 = A$1(null), a2 = A$1({ start: 0, delta: 0, removalDistance: 0, canCloseOnClick: true, canDrag: false, didMove: false }).current, { autoClose: d$1, pauseOnHover: c2, closeToast: T2, onClick: g2, closeOnClick: v2 } = t2;
    xt({ id: t2.toastId, containerId: t2.containerId, fn: e2 }), y$1(() => {
      if (t2.pauseOnFocusLoss) return x2(), () => {
        C2();
      };
    }, [t2.pauseOnFocusLoss]);
    function x2() {
      document.hasFocus() || p2(), window.addEventListener("focus", f2), window.addEventListener("blur", p2);
    }
    function C2() {
      window.removeEventListener("focus", f2), window.removeEventListener("blur", p2);
    }
    function S(m2) {
      if (t2.draggable === true || t2.draggable === m2.pointerType) {
        b();
        let _2 = l2.current;
        a2.canCloseOnClick = true, a2.canDrag = true, _2.style.transition = "none", t2.draggableDirection === "x" ? (a2.start = m2.clientX, a2.removalDistance = _2.offsetWidth * (t2.draggablePercent / 100)) : (a2.start = m2.clientY, a2.removalDistance = _2.offsetHeight * (t2.draggablePercent === 80 ? t2.draggablePercent * 1.5 : t2.draggablePercent) / 100);
      }
    }
    function E2(m2) {
      let { top: _2, bottom: k2, left: M2, right: A2 } = l2.current.getBoundingClientRect();
      m2.nativeEvent.type !== "touchend" && t2.pauseOnHover && m2.clientX >= M2 && m2.clientX <= A2 && m2.clientY >= _2 && m2.clientY <= k2 ? p2() : f2();
    }
    function f2() {
      e2(true);
    }
    function p2() {
      e2(false);
    }
    function b() {
      a2.didMove = false, document.addEventListener("pointermove", n), document.addEventListener("pointerup", u2);
    }
    function i2() {
      document.removeEventListener("pointermove", n), document.removeEventListener("pointerup", u2);
    }
    function n(m2) {
      let _2 = l2.current;
      if (a2.canDrag && _2) {
        a2.didMove = true, o2 && p2(), t2.draggableDirection === "x" ? a2.delta = m2.clientX - a2.start : a2.delta = m2.clientY - a2.start, a2.start !== m2.clientX && (a2.canCloseOnClick = false);
        let k2 = t2.draggableDirection === "x" ? `${a2.delta}px, var(--y)` : `0, calc(${a2.delta}px + var(--y))`;
        _2.style.transform = `translate3d(${k2},0)`, _2.style.opacity = `${1 - Math.abs(a2.delta / a2.removalDistance)}`;
      }
    }
    function u2() {
      i2();
      let m2 = l2.current;
      if (a2.canDrag && a2.didMove && m2) {
        if (a2.canDrag = false, Math.abs(a2.delta) > a2.removalDistance) {
          s2(true), t2.closeToast(true), t2.collapseAll();
          return;
        }
        m2.style.transition = "transform 0.2s, opacity 0.2s", m2.style.removeProperty("transform"), m2.style.removeProperty("opacity");
      }
    }
    let h2 = { onPointerDown: S, onPointerUp: E2 };
    return d$1 && c2 && (h2.onMouseEnter = p2, t2.stacked || (h2.onMouseLeave = f2)), v2 && (h2.onClick = (m2) => {
      g2 && g2(m2), a2.canCloseOnClick && T2(true);
    }), { playToast: f2, pauseToast: p2, isRunning: o2, preventExitTransition: r2, toastRef: l2, eventHandlers: h2 };
  }
  var Ot = typeof window != "undefined" ? _$1 : y$1;
  var G = ({ theme: t2, type: o2, isLoading: e2, ...r2 }) => xn.createElement("svg", { viewBox: "0 0 24 24", width: "100%", height: "100%", fill: t2 === "colored" ? "currentColor" : `var(--toastify-icon-color-${o2})`, ...r2 });
  function ao(t2) {
    return xn.createElement(G, { ...t2 }, xn.createElement("path", { d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z" }));
  }
  function so(t2) {
    return xn.createElement(G, { ...t2 }, xn.createElement("path", { d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z" }));
  }
  function no(t2) {
    return xn.createElement(G, { ...t2 }, xn.createElement("path", { d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z" }));
  }
  function ro(t2) {
    return xn.createElement(G, { ...t2 }, xn.createElement("path", { d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z" }));
  }
  function io() {
    return xn.createElement("div", { className: "Toastify__spinner" });
  }
  var W$1 = { info: so, warning: ao, success: no, error: ro, spinner: io }, lo = (t2) => t2 in W$1;
  function Nt({ theme: t2, type: o2, isLoading: e2, icon: r2 }) {
    let s2 = null, l2 = { theme: t2, type: o2 };
    return r2 === false || (P$1(r2) ? s2 = r2({ ...l2, isLoading: e2 }) : mn(r2) ? s2 = _n(r2, l2) : e2 ? s2 = W$1.spinner() : lo(o2) && (s2 = W$1[o2](l2))), s2;
  }
  var wt = (t2) => {
    let { isRunning: o2, preventExitTransition: e2, toastRef: r2, eventHandlers: s2, playToast: l2 } = At(t2), { closeButton: a2, children: d2, autoClose: c2, onClick: T2, type: g2, hideProgressBar: v2, closeToast: x2, transition: C2, position: S, className: E2, style: f2, progressClassName: p2, updateId: b, role: i2, progress: n, rtl: u2, toastId: h2, deleteToast: m2, isIn: _2, isLoading: k2, closeOnClick: M2, theme: A2, ariaLabel: R2 } = t2, D2 = clsx("Toastify__toast", `Toastify__toast-theme--${A2}`, `Toastify__toast--${g2}`, { ["Toastify__toast--rtl"]: u2 }, { ["Toastify__toast--close-on-click"]: M2 }), Y2 = P$1(E2) ? E2({ rtl: u2, position: S, type: g2, defaultClassName: D2 }) : clsx(D2, E2), ft = Nt(t2), dt = !!n || !c2, j2 = { closeToast: x2, type: g2, theme: A2 }, H2 = null;
    return a2 === false || (P$1(a2) ? H2 = a2(j2) : mn(a2) ? H2 = _n(a2, j2) : H2 = yt(j2)), xn.createElement(C2, { isIn: _2, done: m2, position: S, preventExitTransition: e2, nodeRef: r2, playToast: l2 }, xn.createElement("div", { id: h2, tabIndex: 0, onClick: T2, "data-in": _2, className: Y2, ...s2, style: f2, ref: r2, ..._2 && { role: i2, "aria-label": R2 } }, ft != null && xn.createElement("div", { className: clsx("Toastify__toast-icon", { ["Toastify--animate-icon Toastify__zoom-enter"]: !k2 }) }, ft), tt(d2, t2, !o2), H2, !t2.customProgressBar && xn.createElement(gt, { ...b && !dt ? { key: `p-${b}` } : {}, rtl: u2, theme: A2, delay: c2, isRunning: o2, isIn: _2, closeToast: x2, hide: v2, type: g2, className: p2, controlledProgress: dt, progress: n || 0 })));
  };
  var K$1 = (t2, o2 = false) => ({ enter: `Toastify--animate Toastify__${t2}-enter`, exit: `Toastify--animate Toastify__${t2}-exit`, appendPosition: o2 }), lt = $$1(K$1("bounce", true));
  var _o = { position: "top-right", transition: lt, autoClose: 5e3, closeButton: true, pauseOnHover: true, pauseOnFocusLoss: true, draggable: "touch", draggablePercent: 80, draggableDirection: "x", role: "alert", theme: "light", "aria-label": "Notifications Alt+T", hotKeys: (t2) => t2.altKey && t2.code === "KeyT" };
  function Lt(t2) {
    let o2 = { ..._o, ...t2 }, e2 = t2.stacked, [r2, s2] = d(true), l2 = A$1(null), { getToastToRender: a2, isToastActive: d$1, count: c2 } = It(o2), { className: T2, style: g2, rtl: v2, containerId: x2, hotKeys: C2 } = o2;
    function S(f2) {
      let p2 = clsx("Toastify__toast-container", `Toastify__toast-container--${f2}`, { ["Toastify__toast-container--rtl"]: v2 });
      return P$1(T2) ? T2({ position: f2, rtl: v2, defaultClassName: p2 }) : clsx(p2, B(T2));
    }
    function E2() {
      e2 && (s2(true), y.play());
    }
    return Ot(() => {
      var f2;
      if (e2) {
        let p2 = l2.current.querySelectorAll('[data-in="true"]'), b = 12, i2 = (f2 = o2.position) == null ? void 0 : f2.includes("top"), n = 0, u2 = 0;
        Array.from(p2).reverse().forEach((h2, m2) => {
          let _2 = h2;
          _2.classList.add("Toastify__toast--stacked"), m2 > 0 && (_2.dataset.collapsed = `${r2}`), _2.dataset.pos || (_2.dataset.pos = i2 ? "top" : "bot");
          let k2 = n * (r2 ? 0.2 : 1) + (r2 ? 0 : b * m2);
          _2.style.setProperty("--y", `${i2 ? k2 : k2 * -1}px`), _2.style.setProperty("--g", `${b}`), _2.style.setProperty("--s", `${1 - (r2 ? u2 : 0)}`), n += _2.offsetHeight, u2 += 0.025;
        });
      }
    }, [r2, c2, e2]), y$1(() => {
      function f2(p2) {
        var i2;
        let b = l2.current;
        C2(p2) && ((i2 = b.querySelector('[tabIndex="0"]')) == null || i2.focus(), s2(false), y.pause()), p2.key === "Escape" && (document.activeElement === b || b != null && b.contains(document.activeElement)) && (s2(true), y.play());
      }
      return document.addEventListener("keydown", f2), () => {
        document.removeEventListener("keydown", f2);
      };
    }, [C2]), xn.createElement("section", { ref: l2, className: "Toastify", id: x2, onMouseEnter: () => {
      e2 && (s2(false), y.pause());
    }, onMouseLeave: E2, "aria-live": "polite", "aria-atomic": "false", "aria-relevant": "additions text", "aria-label": o2["aria-label"] }, a2((f2, p2) => {
      let b = p2.length ? { ...g2 } : { ...g2, pointerEvents: "none" };
      return xn.createElement("div", { tabIndex: -1, className: S(f2), "data-stacked": e2, style: b, key: `c-${f2}` }, p2.map(({ content: i2, props: n }) => xn.createElement(wt, { ...n, stacked: e2, collapseAll: E2, isIn: d$1(n.toastId, n.containerId), key: `t-${n.key}` }, i2)));
    }));
  }
  const j = ["shift", "alt", "meta", "mod", "ctrl", "control"], Q = {
    esc: "escape",
    return: "enter",
    left: "arrowleft",
    right: "arrowright",
    up: "arrowup",
    down: "arrowdown",
    ShiftLeft: "shift",
    ShiftRight: "shift",
    AltLeft: "alt",
    AltRight: "alt",
    MetaLeft: "meta",
    MetaRight: "meta",
    OSLeft: "meta",
    OSRight: "meta",
    ControlLeft: "ctrl",
    ControlRight: "ctrl"
  };
  function K(e2) {
    return (Q[e2.trim()] || e2.trim()).toLowerCase().replace(/key|digit|numpad/, "");
  }
  function D(e2) {
    return j.includes(e2);
  }
  function H(e2, r2 = ",") {
    return e2.toLowerCase().split(r2);
  }
  function P(e2, r2 = "+", o2 = ">", i2 = false, c2, a2) {
    let n = [], y2 = false;
    e2 = e2.trim(), e2.includes(o2) ? (y2 = true, n = e2.toLocaleLowerCase().split(o2).map((f2) => K(f2))) : n = e2.toLocaleLowerCase().split(r2).map((f2) => K(f2));
    const u2 = {
      alt: n.includes("alt"),
      ctrl: n.includes("ctrl") || n.includes("control"),
      shift: n.includes("shift"),
      meta: n.includes("meta"),
      mod: n.includes("mod"),
      useKey: i2
    }, l2 = n.filter((f2) => !j.includes(f2));
    return {
      ...u2,
      keys: l2,
      description: c2,
      isSequence: y2,
      hotkey: e2,
      metadata: a2
    };
  }
  typeof document < "u" && (document.addEventListener("keydown", (e2) => {
    e2.code !== void 0 && _([K(e2.code)]);
  }), document.addEventListener("keyup", (e2) => {
    e2.code !== void 0 && I([K(e2.code)]);
  })), typeof window < "u" && (window.addEventListener("blur", () => {
    L.clear();
  }), window.addEventListener("contextmenu", () => {
    setTimeout(() => {
      L.clear();
    }, 0);
  }));
  const L = new Set();
  function R(e2) {
    return Array.isArray(e2);
  }
  function U(e2, r2 = ",") {
    return (R(e2) ? e2 : e2.split(r2)).every((i2) => L.has(i2.trim().toLowerCase()));
  }
  function _(e2) {
    const r2 = Array.isArray(e2) ? e2 : [e2];
    L.has("meta") && L.forEach((o2) => {
      D(o2) || L.delete(o2.toLowerCase());
    }), r2.forEach((o2) => {
      L.add(o2.toLowerCase());
    });
  }
  function I(e2) {
    const r2 = Array.isArray(e2) ? e2 : [e2];
    e2 === "meta" ? L.clear() : r2.forEach((o2) => {
      L.delete(o2.toLowerCase());
    });
  }
  function V(e2, r2, o2) {
    (typeof o2 == "function" && o2(e2, r2) || o2 === true) && e2.preventDefault();
  }
  function X$1(e2, r2, o2) {
    return typeof o2 == "function" ? o2(e2, r2) : o2 === true || o2 === void 0;
  }
  const Y = [
    "input",
    "textarea",
    "select",
    "searchbox",
    "slider",
    "spinbutton",
    "menuitem",
    "menuitemcheckbox",
    "menuitemradio",
    "option",
    "radio",
    "textbox"
  ];
  function Z(e2) {
    return F(e2, Y);
  }
  function F(e2, r2 = false) {
    const { target: o2, composed: i2 } = e2;
    let c2, a2;
    return ee(o2) && i2 ? (c2 = e2.composedPath()[0] && e2.composedPath()[0].tagName, a2 = e2.composedPath()[0] && e2.composedPath()[0].role) : (c2 = o2 && o2.tagName, a2 = o2 && o2.role), R(r2) ? !!(c2 && r2 && r2.some((n) => n.toLowerCase() === c2.toLowerCase() || n === a2)) : !!(c2 && r2 && r2);
  }
  function ee(e2) {
    return !!e2.tagName && !e2.tagName.startsWith("-") && e2.tagName.includes("-");
  }
  function te(e2, r2) {
    return e2.length === 0 && r2 ? false : r2 ? e2.some((o2) => r2.includes(o2)) || e2.includes("*") : true;
  }
  const re = (e2, r2, o2 = false) => {
    const { alt: i2, meta: c2, mod: a2, shift: n, ctrl: y2, keys: u2, useKey: l2 } = r2, { code: f2, key: t2, ctrlKey: d2, metaKey: m2, shiftKey: g2, altKey: k2 } = e2, p2 = K(f2);
    if (l2 && u2?.length === 1 && u2.includes(t2.toLowerCase()))
      return true;
    if (!u2?.includes(p2) && !["ctrl", "control", "unknown", "meta", "alt", "shift", "os"].includes(p2))
      return false;
    if (!o2) {
      if (i2 !== k2 && p2 !== "alt" || n !== g2 && p2 !== "shift")
        return false;
      if (a2) {
        if (!m2 && !d2)
          return false;
      } else if (c2 !== m2 && p2 !== "meta" && p2 !== "os" || y2 !== d2 && p2 !== "ctrl" && p2 !== "control")
        return false;
    }
    return u2 && u2.length === 1 && u2.includes(p2) ? true : u2 && u2.length > 0 ? u2.includes(p2) ? U(u2) : false : !u2 || u2.length === 0;
  }, $ = preact.createContext(void 0), oe = () => x$2($);
  function x(e2, r2) {
    return e2 === r2;
  }
  const W = preact.createContext({
    hotkeys: [],
    activeScopes: [],
toggleScope: () => {
    },
    enableScope: () => {
    },
    disableScope: () => {
    }
  }), se = () => x$2(W);
  function ie(e2) {
    const r2 = A$1(void 0);
    return x(r2.current, e2) || (r2.current = e2), r2.current;
  }
  const N = (e2) => {
    e2.stopPropagation(), e2.preventDefault(), e2.stopImmediatePropagation();
  }, ce = typeof window < "u" ? _$1 : y$1;
  function fe(e2, r2, o2, i2) {
    const c2 = A$1(null), a2 = A$1(false), n = Array.isArray(o2) ? Array.isArray(i2) ? void 0 : i2 : o2, y2 = R(e2) ? e2.join(n?.delimiter) : e2, l2 = q$1(r2, []), f2 = A$1(l2);
    f2.current = r2;
    const t2 = ie(n), { activeScopes: d2 } = se(), m2 = oe();
    return ce(() => {
      if (t2?.enabled === false || !te(d2, t2?.scopes))
        return;
      let g2 = [], k2;
      const p2 = (s2, B2 = false) => {
        if (!(Z(s2) && !F(s2, t2?.enableOnFormTags))) {
          if (c2.current !== null) {
            const v2 = c2.current.getRootNode();
            if ((v2 instanceof Document || v2 instanceof ShadowRoot) && v2.activeElement !== c2.current && !c2.current.contains(v2.activeElement)) {
              N(s2);
              return;
            }
          }
          s2.target?.isContentEditable && !t2?.enableOnContentEditable || H(y2, t2?.delimiter).forEach((v2) => {
            if (v2.includes(t2?.splitKey ?? "+") && v2.includes(t2?.sequenceSplitKey ?? ">")) {
              console.warn(
                `Hotkey ${v2} contains both ${t2?.splitKey ?? "+"} and ${t2?.sequenceSplitKey ?? ">"} which is not supported.`
              );
              return;
            }
            const h2 = P(
              v2,
              t2?.splitKey,
              t2?.sequenceSplitKey,
              t2?.useKey,
              t2?.description,
              t2?.metadata
            );
            if (h2.isSequence) {
              k2 = setTimeout(() => {
                g2 = [];
              }, t2?.sequenceTimeoutMs ?? 1e3);
              const C2 = h2.useKey ? s2.key : K(s2.code);
              if (D(C2.toLowerCase()))
                return;
              g2.push(C2);
              const G2 = h2.keys?.[g2.length - 1];
              if (C2 !== G2) {
                g2 = [], k2 && clearTimeout(k2);
                return;
              }
              g2.length === h2.keys?.length && (f2.current(s2, h2), k2 && clearTimeout(k2), g2 = []);
            } else if (re(s2, h2, t2?.ignoreModifiers) || h2.keys?.includes("*")) {
              if (t2?.ignoreEventWhen?.(s2) || B2 && a2.current)
                return;
              if (V(s2, h2, t2?.preventDefault), !X$1(s2, h2, t2?.enabled)) {
                N(s2);
                return;
              }
              f2.current(s2, h2), B2 || (a2.current = true);
            }
          });
        }
      }, O2 = (s2) => {
        s2.code !== void 0 && (_(K(s2.code)), (t2?.keydown === void 0 && t2?.keyup !== true || t2?.keydown) && p2(s2));
      }, q2 = (s2) => {
        s2.code !== void 0 && (I(K(s2.code)), a2.current = false, t2?.keyup && p2(s2, true));
      }, E2 = c2.current || n?.document || document;
      return E2.addEventListener("keyup", q2, n?.eventListenerOptions), E2.addEventListener("keydown", O2, n?.eventListenerOptions), m2 && H(y2, t2?.delimiter).forEach((s2) => {
        m2.addHotkey(
          P(
            s2,
            t2?.splitKey,
            t2?.sequenceSplitKey,
            t2?.useKey,
            t2?.description,
            t2?.metadata
          )
        );
      }), () => {
        E2.removeEventListener("keyup", q2, n?.eventListenerOptions), E2.removeEventListener("keydown", O2, n?.eventListenerOptions), m2 && H(y2, t2?.delimiter).forEach((s2) => {
          m2.removeHotkey(
            P(
              s2,
              t2?.splitKey,
              t2?.sequenceSplitKey,
              t2?.useKey,
              t2?.description,
              t2?.metadata
            )
          );
        }), g2 = [], k2 && clearTimeout(k2);
      };
    }, [y2, t2, d2]), c2;
  }
  function getReactProps(el) {
    if (!el) return null;
    for (const key in el) {
      if (key.startsWith("__reactProps$")) return el[key];
    }
    return null;
  }
  function findInReactFiberTree(element, targetKey) {
    if (!element || typeof element !== "object") return null;
    const fiberKey = Object.keys(element).find(
      (k2) => k2.startsWith("__reactFiber$")
    );
    if (!fiberKey) return null;
    const rootFiber = element[fiberKey];
    if (!rootFiber) return null;
    const stack = [rootFiber];
    while (stack.length > 0) {
      const fiber = stack.pop();
      if (!fiber || typeof fiber !== "object") continue;
      const props = fiber.memoizedProps;
      if (props && typeof props === "object" && targetKey in props) {
        return props[targetKey];
      }
      if (fiber.child) {
        stack.push(fiber.child);
      }
      if (fiber.sibling) {
        stack.push(fiber.sibling);
      }
    }
    return null;
  }
  const mergeClasses = (...classes) => classes.filter((className, index, array) => {
    return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
  }).join(" ").trim();
  const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
  const toCamelCase = (string) => string.replace(
    /^([A-Z])|[\s-_]+(\w)/g,
    (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
  );
  const toPascalCase = (string) => {
    const camelCase = toCamelCase(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
  };
  var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };
  const hasA11yProp = (props) => {
    for (const prop in props) {
      if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
        return true;
      }
    }
    return false;
  };
  const Icon = D$1(
    ({
      color = "currentColor",
      size = 24,
      strokeWidth = 2,
      absoluteStrokeWidth,
      className = "",
      children,
      iconNode,
      ...rest
    }, ref) => preact.createElement(
      "svg",
      {
        ref,
        ...defaultAttributes,
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: mergeClasses("lucide", className),
        ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
        ...rest
      },
      [
        ...iconNode.map(([tag, attrs]) => preact.createElement(tag, attrs)),
        ...Array.isArray(children) ? children : [children]
      ]
    )
  );
  const createLucideIcon = (iconName, iconNode) => {
    const Component2 = D$1(
      ({ className, ...props }, ref) => preact.createElement(Icon, {
        ref,
        iconNode,
        className: mergeClasses(
          `lucide-${toKebabCase(toPascalCase(iconName))}`,
          `lucide-${iconName}`,
          className
        ),
        ...props
      })
    );
    Component2.displayName = toPascalCase(iconName);
    return Component2;
  };
  const __iconNode$2 = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
  ];
  const CircleCheck = createLucideIcon("circle-check", __iconNode$2);
  const __iconNode$1 = [
    ["path", { d: "M12 15V3", key: "m9g1x1" }],
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
  ];
  const Download = createLucideIcon("download", __iconNode$1);
  const __iconNode = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
  ];
  const X = createLucideIcon("x", __iconNode);
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      gap: "8px"
    },
    header: {
      display: "flex",
      alignItems: "flex-start",
      gap: "12px"
    },
    iconWrapper: {
      flexShrink: 0,
      width: "36px",
      height: "36px",
      borderRadius: "50%",
      background: "rgba(255, 255, 255, 0.10)",
      display: "grid",
      placeItems: "center"
    },
    iconDownload: {
      width: "18px",
      height: "18px",
      color: "#60a5fa"
},
    iconCheck: {
      width: "18px",
      height: "18px",
      color: "#34d399"
},
    textGroup: {
      minWidth: 0,
      flex: 1,
      paddingRight: "4px"
    },
    filename: {
      fontSize: "13px",
      fontWeight: 500,
      color: "#ffffff",
      margin: 0,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    },
    subtitle: {
      fontSize: "12px",
      color: "#a1a1aa",
margin: "4px 0 0 0"
    },
    closeButton: {
      padding: "4px",
      borderRadius: "4px",
      color: "#71717a",
background: "none",
      border: "none",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "color 0.15s ease",
      marginTop: "2px"
    },
    progressTrack: {
      width: "100%",
      height: "3px",
      background: "rgba(255, 255, 255, 0.10)",
      borderRadius: "9999px",
      overflow: "hidden"
    },
    progressBar: {
      height: "100%",
      background: "linear-gradient(to right, #3b82f6, #22d3ee)",
borderRadius: "9999px",
      transition: "width 0.3s ease-out"
    },
    dismissButton: {
      alignSelf: "flex-end",
      fontSize: "11px",
      fontWeight: 500,
      padding: "4px 8px",
      borderRadius: "6px",
      background: "rgba(255, 255, 255, 0.05)",
      color: "#a1a1aa",
border: "none",
      cursor: "pointer",
      transition: "all 0.15s ease",
      lineHeight: 1,
      marginTop: "2px"
    }
  };
  function truncateMiddle(name, max = 32) {
    if (name.length <= max) return name;
    const ext = name.lastIndexOf(".") !== -1 ? name.slice(name.lastIndexOf(".")) : "";
    const stem = name.slice(0, name.length - ext.length);
    const keep = max - ext.length - 3;
    return stem.slice(0, Math.ceil(keep / 2)) + "…" + stem.slice(-Math.floor(keep / 2)) + ext;
  }
  function DownloadDark({
    closeToast,
    data
  }) {
    const done = data.progress >= 100;
    return u$1("div", { style: styles.container, children: [
u$1("div", { style: styles.header, children: [
u$1("div", { style: styles.iconWrapper, children: done ? u$1(CircleCheck, { style: styles.iconCheck }) : u$1(
          Download,
          {
            style: {
              ...styles.iconDownload,
              animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"
            }
          }
        ) }),
u$1("div", { style: styles.textGroup, children: [
u$1("p", { style: styles.filename, children: truncateMiddle(data.filename) }),
u$1("p", { style: styles.subtitle, children: done ? "Saved to Downloads" : `${Math.floor(data.progress)}% complete` })
        ] }),
        !done && u$1(
          "button",
          {
            onClick: closeToast,
            style: styles.closeButton,
            onMouseEnter: (e2) => e2.currentTarget.style.color = "#d4d4d8",
            onMouseLeave: (e2) => e2.currentTarget.style.color = "#71717a",
            children: u$1(X, { style: { width: "16px", height: "16px" } })
          }
        )
      ] }),
      !done && u$1("div", { style: styles.progressTrack, children: u$1(
        "div",
        {
          style: {
            ...styles.progressBar,
            width: `${data.progress}%`
          }
        }
      ) }),
      done && u$1(
        "button",
        {
          onClick: closeToast,
          style: styles.dismissButton,
          onMouseEnter: (e2) => {
            const btn = e2.currentTarget;
            btn.style.color = "#e4e4e7";
            btn.style.background = "rgba(255,255,255,0.10)";
          },
          onMouseLeave: (e2) => {
            const btn = e2.currentTarget;
            btn.style.color = "#a1a1aa";
            btn.style.background = "rgba(255,255,255,0.05)";
          },
          onMouseDown: (e2) => e2.currentTarget.style.transform = "scale(0.97)",
          onMouseUp: (e2) => e2.currentTarget.style.transform = "scale(1)",
          children: "Dismiss"
        }
      )
    ] });
  }
  function startDownloadToast(filename) {
    const id = y(DownloadDark, {
      data: { filename, progress: 0 },
      style: { background: "#18181b", color: "#ffffff" },
autoClose: false,
      closeButton: false,
      hideProgressBar: true
    });
    return id;
  }
  function updateDownloadProgress(id, filename, progress) {
    y.update(id, {
      data: { filename, progress }
    });
  }
  function completeDownload(id, filename) {
    y.update(id, {
      data: { filename, progress: 100 },
      autoClose: 4e3
    });
  }
  async function downloadFile(url, filename) {
    let toastId = null;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        y.error("Download failed");
        return;
      }
      const contentLength = response.headers.get("Content-Length");
      const mimeType = response.headers.get("Content-Type");
      const extension = mimeType.split("/")[1].replace("jpeg", "jpg");
      const total = contentLength ? parseInt(contentLength, 10) : null;
      const reader = response.body.getReader();
      let received = 0;
      const chunks = [];
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        chunks.push(value);
        received += value.length;
        if (total) {
          const progress = received * 100 / total;
          if (toastId === null) {
            toastId = startDownloadToast(`${filename}.${extension}`);
          } else {
            updateDownloadProgress(toastId, `${filename}.${extension}`, progress);
          }
        }
      }
      const blob = new Blob(chunks, { type: mimeType });
      const downloadUrl = window.URL.createObjectURL(blob);
      const a2 = document.createElement("a");
      a2.href = downloadUrl;
      a2.download = filename + "." + extension;
      a2.click();
      window.URL.revokeObjectURL(downloadUrl);
      completeDownload(toastId, `${filename}.${extension}`);
    } catch (error) {
      if (toastId !== null) {
        y.update(toastId, {
          render: "Download failed",
          type: "error",
          pauseOnFocusLoss: false,
          autoClose: 3e3,
          hideProgressBar: true,
          progress: void 0
        });
      } else {
        y.error("Download failed", {
          pauseOnFocusLoss: false,
          autoClose: 3e3,
          hideProgressBar: true
        });
      }
    }
  }
  function handleDownload() {
    const doc = unsafeWindow.document;
    const hoveredVideo = doc.querySelector(
      "[data-testid=tweetPhoto]:hover:has([data-testid=videoPlayer])"
    );
    const dialogModal = doc.querySelector(
      '[aria-labelledby="modal-header"][role="dialog"]'
    );
    const carouselModal = doc.querySelector(
      '[aria-labelledby="modal-header"] [aria-roledescription="carousel"]'
    );
    carouselModal?.__reactProps$v555v9s7vi?.children[0].props.children[0].props.currentItem;
    if (hoveredVideo) {
      const vidProps = getReactProps(hoveredVideo);
      const props = vidProps?.children?.props;
      if (!props) return;
      const {
        source: { downloadLink, variants },
        authorScreenName,
        tweetId
      } = props;
      let bestVariant = null;
      if (variants) {
        for (const v2 of variants) {
          try {
            if (v2.bitrate && (!bestVariant || v2.bitrate > bestVariant.bitrate)) {
              bestVariant = v2;
            }
          } catch (e2) {
            console.error("Access denied on variant:", v2);
            throw e2;
          }
        }
      }
      const vidUrl = downloadLink || bestVariant?.url;
      if (vidUrl) {
        downloadFile(vidUrl, `${authorScreenName} ${tweetId}`);
      }
    } else if (carouselModal) {
      const props = getReactProps(carouselModal);
      const { currentItem: currentItem2, children } = props.children[0].props.children[0].props;
      const mediaDetail = children[currentItem2].props.mediaDetail;
      if (!mediaDetail) return;
      const { expanded_url, media_url_https } = mediaDetail;
      const match = expanded_url?.match(
        /([^\/]+)\/status\/([^\/]+)\/photo\/([^\/]+)/
      );
      if (match) {
        const [, screenname, snowflake, index] = match;
        downloadFile(media_url_https, `${screenname} ${snowflake} ${index}`);
      }
    } else if (dialogModal) {
      const mediaDetail = findInReactFiberTree(dialogModal, "mediaDetail");
      if (!mediaDetail) return;
      const { expanded_url, media_url_https } = mediaDetail;
      const match = expanded_url?.match(
        /([^\/]+)\/status\/([^\/]+)\/photo\/([^\/]+)/
      );
      if (match) {
        const [, screenname, snowflake, index] = match;
        downloadFile(media_url_https, `${screenname} ${snowflake} ${index}`);
      }
    } else {
      const hoveredImg = doc.querySelector("img:hover");
      const hoveredLink = doc.querySelector("a:hover");
      if (!hoveredImg || !hoveredLink) return;
      const picUrl = hoveredImg.src;
      const newUrl = picUrl.replace(/(name=)[^&]*/, "$14096x4096");
      const href = hoveredLink.href;
      navigator.clipboard.writeText(href);
      const [, , , screenname, , snowflake, , index] = href.split("/");
      downloadFile(newUrl, `${screenname} ${snowflake} ${index}`);
    }
  }
  function App() {
    fe("shift+d", (event) => {
      event.preventDefault();
      handleDownload();
    });
    return u$1(preact.Fragment, { children: u$1(Lt, { position: "top-center" }) });
  }
  preact.render(
u$1(App, {}),
    (() => {
      const app = document.createElement("div");
      app.style = "position: fixed; top: 0; left: 0";
      document.body.append(app);
      return app;
    })()
  );

})(preact);