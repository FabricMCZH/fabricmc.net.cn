import { S as g, i as $, s as h, e as p, v as b, a as y, k as v, c as w, w as C, g as u, m as k, o as x, p as T, d as P, x as S, z as V } from "./index.4deac2e0.js";
import { e as A } from "./Api.322fe952.js";
import J from "./LegacyVersion.aaf95e7e.js";
function j(r) {
  let t, e, i, c, m, o, n, l, s, d = {};
  return e = new J({ props: d }), r[2](e), {
    c() {
      t = p("main"), b(e.$$.fragment), i = y(), c = p("br"), m = y(), o = p("button"), o.textContent = "下载 bin/version.json 文件", v(o, "class", "button primary large");
    },
    m(a, f) {
      w(a, t, f), C(e, t, null), u(t, i), u(t, c), u(t, m), u(t, o), n = !0, l || (s = k(
        o,
        "click",
        /*downloadJson*/
        r[1]
      ), l = !0);
    },
    p(a, [f]) {
      const _ = {};
      e.$set(_);
    },
    i(a) {
      n || (x(e.$$.fragment, a), n = !0);
    },
    o(a) {
      T(e.$$.fragment, a), n = !1;
    },
    d(a) {
      a && P(t), r[2](null), S(e), l = !1, s();
    }
  };
}
function D(r, t) {
  var e = document.createElement("a");
  e.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(t)), e.setAttribute("download", r), e.style.display = "none", document.body.appendChild(e), e.click(), document.body.removeChild(e);
}
function F(r, t, e) {
  let i;
  async function c() {
    const { selectedGameVersion: n, loaderVersion: l } = await i.getSelectedVersions();
    D("version.json", await m(n, l));
  }
  async function m(n, l) {
    const s = await A(n, l), d = {
      id: n,
      inheritsFrom: s.inheritsFrom,
      releaseTime: s.releaseTime,
      time: s.time,
      type: s.type,
      minecraftArguments: "--username ${auth_player_name} --version ${version_name} --gameDir ${game_directory} --assetsDir ${assets_root} --assetIndex ${assets_index_name} --uuid ${auth_uuid} --accessToken ${auth_access_token} --userType ${user_type} --versionType ${version_type}",
      libraries: s.libraries,
      mainClass: s.mainClass
    };
    return JSON.stringify(d, null, 2);
  }
  function o(n) {
    V[n ? "unshift" : "push"](() => {
      i = n, e(0, i);
    });
  }
  return [i, c, o];
}
class z extends g {
  constructor(t) {
    super(), $(this, t, F, j, h, {});
  }
}
export {
  z as default
};
