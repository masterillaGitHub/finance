if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,r)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let o={};const t=s=>i(s,l),u={module:{uri:l},exports:o,require:t};e[l]=Promise.all(n.map((s=>u[s]||t(s)))).then((s=>(r(...s),o)))}}define(["./workbox-3e911b1d"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/Budgets-Cg17mG8Z.js",revision:null},{url:"assets/Dashboard-DNBK_a2E.js",revision:null},{url:"assets/index-CKW_w9-6.js",revision:null},{url:"assets/Index-D10WMhVV.js",revision:null},{url:"assets/index-DweX_3Mg.css",revision:null},{url:"assets/Index-KI6UXLcR.css",revision:null},{url:"assets/Login-FwAb2m6l.js",revision:null},{url:"assets/Main-B_VT0Iny.css",revision:null},{url:"assets/Main-DCcRG09m.js",revision:null},{url:"assets/Register-CElcajKz.js",revision:null},{url:"assets/Show-BaqcrfYe.js",revision:null},{url:"assets/Show-C_0f-SZ9.css",revision:null},{url:"assets/TheDialog-C-cVHJB2.css",revision:null},{url:"assets/TheDialog-weroEluk.js",revision:null},{url:"index.html",revision:"544c2c67df6627d3d73c4d07ef1d000e"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"assets/images/icons/android-chrome-192x192.png",revision:"456c3acd64fcc90ba7f47b7898c843f1"},{url:"assets/images/icons/android-chrome-256x256.png",revision:"88dc2d31dad454dae0384f4b00be1e95"},{url:"manifest.webmanifest",revision:"ea7833394775992fa1d5de4a5d7e95dc"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));