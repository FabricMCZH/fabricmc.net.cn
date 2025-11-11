import { S as ne, i as ie, s as oe, h as re, a as M, e as m, c as n, u as fe, n as h, d as i, q as pe, t as V, f as K, g as a, r as ae, k as ue, l as te, m as _e, A as T, j as me } from "./index.4deac2e0.js";
import { d as ce, b as be, a as de, k as Ve, l as ke } from "./Api.322fe952.js";
function le(s, t, f) {
  const p = s.slice();
  return p[9] = t[f], p;
}
function ve(s) {
  let t, f, p = (
    /*error*/
    s[12].message + ""
  ), c, b, k;
  return {
    c() {
      t = m("p"), f = V("错误："), c = V(p), b = M(), k = m("p"), k.innerHTML = '如需帮助，请访问我们的<a href="/discuss/">社区讨论群组</a>。', K(t, "color", "red");
    },
    m(l, o) {
      n(l, t, o), a(t, f), a(t, c), n(l, b, o), n(l, k, o);
    },
    p: h,
    d(l) {
      l && i(t), l && i(b), l && i(k);
    }
  };
}
function Me(s) {
  let t, f, p, c, b, k, l, o, _, H, u, A, L, Q, Y, R, y, U, I, W, X, N, Z, j, q, O, z, w, G, S, B, C, $, D, x, E, P, J, g, F = (
    /*gameVersions*/
    s[4]
  ), v = [];
  for (let e = 0; e < F.length; e += 1)
    v[e] = se(le(s, F, e));
  return {
    c() {
      t = m("h2"), t.textContent = "最新版本", f = M(), p = m("p"), p.innerHTML = "选择一个 Minecraft 版本，以获取推荐的 Fabric Loader、Yarn 和 Fabric API 版本，用于您的 <code>gradle.properties</code> 文件。", c = M(), b = m("p"), k = V(`Minecraft 版本：
        `), l = m("select");
      for (let e = 0; e < v.length; e += 1)
        v[e].c();
      o = M(), _ = m("div"), H = m("pre"), u = m("code"), A = V(`
minecraft_version=`), L = V(
        /*minecraftVersion*/
        s[0]
      ), Q = V(`
yarn_mappings=`), Y = V(
        /*yarnVersion*/
        s[1]
      ), R = V(`
loader_version=`), y = V(
        /*loaderVersion*/
        s[2]
      ), U = V(`
loom_version=1.13-SNAPSHOT

# Fabric API
fabric_version=`), I = V(
        /*apiVersion*/
        s[3]
      ), W = V(`
        `), X = M(), N = m("p"), N.innerHTML = "<strong>重要提醒：</strong>某些情况下，例如快照或特殊版本，<code>fabric-api</code> 版本可能与您的 Minecraft 版本无法完全匹配。", Z = M(), j = m("p"), j.innerHTML = '如果遇到问题，请仔细检查你的 Fabric API 是否是 <a href="https://modrinth.com/mod/fabric-api">Modrinth</a> 或 <a href="https://minecraft.curseforge.com/projects/fabric/files">CurseForge</a> 上的最新版本。', q = M(), O = m("hr"), z = M(), w = m("h2"), w.textContent = "自动更新映射", G = M(), S = m("p"), S.textContent = "使用以下自动更新命令，使您项目的 Yarn 映射保持最新：", B = M(), C = m("code"), $ = V('gradlew migrateMappings --mappings "'), D = V(
        /*yarnVersion*/
        s[1]
      ), x = V('"'), E = M(), P = m("p"), P.innerHTML = '有关此命令的更多信息，请参阅 <a href="https://wiki.fabricmc.net/zh_cn:tutorial:migratemappings">更新 Yarn 映射</a>。', K(l, "min-width", "200px"), /*minecraftVersion*/
      s[0] === void 0 && ae(() => (
        /*select_change_handler*/
        s[5].call(l)
      )), K(_, "margin-bottom", "15px"), ue(C, "class", "copy-code svelte-sbpww1");
    },
    m(e, r) {
      n(e, t, r), n(e, f, r), n(e, p, r), n(e, c, r), n(e, b, r), a(b, k), a(b, l);
      for (let d = 0; d < v.length; d += 1)
        v[d] && v[d].m(l, null);
      te(
        l,
        /*minecraftVersion*/
        s[0],
        !0
      ), n(e, o, r), n(e, _, r), a(_, H), a(H, u), a(u, A), a(u, L), a(u, Q), a(u, Y), a(u, R), a(u, y), a(u, U), a(u, I), a(u, W), a(_, X), a(_, N), a(_, Z), a(_, j), n(e, q, r), n(e, O, r), n(e, z, r), n(e, w, r), n(e, G, r), n(e, S, r), n(e, B, r), n(e, C, r), a(C, $), a(C, D), a(C, x), n(e, E, r), n(e, P, r), J || (g = _e(
        l,
        "change",
        /*select_change_handler*/
        s[5]
      ), J = !0);
    },
    p(e, r) {
      if (r & /*gameVersions*/
      16) {
        F = /*gameVersions*/
        e[4];
        let d;
        for (d = 0; d < F.length; d += 1) {
          const ee = le(e, F, d);
          v[d] ? v[d].p(ee, r) : (v[d] = se(ee), v[d].c(), v[d].m(l, null));
        }
        for (; d < v.length; d += 1)
          v[d].d(1);
        v.length = F.length;
      }
      r & /*minecraftVersion, gameVersions*/
      17 && te(
        l,
        /*minecraftVersion*/
        e[0]
      ), r & /*minecraftVersion*/
      1 && T(
        L,
        /*minecraftVersion*/
        e[0]
      ), r & /*yarnVersion*/
      2 && T(
        Y,
        /*yarnVersion*/
        e[1]
      ), r & /*loaderVersion*/
      4 && T(
        y,
        /*loaderVersion*/
        e[2]
      ), r & /*apiVersion*/
      8 && T(
        I,
        /*apiVersion*/
        e[3]
      ), r & /*yarnVersion*/
      2 && T(
        D,
        /*yarnVersion*/
        e[1]
      );
    },
    d(e) {
      e && i(t), e && i(f), e && i(p), e && i(c), e && i(b), me(v, e), e && i(o), e && i(_), e && i(q), e && i(O), e && i(z), e && i(w), e && i(G), e && i(S), e && i(B), e && i(C), e && i(E), e && i(P), J = !1, g();
    }
  };
}
function se(s) {
  let t, f = (
    /*version*/
    s[9] + ""
  ), p;
  return {
    c() {
      t = m("option"), p = V(f), t.__value = /*version*/
      s[9], t.value = t.__value;
    },
    m(c, b) {
      n(c, t, b), a(t, p);
    },
    p: h,
    d(c) {
      c && i(t);
    }
  };
}
function Le(s) {
  let t;
  return {
    c() {
      t = m("p"), t.textContent = "正在加载版本信息……";
    },
    m(f, p) {
      n(f, t, p);
    },
    p: h,
    d(f) {
      f && i(t);
    }
  };
}
function Ae(s) {
  let t, f, p, c, b, k, l = {
    ctx: s,
    current: null,
    token: null,
    hasCatch: !0,
    pending: Le,
    then: Me,
    catch: ve,
    value: 4,
    error: 12
  };
  return re(
    /*gameVersions*/
    s[4],
    l
  ), {
    c() {
      l.block.c(), t = M(), f = m("hr"), p = M(), c = m("h2"), c.textContent = "Fabric Loom", b = M(), k = m("p"), k.innerHTML = "推荐的 Fabric Loom 版本是 <strong>1.13-SNAPSHOT</strong>。这通常在 build.gradle 文件的顶部附近定义。";
    },
    m(o, _) {
      l.block.m(o, l.anchor = _), l.mount = () => t.parentNode, l.anchor = t, n(o, t, _), n(o, f, _), n(o, p, _), n(o, c, _), n(o, b, _), n(o, k, _);
    },
    p(o, [_]) {
      s = o, fe(l, s, _);
    },
    i: h,
    o: h,
    d(o) {
      l.block.d(o), l.token = null, l = null, o && i(t), o && i(f), o && i(p), o && i(c), o && i(b), o && i(k);
    }
  };
}
function Ce(s, t, f) {
  let p, c, b, k, l = ce().then((u) => {
    f(0, p = u.find((L) => L.stable).version);
    const A = u[0];
    return u.filter((L) => L.stable || L == A).map((L) => L.version);
  });
  be().then((u) => (f(2, b = u.find((A) => A.stable).version), u));
  const o = de(), _ = Ve();
  function H() {
    p = pe(this), f(0, p), f(4, l);
  }
  return s.$$.update = () => {
    s.$$.dirty & /*minecraftVersion*/
    1 && o.then((u) => {
      var A;
      return f(1, c = ((A = u.find((L) => L.gameVersion == p)) == null ? void 0 : A.version) || "unknown");
    }), s.$$.dirty & /*minecraftVersion*/
    1 && _.then((u) => f(3, k = u.filter((A) => ke(A, p)).pop()));
  }, [
    p,
    c,
    b,
    k,
    l,
    H
  ];
}
class Te extends ne {
  constructor(t) {
    super(), ie(this, t, Ce, Ae, oe, {});
  }
}
export {
  Te as default
};
