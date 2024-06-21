import{u as useShowStore}from"./show.store-BLD24Lg_.js";import{r as resolveComponent,o as openBlock,d as createBlock,w as withCtx,k as createVNode,_ as _export_sfc,j as ref,c as createElementBlock,a as createBaseVNode,t as toDisplayString,e as createCommentVNode,E as defineStore,s as onMounted,K as mergeProps,b as unref,m as computed,f as createTextVNode,F as Fragment,y as renderList,L as withModifiers,N as useDate,l as withDirectives,v as vShow,O as KeepAlive}from"./index-B9rgIAwP.js";import{g as isInteger,C as Currency,_ as _sfc_main$a}from"./CurrenciesList-vb3s7GVf.js";import"./functions-DAvG65lt.js";const _sfc_main$9={__name:"TheAppBar",setup(i){return useShowStore(),(e,t)=>{const l=resolveComponent("v-btn"),o=resolveComponent("v-spacer"),c=resolveComponent("v-app-bar");return openBlock(),createBlock(c,{elevation:2,density:"compact"},{prepend:withCtx(()=>[createVNode(l,{icon:"mdi-arrow-left",to:{name:"transactions.index"}})]),default:withCtx(()=>[createVNode(o)]),_:1})}}},_hoisted_1$6={class:"container"},_hoisted_2$5={key:0,class:"calc-text"},_hoisted_3$3={class:"keyboard"},_sfc_main$8={__name:"Calculator",props:{value:{type:Number,default:0},displayShow:{type:Boolean,default:!0}},emits:{onResult:isInteger},setup(__props,{expose:__expose,emit:__emit}){const props=__props,emit=__emit,calcValue=ref(props.value.toString()),isCalcMode=ref(!1),number=i=>{calcValue.value==="NaN"&&(calcValue.value=""),calcValue.value==="0"&&(calcValue.value=""),calcValue.value+=i.trim()},operation=value=>{const lastValue=getLastValue(calcValue.value);!isNaN(lastValue)&&value==="="?calcValue.value=eval(calcValue.value).toString():value==="AC"?calcValue.value="0":value==="DEL"?(calcValue.value=removeLastSymbol(calcValue.value),calcValue.value.length===0&&(calcValue.value="0")):(["+","-","*","/"].includes(lastValue)&&(calcValue.value=removeLastSymbol(calcValue.value),calcValue.value+=value),isNaN(lastValue)||(calcValue.value+=value))},pushEqual=()=>{isCalcMode.value=!1,operation("=")},done=()=>{emit("onResult",parseFloat(calcValue.value))},enabled=()=>{isCalcMode.value=!0},getLastValue=i=>i.substring(i.length,i.length-1),removeLastSymbol=i=>i.substring(0,i.length-1);return __expose({calcValue}),(i,e)=>(openBlock(),createElementBlock("div",_hoisted_1$6,[__props.displayShow?(openBlock(),createElementBlock("div",_hoisted_2$5,[createBaseVNode("p",{onClick:e[0]||(e[0]=t=>isCalcMode.value=!isCalcMode.value)},toDisplayString(calcValue.value),1)])):createCommentVNode("",!0),createBaseVNode("div",_hoisted_3$3,[createBaseVNode("button",{type:"button",onClick:e[1]||(e[1]=t=>operation("AC")),class:"key-others"},"AC"),createBaseVNode("button",{type:"button",onClick:e[2]||(e[2]=t=>operation("DEL")),class:"key-others"},"DEL"),createBaseVNode("button",{type:"button",onClick:e[3]||(e[3]=t=>operation("%")),class:"key-others"},"%"),createBaseVNode("button",{type:"button",onClick:e[4]||(e[4]=t=>[operation("/"),enabled()]),class:"key-operate"},"/"),createBaseVNode("button",{type:"button",onClick:e[5]||(e[5]=t=>number("7")),class:""},"7"),createBaseVNode("button",{type:"button",onClick:e[6]||(e[6]=t=>number("8")),class:""},"8"),createBaseVNode("button",{type:"button",onClick:e[7]||(e[7]=t=>number("9")),class:""},"9"),createBaseVNode("button",{type:"button",onClick:e[8]||(e[8]=t=>[operation("*"),enabled()]),class:"key-operate"},"*"),createBaseVNode("button",{type:"button",onClick:e[9]||(e[9]=t=>number("4")),class:""},"4"),createBaseVNode("button",{type:"button",onClick:e[10]||(e[10]=t=>number("5")),class:""},"5"),createBaseVNode("button",{type:"button",onClick:e[11]||(e[11]=t=>number("6")),class:""},"6"),createBaseVNode("button",{type:"button",onClick:e[12]||(e[12]=t=>[operation("-"),enabled()]),class:"key-operate"},"-"),createBaseVNode("button",{type:"button",onClick:e[13]||(e[13]=t=>number("1")),class:""},"1"),createBaseVNode("button",{type:"button",onClick:e[14]||(e[14]=t=>number("2")),class:""},"2"),createBaseVNode("button",{type:"button",onClick:e[15]||(e[15]=t=>number("3")),class:""},"3"),createBaseVNode("button",{type:"button",onClick:e[16]||(e[16]=t=>[operation("+"),enabled()]),class:"key-operate"},"+"),createBaseVNode("button",{type:"button",onClick:e[17]||(e[17]=t=>number("0")),class:"key-zero"},"0"),createBaseVNode("button",{type:"button",onClick:e[18]||(e[18]=t=>number(".")),class:""},"."),isCalcMode.value?(openBlock(),createElementBlock("button",{key:0,type:"button",onClick:pushEqual,class:"key-operate"},"=")):createCommentVNode("",!0),isCalcMode.value?createCommentVNode("",!0):(openBlock(),createElementBlock("button",{key:1,type:"button",onClick:done,class:"key-done"},"ok"))])]))}},Calculator=_export_sfc(_sfc_main$8,[["__scopeId","data-v-eb761dc1"]]),useCurrenciesStore=defineStore("currencies",{state:()=>({loading:!1}),getters:{currencies:()=>Currency.findLoaded()},actions:{async loadCurrencies(){if(this.currencies.length!==3){this.loading=!0;try{await Currency.sync()}finally{this.loading=!1}}}}}),useCreateStore=defineStore("transactions/create",{state:()=>({amount:0,currency:new Currency}),getters:{},actions:{}}),_hoisted_1$5={class:"d-flex justify-end align-center pa-2"},_sfc_main$7={__name:"TheCreateAmount",props:{amount:{type:[String,Number],default:"0"}},emits:["onClickOnAmount"],setup(i,{emit:e}){const t=e,l=useCreateStore(),o=useCurrenciesStore();onMounted(c);async function c(){await o.loadCurrencies(),l.currency=Currency.find(1)}return(r,n)=>{const v=resolveComponent("v-icon"),a=resolveComponent("v-btn"),_=resolveComponent("v-menu");return openBlock(),createElementBlock("div",_hoisted_1$5,[createBaseVNode("div",{class:"text-right text-h3 mr-4",onClick:n[0]||(n[0]=u=>t("onClickOnAmount"))},toDisplayString(i.amount),1),createVNode(_,null,{activator:withCtx(({props:u})=>[createVNode(a,mergeProps({variant:"outlined",class:"s-btn"},u,{"append-icon":"mdi-chevron-down",loading:unref(o).loading}),{default:withCtx(()=>[createVNode(v,{icon:unref(l).currency.icon},null,8,["icon"])]),_:2},1040,["loading"])]),default:withCtx(()=>[createVNode(_sfc_main$a,{currencies:unref(o).currencies,onSelected:n[1]||(n[1]=u=>unref(l).currency=u)},null,8,["currencies"])]),_:1})])}}},TheCreateAmount=_export_sfc(_sfc_main$7,[["__scopeId","data-v-f1be35e1"]]),_hoisted_1$4={key:"0",class:"text-grey"},_hoisted_2$4={key:"1"},_sfc_main$6={__name:"TheTypeStep",emits:["done"],setup(i,{emit:e}){const t=e,l=["Витрата","Дохід","Переказ"],o=computed(()=>l[c.value]),c=ref(0);function r(n){c.value=n,t("done")}return(n,v)=>{const a=resolveComponent("v-col"),_=resolveComponent("v-fade-transition"),u=resolveComponent("v-row"),k=resolveComponent("v-expansion-panel-title"),p=resolveComponent("v-chip"),m=resolveComponent("v-chip-group"),d=resolveComponent("v-expansion-panel-text"),f=resolveComponent("v-expansion-panel");return openBlock(),createBlock(f,null,{default:withCtx(()=>[createVNode(k,{"hide-actions":""},{default:withCtx(({expanded:C})=>[createVNode(u,{"no-gutters":""},{default:withCtx(()=>[createVNode(a,{class:"d-flex justify-start",cols:"4"},{default:withCtx(()=>[createTextVNode("Тип:")]),_:1}),createVNode(a,{class:"text--secondary text-right",cols:"8"},{default:withCtx(()=>[createVNode(_,{"leave-absolute":""},{default:withCtx(()=>[C?(openBlock(),createElementBlock("span",_hoisted_1$4,"Вкажіть тип транзакції")):(openBlock(),createElementBlock("span",_hoisted_2$4,toDisplayString(o.value),1))]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:1}),createVNode(d,null,{default:withCtx(()=>[createVNode(m,{mandatory:"",modelValue:c.value,"onUpdate:modelValue":v[0]||(v[0]=C=>c.value=C)},{default:withCtx(()=>[(openBlock(),createElementBlock(Fragment,null,renderList(l,(C,x)=>createVNode(p,{key:x,label:"",variant:"text",text:C,value:x,onClick:s=>r(x)},null,8,["text","value","onClick"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1})}}},_hoisted_1$3={key:"0",class:"text-grey"},_hoisted_2$3={key:"1"},_hoisted_3$2={key:0},_hoisted_4$1={key:1},_sfc_main$5={__name:"TheAccountStep",emits:["done"],setup(i,{emit:e}){const t=e,l=ref(!1),o=ref("Готівка"),c=["Готівка","Банк","Інший актив","Борг"],r=["Готівка","Гаманець","Monobank UAH, black","Monobank UAH, white","Приват Універсальна"];function n(){t("done"),l.value=!1}return(v,a)=>{const _=resolveComponent("v-col"),u=resolveComponent("v-fade-transition"),k=resolveComponent("v-row"),p=resolveComponent("v-expansion-panel-title"),m=resolveComponent("v-chip"),d=resolveComponent("v-chip-group"),f=resolveComponent("v-btn"),C=resolveComponent("v-expansion-panel-text"),x=resolveComponent("v-expansion-panel");return openBlock(),createBlock(x,null,{default:withCtx(()=>[createVNode(p,{"hide-actions":""},{default:withCtx(({expanded:s})=>[createVNode(k,{"no-gutters":""},{default:withCtx(()=>[createVNode(_,{class:"d-flex justify-start",cols:"4"},{default:withCtx(()=>[createTextVNode("Рахунок:")]),_:1}),createVNode(_,{class:"text--secondary text-right",cols:"8"},{default:withCtx(()=>[createVNode(u,{"leave-absolute":""},{default:withCtx(()=>[s?(openBlock(),createElementBlock("div",_hoisted_1$3,"Вкажіть рахунок")):(openBlock(),createElementBlock("div",_hoisted_2$3,toDisplayString(o.value),1))]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:1}),createVNode(C,{class:"s-panel-text"},{default:withCtx(()=>[createVNode(u,{mode:"out-in"},{default:withCtx(()=>[l.value?(openBlock(),createElementBlock("div",_hoisted_4$1,[createVNode(f,{size:"small",class:"s-back-button",text:"Назад",onClick:a[2]||(a[2]=withModifiers(s=>l.value=!1,["stop"]))}),createVNode(d,{mandatory:"",column:"",modelValue:o.value,"onUpdate:modelValue":a[3]||(a[3]=s=>o.value=s)},{default:withCtx(()=>[(openBlock(),createElementBlock(Fragment,null,renderList(r,(s,V)=>createVNode(m,{key:V,label:"",variant:"text",text:s,value:s,onClick:n},null,8,["text","value"])),64))]),_:1},8,["modelValue"])])):(openBlock(),createElementBlock("div",_hoisted_3$2,[createVNode(d,{mandatory:"",column:"",modelValue:o.value,"onUpdate:modelValue":a[1]||(a[1]=s=>o.value=s)},{default:withCtx(()=>[(openBlock(),createElementBlock(Fragment,null,renderList(c,(s,V)=>createVNode(m,{key:V,label:"",variant:"text",text:s,value:s,onClick:a[0]||(a[0]=N=>l.value=!0)},null,8,["text","value"])),64))]),_:1},8,["modelValue"])]))]),_:1})]),_:1})]),_:1})}}},TheAccountStep=_export_sfc(_sfc_main$5,[["__scopeId","data-v-d140dd6d"]]),_hoisted_1$2={key:"0",class:"text-grey"},_hoisted_2$2={key:"1",class:"text-truncate"},_hoisted_3$1={key:0},_hoisted_4={key:1},_sfc_main$4={__name:"TheCategoryStep",emits:["done"],setup(i,{emit:e}){const t=e,l=ref(!1),o=ref(),c=["Подарунки дуже довга назва категорії","Їжа та напої","Зарплата","Здоров'я дуже довга назва категорії","Оренда житла","Розваги","Зарплата","Транспорт","Інтернет","Комунальні послуги","Подорожі","Зарплата","Ремонт авто"],r=["Спорт і фітнес","Зарплата","Їжа та напої","Освіта","Розваги","Здоров'я","Подарунки","Транспорт","Розваги","Їжа та напої","Зарплата","Освіта","Транспорт","Інтернет","Комунальні послуги","Подорожі","Зарплата","Їжа та напої","Подарунки","Транспорт","Зарплата","Здоров'я","Освіта"];function n(){t("done"),l.value=!1}return(v,a)=>{const _=resolveComponent("v-col"),u=resolveComponent("v-fade-transition"),k=resolveComponent("v-row"),p=resolveComponent("v-expansion-panel-title"),m=resolveComponent("v-chip"),d=resolveComponent("v-chip-group"),f=resolveComponent("v-btn"),C=resolveComponent("v-expansion-panel-text"),x=resolveComponent("v-expansion-panel");return openBlock(),createBlock(x,null,{default:withCtx(()=>[createVNode(p,{"hide-actions":""},{default:withCtx(({expanded:s})=>[createVNode(k,{"no-gutters":""},{default:withCtx(()=>[createVNode(_,{class:"d-flex justify-start",cols:"4"},{default:withCtx(()=>[createTextVNode("Категорія:")]),_:1}),createVNode(_,{class:"text--secondary text-right",cols:"8"},{default:withCtx(()=>[createVNode(u,{"leave-absolute":""},{default:withCtx(()=>[s?(openBlock(),createElementBlock("div",_hoisted_1$2,"Вкажіть категорію")):(openBlock(),createElementBlock("div",_hoisted_2$2,toDisplayString(o.value),1))]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:1}),createVNode(C,{class:"s-panel-text"},{default:withCtx(()=>[createVNode(u,{mode:"out-in"},{default:withCtx(()=>[l.value?(openBlock(),createElementBlock("div",_hoisted_4,[createVNode(f,{size:"small",class:"s-back-button",text:"Назад",onClick:a[2]||(a[2]=withModifiers(s=>l.value=!1,["stop"]))}),createVNode(d,{mandatory:"",column:"",modelValue:o.value,"onUpdate:modelValue":a[3]||(a[3]=s=>o.value=s)},{default:withCtx(()=>[(openBlock(),createElementBlock(Fragment,null,renderList(r,(s,V)=>createVNode(m,{key:V,label:"",variant:"text",text:s,value:s,onClick:n},null,8,["text","value"])),64))]),_:1},8,["modelValue"])])):(openBlock(),createElementBlock("div",_hoisted_3$1,[createVNode(d,{mandatory:"",column:"",modelValue:o.value,"onUpdate:modelValue":a[1]||(a[1]=s=>o.value=s)},{default:withCtx(()=>[(openBlock(),createElementBlock(Fragment,null,renderList(c,(s,V)=>createVNode(m,{key:V,label:"",variant:"text",text:s,onClick:a[0]||(a[0]=N=>l.value=!0)},null,8,["text"])),64))]),_:1},8,["modelValue"])]))]),_:1})]),_:1})]),_:1})}}},TheCategoryStep=_export_sfc(_sfc_main$4,[["__scopeId","data-v-838a37e5"]]),_hoisted_1$1={key:0,class:"text-grey"},_hoisted_2$1={key:1,class:"text-truncate"},_hoisted_3={key:2},_sfc_main$3={__name:"TheTagStep",emits:["done"],setup(i,{emit:e}){const t=ref([]),l=computed(()=>t.value.join(", ")),o=["Доходи","Витрати","Бюджет","Заощадження","Кредити","Депозити","Інвестиції","Податки","Зарплата","Пенсія","Страхування","Платежі","КомунальніПослуги","Продукти","Одяг","Транспорт","Розваги","Медицина","Освіта","Подарунки"];return(c,r)=>{const n=resolveComponent("v-col"),v=resolveComponent("v-fade-transition"),a=resolveComponent("v-row"),_=resolveComponent("v-expansion-panel-title"),u=resolveComponent("v-chip"),k=resolveComponent("v-chip-group"),p=resolveComponent("v-expansion-panel-text"),m=resolveComponent("v-expansion-panel");return openBlock(),createBlock(m,null,{default:withCtx(()=>[createVNode(_,{"hide-actions":""},{default:withCtx(()=>[createVNode(a,{"no-gutters":""},{default:withCtx(()=>[createVNode(n,{class:"d-flex justify-start",cols:"4"},{default:withCtx(()=>[createTextVNode("Теги:")]),_:1}),createVNode(n,{class:"text--secondary text-right",cols:"8"},{default:withCtx(()=>[createVNode(v,{"leave-absolute":""},{default:withCtx(()=>[t.value.length===0?(openBlock(),createElementBlock("div",_hoisted_1$1,"Вкажіть теги")):t.value.length<=3?(openBlock(),createElementBlock("div",_hoisted_2$1,toDisplayString(l.value),1)):(openBlock(),createElementBlock("div",_hoisted_3,"вибрано "+toDisplayString(t.value.length)+" тегів",1))]),_:1})]),_:1})]),_:1})]),_:1}),createVNode(p,{class:"s-panel-text"},{default:withCtx(()=>[createVNode(k,{multiple:"",column:"",modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=d=>t.value=d)},{default:withCtx(()=>[(openBlock(),createElementBlock(Fragment,null,renderList(o,(d,f)=>createVNode(u,{key:f,label:"",variant:"text",text:d,value:d},null,8,["text","value"])),64))]),_:1},8,["modelValue"])]),_:1})]),_:1})}}},TheTagStep=_export_sfc(_sfc_main$3,[["__scopeId","data-v-bb55664a"]]),_sfc_main$2={__name:"TheDateStep",emits:["done"],setup(i,{emit:e}){const t=e,l=useDate(),o=ref("Сьогодні"),c=ref("Сьогодні"),r=ref(!1),n=ref();function v(){c.value="Вчора",t("done")}function a(){c.value="Сьогодні",t("done")}function _(){r.value=!0}function u(){c.value=l.format(new Date(n.value),"fullDate"),o.value="Вибрати",r.value=!1,t("done")}return(k,p)=>{const m=resolveComponent("v-col"),d=resolveComponent("v-fade-transition"),f=resolveComponent("v-row"),C=resolveComponent("v-expansion-panel-title"),x=resolveComponent("v-date-picker"),s=resolveComponent("v-divider"),V=resolveComponent("v-spacer"),N=resolveComponent("v-btn"),h=resolveComponent("v-card-actions"),B=resolveComponent("v-card"),w=resolveComponent("v-dialog"),b=resolveComponent("v-chip"),g=resolveComponent("v-chip-group"),$=resolveComponent("v-expansion-panel-text"),S=resolveComponent("v-expansion-panel");return openBlock(),createBlock(S,null,{default:withCtx(()=>[createVNode(C,{"hide-actions":""},{default:withCtx(({expanded:y})=>[createVNode(f,{"no-gutters":""},{default:withCtx(()=>[createVNode(m,{class:"d-flex justify-start",cols:"4"},{default:withCtx(()=>[createTextVNode("Дата:")]),_:1}),createVNode(m,{class:"text--secondary text-right",cols:"8"},{default:withCtx(()=>[createVNode(d,{"leave-absolute":""},{default:withCtx(()=>[withDirectives(createBaseVNode("span",null,toDisplayString(c.value),513),[[vShow,c.value]])]),_:1})]),_:1})]),_:1})]),_:1}),createVNode($,null,{default:withCtx(()=>[createVNode(w,{modelValue:r.value,"onUpdate:modelValue":p[2]||(p[2]=y=>r.value=y),"max-width":"600"},{default:withCtx(()=>[createVNode(B,null,{default:withCtx(()=>[createVNode(x,{modelValue:n.value,"onUpdate:modelValue":p[0]||(p[0]=y=>n.value=y),width:"100%",color:"primary"},null,8,["modelValue"]),createVNode(s),createVNode(h,null,{default:withCtx(()=>[createVNode(V),createVNode(N,{text:"Відміна",variant:"plain",onClick:p[1]||(p[1]=y=>r.value=!1)}),createVNode(N,{color:"primary",text:"Вибрати",variant:"tonal",onClick:u})]),_:1})]),_:1})]),_:1},8,["modelValue"]),createVNode(g,{mandatory:"",modelValue:o.value,"onUpdate:modelValue":p[3]||(p[3]=y=>o.value=y)},{default:withCtx(()=>[createVNode(b,{label:"",variant:"text",text:"Вчора",value:"Вчора",onClick:v}),createVNode(b,{label:"",variant:"text",text:"Сьогодні",value:"Сьогодні",onClick:a}),createVNode(b,{label:"",variant:"text",text:"Вибрати",value:"Вибрати",onClick:_})]),_:1},8,["modelValue"])]),_:1})]),_:1})}}},_sfc_main$1={__name:"TheTransactionSteps",setup(i){const e=ref(1);function t(l){e.value=l}return(l,o)=>{const c=resolveComponent("v-expansion-panels"),r=resolveComponent("v-btn");return openBlock(),createElementBlock("div",null,[createVNode(c,{modelValue:e.value,"onUpdate:modelValue":o[4]||(o[4]=n=>e.value=n),variant:"accordion",elevation:"0"},{default:withCtx(()=>[createVNode(_sfc_main$6,{onDone:o[0]||(o[0]=n=>t(1))}),createVNode(TheAccountStep,{onDone:o[1]||(o[1]=n=>t(2))}),createVNode(TheCategoryStep,{onDone:o[2]||(o[2]=n=>t(3))}),createVNode(TheTagStep),createVNode(_sfc_main$2,{onDone:o[3]||(o[3]=n=>t(null))})]),_:1},8,["modelValue"]),createVNode(r,{color:"orange-darken-1",rounded:"t-0 b-xl",size:"x-large",text:"Continue",variant:"flat",block:""})])}}},_hoisted_1={class:"fill-height d-flex flex-column"},_hoisted_2=createBaseVNode("div",{class:"flex-grow-1"},null,-1),_sfc_main={__name:"Create",setup(i){const e=useCreateStore();ref(0);const t=ref(null),l=computed(()=>{var r;return((r=t.value)==null?void 0:r.calcValue)??null}),o=ref(!1),c=r=>{e.amount=r,o.value=!0};return(r,n)=>{const v=resolveComponent("v-fade-transition");return openBlock(),createElementBlock(Fragment,null,[createVNode(_sfc_main$9),createBaseVNode("div",_hoisted_1,[_hoisted_2,createVNode(TheCreateAmount,{amount:l.value??unref(e).amount,onOnClickOnAmount:n[0]||(n[0]=a=>o.value=!1)},null,8,["amount"]),createVNode(v,{mode:"out-in"},{default:withCtx(()=>[(openBlock(),createBlock(KeepAlive,null,[o.value?(openBlock(),createBlock(_sfc_main$1,{key:1})):(openBlock(),createBlock(Calculator,{key:0,ref_key:"calc",ref:t,value:unref(e).amount,displayShow:!1,onOnResult:n[1]||(n[1]=a=>c(a))},null,8,["value"]))],1024))]),_:1})])],64)}}};export{_sfc_main as default};
