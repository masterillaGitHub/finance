var m=Object.defineProperty;var p=(t,n,e)=>n in t?m(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var r=(t,n,e)=>p(t,typeof n!="symbol"?n+"":n,e);import{M as a,c as T}from"./Model-DgptP03g.js";import{ch as C,P as f,B as _,A as g,ci as b,cj as A}from"./index-BbjtBCCf.js";class u extends a{constructor(){super(...arguments);r(this,"_resourceName","currencies")}get icon(){var e;return((e=C.find(s=>s.id===this.id))==null?void 0:e.icon)??null}}class y extends a{constructor(){super(...arguments);r(this,"_resourceName","account-sums")}getBalanceInMainCurrency(){const e=f(),s=this.currency.alphabetic_code.toLowerCase();if(s===e.currency.main)return this.balance;const d=e.currency.exchangeRates[s];return this.balance*d}get currency(){return this.hasOne("currency",u)}set currency(e){return this.belongsTo("currency",e)}get account(){this.hasOne("account",i)}set account(e){this.belongsTo("account",e,i,"sums")}}class i extends a{constructor(){super(...arguments);r(this,"_resourceName","accounts");r(this,"icon","mdi-help");r(this,"place_type",_)}get sums(){return this.hasMany("sums",y)}set sums(e){this.belongsTo("sums",e)}get category(){return this.hasOne("category",h)}set category(e){this.belongsTo("category",e,h,"accounts")}get currency(){return this.hasOne("currency",u)}set currency(e){this.belongsTo("currency",e)}getSum(){return this.place_type===g?0:T(this.sums,"balance")}getSumInMineCurrency(){return this.place_type===g?0:this.sums.reduce((e,s)=>e+s.getBalanceInMainCurrency(),0)}}class h extends a{constructor(){super(...arguments);r(this,"_resourceName","account-categories")}get accounts(){return this.hasMany("accounts",i)}get icon(){var e;return((e=b.find(s=>s.id===this.id))==null?void 0:e.icon)??null}getSum(){return this.accounts.reduce((e,s)=>s.getSum()+e,0)}getSumInMineCurrency(){return this.accounts.reduce((e,s)=>s.getSumInMineCurrency()+e,0)}static async loadMainPage(){return await this.query().get("/main-page")}static async loadTransactionPage(){return await this.query().get("/transaction-page")}async loadMainPage(){return await this.query().get("/main-page")}}class c extends a{constructor(){super(...arguments);r(this,"_resourceName","transaction-categories");r(this,"icon","mdi-help")}get children(){return this.hasMany("children",c)}get transactions(){return this.hasMany("transactions",o)}get parent(){return this.hasOne("parent",c)}set parent(e){return this.belongsTo("parent",e)}set type(e){this.belongsTo("type",e)}childrenCount(){return this.children.length}isChildren(){return this.childrenCount()>0}static async loadCategoryStep(e){return await this.query().get("/category-step?type_id="+e)}}class N extends a{constructor(){super(...arguments);r(this,"_resourceName","transaction-types")}}class l extends a{constructor(){super(...arguments);r(this,"_resourceName","transaction-tags")}}class o extends a{constructor(){super(...arguments);r(this,"_resourceName","transactions")}isInitial(){return this.category.id===A}get account(){return this.hasOne("account",i)}get currency(){return this.hasOne("currency",u)}get transfer_transaction(){return this.hasOne("transfer_transaction",o)}get type(){return this.hasOne("type",N)}get category(){return this.hasOne("category",c)}get tags(){return this.hasMany("tags",l)}set currency(e){this.belongsTo("currency",e)}set type(e){this.belongsTo("type",e)}set account(e){this.belongsTo("account",e)}set transfer_transaction(e){this.belongsTo("transfer_transaction",e)}set category(e){this.belongsTo("category",e)}set tags(e){this.belongsTo("tags",e)}}function R(t){return t instanceof h}function O(t){return t instanceof y}function v(t){return t.every(O)}function I(t){return t instanceof u}function P(t){return t.every(I)}function V(t){return t instanceof o}function S(t){return t instanceof c}function w(t){return t.every(S)}function q(t){return t instanceof l}export{i as A,u as C,o as T,h as a,y as b,O as c,I as d,V as e,c as f,l as g,P as h,R as i,S as j,w as k,q as l,v};