if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let o={};const u=s=>l(s,r),t={module:{uri:r},exports:o,require:u};e[r]=Promise.all(i.map((s=>t[s]||u(s)))).then((s=>(n(...s),o)))}}define(["./workbox-3e911b1d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/BottomConfirm-COa7FO5-.js",revision:null},{url:"assets/Budgets-C5tYdqAo.js",revision:null},{url:"assets/collection_service-BYHLdLVg.css",revision:null},{url:"assets/collection_service-D7uvF5ht.js",revision:null},{url:"assets/create--jAyzpAE.css",revision:null},{url:"assets/Create-B9gGIoMW.js",revision:null},{url:"assets/create.store-YR5BmbDU.js",revision:null},{url:"assets/CurrenciesList-FRp3ZG6X.js",revision:null},{url:"assets/CurrenciesList-TzJygbMF.css",revision:null},{url:"assets/currency_decimal_convert-KKbzYINo.js",revision:null},{url:"assets/Dashboard-DVfoaa4b.js",revision:null},{url:"assets/DialogComponent-Bxj4i0sA.css",revision:null},{url:"assets/DialogComponent-DSQFJjBp.js",revision:null},{url:"assets/Edit-Nj9TAygC.js",revision:null},{url:"assets/entities-DXs83vKd.js",revision:null},{url:"assets/form.store-BS9jCDq-.js",revision:null},{url:"assets/FullscreenAppBar-XBChpMej.js",revision:null},{url:"assets/Index-3jIsrcyU.css",revision:null},{url:"assets/Index-BRFs-ou3.js",revision:null},{url:"assets/Index-CItq-RR4.js",revision:null},{url:"assets/Index-CsW3C8WV.js",revision:null},{url:"assets/Index-DmljzBmZ.js",revision:null},{url:"assets/index-uNLpc8m8.js",revision:null},{url:"assets/index-Xb1a9KuY.css",revision:null},{url:"assets/Login-DtPVDNad.js",revision:null},{url:"assets/Main-B_VT0Iny.css",revision:null},{url:"assets/Main-DyYlfYNX.js",revision:null},{url:"assets/Profile-mzeqol5-.js",revision:null},{url:"assets/Register-DRfW0DcY.js",revision:null},{url:"assets/Show-JaFcfIrq.css",revision:null},{url:"assets/Show-jtQ9bfsl.js",revision:null},{url:"assets/TheAmount-BZJLW7Ed.js",revision:null},{url:"assets/TheAmount-Df3eqb5z.css",revision:null},{url:"index.html",revision:"d2c9f2613d630622565f2fca4aa8630c"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"assets/images/icons/android-chrome-192x192.png",revision:"456c3acd64fcc90ba7f47b7898c843f1"},{url:"assets/images/icons/android-chrome-256x256.png",revision:"88dc2d31dad454dae0384f4b00be1e95"},{url:"manifest.webmanifest",revision:"ea7833394775992fa1d5de4a5d7e95dc"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
