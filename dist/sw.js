if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const o=s=>i(s,r),t={module:{uri:r},exports:u,require:o};e[r]=Promise.all(n.map((s=>t[s]||o(s)))).then((s=>(l(...s),u)))}}define(["./workbox-3e911b1d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/BottomConfirm-KNcKc8gK.js",revision:null},{url:"assets/Budgets-CuKX-pCC.js",revision:null},{url:"assets/collection_service-BsPucFes.js",revision:null},{url:"assets/collection_service-BYHLdLVg.css",revision:null},{url:"assets/create--jAyzpAE.css",revision:null},{url:"assets/Create-iSegOlLN.js",revision:null},{url:"assets/create.store-PD5BznbF.js",revision:null},{url:"assets/CurrenciesList-DDLXAnUF.js",revision:null},{url:"assets/CurrenciesList-TzJygbMF.css",revision:null},{url:"assets/currency_decimal_convert-KKbzYINo.js",revision:null},{url:"assets/Dashboard-1uUZISkV.js",revision:null},{url:"assets/DialogComponent-Bxj4i0sA.css",revision:null},{url:"assets/DialogComponent-DLV67brD.js",revision:null},{url:"assets/Edit-DPXtY4RH.js",revision:null},{url:"assets/entities-CNJ8_7LR.js",revision:null},{url:"assets/form.store-s6a4CFB7.js",revision:null},{url:"assets/FullscreenAppBar-BZePO86Z.js",revision:null},{url:"assets/Index-BAN-aBiM.js",revision:null},{url:"assets/Index-BOUdgVat.css",revision:null},{url:"assets/index-CxbfblZZ.js",revision:null},{url:"assets/Index-DkIIQ8Vq.js",revision:null},{url:"assets/Index-Ft0DeSSg.js",revision:null},{url:"assets/Index-wNxN_cuN.js",revision:null},{url:"assets/index-Xb1a9KuY.css",revision:null},{url:"assets/Login-Dy5sHGYj.js",revision:null},{url:"assets/Main-B_VT0Iny.css",revision:null},{url:"assets/Main-CDGpXtXM.js",revision:null},{url:"assets/Profile-Dnu0iqCL.js",revision:null},{url:"assets/Register-Ci6x2aLu.js",revision:null},{url:"assets/Show-Bfr9VAum.css",revision:null},{url:"assets/Show-wYIZEB5Q.js",revision:null},{url:"assets/TheAmount-BqLHFafn.js",revision:null},{url:"assets/TheAmount-Bs0PSKPf.css",revision:null},{url:"index.html",revision:"dff1843cd5f7c630c4db7343152e64b5"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"assets/images/icons/android-chrome-192x192.png",revision:"456c3acd64fcc90ba7f47b7898c843f1"},{url:"assets/images/icons/android-chrome-256x256.png",revision:"88dc2d31dad454dae0384f4b00be1e95"},{url:"manifest.webmanifest",revision:"ea7833394775992fa1d5de4a5d7e95dc"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
