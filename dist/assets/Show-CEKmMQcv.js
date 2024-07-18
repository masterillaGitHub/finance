import{u as M,a as K,S as Q}from"./create.store-D_x2MxYD.js";import{r as t,o as a,d as i,w as s,k as e,b,_ as j,D as z,n as S,j as y,z as N,c as w,e as L,f as I,t as g,a as v,F as D,y as q,E as W,i as G,p as X,g as Z}from"./index-7TYs6_Yt.js";import{A as F,t as ee,c as te,T as R}from"./Transaction-3bVJcTy4.js";import{u as ne,t as ae,_ as oe,a as se}from"./collection_service-XH15_zCl.js";import{_ as ce,r as le,u as re,a as ie}from"./DialogComponent-B75sILXD.js";import{a as ue,u as _e,_ as de}from"./create.store-C-F_gTf4.js";import{_ as me}from"./BottomConfirm-Ti2BTpP_.js";import"./entities-pc8Wm9KT.js";import"./CurrenciesList-C8h1v6t1.js";/* empty css                                                         */const pe={__name:"TheAppBar",setup(m){const l=M();return(n,o)=>{const c=t("v-btn"),u=t("v-spacer"),p=t("v-app-bar");return a(),i(p,{elevation:2,density:"compact"},{prepend:s(()=>[e(c,{icon:"mdi-arrow-left",to:{name:"accounts.index"}})]),default:s(()=>[e(u),e(c,{icon:"mdi-pencil",onClick:o[0]||(o[0]=r=>b(l).editDialog=!0)})]),_:1})}}},ve={class:"subheading font-weight-light text-grey text-center"},fe={key:0},ye={class:"font-weight-bold text-center"},xe={class:"d-flex justify-space-between"},ge={__name:"TheTitleSection",setup(m){const l=z(),n=S(()=>F.find(l.params.id)),o=S(()=>n.value.sums.filter($=>$.balance!==0)),c=S(()=>o.value.length),u=y(!1);N(h);const p=y(["січ","лют","бер","квіт","трав","черв","лип","сер"]),r=y([200,675,410,390,310,460,250,240]);async function h(){if(!n.value.exists){u.value=!0;try{await F.sync({include:"category,sums.currency","filter[id]":l.params.id})}finally{u.value=!1}}}return($,U)=>{const k=t("v-progress-linear"),C=t("v-sparkline"),T=t("v-sheet"),A=t("v-card-title"),V=t("v-list-item"),_=t("v-list"),d=t("v-card-text"),E=t("v-card");return a(),w("div",null,[u.value?(a(),i(k,{key:0,indeterminate:""})):L("",!0),n.value?(a(),i(E,{key:1,class:"mt-8 mx-auto overflow-visible","max-width":"400",elevation:"0"},{default:s(()=>[e(T,{class:"v-sheet--offset mx-auto",color:"cyan",elevation:"12","max-width":"calc(100% - 32px)",rounded:"lg"},{default:s(()=>[e(C,{"auto-draw":"",labels:p.value,"model-value":r.value,color:"white","line-width":"2",padding:"16"},{label:s(f=>[I(g(f.value)+". ",1)]),_:1},8,["labels","model-value"])]),_:1}),e(A,{class:"text-center"},{default:s(()=>[I(g(n.value.name),1)]),_:1}),e(d,{class:"pt-0"},{default:s(()=>[v("div",ve,[I(" Поточний баланс"),c.value>1?(a(),w("span",fe,", в "+g(c.value)+" валютах",1)):L("",!0)]),v("div",ye,g(b(ee)(n.value.getSumInMineCurrency())),1),c.value>1?(a(),i(_,{key:0},{default:s(()=>[(a(!0),w(D,null,q(o.value,f=>(a(),i(V,{key:f.id,"prepend-icon":"mdi-flag-outline",class:"s-list-item"},{title:s(()=>[v("div",xe,[v("div",null,g(f.currency.name),1),v("div",null,g(b(te)(f.balance,f.currency.alphabetic_code)),1)])]),_:2},1024))),128))]),_:1})):L("",!0)]),_:1})]),_:1})):L("",!0)])}}},be=j(ge,[["__scopeId","data-v-4ba68e11"]]),he={__name:"TheTransactions",setup(m){const l=z(),n=ne(),o=S(()=>n.isAccessLazyLoad&&!n.isEmptyData),c=S(()=>ae(R.findLoaded()));S(()=>c.value.length);const u=y(!0);N(p),W(()=>{n.reset(),R.reset()});async function p(){n.reset();try{await n.firstLoadTransactions({"filter[account_id]":l.params.id})}finally{u.value=!1}}const r=()=>{n.lazyLoadTransactions({"filter[account_id]":l.params.id})};return(h,$)=>{const U=t("v-progress-linear"),k=t("v-card-text"),C=t("v-btn"),T=t("v-card-actions"),A=t("v-card"),V=t("v-fade-transition");return a(),i(V,{mode:"out-in"},{default:s(()=>[u.value?(a(),i(U,{key:0,indeterminate:""})):(a(),i(A,{key:1},{default:s(()=>[c.value.length?(a(),i(k,{key:1},{default:s(()=>[(a(!0),w(D,null,q(c.value,_=>(a(),i(se,{key:_.timestamp,group:_},null,8,["group"]))),128)),e(oe,{show:90,enable:o.value,onLoad:r},null,8,["enable"])]),_:1})):(a(),w(D,{key:0},[e(k,null,{default:s(()=>[I(" Покищо транзакцій немає ")]),_:1}),e(T,null,{default:s(()=>[e(C,{"prepend-icon":"mdi-plus",text:"Додати транзакцію",to:{name:"transactions.create"}})]),_:1})],64))]),_:1}))]),_:1})}}},ke=m=>(X("data-v-428a0fc5"),m=m(),Z(),m),Se={class:"text-center mb-4"},we={class:"s-card-text-block"},$e=ke(()=>v("div",null,"Тип рахунку",-1)),Ce={__name:"TheUpdateAccount",emits:["accountUpdate","dialogClose"],setup(m,{emit:l}){const n=l;ue();const o=z(),c=G();_e();const u=y(),p=y(!1),r=y(F.find(o.params.id)),h=y(r.value.sums),{check:$}=re(u),U=[le];N(()=>{});async function k(){await $()&&(n("accountUpdate"),await T(),await C())}async function C(){await r.value.save({include:"category,sums.currency"})}async function T(){for(const _ of h.value)_.account=r.value.id,await _.save({include:"currency"})}function A(){n("dialogClose"),r.value.destroy(),c.push({name:"accounts.index"})}function V(_){h.value.push(_)}return(_,d)=>{const E=t("v-text-field"),f=t("v-divider"),H=t("v-form"),O=t("v-card-text"),B=t("v-btn"),P=t("v-spacer"),Y=t("v-card-actions"),J=t("v-card");return a(),i(J,{"prepend-icon":"mdi-credit-card-edit-outline",title:"Редагування рахунку"},{default:s(()=>[r.value?(a(),i(O,{key:0},{default:s(()=>[v("div",Se,[e(ce,{modelValue:r.value.icon,"onUpdate:modelValue":d[0]||(d[0]=x=>r.value.icon=x)},null,8,["modelValue"])]),e(H,{ref_key:"form",ref:u},{default:s(()=>[e(E,{label:"Назва рахунку",modelValue:r.value.name,"onUpdate:modelValue":d[1]||(d[1]=x=>r.value.name=x),rules:U},null,8,["modelValue"]),v("div",we,[v("div",null,[$e,v("div",null,g(r.value.category.name),1)]),e(f)]),e(de,{"account-sums":h.value,onCreatedAccountSum:V},null,8,["account-sums"])]),_:1},512),e(me,{modelValue:p.value,"onUpdate:modelValue":d[2]||(d[2]=x=>p.value=x),title:"Видалити?",onSuccess:A},null,8,["modelValue"])]),_:1})):L("",!0),e(f),e(Y,null,{default:s(()=>[e(B,{class:"text-red",icon:"mdi-delete-outline",size:"large",variant:"plain",onClick:d[3]||(d[3]=x=>p.value=!0)}),e(P),e(B,{text:"Відміна",size:"large",variant:"plain",onClick:d[4]||(d[4]=x=>_.$emit("dialogClose"))}),e(B,{color:"primary",size:"large",text:"Зберегти",variant:"tonal",onClick:k})]),_:1})]),_:1})}}},Te=j(Ce,[["__scopeId","data-v-428a0fc5"]]),Ae={__name:"TheEditAccount",setup(m){const l=M();return(n,o)=>(a(),i(ie,{modelValue:b(l).editDialog,"onUpdate:modelValue":o[2]||(o[2]=c=>b(l).editDialog=c)},{default:s(()=>[e(Te,{onAccountUpdate:o[0]||(o[0]=c=>b(l).editDialog=!1),onDialogClose:o[1]||(o[1]=c=>b(l).editDialog=!1)})]),_:1},8,["modelValue"]))}},Ve={__name:"TheButtonAddTransaction",setup(m){const l=G(),n=z(),o=K(),c=()=>{o.accountId=parseInt(n.params.id,10),o.openStep=Q,l.push({name:"transactions.create"})};return(u,p)=>{const r=t("v-fab");return a(),i(r,{icon:"mdi-plus",app:"",size:"x-large",onClick:c})}}},Me={__name:"Show",setup(m){return(l,n)=>(a(),w(D,null,[e(pe),e(be,{class:"mb-4"}),e(he),e(Ve),e(Ae)],64))}};export{Me as default};
