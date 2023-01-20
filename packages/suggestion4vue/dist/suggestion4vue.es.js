import { isVNode as C, reactive as _, ref as f, inject as M, getCurrentInstance as h, defineComponent as y, computed as w, onMounted as K, onUnmounted as U, openBlock as k, createElementBlock as $, normalizeClass as b, unref as I, renderSlot as V, provide as E, watch as N, h as P, withDirectives as z, isRef as D, withKeys as g, withModifiers as x, vModelText as O } from "vue";
const S = (r, t, o = !1) => {
  const e = [];
  for (const n of r)
    C(n) && (n.type === t ? (e.push(n), o && n.children && Array.isArray(n.children) && e.push(...S(n.children, t, !0))) : n.children && Array.isArray(n.children) && e.push(...S(n.children, t)));
  return e;
}, R = () => {
  const r = _(/* @__PURE__ */ new Map()), t = f([]), o = f(!0), e = f(void 0), n = (a, p) => {
    r.set(a, p);
  }, m = (a) => {
    r.delete(a);
  }, u = (a, p) => {
    const B = r.get(a);
    !B || (B.index = p);
  }, i = () => {
    !e.value || e.value.pick();
  }, c = () => o.value = !0, s = () => o.value = !1, l = () => {
    e.value = e.value ? t.value[e.value.index + 1] : t.value[0], v();
  }, d = () => {
    e.value = e.value ? t.value[e.value.index - 1] : t.value[t.value.length - 1], v();
  }, v = () => {
    e.value && e.value.select();
  };
  return {
    items: r,
    indexedItems: t,
    addItem: n,
    removeItem: m,
    setItemIndex: u,
    openBox: c,
    closeBox: s,
    selectedItem: e,
    selectItem: i,
    clearIndexedItems: () => t.value = [],
    addItemToIndexedItems: (a) => {
      const p = r.get(a);
      if (!p) {
        console.warn(`Unknown item ${a}`);
        return;
      }
      t.value.push(p);
    },
    next: l,
    prev: d
  };
}, T = Symbol("suggestion"), j = () => {
  var t, o;
  const r = M(T);
  if (!r)
    throw new Error(`${((t = h()) == null ? void 0 : t.type.name) || ((o = h()) == null ? void 0 : o.type.__name) || "this component"} must be included in the SearchBox.`);
  return r;
}, q = {
  name: "SuggestionItem"
}, F = /* @__PURE__ */ y({
  ...q,
  emits: ["pick", "select"],
  setup(r, { emit: t }) {
    const { addItem: o, removeItem: e, closeBox: n, selectedItem: m } = j(), u = h(), i = () => {
      n(), t("pick");
    }, s = _({
      index: 0,
      pick: i,
      select: () => {
        t("select");
      }
    }), l = w(() => m.value === s);
    return K(() => {
      !(u != null && u.uid) || o(u.uid, s);
    }), U(() => {
      !(u != null && u.uid) || e(u.uid);
    }), (d, v) => (k(), $("div", {
      class: b(["suggestion-item", {
        selected: I(l)
      }]),
      onClick: v[0] || (v[0] = (A) => i())
    }, [
      V(d.$slots, "default", {
        index: s.index
      })
    ], 2));
  }
}), J = y({
  name: "SearchBox",
  setup(r, { slots: t }) {
    const o = w(() => V(t, "default")), e = R();
    E(T, e);
    const { setItemIndex: n, clearIndexedItems: m, addItemToIndexedItems: u } = e;
    return N(e.items, () => {
      var c;
      if (!o.value)
        return;
      const i = S([o.value], F);
      m();
      for (let s = 0; s < i.length; s++) {
        const d = (c = i[s].component) == null ? void 0 : c.uid;
        !d || (n(d, s), u(d));
      }
    }), () => P(o.value);
  }
}), L = /* @__PURE__ */ y({
  __name: "SuggestionInput",
  props: {
    modelValue: { default: "" }
  },
  emits: ["update:modelValue", "enter"],
  setup(r, { emit: t }) {
    const o = r, { selectedItem: e, selectItem: n, next: m, prev: u } = j(), i = (s) => {
      e.value || t("enter", s), n();
    }, c = w({
      get: () => o.modelValue,
      set: (s) => t("update:modelValue", s)
    });
    return (s, l) => z((k(), $("input", {
      type: "search",
      "onUpdate:modelValue": l[0] || (l[0] = (d) => D(c) ? c.value = d : null),
      onKeydown: [
        l[1] || (l[1] = g(x((d) => i(d), ["prevent"]), ["enter"])),
        l[2] || (l[2] = g(x((d) => I(m)(), ["prevent"]), ["down"])),
        l[3] || (l[3] = g(x((d) => I(u)(), ["prevent"]), ["up"]))
      ]
    }, null, 544)), [
      [O, I(c)]
    ]);
  }
});
export {
  J as SearchBox,
  L as SuggestionInput,
  F as SuggestionItem
};
