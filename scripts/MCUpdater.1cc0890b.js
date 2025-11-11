import { S as _, i as $, s as b, e as u, v as h, a as f, k as v, c as C, w as I, g as p, m as w, o as U, p as V, d as x, x as k, z as R } from "./index.4deac2e0.js";
import S from "./LegacyVersion.aaf95e7e.js";
import "./Api.322fe952.js";
function L(o) {
  let t, e, a, c, l, n, s, i, m, g = {};
  return e = new S({ props: g }), o[2](e), {
    c() {
      t = u("main"), h(e.$$.fragment), a = f(), c = u("br"), l = f(), n = u("button"), n.textContent = "复制 MCUpdater 导入条目", v(n, "class", "button primary large");
    },
    m(r, d) {
      C(r, t, d), I(e, t, null), p(t, a), p(t, c), p(t, l), p(t, n), s = !0, i || (m = w(
        n,
        "click",
        /*copyImportEntry*/
        o[1]
      ), i = !0);
    },
    p(r, [d]) {
      const y = {};
      e.$set(y);
    },
    i(r) {
      s || (U(e.$$.fragment, r), s = !0);
    },
    o(r) {
      V(e.$$.fragment, r), s = !1;
    },
    d(r) {
      r && x(t), o[2](null), k(e), i = !1, m();
    }
  };
}
function M(o, t) {
  return `<Import url="${`https://fabricmc.net/download/mcupdater?yarn=${encodeURIComponent(o)}&amp;loader=${encodeURIComponent(t)}`}">fabric</Import>`;
}
function q(o, t, e) {
  let a;
  async function c() {
    const { yarnVersion: n, loaderVersion: s } = await a.getSelectedVersions(), i = M(n, s);
    return navigator.clipboard.writeText(i);
  }
  function l(n) {
    R[n ? "unshift" : "push"](() => {
      a = n, e(0, a);
    });
  }
  return [a, c, l];
}
class j extends _ {
  constructor(t) {
    super(), $(this, t, q, L, b, {});
  }
}
export {
  j as default
};
