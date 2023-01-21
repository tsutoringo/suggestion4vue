import { reactive as V, ref as I, watch as b, inject as T, getCurrentInstance as k, defineComponent as B, provide as U, h as L, renderSlot as S, unref as p, openBlock as w, createElementBlock as $, createCommentVNode as N, computed as E, withDirectives as O, isRef as P, withKeys as g, withModifiers as _, vModelText as z, onMounted as D, onBeforeUnmount as F, normalizeClass as H } from "vue";
const R = () => {
  const o = V(/* @__PURE__ */ new Map()), t = I([]), e = I(!1), n = I(void 0), i = I(void 0), x = (u, f) => {
    o.set(u, f);
  }, c = (u) => {
    o.delete(u);
  }, a = (u, f) => {
    const C = o.get(u);
    !C || (C.index = f);
  }, d = () => {
    !n.value || n.value.pick();
  }, r = () => e.value = !0, m = () => e.value = !1, v = () => {
    n.value = n.value ? t.value[n.value.index + 1] : t.value[0], l();
  }, s = () => {
    n.value = n.value ? t.value[n.value.index - 1] : t.value[t.value.length - 1], l();
  }, l = () => {
    n.value && n.value.select();
  }, M = () => t.value = [], K = (u) => {
    const f = o.get(u);
    if (!f) {
      console.warn(`Unknown item ${u}`);
      return;
    }
    t.value.push(f);
  }, y = (u) => {
    e.value && i.value && !i.value.contains(u.target) && m();
  };
  return b(
    e,
    (u) => u ? document.addEventListener("click", y) : document.removeEventListener("click", y)
  ), {
    items: o,
    indexedItems: t,
    addItem: x,
    removeItem: c,
    setItemIndex: a,
    openBox: r,
    closeBox: m,
    selectedItem: n,
    selectItem: d,
    clearIndexedItems: M,
    addItemToIndexedItems: K,
    next: v,
    prev: s,
    searchBox: i,
    isOpen: e
  };
}, j = Symbol("suggestion"), h = () => {
  var t, e;
  const o = T(j);
  if (!o)
    throw new Error(`${((t = k()) == null ? void 0 : t.type.name) || ((e = k()) == null ? void 0 : e.type.__name) || "this component"} must be included in the SearchBox.`);
  return o;
}, q = B({
  name: "SearchBox",
  setup(o, { slots: t }) {
    const e = R();
    U(j, e);
    const { setItemIndex: n, clearIndexedItems: i, addItemToIndexedItems: x, searchBox: c } = e;
    return b(e.items, () => {
      if (!c.value)
        return;
      const a = c.value.getElementsByClassName("suggestion-item");
      i();
      for (let d = 0; d < a.length; d++) {
        const r = a[d];
        !r || (n(r, d), x(r));
      }
    }), () => L(
      "div",
      {
        class: "search-box",
        ref: c
      },
      [S(t, "default")]
    );
  }
}), A = {
  key: 0,
  class: "suggestion-box"
}, G = /* @__PURE__ */ B({
  __name: "SuggestionBox",
  setup(o) {
    const { isOpen: t } = h();
    return (e, n) => p(t) ? (w(), $("div", A, [
      S(e.$slots, "default")
    ])) : N("", !0);
  }
}), J = /* @__PURE__ */ B({
  __name: "SuggestionInput",
  props: {
    modelValue: { default: "" }
  },
  emits: ["update:modelValue", "enter"],
  setup(o, { emit: t }) {
    const e = o, { selectedItem: n, openBox: i, closeBox: x, selectItem: c, next: a, prev: d } = h(), r = (v) => {
      n.value || t("enter", v), c();
    }, m = E({
      get: () => e.modelValue,
      set: (v) => t("update:modelValue", v)
    });
    return (v, s) => O((w(), $("input", {
      type: "search",
      class: "suggestion-input",
      "onUpdate:modelValue": s[0] || (s[0] = (l) => P(m) ? m.value = l : null),
      onKeydown: [
        s[1] || (s[1] = g(_((l) => r(l), ["prevent"]), ["enter"])),
        s[2] || (s[2] = g(_((l) => p(a)(), ["prevent"]), ["down"])),
        s[3] || (s[3] = g(_((l) => p(d)(), ["prevent"]), ["up"])),
        s[4] || (s[4] = g((l) => p(x)(), ["tab"]))
      ],
      onFocus: s[5] || (s[5] = (...l) => p(i) && p(i)(...l))
    }, null, 544)), [
      [z, p(m)]
    ]);
  }
}), Q = {
  name: "SuggestionItem"
}, W = /* @__PURE__ */ B({
  ...Q,
  emits: ["pick", "select"],
  setup(o, { emit: t }) {
    const e = I(null), { addItem: n, removeItem: i, closeBox: x, selectedItem: c } = h();
    k();
    const a = () => {
      x(), t("pick");
    }, r = V({
      index: 0,
      pick: a,
      select: () => {
        t("select");
      }
    }), m = E(() => c.value === r);
    return D(() => {
      !e.value || n(e.value, r);
    }), F(() => {
      !e.value || i(e.value);
    }), (v, s) => (w(), $("div", {
      class: H(["suggestion-item", {
        selected: p(m)
      }]),
      onClick: s[0] || (s[0] = (l) => a()),
      ref_key: "element",
      ref: e
    }, [
      S(v.$slots, "default", {
        index: r.index
      })
    ], 2));
  }
}), Y = {
  SearchBox: q,
  Input: J,
  Item: W,
  Box: G
};
export {
  G as Box,
  J as Input,
  W as Item,
  q as SearchBox,
  Y as default
};
