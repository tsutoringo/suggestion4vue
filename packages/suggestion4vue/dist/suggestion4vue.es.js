import { reactive as b, ref as g, watch as V, inject as T, getCurrentInstance as S, defineComponent as _, provide as U, h as L, renderSlot as w, unref as v, openBlock as y, createElementBlock as $, createCommentVNode as N, computed as j, withDirectives as O, isRef as P, withKeys as B, withModifiers as k, vModelText as z, onMounted as D, onBeforeUnmount as F, normalizeClass as H } from "vue";
const R = () => {
  const o = b(/* @__PURE__ */ new Map()), t = g([]), e = g(!1), n = g(void 0), r = g(void 0), p = (u, I) => {
    o.set(u, I);
  }, c = (u) => {
    o.delete(u);
  }, a = (u, I) => {
    const E = o.get(u);
    !E || (E.index = I);
  }, d = () => {
    !n.value || n.value.pick();
  }, l = () => e.value = !0, x = () => e.value = !1, f = () => {
    n.value = n.value ? t.value[n.value.index + 1] : t.value[0], s();
  }, m = () => {
    n.value = n.value ? t.value[n.value.index - 1] : t.value[t.value.length - 1], s();
  }, s = () => {
    n.value && n.value.select();
  }, i = () => t.value = [], K = (u) => {
    const I = o.get(u);
    if (!I) {
      console.warn(`Unknown item ${u}`);
      return;
    }
    t.value.push(I);
  }, C = (u) => {
    e.value && r.value && !r.value.contains(u.target) && x();
  };
  return V(
    e,
    (u) => u ? document.addEventListener("click", C) : document.removeEventListener("click", C)
  ), {
    items: o,
    indexedItems: t,
    addItem: p,
    removeItem: c,
    setItemIndex: a,
    openBox: l,
    closeBox: x,
    selectedItem: n,
    selectItem: d,
    clearIndexedItems: i,
    addItemToIndexedItems: K,
    next: f,
    prev: m,
    searchBox: r,
    isOpen: e
  };
}, M = Symbol("suggestion"), h = () => {
  var t, e;
  const o = T(M);
  if (!o)
    throw new Error(`${((t = S()) == null ? void 0 : t.type.name) || ((e = S()) == null ? void 0 : e.type.__name) || "this component"} must be included in the SearchBox.`);
  return o;
}, q = _({
  name: "SearchBox",
  setup(o, { slots: t }) {
    const e = R();
    U(M, e);
    const { setItemIndex: n, clearIndexedItems: r, addItemToIndexedItems: p, searchBox: c } = e;
    return V(e.items, () => {
      if (!c.value)
        return;
      const a = c.value.getElementsByClassName("suggestion-item");
      r();
      for (let d = 0; d < a.length; d++) {
        const l = a[d];
        !l || (n(l, d), p(l));
      }
    }), () => L(
      "div",
      {
        class: "search-box",
        ref: c
      },
      [w(t, "default")]
    );
  }
}), A = {
  key: 0,
  class: "suggestion-box"
}, G = /* @__PURE__ */ _({
  __name: "SuggestionBox",
  setup(o) {
    const { isOpen: t } = h();
    return (e, n) => v(t) ? (y(), $("div", A, [
      w(e.$slots, "default")
    ])) : N("", !0);
  }
}), J = /* @__PURE__ */ _({
  __name: "SuggestionInput",
  props: {
    modelValue: { default: "" }
  },
  emits: ["update:modelValue", "enter"],
  setup(o, { emit: t }) {
    const e = o, { selectedItem: n, openBox: r, closeBox: p, selectItem: c, next: a, prev: d } = h(), l = g(), x = (m) => {
      n.value || t("enter", m), l.value && l.value.blur(), c();
    }, f = j({
      get: () => e.modelValue,
      set: (m) => t("update:modelValue", m)
    });
    return (m, s) => O((y(), $("input", {
      type: "search",
      class: "suggestion-input",
      "onUpdate:modelValue": s[0] || (s[0] = (i) => P(f) ? f.value = i : null),
      onKeydown: [
        s[1] || (s[1] = B(k((i) => x(i), ["prevent"]), ["enter"])),
        s[2] || (s[2] = B(k((i) => v(a)(), ["prevent"]), ["down"])),
        s[3] || (s[3] = B(k((i) => v(d)(), ["prevent"]), ["up"])),
        s[4] || (s[4] = B((i) => v(p)(), ["tab"]))
      ],
      onFocus: s[5] || (s[5] = (...i) => v(r) && v(r)(...i)),
      ref_key: "inputEl",
      ref: l
    }, null, 544)), [
      [z, v(f)]
    ]);
  }
}), Q = {
  name: "SuggestionItem"
}, W = /* @__PURE__ */ _({
  ...Q,
  emits: ["pick", "select"],
  setup(o, { emit: t }) {
    const e = g(null), { addItem: n, removeItem: r, closeBox: p, selectedItem: c } = h();
    S();
    const a = () => {
      p(), t("pick");
    }, l = b({
      index: 0,
      pick: a,
      select: () => {
        t("select");
      }
    }), x = j(() => c.value === l);
    return D(() => {
      !e.value || n(e.value, l);
    }), F(() => {
      !e.value || r(e.value);
    }), (f, m) => (y(), $("div", {
      class: H(["suggestion-item", {
        selected: v(x)
      }]),
      onClick: m[0] || (m[0] = (s) => a()),
      ref_key: "element",
      ref: e
    }, [
      w(f.$slots, "default", {
        index: l.index
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
