parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=r(e))){var n=0,t=function(){};return{s:t,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a,i=!0,c=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return i=e.done,e},e:function(e){c=!0,a=e},f:function(){try{i||null==o.return||o.return()}finally{if(c)throw a}}}}function n(e){return a(e)||o(e)||r(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(e,n){if(e){if("string"==typeof e)return i(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?i(e,n):void 0}}function o(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function a(e){if(Array.isArray(e))return i(e)}function i(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}for(var c=[[],[],[],[]],l=n(document.querySelectorAll(".field-row")),f=document.querySelectorAll(".field-cell"),u=l.map(function(e){return n(e.querySelectorAll(".field-cell"))}),s=[2,2,2,2,2,2,2,2,2,4],d=document.querySelector(".start"),y=document.querySelector(".message-start"),m=document.querySelector(".message-lose"),v=document.querySelector(".message-win"),h=document.querySelector(".game-score"),b=0;b<4;b++)for(var p=0;p<4;p++)c[p].push(l[b].children[p]);var w=n(f),A=!1,x=!1;function T(){if(w.length){var e=function(e){return Math.floor(Math.random()*e.length)},n=w[e(w)],t=s[e(s)];n.classList="field-cell field-cell--".concat(t),n.innerText=t,w.splice(w.indexOf(n),1)}}var S=function(){y.style="display: none;",d.classList="button restart",d.innerText="Restart",T(),T(),A=!0},g=function(){m.classList.add("hidden"),v.classList.add("hidden"),w=n(f),h.innerText=0,f.forEach(function(e){e.innerText="",e.className="field-cell"}),T(),T()};function k(){var t,r=e([].concat(n(u),c));try{for(r.s();!(t=r.n()).done;)for(var o=t.value,a=0;a<3;a++)if(o[a].innerText===o[a+1].innerText)return!0}catch(i){r.e(i)}finally{r.f()}}function L(){var t,r=e(c);try{for(r.s();!(t=r.n()).done;){M(n(t.value).reverse())}}catch(o){r.e(o)}finally{r.f()}}function q(){var n,t=e(c);try{for(t.s();!(n=t.n()).done;){M(n.value)}}catch(r){t.e(r)}finally{t.f()}}function E(){var n,t=e(u);try{for(t.s();!(n=t.n()).done;){M(n.value)}}catch(r){t.e(r)}finally{t.f()}}function j(){var t,r=e(u);try{for(r.s();!(t=r.n()).done;){M(n(t.value).reverse())}}catch(o){r.e(o)}finally{r.f()}}function I(e){switch(w.length||k()||m.classList.remove("hidden"),e){case"ArrowUp":L();break;case"ArrowDown":q();break;case"ArrowRight":E();break;case"ArrowLeft":j()}f.forEach(function(e){e.removeAttribute("data-blocked")})}function N(e){e.innerText="",e.className="field-cell",w.push(e)}function O(e,n){e.innerText=n.innerText,e.className=n.className,w.splice(w.indexOf(e),1),N(n)}function D(e,n){var t=2*e.innerText;e.innerText=t,e.className="field-cell field-cell--".concat(t),h.innerText=+h.innerText+t,N(n),e.dataset.blocked=!0,n.dataset.blocked=!0,2048===t&&v.classList.remove("hidden")}function M(e){for(var n=3;n>0;n--){var t=w.includes(e[n])&&!w.includes(e[n-1]),r=e[n].innerText===e[n-1].innerText&&e[n].innerText.length&&!e[n-1].dataset.blocked;!r&&!t||x||(x=!0),r&&(D(e[n],e[n-1]),M(e)),t&&(O(e[n],e[n-1]),M(e))}}document.addEventListener("keydown",function(e){["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.key)&&(e.preventDefault(),I(e.key),x&&(T(),x=!1))}),d.addEventListener("click",function(){A?g():S()});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.d541b9ba.js.map