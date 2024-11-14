import{_ as E}from"./FullscreenAppBar-D0Sg2qiS.js";import{g as h,l as B}from"./entities-DwYTsaLf.js";import{a6 as M,C as R,r as s,o as c,d as u,w as n,a as q,j as e,b as d,m as w,c as D,f as j,i as V,X as z,e as F,y as O}from"./index-CMFz-0SU.js";import{D as A}from"./vuedraggable.umd-C5Bf9t5X.js";import{_ as k}from"./DialogComponent-CBXnObbi.js";import{r as P,u as X}from"./form_validate-BGtMXeK9.js";import{_ as G}from"./BottomConfirm-Da1d_FVv.js";import"./Model-CeNXf-rt.js";class H extends M{getResource(){return"transaction-tags"}static setSorting(t){return new this().setSorting(t)}async setSorting(t){return await this.post(this.getPath()+"/set-sorting",{orderNumbers:t})}}const g=R("settings/tags",{state:()=>({tagsLoading:!0,editTag:null,editDialog:!1,storeDialog:!1,tagIds:[]}),getters:{tags:a=>h.findIn(a.tagIds)},actions:{async loadTags(){console.log("load tags"),this.tagsLoading=!0;try{this.tagIds=await h.sync({"filter[user_id]":"auth"})}finally{this.tagsLoading=!1}},async saveTag(a){await a.save()},setNewTag(){this.editTag=new h,this.storeDialog=!0},setEditTag(a){this.editTag=a,this.editDialog=!0},closeDialog(){this.editDialog=!1,this.storeDialog=!1,setTimeout(()=>{this.editTag=!1},1e3)},async setSorting(a){const t=a.map(i=>i.id);this.tagIds=t,await H.setSorting(t)}}}),J={class:"s-handle-sorting-setting-tag-item text-grey mr-3"},K={__name:"TagItem",props:{tag:{type:Object,required:!0,validator:B}},setup(a){const t=g();return(i,o)=>{const r=s("v-icon"),l=s("v-list-item");return c(),u(l,{title:a.tag.name,onClick:o[0]||(o[0]=p=>d(t).setEditTag(a.tag))},{prepend:n(()=>[q("div",J,[e(r,{icon:"mdi-file-arrow-up-down-outline"})])]),_:1},8,["title"])}}},Q={class:"pa-2"},W={__name:"TheTagList",setup(a){const t=g(),i=w(()=>t.tags),o=()=>{t.setSorting(i.value)};return(r,l)=>{const p=s("v-card-text"),f=s("v-list"),v=s("v-fade-transition"),T=s("v-card");return c(),D("div",Q,[e(T,{loading:d(t).tagsLoading},{default:n(()=>[e(v,{mode:"out-in"},{default:n(()=>[i.value.length===0&&!d(t).tagsLoading?(c(),u(p,{key:0},{default:n(()=>l[0]||(l[0]=[j(" Тегів немає ")])),_:1})):(c(),u(f,{key:1},{default:n(()=>[e(d(A),{list:i.value,"item-key":"id",handle:".s-handle-sorting-setting-tag-item",style:{width:"100%"},onUpdate:o},{item:n(({element:x})=>[e(K,{tag:x},null,8,["tag"])]),_:1},8,["list"])]),_:1}))]),_:1})]),_:1},8,["loading"])])}}},$={__name:"TheFormTag",props:{title:{type:String,required:!0}},setup(a){const t=g(),i=V(),o=w(()=>!!l.value.exists),r=V(!1),l=w(()=>t.editTag),{check:p}=X(i),f=[P];async function v(){await p()&&(t.closeDialog(),await t.saveTag(l.value),await t.loadTags())}function T(){t.closeDialog(),l.value.destroy()}return(x,_)=>{const C=s("v-text-field"),S=s("v-form"),b=s("v-card-text"),I=s("v-divider"),y=s("v-btn"),L=s("v-spacer"),N=s("v-card-actions"),U=s("v-card");return c(),u(U,{"prepend-icon":"mdi-credit-card-edit-outline",title:a.title},{default:n(()=>[e(b,null,{default:n(()=>[e(S,{onSubmit:z(v,["prevent"]),ref_key:"form",ref:i},{default:n(()=>[e(C,{label:"Назва тегу",modelValue:l.value.name,"onUpdate:modelValue":_[0]||(_[0]=m=>l.value.name=m),rules:f,autofocus:!o.value},null,8,["modelValue","autofocus"])]),_:1},512),e(G,{modelValue:r.value,"onUpdate:modelValue":_[1]||(_[1]=m=>r.value=m),title:"Видалити?",onSuccess:T},null,8,["modelValue"])]),_:1}),e(I),e(N,null,{default:n(()=>[o.value?(c(),u(y,{key:0,class:"text-red",icon:"mdi-delete-outline",variant:"plain",onClick:_[2]||(_[2]=m=>r.value=!0)})):F("",!0),e(L),e(y,{text:"Відміна",size:"large",variant:"plain",onClick:_[3]||(_[3]=m=>d(t).closeDialog())}),e(y,{size:"large",color:"primary",text:"Зберегти",variant:"tonal",onClick:v})]),_:1})]),_:1},8,["title"])}}},Y={__name:"TheTagEdit",setup(a){const t=g();return(i,o)=>(c(),u(k,{modelValue:d(t).editDialog,"onUpdate:modelValue":o[0]||(o[0]=r=>d(t).editDialog=r)},{default:n(()=>[e($,{title:"Редагування тегу"})]),_:1},8,["modelValue"]))}},Z={__name:"TheTagCreate",setup(a){const t=g();return(i,o)=>(c(),u(k,{modelValue:d(t).storeDialog,"onUpdate:modelValue":o[0]||(o[0]=r=>d(t).storeDialog=r)},{default:n(()=>[e($,{title:"Новий тег"})]),_:1},8,["modelValue"]))}},tt={class:""},dt={__name:"Index",setup(a){const t=g();return O(async()=>{await t.loadTags()}),(i,o)=>{const r=s("v-btn");return c(),D("div",tt,[e(E,{"path-name":"settings.index",title:"Теги"},{default:n(()=>[e(r,{icon:"mdi-plus",onClick:o[0]||(o[0]=l=>d(t).setNewTag())})]),_:1}),e(W),e(Z),e(Y)])}}};export{dt as default};