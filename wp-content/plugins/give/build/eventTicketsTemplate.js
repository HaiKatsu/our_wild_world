!function(){"use strict";var e=window.wp.element;function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}function n(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function r(e){n(1,arguments);var r=Object.prototype.toString.call(e);return e instanceof Date||"object"===t(e)&&"[object Date]"===r?new Date(e.getTime()):"number"==typeof e||"[object Number]"===r?new Date(e):("string"!=typeof e&&"[object String]"!==r||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function a(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function i(e){n(1,arguments);var t=r(e),a=t.getUTCDay(),i=(a<1?7:0)+a-1;return t.setUTCDate(t.getUTCDate()-i),t.setUTCHours(0,0,0,0),t}function o(e){n(1,arguments);var t=r(e),a=t.getUTCFullYear(),o=new Date(0);o.setUTCFullYear(a+1,0,4),o.setUTCHours(0,0,0,0);var u=i(o),s=new Date(0);s.setUTCFullYear(a,0,4),s.setUTCHours(0,0,0,0);var c=i(s);return t.getTime()>=u.getTime()?a+1:t.getTime()>=c.getTime()?a:a-1}var u={};function s(){return u}function c(e,t){var i,o,u,c,l,d,m,h;n(1,arguments);var f=s(),g=a(null!==(i=null!==(o=null!==(u=null!==(c=null==t?void 0:t.weekStartsOn)&&void 0!==c?c:null==t||null===(l=t.locale)||void 0===l||null===(d=l.options)||void 0===d?void 0:d.weekStartsOn)&&void 0!==u?u:f.weekStartsOn)&&void 0!==o?o:null===(m=f.locale)||void 0===m||null===(h=m.options)||void 0===h?void 0:h.weekStartsOn)&&void 0!==i?i:0);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var v=r(e),w=v.getUTCDay(),b=(w<g?7:0)+w-g;return v.setUTCDate(v.getUTCDate()-b),v.setUTCHours(0,0,0,0),v}function l(e,t){var i,o,u,l,d,m,h,f;n(1,arguments);var g=r(e),v=g.getUTCFullYear(),w=s(),b=a(null!==(i=null!==(o=null!==(u=null!==(l=null==t?void 0:t.firstWeekContainsDate)&&void 0!==l?l:null==t||null===(d=t.locale)||void 0===d||null===(m=d.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==u?u:w.firstWeekContainsDate)&&void 0!==o?o:null===(h=w.locale)||void 0===h||null===(f=h.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==i?i:1);if(!(b>=1&&b<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var y=new Date(0);y.setUTCFullYear(v+1,0,b),y.setUTCHours(0,0,0,0);var p=c(y,t),T=new Date(0);T.setUTCFullYear(v,0,b),T.setUTCHours(0,0,0,0);var k=c(T,t);return g.getTime()>=p.getTime()?v+1:g.getTime()>=k.getTime()?v:v-1}function d(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}var m=function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return d("yy"===t?r%100:r,t.length)},h=function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):d(n+1,2)},f=function(e,t){return d(e.getUTCDate(),t.length)},g=function(e,t){return d(e.getUTCHours()%12||12,t.length)},v=function(e,t){return d(e.getUTCHours(),t.length)},w=function(e,t){return d(e.getUTCMinutes(),t.length)},b=function(e,t){return d(e.getUTCSeconds(),t.length)},y=function(e,t){var n=t.length,r=e.getUTCMilliseconds();return d(Math.floor(r*Math.pow(10,n-3)),t.length)},p={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return m(e,t)},Y:function(e,t,n,r){var a=l(e,r),i=a>0?a:1-a;return"YY"===t?d(i%100,2):"Yo"===t?n.ordinalNumber(i,{unit:"year"}):d(i,t.length)},R:function(e,t){return d(o(e),t.length)},u:function(e,t){return d(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return d(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return d(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return h(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return d(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,i,o){var u=function(e,t){n(1,arguments);var i=r(e),o=c(i,t).getTime()-function(e,t){var r,i,o,u,d,m,h,f;n(1,arguments);var g=s(),v=a(null!==(r=null!==(i=null!==(o=null!==(u=null==t?void 0:t.firstWeekContainsDate)&&void 0!==u?u:null==t||null===(d=t.locale)||void 0===d||null===(m=d.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==o?o:g.firstWeekContainsDate)&&void 0!==i?i:null===(h=g.locale)||void 0===h||null===(f=h.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==r?r:1),w=l(e,t),b=new Date(0);return b.setUTCFullYear(w,0,v),b.setUTCHours(0,0,0,0),c(b,t)}(i,t).getTime();return Math.round(o/6048e5)+1}(e,o);return"wo"===t?i.ordinalNumber(u,{unit:"week"}):d(u,t.length)},I:function(e,t,a){var u=function(e){n(1,arguments);var t=r(e),a=i(t).getTime()-function(e){n(1,arguments);var t=o(e),r=new Date(0);return r.setUTCFullYear(t,0,4),r.setUTCHours(0,0,0,0),i(r)}(t).getTime();return Math.round(a/6048e5)+1}(e);return"Io"===t?a.ordinalNumber(u,{unit:"week"}):d(u,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):f(e,t)},D:function(e,t,a){var i=function(e){n(1,arguments);var t=r(e),a=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var i=a-t.getTime();return Math.floor(i/864e5)+1}(e);return"Do"===t?a.ordinalNumber(i,{unit:"dayOfYear"}):d(i,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return d(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return d(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return d(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return g(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):v(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):d(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):d(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):w(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):b(e,t)},S:function(e,t){return y(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return k(a);case"XXXX":case"XX":return M(a);default:return M(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return k(a);case"xxxx":case"xx":return M(a);default:return M(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+T(a,":");default:return"GMT"+M(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+T(a,":");default:return"GMT"+M(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return d(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return d((r._originalDate||e).getTime(),t.length)}};function T(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=t||"";return n+String(a)+o+d(i,2)}function k(e,t){return e%60==0?(e>0?"-":"+")+d(Math.abs(e)/60,2):M(e,t)}function M(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+d(Math.floor(a/60),2)+n+d(a%60,2)}var C=p,D=function(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},E=function(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}},S={p:E,P:function(e,t){var n,r=e.match(/(P+)(p+)?/)||[],a=r[1],i=r[2];if(!i)return D(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",D(a,t)).replace("{{time}}",E(i,t))}},x=["D","DD"],_=["YY","YYYY"];function P(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var U={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function N(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}var W={date:N({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:N({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:N({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},Y={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function O(e){return function(t,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&e.formattingValues){var a=e.defaultFormattingWidth||e.defaultWidth,i=null!=n&&n.width?String(n.width):a;r=e.formattingValues[i]||e.formattingValues[a]}else{var o=e.defaultWidth,u=null!=n&&n.width?String(n.width):e.defaultWidth;r=e.values[u]||e.values[o]}return r[e.argumentCallback?e.argumentCallback(t):t]}}var q={ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:O({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:O({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:O({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:O({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:O({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function F(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=t.match(a);if(!i)return null;var o,u=i[0],s=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(s)?function(e,t){for(var n=0;n<e.length;n++)if(e[n].test(u))return n}(s):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&e[n].test(u))return n}(s);return o=e.valueCallback?e.valueCallback(c):c,{value:o=n.valueCallback?n.valueCallback(o):o,rest:t.slice(u.length)}}}var H,j={ordinalNumber:(H={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(H.matchPattern);if(!n)return null;var r=n[0],a=e.match(H.parsePattern);if(!a)return null;var i=H.valueCallback?H.valueCallback(a[0]):a[0];return{value:i=t.valueCallback?t.valueCallback(i):i,rest:e.slice(r.length)}}),era:F({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:F({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:F({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:F({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:F({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},L={code:"en-US",formatDistance:function(e,t,n){var r,a=U[e];return r="string"==typeof a?a:1===t?a.one:a.other.replace("{{count}}",t.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:W,formatRelative:function(e,t,n,r){return Y[e]},localize:q,match:j,options:{weekStartsOn:0,firstWeekContainsDate:1}},z=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,R=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,A=/^'([^]*?)'?$/,G=/''/g,Q=/[a-zA-Z]/;function B(e,i,o){var u,c,l,d,m,h,f,g,v,w,b,y,p,T,k,M,D,E;n(2,arguments);var U=String(i),N=s(),W=null!==(u=null!==(c=null==o?void 0:o.locale)&&void 0!==c?c:N.locale)&&void 0!==u?u:L,Y=a(null!==(l=null!==(d=null!==(m=null!==(h=null==o?void 0:o.firstWeekContainsDate)&&void 0!==h?h:null==o||null===(f=o.locale)||void 0===f||null===(g=f.options)||void 0===g?void 0:g.firstWeekContainsDate)&&void 0!==m?m:N.firstWeekContainsDate)&&void 0!==d?d:null===(v=N.locale)||void 0===v||null===(w=v.options)||void 0===w?void 0:w.firstWeekContainsDate)&&void 0!==l?l:1);if(!(Y>=1&&Y<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var O=a(null!==(b=null!==(y=null!==(p=null!==(T=null==o?void 0:o.weekStartsOn)&&void 0!==T?T:null==o||null===(k=o.locale)||void 0===k||null===(M=k.options)||void 0===M?void 0:M.weekStartsOn)&&void 0!==p?p:N.weekStartsOn)&&void 0!==y?y:null===(D=N.locale)||void 0===D||null===(E=D.options)||void 0===E?void 0:E.weekStartsOn)&&void 0!==b?b:0);if(!(O>=0&&O<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!W.localize)throw new RangeError("locale must contain localize property");if(!W.formatLong)throw new RangeError("locale must contain formatLong property");var q=r(e);if(!function(e){if(n(1,arguments),!function(e){return n(1,arguments),e instanceof Date||"object"===t(e)&&"[object Date]"===Object.prototype.toString.call(e)}(e)&&"number"!=typeof e)return!1;var a=r(e);return!isNaN(Number(a))}(q))throw new RangeError("Invalid time value");var F=function(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}(q),H=function(e,t){return n(2,arguments),function(e,t){n(2,arguments);var i=r(e).getTime(),o=a(t);return new Date(i+o)}(e,-a(t))}(q,F),j={firstWeekContainsDate:Y,weekStartsOn:O,locale:W,_originalDate:q};return U.match(R).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,S[t])(e,W.formatLong):e})).join("").match(z).map((function(t){if("''"===t)return"'";var n,r,a=t[0];if("'"===a)return(r=(n=t).match(A))?r[1].replace(G,"'"):n;var u,s=C[a];if(s)return null!=o&&o.useAdditionalWeekYearTokens||(u=t,-1===_.indexOf(u))||P(t,i,String(e)),null!=o&&o.useAdditionalDayOfYearTokens||!function(e){return-1!==x.indexOf(e)}(t)||P(t,i,String(e)),s(H,t,W.localize,j);if(a.match(Q))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return t})).join("")}function X({title:t,startDateTime:n}){const r=B(n,"EEEE, MMMM do, hh:mmaaa"),a=B(n,"dd"),i=B(n,"MMM");return(0,e.createElement)("div",{className:"givewp-event-tickets__header"},(0,e.createElement)("div",{className:"givewp-event-tickets__header__date"},a," ",(0,e.createElement)("span",null,i)),(0,e.createElement)("h4",{className:"givewp-event-tickets__header__title"},t),(0,e.createElement)("p",{className:"givewp-event-tickets__header__full-date"},r))}function I({description:t}){return(0,e.createElement)("div",{className:"givewp-event-tickets__description"},(0,e.createElement)("p",null,t))}var J=window.wp.i18n,V=window.React,$=window.wp.components,K=window.wp.primitives,Z=(0,V.createElement)(K.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,V.createElement)(K.Path,{d:"M7 11.5h10V13H7z"})),ee=(0,V.createElement)(K.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,V.createElement)(K.Path,{d:"M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z"}));function te({ticketType:t,currency:n,currencyRate:r,selectedTickets:a,handleSelect:i}){const o=function(e,t){return(0,V.useMemo)((()=>function(e,t){return new Intl.NumberFormat(navigator.language,{style:"currency",currency:e,...t})}(e,t)),[e,navigator.language])}(n),u=t.price>0?o.format(Number(t.price)*r/100):(0,J.__)("Free","give"),s=t.ticketsAvailable-a,c=e=>t=>{t.preventDefault(),i(e)};return(0,e.createElement)("div",{className:"givewp-event-tickets__tickets__ticket",key:t.id},(0,e.createElement)("div",{className:"givewp-event-tickets__tickets__ticket__description"},(0,e.createElement)("h5",null,t.title),(0,e.createElement)("p",null,u),(0,e.createElement)("p",null,t.description)),(0,e.createElement)("div",{className:"givewp-event-tickets__tickets__ticket__quantity"},s>0?(0,e.createElement)(e.Fragment,null,(0,e.createElement)("div",{className:"givewp-event-tickets__tickets__ticket__quantity__input"},(0,e.createElement)("button",{onClick:c(a-1)},(0,e.createElement)($.Icon,{icon:Z})),(0,e.createElement)("input",{type:"text",value:a}),(0,e.createElement)("button",{onClick:c(a+1)},(0,e.createElement)($.Icon,{icon:ee}))),(0,e.createElement)("p",{className:"givewp-event-tickets__tickets__ticket__quantity__availability"},s," ",(0,J.__)("remaining","give"))):(0,e.createElement)("span",null,(0,J.__)("Sold out","give"))))}function ne({ticketTypes:t,ticketsLabel:n,currency:r,currencyRate:a,selectedTickets:i=[],handleSelect:o=null}){return t?.length?(0,e.createElement)("div",{className:"givewp-event-tickets__tickets"},(0,e.createElement)("h4",null,n),t.map((t=>{var n;return(0,e.createElement)(te,{ticketType:t,selectedTickets:null!==(n=i[t.id]?.quantity)&&void 0!==n?n:0,handleSelect:o?o(t.id,t.ticketsAvailable,t.price):()=>null,currency:r,currencyRate:a})}))):null}function re({name:t,ticketTypes:n,ticketsLabel:r}){var a;const[i,o]=(0,V.useState)([]),{useWatch:u,useCurrencyFormatter:s,useDonationFormSettings:c,useDonationSummary:l,useFormContext:d}=window.givewp.form.hooks,{currencySwitcherSettings:m}=c(),{setValue:h}=d(),f=u({name:"currency"}),g=m.find((e=>e.id===f)),v=(null!==(a=g?.exchangeRate)&&void 0!==a?a:Number("1.00"))||1,w=s(f,{minimumFractionDigits:g?.exchangeRateFractionDigits}),b=l();return(0,V.useEffect)((()=>{let e=0;Object.keys(i).forEach((t=>{var r;const a=n.find((e=>e.id===Number(t))),o=null!==(r=i[t]?.quantity)&&void 0!==r?r:0;if(o>0){const n=a.price*o*v;b.addItem({id:`eventTickets-${t}`,label:`Ticket (${a.title}) x${o}`,value:n>0?w.format(n/100):(0,J.__)("Free","give")}),e+=n}else b.removeItem(`eventTickets-${t}`)})),e>0?b.addToTotal("eventTickets",e/100):b.removeFromTotal("eventTickets"),h(t,JSON.stringify(Object.values(i)))}),[n,i,f]),(0,e.createElement)(ne,{ticketTypes:n,ticketsLabel:r,currency:f,currencyRate:v,selectedTickets:i,handleSelect:(e,t,n)=>r=>{r<0&&(r=0),r>t&&(r=t),o((t=>(t[e]={ticketId:e,quantity:r,amount:r*n*v},{...t})))}})}window.givewp.form.templates.fields.eventTickets=function({name:t,id:n,title:r,startDateTime:a,description:i,ticketTypes:o,ticketsLabel:u,soldOutMessage:s}){return(0,e.createElement)("div",{className:"givewp-event-tickets"},(0,e.createElement)(X,{title:r,startDateTime:new Date(a)}),i&&(0,e.createElement)(I,{description:i}),(0,e.createElement)(re,{name:t,ticketTypes:o,ticketsLabel:u}))}}();