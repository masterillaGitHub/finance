import{u as m,a as l,b as u}from"./form.store-s6a4CFB7.js";import{r as n,o as _,d,w as c,k as e,N as f,I as h,c as v,a as p,F as S,Q as x}from"./index-CxbfblZZ.js";import{_ as w,a as C,b}from"./TheAmount-BqLHFafn.js";import"./entities-CNJ8_7LR.js";import"./CurrenciesList-DDLXAnUF.js";import"./currency_decimal_convert-KKbzYINo.js";const E={__name:"TheAppBar",setup(i){return m(),(t,s)=>{const o=n("v-btn"),a=n("v-spacer"),r=n("v-app-bar");return _(),d(r,{elevation:2,density:"compact"},{prepend:c(()=>[e(o,{icon:"mdi-arrow-left",to:{name:"transactions.index"}})]),default:c(()=>[e(a)]),_:1})}}},B={class:"fill-height d-flex flex-column"},N=p("div",{class:"flex-grow-1"},null,-1),A={__name:"Create",setup(i){const t=l(),s=f();h(()=>{t.reset()});function o(){a()}function a(){t.$patch({openStep:u,date:new Date,typeId:x,currencyId:s.getMainCurrency.id})}return o(),(r,$)=>(_(),v(S,null,[e(E),p("div",B,[N,e(w,{"is-calc-show":!0}),e(C),e(b)])],64))}};export{A as default};