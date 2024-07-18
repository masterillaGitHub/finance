import{G as K,a0 as C,T as P,A as D,a1 as W,Q as ct}from"./index-CsBXRI5z.js";import{C as R,A as Q,e as dt}from"./Transaction-CMZ7FxtM.js";const pn=K("accounts/show",{state:()=>({editDialog:!1}),getters:{},actions:{}});function m(t){const e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new t.constructor(+t):typeof t=="number"||e==="[object Number]"||typeof t=="string"||e==="[object String]"?new Date(t):new Date(NaN)}function p(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}function Z(t,e){const n=m(t);return isNaN(e)?p(t,NaN):(e&&n.setDate(n.getDate()+e),n)}const tt=6048e5,lt=864e5;let et={};function E(){return et}function ft(t){et=t}function S(t,e){var s,c,d,h;const n=E(),a=(e==null?void 0:e.weekStartsOn)??((c=(s=e==null?void 0:e.locale)==null?void 0:s.options)==null?void 0:c.weekStartsOn)??n.weekStartsOn??((h=(d=n.locale)==null?void 0:d.options)==null?void 0:h.weekStartsOn)??0,r=m(t),i=r.getDay(),u=(i<a?7:0)+i-a;return r.setDate(r.getDate()-u),r.setHours(0,0,0,0),r}function I(t){return S(t,{weekStartsOn:1})}function nt(t){const e=m(t),n=e.getFullYear(),a=p(t,0);a.setFullYear(n+1,0,4),a.setHours(0,0,0,0);const r=I(a),i=p(t,0);i.setFullYear(n,0,4),i.setHours(0,0,0,0);const u=I(i);return e.getTime()>=r.getTime()?n+1:e.getTime()>=u.getTime()?n:n-1}function F(t){const e=m(t);return e.setHours(0,0,0,0),e}function j(t){const e=m(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function mt(t,e){const n=F(t),a=F(e),r=+n-j(n),i=+a-j(a);return Math.round((r-i)/lt)}function ht(t){const e=nt(t),n=p(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),I(n)}function _(t){return p(t,Date.now())}function $(t,e){const n=F(t),a=F(e);return+n==+a}function gt(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function yt(t){if(!gt(t)&&typeof t!="number")return!1;const e=m(t);return!isNaN(Number(e))}function wt(t){const e=m(t),n=p(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}const bt={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},pt=(t,e,n)=>{let a;const r=bt[t];return typeof r=="string"?a=r:e===1?a=r.one:a=r.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a};function k(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const vt={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},Pt={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},Mt={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},St={date:k({formats:vt,defaultWidth:"full"}),time:k({formats:Pt,defaultWidth:"full"}),dateTime:k({formats:Mt,defaultWidth:"full"})},Ot={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},Wt=(t,e,n,a)=>Ot[t];function y(t){return(e,n)=>{const a=n!=null&&n.context?String(n.context):"standalone";let r;if(a==="formatting"&&t.formattingValues){const u=t.defaultFormattingWidth||t.defaultWidth,s=n!=null&&n.width?String(n.width):u;r=t.formattingValues[s]||t.formattingValues[u]}else{const u=t.defaultWidth,s=n!=null&&n.width?String(n.width):t.defaultWidth;r=t.values[s]||t.values[u]}const i=t.argumentCallback?t.argumentCallback(e):e;return r[i]}}const kt={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},Dt={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},Tt={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},xt={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Nt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},Gt={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},Et=(t,e)=>{const n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},Yt={ordinalNumber:Et,era:y({values:kt,defaultWidth:"wide"}),quarter:y({values:Dt,defaultWidth:"wide",argumentCallback:t=>t-1}),month:y({values:Tt,defaultWidth:"wide"}),day:y({values:xt,defaultWidth:"wide"}),dayPeriod:y({values:Nt,defaultWidth:"wide",formattingValues:Gt,defaultFormattingWidth:"wide"})};function w(t){return(e,n={})=>{const a=n.width,r=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],i=e.match(r);if(!i)return null;const u=i[0],s=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(s)?It(s,b=>b.test(u)):Ct(s,b=>b.test(u));let d;d=t.valueCallback?t.valueCallback(c):c,d=n.valueCallback?n.valueCallback(d):d;const h=e.slice(u.length);return{value:d,rest:h}}}function Ct(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function It(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function at(t){return(e,n={})=>{const a=e.match(t.matchPattern);if(!a)return null;const r=a[0],i=e.match(t.parsePattern);if(!i)return null;let u=t.valueCallback?t.valueCallback(i[0]):i[0];u=n.valueCallback?n.valueCallback(u):u;const s=e.slice(r.length);return{value:u,rest:s}}}const Ft=/^(\d+)(th|st|nd|rd)?/i,At=/\d+/i,qt={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},_t={any:[/^b/i,/^(a|c)/i]},$t={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Vt={any:[/1/i,/2/i,/3/i,/4/i]},Ht={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Xt={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Lt={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Rt={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Qt={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},jt={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Bt={ordinalNumber:at({matchPattern:Ft,parsePattern:At,valueCallback:t=>parseInt(t,10)}),era:w({matchPatterns:qt,defaultMatchWidth:"wide",parsePatterns:_t,defaultParseWidth:"any"}),quarter:w({matchPatterns:$t,defaultMatchWidth:"wide",parsePatterns:Vt,defaultParseWidth:"any",valueCallback:t=>t+1}),month:w({matchPatterns:Ht,defaultMatchWidth:"wide",parsePatterns:Xt,defaultParseWidth:"any"}),day:w({matchPatterns:Lt,defaultMatchWidth:"wide",parsePatterns:Rt,defaultParseWidth:"any"}),dayPeriod:w({matchPatterns:Qt,defaultMatchWidth:"any",parsePatterns:jt,defaultParseWidth:"any"})},zt={code:"en-US",formatDistance:pt,formatLong:St,formatRelative:Wt,localize:Yt,match:Bt,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Jt(t){const e=m(t);return mt(e,wt(e))+1}function Ut(t){const e=m(t),n=+I(e)-+ht(e);return Math.round(n/tt)+1}function rt(t,e){var h,b,T,x;const n=m(t),a=n.getFullYear(),r=E(),i=(e==null?void 0:e.firstWeekContainsDate)??((b=(h=e==null?void 0:e.locale)==null?void 0:h.options)==null?void 0:b.firstWeekContainsDate)??r.firstWeekContainsDate??((x=(T=r.locale)==null?void 0:T.options)==null?void 0:x.firstWeekContainsDate)??1,u=p(t,0);u.setFullYear(a+1,0,i),u.setHours(0,0,0,0);const s=S(u,e),c=p(t,0);c.setFullYear(a,0,i),c.setHours(0,0,0,0);const d=S(c,e);return n.getTime()>=s.getTime()?a+1:n.getTime()>=d.getTime()?a:a-1}function Kt(t,e){var s,c,d,h;const n=E(),a=(e==null?void 0:e.firstWeekContainsDate)??((c=(s=e==null?void 0:e.locale)==null?void 0:s.options)==null?void 0:c.firstWeekContainsDate)??n.firstWeekContainsDate??((h=(d=n.locale)==null?void 0:d.options)==null?void 0:h.firstWeekContainsDate)??1,r=rt(t,e),i=p(t,0);return i.setFullYear(r,0,a),i.setHours(0,0,0,0),S(i,e)}function Zt(t,e){const n=m(t),a=+S(n,e)-+Kt(n,e);return Math.round(a/tt)+1}function o(t,e){const n=t<0?"-":"",a=Math.abs(t).toString().padStart(e,"0");return n+a}const v={y(t,e){const n=t.getFullYear(),a=n>0?n:1-n;return o(e==="yy"?a%100:a,e.length)},M(t,e){const n=t.getMonth();return e==="M"?String(n+1):o(n+1,2)},d(t,e){return o(t.getDate(),e.length)},a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(t,e){return o(t.getHours()%12||12,e.length)},H(t,e){return o(t.getHours(),e.length)},m(t,e){return o(t.getMinutes(),e.length)},s(t,e){return o(t.getSeconds(),e.length)},S(t,e){const n=e.length,a=t.getMilliseconds(),r=Math.trunc(a*Math.pow(10,n-3));return o(r,e.length)}},O={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},B={G:function(t,e,n){const a=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});case"GGGG":default:return n.era(a,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){const a=t.getFullYear(),r=a>0?a:1-a;return n.ordinalNumber(r,{unit:"year"})}return v.y(t,e)},Y:function(t,e,n,a){const r=rt(t,a),i=r>0?r:1-r;if(e==="YY"){const u=i%100;return o(u,2)}return e==="Yo"?n.ordinalNumber(i,{unit:"year"}):o(i,e.length)},R:function(t,e){const n=nt(t);return o(n,e.length)},u:function(t,e){const n=t.getFullYear();return o(n,e.length)},Q:function(t,e,n){const a=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return o(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,n){const a=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return o(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,n){const a=t.getMonth();switch(e){case"M":case"MM":return v.M(t,e);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,n){const a=t.getMonth();switch(e){case"L":return String(a+1);case"LL":return o(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(t,e,n,a){const r=Zt(t,a);return e==="wo"?n.ordinalNumber(r,{unit:"week"}):o(r,e.length)},I:function(t,e,n){const a=Ut(t);return e==="Io"?n.ordinalNumber(a,{unit:"week"}):o(a,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getDate(),{unit:"date"}):v.d(t,e)},D:function(t,e,n){const a=Jt(t);return e==="Do"?n.ordinalNumber(a,{unit:"dayOfYear"}):o(a,e.length)},E:function(t,e,n){const a=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});case"EEEE":default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,n,a){const r=t.getDay(),i=(r-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return o(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});case"eeee":default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(t,e,n,a){const r=t.getDay(),i=(r-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return o(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});case"cccc":default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(t,e,n){const a=t.getDay(),r=a===0?7:a;switch(e){case"i":return String(r);case"ii":return o(r,e.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});case"iiii":default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,n){const r=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){const a=t.getHours();let r;switch(a===12?r=O.noon:a===0?r=O.midnight:r=a/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){const a=t.getHours();let r;switch(a>=17?r=O.evening:a>=12?r=O.afternoon:a>=4?r=O.morning:r=O.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){let a=t.getHours()%12;return a===0&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return v.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getHours(),{unit:"hour"}):v.H(t,e)},K:function(t,e,n){const a=t.getHours()%12;return e==="Ko"?n.ordinalNumber(a,{unit:"hour"}):o(a,e.length)},k:function(t,e,n){let a=t.getHours();return a===0&&(a=24),e==="ko"?n.ordinalNumber(a,{unit:"hour"}):o(a,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):v.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getSeconds(),{unit:"second"}):v.s(t,e)},S:function(t,e){return v.S(t,e)},X:function(t,e,n){const a=t.getTimezoneOffset();if(a===0)return"Z";switch(e){case"X":return J(a);case"XXXX":case"XX":return M(a);case"XXXXX":case"XXX":default:return M(a,":")}},x:function(t,e,n){const a=t.getTimezoneOffset();switch(e){case"x":return J(a);case"xxxx":case"xx":return M(a);case"xxxxx":case"xxx":default:return M(a,":")}},O:function(t,e,n){const a=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+z(a,":");case"OOOO":default:return"GMT"+M(a,":")}},z:function(t,e,n){const a=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+z(a,":");case"zzzz":default:return"GMT"+M(a,":")}},t:function(t,e,n){const a=Math.trunc(t.getTime()/1e3);return o(a,e.length)},T:function(t,e,n){const a=t.getTime();return o(a,e.length)}};function z(t,e=""){const n=t>0?"-":"+",a=Math.abs(t),r=Math.trunc(a/60),i=a%60;return i===0?n+String(r):n+String(r)+e+o(i,2)}function J(t,e){return t%60===0?(t>0?"-":"+")+o(Math.abs(t)/60,2):M(t,e)}function M(t,e=""){const n=t>0?"-":"+",a=Math.abs(t),r=o(Math.trunc(a/60),2),i=o(a%60,2);return n+r+e+i}const U=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},it=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},te=(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],a=n[1],r=n[2];if(!r)return U(t,e);let i;switch(a){case"P":i=e.dateTime({width:"short"});break;case"PP":i=e.dateTime({width:"medium"});break;case"PPP":i=e.dateTime({width:"long"});break;case"PPPP":default:i=e.dateTime({width:"full"});break}return i.replace("{{date}}",U(a,e)).replace("{{time}}",it(r,e))},ee={p:it,P:te},ne=/^D+$/,ae=/^Y+$/,re=["D","DD","YY","YYYY"];function ie(t){return ne.test(t)}function oe(t){return ae.test(t)}function ue(t,e,n){const a=se(t,e,n);if(console.warn(a),re.includes(t))throw new RangeError(a)}function se(t,e,n){const a=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${a} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const ce=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,de=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,le=/^'([^]*?)'?$/,fe=/''/g,me=/[a-zA-Z]/;function he(t,e,n){var h,b,T,x;const a=E(),r=a.locale??zt,i=a.firstWeekContainsDate??((b=(h=a.locale)==null?void 0:h.options)==null?void 0:b.firstWeekContainsDate)??1,u=a.weekStartsOn??((x=(T=a.locale)==null?void 0:T.options)==null?void 0:x.weekStartsOn)??0,s=m(t);if(!yt(s))throw new RangeError("Invalid time value");let c=e.match(de).map(g=>{const f=g[0];if(f==="p"||f==="P"){const q=ee[f];return q(g,r.formatLong)}return g}).join("").match(ce).map(g=>{if(g==="''")return{isToken:!1,value:"'"};const f=g[0];if(f==="'")return{isToken:!1,value:ge(g)};if(B[f])return{isToken:!0,value:g};if(f.match(me))throw new RangeError("Format string contains an unescaped latin alphabet character `"+f+"`");return{isToken:!1,value:g}});r.localize.preprocessor&&(c=r.localize.preprocessor(s,c));const d={firstWeekContainsDate:i,weekStartsOn:u,locale:r};return c.map(g=>{if(!g.isToken)return g.value;const f=g.value;(oe(f)||ie(f))&&ue(f,e,String(t));const q=B[f[0]];return q(s,f,r.localize,d)}).join("")}function ge(t){const e=t.match(le);return e?e[1].replace(fe,"'"):t}function ot(t,e,n){const a=S(t,n),r=S(e,n);return+a==+r}function ye(t){return $(t,_(t))}function we(t){return $(t,Z(_(t),1))}function be(t,e){return Z(t,-e)}function pe(t){return $(t,be(_(t),1))}function ve(t){const e={},n=E();for(const a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);for(const a in t)Object.prototype.hasOwnProperty.call(t,a)&&(t[a]===void 0?delete e[a]:e[a]=t[a]);ft(e)}function N(t,e){if(t.one!==void 0&&e===1)return t.one;const n=e%10,a=e%100;return n===1&&a!==11?t.singularNominative.replace("{{count}}",String(e)):n>=2&&n<=4&&(a<10||a>20)?t.singularGenitive.replace("{{count}}",String(e)):t.pluralGenitive.replace("{{count}}",String(e))}function l(t){return(e,n)=>n&&n.addSuffix?n.comparison&&n.comparison>0?t.future?N(t.future,e):"за "+N(t.regular,e):t.past?N(t.past,e):N(t.regular,e)+" тому":N(t.regular,e)}const Pe=(t,e)=>e&&e.addSuffix?e.comparison&&e.comparison>0?"за півхвилини":"півхвилини тому":"півхвилини",Me={lessThanXSeconds:l({regular:{one:"менше секунди",singularNominative:"менше {{count}} секунди",singularGenitive:"менше {{count}} секунд",pluralGenitive:"менше {{count}} секунд"},future:{one:"менше, ніж за секунду",singularNominative:"менше, ніж за {{count}} секунду",singularGenitive:"менше, ніж за {{count}} секунди",pluralGenitive:"менше, ніж за {{count}} секунд"}}),xSeconds:l({regular:{singularNominative:"{{count}} секунда",singularGenitive:"{{count}} секунди",pluralGenitive:"{{count}} секунд"},past:{singularNominative:"{{count}} секунду тому",singularGenitive:"{{count}} секунди тому",pluralGenitive:"{{count}} секунд тому"},future:{singularNominative:"за {{count}} секунду",singularGenitive:"за {{count}} секунди",pluralGenitive:"за {{count}} секунд"}}),halfAMinute:Pe,lessThanXMinutes:l({regular:{one:"менше хвилини",singularNominative:"менше {{count}} хвилини",singularGenitive:"менше {{count}} хвилин",pluralGenitive:"менше {{count}} хвилин"},future:{one:"менше, ніж за хвилину",singularNominative:"менше, ніж за {{count}} хвилину",singularGenitive:"менше, ніж за {{count}} хвилини",pluralGenitive:"менше, ніж за {{count}} хвилин"}}),xMinutes:l({regular:{singularNominative:"{{count}} хвилина",singularGenitive:"{{count}} хвилини",pluralGenitive:"{{count}} хвилин"},past:{singularNominative:"{{count}} хвилину тому",singularGenitive:"{{count}} хвилини тому",pluralGenitive:"{{count}} хвилин тому"},future:{singularNominative:"за {{count}} хвилину",singularGenitive:"за {{count}} хвилини",pluralGenitive:"за {{count}} хвилин"}}),aboutXHours:l({regular:{singularNominative:"близько {{count}} години",singularGenitive:"близько {{count}} годин",pluralGenitive:"близько {{count}} годин"},future:{singularNominative:"приблизно за {{count}} годину",singularGenitive:"приблизно за {{count}} години",pluralGenitive:"приблизно за {{count}} годин"}}),xHours:l({regular:{singularNominative:"{{count}} годину",singularGenitive:"{{count}} години",pluralGenitive:"{{count}} годин"}}),xDays:l({regular:{singularNominative:"{{count}} день",singularGenitive:"{{count}} днi",pluralGenitive:"{{count}} днів"}}),aboutXWeeks:l({regular:{singularNominative:"близько {{count}} тижня",singularGenitive:"близько {{count}} тижнів",pluralGenitive:"близько {{count}} тижнів"},future:{singularNominative:"приблизно за {{count}} тиждень",singularGenitive:"приблизно за {{count}} тижні",pluralGenitive:"приблизно за {{count}} тижнів"}}),xWeeks:l({regular:{singularNominative:"{{count}} тиждень",singularGenitive:"{{count}} тижні",pluralGenitive:"{{count}} тижнів"}}),aboutXMonths:l({regular:{singularNominative:"близько {{count}} місяця",singularGenitive:"близько {{count}} місяців",pluralGenitive:"близько {{count}} місяців"},future:{singularNominative:"приблизно за {{count}} місяць",singularGenitive:"приблизно за {{count}} місяці",pluralGenitive:"приблизно за {{count}} місяців"}}),xMonths:l({regular:{singularNominative:"{{count}} місяць",singularGenitive:"{{count}} місяці",pluralGenitive:"{{count}} місяців"}}),aboutXYears:l({regular:{singularNominative:"близько {{count}} року",singularGenitive:"близько {{count}} років",pluralGenitive:"близько {{count}} років"},future:{singularNominative:"приблизно за {{count}} рік",singularGenitive:"приблизно за {{count}} роки",pluralGenitive:"приблизно за {{count}} років"}}),xYears:l({regular:{singularNominative:"{{count}} рік",singularGenitive:"{{count}} роки",pluralGenitive:"{{count}} років"}}),overXYears:l({regular:{singularNominative:"більше {{count}} року",singularGenitive:"більше {{count}} років",pluralGenitive:"більше {{count}} років"},future:{singularNominative:"більше, ніж за {{count}} рік",singularGenitive:"більше, ніж за {{count}} роки",pluralGenitive:"більше, ніж за {{count}} років"}}),almostXYears:l({regular:{singularNominative:"майже {{count}} рік",singularGenitive:"майже {{count}} роки",pluralGenitive:"майже {{count}} років"},future:{singularNominative:"майже за {{count}} рік",singularGenitive:"майже за {{count}} роки",pluralGenitive:"майже за {{count}} років"}})},Se=(t,e,n)=>(n=n||{},Me[t](e,n)),Oe={full:"EEEE, do MMMM y 'р.'",long:"do MMMM y 'р.'",medium:"d MMM y 'р.'",short:"dd.MM.y"},We={full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},ke={full:"{{date}} 'о' {{time}}",long:"{{date}} 'о' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},De={date:k({formats:Oe,defaultWidth:"full"}),time:k({formats:We,defaultWidth:"full"}),dateTime:k({formats:ke,defaultWidth:"full"})},V=["неділю","понеділок","вівторок","середу","четвер","п’ятницю","суботу"];function Te(t){const e=V[t];switch(t){case 0:case 3:case 5:case 6:return"'у минулу "+e+" о' p";case 1:case 2:case 4:return"'у минулий "+e+" о' p"}}function ut(t){return"'у "+V[t]+" о' p"}function xe(t){const e=V[t];switch(t){case 0:case 3:case 5:case 6:return"'у наступну "+e+" о' p";case 1:case 2:case 4:return"'у наступний "+e+" о' p"}}const Ne=(t,e,n)=>{const a=m(t),r=a.getDay();return ot(a,e,n)?ut(r):Te(r)},Ge=(t,e,n)=>{const a=m(t),r=a.getDay();return ot(a,e,n)?ut(r):xe(r)},Ee={lastWeek:Ne,yesterday:"'вчора о' p",today:"'сьогодні о' p",tomorrow:"'завтра о' p",nextWeek:Ge,other:"P"},Ye=(t,e,n,a)=>{const r=Ee[t];return typeof r=="function"?r(e,n,a):r},Ce={narrow:["до н.е.","н.е."],abbreviated:["до н. е.","н. е."],wide:["до нашої ери","нашої ери"]},Ie={narrow:["1","2","3","4"],abbreviated:["1-й кв.","2-й кв.","3-й кв.","4-й кв."],wide:["1-й квартал","2-й квартал","3-й квартал","4-й квартал"]},Fe={narrow:["С","Л","Б","К","Т","Ч","Л","С","В","Ж","Л","Г"],abbreviated:["січ.","лют.","берез.","квіт.","трав.","черв.","лип.","серп.","верес.","жовт.","листоп.","груд."],wide:["січень","лютий","березень","квітень","травень","червень","липень","серпень","вересень","жовтень","листопад","грудень"]},Ae={narrow:["С","Л","Б","К","Т","Ч","Л","С","В","Ж","Л","Г"],abbreviated:["січ.","лют.","берез.","квіт.","трав.","черв.","лип.","серп.","верес.","жовт.","листоп.","груд."],wide:["січня","лютого","березня","квітня","травня","червня","липня","серпня","вересня","жовтня","листопада","грудня"]},qe={narrow:["Н","П","В","С","Ч","П","С"],short:["нд","пн","вт","ср","чт","пт","сб"],abbreviated:["нед","пон","вів","сер","чтв","птн","суб"],wide:["неділя","понеділок","вівторок","середа","четвер","п’ятниця","субота"]},_e={narrow:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранок",afternoon:"день",evening:"веч.",night:"ніч"},abbreviated:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранок",afternoon:"день",evening:"веч.",night:"ніч"},wide:{am:"ДП",pm:"ПП",midnight:"північ",noon:"полудень",morning:"ранок",afternoon:"день",evening:"вечір",night:"ніч"}},$e={narrow:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"},abbreviated:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"},wide:{am:"ДП",pm:"ПП",midnight:"північ",noon:"полудень",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"}},Ve=(t,e)=>{const n=String(e==null?void 0:e.unit),a=Number(t);let r;return n==="date"?a===3||a===23?r="-є":r="-е":n==="minute"||n==="second"||n==="hour"?r="-а":r="-й",a+r},He={ordinalNumber:Ve,era:y({values:Ce,defaultWidth:"wide"}),quarter:y({values:Ie,defaultWidth:"wide",argumentCallback:t=>t-1}),month:y({values:Fe,defaultWidth:"wide",formattingValues:Ae,defaultFormattingWidth:"wide"}),day:y({values:qe,defaultWidth:"wide"}),dayPeriod:y({values:_e,defaultWidth:"any",formattingValues:$e,defaultFormattingWidth:"wide"})},Xe=/^(\d+)(-?(е|й|є|а|я))?/i,Le=/\d+/i,Re={narrow:/^((до )?н\.?\s?е\.?)/i,abbreviated:/^((до )?н\.?\s?е\.?)/i,wide:/^(до нашої ери|нашої ери|наша ера)/i},Qe={any:[/^д/i,/^н/i]},je={narrow:/^[1234]/i,abbreviated:/^[1234](-?[иі]?й?)? кв.?/i,wide:/^[1234](-?[иі]?й?)? квартал/i},Be={any:[/1/i,/2/i,/3/i,/4/i]},ze={narrow:/^[слбктчвжг]/i,abbreviated:/^(січ|лют|бер(ез)?|квіт|трав|черв|лип|серп|вер(ес)?|жовт|лис(топ)?|груд)\.?/i,wide:/^(січень|січня|лютий|лютого|березень|березня|квітень|квітня|травень|травня|червня|червень|липень|липня|серпень|серпня|вересень|вересня|жовтень|жовтня|листопад[а]?|грудень|грудня)/i},Je={narrow:[/^с/i,/^л/i,/^б/i,/^к/i,/^т/i,/^ч/i,/^л/i,/^с/i,/^в/i,/^ж/i,/^л/i,/^г/i],any:[/^сі/i,/^лю/i,/^б/i,/^к/i,/^т/i,/^ч/i,/^лип/i,/^се/i,/^в/i,/^ж/i,/^лис/i,/^г/i]},Ue={narrow:/^[нпвсч]/i,short:/^(нд|пн|вт|ср|чт|пт|сб)\.?/i,abbreviated:/^(нед|пон|вів|сер|че?тв|птн?|суб)\.?/i,wide:/^(неділ[яі]|понеділ[ок][ка]|вівтор[ок][ка]|серед[аи]|четвер(га)?|п\W*?ятниц[яі]|субот[аи])/i},Ke={narrow:[/^н/i,/^п/i,/^в/i,/^с/i,/^ч/i,/^п/i,/^с/i],any:[/^н/i,/^п[он]/i,/^в/i,/^с[ер]/i,/^ч/i,/^п\W*?[ят]/i,/^с[уб]/i]},Ze={narrow:/^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,abbreviated:/^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,wide:/^([дп]п|північ|полудень|ранок|ранку|день|дня|вечір|вечора|ніч|ночі)/i},tn={any:{am:/^дп/i,pm:/^пп/i,midnight:/^півн/i,noon:/^пол/i,morning:/^р/i,afternoon:/^д[ен]/i,evening:/^в/i,night:/^н/i}},en={ordinalNumber:at({matchPattern:Xe,parsePattern:Le,valueCallback:t=>parseInt(t,10)}),era:w({matchPatterns:Re,defaultMatchWidth:"wide",parsePatterns:Qe,defaultParseWidth:"any"}),quarter:w({matchPatterns:je,defaultMatchWidth:"wide",parsePatterns:Be,defaultParseWidth:"any",valueCallback:t=>t+1}),month:w({matchPatterns:ze,defaultMatchWidth:"wide",parsePatterns:Je,defaultParseWidth:"any"}),day:w({matchPatterns:Ue,defaultMatchWidth:"wide",parsePatterns:Ke,defaultParseWidth:"any"}),dayPeriod:w({matchPatterns:Ze,defaultMatchWidth:"wide",parsePatterns:tn,defaultParseWidth:"any"})},nn={code:"uk",formatDistance:Se,formatLong:De,formatRelative:Ye,localize:He,match:en,options:{weekStartsOn:1,firstWeekContainsDate:1}};function an(){return{text:e=>(ve({locale:nn}),ye(e)?"today":pe(e)?"yesterday":we(e)?"tomorrow":he(e,"iiii, d MMMM yyyy"))}}const Y=null,rn="type",A="account",H="category",vn="date",st="tag",X="to_account",L="to_amount";function on(t){switch(t.openStep){case rn:un(t);break;case A:sn(t);break;case H:dn(t);break;case X:cn(t);break;default:t.openStep=Y}}function un(t){C(t.accountId)?t.openStep=A:t.typeId!==P&&C(t.categoryId)?t.openStep=H:t.typeId===P&&D(t.accountTransferId)?t.openStep=X:t.typeId===P&&D(t.toAmount)?t.openStep=L:t.openStep=Y}function sn(t){t.typeId!==P&&C(t.categoryId)?t.openStep=H:t.typeId===P&&C(t.accountTransferId)?t.openStep=X:t.typeId===P&&D(t.toAmount)?t.openStep=L:t.openStep=Y}function cn(t){t.typeId===P&&D(t.toAmount)?t.openStep=L:D(t.tags)?t.openStep=st:t.openStep=Y}function dn(t){D(t.tags)?t.openStep=st:t.openStep=Y}const ln=t=>{const e=!!t.isEnabledValidate,n=t.amount!==0,a=W(t.accountId),r=t.typeId===P?W(t.toAccountId):W(t.categoryId);return e&&n&&a&&r},fn=t=>!t.isEnabledValidate||t.amount!==0,mn=t=>!t.isEnabledValidate||W(t.accountId),hn=t=>!t.isEnabledValidate||W(t.toAccountId),gn=t=>!t.isEnabledValidate||W(t.categoryId),G={check:ln,amount:fn,account:mn,toAccount:hn,category:gn},yn=an(),Pn=K("transactions/create",{state:()=>({openStep:A,amount:0,currencyId:1,typeId:1,accountId:null,categoryId:null,tagIds:[],date:new Date,toAccountId:null,toCurrencyId:null,toAmount:0,isEnabledValidate:!1}),getters:{getCurrency:t=>R.find(t.currencyId)??null,getToCurrency:t=>R.find(t.toCurrencyId)??null,getType:t=>ct.find(e=>e.id===t.typeId)??null,getAccount:t=>Q.find(t.accountId)??null,getToAccount:t=>Q.find(t.toAccountId)??null,getCategory:t=>dt.find(t.categoryId)??null,getDate:t=>yn.text(t.date),isValid:t=>G.check(t),isAmountValid:t=>G.amount(t),isAccountValid:t=>G.account(t),isToAccountValid:t=>G.toAccount(t),isCategoryValid:t=>G.category(t)},actions:{nextStep(){on(this)},reset(){this.openStep=A,this.amount=0,this.currencyId=1,this.typeId=1,this.accountId=null,this.categoryId=null,this.tagIds=[],this.date=new Date,this.toCurrencyId=null,this.toAccountId=null,this.toAmount=0,this.isEnabledValidate=!1}}});export{H as S,Pn as a,o as b,rn as c,st as d,vn as e,A as f,X as g,L as h,yt as i,an as j,on as n,be as s,m as t,pn as u,G as v};
