import { S as P, i as Y, s as I, h as N, e as p, a as S, b as A, c as u, u as O, n as b, d as _, t as v, f as q, g as d, j as L, k as x, l as D, m as H } from "./index.4deac2e0.js";
import { g as T, a as W, b as j } from "./Api.322fe952.js";
function F(a, t, l) {
  const e = a.slice();
  return e[2] = t[l], e;
}
function J(a, t, l) {
  const e = a.slice();
  return e[5] = t[l], e;
}
function z(a) {
  let t, l, e = (
    /*error*/
    a[8].message + ""
  ), n, r, o;
  return {
    c() {
      t = p("p"), l = v("错误："), n = v(e), r = S(), o = p("p"), o.innerHTML = '如需帮助，请访问我们的<a href="/discuss/">社区讨论群组</a>。', q(t, "color", "red");
    },
    m(s, h) {
      u(s, t, h), d(t, l), d(t, n), u(s, r, h), u(s, o, h);
    },
    p: b,
    d(s) {
      s && _(t), s && _(r), s && _(o);
    }
  };
}
function B(a) {
  let t, l = (
    /*data*/
    a[0]
  ), e = [];
  for (let n = 0; n < l.length; n += 1)
    e[n] = y(F(a, l, n));
  return {
    c() {
      for (let n = 0; n < e.length; n += 1)
        e[n].c();
      t = A();
    },
    m(n, r) {
      for (let o = 0; o < e.length; o += 1)
        e[o] && e[o].m(n, r);
      u(n, t, r);
    },
    p(n, r) {
      if (r & /*data, handleSelectChange*/
      1) {
        l = /*data*/
        n[0];
        let o;
        for (o = 0; o < l.length; o += 1) {
          const s = F(n, l, o);
          e[o] ? e[o].p(s, r) : (e[o] = y(s), e[o].c(), e[o].m(t.parentNode, t));
        }
        for (; o < e.length; o += 1)
          e[o].d(1);
        e.length = l.length;
      }
    },
    d(n) {
      L(e, n), n && _(t);
    }
  };
}
function $(a) {
  let t, l = (
    /*version*/
    a[5] + ""
  ), e;
  return {
    c() {
      t = p("option"), e = v(l), t.__value = /*version*/
      a[5], t.value = t.__value;
    },
    m(n, r) {
      u(n, t, r), d(t, e);
    },
    p: b,
    d(n) {
      n && _(t);
    }
  };
}
function y(a) {
  let t, l, e, n, r = (
    /*project*/
    a[2].name + ""
  ), o, s, h, k, w, m = (
    /*project*/
    a[2].versions
  ), f = [];
  for (let i = 0; i < m.length; i += 1)
    f[i] = $(J(a, m, i));
  function M(...i) {
    return (
      /*change_handler*/
      a[1](
        /*project*/
        a[2],
        ...i
      )
    );
  }
  return {
    c() {
      t = p("div"), l = p("select"), e = p("option"), n = v("选择 "), o = v(r), s = v(" 版本");
      for (let i = 0; i < f.length; i += 1)
        f[i].c();
      h = S(), e.__value = "选择 " + /*project*/
      a[2].name + " 版本", e.value = e.__value, x(t, "class", "javadoc-selector");
    },
    m(i, g) {
      u(i, t, g), d(t, l), d(l, e), d(e, n), d(e, o), d(e, s);
      for (let c = 0; c < f.length; c += 1)
        f[c] && f[c].m(l, null);
      D(l, "选择 " + /*project*/
      a[2].name + " 版本"), d(t, h), k || (w = H(l, "change", M), k = !0);
    },
    p(i, g) {
      if (a = i, g & /*data*/
      1) {
        m = /*project*/
        a[2].versions;
        let c;
        for (c = 0; c < m.length; c += 1) {
          const C = J(a, m, c);
          f[c] ? f[c].p(C, g) : (f[c] = $(C), f[c].c(), f[c].m(l, null));
        }
        for (; c < f.length; c += 1)
          f[c].d(1);
        f.length = m.length;
      }
    },
    d(i) {
      i && _(t), L(f, i), k = !1, w();
    }
  };
}
function E(a) {
  let t;
  return {
    c() {
      t = p("p"), t.textContent = "正在加载版本信息……";
    },
    m(l, e) {
      u(l, t, e);
    },
    p: b,
    d(l) {
      l && _(t);
    }
  };
}
function G(a) {
  let t, l, e, n = {
    ctx: a,
    current: null,
    token: null,
    hasCatch: !0,
    pending: E,
    then: B,
    catch: z,
    value: 0,
    error: 8
  };
  return N(
    /*data*/
    a[0],
    n
  ), {
    c() {
      t = p("div"), l = S(), e = A(), n.block.c();
    },
    m(r, o) {
      u(r, t, o), u(r, l, o), u(r, e, o), n.block.m(r, n.anchor = o), n.mount = () => e.parentNode, n.anchor = e;
    },
    p(r, [o]) {
      a = r, O(n, a, o);
    },
    i: b,
    o: b,
    d(r) {
      r && _(t), r && _(l), r && _(e), n.block.d(r), n.token = null, n = null;
    }
  };
}
function K(a, t) {
  const l = a.target.value;
  l.includes("选择") || window.location.assign(`https://maven.fabricmc.net/docs/${t.prefix}${l}/`);
}
function V(a, t, l) {
  return a.filter((e) => e.startsWith(t)).map((e) => e.slice(t.length)).sort((e, n) => l.indexOf(e) - l.indexOf(n));
}
function Q(a) {
  return [Promise.all([T(), W(), j()]).then(([e, n, r]) => {
    const o = V(e, "fabric-api-", []).reverse();
    return [
      {
        name: "Minecraft (Yarn)",
        desc: "根据 Yarn 映射中的注释生成的 Minecraft Javadoc 文档",
        prefix: "yarn-",
        versions: V(e, "yarn-", n.map((s) => s.version)),
        selected: "Select Version"
      },
      {
        name: "Fabric API",
        desc: "Fabric API 的 Javadoc 文档",
        prefix: "fabric-api-",
        versions: o,
        selected: "Select Version"
      },
      {
        name: "Fabric Loader",
        desc: "Fabric Loader 的 Javadoc 文档",
        prefix: "fabric-loader-",
        versions: V(e, "fabric-loader-", r.map((s) => s.version)),
        selected: "Select Version"
      }
    ];
  }), (e, n) => K(n, e)];
}
class X extends P {
  constructor(t) {
    super(), Y(this, t, Q, G, I, {});
  }
}
export {
  X as default
};
