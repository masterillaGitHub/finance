import{u as B}from"./bank.create.store-BG031D8r.js";import{a7 as q,C as z,_ as G,i as g,m as M,y as O,r as a,o as d,d as k,w as u,j as c,b as x,c as A,F as V,x as F,a as _,t as w,e as $,f as E,ck as H,bA as Q}from"./index-BrXRMGmX.js";import{r as U,u as W}from"./form_validate-B7tBGhu8.js";import{a as D}from"./Model-C7B2fcAn.js";import{u as X}from"./currency_decimal_convert-KKbzYINo.js";import{B as Y}from"./BankAccountResource-BUmJl-Z3.js";class Z extends q{getResource(){return"bank-manager"}static getAccounts(e){return new this().getAccounts(e)}async getAccounts(e){return await this.params({bankId:e}).get("/get-accounts")}}const j=z("bank-accounts/mono/create",{state:()=>({accountsLoading:!1,accounts:[],selectedAccountsIds:[]}),getters:{getAccounts:t=>t.accounts.map(e=>ee(e))},actions:{async loadAccountsByBankId(t){this.accountsLoading=!0;try{const e=await Z.getAccounts(t);this.accounts=e.data.data}finally{this.accountsLoading=!1}},async saveAccounts(t){const e=this.selectedAccountsIds.map(n=>this.accounts.find(s=>s.id===n)).map(n=>({idOrigin:n.id,name:`Mono ${n.currency}, ${n.type}`,currencyCode:n.currencyCode,creditLimit:n.creditLimit}));console.log("accounts",e),await Y.store({bankId:t,accounts:e})}}}),ee=t=>{const{toDecimal:e}=X(),n=t.creditLimit>0;let s=t.balance,o=0;return n&&(s=t.balance-t.creditLimit,o=t.balance),{id:t.id,isCredit:n,balance:D(e(s),t.currency),availableBalance:D(e(o),t.currency),maskedPan:t.maskedPan,name:`Mono ${t.currency}, ${t.type}`}},te={class:"d-flex w-100 justify-space-between"},ne={class:""},oe={class:"text-right"},ae={key:0,class:"text-subtitle-2"},se={__name:"TheAccountsStep",setup(t,{expose:e}){const n=B(),s=j(),o=g();g(!1);const p=M(()=>s.getAccounts.map(r=>({id:r.id,label:JSON.stringify({...r})}))),i=W(o);O(async()=>{await s.loadAccountsByBankId(n.bankId)});const l=(r,f)=>JSON.parse(r)[f]??"",m=r=>l(r,"availableBalance"),v=r=>l(r,"balance"),b=r=>l(r,"maskedPan"),y=r=>l(r,"name"),L=r=>l(r,"isCredit");return e({formCheck:()=>i.check()}),(r,f)=>{const T=a("v-progress-linear"),C=a("v-checkbox"),J=a("v-form");return d(),k(J,{ref_key:"formAccountsRef",ref:o},{default:u(()=>[c(T,{active:x(s).accountsLoading,indeterminate:""},null,8,["active"]),(d(!0),A(V,null,F(p.value,(I,K)=>(d(),k(C,{key:I.id,multiple:"",modelValue:x(s).selectedAccountsIds,"onUpdate:modelValue":f[0]||(f[0]=h=>x(s).selectedAccountsIds=h),value:I.id,label:I.label,rules:[x(U)],"hide-details":K+1<p.value.length,class:"s-checkbox mb-4"},{label:u(({label:h})=>[_("div",te,[_("div",ne,[_("div",null,w(y(h)),1),_("div",null,w(b(h)),1)]),_("div",oe,[_("div",null,w(v(h)),1),L(h)?(d(),A("div",ae," Доступно: "+w(m(h)),1)):$("",!0)])])]),_:2},1032,["modelValue","value","label","rules","hide-details"]))),128))]),_:1},512)}}},ce=G(se,[["__scopeId","data-v-f013be7a"]]);function re(t){const e=async()=>(await t.value.validate()).length===0,n=()=>t.value.resetValidation();return{validate:e,resetValidation:n,check:async()=>(n(),await e())}}const le={__name:"TheTokenStep",setup(t,{expose:e}){const n=B(),s=g(),o=[U],p=re(s);return e({formCheck:()=>p.check()}),(l,m)=>{const v=a("v-text-field");return d(),A(V,null,[m[1]||(m[1]=_("p",{class:"mb-4"},[E("Токен потрібно отримати за посиланням "),_("a",{href:"https://api.monobank.ua/",target:"_blank"},"https://api.monobank.ua/")],-1)),c(v,{label:"Token",rules:o,modelValue:x(n).token,"onUpdate:modelValue":m[0]||(m[0]=b=>x(n).token=b),ref_key:"tokenRef",ref:s},null,8,["modelValue"])],64)}}},ue={__name:"TheFinishStep",setup(t){const e=B(),n=j();return O(async()=>{await n.saveAccounts(e.bankId)}),(s,o)=>{const p=a("v-card-title"),i=a("v-card-text"),l=a("v-btn"),m=a("v-card-actions"),v=a("v-card");return d(),k(v,null,{default:u(()=>[c(p,null,{default:u(()=>o[0]||(o[0]=[E("Монобанк підключено")])),_:1}),c(i,null,{default:u(()=>o[1]||(o[1]=[_("ul",null,[_("li",null,"Встановлюємо зв'язки"),_("li",null,"Вантажимо історію транзакцій"),_("li",null,"Визначаємо категорії платежів"),_("li",null,"Оновлюємо графічки")],-1)])),_:1}),c(m,{class:"justify-center mt-5"},{default:u(()=>[c(l,{to:{name:"accounts.index"},variant:"tonal",text:"Готово"})]),_:1})]),_:1})}}},R=1,N=2,S=3,ie={__name:"Index",setup(t){const e=g(),n=g(),s=[R,N,S],o=g(1),p=async i=>{o.value===R&&!await e.value.formCheck()||o.value===N&&!await n.value.formCheck()||i()};return(i,l)=>{const m=a("v-stepper-item"),v=a("v-divider"),b=a("v-stepper-header"),y=a("v-stepper-window-item"),L=a("v-stepper-window"),P=a("v-stepper-actions"),r=a("v-stepper");return d(),k(r,{modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=f=>o.value=f)},{default:u(({prev:f,next:T})=>[c(b,null,{default:u(()=>[(d(),A(V,null,F(s,C=>(d(),A(V,{key:C},[c(m,{complete:o.value>C,value:C},null,8,["complete","value"]),C<S?(d(),k(v,{key:0})):$("",!0)],64))),64))]),_:1}),c(L,null,{default:u(()=>[c(y,{value:R},{default:u(()=>[c(le,{ref_key:"tokenComponentRef",ref:e},null,512)]),_:1}),c(y,{value:N},{default:u(()=>[c(ce,{ref_key:"accountsComponentRef",ref:n},null,512)]),_:1}),c(y,{value:S},{default:u(()=>[c(ue)]),_:1})]),_:1}),o.value<S?(d(),k(P,{key:0,"prev-text":"назад","next-text":"далі","onClick:next":C=>p(T),"onClick:prev":f},null,8,["onClick:next","onClick:prev"])):$("",!0)]),_:1},8,["modelValue"])}}},ke={__name:"Create",setup(t){const e=B(),n={mono:ie},s=M(()=>e.bankId),o=M(()=>{var i;const p=((i=H.find(l=>l.id===s.value))==null?void 0:i.template)??"";return n[p]});return(p,i)=>{const l=a("v-btn"),m=a("v-toolbar-title"),v=a("v-spacer"),b=a("v-toolbar"),y=a("v-card");return d(),k(y,{class:"fill-height"},{default:u(()=>[c(b,{color:"cyan-lighten-1"},{default:u(()=>[c(l,{to:{name:"banks.index"},icon:"mdi-arrow-left",variant:"text"}),c(m,null,{default:u(()=>i[0]||(i[0]=[E("Підключення")])),_:1}),c(v)]),_:1}),(d(),k(Q(o.value)))]),_:1})}}};export{ke as default};
