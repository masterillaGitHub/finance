import{G as S,H as B,O as C,P as U,Q as M,R as O,m as v,q as $,r as o,o as s,d as c,w as d,c as p,b as g,e as T,j as b,s as A,S as I,T as V,k as _,f as j,F as x,y as q,i as F}from"./index-Be_DmAD-.js";import{_ as G}from"./TransactionGroup-llkBUxz3.js";import{T as L}from"./entities-COFJ0nU8.js";const D=S("transaction/index",{state:()=>({meta:{},transactionsLoading:!0,isEmptyData:!1,isLoadLock:!1,isAccessLazyLoad:!1}),getters:{currentNumberPage:a=>{var t;return((t=a.meta)==null?void 0:t.current_page)??1},nextNumberPage(){return this.currentNumberPage+1}},actions:{async firstLoadTransactions(){const a=await k(1,M);this.isAccessLazyLoad=B(a.data.data),E(this,a)},async lazyLoadTransactions(){if(!this.isLoadLock){this.transactionsLoading=!0,this.isLoadLock=!0;try{const a=await k(this.nextNumberPage,C);E(this,a)}finally{this.transactionsLoading=!1,this.isLoadLock=!1}}},reset(){this.isEmptyData=!1,this.isAccessLazyLoad=!1}}});async function k(a,t){return await L.query().setUpdateMode(t).setParams({include:"category,account",page:a}).get()}function E(a,t){a.meta=t.data.meta,a.isEmptyData=U(t.data.data)}const H={key:0,class:"mt-8 h-3 text-center"},R={key:1},Q={__name:"TheBottomLazyLoading",setup(a){const t=O(),e=D(),r=v(()=>t.offsetBottom<200&&t.offsetTop>0&&e.isAccessLazyLoad),l=v(()=>r.value&&t.offsetTop>0&&t.offsetBottom<180&&!e.isEmptyData);return $(l,u=>{u===!0&&e.lazyLoadTransactions()}),(u,f)=>{const n=o("v-progress-circular"),i=o("v-fade-transition");return s(),c(i,null,{default:d(()=>[r.value?(s(),p("div",H,[g(e).transactionsLoading?(s(),c(n,{key:0,indeterminate:""})):g(e).isEmptyData?(s(),p("div",R," Більше транзакцій немає ")):T("",!0)])):T("",!0)]),_:1})}}},Y={__name:"TheTransactions",setup(a){const t=D(),e=v(()=>u(L.findLoaded()));v(()=>e.value.length);const r=b(!0);A(l),I(()=>{t.reset(),L.reset()});async function l(){t.reset();try{await t.firstLoadTransactions()}finally{r.value=!1}}function u(n){return Object.values(n.reduce(f,{}))}function f(n,i){const m=i.transaction_at_date;return V(n[m])&&(n[m]={date:i.transaction_at_date,timestamp:i.transaction_at_timestamp,transactions:[]}),n[m].transactions.push(i),n}return(n,i)=>{const m=o("v-progress-linear"),y=o("v-card-text"),N=o("v-btn"),w=o("v-card-actions"),z=o("v-card"),P=o("v-fade-transition");return s(),c(P,{mode:"out-in"},{default:d(()=>[r.value&&!e.value.length?(s(),c(m,{key:0,indeterminate:""})):(s(),c(z,{key:1},{default:d(()=>[!r.value&&!e.value.length?(s(),p(x,{key:0},[_(y,null,{default:d(()=>[j(" Покищо транзакцій немає ")]),_:1}),_(w,null,{default:d(()=>[_(N,{"prepend-icon":"mdi-plus",text:"Додати транзакцію",to:{name:"transactions.create"}})]),_:1})],64)):(s(),c(y,{key:1},{default:d(()=>[(s(!0),p(x,null,q(e.value,h=>(s(),c(G,{key:h.timestamp,group:h},null,8,["group"]))),128)),_(Q)]),_:1}))]),_:1}))]),_:1})}}},J={class:"pa-2"},Z={__name:"Index",setup(a){const t=F(),e=b(!1);A(r);async function r(){setTimeout(()=>{e.value=!0},1e3)}return t.beforeEach((l,u)=>{e.value=!1}),(l,u)=>{const f=o("v-fab");return s(),p("div",J,[_(Y),_(f,{active:e.value,icon:"mdi-plus",to:{name:"transactions.create"},app:"",class:"mb-14"},null,8,["active"])])}}};export{Z as default};