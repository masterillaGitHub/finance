import{a as D}from"./Model-CeNXf-rt.js";import{e as k,T as E}from"./entities-DwYTsaLf.js";import{_ as A,m as h,T as N,i as x,r as y,o as u,c as _,a as n,j as i,w as z,t as m,s as L,e as v,h as C,E as P,F as j,x as I,k as S,d as O,O as B,n as $,C as M,P as F,M as V,z as G,Q as R}from"./index-CMFz-0SU.js";import{u as U}from"./currency_decimal_convert-KKbzYINo.js";const q={class:"d-flex justify-space-between"},H={class:"pa-2"},Q={class:"d-flex flex-column flex-grow-1",style:{"min-width":"0"}},W={class:"d-flex flex-wrap flex-grow-1"},Y={class:"s-text-truncate-wrapper mr-3"},Z={class:"font-weight-bold text-truncate"},J={class:"d-flex"},K={key:0},X={class:"text-green"},tt={class:"d-flex text-grey-darken-1"},at={class:"text-truncate"},et={key:0,class:"d-flex s-min-width-0 s-max-width-70"},st={class:"text-truncate"},nt={__name:"TransactionItem",props:{t:{type:Object,required:!0,validator:k}},setup(a){const t=a,e=U(),s=h(()=>t.t.type.id===N),o=x({}),c=x({});function l(){const r=t.t.amount>0;o.value={name:t.t.account.name,icon:t.t.account.icon,amount:t.t.amount,amountDisplay:d(e.toDecimal(t.t.amount),t.t.currency.alphabetic_code),isIncome:r},s.value&&(c.value={name:t.t.transfer_transaction.account.name,icon:t.t.transfer_transaction.account.icon,amount:t.t.transfer_transaction.amount,amountDisplay:d(e.toDecimal(t.t.transfer_transaction.amount),t.t.transfer_transaction.currency.alphabetic_code)})}function d(r,f){return D(r,f,{signDisplay:"exceptZero"}).replace("-","")}function g(r,f){return Math.abs(r)===Math.abs(f)}return l(),(r,f)=>{const p=y("v-icon"),b=y("v-avatar");return u(),_("div",q,[n("div",H,[i(b,{size:"small"},{default:z(()=>[i(p,{size:"large",icon:a.t.category.icon},null,8,["icon"])]),_:1})]),n("div",Q,[n("div",W,[n("div",Y,[n("div",Z,m(a.t.category.name),1)]),n("div",J,[n("div",{class:L({"text-green":o.value.isIncome})},m(o.value.amountDisplay),3),s.value&&!g(o.value.amount,c.value.amount)?(u(),_("div",K,[i(p,{icon:"mdi-arrow-right-thin",class:"mx-1 text-grey-darken-1"}),n("span",X,m(c.value.amountDisplay),1)])):v("",!0)])]),n("div",tt,[n("div",{class:L(["d-flex s-min-width-0",[s.value?"s-max-width-70":"w-100"]])},[i(p,{icon:o.value.icon,class:"mr-2"},null,8,["icon"]),n("span",at,m(o.value.name),1)],2),s.value?(u(),_("div",et,[i(p,{icon:"mdi-arrow-right-thin",class:"mx-1"}),i(p,{icon:c.value.icon,class:"mr-2"},null,8,["icon"]),n("span",st,m(c.value.name),1)])):v("",!0)])])])}}},ot=A(nt,[["__scopeId","data-v-9b578344"]]),ct={class:"s-group"},rt={class:"text-grey my-3"},pt={__name:"TransactionGroup",props:{group:Object},setup(a){const t=C(),e=s=>{t.push({name:"transactions.edit",params:{id:s.id}})};return(s,o)=>{const c=P("ripple");return u(),_("div",ct,[n("div",rt,m(a.group.date),1),(u(!0),_(j,null,I(a.group.transactions,l=>S((u(),O(ot,{class:"py-1",t:l,onClick:d=>e(l)},null,8,["t","onClick"])),[[c]])),256))])}}},it={key:0,class:"mt-8 h-3 text-center"},ft={__name:"TheBottomLazyLoading",props:{show:{type:Number,default:100},load:{type:Number,default:100},enable:{type:Boolean,default:!1}},emits:["load"],setup(a,{emit:t}){const e=a,s=t,o=B(),c=h(()=>o.offsetTopPercent>=e.show&&o.offsetTop>0),l=h(()=>c.value||o.offsetTop>0&&o.offsetTopPercent>=e.load);return $(l,d=>{d===!0&&e.enable&&s("load")}),(d,g)=>{const r=y("v-progress-circular");return c.value&&a.enable?(u(),_("div",it,[i(r,{indeterminate:""})])):v("",!0)}}},ht=M("transaction/index",{state:()=>({meta:{},transactionsLoading:!0,isEmptyData:!1,isLoadLock:!1,isAccessLazyLoad:!1}),getters:{currentNumberPage:a=>{var t;return((t=a.meta)==null?void 0:t.current_page)??1},nextNumberPage(){return this.currentNumberPage+1}},actions:{async firstLoadTransactions(a){const e=Object.assign({include:["type","account","currency","category","transfer_transaction.type","transfer_transaction.account","transfer_transaction.currency","transfer_transaction.category"].join(","),page:1,sort:"-transaction_at,-id"},a),s=await w(e);this.isAccessLazyLoad=F(s.data.data),T(this,s)},async lazyLoadTransactions(a={}){if(this.isLoadLock)return;const t=["type","account","currency","category","transfer_transaction.type","transfer_transaction.account","transfer_transaction.currency","transfer_transaction.category"];this.transactionsLoading=!0,this.isLoadLock=!0;try{const e=Object.assign({include:t.join(","),page:this.nextNumberPage,sort:"-transaction_at,-id"},a),s=await w(e);T(this,s)}finally{this.transactionsLoading=!1,this.isLoadLock=!1}},reset(){this.isEmptyData=!1,this.isAccessLazyLoad=!1}}});async function w(a){return await E.query().setUpdateMode(V).setParams(a).get()}function T(a,t){a.meta=t.data.meta,a.isEmptyData=G(t.data.data)}function yt(a){return Object.values(a.reduce(ut,{}))}function ut(a,t){const e=t.transaction_at_date;return R(a[e])&&(a[e]={date:t.transaction_at_date,timestamp:t.transaction_at_timestamp,transactions:[]}),a[e].transactions.push(t),a}export{ft as _,pt as a,yt as t,ht as u};