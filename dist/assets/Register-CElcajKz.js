import{u as B,i as S,j as n,r as t,o as C,d as N,w as o,k as e,a as c,t as m,l as D,b as A,v as E}from"./index-CKW_w9-6.js";const L={class:"fill-height d-flex justify-center align-center"},P={class:"text-center"},q={class:"text-grey-lighten-1"},z="Register",f="",H={__name:"Register",setup(F){const p=B(),g=S(),s=n(!1),i=n("User 1"),r=n("user1@test.com"),u=n("123123123"),h=new URL("/assets/images/login.jpg",import.meta.url).href;async function w(){s.value=!0;try{await p.register(i.value,r.value,u.value)&&await g.push({name:"dashboard"})}finally{s.value=!1}}return(x,a)=>{const V=t("v-img"),d=t("v-text-field"),_=t("v-col"),b=t("v-row"),y=t("v-container"),R=t("v-form"),U=t("v-divider"),v=t("v-btn"),k=t("v-card-actions"),j=t("v-card");return C(),N(j,{loading:s.value},{default:o(()=>[e(V,{src:A(h),height:"200",cover:""},{default:o(()=>[c("div",L,[c("div",P,[c("h3",{class:"text-h5 text-white"},m(z)),D(c("div",q,m(f),512),[[E,!!f]])])])]),_:1},8,["src"]),e(R,null,{default:o(()=>[e(y,null,{default:o(()=>[e(b,{dense:""},{default:o(()=>[e(_,{cols:"12"},{default:o(()=>[e(d,{modelValue:i.value,"onUpdate:modelValue":a[0]||(a[0]=l=>i.value=l),label:"Name"},null,8,["modelValue"])]),_:1}),e(_,{cols:"12"},{default:o(()=>[e(d,{modelValue:r.value,"onUpdate:modelValue":a[1]||(a[1]=l=>r.value=l),label:"E-mail"},null,8,["modelValue"])]),_:1}),e(_,{cols:"12"},{default:o(()=>[e(d,{modelValue:u.value,"onUpdate:modelValue":a[2]||(a[2]=l=>u.value=l),label:"Password"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(U),e(k,{class:"justify-space-between"},{default:o(()=>[e(v,{to:{name:"main"},text:"Back"}),e(v,{text:"Register",loading:s.value,onClick:w},null,8,["loading"])]),_:1})]),_:1},8,["loading"])}}};export{H as default};
