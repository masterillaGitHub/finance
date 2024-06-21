import{u as j}from"./show.store-BLD24Lg_.js";import{r as t,o as l,d as v,w as c,k as e,b as x,_ as q,B as E,m as M,j as b,s as L,c as V,e as C,f as A,t as y,a as _,F as z,y as H,C as R,D as Q,i as W,p as X,g as Y}from"./index-B9rgIAwP.js";import{A as N}from"./CurrenciesList-vb3s7GVf.js";import{t as Z,a as ee}from"./functions-DAvG65lt.js";import{_ as te}from"./TransactionGroup-BJqLqTic.js";import{a as ce,u as ae,_ as oe,r as ne,b as se,c as ue}from"./DialogComponent--Qhf6GOn.js";const le={__name:"TheAppBar",setup(d){const o=j();return(u,a)=>{const n=t("v-btn"),i=t("v-spacer"),r=t("v-app-bar");return l(),v(r,{elevation:2,density:"compact"},{prepend:c(()=>[e(n,{icon:"mdi-arrow-left",to:{name:"accounts.index"}})]),default:c(()=>[e(i),e(n,{icon:"mdi-pencil",onClick:a[0]||(a[0]=s=>x(o).editDialog=!0)})]),_:1})}}},re={class:"subheading font-weight-light text-grey text-center"},de={key:0},ie={class:"font-weight-bold text-center"},me={class:"d-flex justify-space-between"},_e={__name:"TheTitleSection",setup(d){const o=E(),u=M(()=>N.find(o.params.id)),a=M(()=>u.value.sums.filter(h=>h.balance>0)),n=M(()=>a.value.length),i=b(!1);L(g);const r=b(["січ","лют","бер","квіт","трав","черв","лип","сер"]),s=b([200,675,410,390,310,460,250,240]);async function g(){if(!u.value){i.value=!0;try{await N.sync({include:"category,sums.currency","filter[id]":o.params.id})}finally{i.value=!1}}}return(h,$)=>{const S=t("v-progress-linear"),w=t("v-sparkline"),T=t("v-sheet"),U=t("v-card-title"),D=t("v-list-item"),p=t("v-list"),m=t("v-card-text"),B=t("v-card");return l(),V("div",null,[i.value?(l(),v(S,{key:0,indeterminate:""})):C("",!0),u.value?(l(),v(B,{key:1,class:"mt-8 mx-auto overflow-visible","max-width":"400",elevation:"0"},{default:c(()=>[e(T,{class:"v-sheet--offset mx-auto",color:"cyan",elevation:"12","max-width":"calc(100% - 32px)",rounded:"lg"},{default:c(()=>[e(w,{"auto-draw":"",labels:r.value,"model-value":s.value,color:"white","line-width":"2",padding:"16"},{label:c(f=>[A(y(f.value)+". ",1)]),_:1},8,["labels","model-value"])]),_:1}),e(U,{class:"text-center"},{default:c(()=>[A(y(u.value.name),1)]),_:1}),e(m,{class:"pt-0"},{default:c(()=>[_("div",re,[A(" Поточний баланс"),n.value>1?(l(),V("span",de,", в "+y(n.value)+" валютах",1)):C("",!0)]),_("div",ie,y(x(Z)(u.value.getSum())),1),n.value>1?(l(),v(p,{key:0},{default:c(()=>[(l(!0),V(z,null,H(a.value,f=>(l(),v(D,{key:f.id,"prepend-icon":"mdi-flag-outline",class:"s-list-item"},{title:c(()=>[_("div",me,[_("div",null,y(f.currency.name),1),_("div",null,y(x(ee)(f.balance,f.currency.alphabetic_code)),1)])]),_:2},1024))),128))]),_:1})):C("",!0)]),_:1})]),_:1})):C("",!0)])}}},ve=q(_e,[["__scopeId","data-v-5939de0e"]]),pe={__name:"TheTransactions",setup(d){const o=[{date:"20.06.2024",items:[{category:"Подарунки дуже довга назва категорії",account:"Готівка",sum:-45e12,desc:"Також довгий опис транзакції"},{category:"Їжа та напої",account:"Готівка",sum:-1200,desc:"Купили суші"}]},{date:"18.06.2024",items:[{category:"Зарплата",account:"Готівка",sum:3e3,desc:null},{category:"Здоров'я дуже довга назва категорії",account:"Готівка",sum:-1200,desc:"Консультація лікаря"}]},{date:"17.06.2024",items:[{category:"Оренда житла",account:"Карта",sum:-8e3,desc:null}]},{date:"15.06.2024",items:[{category:"Розваги",account:"Карта",sum:-500,desc:"Кінотеатр"},{category:"Зарплата",account:"Банк",sum:5e3,desc:null},{category:"Транспорт",account:"Готівка",sum:-200,desc:"Таксі"}]},{date:"13.06.2024",items:[{category:"Інтернет",account:"Карта",sum:-400,desc:"Щомісячна оплата"}]},{date:"12.06.2024",items:[{category:"Комунальні послуги",account:"Карта",sum:-1500,desc:"Оплата за газ"}]},{date:"10.06.2024",items:[{category:"Подорожі",account:"Карта",sum:-2500,desc:"Бронювання готелю"},{category:"Зарплата",account:"Карта",sum:4e3,desc:null}]},{date:"08.06.2024",items:[{category:"Ремонт авто",account:"Готівка",sum:-3e3,desc:"Заміна масла"}]},{date:"07.06.2024",items:[{category:"Спорт і фітнес",account:"Карта",sum:-600,desc:"Абонемент у спортзал"},{category:"Зарплата",account:"Карта",sum:3500,desc:null},{category:"Їжа та напої",account:"Готівка",sum:-900,desc:"Покупка в супермаркеті"}]},{date:"05.06.2024",items:[{category:"Освіта",account:"Готівка",sum:-2e3,desc:"Курси англійської мови"}]},{date:"04.06.2024",items:[{category:"Розваги",account:"Карта",sum:-700,desc:"Квест-кімната"}]},{date:"02.06.2024",items:[{category:"Здоров'я",account:"Готівка",sum:-500,desc:"Ліки"}]},{date:"01.06.2024",items:[{category:"Подарунки",account:"Готівка",sum:-300,desc:null},{category:"Транспорт",account:"Готівка",sum:-150,desc:"Квиток на автобус"}]},{date:"30.05.2024",items:[{category:"Розваги",account:"Карта",sum:-1200,desc:"Вечірка"}]},{date:"28.05.2024",items:[{category:"Їжа та напої",account:"Готівка",sum:-1e3,desc:"Вечеря в ресторані"},{category:"Зарплата",account:"Банк",sum:4500,desc:null},{category:"Освіта",account:"Готівка",sum:-1200,desc:"Книги"}]},{date:"25.05.2024",items:[{category:"Транспорт",account:"Готівка",sum:-100,desc:"Проїзд в метро"}]},{date:"23.05.2024",items:[{category:"Інтернет",account:"Карта",sum:-350,desc:"Щомісячна оплата"},{category:"Комунальні послуги",account:"Карта",sum:-2e3,desc:"Оплата за електрику"}]},{date:"20.05.2024",items:[{category:"Подорожі",account:"Карта",sum:-4e3,desc:"Квитки на літак"}]},{date:"18.05.2024",items:[{category:"Зарплата",account:"Готівка",sum:3e3,desc:null},{category:"Їжа та напої",account:"Готівка",sum:-700,desc:"Сніданок в кафе"}]},{date:"15.05.2024",items:[{category:"Подарунки",account:"Готівка",sum:-450,desc:null},{category:"Транспорт",account:"Готівка",sum:-300,desc:"Проїзд в таксі"},{category:"Зарплата",account:"Карта",sum:3200,desc:null},{category:"Здоров'я",account:"Готівка",sum:-900,desc:"Консультація стоматолога"}]},{date:"13.05.2024",items:[{category:"Освіта",account:"Готівка",sum:-1500,desc:"Онлайн курс програмування"}]}];return(u,a)=>{const n=t("v-card-title"),i=t("v-card-text"),r=t("v-card");return l(),v(r,{elevation:"0"},{default:c(()=>[e(n,null,{default:c(()=>[A("Історія транзакцій")]),_:1}),e(i,null,{default:c(()=>[(l(),V(z,null,H(o,s=>e(te,{group:s},null,8,["group"])),64))]),_:1})]),_:1})}}},fe={__name:"BottomConfirm",props:R({title:{type:String,required:!0},text:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:R(["success","cancel"],["update:modelValue"]),setup(d,{emit:o}){const u=o,a=Q(d,"modelValue");function n(){a.value=!1,u("cancel")}return(i,r)=>{const s=t("v-btn"),g=t("v-spacer"),h=t("v-card-actions"),$=t("v-card"),S=t("v-bottom-sheet");return l(),v(S,{modelValue:a.value,"onUpdate:modelValue":r[1]||(r[1]=w=>a.value=w)},{default:c(()=>[e($,{title:d.title,text:d.text},{default:c(()=>[e(h,null,{default:c(()=>[e(s,{class:"text-red",text:"Відміна",variant:"plain",size:"x-large",onClick:n}),e(g),e(s,{color:"primary",text:"Ок",variant:"tonal",size:"x-large",onClick:r[0]||(r[0]=w=>u("success"))})]),_:1})]),_:1},8,["title","text"])]),_:1},8,["modelValue"])}}},ge=d=>(X("data-v-0ffb099c"),d=d(),Y(),d),ye={class:"text-center mb-4"},xe={class:"s-card-text-block"},be=ge(()=>_("div",null,"Тип рахунку",-1)),he={__name:"TheUpdateAccount",emits:["accountUpdate","dialogClose"],setup(d,{emit:o}){const u=o;ce();const a=E(),n=W();ae();const i=b(),r=b(!1),s=b(N.find(a.params.id)),g=b(s.value.sums),{check:h}=se(i),$=[ne];L(()=>{});async function S(){await h()&&(u("accountUpdate"),await T(),await w())}async function w(){await s.value.save({include:"category,sums.currency"})}async function T(){for(const p of g.value)p.account=s.value.id,await p.save({include:"currency"})}function U(){u("dialogClose"),s.value.destroy(),n.push({name:"accounts.index"})}function D(p){g.value.push(p)}return(p,m)=>{const B=t("v-avatar"),f=t("v-text-field"),F=t("v-divider"),G=t("v-form"),J=t("v-card-text"),I=t("v-btn"),K=t("v-spacer"),O=t("v-card-actions"),P=t("v-card");return l(),v(P,{"prepend-icon":"mdi-credit-card-edit-outline",title:"Редагування рахунку"},{default:c(()=>[s.value?(l(),v(J,{key:0},{default:c(()=>[_("div",ye,[e(B,{size:"x-large",icon:"mdi-cash",color:"green"})]),e(G,{ref_key:"form",ref:i},{default:c(()=>[e(f,{label:"Назва рахунку",modelValue:s.value.name,"onUpdate:modelValue":m[0]||(m[0]=k=>s.value.name=k),rules:$},null,8,["modelValue"]),_("div",xe,[_("div",null,[be,_("div",null,y(s.value.category.name),1)]),e(F)]),e(oe,{"account-sums":g.value,onCreatedAccountSum:D},null,8,["account-sums"])]),_:1},512),e(fe,{modelValue:r.value,"onUpdate:modelValue":m[1]||(m[1]=k=>r.value=k),title:"Видалити?",onSuccess:U},null,8,["modelValue"])]),_:1})):C("",!0),e(F),e(O,null,{default:c(()=>[e(I,{class:"text-red",icon:"mdi-delete-outline",variant:"plain",onClick:m[2]||(m[2]=k=>r.value=!0)}),e(K),e(I,{text:"Відміна",variant:"plain",onClick:m[3]||(m[3]=k=>p.$emit("dialogClose"))}),e(I,{color:"primary",text:"Зберегти",variant:"tonal",onClick:S})]),_:1})]),_:1})}}},we=q(he,[["__scopeId","data-v-0ffb099c"]]),Se={__name:"TheEditAccount",setup(d){const o=j();return(u,a)=>(l(),v(ue,{modelValue:x(o).editDialog,"onUpdate:modelValue":a[2]||(a[2]=n=>x(o).editDialog=n)},{default:c(()=>[e(we,{onAccountUpdate:a[0]||(a[0]=n=>x(o).editDialog=!1),onDialogClose:a[1]||(a[1]=n=>x(o).editDialog=!1)})]),_:1},8,["modelValue"]))}},Ue={__name:"Show",setup(d){return(o,u)=>(l(),V(z,null,[e(le),e(ve,{class:"mb-4"}),e(pe),e(Se)],64))}};export{Ue as default};
