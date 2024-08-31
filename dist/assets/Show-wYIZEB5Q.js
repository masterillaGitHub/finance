import{u as N,a as W,S as X}from"./form.store-s6a4CFB7.js";import{r as t,o as n,d as u,w as l,k as e,b as _,_ as Y,H as B,n as b,B as O,j as y,c as S,e as h,f as z,t as g,D as M,F as A,a as i,z as j,I as Z,i as H,x as ee,p as te,g as ne}from"./index-CxbfblZZ.js";import{t as ae,c as oe,T as P,A as se}from"./entities-CNJ8_7LR.js";import{u as ce}from"./currency_decimal_convert-KKbzYINo.js";import{u as le,t as re,_ as ue,a as ie}from"./collection_service-BsPucFes.js";import{_ as _e,r as de,u as me,a as pe}from"./DialogComponent-DLV67brD.js";import{a as ve,u as fe,_ as ye}from"./create.store-PD5BznbF.js";import{_ as xe}from"./BottomConfirm-KNcKc8gK.js";import"./CurrenciesList-DDLXAnUF.js";const ge={__name:"TheAppBar",setup(f){const r=N();return(o,s)=>{const a=t("v-btn"),d=t("v-spacer"),m=t("v-app-bar");return n(),u(m,{elevation:2,density:"compact"},{prepend:l(()=>[e(a,{icon:"mdi-arrow-left",to:{name:"accounts.index"}})]),default:l(()=>[e(d),e(a,{icon:"mdi-pencil",onClick:s[0]||(s[0]=c=>_(r).editDialog=!0)})]),_:1})}}},he={class:"subheading font-weight-light text-grey text-center"},be={key:0},Se={class:"font-weight-bold text-center"},ke={class:"d-flex justify-space-between"},we={__name:"TheTitleSection",setup(f){const r=B(),o=N(),{toDecimal:s}=ce(),a=b(()=>o.getAccount),d=b(()=>a.value.sums.filter(k=>k.balance!==0)),m=b(()=>d.value.length),c=b(()=>!(m.value===1&&d.value[0].currency.id===1));O($);const D=y(["січ","лют","бер","квіт","трав","черв","лип","сер"]),C=y([200,675,410,390,310,460,250,240]);async function $(){a.value.exists?o.accountId=r.params.id:await o.loadAccount(r.params.id)}return(k,E)=>{const V=t("v-progress-linear"),I=t("v-sparkline"),U=t("v-sheet"),T=t("v-card-title"),v=t("v-list-item"),p=t("v-list"),R=t("v-card-text"),L=t("v-card");return n(),S("div",null,[_(o).accountLoading?(n(),u(V,{key:0,indeterminate:""})):h("",!0),a.value?(n(),u(L,{key:1,class:"mt-8 mx-auto overflow-visible","max-width":"400",elevation:"0"},{default:l(()=>[e(U,{class:"v-sheet--offset mx-auto",color:"cyan",elevation:"12","max-width":"calc(100% - 32px)",rounded:"lg"},{default:l(()=>[e(I,{"auto-draw":"",labels:D.value,"model-value":C.value,color:"white","line-width":"2",padding:"16"},{label:l(x=>[z(g(x.value)+". ",1)]),_:1},8,["labels","model-value"])]),_:1}),e(T,{class:"text-center"},{default:l(()=>[z(g(a.value.name),1)]),_:1}),e(R,{class:"pt-0"},{default:l(()=>[a.value.place_type===_(M)?(n(),S(A,{key:0},[i("div",he,[z(" Поточний баланс"),m.value>1?(n(),S("span",be,", в "+g(m.value)+" валютах",1)):h("",!0)]),i("div",Se,g(_(ae)(_(s)(a.value.getSumInMineCurrency()))),1),c.value?(n(),u(p,{key:0},{default:l(()=>[(n(!0),S(A,null,j(d.value,x=>(n(),u(v,{key:x.id,"prepend-icon":"mdi-flag-outline",class:"s-list-item"},{title:l(()=>[i("div",ke,[i("div",null,g(x.currency.name),1),i("div",null,g(_(oe)(_(s)(x.balance),x.currency.alphabetic_code)),1)])]),_:2},1024))),128))]),_:1})):h("",!0)],64)):h("",!0)]),_:1})]),_:1})):h("",!0)])}}},Ce=Y(we,[["__scopeId","data-v-a2a449ae"]]),Te={__name:"TheTransactions",setup(f){const r=B(),o=le(),s=b(()=>o.isAccessLazyLoad&&!o.isEmptyData),a=b(()=>re(P.findLoaded()));b(()=>a.value.length);const d=y(!0);O(m),Z(()=>{o.reset(),P.reset()});async function m(){o.reset();try{await o.firstLoadTransactions({"filter[account_id]":r.params.id})}finally{d.value=!1}}const c=()=>{o.lazyLoadTransactions({"filter[account_id]":r.params.id})};return(D,C)=>{const $=t("v-progress-linear"),k=t("v-card-text"),E=t("v-btn"),V=t("v-card-actions"),I=t("v-card"),U=t("v-fade-transition");return n(),u(U,{mode:"out-in"},{default:l(()=>[d.value?(n(),u($,{key:0,indeterminate:""})):(n(),u(I,{key:1},{default:l(()=>[a.value.length?(n(),u(k,{key:1},{default:l(()=>[(n(!0),S(A,null,j(a.value,T=>(n(),u(ie,{key:T.timestamp,group:T},null,8,["group"]))),128)),e(ue,{show:90,enable:s.value,onLoad:c},null,8,["enable"])]),_:1})):(n(),S(A,{key:0},[e(k,null,{default:l(()=>[z(" Покищо транзакцій немає ")]),_:1}),e(V,null,{default:l(()=>[e(E,{"prepend-icon":"mdi-plus",text:"Додати транзакцію",to:{name:"transactions.create"}})]),_:1})],64))]),_:1}))]),_:1})}}},q=f=>(te("data-v-5904c9a0"),f=f(),ne(),f),Ae={class:"text-center mb-4"},$e={class:"s-card-text-block"},Ve=q(()=>i("div",null,"Категорія рахунку",-1)),Ie={class:"s-card-text-block"},Ue=q(()=>i("div",null,"Тип рахунку",-1)),Le={__name:"TheUpdateAccount",emits:["accountUpdate","dialogClose"],setup(f,{emit:r}){const o=r;ve();const s=B(),a=H();fe();const d=y(),m=y(!1);y();const c=y(se.find(s.params.id)),D=y(ee.find(v=>v.value===c.value.place_type).label),C=y(c.value.sums),{check:$}=me(d),k=[de];O(()=>{});async function E(){await $()&&(o("accountUpdate"),await I(),await V())}async function V(){await c.value.save({include:"category,sums.currency"})}async function I(){for(const v of C.value)v.account=c.value.id,await v.save({include:"currency"})}function U(){o("dialogClose"),c.value.destroy(),a.push({name:"accounts.index"})}function T(v){C.value.push(v)}return(v,p)=>{const R=t("v-text-field"),L=t("v-divider"),x=t("v-form"),G=t("v-card-text"),F=t("v-btn"),J=t("v-spacer"),K=t("v-card-actions"),Q=t("v-card");return n(),u(Q,{"prepend-icon":"mdi-credit-card-edit-outline",title:"Редагування рахунку"},{default:l(()=>[c.value?(n(),u(G,{key:0},{default:l(()=>[i("div",Ae,[e(_e,{modelValue:c.value.icon,"onUpdate:modelValue":p[0]||(p[0]=w=>c.value.icon=w)},null,8,["modelValue"])]),e(x,{ref_key:"form",ref:d},{default:l(()=>[e(R,{label:"Назва рахунку",modelValue:c.value.name,"onUpdate:modelValue":p[1]||(p[1]=w=>c.value.name=w),rules:k},null,8,["modelValue"]),i("div",$e,[i("div",null,[Ve,i("div",null,g(c.value.category.name),1)]),e(L)]),i("div",Ie,[i("div",null,[Ue,i("div",null,g(D.value),1)]),e(L)]),c.value.place_type===_(M)?(n(),u(ye,{key:0,"account-sums":C.value,onCreatedAccountSum:T},null,8,["account-sums"])):h("",!0)]),_:1},512),e(xe,{modelValue:m.value,"onUpdate:modelValue":p[2]||(p[2]=w=>m.value=w),title:"Видалити?",onSuccess:U},null,8,["modelValue"])]),_:1})):h("",!0),e(L),e(K,null,{default:l(()=>[e(F,{class:"text-red",icon:"mdi-delete-outline",size:"large",variant:"plain",onClick:p[3]||(p[3]=w=>m.value=!0)}),e(J),e(F,{text:"Відміна",size:"large",variant:"plain",onClick:p[4]||(p[4]=w=>v.$emit("dialogClose"))}),e(F,{color:"primary",size:"large",text:"Зберегти",variant:"tonal",onClick:E})]),_:1})]),_:1})}}},De=Y(Le,[["__scopeId","data-v-5904c9a0"]]),Ee={__name:"TheEditAccount",setup(f){const r=N();return(o,s)=>(n(),u(pe,{modelValue:_(r).editDialog,"onUpdate:modelValue":s[2]||(s[2]=a=>_(r).editDialog=a)},{default:l(()=>[e(De,{onAccountUpdate:s[0]||(s[0]=a=>_(r).editDialog=!1),onDialogClose:s[1]||(s[1]=a=>_(r).editDialog=!1)})]),_:1},8,["modelValue"]))}},ze={__name:"TheButtonAddTransaction",setup(f){const r=H(),o=B(),s=W(),a=()=>{s.accountId=parseInt(o.params.id,10),s.openStep=X,r.push({name:"transactions.create"})};return(d,m)=>{const c=t("v-fab");return n(),u(c,{icon:"mdi-plus",app:"",size:"x-large",onClick:a})}}},He={__name:"Show",setup(f){const r=N(),o=b(()=>r.getAccount);return(s,a)=>(n(),S(A,null,[e(ge),e(Ce,{class:"mb-4"}),o.value.place_type===_(M)?(n(),S(A,{key:0},[e(Te),e(ze)],64)):h("",!0),e(Ee)],64))}};export{He as default};
