import { reactive as _, ref as f, inject as M, getCurrentInstance as w, defineComponent as S, computed as B, onMounted as K, onUnmounted as U, openBlock as k, createElementBlock as $, normalizeClass as b, unref as I, renderSlot as h, provide as E, watch as P, h as z, withDirectives as D, isRef as N, withKeys as x, withModifiers as g, vModelText as O } from "vue";
import { getVNodesByType as R } from "@tsutoringo/vue-utils";
const q = () => {
  const d = _(/* @__PURE__ */ new Map()), e = f([]), s = f(!0), t = f(void 0), a = (c, p) => {
    d.set(c, p);
  }, m = (c) => {
    d.delete(c);
  }, o = (c, p) => {
    const y = d.get(c);
    !y || (y.index = p);
  }, r = () => {
    !t.value || t.value.pick();
  }, i = () => s.value = !0, n = () => s.value = !1, u = () => {
    t.value = t.value ? e.value[t.value.index + 1] : e.value[0], v();
  }, l = () => {
    t.value = t.value ? e.value[t.value.index - 1] : e.value[e.value.length - 1], v();
  }, v = () => {
    t.value && t.value.select();
  };
  return {
    items: d,
    indexedItems: e,
    addItem: a,
    removeItem: m,
    setItemIndex: o,
    openBox: i,
    closeBox: n,
    selectedItem: t,
    selectItem: r,
    clearIndexedItems: () => e.value = [],
    addItemToIndexedItems: (c) => {
      const p = d.get(c);
      if (!p) {
        console.warn(`Unknown item ${c}`);
        return;
      }
      e.value.push(p);
    },
    next: u,
    prev: l
  };
}, V = Symbol("suggestion"), T = () => {
  var e, s;
  const d = M(V);
  if (!d)
    throw new Error(`${((e = w()) == null ? void 0 : e.type.name) || ((s = w()) == null ? void 0 : s.type.__name) || "this component"} must be included in the SearchBox.`);
  return d;
}, A = {
  name: "SuggestionItem"
}, j = /* @__PURE__ */ S({
  ...A,
  emits: ["pick", "select"],
  setup(d, { emit: e }) {
    const { addItem: s, removeItem: t, closeBox: a, selectedItem: m } = T(), o = w(), r = () => {
      a(), e("pick");
    }, n = _({
      index: 0,
      pick: r,
      select: () => {
        e("select");
      }
    }), u = B(() => m.value === n);
    return K(() => {
      !(o != null && o.uid) || s(o.uid, n);
    }), U(() => {
      !(o != null && o.uid) || t(o.uid);
    }), (l, v) => (k(), $("div", {
      class: b(["suggestion-item", {
        selected: I(u)
      }]),
      onClick: v[0] || (v[0] = (C) => r())
    }, [
      h(l.$slots, "default", {
        index: n.index
      })
    ], 2));
  }
}), F = S({
  name: "SearchBox",
  setup(d, { slots: e }) {
    const s = B(() => h(e, "default")), t = q();
    E(V, t);
    const { setItemIndex: a, clearIndexedItems: m, addItemToIndexedItems: o } = t;
    return P(t.items, () => {
      var i;
      if (!s.value)
        return;
      const r = R([s.value], j);
      m();
      for (let n = 0; n < r.length; n++) {
        const l = (i = r[n].component) == null ? void 0 : i.uid;
        !l || (a(l, n), o(l));
      }
    }), () => z(s.value);
  }
}), G = /* @__PURE__ */ S({
  __name: "SuggestionInput",
  props: {
    modelValue: { default: "" }
  },
  emits: ["update:modelValue", "enter"],
  setup(d, { emit: e }) {
    const s = d, { selectedItem: t, selectItem: a, next: m, prev: o } = T(), r = (n) => {
      t.value || e("enter", n), a();
    }, i = B({
      get: () => s.modelValue,
      set: (n) => e("update:modelValue", n)
    });
    return (n, u) => D((k(), $("input", {
      type: "search",
      "onUpdate:modelValue": u[0] || (u[0] = (l) => N(i) ? i.value = l : null),
      onKeydown: [
        u[1] || (u[1] = x(g((l) => r(l), ["prevent"]), ["enter"])),
        u[2] || (u[2] = x(g((l) => I(m)(), ["prevent"]), ["down"])),
        u[3] || (u[3] = x(g((l) => I(o)(), ["prevent"]), ["up"]))
      ]
    }, null, 544)), [
      [O, I(i)]
    ]);
  }
}), Q = {
  Box: F,
  Input: G,
  Item: j
};
export {
  F as Box,
  G as Input,
  j as Item,
  Q as default
};
