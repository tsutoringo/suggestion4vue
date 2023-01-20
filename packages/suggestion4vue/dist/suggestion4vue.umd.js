(function(a,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(a=typeof globalThis<"u"?globalThis:a||self,e(a.suggestion4vue={},a.Vue))})(this,function(a,e){"use strict";const x=(r,n,s=!1)=>{const t=[];for(const o of r)e.isVNode(o)&&(o.type===n?(t.push(o),s&&o.children&&Array.isArray(o.children)&&t.push(...x(o.children,n,!0))):o.children&&Array.isArray(o.children)&&t.push(...x(o.children,n)));return t},v=()=>{const r=e.reactive(new Map),n=e.ref([]),s=e.ref(!0),t=e.ref(void 0),o=(p,I)=>{r.set(p,I)},f=p=>{r.delete(p)},d=(p,I)=>{const w=r.get(p);!w||(w.index=I)},m=()=>{!t.value||t.value.pick()},u=()=>s.value=!0,i=()=>s.value=!1,l=()=>{t.value=t.value?n.value[t.value.index+1]:n.value[0],g()},c=()=>{t.value=t.value?n.value[t.value.index-1]:n.value[n.value.length-1],g()},g=()=>{t.value&&t.value.select()};return{items:r,indexedItems:n,addItem:o,removeItem:f,setItemIndex:d,openBox:u,closeBox:i,selectedItem:t,selectItem:m,clearIndexedItems:()=>n.value=[],addItemToIndexedItems:p=>{const I=r.get(p);if(!I){console.warn(`Unknown item ${p}`);return}n.value.push(I)},next:l,prev:c}},h=Symbol("suggestion"),y=()=>{var n,s;const r=e.inject(h);if(!r)throw new Error(`${((n=e.getCurrentInstance())==null?void 0:n.type.name)||((s=e.getCurrentInstance())==null?void 0:s.type.__name)||"this component"} must be included in the SearchBox.`);return r},B={name:"SuggestionItem"},S=e.defineComponent({...B,emits:["pick","select"],setup(r,{emit:n}){const{addItem:s,removeItem:t,closeBox:o,selectedItem:f}=y(),d=e.getCurrentInstance(),m=()=>{o(),n("pick")},u=()=>{n("select")},i=e.reactive({index:0,pick:m,select:u}),l=e.computed(()=>f.value===i);return e.onMounted(()=>{!(d!=null&&d.uid)||s(d.uid,i)}),e.onUnmounted(()=>{!(d!=null&&d.uid)||t(d.uid)}),(c,g)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["suggestion-item",{selected:e.unref(l)}]),onClick:g[0]||(g[0]=C=>m())},[e.renderSlot(c.$slots,"default",{index:i.index})],2))}}),_=e.defineComponent({name:"SearchBox",setup(r,{slots:n}){const s=e.computed(()=>e.renderSlot(n,"default")),t=v();e.provide(h,t);const{setItemIndex:o,clearIndexedItems:f,addItemToIndexedItems:d}=t;return e.watch(t.items,()=>{var u;if(!s.value)return;const m=x([s.value],S);f();for(let i=0;i<m.length;i++){const c=(u=m[i].component)==null?void 0:u.uid;!c||(o(c,i),d(c))}}),()=>e.h(s.value)}}),k=e.defineComponent({__name:"SuggestionInput",props:{modelValue:{default:""}},emits:["update:modelValue","enter"],setup(r,{emit:n}){const s=r,{selectedItem:t,selectItem:o,next:f,prev:d}=y(),m=i=>{t.value||n("enter",i),o()},u=e.computed({get:()=>s.modelValue,set:i=>n("update:modelValue",i)});return(i,l)=>e.withDirectives((e.openBlock(),e.createElementBlock("input",{type:"search","onUpdate:modelValue":l[0]||(l[0]=c=>e.isRef(u)?u.value=c:null),onKeydown:[l[1]||(l[1]=e.withKeys(e.withModifiers(c=>m(c),["prevent"]),["enter"])),l[2]||(l[2]=e.withKeys(e.withModifiers(c=>e.unref(f)(),["prevent"]),["down"])),l[3]||(l[3]=e.withKeys(e.withModifiers(c=>e.unref(d)(),["prevent"]),["up"]))]},null,544)),[[e.vModelText,e.unref(u)]])}});a.SearchBox=_,a.SuggestionInput=k,a.SuggestionItem=S,Object.defineProperties(a,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});