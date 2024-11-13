import{a as b}from"./Model-m4MKmFK9.js";import{e as k,T as D}from"./entities-a6JjP9x7.js";import{_ as E,m as h,T as N,i as g,r as y,o as i,c as m,a as n,j as r,w as z,t as d,s as x,e as v,h as A,E as C,F as P,x as j,k as I,d as O,O as S,n as B,C as $,P as F,M as V,z as G,Q as M}from"./index-CECwDoZT.js";import{u as R}from"./currency_decimal_convert-KKbzYINo.js";const U={class:"d-flex justify-space-between"},q={class:"pa-2"},H={class:"d-flex flex-column flex-grow-1",style:{"min-width":"0"}},Q={class:"d-flex flex-wrap flex-grow-1"},Y={class:"s-text-truncate-wrapper mr-3"},Z={class:"font-weight-bold text-truncate"},J={class:"d-flex"},K={key:0},W={class:"text-green"},X={class:"d-flex text-grey-darken-1"},tt={class:"text-truncate"},at={key:0,class:"d-flex s-min-width-0 s-max-width-70"},et={class:"text-truncate"},st={__name:"TransactionItem",props:{t:{type:Object,required:!0,validator:k}},setup(a){const t=a,e=R(),s=h(()=>t.t.type.id===N),o=g({}),c=g({});function u(){const _=t.t.amount>0;o.value={name:t.t.account.name,icon:t.t.account.icon,amount:l(e.toDecimal(t.t.amount),t.t.currency.alphabetic_code),isIncome:_},s.value&&(c.value={name:t.t.transfer_transaction.account.name,icon:t.t.transfer_transaction.account.icon,amount:l(e.toDecimal(t.t.transfer_transaction.amount),t.t.transfer_transaction.currency.alphabetic_code)})}function l(_,f){return b(_,f,{signDisplay:"exceptZero"}).replace("-","")}return u(),(_,f)=>{const p=y("v-icon"),T=y("v-avatar");return i(),m("div",U,[n("div",q,[r(T,{size:"small"},{default:z(()=>[r(p,{size:"large",icon:a.t.category.icon},null,8,["icon"])]),_:1})]),n("div",H,[n("div",Q,[n("div",Y,[n("div",Z,d(a.t.category.name),1)]),n("div",J,[n("div",{class:x({"text-green":o.value.isIncome})},d(o.value.amount),3),s.value&&o.value.amount!==c.value.amount?(i(),m("div",K,[r(p,{icon:"mdi-arrow-right-thin",class:"mx-1 text-grey-darken-1"}),n("span",W,d(c.value.amount),1)])):v("",!0)])]),n("div",X,[n("div",{class:x(["d-flex s-min-width-0",[s.value?"s-max-width-70":"w-100"]])},[r(p,{icon:o.value.icon,class:"mr-2"},null,8,["icon"]),n("span",tt,d(o.value.name),1)],2),s.value?(i(),m("div",at,[r(p,{icon:"mdi-arrow-right-thin",class:"mx-1"}),r(p,{icon:c.value.icon,class:"mr-2"},null,8,["icon"]),n("span",et,d(c.value.name),1)])):v("",!0)])])])}}},nt=E(st,[["__scopeId","data-v-05ed3605"]]),ot={class:"s-group"},ct={class:"text-grey my-3"},_t={__name:"TransactionGroup",props:{group:Object},setup(a){const t=A(),e=s=>{t.push({name:"transactions.edit",params:{id:s.id}})};return(s,o)=>{const c=C("ripple");return i(),m("div",ot,[n("div",ct,d(a.group.date),1),(i(!0),m(P,null,j(a.group.transactions,u=>I((i(),O(nt,{class:"py-1",t:u,onClick:l=>e(u)},null,8,["t","onClick"])),[[c]])),256))])}}},rt={key:0,class:"mt-8 h-3 text-center"},pt={__name:"TheBottomLazyLoading",props:{show:{type:Number,default:100},load:{type:Number,default:100},enable:{type:Boolean,default:!1}},emits:["load"],setup(a,{emit:t}){const e=a,s=t,o=S(),c=h(()=>o.offsetTopPercent>=e.show&&o.offsetTop>0),u=h(()=>c.value||o.offsetTop>0&&o.offsetTopPercent>=e.load);return B(u,l=>{l===!0&&e.enable&&s("load")}),(l,_)=>{const f=y("v-progress-circular");return c.value&&a.enable?(i(),m("div",rt,[r(f,{indeterminate:""})])):v("",!0)}}},ft=$("transaction/index",{state:()=>({meta:{},transactionsLoading:!0,isEmptyData:!1,isLoadLock:!1,isAccessLazyLoad:!1}),getters:{currentNumberPage:a=>{var t;return((t=a.meta)==null?void 0:t.current_page)??1},nextNumberPage(){return this.currentNumberPage+1}},actions:{async firstLoadTransactions(a){const e=Object.assign({include:["type","account","currency","category","transfer_transaction.type","transfer_transaction.account","transfer_transaction.currency","transfer_transaction.category"].join(","),page:1,sort:"-transaction_at,-id"},a),s=await L(e);this.isAccessLazyLoad=F(s.data.data),w(this,s)},async lazyLoadTransactions(a={}){if(this.isLoadLock)return;const t=["type","account","currency","category","transfer_transaction.type","transfer_transaction.account","transfer_transaction.currency","transfer_transaction.category"];this.transactionsLoading=!0,this.isLoadLock=!0;try{const e=Object.assign({include:t.join(","),page:this.nextNumberPage,sort:"-transaction_at,-id"},a),s=await L(e);w(this,s)}finally{this.transactionsLoading=!1,this.isLoadLock=!1}},reset(){this.isEmptyData=!1,this.isAccessLazyLoad=!1}}});async function L(a){return await D.query().setUpdateMode(V).setParams(a).get()}function w(a,t){a.meta=t.data.meta,a.isEmptyData=G(t.data.data)}function ht(a){return Object.values(a.reduce(it,{}))}function it(a,t){const e=t.transaction_at_date;return M(a[e])&&(a[e]={date:t.transaction_at_date,timestamp:t.transaction_at_timestamp,transactions:[]}),a[e].transactions.push(t),a}export{pt as _,_t as a,ht as t,ft as u};
