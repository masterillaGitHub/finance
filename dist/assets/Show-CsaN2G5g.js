import{u as j}from"./show.store-CQeLW5au.js";import{r as t,o as s,d as p,w as c,k as e,b as y,_ as z,E as L,n as B,j as x,x as M,c as S,e as w,f as $,t as g,a as i,F as E,z as q,i as P,p as Q,g as W}from"./index-bzf4-yP6.js";import{A as N,t as X,c as Y}from"./entities-DkhOfdr4.js";import{_ as Z}from"./TransactionGroup-BpXRhBjc.js";import{r as ee,u as te,_ as ce}from"./DialogComponent-ClGfTIeW.js";import{a as ae,u as oe,_ as ne}from"./create.store-CcGyFMk2.js";import{_ as se}from"./BottomConfirm-DTuRMK1q.js";import"./CurrenciesList-CwKclEtC.js";const ue={__name:"TheAppBar",setup(m){const o=j();return(l,a)=>{const n=t("v-btn"),r=t("v-spacer"),_=t("v-app-bar");return s(),p(_,{elevation:2,density:"compact"},{prepend:c(()=>[e(n,{icon:"mdi-arrow-left",to:{name:"accounts.index"}})]),default:c(()=>[e(r),e(n,{icon:"mdi-pencil",onClick:a[0]||(a[0]=u=>y(o).editDialog=!0)})]),_:1})}}},le={class:"subheading font-weight-light text-grey text-center"},re={key:0},de={class:"font-weight-bold text-center"},ie={class:"d-flex justify-space-between"},me={__name:"TheTitleSection",setup(m){const o=L(),l=B(()=>N.find(o.params.id)),a=B(()=>l.value.sums.filter(k=>k.balance>0)),n=B(()=>a.value.length),r=x(!1);M(h);const _=x(["січ","лют","бер","квіт","трав","черв","лип","сер"]),u=x([200,675,410,390,310,460,250,240]);async function h(){if(!l.value){r.value=!0;try{await N.sync({include:"category,sums.currency","filter[id]":o.params.id})}finally{r.value=!1}}}return(k,F)=>{const C=t("v-progress-linear"),A=t("v-sparkline"),V=t("v-sheet"),T=t("v-card-title"),U=t("v-list-item"),v=t("v-list"),d=t("v-card-text"),D=t("v-card");return s(),S("div",null,[r.value?(s(),p(C,{key:0,indeterminate:""})):w("",!0),l.value?(s(),p(D,{key:1,class:"mt-8 mx-auto overflow-visible","max-width":"400",elevation:"0"},{default:c(()=>[e(V,{class:"v-sheet--offset mx-auto",color:"cyan",elevation:"12","max-width":"calc(100% - 32px)",rounded:"lg"},{default:c(()=>[e(A,{"auto-draw":"",labels:_.value,"model-value":u.value,color:"white","line-width":"2",padding:"16"},{label:c(f=>[$(g(f.value)+". ",1)]),_:1},8,["labels","model-value"])]),_:1}),e(T,{class:"text-center"},{default:c(()=>[$(g(l.value.name),1)]),_:1}),e(d,{class:"pt-0"},{default:c(()=>[i("div",le,[$(" Поточний баланс"),n.value>1?(s(),S("span",re,", в "+g(n.value)+" валютах",1)):w("",!0)]),i("div",de,g(y(X)(l.value.getSum())),1),n.value>1?(s(),p(v,{key:0},{default:c(()=>[(s(!0),S(E,null,q(a.value,f=>(s(),p(U,{key:f.id,"prepend-icon":"mdi-flag-outline",class:"s-list-item"},{title:c(()=>[i("div",ie,[i("div",null,g(f.currency.name),1),i("div",null,g(y(Y)(f.balance,f.currency.alphabetic_code)),1)])]),_:2},1024))),128))]),_:1})):w("",!0)]),_:1})]),_:1})):w("",!0)])}}},_e=z(me,[["__scopeId","data-v-5939de0e"]]),ve={__name:"TheTransactions",setup(m){const o=[{date:"20.06.2024",items:[{category:"Подарунки дуже довга назва категорії",account:"Готівка",sum:-45e12,desc:"Також довгий опис транзакції"},{category:"Їжа та напої",account:"Готівка",sum:-1200,desc:"Купили суші"}]},{date:"18.06.2024",items:[{category:"Зарплата",account:"Готівка",sum:3e3,desc:null},{category:"Здоров'я дуже довга назва категорії",account:"Готівка",sum:-1200,desc:"Консультація лікаря"}]},{date:"17.06.2024",items:[{category:"Оренда житла",account:"Карта",sum:-8e3,desc:null}]},{date:"15.06.2024",items:[{category:"Розваги",account:"Карта",sum:-500,desc:"Кінотеатр"},{category:"Зарплата",account:"Банк",sum:5e3,desc:null},{category:"Транспорт",account:"Готівка",sum:-200,desc:"Таксі"}]},{date:"13.06.2024",items:[{category:"Інтернет",account:"Карта",sum:-400,desc:"Щомісячна оплата"}]},{date:"12.06.2024",items:[{category:"Комунальні послуги",account:"Карта",sum:-1500,desc:"Оплата за газ"}]},{date:"10.06.2024",items:[{category:"Подорожі",account:"Карта",sum:-2500,desc:"Бронювання готелю"},{category:"Зарплата",account:"Карта",sum:4e3,desc:null}]},{date:"08.06.2024",items:[{category:"Ремонт авто",account:"Готівка",sum:-3e3,desc:"Заміна масла"}]},{date:"07.06.2024",items:[{category:"Спорт і фітнес",account:"Карта",sum:-600,desc:"Абонемент у спортзал"},{category:"Зарплата",account:"Карта",sum:3500,desc:null},{category:"Їжа та напої",account:"Готівка",sum:-900,desc:"Покупка в супермаркеті"}]},{date:"05.06.2024",items:[{category:"Освіта",account:"Готівка",sum:-2e3,desc:"Курси англійської мови"}]},{date:"04.06.2024",items:[{category:"Розваги",account:"Карта",sum:-700,desc:"Квест-кімната"}]},{date:"02.06.2024",items:[{category:"Здоров'я",account:"Готівка",sum:-500,desc:"Ліки"}]},{date:"01.06.2024",items:[{category:"Подарунки",account:"Готівка",sum:-300,desc:null},{category:"Транспорт",account:"Готівка",sum:-150,desc:"Квиток на автобус"}]},{date:"30.05.2024",items:[{category:"Розваги",account:"Карта",sum:-1200,desc:"Вечірка"}]},{date:"28.05.2024",items:[{category:"Їжа та напої",account:"Готівка",sum:-1e3,desc:"Вечеря в ресторані"},{category:"Зарплата",account:"Банк",sum:4500,desc:null},{category:"Освіта",account:"Готівка",sum:-1200,desc:"Книги"}]},{date:"25.05.2024",items:[{category:"Транспорт",account:"Готівка",sum:-100,desc:"Проїзд в метро"}]},{date:"23.05.2024",items:[{category:"Інтернет",account:"Карта",sum:-350,desc:"Щомісячна оплата"},{category:"Комунальні послуги",account:"Карта",sum:-2e3,desc:"Оплата за електрику"}]},{date:"20.05.2024",items:[{category:"Подорожі",account:"Карта",sum:-4e3,desc:"Квитки на літак"}]},{date:"18.05.2024",items:[{category:"Зарплата",account:"Готівка",sum:3e3,desc:null},{category:"Їжа та напої",account:"Готівка",sum:-700,desc:"Сніданок в кафе"}]},{date:"15.05.2024",items:[{category:"Подарунки",account:"Готівка",sum:-450,desc:null},{category:"Транспорт",account:"Готівка",sum:-300,desc:"Проїзд в таксі"},{category:"Зарплата",account:"Карта",sum:3200,desc:null},{category:"Здоров'я",account:"Готівка",sum:-900,desc:"Консультація стоматолога"}]},{date:"13.05.2024",items:[{category:"Освіта",account:"Готівка",sum:-1500,desc:"Онлайн курс програмування"}]}];return(l,a)=>{const n=t("v-card-title"),r=t("v-card-text"),_=t("v-card");return s(),p(_,{elevation:"0"},{default:c(()=>[e(n,null,{default:c(()=>[$("Історія транзакцій")]),_:1}),e(r,null,{default:c(()=>[(s(),S(E,null,q(o,u=>e(Z,{group:u},null,8,["group"])),64))]),_:1})]),_:1})}}},pe=m=>(Q("data-v-0ffb099c"),m=m(),W(),m),fe={class:"text-center mb-4"},ge={class:"s-card-text-block"},ye=pe(()=>i("div",null,"Тип рахунку",-1)),xe={__name:"TheUpdateAccount",emits:["accountUpdate","dialogClose"],setup(m,{emit:o}){const l=o;ae();const a=L(),n=P();oe();const r=x(),_=x(!1),u=x(N.find(a.params.id)),h=x(u.value.sums),{check:k}=te(r),F=[ee];M(()=>{});async function C(){await k()&&(l("accountUpdate"),await V(),await A())}async function A(){await u.value.save({include:"category,sums.currency"})}async function V(){for(const v of h.value)v.account=u.value.id,await v.save({include:"currency"})}function T(){l("dialogClose"),u.value.destroy(),n.push({name:"accounts.index"})}function U(v){h.value.push(v)}return(v,d)=>{const D=t("v-avatar"),f=t("v-text-field"),R=t("v-divider"),H=t("v-form"),G=t("v-card-text"),I=t("v-btn"),J=t("v-spacer"),K=t("v-card-actions"),O=t("v-card");return s(),p(O,{"prepend-icon":"mdi-credit-card-edit-outline",title:"Редагування рахунку"},{default:c(()=>[u.value?(s(),p(G,{key:0},{default:c(()=>[i("div",fe,[e(D,{size:"x-large",icon:"mdi-cash",color:"green"})]),e(H,{ref_key:"form",ref:r},{default:c(()=>[e(f,{label:"Назва рахунку",modelValue:u.value.name,"onUpdate:modelValue":d[0]||(d[0]=b=>u.value.name=b),rules:F},null,8,["modelValue"]),i("div",ge,[i("div",null,[ye,i("div",null,g(u.value.category.name),1)]),e(R)]),e(ne,{"account-sums":h.value,onCreatedAccountSum:U},null,8,["account-sums"])]),_:1},512),e(se,{modelValue:_.value,"onUpdate:modelValue":d[1]||(d[1]=b=>_.value=b),title:"Видалити?",onSuccess:T},null,8,["modelValue"])]),_:1})):w("",!0),e(R),e(K,null,{default:c(()=>[e(I,{class:"text-red",icon:"mdi-delete-outline",variant:"plain",onClick:d[2]||(d[2]=b=>_.value=!0)}),e(J),e(I,{text:"Відміна",variant:"plain",onClick:d[3]||(d[3]=b=>v.$emit("dialogClose"))}),e(I,{color:"primary",text:"Зберегти",variant:"tonal",onClick:C})]),_:1})]),_:1})}}},he=z(xe,[["__scopeId","data-v-0ffb099c"]]),be={__name:"TheEditAccount",setup(m){const o=j();return(l,a)=>(s(),p(ce,{modelValue:y(o).editDialog,"onUpdate:modelValue":a[2]||(a[2]=n=>y(o).editDialog=n)},{default:c(()=>[e(he,{onAccountUpdate:a[0]||(a[0]=n=>y(o).editDialog=!1),onDialogClose:a[1]||(a[1]=n=>y(o).editDialog=!1)})]),_:1},8,["modelValue"]))}},Ue={__name:"Show",setup(m){return(o,l)=>(s(),S(E,null,[e(ue),e(_e,{class:"mb-4"}),e(ve),e(be)],64))}};export{Ue as default};