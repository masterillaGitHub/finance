function o(r){return JSON.parse(JSON.stringify(r))}function c(){return Date.now().toString(36)+Math.random().toString(36).substring(2)}function i(r,t,e){return r.map(n=>n===t?e:n)}function f(r,t={}){return a(r,"UAH",t)}function a(r,t="UAH",e={},n="uk-UA"){if(typeof r!="number")return r;const u={style:"currency",currency:t,currencyDisplay:"narrowSymbol"};return new Intl.NumberFormat(n,{...u,...e}).format(r)}function y(r,t){return Object.assign(r,t)}function p(r){return Array.isArray(r)?r.length===0:Object.keys(r).length===0}function m(r,t){return r.reduce((e,n)=>parseInt(e,10)+parseInt(n[t],10),0)}export{a,c as b,m as c,o as d,p as i,i as r,f as t,y as u};
