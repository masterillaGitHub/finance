import{E as P,I as S,J as C,A as U,K as I,L as M,n as y,q as O,r as o,o as s,d as i,w as d,c as p,b as g,e as T,j as b,z,N as $,O as V,k as _,f as j,F as x,y as q,i as F}from"./index-DZ83gzV4.js";import{_ as G}from"./TransactionGroup-3eBJ5qWK.js";import{T as L}from"./Transaction-_Nn6XxjK.js";import"./entities-BQdZqXjV.js";const A=P("transaction/index",{state:()=>({meta:{},transactionsLoading:!0,isEmptyData:!1,isLoadLock:!1,isAccessLazyLoad:!1}),getters:{currentNumberPage:e=>{var t;return((t=e.meta)==null?void 0:t.current_page)??1},nextNumberPage(){return this.currentNumberPage+1}},actions:{async firstLoadTransactions(){const e=await k(1,I);this.isAccessLazyLoad=S(e.data.data),E(this,e)},async lazyLoadTransactions(){if(!this.isLoadLock){this.transactionsLoading=!0,this.isLoadLock=!0;try{const e=await k(this.nextNumberPage,C);E(this,e)}finally{this.transactionsLoading=!1,this.isLoadLock=!1}}},reset(){this.isEmptyData=!1,this.isAccessLazyLoad=!1}}});async function k(e,t){return await L.query().setUpdateMode(t).setParams({include:"category,account,currency,type,to_account,to_currency",page:e}).get()}function E(e,t){e.meta=t.data.meta,e.isEmptyData=U(t.data.data)}const H={key:0,class:"mt-8 h-3 text-center"},J={key:1},K={__name:"TheBottomLazyLoading",setup(e){const t=M(),a=A(),r=y(()=>t.offsetBottom<200&&t.offsetTop>0&&a.isAccessLazyLoad),m=y(()=>r.value&&t.offsetTop>0&&t.offsetBottom<180&&!a.isEmptyData);return O(m,u=>{u===!0&&a.lazyLoadTransactions()}),(u,f)=>{const n=o("v-progress-circular"),c=o("v-fade-transition");return s(),i(c,null,{default:d(()=>[r.value?(s(),p("div",H,[g(a).transactionsLoading?(s(),i(n,{key:0,indeterminate:""})):g(a).isEmptyData?(s(),p("div",J," Більше транзакцій немає ")):T("",!0)])):T("",!0)]),_:1})}}},R={__name:"TheTransactions",setup(e){const t=A(),a=y(()=>u(L.findLoaded()));y(()=>a.value.length);const r=b(!0);z(m),$(()=>{t.reset(),L.reset()});async function m(){t.reset();try{await t.firstLoadTransactions()}finally{r.value=!1}}function u(n){return Object.values(n.reduce(f,{}))}function f(n,c){const l=c.transaction_at_date;return V(n[l])&&(n[l]={date:c.transaction_at_date,timestamp:c.transaction_at_timestamp,transactions:[]}),n[l].transactions.push(c),n}return(n,c)=>{const l=o("v-progress-linear"),v=o("v-card-text"),N=o("v-btn"),D=o("v-card-actions"),w=o("v-card"),B=o("v-fade-transition");return s(),i(B,{mode:"out-in"},{default:d(()=>[r.value?(s(),i(l,{key:0,indeterminate:""})):(s(),i(w,{key:1},{default:d(()=>[a.value.length?(s(),i(v,{key:1},{default:d(()=>[(s(!0),p(x,null,q(a.value,h=>(s(),i(G,{key:h.timestamp,group:h},null,8,["group"]))),128)),_(K)]),_:1})):(s(),p(x,{key:0},[_(v,null,{default:d(()=>[j(" Покищо транзакцій немає ")]),_:1}),_(D,null,{default:d(()=>[_(N,{"prepend-icon":"mdi-plus",text:"Додати транзакцію",to:{name:"transactions.create"}})]),_:1})],64))]),_:1}))]),_:1})}}},Y={class:"pa-2"},tt={__name:"Index",setup(e){const t=F(),a=b(!1);z(r);async function r(){setTimeout(()=>{a.value=!0},1e3)}return t.beforeEach((m,u)=>{a.value=!1}),(m,u)=>{const f=o("v-fab");return s(),p("div",Y,[_(R),_(f,{active:a.value,icon:"mdi-plus",to:{name:"transactions.create"},app:"",size:"x-large",class:"mb-15"},null,8,["active"])])}}};export{tt as default};