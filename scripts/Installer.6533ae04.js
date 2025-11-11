import { S as F, i as H, s as T, h as W, e as h, c as b, u as q, o as C, p as V, d, q as z, t as y, a as $, f as D, g as k, n as w, k as v, b as A, r as G, l as I, m as M, j as J, v as N, w as O, x as B, y as K } from "./index.4deac2e0.js";
import { c as P } from "./Api.322fe952.js";
import E from "./DownloadIcon.39c279f6.js";
function g(r, e, t) {
  const l = r.slice();
  return l[10] = e[t], l;
}
function Q(r) {
  let e, t, l = (
    /*error*/
    r[14].message + ""
  ), n, o, a;
  return {
    c() {
      e = h("p"), t = y("错误："), n = y(l), o = $(), a = h("p"), a.innerHTML = '如需帮助，请访问我们的<a href="/discuss/">社区讨论群组</a>。', D(e, "color", "red");
    },
    m(u, m) {
      b(u, e, m), k(e, t), k(e, n), b(u, o, m), b(u, a, m);
    },
    p: w,
    i: w,
    o: w,
    d(u) {
      u && d(e), u && d(o), u && d(a);
    }
  };
}
function R(r) {
  let e, t, l, n, o, a, u;
  function m(p, j) {
    if (
      /*expertOptions*/
      p[1]
    )
      return X;
    if (
      /*showVersionSelection*/
      p[0]
    )
      return U;
  }
  let _ = m(r), c = _ && _(r);
  const i = [le, te], f = [];
  function s(p, j) {
    return (
      /*win32*/
      p[3] ? 0 : 1
    );
  }
  return o = s(r), a = f[o] = i[o](r), {
    c() {
      c && c.c(), e = $(), t = h("div"), l = h("p"), l.textContent = "安装程序中可以选择 Minecraft 和 Fabric Loader 的版本，此下载适用于我们支持的所有版本。", n = $(), a.c(), v(t, "class", "download");
    },
    m(p, j) {
      c && c.m(p, j), b(p, e, j), b(p, t, j), k(t, l), k(t, n), f[o].m(t, null), u = !0;
    },
    p(p, j) {
      _ === (_ = m(p)) && c ? c.p(p, j) : (c && c.d(1), c = _ && _(p), c && (c.c(), c.m(e.parentNode, e))), a.p(p, j);
    },
    i(p) {
      u || (C(a), u = !0);
    },
    o(p) {
      V(a), u = !1;
    },
    d(p) {
      c && c.d(p), p && d(e), p && d(t), f[o].d();
    }
  };
}
function U(r) {
  let e, t = {
    ctx: r,
    current: null,
    token: null,
    hasCatch: !1,
    pending: ee,
    then: Z,
    catch: Y,
    value: 13
  };
  return W(
    /*getVersion*/
    r[6](),
    t
  ), {
    c() {
      e = A(), t.block.c();
    },
    m(l, n) {
      b(l, e, n), t.block.m(l, t.anchor = n), t.mount = () => e.parentNode, t.anchor = e;
    },
    p(l, n) {
      r = l, q(t, r, n);
    },
    d(l) {
      l && d(e), t.block.d(l), t.token = null, t = null;
    }
  };
}
function X(r) {
  let e, t, l, n, o, a, u, m, _ = (
    /*data*/
    r[9]
  ), c = [];
  for (let i = 0; i < _.length; i += 1)
    c[i] = S(g(r, _, i));
  return {
    c() {
      e = y(`Installer Version:
      `), t = h("select");
      for (let i = 0; i < c.length; i += 1)
        c[i].c();
      l = $(), n = h("br"), o = $(), a = h("br"), D(t, "min-width", "200px"), /*selectedVersion*/
      r[2] === void 0 && G(() => (
        /*select_change_handler*/
        r[7].call(t)
      ));
    },
    m(i, f) {
      b(i, e, f), b(i, t, f);
      for (let s = 0; s < c.length; s += 1)
        c[s] && c[s].m(t, null);
      I(
        t,
        /*selectedVersion*/
        r[2],
        !0
      ), b(i, l, f), b(i, n, f), b(i, o, f), b(i, a, f), u || (m = M(
        t,
        "change",
        /*select_change_handler*/
        r[7]
      ), u = !0);
    },
    p(i, f) {
      if (f & /*versions*/
      16) {
        _ = /*data*/
        i[9];
        let s;
        for (s = 0; s < _.length; s += 1) {
          const p = g(i, _, s);
          c[s] ? c[s].p(p, f) : (c[s] = S(p), c[s].c(), c[s].m(t, null));
        }
        for (; s < c.length; s += 1)
          c[s].d(1);
        c.length = _.length;
      }
      f & /*selectedVersion, versions*/
      20 && I(
        t,
        /*selectedVersion*/
        i[2]
      );
    },
    d(i) {
      i && d(e), i && d(t), J(c, i), i && d(l), i && d(n), i && d(o), i && d(a), u = !1, m();
    }
  };
}
function Y(r) {
  return { c: w, m: w, p: w, d: w };
}
function Z(r) {
  var o;
  let e, t, l = (
    /*latest*/
    ((o = r[13]) == null ? void 0 : o.stable) && x(r)
  ), n = !/*expertOptions*/
  r[1] && L(r);
  return {
    c() {
      e = h("p"), l && l.c(), t = $(), n && n.c();
    },
    m(a, u) {
      b(a, e, u), l && l.m(e, null), k(e, t), n && n.m(e, null);
    },
    p(a, u) {
      var m;
      /*latest*/
      (m = a[13]) != null && m.stable && l.p(a, u), /*expertOptions*/
      a[1] ? n && (n.d(1), n = null) : n ? n.p(a, u) : (n = L(a), n.c(), n.m(e, null));
    },
    d(a) {
      a && d(e), l && l.d(), n && n.d();
    }
  };
}
function x(r) {
  let e, t = (
    /*latest*/
    r[13].version + ""
  ), l, n;
  return {
    c() {
      e = y("Installer Version: "), l = y(t), n = y(" (Latest)");
    },
    m(o, a) {
      b(o, e, a), b(o, l, a), b(o, n, a);
    },
    p: w,
    d(o) {
      o && d(e), o && d(l), o && d(n);
    }
  };
}
function L(r) {
  let e, t, l;
  return {
    c() {
      e = h("a"), e.textContent = "显示 Beta 测试版本", v(e, "href", "#");
    },
    m(n, o) {
      b(n, e, o), t || (l = M(e, "click", K(
        /*showExpertOptions*/
        r[5]
      )), t = !0);
    },
    p: w,
    d(n) {
      n && d(e), t = !1, l();
    }
  };
}
function ee(r) {
  return { c: w, m: w, p: w, d: w };
}
function S(r) {
  let e, t = (
    /*version*/
    r[10].version + ""
  ), l;
  return {
    c() {
      e = h("option"), l = y(t), e.__value = /*version*/
      r[10].url, e.value = e.__value;
    },
    m(n, o) {
      b(n, e, o), k(e, l);
    },
    p: w,
    d(n) {
      n && d(e);
    }
  };
}
function te(r) {
  let e, t, l, n, o, a, u, m, _, c, i;
  return l = new E({}), {
    c() {
      e = h("p"), t = h("a"), N(l.$$.fragment), n = y(" 下载通用安装程序 (.jar)"), o = $(), a = h("br"), u = $(), m = h("a"), _ = y("下载适用于 Windows 的安装程序"), v(t, "class", "button primary large"), v(
        t,
        "href",
        /*selectedVersion*/
        r[2]
      ), v(m, "href", c = /*selectedVersion*/
      r[2].replace(".jar", ".exe"));
    },
    m(f, s) {
      b(f, e, s), k(e, t), O(l, t, null), k(t, n), k(e, o), k(e, a), k(e, u), k(e, m), k(m, _), i = !0;
    },
    p(f, s) {
      (!i || s & /*selectedVersion, versions*/
      20) && v(
        t,
        "href",
        /*selectedVersion*/
        f[2]
      ), (!i || s & /*selectedVersion, versions*/
      20 && c !== (c = /*selectedVersion*/
      f[2].replace(".jar", ".exe"))) && v(m, "href", c);
    },
    i(f) {
      i || (C(l.$$.fragment, f), i = !0);
    },
    o(f) {
      V(l.$$.fragment, f), i = !1;
    },
    d(f) {
      f && d(e), B(l);
    }
  };
}
function le(r) {
  let e, t, l, n, o, a, u, m, _, c, i;
  return l = new E({}), {
    c() {
      e = h("p"), t = h("a"), N(l.$$.fragment), n = y(" 下载适用于 Windows 的安装程序"), a = $(), u = h("br"), m = $(), _ = h("a"), c = y("下载通用安装程序 (.jar)"), v(t, "class", "button primary large"), v(t, "href", o = /*selectedVersion*/
      r[2].replace(".jar", ".exe")), v(
        _,
        "href",
        /*selectedVersion*/
        r[2]
      );
    },
    m(f, s) {
      b(f, e, s), k(e, t), O(l, t, null), k(t, n), k(e, a), k(e, u), k(e, m), k(e, _), k(_, c), i = !0;
    },
    p(f, s) {
      (!i || s & /*selectedVersion, versions*/
      20 && o !== (o = /*selectedVersion*/
      f[2].replace(".jar", ".exe"))) && v(t, "href", o), (!i || s & /*selectedVersion, versions*/
      20) && v(
        _,
        "href",
        /*selectedVersion*/
        f[2]
      );
    },
    i(f) {
      i || (C(l.$$.fragment, f), i = !0);
    },
    o(f) {
      V(l.$$.fragment, f), i = !1;
    },
    d(f) {
      f && d(e), B(l);
    }
  };
}
function ne(r) {
  let e;
  return {
    c() {
      e = h("p"), e.textContent = "正在加载版本信息……";
    },
    m(t, l) {
      b(t, e, l);
    },
    p: w,
    i: w,
    o: w,
    d(t) {
      t && d(e);
    }
  };
}
function re(r) {
  let e, t, l = {
    ctx: r,
    current: null,
    token: null,
    hasCatch: !0,
    pending: ne,
    then: R,
    catch: Q,
    value: 9,
    error: 14,
    blocks: [, , ,]
  };
  return W(
    /*versions*/
    r[4],
    l
  ), {
    c() {
      e = h("main"), l.block.c();
    },
    m(n, o) {
      b(n, e, o), l.block.m(e, l.anchor = null), l.mount = () => e, l.anchor = null, t = !0;
    },
    p(n, [o]) {
      r = n, q(l, r, o);
    },
    i(n) {
      t || (C(l.block), t = !0);
    },
    o(n) {
      for (let o = 0; o < 3; o += 1) {
        const a = l.blocks[o];
        V(a);
      }
      t = !1;
    },
    d(n) {
      n && d(e), l.block.d(), l.token = null, l = null;
    }
  };
}
function oe(r, e, t) {
  const l = navigator.platform == "Win32";
  let n = !1, o = !1, a = "", u = m();
  async function m() {
    var s;
    const f = await P();
    return t(2, a = ((s = f.find((p) => p.stable)) == null ? void 0 : s.url) ?? ""), t(0, n = f[0].stable == !1), f;
  }
  function _() {
    t(1, o = !0);
  }
  async function c() {
    return (await u).find((f) => f.url === a);
  }
  function i() {
    a = z(this), t(2, a), t(4, u);
  }
  return [
    n,
    o,
    a,
    l,
    u,
    _,
    c,
    i
  ];
}
class ce extends F {
  constructor(e) {
    super(), H(this, e, oe, re, T, {});
  }
}
export {
  ce as default
};
