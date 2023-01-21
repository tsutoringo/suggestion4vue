(function(a,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(a=typeof globalThis<"u"?globalThis:a||self,e(a.suggestion4vue={},a.Vue))})(this,function(a,e){"use strict";const C=()=>{const l=e.reactive(new Map),t=e.ref([]),n=e.ref(!1),o=e.ref(void 0),u=e.ref(void 0),p=(d,I)=>{l.set(d,I)},g=d=>{l.delete(d)},m=(d,I)=>{const v=l.get(d);!v||(v.index=I)},f=()=>{!o.value||o.value.pick()},s=()=>n.value=!0,i=()=>n.value=!1,r=()=>{o.value=o.value?t.value[o.value.index+1]:t.value[0],B()},c=()=>{o.value=o.value?t.value[o.value.index-1]:t.value[t.value.length-1],B()},B=()=>{o.value&&o.value.select()},V=()=>t.value=[],b=d=>{const I=l.get(d);if(!I){console.warn(`Unknown item ${d}`);return}t.value.push(I)},y=d=>{n.value&&u.value&&!u.value.contains(d.target)&&i()};return e.watch(n,d=>d?document.addEventListener("click",y):document.removeEventListener("click",y)),{items:l,indexedItems:t,addItem:p,removeItem:g,setItemIndex:m,openBox:s,closeBox:i,selectedItem:o,selectItem:f,clearIndexedItems:V,addItemToIndexedItems:b,next:r,prev:c,searchBox:u,isOpen:n}},h=Symbol("suggestion"),x=()=>{var t,n;const l=e.inject(h);if(!l)throw new Error(`${((t=e.getCurrentInstance())==null?void 0:t.type.name)||((n=e.getCurrentInstance())==null?void 0:n.type.__name)||"this component"} must be included in the SearchBox.`);return l},_=e.defineComponent({name:"SearchBox",setup(l,{slots:t}){let n=null;const o=C();e.provide(h,o);const{setItemIndex:u,clearIndexedItems:p,addItemToIndexedItems:g,searchBox:m}=o;return e.watch(o.items,()=>{if(!m.value)return;const f=m.value.getElementsByClassName("suggestion-item");p();for(let s=0;s<f.length;s++){const i=f[s];!i||(u(i,s),g(i))}}),()=>(n=e.h("div",{class:"search-box",ref:m},[e.renderSlot(t,"default")]),n)}}),$={key:0,class:"suggestion-box"},S=e.defineComponent({__name:"SuggestionBox",setup(l){const{isOpen:t}=x();return(n,o)=>e.unref(t)?(e.openBlock(),e.createElementBlock("div",$,[e.renderSlot(n.$slots,"default")])):e.createCommentVNode("",!0)}}),k=e.defineComponent({__name:"SuggestionInput",props:{modelValue:{default:""}},emits:["update:modelValue","enter"],setup(l,{emit:t}){const n=l,{selectedItem:o,openBox:u,selectItem:p,next:g,prev:m}=x(),f=i=>{o.value||t("enter",i),p()},s=e.computed({get:()=>n.modelValue,set:i=>t("update:modelValue",i)});return(i,r)=>e.withDirectives((e.openBlock(),e.createElementBlock("input",{type:"search",class:"suggestion-input","onUpdate:modelValue":r[0]||(r[0]=c=>e.isRef(s)?s.value=c:null),onKeydown:[r[1]||(r[1]=e.withKeys(e.withModifiers(c=>f(c),["prevent"]),["enter"])),r[2]||(r[2]=e.withKeys(e.withModifiers(c=>e.unref(g)(),["prevent"]),["down"])),r[3]||(r[3]=e.withKeys(e.withModifiers(c=>e.unref(m)(),["prevent"]),["up"]))],onFocus:r[4]||(r[4]=(...c)=>e.unref(u)&&e.unref(u)(...c))},null,544)),[[e.vModelText,e.unref(s)]])}}),M={name:"SuggestionItem"},w=e.defineComponent({...M,emits:["pick","select"],setup(l,{emit:t}){const n=e.ref(null),{addItem:o,removeItem:u,closeBox:p,selectedItem:g}=x();e.getCurrentInstance();const m=()=>{p(),t("pick")},f=()=>{t("select")},s=e.reactive({index:0,pick:m,select:f}),i=e.computed(()=>g.value===s);return e.onMounted(()=>{!n.value||o(n.value,s)}),e.onBeforeUnmount(()=>{!n.value||u(n.value)}),(r,c)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["suggestion-item",{selected:e.unref(i)}]),onClick:c[0]||(c[0]=B=>m()),ref_key:"element",ref:n},[e.renderSlot(r.$slots,"default",{index:s.index})],2))}}),E={SearchBox:_,Input:k,Item:w,Box:S};a.Box=S,a.Input=k,a.Item=w,a.SearchBox=_,a.default=E,Object.defineProperties(a,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
