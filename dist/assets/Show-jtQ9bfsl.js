import{u as O,a as K,S as Q}from"./form.store-BS9jCDq-.js";import{r as t,o as a,d as i,w as s,k as e,b as f,_ as q,D as E,n as S,j as x,z as M,c as w,e as V,f as I,t as b,a as v,F as z,y as G,E as W,i as H,p as X,g as Z}from"./index-uNLpc8m8.js";import{A as R,t as ee,c as te,T as j}from"./entities-DXs83vKd.js";import{u as ne}from"./currency_decimal_convert-KKbzYINo.js";import{u as ae,t as oe,_ as se,a as ce}from"./collection_service-D7uvF5ht.js";import{_ as le,r as re,u as ie,a as ue}from"./DialogComponent-DSQFJjBp.js";import{a as de,u as _e,_ as me}from"./create.store-YR5BmbDU.js";import{_ as pe}from"./BottomConfirm-COa7FO5-.js";import"./CurrenciesList-FRp3ZG6X.js";const ve={__name:"TheAppBar",setup(m){const l=O();return(r,n)=>{const c=t("v-btn"),u=t("v-spacer"),p=t("v-app-bar");return a(),i(p,{elevation:2,density:"compact"},{prepend:s(()=>[e(c,{icon:"mdi-arrow-left",to:{name:"accounts.index"}})]),default:s(()=>[e(u),e(c,{icon:"mdi-pencil",onClick:n[0]||(n[0]=o=>f(l).editDialog=!0)})]),_:1})}}},fe={class:"subheading font-weight-light text-grey text-center"},ye={key:0},xe={class:"font-weight-bold text-center"},ge={class:"d-flex justify-space-between"},he={__name:"TheTitleSection",setup(m){const l=E(),{toDecimal:r}=ne(),n=S(()=>R.find(l.params.id)),c=S(()=>n.value.sums.filter(g=>g.balance!==0)),u=S(()=>c.value.length),p=S(()=>!(u.value===1&&c.value[0].currency.id===1)),o=x(!1);M(C);const k=x(["січ","лют","бер","квіт","трав","черв","лип","сер"]),D=x([200,675,410,390,310,460,250,240]);async function C(){if(!n.value.exists){o.value=!0;try{await R.sync({include:"category,sums.currency","filter[id]":l.params.id})}finally{o.value=!1}}}return(g,L)=>{const $=t("v-progress-linear"),T=t("v-sparkline"),A=t("v-sheet"),d=t("v-card-title"),_=t("v-list-item"),B=t("v-list"),U=t("v-card-text"),F=t("v-card");return a(),w("div",null,[o.value?(a(),i($,{key:0,indeterminate:""})):V("",!0),n.value?(a(),i(F,{key:1,class:"mt-8 mx-auto overflow-visible","max-width":"400",elevation:"0"},{default:s(()=>[e(A,{class:"v-sheet--offset mx-auto",color:"cyan",elevation:"12","max-width":"calc(100% - 32px)",rounded:"lg"},{default:s(()=>[e(T,{"auto-draw":"",labels:k.value,"model-value":D.value,color:"white","line-width":"2",padding:"16"},{label:s(y=>[I(b(y.value)+". ",1)]),_:1},8,["labels","model-value"])]),_:1}),e(d,{class:"text-center"},{default:s(()=>[I(b(n.value.name),1)]),_:1}),e(U,{class:"pt-0"},{default:s(()=>[v("div",fe,[I(" Поточний баланс"),u.value>1?(a(),w("span",ye,", в "+b(u.value)+" валютах",1)):V("",!0)]),v("div",xe,b(f(ee)(f(r)(n.value.getSumInMineCurrency()))),1),p.value?(a(),i(B,{key:0},{default:s(()=>[(a(!0),w(z,null,G(c.value,y=>(a(),i(_,{key:y.id,"prepend-icon":"mdi-flag-outline",class:"s-list-item"},{title:s(()=>[v("div",ge,[v("div",null,b(y.currency.name),1),v("div",null,b(f(te)(f(r)(y.balance),y.currency.alphabetic_code)),1)])]),_:2},1024))),128))]),_:1})):V("",!0)]),_:1})]),_:1})):V("",!0)])}}},be=q(he,[["__scopeId","data-v-e6df5c7a"]]),Se={__name:"TheTransactions",setup(m){const l=E(),r=ae(),n=S(()=>r.isAccessLazyLoad&&!r.isEmptyData),c=S(()=>oe(j.findLoaded()));S(()=>c.value.length);const u=x(!0);M(p),W(()=>{r.reset(),j.reset()});async function p(){r.reset();try{await r.firstLoadTransactions({"filter[account_id]":l.params.id})}finally{u.value=!1}}const o=()=>{r.lazyLoadTransactions({"filter[account_id]":l.params.id})};return(k,D)=>{const C=t("v-progress-linear"),g=t("v-card-text"),L=t("v-btn"),$=t("v-card-actions"),T=t("v-card"),A=t("v-fade-transition");return a(),i(A,{mode:"out-in"},{default:s(()=>[u.value?(a(),i(C,{key:0,indeterminate:""})):(a(),i(T,{key:1},{default:s(()=>[c.value.length?(a(),i(g,{key:1},{default:s(()=>[(a(!0),w(z,null,G(c.value,d=>(a(),i(ce,{key:d.timestamp,group:d},null,8,["group"]))),128)),e(se,{show:90,enable:n.value,onLoad:o},null,8,["enable"])]),_:1})):(a(),w(z,{key:0},[e(g,null,{default:s(()=>[I(" Покищо транзакцій немає ")]),_:1}),e($,null,{default:s(()=>[e(L,{"prepend-icon":"mdi-plus",text:"Додати транзакцію",to:{name:"transactions.create"}})]),_:1})],64))]),_:1}))]),_:1})}}},ke=m=>(X("data-v-428a0fc5"),m=m(),Z(),m),we={class:"text-center mb-4"},Ce={class:"s-card-text-block"},$e=ke(()=>v("div",null,"Тип рахунку",-1)),Te={__name:"TheUpdateAccount",emits:["accountUpdate","dialogClose"],setup(m,{emit:l}){const r=l;de();const n=E(),c=H();_e();const u=x(),p=x(!1),o=x(R.find(n.params.id)),k=x(o.value.sums),{check:D}=ie(u),C=[re];M(()=>{});async function g(){await D()&&(r("accountUpdate"),await $(),await L())}async function L(){await o.value.save({include:"category,sums.currency"})}async function $(){for(const d of k.value)d.account=o.value.id,await d.save({include:"currency"})}function T(){r("dialogClose"),o.value.destroy(),c.push({name:"accounts.index"})}function A(d){k.value.push(d)}return(d,_)=>{const B=t("v-text-field"),U=t("v-divider"),F=t("v-form"),y=t("v-card-text"),N=t("v-btn"),P=t("v-spacer"),Y=t("v-card-actions"),J=t("v-card");return a(),i(J,{"prepend-icon":"mdi-credit-card-edit-outline",title:"Редагування рахунку"},{default:s(()=>[o.value?(a(),i(y,{key:0},{default:s(()=>[v("div",we,[e(le,{modelValue:o.value.icon,"onUpdate:modelValue":_[0]||(_[0]=h=>o.value.icon=h)},null,8,["modelValue"])]),e(F,{ref_key:"form",ref:u},{default:s(()=>[e(B,{label:"Назва рахунку",modelValue:o.value.name,"onUpdate:modelValue":_[1]||(_[1]=h=>o.value.name=h),rules:C},null,8,["modelValue"]),v("div",Ce,[v("div",null,[$e,v("div",null,b(o.value.category.name),1)]),e(U)]),e(me,{"account-sums":k.value,onCreatedAccountSum:A},null,8,["account-sums"])]),_:1},512),e(pe,{modelValue:p.value,"onUpdate:modelValue":_[2]||(_[2]=h=>p.value=h),title:"Видалити?",onSuccess:T},null,8,["modelValue"])]),_:1})):V("",!0),e(U),e(Y,null,{default:s(()=>[e(N,{class:"text-red",icon:"mdi-delete-outline",size:"large",variant:"plain",onClick:_[3]||(_[3]=h=>p.value=!0)}),e(P),e(N,{text:"Відміна",size:"large",variant:"plain",onClick:_[4]||(_[4]=h=>d.$emit("dialogClose"))}),e(N,{color:"primary",size:"large",text:"Зберегти",variant:"tonal",onClick:g})]),_:1})]),_:1})}}},Ae=q(Te,[["__scopeId","data-v-428a0fc5"]]),Ve={__name:"TheEditAccount",setup(m){const l=O();return(r,n)=>(a(),i(ue,{modelValue:f(l).editDialog,"onUpdate:modelValue":n[2]||(n[2]=c=>f(l).editDialog=c)},{default:s(()=>[e(Ae,{onAccountUpdate:n[0]||(n[0]=c=>f(l).editDialog=!1),onDialogClose:n[1]||(n[1]=c=>f(l).editDialog=!1)})]),_:1},8,["modelValue"]))}},De={__name:"TheButtonAddTransaction",setup(m){const l=H(),r=E(),n=K(),c=()=>{n.accountId=parseInt(r.params.id,10),n.openStep=Q,l.push({name:"transactions.create"})};return(u,p)=>{const o=t("v-fab");return a(),i(o,{icon:"mdi-plus",app:"",size:"x-large",onClick:c})}}},Me={__name:"Show",setup(m){return(l,r)=>(a(),w(z,null,[e(ve),e(be,{class:"mb-4"}),e(Se),e(De),e(Ve)],64))}};export{Me as default};
