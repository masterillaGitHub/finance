import{Z as i,$ as x,r as e,o as f,d as V,w as l,j as t}from"./index-CMFz-0SU.js";const b={__name:"BottomConfirm",props:i({title:{type:String,required:!0},text:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:i(["success","cancel"],["update:modelValue"]),setup(a,{emit:m}){const s=m,n=x(a,"modelValue");function d(){n.value=!1,s("cancel")}return(g,o)=>{const c=e("v-btn"),u=e("v-spacer"),_=e("v-card-actions"),v=e("v-card"),p=e("v-bottom-sheet");return f(),V(p,{modelValue:n.value,"onUpdate:modelValue":o[1]||(o[1]=r=>n.value=r)},{default:l(()=>[t(v,{title:a.title,text:a.text},{default:l(()=>[t(_,null,{default:l(()=>[t(c,{text:"Відміна",variant:"plain",size:"x-large",onClick:d,color:"primary"}),t(u),t(c,{class:"text-red",text:"Ок",variant:"tonal",size:"x-large",onClick:o[0]||(o[0]=r=>s("success"))})]),_:1})]),_:1},8,["title","text"])]),_:1},8,["modelValue"])}}};export{b as _};