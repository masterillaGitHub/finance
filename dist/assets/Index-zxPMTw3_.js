import{h,r as n,o as a,c,j as t,w as o,f,F as x,x as k,t as C,R as g}from"./index-bTSU7rTX.js";const y={class:"pa-2"},B={__name:"Index",setup(b){const r=h(),_=[{icon:"mdi-account-outline",title:"Профіль",path:"settings.profile"},{icon:"mdi-format-list-bulleted-type",title:"Категорії",path:"settings.categories"},{icon:"mdi-tag-multiple",title:"Теги",path:"settings.tags"}],p=i=>{g(i.path)&&r.push({name:i.path})};return(i,s)=>{const u=n("v-list-subheader"),l=n("v-icon"),m=n("v-list-item-title"),d=n("v-list-item"),v=n("v-list");return a(),c("div",y,[t(v,null,{default:o(()=>[t(u,null,{default:o(()=>s[0]||(s[0]=[f("Загальні")])),_:1}),(a(),c(x,null,k(_,e=>t(d,{key:e.title,value:e.title,onClick:N=>p(e)},{prepend:o(()=>[t(l,{icon:e.icon},null,8,["icon"])]),append:o(()=>[t(l,{icon:"mdi-chevron-right"})]),default:o(()=>[t(m,{textContent:C(e.title)},null,8,["textContent"])]),_:2},1032,["value","onClick"])),64))]),_:1})])}}};export{B as default};