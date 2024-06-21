import{A as G,n as H,o as c,d as f,t as w,j as h,m as k,q as J,b,_ as D,s as E,r as n,w as i,k as e,f as K,a as l,e as V,p as L,g as P,c as y,x as Q,F,y as B,z as X,l as Y,M as Z}from"./index-B9rgIAwP.js";import{t as R}from"./functions-DAvG65lt.js";import{A as tt,a as C,u as et,i as nt}from"./CurrenciesList-vb3s7GVf.js";import{u as z,a as O,_ as at,r as ot,b as st,c as it}from"./DialogComponent--Qhf6GOn.js";class ct extends G{getResource(){return"accounts"}static balanceTotal(){return new this().balanceTotal()}async balanceTotal(){return await this.get("/balance-total")}}var W=H({name:"Vue3Autocounter",interval:null,props:{startAmount:{type:Number,default:0},endAmount:{type:Number,default:0,required:!0},duration:{type:Number,default:3,validator(t){return t>=1}},autoinit:{type:Boolean,default:!0},prefix:{type:String,default:""},suffix:{type:String,default:""},separator:{type:String,default:","},decimalSeparator:{type:String,default:"."},decimals:{type:Number,default:0,validator(t){return t>=0}}},data(){return{timestamp:0,startTimestamp:0,currentAmount:0,currentStartAmount:0,currentDuration:0,paused:!1,remaining:0,animationFrame:0}},mounted(){this.currentAmount=this.startAmount,this.currentStartAmount=this.startAmount,this.currentDuration=this.duration*1e3,this.remaining=this.duration*1e3,this.autoinit?this.start():this.paused=!0,this.$emit("mounted")},unmounted(){this.cancelAnimation()},watch:{startAmount(){this.reset()},endAmount(){this.reset()},duration(){this.reset()}},computed:{isCountingUp(){return this.endAmount>this.startAmount},displayedAmount(){return`${this.prefix}${this.formatedAmount}${this.suffix}`},formatedAmount(){const t=/(\d+)(\d{3})/;let o=this.currentAmount.toFixed(this.decimals);o+="";let s=o.split("."),a=s[0],r=s.length>1?this.decimalSeparator+s[1]:"",u=!isNaN(parseFloat(this.separator));if(this.separator&&!u)for(;t.test(a);)a=a.replace(t,"$1"+this.separator+"$2");return a+r}},methods:{start(){this.cancelAnimation(),this.currentStartAmount=this.startAmount,this.startTimestamp=null,this.currentDuration=this.duration*1e3,this.paused=!1,this.animationFrame=window.requestAnimationFrame(this.counting)},pause(){this.paused||(this.cancelAnimation(),this.paused=!0)},resume(){this.paused&&(this.startTimestamp=null,this.currentDuration=+this.remaining,this.currentStartAmount=+this.currentAmount,this.animationFrame=window.requestAnimationFrame(this.counting),this.paused=!1)},reset(){this.paused=!1,this.startTimestamp=null,this.cancelAnimation(),this.currentAmount=this.startAmount,this.autoinit?this.start():this.paused=!0},counting(t){this.timestamp=t,this.startTimestamp||(this.startTimestamp=t);let o=t-this.startTimestamp;this.remaining=this.currentDuration-o,this.isCountingUp?(this.currentAmount=this.currentStartAmount+(this.endAmount-this.currentStartAmount)*(o/this.currentDuration),this.currentAmount=this.currentAmount>this.endAmount?this.endAmount:this.currentAmount):(this.currentAmount=this.currentStartAmount-(this.currentStartAmount-this.endAmount)*(o/this.currentDuration),this.currentAmount=this.currentAmount<this.endAmount?this.endAmount:this.currentAmount),o<this.currentDuration?this.animationFrame=window.requestAnimationFrame(this.counting):setTimeout(()=>{this.$emit("finished")},1e3)},cancelAnimation(){this.animationFrame&&window.cancelAnimationFrame(this.animationFrame)}}});function rt(t,o,s,a,r,u){return c(),f("span",null,w(t.displayedAmount),1)}W.render=rt;var ut=(()=>{const t=W;return t.install=o=>{o.component("Vue3Autocounter",t)},t})();const lt={__name:"AnimateCounter",props:{counter:{type:Number,required:!0},suffix:{type:String,default:""},prefix:{type:String,default:""},decimals:{type:Number,default:0}},emits:["finished"],setup(t,{emit:o}){const s=t,a=o,r=h(),u=h(),d=k(()=>s.counter);return J(d,(A,_)=>{r.value.reset(),u.value=_,r.value.start()}),(A,_)=>(c(),f(b(ut),{ref_key:"counter",ref:r,startAmount:u.value,endAmount:d.value,duration:1,prefix:t.prefix,suffix:t.suffix,separator:" ",decimalSeparator:",",decimals:t.decimals,autoinit:!0,onFinished:_[0]||(_[0]=x=>a("finished"))},null,8,["startAmount","endAmount","prefix","suffix","decimals"]))}},dt=t=>(L("data-v-e906803a"),t=t(),P(),t),mt=dt(()=>l("div",{class:"subheading font-weight-light text-grey mb-2"}," Статок ",-1)),_t={class:"text-h6 font-weight-light"},pt={__name:"TheWealthChart",setup(t){const o=h(["січ","лют","бер","квіт","трав","черв","лип","сер"]),s=h([200,675,410,390,310,460,250,240]),a=h(!1),r=h(0);E(u);async function u(){a.value=!0;try{const d=await ct.balanceTotal();r.value=d.data.data}finally{a.value=!1}}return(d,A)=>{const _=n("v-sparkline"),x=n("v-sheet"),m=n("v-progress-circular"),p=n("v-fade-transition"),v=n("v-card-text"),S=n("v-card");return c(),f(S,{class:"mt-8 mx-auto overflow-visible","max-width":"400"},{default:i(()=>[e(x,{class:"v-sheet--offset mx-auto",color:"cyan",elevation:"12","max-width":"calc(100% - 32px)",rounded:"lg"},{default:i(()=>[e(_,{"auto-draw":"",labels:o.value,"model-value":s.value,color:"white","line-width":"2",padding:"16"},{label:i($=>[K(w($.value)+". ",1)]),_:1},8,["labels","model-value"])]),_:1}),e(v,{class:"pt-0"},{default:i(()=>[mt,l("div",_t,[e(lt,{counter:r.value,suffix:" ₴"},null,8,["counter"]),e(p,null,{default:i(()=>[a.value?(c(),f(m,{key:0,indeterminate:"",size:20,width:3,class:"ml-4"})):V("",!0)]),_:1})])]),_:1})]),_:1})}}},vt=D(pt,[["__scopeId","data-v-e906803a"]]),ht={class:"d-flex justify-space-between"},ft={class:"text-truncate"},gt={__name:"AccountItem",props:{account:{type:Object,required:!0,validator:t=>t instanceof tt},icon:String},setup(t){const o=t,s=k(()=>R(o.account.getSum(),{minimumFractionDigits:0}));return(a,r)=>{const u=n("v-avatar"),d=n("v-list-item");return c(),f(d,{to:{name:"accounts.show",params:{id:t.account.id}},class:"s-list-item"},{prepend:i(()=>[e(u,{class:"s-handle-sorting-account-item",icon:t.icon,color:"green"},null,8,["icon"])]),title:i(()=>[l("div",ht,[l("div",ft,w(t.account.name),1),l("div",null,[l("span",null,w(s.value),1)])])]),_:1},8,["to"])}}},At=D(gt,[["__scopeId","data-v-6a6b1879"]]),xt={class:"d-flex w-100 justify-space-between align-center"},yt={class:"s-handle-sorting-account-group"},bt={key:"0"},wt={key:"1"},St={__name:"AccountCategoryItem",props:{category:{type:Object,required:!0,validator:t=>t instanceof C}},setup(t){const o=t,s=k(()=>R(o.category.getSum(),{minimumFractionDigits:0}));return(a,r)=>{const u=n("v-icon"),d=n("v-expansion-panel-title"),A=n("v-list"),_=n("v-expansion-panel-text"),x=n("v-expansion-panel");return c(),f(x,null,{default:i(()=>[e(d,{"hide-actions":"",class:"s-panel-title"},{default:i(({expanded:m})=>[l("div",xt,[l("div",yt,[m?(c(),y("span",bt,[e(u,{icon:"mdi-menu-down"})])):(c(),y("span",wt,[e(u,{icon:"mdi-menu-right"})])),l("span",null,w(t.category.name),1)]),l("div",{class:Q({"text-grey":m})},[l("span",null,w(s.value),1)],2)])]),_:1}),e(_,{class:"s-custom-expansion-panel-text"},{default:i(()=>[e(A,null,{default:i(()=>[(c(!0),y(F,null,B(t.category.accounts,m=>(c(),f(At,{key:m.id,account:m,icon:t.category.icon},null,8,["account","icon"]))),128))]),_:1})]),_:1})]),_:1})}}},$t=D(St,[["__scopeId","data-v-c93a20d9"]]),Ct={key:1},kt={__name:"TheAccounts",setup(t){const o=z();h([]);const s=k(()=>C.findIn(o.categoriesIds)),a=h(!1);E(async()=>{await r()});async function r(){a.value=!0;try{const u=await C.loadMainPage();o.categoriesIds=u.data.data}finally{a.value=!1}}return(u,d)=>{const A=n("v-btn"),_=n("v-progress-linear"),x=n("v-expansion-panels");return c(),y("div",null,[e(A,{text:"load",onClick:r,class:"mb-4"}),a.value?(c(),f(_,{key:0,indeterminate:""})):V("",!0),s.value.length?(c(),y("div",Ct,[e(x,{multiple:"",modelValue:b(o).accountsPanelModel,"onUpdate:modelValue":d[0]||(d[0]=m=>b(o).accountsPanelModel=m)},{default:i(()=>[(c(!0),y(F,null,B(s.value,m=>(c(),f($t,{key:m.id,category:m},null,8,["category"]))),128))]),_:1},8,["modelValue"])])):V("",!0)])}}},It=t=>(L("data-v-69c3f97c"),t=t(),P(),t),Tt={class:"text-center mb-4"},Vt={class:"s-card-text-block"},Ft=It(()=>l("div",null,"Тип рахунку",-1)),Dt={__name:"TheCreateAccount",emits:["accountSave","dialogClose"],setup(t,{emit:o}){const s=o;et();const a=O(),r=z(),u=h(),{check:d}=st(u),A=[ot];async function _(){await d()&&(s("accountSave"),x(),await a.saveAccount())}function x(){const p=a.account.getRelation("category");r.addCategoryId(p)}function m(p){a.createAccountSum(p)}return(p,v)=>{const S=n("v-avatar"),$=n("v-text-field"),I=n("v-divider"),N=n("v-form"),q=n("v-card-text"),U=n("v-spacer"),T=n("v-btn"),M=n("v-card-actions"),j=n("v-card");return c(),f(j,{"prepend-icon":"mdi-credit-card-plus-outline",title:"Додати рахунок"},{default:i(()=>[e(q,null,{default:i(()=>[l("div",Tt,[e(S,{size:"x-large",icon:"mdi-cash",color:"green"})]),b(a).account?(c(),f(N,{key:0,ref_key:"form",ref:u},{default:i(()=>[e($,{autofocus:"",label:"Назва рахунку",modelValue:b(a).account.name,"onUpdate:modelValue":v[0]||(v[0]=g=>b(a).account.name=g),rules:A},null,8,["modelValue"]),l("div",Vt,[l("div",null,[Ft,l("div",null,w(b(a).account.category.name),1)]),e(I)]),e(at,{"account-sums":b(a).sums,"is-create-first":!0,onCreatedAccountSum:m},null,8,["account-sums"])]),_:1},512)):V("",!0)]),_:1}),e(I),e(M,null,{default:i(()=>[e(U),e(T,{text:"Відміна",variant:"plain",onClick:v[1]||(v[1]=g=>p.$emit("dialogClose"))}),e(T,{color:"primary",text:"Зберегти",variant:"tonal",onClick:_})]),_:1})]),_:1})}}},Nt=D(Dt,[["__scopeId","data-v-69c3f97c"]]),qt={class:"text-center"},Ut={class:"d-flex flex-column align-center justify-center fill-height"},Mt={class:"text-center"},jt={__name:"TheAddAccount",setup(t){const o=O(),s=h(!1),a=h(!1),r=h(!1),u=h([]),d=k(()=>C.findIn(u.value));async function A(){a.value=!0;try{const p=await C.query().setUpdateMode(Z).get();u.value=p.data.data}finally{a.value=!1}}const _=async()=>{nt(d.value)&&await A(),r.value=!0};function x(p){o.resetAccountSum(),o.createAccount(p),s.value=!0}function m(){r.value=!1,s.value=!1}return(p,v)=>{const S=n("v-icon"),$=n("v-btn"),I=n("v-sheet"),N=n("v-col"),q=n("v-row"),U=n("v-container"),T=n("v-card"),M=n("v-bottom-sheet"),j=X("ripple");return c(),y(F,null,[l("div",qt,[e($,{variant:"outlined",loading:a.value,onClick:_},{default:i(()=>[e(S,{icon:"mdi-wallet-plus-outline"})]),_:1},8,["loading"])]),e(M,{modelValue:r.value,"onUpdate:modelValue":v[0]||(v[0]=g=>r.value=g)},{default:i(()=>[e(T,null,{default:i(()=>[e(U,null,{default:i(()=>[e(q,null,{default:i(()=>[(c(!0),y(F,null,B(d.value,g=>(c(),f(N,{cols:"6"},{default:i(()=>[Y((c(),f(I,{border:"",rounded:"lg",height:"100",class:"w-100 bg-grey-lighten-3",onClick:Bt=>x(g.id)},{default:i(()=>[l("div",Ut,[e(S,{class:"mb-1",icon:g.icon},null,8,["icon"]),l("div",Mt,w(g.name),1)])]),_:2},1032,["onClick"])),[[j]])]),_:2},1024))),256))]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(it,{modelValue:s.value,"onUpdate:modelValue":v[2]||(v[2]=g=>s.value=g)},{default:i(()=>[e(Nt,{onAccountSave:m,onDialogClose:v[1]||(v[1]=g=>s.value=!1)})]),_:1},8,["modelValue"])],64)}}},zt={__name:"Index",setup(t){return(o,s)=>(c(),y("div",null,[e(vt,{class:"mb-5"}),e(kt,{class:"mb-5"}),e(jt)]))}};export{zt as default};
