import{h as v,e as f}from"./entities-BiPASufS.js";import{r as t,o as i,d as o,w as s,c as k,F as C,y as b,k as a,f as n,t as l}from"./index-Dq0Qrvv2.js";const g={__name:"CurrenciesList",props:{currencies:{type:Array,required:!0,validator:v}},emits:{selected:f},setup(r,{emit:_}){const c=_;return(h,x)=>{const m=t("v-list-item-title"),u=t("v-list-item-subtitle"),d=t("v-list-item"),p=t("v-list");return i(),o(p,null,{default:s(()=>[(i(!0),k(C,null,b(r.currencies,e=>(i(),o(d,{key:e.id,onClick:y=>c("selected",e)},{default:s(()=>[a(m,null,{default:s(()=>[n(l(e.name),1)]),_:2},1024),a(u,null,{default:s(()=>[n(l(e.symbol)+", "+l(e.alphabetic_code),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})}}};export{g as _};
