import { S as I, i as J, s as K, h as T, e as f, t as g, a as v, k as O, c as _, g as u, m as G, u as j, n as V, d as p, q as F, f as q, r as D, l as M, j as E, b as P } from "./index.4deac2e0.js";
import { d as Q, b as R, f as U } from "./Api.322fe952.js";
function N(r, e, t) {
  const n = r.slice();
  return n[10] = e[t], n;
}
function Y(r, e, t) {
  const n = r.slice();
  return n[10] = e[t], n;
}
function W(r) {
  let e, t, n = (
    /*error*/
    r[13].message + ""
  ), c, i, o;
  return {
    c() {
      e = f("p"), t = g("错误："), c = g(n), i = v(), o = f("p"), o.innerHTML = '如需帮助，请访问我们的<a href="/discuss/">社区讨论群组</a>。', q(e, "color", "red");
    },
    m(l, a) {
      _(l, e, a), u(e, t), u(e, c), _(l, i, a), _(l, o, a);
    },
    p: V,
    d(l) {
      l && p(e), l && p(i), l && p(o);
    }
  };
}
function X(r) {
  let e, t, n, c, i = (
    /*data*/
    r[9]
  ), o = [];
  for (let l = 0; l < i.length; l += 1)
    o[l] = A(Y(r, i, l));
  return {
    c() {
      e = g(`Minecraft 版本：
    `), t = f("select");
      for (let l = 0; l < o.length; l += 1)
        o[l].c();
      q(t, "min-width", "200px"), /*selectedGameVersion*/
      r[1] === void 0 && D(() => (
        /*select_change_handler*/
        r[7].call(t)
      ));
    },
    m(l, a) {
      _(l, e, a), _(l, t, a);
      for (let s = 0; s < o.length; s += 1)
        o[s] && o[s].m(t, null);
      M(
        t,
        /*selectedGameVersion*/
        r[1],
        !0
      ), n || (c = G(
        t,
        "change",
        /*select_change_handler*/
        r[7]
      ), n = !0);
    },
    p(l, a) {
      if (a & /*gameVersions, listSnapshots*/
      9) {
        i = /*data*/
        l[9];
        let s;
        for (s = 0; s < i.length; s += 1) {
          const h = Y(l, i, s);
          o[s] ? o[s].p(h, a) : (o[s] = A(h), o[s].c(), o[s].m(t, null));
        }
        for (; s < o.length; s += 1)
          o[s].d(1);
        o.length = i.length;
      }
      a & /*selectedGameVersion, gameVersions*/
      10 && M(
        t,
        /*selectedGameVersion*/
        l[1]
      );
    },
    d(l) {
      l && p(e), l && p(t), E(o, l), n = !1, c();
    }
  };
}
function z(r) {
  let e, t = (
    /*version*/
    r[10].version + ""
  ), n;
  return {
    c() {
      e = f("option"), n = g(t), e.__value = /*version*/
      r[10].version, e.value = e.__value;
    },
    m(c, i) {
      _(c, e, i), u(e, n);
    },
    p: V,
    d(c) {
      c && p(e);
    }
  };
}
function A(r) {
  let e, t = (
    /*version*/
    (r[10].stable || /*listSnapshots*/
    r[0]) && z(r)
  );
  return {
    c() {
      t && t.c(), e = P();
    },
    m(n, c) {
      t && t.m(n, c), _(n, e, c);
    },
    p(n, c) {
      /*version*/
      n[10].stable || /*listSnapshots*/
      n[0] ? t ? t.p(n, c) : (t = z(n), t.c(), t.m(e.parentNode, e)) : t && (t.d(1), t = null);
    },
    d(n) {
      t && t.d(n), n && p(e);
    }
  };
}
function Z(r) {
  let e;
  return {
    c() {
      e = f("p"), e.textContent = "正在加载版本信息……";
    },
    m(t, n) {
      _(t, e, n);
    },
    p: V,
    d(t) {
      t && p(e);
    }
  };
}
function $(r) {
  let e, t, n = (
    /*error*/
    r[13].message + ""
  ), c, i, o;
  return {
    c() {
      e = f("p"), t = g("错误："), c = g(n), i = v(), o = f("p"), o.innerHTML = '如需帮助，请访问我们的<a href="/discuss/">社区讨论群组</a>。', q(e, "color", "red");
    },
    m(l, a) {
      _(l, e, a), u(e, t), u(e, c), _(l, i, a), _(l, o, a);
    },
    p: V,
    d(l) {
      l && p(e), l && p(i), l && p(o);
    }
  };
}
function x(r) {
  let e, t, n, c, i = (
    /*data*/
    r[9]
  ), o = [];
  for (let l = 0; l < i.length; l += 1)
    o[l] = B(N(r, i, l));
  return {
    c() {
      e = g(`Fabric Loader 版本：
    `), t = f("select");
      for (let l = 0; l < o.length; l += 1)
        o[l].c();
      q(t, "min-width", "200px"), /*selectedLoaderVersion*/
      r[2] === void 0 && D(() => (
        /*select_change_handler_1*/
        r[8].call(t)
      ));
    },
    m(l, a) {
      _(l, e, a), _(l, t, a);
      for (let s = 0; s < o.length; s += 1)
        o[s] && o[s].m(t, null);
      M(
        t,
        /*selectedLoaderVersion*/
        r[2],
        !0
      ), n || (c = G(
        t,
        "change",
        /*select_change_handler_1*/
        r[8]
      ), n = !0);
    },
    p(l, a) {
      if (a & /*loaderVersions*/
      16) {
        i = /*data*/
        l[9];
        let s;
        for (s = 0; s < i.length; s += 1) {
          const h = N(l, i, s);
          o[s] ? o[s].p(h, a) : (o[s] = B(h), o[s].c(), o[s].m(t, null));
        }
        for (; s < o.length; s += 1)
          o[s].d(1);
        o.length = i.length;
      }
      a & /*selectedLoaderVersion, loaderVersions*/
      20 && M(
        t,
        /*selectedLoaderVersion*/
        l[2]
      );
    },
    d(l) {
      l && p(e), l && p(t), E(o, l), n = !1, c();
    }
  };
}
function B(r) {
  let e, t = (
    /*version*/
    r[10].version + ""
  ), n;
  return {
    c() {
      e = f("option"), n = g(t), e.__value = /*version*/
      r[10].version, e.value = e.__value;
    },
    m(c, i) {
      _(c, e, i), u(e, n);
    },
    p: V,
    d(c) {
      c && p(e);
    }
  };
}
function ee(r) {
  let e;
  return {
    c() {
      e = f("p"), e.textContent = "正在加载版本信息……";
    },
    m(t, n) {
      _(t, e, n);
    },
    p: V,
    d(t) {
      t && p(e);
    }
  };
}
function te(r) {
  let e, t, n, c, i, o, l, a, s, h, C, k, d, w, y, H, m = {
    ctx: r,
    current: null,
    token: null,
    hasCatch: !0,
    pending: Z,
    then: X,
    catch: W,
    value: 9,
    error: 13
  };
  T(
    /*gameVersions*/
    r[3],
    m
  );
  let b = {
    ctx: r,
    current: null,
    token: null,
    hasCatch: !0,
    pending: ee,
    then: x,
    catch: $,
    value: 9,
    error: 13
  };
  return T(
    /*loaderVersions*/
    r[4],
    b
  ), {
    c() {
      e = f("main"), t = f("label"), n = f("input"), c = g(`
    显示快照版本`), i = v(), o = f("br"), l = v(), a = f("br"), s = v(), m.block.c(), h = v(), C = f("br"), k = v(), d = f("br"), w = v(), b.block.c(), O(n, "type", "checkbox");
    },
    m(L, S) {
      _(L, e, S), u(e, t), u(t, n), n.checked = /*listSnapshots*/
      r[0], u(t, c), u(e, i), u(e, o), u(e, l), u(e, a), u(e, s), m.block.m(e, m.anchor = null), m.mount = () => e, m.anchor = h, u(e, h), u(e, C), u(e, k), u(e, d), u(e, w), b.block.m(e, b.anchor = null), b.mount = () => e, b.anchor = null, y || (H = G(
        n,
        "change",
        /*input_change_handler*/
        r[6]
      ), y = !0);
    },
    p(L, [S]) {
      r = L, S & /*listSnapshots*/
      1 && (n.checked = /*listSnapshots*/
      r[0]), j(m, r, S), j(b, r, S);
    },
    i: V,
    o: V,
    d(L) {
      L && p(e), m.block.d(), m.token = null, m = null, b.block.d(), b.token = null, b = null, y = !1, H();
    }
  };
}
function le(r, e, t) {
  let n = !1, c = "", i = "", o = Q().then((k) => {
    var d;
    return t(1, c = ((d = k.find((w) => w.stable || n)) == null ? void 0 : d.version) ?? ""), k;
  }), l = R().then((k) => {
    var d;
    return t(2, i = ((d = k[0]) == null ? void 0 : d.version) ?? ""), k;
  });
  async function a() {
    var d;
    return {
      yarnVersion: ((d = await U(c)) == null ? void 0 : d.version) ?? "",
      loaderVersion: i,
      selectedGameVersion: c
    };
  }
  function s() {
    n = this.checked, t(0, n);
  }
  function h() {
    c = F(this), t(1, c), t(3, o);
  }
  function C() {
    i = F(this), t(2, i), t(4, l);
  }
  return [
    n,
    c,
    i,
    o,
    l,
    a,
    s,
    h,
    C
  ];
}
class re extends I {
  constructor(e) {
    super(), J(this, e, le, te, K, { getSelectedVersions: 5 });
  }
  get getSelectedVersions() {
    return this.$$.ctx[5];
  }
}
export {
  re as default
};
