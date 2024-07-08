import{G as S,H as B,O as C,P as U,Q as M,R as O,m as y,q as $,r as o,o as s,d as i,w as d,c as p,b as g,e as T,j as b,s as A,S as I,T as V,k as _,f as j,F as x,y as q,i as F}from"./index-mGmnSMP9.js";import{_ as G}from"./TransactionGroup-BESqFcgv.js";import{T as v}from"./entities-CnCDWlHM.js";const D=S("transaction/index",{state:()=>({meta:{},transactionsLoading:!0,isEmptyData:!1,isLoadLock:!1,isAccessLazyLoad:!1}),getters:{currentNumberPage:e=>{var t;return((t=e.meta)==null?void 0:t.current_page)??1},nextNumberPage(){return this.currentNumberPage+1}},actions:{async firstLoadTransactions(){const e=await k(1,M);this.isAccessLazyLoad=B(e.data.data),E(this,e)},async lazyLoadTransactions(){if(!this.isLoadLock){this.transactionsLoading=!0,this.isLoadLock=!0;try{const e=await k(this.nextNumberPage,C);E(this,e)}finally{this.transactionsLoading=!1,this.isLoadLock=!1}}},reset(){this.isEmptyData=!1,this.isAccessLazyLoad=!1}}});async function k(e,t){return await v.query().setUpdateMode(t).setParams({include:"category,account,currency,type,to_account,to_currency",page:e}).get()}function E(e,t){e.meta=t.data.meta,e.isEmptyData=U(t.data.data)}const H={key:0,class:"mt-8 h-3 text-center"},R={key:1},Q={__name:"TheBottomLazyLoading",setup(e){const t=O(),a=D(),r=y(()=>t.offsetBottom<200&&t.offsetTop>0&&a.isAccessLazyLoad),l=y(()=>r.value&&t.offsetTop>0&&t.offsetBottom<180&&!a.isEmptyData);return $(l,u=>{u===!0&&a.lazyLoadTransactions()}),(u,f)=>{const n=o("v-progress-circular"),c=o("v-fade-transition");return s(),i(c,null,{default:d(()=>[r.value?(s(),p("div",H,[g(a).transactionsLoading?(s(),i(n,{key:0,indeterminate:""})):g(a).isEmptyData?(s(),p("div",R," Більше транзакцій немає ")):T("",!0)])):T("",!0)]),_:1})}}},Y={__name:"TheTransactions",setup(e){const t=D(),a=y(()=>u(v.findLoaded()));y(()=>a.value.length);const r=b(!0);A(l),I(()=>{t.reset(),v.reset()});async function l(){t.reset();try{await t.firstLoadTransactions()}finally{r.value=!1}}function u(n){return Object.values(n.reduce(f,{}))}function f(n,c){const m=c.transaction_at_date;return V(n[m])&&(n[m]={date:c.transaction_at_date,timestamp:c.transaction_at_timestamp,transactions:[]}),n[m].transactions.push(c),n}return(n,c)=>{const m=o("v-progress-linear"),L=o("v-card-text"),N=o("v-btn"),w=o("v-card-actions"),z=o("v-card"),P=o("v-fade-transition");return s(),i(P,{mode:"out-in"},{default:d(()=>[r.value&&!a.value.length?(s(),i(m,{key:0,indeterminate:""})):(s(),i(z,{key:1},{default:d(()=>[!r.value&&!a.value.length?(s(),p(x,{key:0},[_(L,null,{default:d(()=>[j(" Покищо транзакцій немає ")]),_:1}),_(w,null,{default:d(()=>[_(N,{"prepend-icon":"mdi-plus",text:"Додати транзакцію",to:{name:"transactions.create"}})]),_:1})],64)):(s(),i(L,{key:1},{default:d(()=>[(s(!0),p(x,null,q(a.value,h=>(s(),i(G,{key:h.timestamp,group:h},null,8,["group"]))),128)),_(Q)]),_:1}))]),_:1}))]),_:1})}}},J={class:"pa-2"},Z={__name:"Index",setup(e){const t=F(),a=b(!1);A(r);async function r(){setTimeout(()=>{a.value=!0},1e3)}return t.beforeEach((l,u)=>{a.value=!1}),(l,u)=>{const f=o("v-fab");return s(),p("div",J,[_(Y),_(f,{active:a.value,icon:"mdi-plus",to:{name:"transactions.create"},app:"",class:"mb-14"},null,8,["active"])])}}};export{Z as default};
