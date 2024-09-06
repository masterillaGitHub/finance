import{n as U,r as t,o as l,d as g,w as n,k as e,f as L,c as _,t as E,b as s,F as O,z as B,U as me,s as ae,_ as Z,j as $,B as q,q as le,V as fe,a as w,e as j,W as xe,X as se,p as ye,g as ge,Y as Ce,Z as he,$ as Te,I as ke,S as ce,T as G,J as Se,C as K,a0 as ie,i as Ve,a1 as Ie,Q as be}from"./index-Cab78JjM.js";import{t as $e,i as we,c as Y,a as A,d as Ae,S as De,e as Ee,f as Ue,s as Ne,b as Pe,g as Me,h as Oe}from"./form.store-jnwQffVY.js";import{h as X,j as ee,A as te,a as W,C as ne}from"./entities-1lpM-knM.js";import{a as ue,_ as re}from"./CurrenciesList-Cizxm4xI.js";import{u as de}from"./currency_decimal_convert-KKbzYINo.js";function Re(p,o){const a=$e(p);if(!we(a))throw new RangeError("Invalid time value");let u="";const c="-",d=":";{const i=Y(a.getDate(),2),v=Y(a.getMonth()+1,2);u=`${Y(a.getFullYear(),4)}${c}${v}${c}${i}`}{const i=Y(a.getHours(),2),v=Y(a.getMinutes(),2),x=Y(a.getSeconds(),2);u=`${u}${u===""?"":" "}${i}${d}${v}${d}${x}`}return u}const je={key:"0",class:"text-grey"},Ye={key:"1"},Be={__name:"TheTypeStep",setup(p){const o=A(),a=U({get:()=>o.typeId,set:c=>o.typeId=c});async function u(){o.categoryId=null,o.accountTransferId=null,await ae(),o.nextStep()}return(c,d)=>{const i=t("v-col"),v=t("v-fade-transition"),x=t("v-row"),C=t("v-expansion-panel-title"),S=t("v-chip"),r=t("v-chip-group"),h=t("v-expansion-panel-text"),m=t("v-expansion-panel");return l(),g(m,{value:s(Ae)},{default:n(()=>[e(C,{"hide-actions":""},{default:n(({expanded:f})=>[e(x,{"no-gutters":""},{default:n(()=>[e(i,{class:"d-flex justify-start",cols:"4"},{default:n(()=>[L("Тип:")]),_:1}),e(i,{class:"text--secondary text-right",cols:"8"},{default:n(()=>[e(v,{"leave-absolute":""},{default:n(()=>[f?(l(),_("span",je,"Вкажіть тип транзакції")):(l(),_("span",Ye,E(s(o).getType.name),1))]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:1}),e(h,null,{default:n(()=>[e(r,{mandatory:"",modelValue:a.value,"onUpdate:modelValue":d[0]||(d[0]=f=>a.value=f)},{default:n(()=>[(l(!0),_(O,null,B(s(me),f=>(l(),g(S,{key:f.id,label:"",variant:"text",text:f.name,value:f.id,onClick:u},null,8,["text","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["value"])}}},_e=p=>(ye("data-v-4db768da"),p=p(),ge(),p),Le={key:0},Fe={key:1},ze={key:0,class:"text-truncate"},Ge={key:1,class:"text-grey"},qe={class:"ml-1"},Xe={key:1},Ze={key:2},He={class:"s-parent-wrapper"},Je=_e(()=>w("div",{class:"text-grey text-subtitle-2"},"Батьківська категорія",-1)),Qe=_e(()=>w("div",{class:"text-grey text-subtitle-2"},"Підкатегорії",-1)),We={__name:"TheCategoryStep",setup(p){const o=A(),a=$(!1),u=$(!1),c=$(),d=$(),i=$(new X),v=U(()=>o.typeId),x=U(()=>X.findLoaded().filter(T=>!!T.user_id));q(C),le(v,C);async function C(){m(),u.value=!0;try{await ae(),await X.loadCategoryStep(o.typeId)}finally{u.value=!1}}function S(T){if(T.isChildren()){a.value=!0,i.value=T;return}f(T.id),D()}function r(T){f(T.id),D()}function h(){a.value=!1}function m(){fe(o.transactionId)&&f(),c.value=!1,d.value=!1,i.value=new X,a.value=!1}function f(T=null){o.categoryId=T}function D(){o.nextStep()}return(T,V)=>{const b=t("v-fade-transition"),P=t("v-col"),M=t("v-icon"),I=t("v-row"),k=t("v-expansion-panel-title"),F=t("v-progress-linear"),H=t("v-badge"),R=t("v-chip"),z=t("v-chip-group"),J=t("v-btn"),Q=t("v-expansion-panel-text"),N=t("v-expansion-panel");return l(),g(N,{value:s(De)},{default:n(()=>[e(k,null,{default:n(({expanded:y})=>[e(I,{"no-gutters":""},{default:n(()=>[e(P,{cols:"4"},{default:n(()=>[e(b,{"leave-absolute":""},{default:n(()=>[s(o).typeId===1?(l(),_("span",Le,"На категорію:")):(l(),_("span",Fe,"З категорії:"))]),_:1})]),_:1}),e(P,{class:"text--secondary text-right",cols:"8"},{default:n(()=>[e(b,{"leave-absolute":""},{default:n(()=>[s(o).getCategory.id?(l(),_("div",ze,[e(M,{icon:s(o).getCategory.icon},null,8,["icon"]),L(" "+E(s(o).getCategory.name),1)])):(l(),_("div",Ge,"Вкажіть категорію"))]),_:1})]),_:1})]),_:1})]),actions:n(()=>[w("div",qe,[s(o).isCategoryValid?j("",!0):(l(),g(M,{key:0,color:"error",icon:"mdi-alert-circle"}))])]),_:1}),e(Q,{class:"s-panel-text"},{default:n(()=>[e(b,{mode:"out-in"},{default:n(()=>[u.value?(l(),g(F,{key:0,indeterminate:""})):!a.value&&!u.value?(l(),_("div",Xe,[w("button",{onClick:C},"Push"),e(z,{mandatory:"",column:"",modelValue:c.value,"onUpdate:modelValue":V[0]||(V[0]=y=>c.value=y)},{default:n(()=>[(l(!0),_(O,null,B(x.value,y=>(l(),g(R,{key:y.id,label:"",variant:"text","prepend-icon":y.icon,text:y.name,value:y.id,onClick:ve=>S(y)},xe({_:2},[y.isChildren()?{name:"append",fn:n(()=>[e(H,{content:y.childrenCount(),inline:"",color:"transparent"},null,8,["content"])]),key:"0"}:void 0]),1032,["prepend-icon","text","value","onClick"]))),128))]),_:1},8,["modelValue"])])):(l(),_("div",Ze,[w("div",He,[w("div",null,[Je,e(z,{mandatory:"",column:"",modelValue:d.value,"onUpdate:modelValue":V[2]||(V[2]=y=>d.value=y)},{default:n(()=>[e(R,{label:"",variant:"text",text:i.value.name,value:i.value.id,onClick:V[1]||(V[1]=y=>r(i.value))},null,8,["text","value"])]),_:1},8,["modelValue"])]),e(J,{icon:"mdi-arrow-up-left",variant:"text",onClick:se(h,["stop"])})]),Qe,e(z,{mandatory:"",column:"",modelValue:d.value,"onUpdate:modelValue":V[3]||(V[3]=y=>d.value=y)},{default:n(()=>[(l(!0),_(O,null,B(i.value.children,y=>(l(),g(R,{key:y.id,label:"",variant:"text",text:y.name,value:y.id,onClick:ve=>r(y)},null,8,["text","value","onClick"]))),128))]),_:1},8,["modelValue"])]))]),_:1})]),_:1})]),_:1},8,["value"])}}},Ke=Z(We,[["__scopeId","data-v-4db768da"]]),et={key:0,class:"text-grey"},tt={key:1,class:"text-truncate"},nt={key:2},ot={__name:"TheTagStep",emits:["done"],setup(p,{emit:o}){const a=A(),u=$(!1),c=U(()=>ee.findLoaded()),d=U(()=>a.getTags.map(x=>x.name).join(", "));q(i);async function i(){await v()}async function v(){u.value=!0;try{await ee.sync({"filter[user_id]":"auth"})}finally{u.value=!1}}return(x,C)=>{const S=t("v-col"),r=t("v-fade-transition"),h=t("v-row"),m=t("v-expansion-panel-title"),f=t("v-chip"),D=t("v-chip-group"),T=t("v-expansion-panel-text"),V=t("v-expansion-panel");return l(),g(V,{value:s(Ee)},{default:n(()=>[e(m,{"hide-actions":""},{default:n(()=>[e(h,{"no-gutters":""},{default:n(()=>[e(S,{class:"d-flex justify-start",cols:"4"},{default:n(()=>[L("Теги:")]),_:1}),e(S,{class:"text--secondary text-right",cols:"8"},{default:n(()=>[e(r,{"leave-absolute":""},{default:n(()=>[s(a).getTags.length===0?(l(),_("div",et,"Вкажіть теги")):s(a).getTags.length<=3?(l(),_("div",tt,E(d.value),1)):(l(),_("div",nt,"вибрано "+E(s(a).getTags.length)+" тегів",1))]),_:1})]),_:1})]),_:1})]),_:1}),e(T,{class:"s-panel-text"},{default:n(()=>[e(D,{multiple:"",column:"",modelValue:s(a).tagIds,"onUpdate:modelValue":C[0]||(C[0]=b=>s(a).tagIds=b)},{default:n(()=>[(l(!0),_(O,null,B(c.value,b=>(l(),g(f,{key:b.id,label:"",variant:"text",text:b.name,value:b.id},null,8,["text","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["value"])}}},at=Z(ot,[["__scopeId","data-v-01b37451"]]),lt={__name:"TheDateStep",emits:["done"],setup(p,{emit:o}){const a=A(),u=$(),c=$(!1),d=$(a.date),i=$();Ce(()=>{u.value=a.getDate,a.getDate==="today"?i.value="Сьогодні":a.getDate==="yesterday"?i.value="Вчора":a.getDate==="tomorrow"?i.value="Завтра":(u.value="custom",i.value=a.getDate)});function v(){a.date=Ne(new Date,1),r()}function x(){a.date=new Date,r()}function C(){c.value=!0}function S(){a.date=d.value,c.value=!1,r()}function r(){a.nextStep()}return(h,m)=>{const f=t("v-col"),D=t("v-fade-transition"),T=t("v-row"),V=t("v-expansion-panel-title"),b=t("v-date-picker"),P=t("v-divider"),M=t("v-spacer"),I=t("v-btn"),k=t("v-card-actions"),F=t("v-card"),H=t("v-dialog"),R=t("v-chip"),z=t("v-chip-group"),J=t("v-expansion-panel-text"),Q=t("v-expansion-panel");return l(),g(Q,{value:s(Ue)},{default:n(()=>[e(V,{"hide-actions":""},{default:n(({expanded:N})=>[e(T,{"no-gutters":""},{default:n(()=>[e(f,{class:"d-flex justify-start",cols:"4"},{default:n(()=>[L("Дата:")]),_:1}),e(f,{class:"text--secondary text-right",cols:"8"},{default:n(()=>[e(D,{"leave-absolute":""},{default:n(()=>[w("span",null,E(i.value),1)]),_:1})]),_:1})]),_:1})]),_:1}),e(J,null,{default:n(()=>[e(H,{modelValue:c.value,"onUpdate:modelValue":m[2]||(m[2]=N=>c.value=N),"max-width":"600"},{default:n(()=>[e(F,null,{default:n(()=>[e(b,{modelValue:d.value,"onUpdate:modelValue":m[0]||(m[0]=N=>d.value=N),width:"100%",color:"primary"},null,8,["modelValue"]),e(P),e(k,null,{default:n(()=>[e(M),e(I,{text:"Відміна",variant:"plain",onClick:m[1]||(m[1]=N=>c.value=!1)}),e(I,{color:"primary",text:"Вибрати",variant:"tonal",onClick:S})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(z,{mandatory:"",modelValue:u.value,"onUpdate:modelValue":m[3]||(m[3]=N=>u.value=N)},{default:n(()=>[e(R,{label:"",variant:"text",text:"Вчора",value:"yesterday",onClick:v}),e(R,{label:"",variant:"text",text:"Сьогодні",value:"today",onClick:x}),e(R,{label:"",variant:"text",text:"Вибрати",value:"custom",onClick:C})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["value"])}}},st={key:0},ct={key:1},it={key:0,class:"text-truncate"},ut={key:1,class:"text-grey"},rt={class:"ml-1"},dt={key:0},_t={key:1},pt={class:"s-back-button-wrapper"},vt={__name:"TheAccountStep",props:he({account:{type:Object,default:new te,validator:p=>p instanceof te},isValid:{type:Boolean,required:!0},isTransfer:{type:Boolean,default:!1},stepName:{type:String,default:Pe}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(p){const o=p,a=A(),u=Te(p,"modelValue");U(()=>a.typeId),ke(()=>{o.isTransfer&&(u.value=null)});const c=$(!1),d=U(()=>W.findLoaded()),i=$(null),v=$(new W);function x(S){v.value=S,c.value=!0}function C(){c.value=!1}return(S,r)=>{const h=t("v-fade-transition"),m=t("v-col"),f=t("v-icon"),D=t("v-row"),T=t("v-expansion-panel-title"),V=t("v-chip"),b=t("v-chip-group"),P=t("v-btn"),M=t("v-expansion-panel-text"),I=t("v-expansion-panel");return l(),g(I,{value:p.stepName},{default:n(()=>[e(T,{"disable-icon-rotate":""},{default:n(({expanded:k})=>[e(D,{"no-gutters":""},{default:n(()=>[e(m,{cols:"4"},{default:n(()=>[e(h,{"leave-absolute":""},{default:n(()=>[s(a).typeId===s(ce)||p.isTransfer?(l(),_("span",st,"На рахунок:")):(l(),_("span",ct,"З рахунку:"))]),_:1})]),_:1}),e(m,{class:"text--secondary text-right",cols:"8"},{default:n(()=>[e(h,{"leave-absolute":""},{default:n(()=>[p.account.id?(l(),_("div",it,[e(f,{icon:p.account.icon},null,8,["icon"]),L(" "+E(p.account.name),1)])):(l(),_("div",ut,"Вкажіть рахунок"))]),_:1})]),_:1})]),_:1})]),actions:n(()=>[w("div",rt,[p.isValid?j("",!0):(l(),g(f,{key:0,color:"error",icon:"mdi-alert-circle"}))])]),_:1}),e(M,{class:"s-panel-text"},{default:n(()=>[e(h,{mode:"out-in"},{default:n(()=>[c.value?(l(),_("div",_t,[w("div",pt,[e(P,{size:"small",text:"Назад",onClick:se(C,["stop"])})]),e(b,{mandatory:"",column:"",modelValue:u.value,"onUpdate:modelValue":r[2]||(r[2]=k=>u.value=k)},{default:n(()=>[(l(!0),_(O,null,B(v.value.accounts,k=>(l(),g(V,{key:k.id,label:"",variant:"text","prepend-icon":k.icon,text:k.name,value:k.id,onClick:r[1]||(r[1]=F=>s(a).nextStep())},null,8,["prepend-icon","text","value"]))),128))]),_:1},8,["modelValue"])])):(l(),_("div",dt,[e(b,{mandatory:"",column:"",modelValue:i.value,"onUpdate:modelValue":r[0]||(r[0]=k=>i.value=k)},{default:n(()=>[(l(!0),_(O,null,B(d.value,k=>(l(),g(V,{key:k.id,label:"","prepend-icon":k.icon,variant:"text",text:k.name,value:k.id,onClick:F=>x(k)},null,8,["prepend-icon","text","value","onClick"]))),128))]),_:1},8,["modelValue"])]))]),_:1})]),_:1})]),_:1},8,["value"])}}},oe=Z(vt,[["__scopeId","data-v-8e72374d"]]),mt={__name:"TheAccountsStepsChoice",setup(p){const o=A();return q(async()=>{await W.loadTransactionPage()}),(a,u)=>(l(),_(O,null,[e(oe,{modelValue:s(o).accountId,"onUpdate:modelValue":u[0]||(u[0]=c=>s(o).accountId=c),account:s(o).getAccount,"is-valid":s(o).isAccountValid},null,8,["modelValue","account","is-valid"]),s(o).typeId===s(G)?(l(),g(oe,{key:0,modelValue:s(o).toAccountId,"onUpdate:modelValue":u[1]||(u[1]=c=>s(o).toAccountId=c),account:s(o).getToAccount,"is-valid":s(o).isToAccountValid,"is-transfer":!0,"step-name":s(Me)},null,8,["modelValue","account","is-valid","step-name"])):j("",!0)],64))}},pe=Se("currencies",{state:()=>({loading:!1}),getters:{currencies:()=>ne.findLoaded()},actions:{async loadCurrencies(){if(this.currencies.length!==3){this.loading=!0;try{await ne.sync()}finally{this.loading=!1}}}}}),ft={key:"0",class:"text-grey"},xt={key:"1"},yt={class:"d-flex justify-end align-center pa-2"},gt={class:"text-h5"},Ct={__name:"TheToAmount",setup(p){const{toDecimal:o,toPlus:a,toInteger:u}=de(),c=A(),d=pe(),i=$(!1),v=U(()=>o(c.toAmount));q(()=>{x(),C()});function x(){K(c.toAmount)&&(c.toAmount=a(c.amount))}function C(){K(c.toCurrencyId)&&(c.toCurrencyId=c.currencyId)}return(S,r)=>{const h=t("v-col"),m=t("v-fade-transition"),f=t("v-row"),D=t("v-expansion-panel-title"),T=t("v-icon"),V=t("v-btn"),b=t("v-menu"),P=t("v-expansion-panel-text"),M=t("v-expansion-panel");return l(),g(M,{value:s(Oe)},{default:n(()=>[e(D,{"hide-actions":""},{default:n(({expanded:I})=>[e(f,{"no-gutters":""},{default:n(()=>[e(h,{class:"d-flex justify-start",cols:"4"},{default:n(()=>[L("Переказати:")]),_:1}),e(h,{class:"text--secondary text-right",cols:"8"},{default:n(()=>[e(m,{"leave-absolute":""},{default:n(()=>[I?(l(),_("span",ft,"Вкажіть суму зарахування")):(l(),_("span",xt,E(v.value)+" "+E(s(c).getToCurrency.symbol),1))]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:1}),e(P,null,{default:n(()=>[w("div",yt,[w("div",{class:"text-right d-flex align-center",onClick:r[0]||(r[0]=I=>i.value=!0)},[w("span",gt,E(v.value),1),s(c).isAmountValid?j("",!0):(l(),g(T,{key:0,color:"error",icon:"mdi-alert-circle"}))]),e(b,null,{activator:n(({props:I})=>[e(V,ie({variant:"flat",class:"s-btn"},I,{"append-icon":"mdi-chevron-down"}),{default:n(()=>[e(T,{icon:s(c).getToCurrency.icon},null,8,["icon"])]),_:2},1040)]),default:n(()=>[e(ue,{currencies:s(d).currencies,onSelected:r[1]||(r[1]=I=>s(c).toCurrencyId=I.id)},null,8,["currencies"])]),_:1})]),e(re,{modelValue:i.value,"onUpdate:modelValue":r[2]||(r[2]=I=>i.value=I),"start-sum":v.value,onDone:r[3]||(r[3]=I=>s(c).toAmount=s(u)(I))},null,8,["modelValue","start-sum"])]),_:1})]),_:1},8,["value"])}}},At={__name:"TheTransactionSteps",setup(p){const o=A();return(a,u)=>{const c=t("v-expansion-panels");return l(),_("div",null,[e(c,{modelValue:s(o).openStep,"onUpdate:modelValue":u[0]||(u[0]=d=>s(o).openStep=d),variant:"accordion",elevation:"0"},{default:n(()=>[e(Be),e(mt),s(o).typeId!==s(G)?(l(),g(Ke,{key:0})):j("",!0),s(o).typeId===s(G)?(l(),g(Ct,{key:1})):j("",!0),e(at),e(lt)]),_:1},8,["modelValue"])])}}},Dt={__name:"TheSaveButton",setup(p){const o=A(),a=Ve(),u=$(!1);async function c(){if(o.isEnabledValidate=!0,!!o.isValid){u.value=!0;try{await d(),await a.push({name:"transactions.index"})}finally{u.value=!1}}}async function d(){const i=o.getTransaction;i.currency=o.currencyId,i.type=o.typeId,i.account=o.accountId,i.category=o.categoryId,i.setRelation("tags",o.tagIds),i.amount=o.amount,i.note=null,i.transaction_at=Re(o.date),o.typeId===G&&(i.category=Ie,i.to_account=o.toAccountId,i.to_currency=o.toCurrencyId,i.to_amount=o.toAmount),await i.save()}return(i,v)=>{const x=t("v-btn");return l(),_("div",null,[e(x,{loading:u.value,color:"primary",rounded:"t-0 b-xl",size:"x-large",text:"Continue",variant:"flat",block:"",onClick:c},null,8,["loading"])])}}},ht={class:"d-flex justify-end align-center pa-2"},Tt={class:"text-h3"},kt={__name:"TheCreateAmount",props:{amount:{type:[String,Number],default:"0"}},emits:["onClickOnAmount"],setup(p,{emit:o}){const a=o,u=A(),c=pe();q(d);async function d(){await c.loadCurrencies()}return(i,v)=>{const x=t("v-icon"),C=t("v-btn"),S=t("v-menu");return l(),_("div",ht,[w("div",{class:"text-right mr-4 d-flex align-center",onClick:v[0]||(v[0]=r=>a("onClickOnAmount"))},[w("span",Tt,E(p.amount),1),s(u).isAmountValid?j("",!0):(l(),g(x,{key:0,color:"error",icon:"mdi-alert-circle"}))]),e(S,null,{activator:n(({props:r})=>[e(C,ie({variant:"outlined",class:"s-btn"},r,{"append-icon":"mdi-chevron-down",loading:s(c).loading}),{default:n(()=>[e(x,{icon:s(u).getCurrency.icon},null,8,["icon"])]),_:2},1040,["loading"])]),default:n(()=>[e(ue,{currencies:s(c).currencies,onSelected:v[1]||(v[1]=r=>s(u).currencyId=r.id)},null,8,["currencies"])]),_:1})])}}},St=Z(kt,[["__scopeId","data-v-2875c90d"]]),Et={__name:"TheAmount",props:{isCalcShow:{type:Boolean,default:!1}},setup(p){const o=p,a=A(),{toInteger:u,toMinus:c,toPlus:d,toDecimal:i}=de(),v=$(o.isCalcShow),x=U(()=>d(i(a.amount))),C=U(()=>a.typeId);le(C,()=>{a.amount=S(a.amount)});const S=h=>{switch(a.typeId){case be:case G:return c(h);case ce:return d(h)}},r=h=>{a.amount=S(u(h))};return(h,m)=>(l(),_(O,null,[e(St,{amount:x.value,onOnClickOnAmount:m[0]||(m[0]=f=>v.value=!0)},null,8,["amount"]),e(re,{modelValue:v.value,"onUpdate:modelValue":m[1]||(m[1]=f=>v.value=f),"start-sum":x.value,onDone:m[2]||(m[2]=f=>r(f))},null,8,["modelValue","start-sum"])],64))}};export{Et as _,At as a,Dt as b};