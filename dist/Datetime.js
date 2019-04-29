!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.DataUtils=t():e.DataUtils=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t){class n{static format(e,t){let n={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in n)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?n[e]:("00"+n[e]).substr((""+n[e]).length)));return t}static getAge(e,t){if(!t||!e)return 0;let n=t.getFullYear()-e.getFullYear();return(t.getMonth()<e.getMonth()||t.getMonth()===e.getMonth()&&t.getDate()<=e.getDate())&&n--,n}static formatSeconds(e){let t=parseInt(e),n=0,r=0;t>=60&&(n=parseInt(t/60),t=parseInt(t%60),n>=60&&(r=parseInt(n/60),n=parseInt(n%60))),t<10&&(t="0"+parseInt(t));let o=""+t;return n>=0&&(n<10&&(n="0"+parseInt(n)),o=n+":"+o),r>=0&&(r<10&&(r="0"+parseInt(r)),o=r+":"+o),o}static formatTimeToSeconds(e){let t=e.split(":"),n=t[0],r=t[1],o=t[2];return parseInt(3600*n)+parseInt(60*r)+parseInt(o)}static dateDiff(e,t){let n=(e+"").split("");for(let e=0;e<13;e++)n[e]||(n[e]="0");let r=t-(e=1*n.join(""));if(r<0)return"不久前";let o=r/2592e6,a=r/6048e5,s=r/864e5,u=r/36e5,i=r/6e4,l=function(e){return e<10?"0"+e:e};return o>12?function(){let t=new Date(e);return t.getFullYear()+"年"+l(t.getMonth()+1)+"月"+l(t.getDate())+"日"}():o>=1?parseInt(o)+"月前":a>=1?parseInt(a)+"周前":s>=1?parseInt(s)+"天前":u>=1?parseInt(u)+"小时前":i>=1?parseInt(i)+"分钟前":"刚刚"}static unitToTimestamp(e,t){let n=0;switch(t){case"week":n=7*e*24*60*60*1e3;break;case"day":n=24*e*60*60*1e3;break;case"hour":n=60*e*60*1e3;break;case"minute":n=60*e*1e3;break;case"second":n=1e3*e}return n}static plus(e,t,r){const o=e.getTime(),a=n.unitToTimestamp(t,r);return new Date(o+a)}static minus(e,t,r){const o=e.getTime(),a=n.unitToTimestamp(t,r);return new Date(o-a)}}e.exports=n}])});
//# sourceMappingURL=Datetime.js.map