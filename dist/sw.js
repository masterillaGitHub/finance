if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,n)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let u={};const o=s=>l(s,i),t={module:{uri:i},exports:u,require:o};e[i]=Promise.all(r.map((s=>t[s]||o(s)))).then((s=>(n(...s),u)))}}define(["./workbox-3e911b1d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/bank.create.store-DQQJlxYg.js",revision:null},{url:"assets/BankAccountResource-CEDYndJS.js",revision:null},{url:"assets/BottomConfirm-D0xAdgFo.js",revision:null},{url:"assets/Budgets-YS_TRY4b.js",revision:null},{url:"assets/collection_service-BCQu0b3x.css",revision:null},{url:"assets/collection_service-D0sl-gsp.js",revision:null},{url:"assets/create-BOVWeO3C.css",revision:null},{url:"assets/Create-CJxowUjd.css",revision:null},{url:"assets/Create-CVYqysrc.js",revision:null},{url:"assets/Create-Dyxmtjzk.js",revision:null},{url:"assets/create.store-DeTHXswt.js",revision:null},{url:"assets/CurrenciesList-BTfDEdos.css",revision:null},{url:"assets/CurrenciesList-CEQTwQJt.js",revision:null},{url:"assets/currency_decimal_convert-KKbzYINo.js",revision:null},{url:"assets/Dashboard-CK-ntEIh.js",revision:null},{url:"assets/DialogComponent-Dq65oHek.js",revision:null},{url:"assets/Edit-CyUy0ykJ.js",revision:null},{url:"assets/entities-DFEtP537.js",revision:null},{url:"assets/form_validate-Cjfd8Uap.js",revision:null},{url:"assets/form.store-BqAqOrce.js",revision:null},{url:"assets/FullscreenAppBar-DguPK_gt.js",revision:null},{url:"assets/Index-2UMrjQT9.js",revision:null},{url:"assets/Index-aG7RsLIs.js",revision:null},{url:"assets/Index-Bb_vhk4o.js",revision:null},{url:"assets/index-BbjtBCCf.js",revision:null},{url:"assets/index-Bcyxngcs.css",revision:null},{url:"assets/Index-CFvrnbKh.js",revision:null},{url:"assets/Index-Ci_G_bac.js",revision:null},{url:"assets/Index-Cogkkvdp.css",revision:null},{url:"assets/Index-D9TFuRru.js",revision:null},{url:"assets/Login-CHyWfruu.js",revision:null},{url:"assets/Main-CvynOjUL.js",revision:null},{url:"assets/Main-QdKJ351X.css",revision:null},{url:"assets/Model-DgptP03g.js",revision:null},{url:"assets/Profile-BsF_Kg_5.js",revision:null},{url:"assets/Register-VsXH3CqN.js",revision:null},{url:"assets/Show-B_lwvUQj.js",revision:null},{url:"assets/Show-dtCh4Y7F.css",revision:null},{url:"assets/TheAmount-CCslqLeX.css",revision:null},{url:"assets/TheAmount-D-1ribwx.js",revision:null},{url:"assets/TheCategoryIcon-c0sYsjzQ.css",revision:null},{url:"assets/TheCategoryIcon-idbtjQY9.js",revision:null},{url:"assets/vuedraggable.umd-DjVsA9iB.js",revision:null},{url:"index.html",revision:"5c5ebabadc64be2c14353e1febc0e307"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"assets/images/icons/android-chrome-192x192.png",revision:"456c3acd64fcc90ba7f47b7898c843f1"},{url:"assets/images/icons/android-chrome-256x256.png",revision:"88dc2d31dad454dae0384f4b00be1e95"},{url:"manifest.webmanifest",revision:"ea7833394775992fa1d5de4a5d7e95dc"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
