import { S as Je, i as Me, s as Se, h as Ge, e as i, c as g, u as Le, o as qe, p as Fe, d as k, q as re, t as V, a as b, f as T, g as s, n as M, v as ze, k as _, r as oe, l as P, w as Be, m as se, A as ge, j as ae, x as Ue, B as Ae } from "./index.4deac2e0.js";
import { d as De, b as He, c as Oe } from "./Api.322fe952.js";
import Pe from "./DownloadIcon.39c279f6.js";
function ke(n, e, r) {
  const o = n.slice();
  return o[11] = e[r], o;
}
function Ce(n, e, r) {
  const o = n.slice();
  return o[11] = e[r], o;
}
function we(n, e, r) {
  const o = n.slice();
  return o[11] = e[r], o;
}
function Te(n) {
  let e, r, o = (
    /*error*/
    n[18].message + ""
  ), c, a, m;
  return {
    c() {
      e = i("p"), r = V("错误："), c = V(o), a = b(), m = i("p"), m.innerHTML = '如需帮助，请访问我们的<a href="/discuss/">社区讨论群组</a>。', T(e, "color", "red");
    },
    m(f, p) {
      g(f, e, p), s(e, r), s(e, c), g(f, a, p), g(f, m, p);
    },
    p: M,
    i: M,
    o: M,
    d(f) {
      f && k(e), f && k(a), f && k(m);
    }
  };
}
function Xe(n) {
  let e, r, o, c, a, m, f, p, z, j, K, S, B, N, I, q, C, w, U, ie, ce, R, X, fe, W, Q, Y, F, Z, ue, y, _e, E, pe, $, x, J, ee, me, te, he, A, de, le, ve, G, ne, be, D = (
    /*data*/
    n[10].game
  ), h = [];
  for (let t = 0; t < D.length; t += 1)
    h[t] = je(we(n, D, t));
  let H = (
    /*data*/
    n[10].loader
  ), d = [];
  for (let t = 0; t < H.length; t += 1)
    d[t] = Ie(Ce(n, H, t));
  let O = (
    /*data*/
    n[10].installer
  ), v = [];
  for (let t = 0; t < O.length; t += 1)
    v[t] = Ve(ke(n, O, t));
  return U = new Pe({}), {
    c() {
      e = i("div"), r = i("div"), o = i("label"), o.textContent = "Minecraft 版本：", c = b(), a = i("select");
      for (let t = 0; t < h.length; t += 1)
        h[t].c();
      m = b(), f = i("div"), p = i("label"), p.textContent = "Fabric Loader 版本：", z = b(), j = i("select");
      for (let t = 0; t < d.length; t += 1)
        d[t].c();
      K = b(), S = i("div"), B = i("label"), B.textContent = "安装程序版本：", N = b(), I = i("select");
      for (let t = 0; t < v.length; t += 1)
        v[t].c();
      q = b(), C = i("div"), w = i("a"), ze(U.$$.fragment), ie = V("下载可执行服务器启动器 (.jar)"), ce = b(), R = i("p"), X = i("a"), fe = V("下载旧版本或手动安装的安装程序"), W = b(), Q = i("p"), Q.textContent = "这个可执行 .jar 文件是一个小型启动器，它会使用上面指定的版本启动启用了 Fabric 的 Minecraft 官方服务器。使用此方法无需安装程序。", Y = b(), F = i("div"), Z = i("h4"), Z.textContent = "命令行下载：", ue = b(), y = i("p"), y.textContent = "使用以下命令将可执行服务器启动器下载到当前目录。", _e = b(), E = i("code"), pe = V("curl -OJ "), $ = V(
        /*serverJarUrl*/
        n[5]
      ), x = b(), J = i("div"), ee = i("h4"), ee.textContent = "启动命令：", me = b(), te = i("p"), te.textContent = "使用以下命令运行分配了 2GB 运行内存的服务器启动器。稍等片刻安装了 Fabric 的 Minecraft 服务器就会准备就绪。", he = b(), A = i("code"), de = V("java -Xmx2G -jar "), le = V(
        /*serverJarFilename*/
        n[4]
      ), ve = V(" nogui"), _(o, "for", "minecraft-version"), _(a, "id", "minecraft-version"), T(a, "min-width", "200px"), /*gameVersion*/
      n[0] === void 0 && oe(() => (
        /*select0_change_handler*/
        n[7].call(a)
      )), _(r, "class", "form-line"), _(p, "for", "loader-version"), _(j, "id", "loader-version"), T(j, "min-width", "200px"), /*loaderVersion*/
      n[1] === void 0 && oe(() => (
        /*select1_change_handler*/
        n[8].call(j)
      )), _(f, "class", "form-line"), _(B, "for", "installer-version"), _(I, "id", "installer-version"), T(I, "min-width", "200px"), /*installerVersion*/
      n[2] === void 0 && oe(() => (
        /*select2_change_handler*/
        n[9].call(I)
      )), _(S, "class", "form-line"), _(w, "class", "button primary large"), _(
        w,
        "href",
        /*serverJarUrl*/
        n[5]
      ), _(C, "class", "download"), _(
        X,
        "href",
        /*installerJarUrl*/
        n[3]
      ), _(e, "class", "download"), _(E, "class", "svelte-l8qzb7"), T(F, "margin-bottom", "15px"), _(A, "class", "svelte-l8qzb7"), T(J, "margin-bottom", "15px");
    },
    m(t, u) {
      g(t, e, u), s(e, r), s(r, o), s(r, c), s(r, a);
      for (let l = 0; l < h.length; l += 1)
        h[l] && h[l].m(a, null);
      P(
        a,
        /*gameVersion*/
        n[0],
        !0
      ), s(e, m), s(e, f), s(f, p), s(f, z), s(f, j);
      for (let l = 0; l < d.length; l += 1)
        d[l] && d[l].m(j, null);
      P(
        j,
        /*loaderVersion*/
        n[1],
        !0
      ), s(e, K), s(e, S), s(S, B), s(S, N), s(S, I);
      for (let l = 0; l < v.length; l += 1)
        v[l] && v[l].m(I, null);
      P(
        I,
        /*installerVersion*/
        n[2],
        !0
      ), s(e, q), s(e, C), s(C, w), Be(U, w, null), s(w, ie), s(e, ce), s(e, R), s(R, X), s(X, fe), g(t, W, u), g(t, Q, u), g(t, Y, u), g(t, F, u), s(F, Z), s(F, ue), s(F, y), s(F, _e), s(F, E), s(E, pe), s(E, $), g(t, x, u), g(t, J, u), s(J, ee), s(J, me), s(J, te), s(J, he), s(J, A), s(A, de), s(A, le), s(A, ve), G = !0, ne || (be = [
        se(
          a,
          "change",
          /*select0_change_handler*/
          n[7]
        ),
        se(
          j,
          "change",
          /*select1_change_handler*/
          n[8]
        ),
        se(
          I,
          "change",
          /*select2_change_handler*/
          n[9]
        )
      ], ne = !0);
    },
    p(t, u) {
      if (u & /*versions*/
      64) {
        D = /*data*/
        t[10].game;
        let l;
        for (l = 0; l < D.length; l += 1) {
          const L = we(t, D, l);
          h[l] ? h[l].p(L, u) : (h[l] = je(L), h[l].c(), h[l].m(a, null));
        }
        for (; l < h.length; l += 1)
          h[l].d(1);
        h.length = D.length;
      }
      if (u & /*gameVersion, versions*/
      65 && P(
        a,
        /*gameVersion*/
        t[0]
      ), u & /*versions*/
      64) {
        H = /*data*/
        t[10].loader;
        let l;
        for (l = 0; l < H.length; l += 1) {
          const L = Ce(t, H, l);
          d[l] ? d[l].p(L, u) : (d[l] = Ie(L), d[l].c(), d[l].m(j, null));
        }
        for (; l < d.length; l += 1)
          d[l].d(1);
        d.length = H.length;
      }
      if (u & /*loaderVersion, versions*/
      66 && P(
        j,
        /*loaderVersion*/
        t[1]
      ), u & /*versions*/
      64) {
        O = /*data*/
        t[10].installer;
        let l;
        for (l = 0; l < O.length; l += 1) {
          const L = ke(t, O, l);
          v[l] ? v[l].p(L, u) : (v[l] = Ve(L), v[l].c(), v[l].m(I, null));
        }
        for (; l < v.length; l += 1)
          v[l].d(1);
        v.length = O.length;
      }
      u & /*installerVersion, versions*/
      68 && P(
        I,
        /*installerVersion*/
        t[2]
      ), (!G || u & /*serverJarUrl*/
      32) && _(
        w,
        "href",
        /*serverJarUrl*/
        t[5]
      ), (!G || u & /*installerJarUrl*/
      8) && _(
        X,
        "href",
        /*installerJarUrl*/
        t[3]
      ), (!G || u & /*serverJarUrl*/
      32) && ge(
        $,
        /*serverJarUrl*/
        t[5]
      ), (!G || u & /*serverJarFilename*/
      16) && ge(
        le,
        /*serverJarFilename*/
        t[4]
      );
    },
    i(t) {
      G || (qe(U.$$.fragment, t), G = !0);
    },
    o(t) {
      Fe(U.$$.fragment, t), G = !1;
    },
    d(t) {
      t && k(e), ae(h, t), ae(d, t), ae(v, t), Ue(U), t && k(W), t && k(Q), t && k(Y), t && k(F), t && k(x), t && k(J), ne = !1, Ae(be);
    }
  };
}
function je(n) {
  let e, r = (
    /*version*/
    n[11].version + ""
  ), o;
  return {
    c() {
      e = i("option"), o = V(r), e.__value = /*version*/
      n[11].version, e.value = e.__value;
    },
    m(c, a) {
      g(c, e, a), s(e, o);
    },
    p: M,
    d(c) {
      c && k(e);
    }
  };
}
function Ie(n) {
  let e, r = (
    /*version*/
    n[11].version + ""
  ), o;
  return {
    c() {
      e = i("option"), o = V(r), e.__value = /*version*/
      n[11].version, e.value = e.__value;
    },
    m(c, a) {
      g(c, e, a), s(e, o);
    },
    p: M,
    d(c) {
      c && k(e);
    }
  };
}
function Ve(n) {
  let e, r = (
    /*version*/
    n[11].version + ""
  ), o;
  return {
    c() {
      e = i("option"), o = V(r), e.__value = /*version*/
      n[11].version, e.value = e.__value;
    },
    m(c, a) {
      g(c, e, a), s(e, o);
    },
    p: M,
    d(c) {
      c && k(e);
    }
  };
}
function Ee(n) {
  let e;
  return {
    c() {
      e = i("p"), e.textContent = "正在加载版本信息……";
    },
    m(r, o) {
      g(r, e, o);
    },
    p: M,
    i: M,
    o: M,
    d(r) {
      r && k(e);
    }
  };
}
function Ke(n) {
  let e, r, o = {
    ctx: n,
    current: null,
    token: null,
    hasCatch: !0,
    pending: Ee,
    then: Xe,
    catch: Te,
    value: 10,
    error: 18,
    blocks: [, , ,]
  };
  return Ge(
    /*versions*/
    n[6],
    o
  ), {
    c() {
      e = i("main"), o.block.c();
    },
    m(c, a) {
      g(c, e, a), o.block.m(e, o.anchor = null), o.mount = () => e, o.anchor = null, r = !0;
    },
    p(c, [a]) {
      n = c, Le(o, n, a);
    },
    i(c) {
      r || (qe(o.block), r = !0);
    },
    o(c) {
      for (let a = 0; a < 3; a += 1) {
        const m = o.blocks[a];
        Fe(m);
      }
      r = !1;
    },
    d(c) {
      c && k(e), o.block.d(), o.token = null, o = null;
    }
  };
}
function Ne(n, e, r) {
  let o, c, a, m, f, p, z = Promise.all([De(), He(), Oe()]).then(([B, N, I]) => {
    const q = {
      game: B,
      loader: N.filter((C) => {
        const w = C.version.split(".");
        return parseInt(w[0]) > 0 || parseInt(w[1]) >= 12;
      }),
      installer: I.filter((C) => {
        const w = C.version.split(".");
        return parseInt(w[0]) > 0 || parseInt(w[1]) >= 8;
      })
    };
    return r(0, m = (q.game.find((C) => C.stable) || q.game[0]).version), r(1, f = (q.loader.find((C) => C.stable) || q.loader[0]).version), r(2, p = (q.installer.find((C) => C.stable) || q.installer[0]).version), q;
  });
  function j() {
    m = re(this), r(0, m), r(6, z);
  }
  function K() {
    f = re(this), r(1, f), r(6, z);
  }
  function S() {
    p = re(this), r(2, p), r(6, z);
  }
  return n.$$.update = () => {
    n.$$.dirty & /*gameVersion, loaderVersion, installerVersion*/
    7 && r(5, o = `https://meta.fabricmc.net/v2/versions/loader/${m}/${f}/${p}/server/jar`), n.$$.dirty & /*gameVersion, loaderVersion, installerVersion*/
    7 && r(4, c = `fabric-server-mc.${m}-loader.${f}-launcher.${p}.jar`), n.$$.dirty & /*installerVersion*/
    4 && r(3, a = `https://maven.fabricmc.net/net/fabricmc/fabric-installer/${p}/fabric-installer-${p}.jar`);
  }, [
    m,
    f,
    p,
    a,
    c,
    o,
    z,
    j,
    K,
    S
  ];
}
class Ye extends Je {
  constructor(e) {
    super(), Me(this, e, Ne, Ke, Se, {});
  }
}
export {
  Ye as default
};
