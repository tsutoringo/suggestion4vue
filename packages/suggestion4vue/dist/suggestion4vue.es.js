import { reactive as V, ref as x, watch as E, inject as T, getCurrentInstance as S, defineComponent as I, provide as U, h as L, renderSlot as k, unref as p, openBlock as h, createElementBlock as w, createCommentVNode as N, computed as b, withDirectives as O, isRef as P, withKeys as B, withModifiers as _, vModelText as z, onMounted as D, onBeforeUnmount as F, normalizeClass as H } from "vue";
const R = () => {
  const l = V(/* @__PURE__ */ new Map()), e = x([]), t = x(!1), n = x(void 0), i = x(void 0), d = (c, f) => {
    l.set(c, f);
  }, m = (c) => {
    l.delete(c);
  }, a = (c, f) => {
    const C = l.get(c);
    !C || (C.index = f);
  }, v = () => {
    !n.value || n.value.pick();
  }, s = () => t.value = !0, u = () => t.value = !1, o = () => {
    n.value = n.value ? e.value[n.value.index + 1] : e.value[0], g();
  }, r = () => {
    n.value = n.value ? e.value[n.value.index - 1] : e.value[e.value.length - 1], g();
  }, g = () => {
    n.value && n.value.select();
  }, M = () => e.value = [], K = (c) => {
    const f = l.get(c);
    if (!f) {
      console.warn(`Unknown item ${c}`);
      return;
    }
    e.value.push(f);
  }, $ = (c) => {
    t.value && i.value && !i.value.contains(c.target) && u();
  };
  return E(
    t,
    (c) => c ? document.addEventListener("click", $) : document.removeEventListener("click", $)
  ), {
    items: l,
    indexedItems: e,
    addItem: d,
    removeItem: m,
    setItemIndex: a,
    openBox: s,
    closeBox: u,
    selectedItem: n,
    selectItem: v,
    clearIndexedItems: M,
    addItemToIndexedItems: K,
    next: o,
    prev: r,
    searchBox: i,
    isOpen: t
  };
}, j = Symbol("suggestion"), y = () => {
  var e, t;
  const l = T(j);
  if (!l)
    throw new Error(`${((e = S()) == null ? void 0 : e.type.name) || ((t = S()) == null ? void 0 : t.type.__name) || "this component"} must be included in the SearchBox.`);
  return l;
}, q = I({
  name: "SearchBox",
  setup(l, { slots: e }) {
    let t = null;
    const n = R();
    U(j, n);
    const { setItemIndex: i, clearIndexedItems: d, addItemToIndexedItems: m, searchBox: a } = n;
    return E(n.items, () => {
      if (!a.value)
        return;
      const v = a.value.getElementsByClassName("suggestion-item");
      d();
      for (let s = 0; s < v.length; s++) {
        const u = v[s];
        !u || (i(u, s), m(u));
      }
    }), () => (t = L(
      "div",
      {
        class: "search-box",
        ref: a
      },
      [k(e, "default")]
    ), t);
  }
}), A = {
  key: 0,
  class: "suggestion-box"
}, G = /* @__PURE__ */ I({
  __name: "SuggestionBox",
  setup(l) {
    const { isOpen: e } = y();
    return (t, n) => p(e) ? (h(), w("div", A, [
      k(t.$slots, "default")
    ])) : N("", !0);
  }
}), J = /* @__PURE__ */ I({
  __name: "SuggestionInput",
  props: {
    modelValue: { default: "" }
  },
  emits: ["update:modelValue", "enter"],
  setup(l, { emit: e }) {
    const t = l, { selectedItem: n, openBox: i, selectItem: d, next: m, prev: a } = y(), v = (u) => {
      n.value || e("enter", u), d();
    }, s = b({
      get: () => t.modelValue,
      set: (u) => e("update:modelValue", u)
    });
    return (u, o) => O((h(), w("input", {
      type: "search",
      class: "suggestion-input",
      "onUpdate:modelValue": o[0] || (o[0] = (r) => P(s) ? s.value = r : null),
      onKeydown: [
        o[1] || (o[1] = B(_((r) => v(r), ["prevent"]), ["enter"])),
        o[2] || (o[2] = B(_((r) => p(m)(), ["prevent"]), ["down"])),
        o[3] || (o[3] = B(_((r) => p(a)(), ["prevent"]), ["up"]))
      ],
      onFocus: o[4] || (o[4] = (...r) => p(i) && p(i)(...r))
    }, null, 544)), [
      [z, p(s)]
    ]);
  }
}), Q = {
  name: "SuggestionItem"
}, W = /* @__PURE__ */ I({
  ...Q,
  emits: ["pick", "select"],
  setup(l, { emit: e }) {
    const t = x(null), { addItem: n, removeItem: i, closeBox: d, selectedItem: m } = y();
    S();
    const a = () => {
      d(), e("pick");
    }, s = V({
      index: 0,
      pick: a,
      select: () => {
        e("select");
      }
    }), u = b(() => m.value === s);
    return D(() => {
      !t.value || n(t.value, s);
    }), F(() => {
      !t.value || i(t.value);
    }), (o, r) => (h(), w("div", {
      class: H(["suggestion-item", {
        selected: p(u)
      }]),
      onClick: r[0] || (r[0] = (g) => a()),
      ref_key: "element",
      ref: t
    }, [
      k(o.$slots, "default", {
        index: s.index
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
