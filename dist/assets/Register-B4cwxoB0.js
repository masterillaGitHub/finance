import{_ as S,u as h,h as w,i,r as o,b as U,w as n,o as j,j as t,a as u,t as x,k,v as B}from"./index-IspYZlCs.js";const C="Register",D="",N={__name:"Register",setup(b,{expose:s}){s();const m=h(),e=w(),c=i(!1),v=i("User 1"),d=i("user1@test.com"),a=i("123123123"),l=new URL("/images/login.jpg",import.meta.url).href;async function f(){c.value=!0;try{await m.register(v.value,d.value,a.value)&&await e.push({name:"dashboard"})}finally{c.value=!1}}const _={authStore:m,router:e,loading:c,name:v,email:d,password:a,imgUrl:l,title:C,desc:D,register:f,ref:i,get useAuthStore(){return h},get useRouter(){return w}};return Object.defineProperty(_,"__isScriptSetup",{enumerable:!1,value:!0}),_}},A={class:"fill-height d-flex justify-center align-center"},P={class:"text-center"},W={class:"text-grey-lighten-1"};function E(b,s,m,e,c,v){const d=o("v-img"),a=o("v-text-field"),l=o("v-col"),f=o("v-row"),_=o("v-container"),g=o("v-form"),V=o("v-divider"),p=o("v-btn"),R=o("v-card-actions"),y=o("v-card");return j(),U(y,{loading:e.loading},{default:n(()=>[t(d,{src:e.imgUrl,height:"200",cover:""},{default:n(()=>[u("div",A,[u("div",P,[u("h3",{class:"text-h5 text-white"},x(e.title)),k(u("div",W,x(e.desc),512),[[B,!!e.desc]])])])]),_:1},8,["src"]),t(g,null,{default:n(()=>[t(_,null,{default:n(()=>[t(f,{dense:""},{default:n(()=>[t(l,{cols:"12"},{default:n(()=>[t(a,{modelValue:e.name,"onUpdate:modelValue":s[0]||(s[0]=r=>e.name=r),label:"Name"},null,8,["modelValue"])]),_:1}),t(l,{cols:"12"},{default:n(()=>[t(a,{modelValue:e.email,"onUpdate:modelValue":s[1]||(s[1]=r=>e.email=r),label:"E-mail"},null,8,["modelValue"])]),_:1}),t(l,{cols:"12"},{default:n(()=>[t(a,{modelValue:e.password,"onUpdate:modelValue":s[2]||(s[2]=r=>e.password=r),label:"Password"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),t(V),t(R,{class:"justify-space-between"},{default:n(()=>[t(p,{to:{name:"main"},text:"Back"}),t(p,{text:"Register",loading:e.loading,onClick:e.register},null,8,["loading"])]),_:1})]),_:1},8,["loading"])}const M=S(N,[["render",E],["__file","D:/My_files/Work/Web/projects/finance.local/src/views/Register.vue"]]);export{M as default};
