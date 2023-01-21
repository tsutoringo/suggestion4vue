import { reactive as k, ref as x, inject as b, getCurrentInstance as w, defineComponent as S, computed as B, onMounted as K, onUnmounted as U, openBlock as $, createElementBlock as V, normalizeClass as E, unref as I, renderSlot as h, provide as P, watch as z, h as _, withDirectives as D, isRef as N, withKeys as f, withModifiers as g, vModelText as O } from "vue";
import { getVNodesByType as R } from "@tsutoringo/vue-utils";
const q = () => {
  const d = k(/* @__PURE__ */ new Map()), e = x([]), s = x(!0), t = x(void 0), a = (c, p) => {
    d.set(c, p);
  }, m = (c) => {
    d.delete(c);
  }, o = (c, p) => {
    const y = d.get(c);
    !y || (y.index = p);
  }, i = () => {
    !t.value || t.value.pick();
  }, r = () => s.value = !0, n = () => s.value = !1, u = () => {
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
    openBox: r,
    closeBox: n,
    selectedItem: t,
    selectItem: i,
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
}, T = Symbol("suggestion"), j = () => {
  var e, s;
  const d = b(T);
  if (!d)
    throw new Error(`${((e = w()) == null ? void 0 : e.type.name) || ((s = w()) == null ? void 0 : s.type.__name) || "this component"} must be included in the SearchBox.`);
  return d;
}, A = {
  name: "SuggestionItem"
}, C = /* @__PURE__ */ S({
  ...A,
  emits: ["pick", "select"],
  setup(d, { emit: e }) {
    const { addItem: s, removeItem: t, closeBox: a, selectedItem: m } = j(), o = w(), i = () => {
      a(), e("pick");
    }, n = k({
      index: 0,
      pick: i,
      select: () => {
        e("select");
      }
    }), u = B(() => m.value === n);
    return K(() => {
      !(o != null && o.uid) || s(o.uid, n);
    }), U(() => {
      !(o != null && o.uid) || t(o.uid);
    }), (l, v) => ($(), V("div", {
      class: E(["suggestion-item", {
        selected: I(u)
      }]),
      onClick: v[0] || (v[0] = (M) => i())
    }, [
      h(l.$slots, "default", {
        index: n.index
      })
    ], 2));
  }
}), F = S({
  name: "SuggestionBox",
  setup(d, { slots: e }) {
    const s = B(() => h(e, "default")), t = q();
    P(T, t);
    const { setItemIndex: a, clearIndexedItems: m, addItemToIndexedItems: o } = t;
    return z(t.items, () => {
      var r;
      if (!s.value)
        return;
      const i = R([s.value], C);
      m();
      for (let n = 0; n < i.length; n++) {
        const l = (r = i[n].component) == null ? void 0 : r.uid;
        !l || (a(l, n), o(l));
      }
    }), () => _(
      "div",
      {
        class: "suggestion-box"
      },
      [_(s.value)]
    );
  }
}), G = /* @__PURE__ */ S({
  __name: "SuggestionInput",
  props: {
    modelValue: { default: "" }
  },
  emits: ["update:modelValue", "enter"],
  setup(d, { emit: e }) {
    const s = d, { selectedItem: t, selectItem: a, next: m, prev: o } = j(), i = (n) => {
      t.value || e("enter", n), a();
    }, r = B({
      get: () => s.modelValue,
      set: (n) => e("update:modelValue", n)
    });
    return (n, u) => D(($(), V("input", {
      type: "search",
      "onUpdate:modelValue": u[0] || (u[0] = (l) => N(r) ? r.value = l : null),
      onKeydown: [
        u[1] || (u[1] = f(g((l) => i(l), ["prevent"]), ["enter"])),
        u[2] || (u[2] = f(g((l) => I(m)(), ["prevent"]), ["down"])),
        u[3] || (u[3] = f(g((l) => I(o)(), ["prevent"]), ["up"]))
      ]
    }, null, 544)), [
      [O, I(r)]
    ]);
  }
}), Q = {
  Box: F,
  Input: G,
  Item: C
};
export {
  F as Box,
  G as Input,
  C as Item,
  Q as default
};
