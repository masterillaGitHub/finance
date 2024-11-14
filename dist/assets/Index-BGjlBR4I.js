import{_ as H}from"./FullscreenAppBar-D0Sg2qiS.js";import{f as k,j as N,k as J}from"./entities-DwYTsaLf.js";import{a6 as K,C as Q,R as $,r as n,o as _,d as v,w as a,a as h,j as t,b as c,m as C,i as U,a0 as W,t as Z,S,c as M,f as E,e as P,F as ee,X as te,y as oe}from"./index-CMFz-0SU.js";import{D as L}from"./vuedraggable.umd-C5Bf9t5X.js";import{_ as O}from"./DialogComponent-CBXnObbi.js";import{r as ae,u as ne}from"./form_validate-BGtMXeK9.js";import{_ as se}from"./BottomConfirm-Da1d_FVv.js";import{_ as re}from"./TheCategoryIcon-CKqW0ZH3.js";import"./Model-CeNXf-rt.js";class ie extends K{getResource(){return"transaction-categories"}static setSorting(e){return new this().setSorting(e)}async setSorting(e){return await this.post(this.getPath()+"/set-sorting",{orderNumbers:e})}}const b=Q("settings/categories",{state:()=>({categoryLoading:!1,editCategory:null,editDialog:!1,storeDialog:!1,currentTab:$,categoryIds:[]}),getters:{categories:o=>k.findIn(o.categoryIds)},actions:{async loadCategories(){console.log("load categories"),this.categoryLoading=!0;try{this.categoryIds=await k.sync({include:"children.parent,parent","filter[user_id]":"auth"})}finally{this.categoryLoading=!1}},async saveCategory(o){await o.save()},setNewCategory(){const o=new k;o.type=this.currentTab,this.editCategory=o,this.storeDialog=!0},setEditCategory(o){this.editCategory=o,this.editDialog=!0},closeDialog(){this.editDialog=!1,this.storeDialog=!1,setTimeout(()=>{this.editCategory=!1},1e3)},async setSorting(o){const e=o.map(m=>m.id);this.categoryIds=e,await ie.setSorting(e)}}}),le={class:"s-handle-sorting-setting-category-item text-grey mr-3"},R={__name:"CategoryItem",props:{category:{type:Object,required:!0,validator:N}},setup(o){const e=b();return(m,s)=>{const i=n("v-icon"),d=n("v-list-item");return _(),v(d,{title:o.category.name,onClick:s[0]||(s[0]=p=>c(e).setEditCategory(o.category))},{prepend:a(()=>[h("div",le,[t(i,{icon:o.category.icon},null,8,["icon"])])]),_:1},8,["title"])}}},ce={class:"s-handle-sorting-setting-category-item text-grey mr-3"},de={__name:"CategoryItemGroup",props:{category:{type:Object,required:!0,validator:N}},setup(o){const e=b(),m=o,s=C(()=>m.category.children),i=U(s.value),d=()=>{e.setSorting(s.value)};return(p,l)=>{const g=n("v-icon"),V=n("v-badge"),w=n("v-list-item-title"),x=n("v-btn"),f=n("v-list-item"),D=n("v-list-group");return _(),v(D,null,{activator:a(({props:u})=>[t(f,{"prepend-icon":o.category.icon,onClick:l[0]||(l[0]=r=>c(e).setEditCategory(o.category))},{prepend:a(()=>[h("div",ce,[t(g,{icon:o.category.icon},null,8,["icon"])])]),append:a(({isActive:r})=>[t(x,W(u,{icon:r?"mdi-chevron-up":"mdi-chevron-down",variant:"text"}),null,16,["icon"])]),default:a(()=>[t(w,null,{default:a(()=>[h("span",null,Z(o.category.name),1),t(V,{content:o.category.childrenCount(),inline:"",color:"transparent"},null,8,["content"])]),_:1})]),_:2},1032,["prepend-icon"])]),default:a(()=>[t(c(L),{modelValue:i.value,"onUpdate:modelValue":l[1]||(l[1]=u=>i.value=u),"item-key":"id",handle:".s-handle-sorting-setting-category-item",style:{width:"100%"},onUpdate:d},{item:a(({element:u})=>[t(R,{category:u},null,8,["category"])]),_:1},8,["modelValue"])]),_:1})}}},I={__name:"CategoryList",props:{categories:{type:Array,default:()=>[],validator:J}},setup(o){const e=o,m=b(),s=C(()=>e.categories),i=()=>{m.setSorting(s.value)};return(d,p)=>{const l=n("v-list");return _(),v(l,null,{default:a(()=>[t(c(L),{list:s.value,"item-key":"id",handle:".s-handle-sorting-setting-category-item",style:{width:"100%"},onUpdate:i},{item:a(({element:g})=>[g.isChildren()?(_(),v(de,{key:0,category:g},null,8,["category"])):(_(),v(R,{key:1,category:g},null,8,["category"]))]),_:1},8,["list"])]),_:1})}}},ue={class:"pa-2"},me={__name:"CategoryListTabs",setup(o){const e=b(),m=C(()=>e.categories.filter(i=>i.type_id===$)),s=C(()=>e.categories.filter(i=>i.type_id===S));return(i,d)=>{const p=n("v-tab"),l=n("v-tabs"),g=n("v-card"),V=n("v-tabs-window-item"),w=n("v-tabs-window"),x=n("v-fade-transition");return _(),M(ee,null,[h("div",ue,[t(g,{loading:c(e).categoryLoading},{default:a(()=>[t(l,{modelValue:c(e).currentTab,"onUpdate:modelValue":d[0]||(d[0]=f=>c(e).currentTab=f),grow:""},{default:a(()=>[t(p,{value:c($)},{default:a(()=>d[2]||(d[2]=[E("Витрати")])),_:1},8,["value"]),t(p,{value:c(S)},{default:a(()=>d[3]||(d[3]=[E("Доходи")])),_:1},8,["value"])]),_:1},8,["modelValue"])]),_:1},8,["loading"])]),t(x,null,{default:a(()=>[c(e).categories.length?(_(),v(g,{key:0},{default:a(()=>[t(w,{modelValue:c(e).currentTab,"onUpdate:modelValue":d[1]||(d[1]=f=>c(e).currentTab=f)},{default:a(()=>[t(V,{value:c($)},{default:a(()=>[t(I,{categories:m.value},null,8,["categories"])]),_:1},8,["value"]),t(V,{value:c(S)},{default:a(()=>[t(I,{categories:s.value},null,8,["categories"])]),_:1},8,["value"])]),_:1},8,["modelValue"])]),_:1})):P("",!0)]),_:1})],64)}}},_e={class:"text-center mb-4"},j={__name:"TheFormCategory",props:{title:{type:String,required:!0}},setup(o){const e=b(),m=U(),s={name:"Немає",id:null},i=C(()=>!!l.value.exists),d=C({get:()=>{var u;return(u=l.value.parent)!=null&&u.exists?l.value.parent:s},set:u=>l.value.parent=u}),p=U(!1),l=C(()=>e.editCategory),g=C(x),{check:V}=ne(m),w=[ae];function x(){const u=e.categories.filter(r=>r.type_id===e.currentTab).filter(r=>r.id!==l.value.id).map(r=>({name:r.name,id:r.id}));return u.unshift(s),u}async function f(){await V()&&(e.closeDialog(),await e.saveCategory(l.value),await e.loadCategories())}function D(){e.closeDialog(),l.value.destroy()}return(u,r)=>{const q=n("v-text-field"),B=n("v-select"),F=n("v-form"),z=n("v-card-text"),A=n("v-divider"),T=n("v-btn"),X=n("v-spacer"),Y=n("v-card-actions"),G=n("v-card");return _(),v(G,{"prepend-icon":"mdi-credit-card-edit-outline",title:o.title},{default:a(()=>[t(z,null,{default:a(()=>[h("div",_e,[t(re,{modelValue:l.value.icon,"onUpdate:modelValue":r[0]||(r[0]=y=>l.value.icon=y)},null,8,["modelValue"])]),t(F,{onSubmit:te(f,["prevent"]),ref_key:"form",ref:m},{default:a(()=>[t(q,{label:"Назва категорії",modelValue:l.value.name,"onUpdate:modelValue":r[1]||(r[1]=y=>l.value.name=y),rules:w,autofocus:!i.value},null,8,["modelValue","autofocus"]),t(B,{modelValue:d.value,"onUpdate:modelValue":r[2]||(r[2]=y=>d.value=y),label:"Батьківська категорія",items:g.value,"item-title":"name","item-value":"id"},null,8,["modelValue","items"])]),_:1},512),t(se,{modelValue:p.value,"onUpdate:modelValue":r[3]||(r[3]=y=>p.value=y),title:"Видалити?",onSuccess:D},null,8,["modelValue"])]),_:1}),t(A),t(Y,null,{default:a(()=>[i.value?(_(),v(T,{key:0,class:"text-red",icon:"mdi-delete-outline",variant:"plain",onClick:r[4]||(r[4]=y=>p.value=!0)})):P("",!0),t(X),t(T,{text:"Відміна",size:"large",variant:"plain",onClick:r[5]||(r[5]=y=>c(e).closeDialog())}),t(T,{size:"large",color:"primary",text:"Зберегти",variant:"tonal",onClick:f})]),_:1})]),_:1},8,["title"])}}},ge={__name:"TheCategoryEdit",setup(o){const e=b();return(m,s)=>(_(),v(O,{modelValue:c(e).editDialog,"onUpdate:modelValue":s[0]||(s[0]=i=>c(e).editDialog=i)},{default:a(()=>[t(j,{title:"Редагування категорії"})]),_:1},8,["modelValue"]))}},ve={__name:"TheCategoryCreate",setup(o){const e=b();return(m,s)=>(_(),v(O,{modelValue:c(e).storeDialog,"onUpdate:modelValue":s[0]||(s[0]=i=>c(e).storeDialog=i)},{default:a(()=>[t(j,{title:"Нова категорія"})]),_:1},8,["modelValue"]))}},pe={class:""},De={__name:"Index",setup(o){const e=b();return oe(async()=>{await e.loadCategories()}),(m,s)=>{const i=n("v-btn");return _(),M("div",pe,[t(H,{"path-name":"settings.index",title:"Категорії"},{default:a(()=>[t(i,{icon:"mdi-plus",onClick:s[0]||(s[0]=d=>c(e).setNewCategory())})]),_:1}),t(me),t(ve),t(ge)])}}};export{De as default};
