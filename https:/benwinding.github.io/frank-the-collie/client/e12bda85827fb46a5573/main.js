!function(t){function e(e){for(var n,c,o=e[0],s=e[1],a=0,u=[];a<o.length;a++)c=o[a],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&u.push(r[c][0]),r[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);for(i&&i(e);u.length;)u.shift()()}var n={},r={3:0};function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise(function(e,c){n=r[t]=[e,c]});e.push(n[2]=o);var s,a=document.createElement("script");a.charset="utf-8",a.timeout=120,c.nc&&a.setAttribute("nonce",c.nc),a.src=function(t){return c.p+"e12bda85827fb46a5573/"+({0:"about",1:"contact",2:"index",4:"vendors~about"}[t]||t)+"."+t+".js"}(t);var i=new Error;s=function(e){a.onerror=a.onload=null,clearTimeout(u);var n=r[t];if(0!==n){if(n){var c=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;i.message="Loading chunk "+t+" failed.\n("+c+": "+o+")",i.name="ChunkLoadError",i.type=c,i.request=o,n[1](i)}r[t]=void 0}};var u=setTimeout(function(){s({type:"timeout",target:a})},12e4);a.onerror=a.onload=s,document.head.appendChild(a)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="client/",c.oe=function(t){throw console.error(t),t};var o=window.webpackJsonp=window.webpackJsonp||[],s=o.push.bind(o);o.push=e,o=o.slice();for(var a=0;a<o.length;a++)e(o[a]);var i=s;c(c.s=1)}([function(t,e,n){"use strict";function r(){}n.d(e,"a",function(){return et}),n.d(e,"b",function(){return d}),n.d(e,"c",function(){return c}),n.d(e,"d",function(){return y}),n.d(e,"e",function(){return z}),n.d(e,"f",function(){return w}),n.d(e,"g",function(){return E}),n.d(e,"h",function(){return x}),n.d(e,"i",function(){return l}),n.d(e,"j",function(){return Z}),n.d(e,"k",function(){return h}),n.d(e,"l",function(){return j}),n.d(e,"m",function(){return g}),n.d(e,"n",function(){return I}),n.d(e,"o",function(){return b}),n.d(e,"p",function(){return f}),n.d(e,"q",function(){return X}),n.d(e,"r",function(){return V}),n.d(e,"s",function(){return tt}),n.d(e,"t",function(){return p}),n.d(e,"u",function(){return i}),n.d(e,"v",function(){return v}),n.d(e,"w",function(){return Q}),n.d(e,"x",function(){return r}),n.d(e,"y",function(){return $}),n.d(e,"z",function(){return a}),n.d(e,"A",function(){return u}),n.d(e,"B",function(){return L}),n.d(e,"C",function(){return k}),n.d(e,"D",function(){return _}),n.d(e,"E",function(){return m}),n.d(e,"F",function(){return O}),n.d(e,"G",function(){return S}),n.d(e,"H",function(){return K}),n.d(e,"I",function(){return W});function c(t,e){for(const n in e)t[n]=e[n];return t}function o(t){return t()}function s(){return Object.create(null)}function a(t){t.forEach(o)}function i(t){return"function"==typeof t}function u(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t,e,n){if(t){const r=f(t,e,n);return t[0](r)}}function f(t,e,n){return t[1]?c({},c(e.$$scope.ctx,t[1](n?n(e):{}))):e.$$scope.ctx}function b(t,e,n,r){return t[1]?c({},c(e.$$scope.changed||{},t[1](r?r(n):{}))):e.$$scope.changed||{}}new Set;function d(t,e){t.appendChild(e)}function p(t,e,n){t.insertBefore(e,n||null)}function h(t){t.parentNode.removeChild(t)}function j(t){return document.createElement(t)}function O(t){return document.createTextNode(t)}function m(){return O(" ")}function g(){return O("")}function v(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function $(t){return function(e){return e.preventDefault(),t.call(this,e)}}function y(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function w(t){return Array.from(t.childNodes)}function E(t,e,n,r){for(let r=0;r<t.length;r+=1){const c=t[r];if(c.nodeName===e){for(let t=0;t<c.attributes.length;t+=1){const e=c.attributes[t];n[e.name]||c.removeAttribute(e.name)}return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):j(e)}function x(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=e,t.splice(n,1)[0]}return O(e)}function k(t,e){e=""+e,t.data!==e&&(t.data=e)}function _(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function S(t,e,n){t.classList[n?"add":"remove"](e)}let A;function C(t){A=t}function P(){if(!A)throw new Error("Function called outside component initialization");return A}function L(t,e){P().$$.context.set(t,e)}function I(t){return P().$$.context.get(t)}const R=[],N=[],H=[],q=[],T=Promise.resolve();let U=!1;function B(){U||(U=!0,T.then(M))}function F(t){H.push(t)}function M(){const t=new Set;do{for(;R.length;){const t=R.shift();C(t),G(t.$$)}for(;N.length;)N.pop()();for(let e=0;e<H.length;e+=1){const n=H[e];t.has(n)||(n(),t.add(n))}H.length=0}while(R.length);for(;q.length;)q.pop()();U=!1}function G(t){t.fragment&&(t.update(t.dirty),a(t.before_update),t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_update.forEach(F))}const D=new Set;let J;function V(){J={r:0,c:[],p:J}}function z(){J.r||a(J.c),J=J.p}function K(t,e){t&&t.i&&(D.delete(t),t.i(e))}function W(t,e,n,r){if(t&&t.o){if(D.has(t))return;D.add(t),J.c.push(()=>{D.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}"undefined"!=typeof window?window:global;function X(t,e){const n={},r={},c={$$scope:1};let o=t.length;for(;o--;){const s=t[o],a=e[o];if(a){for(const t in s)t in a||(r[t]=1);for(const t in a)c[t]||(n[t]=a[t],c[t]=1);t[o]=a}else for(const t in s)c[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}let Y;function Q(t,e,n){const{fragment:r,on_mount:c,on_destroy:s,after_update:u}=t.$$;r.m(e,n),F(()=>{const e=c.map(o).filter(i);s?s.push(...e):a(e),t.$$.on_mount=[]}),u.forEach(F)}function Z(t,e){t.$$.fragment&&(a(t.$$.on_destroy),t.$$.fragment.d(e),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={})}function tt(t,e,n,c,o,i){const u=A;C(t);const l=e.props||{},f=t.$$={fragment:null,ctx:null,props:i,update:r,not_equal:o,bound:s(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:s(),dirty:null};let b=!1;f.ctx=n?n(t,l,(e,n)=>{f.ctx&&o(f.ctx[e],f.ctx[e]=n)&&(f.bound[e]&&f.bound[e](n),b&&function(t,e){t.$$.dirty||(R.push(t),B(),t.$$.dirty=s()),t.$$.dirty[e]=!0}(t,e))}):l,f.update(),b=!0,a(f.before_update),f.fragment=c(f.ctx),e.target&&(e.hydrate?f.fragment.l(w(e.target)):f.fragment.c(),e.intro&&K(t.$$.fragment),Q(t,e.target,e.anchor),M()),C(u)}"undefined"!=typeof HTMLElement&&(Y=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}$destroy(){Z(this,1),this.$destroy=r}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}});class et{$destroy(){Z(this,1),this.$destroy=r}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}},function(t,e,n){"use strict";n.r(e);var r=n(0);const c=[];function o(t,e=r.x){let n;const o=[];function s(e){if(Object(r.A)(t,e)&&(t=e,n)){const e=!c.length;for(let e=0;e<o.length;e+=1){const n=o[e];n[1](),c.push(n,t)}if(e){for(let t=0;t<c.length;t+=2)c[t][0](c[t+1]);c.length=0}}}return{set:s,update:function(e){s(e(t))},subscribe:function(c,a=r.x){const i=[c,a];return o.push(i),1===o.length&&(n=e(s)||r.x),c(t),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(n(),n=null)}}}}const s={},a=()=>({});function i(t){var e,n,c,o,s,a,i,u,l,f,b,d,p;return{c(){e=Object(r.l)("nav"),n=Object(r.l)("ul"),c=Object(r.l)("li"),o=Object(r.l)("a"),s=Object(r.F)("HOME"),a=Object(r.E)(),i=Object(r.l)("li"),u=Object(r.l)("a"),l=Object(r.F)("ABOUT"),f=Object(r.E)(),b=Object(r.l)("li"),d=Object(r.l)("a"),p=Object(r.F)("CONTACT"),this.h()},l(t){e=Object(r.g)(t,"NAV",{},!1);var h=Object(r.f)(e);n=Object(r.g)(h,"UL",{class:!0},!1);var j=Object(r.f)(n);c=Object(r.g)(j,"LI",{},!1);var O=Object(r.f)(c);o=Object(r.g)(O,"A",{class:!0,href:!0},!1);var m=Object(r.f)(o);s=Object(r.h)(m,"HOME"),m.forEach(r.k),O.forEach(r.k),a=Object(r.h)(j,"\n    "),i=Object(r.g)(j,"LI",{},!1);var g=Object(r.f)(i);u=Object(r.g)(g,"A",{class:!0,href:!0},!1);var v=Object(r.f)(u);l=Object(r.h)(v,"ABOUT"),v.forEach(r.k),g.forEach(r.k),f=Object(r.h)(j,"\n    "),b=Object(r.g)(j,"LI",{},!1);var $=Object(r.f)(b);d=Object(r.g)($,"A",{class:!0,href:!0},!1);var y=Object(r.f)(d);p=Object(r.h)(y,"CONTACT"),y.forEach(r.k),$.forEach(r.k),j.forEach(r.k),h.forEach(r.k),this.h()},h(){Object(r.d)(o,"class","p-3 svelte-1ojpomm"),Object(r.d)(o,"href","."),Object(r.G)(o,"active",void 0===t.segment),Object(r.d)(u,"class","p-3 svelte-1ojpomm"),Object(r.d)(u,"href","about"),Object(r.G)(u,"active","about"===t.segment),Object(r.d)(d,"class","p-3 svelte-1ojpomm"),Object(r.d)(d,"href","contact"),Object(r.G)(d,"active","contact"===t.segment),Object(r.d)(n,"class","flex justify-center p-3")},m(t,h){Object(r.t)(t,e,h),Object(r.b)(e,n),Object(r.b)(n,c),Object(r.b)(c,o),Object(r.b)(o,s),Object(r.b)(n,a),Object(r.b)(n,i),Object(r.b)(i,u),Object(r.b)(u,l),Object(r.b)(n,f),Object(r.b)(n,b),Object(r.b)(b,d),Object(r.b)(d,p)},p(t,e){t.segment&&(Object(r.G)(o,"active",void 0===e.segment),Object(r.G)(u,"active","about"===e.segment),Object(r.G)(d,"active","contact"===e.segment))},i:r.x,o:r.x,d(t){t&&Object(r.k)(e)}}}function u(t,e,n){let{segment:r}=e;return t.$set=t=>{"segment"in t&&n("segment",r=t.segment)},{segment:r}}var l=class extends r.a{constructor(t){var e;super(),document.getElementById("svelte-1ojpomm-style")||((e=Object(r.l)("style")).id="svelte-1ojpomm-style",e.textContent=".active.svelte-1ojpomm{border-bottom:2px red solid}",Object(r.b)(document.head,e)),Object(r.s)(this,t,u,i,r.A,["segment"])}};function f(t){var e,n,c,o,s,a,i,u,f,b,d,p=new l({props:{segment:t.segment}});const h=t.$$slots.default,j=Object(r.i)(h,t,null);return{c(){e=Object(r.l)("div"),n=Object(r.l)("div"),c=Object(r.l)("a"),o=Object(r.l)("img"),s=Object(r.E)(),a=Object(r.l)("h2"),i=Object(r.F)("Frank"),u=Object(r.E)(),p.$$.fragment.c(),f=Object(r.E)(),b=Object(r.l)("main"),j&&j.c(),this.h()},l(t){e=Object(r.g)(t,"DIV",{class:!0},!1);var l=Object(r.f)(e);n=Object(r.g)(l,"DIV",{class:!0},!1);var d=Object(r.f)(n);c=Object(r.g)(d,"A",{href:!0},!1);var h=Object(r.f)(c);o=Object(r.g)(h,"IMG",{class:!0,src:!0,alt:!0,width:!0},!1),Object(r.f)(o).forEach(r.k),s=Object(r.h)(h,"\n      "),a=Object(r.g)(h,"H2",{class:!0},!1);var O=Object(r.f)(a);i=Object(r.h)(O,"Frank"),O.forEach(r.k),h.forEach(r.k),d.forEach(r.k),l.forEach(r.k),u=Object(r.h)(t,"\n\n"),p.$$.fragment.l(t),f=Object(r.h)(t,"\n\n"),b=Object(r.g)(t,"MAIN",{class:!0},!1);var m=Object(r.f)(b);j&&j.l(m),m.forEach(r.k),this.h()},h(){Object(r.d)(o,"class","p-2"),Object(r.d)(o,"src","https://i.imgur.com/cWPBCGg.png"),Object(r.d)(o,"alt","Frank posed"),Object(r.d)(o,"width","150"),Object(r.d)(a,"class","font-mono text-center font-bold text-3xl"),Object(r.d)(c,"href","/"),Object(r.d)(n,"class","flex flex-col"),Object(r.d)(e,"class","flex justify-center"),Object(r.d)(b,"class","svelte-oosp9s")},m(t,l){Object(r.t)(t,e,l),Object(r.b)(e,n),Object(r.b)(n,c),Object(r.b)(c,o),Object(r.b)(c,s),Object(r.b)(c,a),Object(r.b)(a,i),Object(r.t)(t,u,l),Object(r.w)(p,t,l),Object(r.t)(t,f,l),Object(r.t)(t,b,l),j&&j.m(b,null),d=!0},p(t,e){var n={};t.segment&&(n.segment=e.segment),p.$set(n),j&&j.p&&t.$$scope&&j.p(Object(r.o)(h,e,t,null),Object(r.p)(h,e,null))},i(t){d||(Object(r.H)(p.$$.fragment,t),Object(r.H)(j,t),d=!0)},o(t){Object(r.I)(p.$$.fragment,t),Object(r.I)(j,t),d=!1},d(t){t&&(Object(r.k)(e),Object(r.k)(u)),Object(r.j)(p,t),t&&(Object(r.k)(f),Object(r.k)(b)),j&&j.d(t)}}}function b(t,e,n){let{segment:r}=e,{$$slots:c={},$$scope:o}=e;return t.$set=t=>{"segment"in t&&n("segment",r=t.segment),"$$scope"in t&&n("$$scope",o=t.$$scope)},{segment:r,$$slots:c,$$scope:o}}var d=class extends r.a{constructor(t){var e;super(),document.getElementById("svelte-oosp9s-style")||((e=Object(r.l)("style")).id="svelte-oosp9s-style",e.textContent="main.svelte-oosp9s{position:relative;max-width:56em;background-color:white;padding:2em;margin:0 auto;box-sizing:border-box}",Object(r.b)(document.head,e)),Object(r.s)(this,t,b,f,r.A,["segment"])}};function p(t){var e,n,c=t.error.stack+"";return{c(){e=Object(r.l)("pre"),n=Object(r.F)(c)},l(t){e=Object(r.g)(t,"PRE",{},!1);var o=Object(r.f)(e);n=Object(r.h)(o,c),o.forEach(r.k)},m(t,c){Object(r.t)(t,e,c),Object(r.b)(e,n)},p(t,e){t.error&&c!==(c=e.error.stack+"")&&Object(r.C)(n,c)},d(t){t&&Object(r.k)(e)}}}function h(t){var e,n,c,o,s,a,i,u,l,f=t.error.message+"";document.title=e=t.status;var b=t.dev&&t.error.stack&&p(t);return{c(){n=Object(r.E)(),c=Object(r.l)("h1"),o=Object(r.F)(t.status),s=Object(r.E)(),a=Object(r.l)("p"),i=Object(r.F)(f),u=Object(r.E)(),b&&b.c(),l=Object(r.m)(),this.h()},l(e){n=Object(r.h)(e,"\n\n"),c=Object(r.g)(e,"H1",{class:!0},!1);var d=Object(r.f)(c);o=Object(r.h)(d,t.status),d.forEach(r.k),s=Object(r.h)(e,"\n\n"),a=Object(r.g)(e,"P",{class:!0},!1);var p=Object(r.f)(a);i=Object(r.h)(p,f),p.forEach(r.k),u=Object(r.h)(e,"\n\n"),b&&b.l(e),l=Object(r.m)(),this.h()},h(){Object(r.d)(c,"class","svelte-8od9u6"),Object(r.d)(a,"class","svelte-8od9u6")},m(t,e){Object(r.t)(t,n,e),Object(r.t)(t,c,e),Object(r.b)(c,o),Object(r.t)(t,s,e),Object(r.t)(t,a,e),Object(r.b)(a,i),Object(r.t)(t,u,e),b&&b.m(t,e),Object(r.t)(t,l,e)},p(t,n){t.status&&e!==(e=n.status)&&(document.title=e),t.status&&Object(r.C)(o,n.status),t.error&&f!==(f=n.error.message+"")&&Object(r.C)(i,f),n.dev&&n.error.stack?b?b.p(t,n):((b=p(n)).c(),b.m(l.parentNode,l)):b&&(b.d(1),b=null)},i:r.x,o:r.x,d(t){t&&(Object(r.k)(n),Object(r.k)(c),Object(r.k)(s),Object(r.k)(a),Object(r.k)(u)),b&&b.d(t),t&&Object(r.k)(l)}}}function j(t,e,n){let{status:r,error:c}=e;return t.$set=t=>{"status"in t&&n("status",r=t.status),"error"in t&&n("error",c=t.error)},{status:r,error:c,dev:!1}}var O=class extends r.a{constructor(t){var e;super(),document.getElementById("svelte-8od9u6-style")||((e=Object(r.l)("style")).id="svelte-8od9u6-style",e.textContent="h1.svelte-8od9u6,p.svelte-8od9u6{margin:0 auto}h1.svelte-8od9u6{font-size:2.8em;font-weight:700;margin:0 0 0.5em 0}p.svelte-8od9u6{margin:1em auto}@media(min-width: 480px){h1.svelte-8od9u6{font-size:4em}}",Object(r.b)(document.head,e)),Object(r.s)(this,t,j,h,r.A,["status","error"])}};function m(t){var e,n,c=[t.level1.props],o=t.level1.component;function s(t){let e={};for(var n=0;n<c.length;n+=1)e=Object(r.c)(e,c[n]);return{props:e}}if(o)var a=new o(s());return{c(){a&&a.$$.fragment.c(),e=Object(r.m)()},l(t){a&&a.$$.fragment.l(t),e=Object(r.m)()},m(t,c){a&&Object(r.w)(a,t,c),Object(r.t)(t,e,c),n=!0},p(t,n){var i=t.level1?Object(r.q)(c,[n.level1.props]):{};if(o!==(o=n.level1.component)){if(a){Object(r.r)();const t=a;Object(r.I)(t.$$.fragment,1,0,()=>{Object(r.j)(t,1)}),Object(r.e)()}o?((a=new o(s())).$$.fragment.c(),Object(r.H)(a.$$.fragment,1),Object(r.w)(a,e.parentNode,e)):a=null}else o&&a.$set(i)},i(t){n||(a&&Object(r.H)(a.$$.fragment,t),n=!0)},o(t){a&&Object(r.I)(a.$$.fragment,t),n=!1},d(t){t&&Object(r.k)(e),a&&Object(r.j)(a,t)}}}function g(t){var e,n=new O({props:{error:t.error,status:t.status}});return{c(){n.$$.fragment.c()},l(t){n.$$.fragment.l(t)},m(t,c){Object(r.w)(n,t,c),e=!0},p(t,e){var r={};t.error&&(r.error=e.error),t.status&&(r.status=e.status),n.$set(r)},i(t){e||(Object(r.H)(n.$$.fragment,t),e=!0)},o(t){Object(r.I)(n.$$.fragment,t),e=!1},d(t){Object(r.j)(n,t)}}}function v(t){var e,n,c,o,s=[g,m],a=[];function i(t,e){return e.error?0:1}return e=i(0,t),n=a[e]=s[e](t),{c(){n.c(),c=Object(r.m)()},l(t){n.l(t),c=Object(r.m)()},m(t,n){a[e].m(t,n),Object(r.t)(t,c,n),o=!0},p(t,o){var u=e;(e=i(0,o))===u?a[e].p(t,o):(Object(r.r)(),Object(r.I)(a[u],1,1,()=>{a[u]=null}),Object(r.e)(),(n=a[e])||(n=a[e]=s[e](o)).c(),Object(r.H)(n,1),n.m(c.parentNode,c))},i(t){o||(Object(r.H)(n),o=!0)},o(t){Object(r.I)(n),o=!1},d(t){a[e].d(t),t&&Object(r.k)(c)}}}function $(t){var e,n=[{segment:t.segments[0]},t.level0.props];let c={$$slots:{default:[v]},$$scope:{ctx:t}};for(var o=0;o<n.length;o+=1)c=Object(r.c)(c,n[o]);var s=new d({props:c});return{c(){s.$$.fragment.c()},l(t){s.$$.fragment.l(t)},m(t,n){Object(r.w)(s,t,n),e=!0},p(t,e){var c=t.segments||t.level0?Object(r.q)(n,[t.segments&&{segment:e.segments[0]},t.level0&&e.level0.props]):{};(t.$$scope||t.error||t.status||t.level1)&&(c.$$scope={changed:t,ctx:e}),s.$set(c)},i(t){e||(Object(r.H)(s.$$.fragment,t),e=!0)},o(t){Object(r.I)(s.$$.fragment,t),e=!1},d(t){Object(r.j)(s,t)}}}function y(t,e,n){let{stores:c,error:o,status:a,segments:i,level0:u,level1:l=null}=e;return Object(r.B)(s,c),t.$set=t=>{"stores"in t&&n("stores",c=t.stores),"error"in t&&n("error",o=t.error),"status"in t&&n("status",a=t.status),"segments"in t&&n("segments",i=t.segments),"level0"in t&&n("level0",u=t.level0),"level1"in t&&n("level1",l=t.level1)},{stores:c,error:o,status:a,segments:i,level0:u,level1:l}}var w=class extends r.a{constructor(t){super(),Object(r.s)(this,t,y,$,r.A,["stores","error","status","segments","level0","level1"])}};const E=[],x=[{js:()=>n.e(2).then(n.bind(null,132)),css:"__SAPPER_CSS_PLACEHOLDER:index.svelte__"},{js:()=>n.e(1).then(n.bind(null,133)),css:"__SAPPER_CSS_PLACEHOLDER:contact.svelte__"},{js:()=>Promise.all([n.e(4),n.e(0)]).then(n.bind(null,134)),css:"__SAPPER_CSS_PLACEHOLDER:about.svelte__"}],k=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/contact\/?$/,parts:[{i:1}]},{pattern:/^\/about\/?$/,parts:[{i:2}]}];const _="undefined"!=typeof __SAPPER__&&__SAPPER__;let S,A,C,P=!1,L=[],I="{}";const R={page:o({}),preloading:o(null),session:o(_&&_.session)};let N,H;R.session.subscribe(async t=>{if(N=t,!P)return;H=!0;const e=D(new URL(location.href)),n=A={},{redirect:r,props:c,branch:o}=await K(e);n===A&&await z(r,o,c,e.page)});let q,T=null;let U,B=1;const F="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},M={};function G(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function D(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(_.baseUrl))return null;let e=t.pathname.slice(_.baseUrl.length);if(""===e&&(e="/"),!E.some(t=>t.test(e)))for(let n=0;n<k.length;n+=1){const r=k[n],c=r.pattern.exec(e);if(c){const n=G(t.search),o=r.parts[r.parts.length-1],s=o.params?o.params(c):{},a={host:location.host,path:e,query:n,params:s};return{href:t.href,route:r,match:c,page:a}}}}function J(){return{x:pageXOffset,y:pageYOffset}}async function V(t,e,n,r){if(e)U=e;else{const t=J();M[U]=t,e=U=++B,M[U]=n?t:{x:0,y:0}}U=e,S&&R.preloading.set(!0);const c=T&&T.href===t.href?T.promise:K(t);T=null;const o=A={},{redirect:s,props:a,branch:i}=await c;if(o===A&&(await z(s,i,a,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=M[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top})}M[U]=t,t&&scrollTo(t.x,t.y)}}async function z(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=D(new URL(t,document.baseURI));return n?(F[e.replaceState?"replaceState":"pushState"]({id:U},"",t),V(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(R.page.set(r),R.preloading.set(!1),S)S.$set(n);else{n.stores={page:{subscribe:R.page.subscribe},preloading:{subscribe:R.preloading.subscribe},session:R.session},n.level0={props:await C};const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)Y(t.nextSibling);Y(t),Y(e)}S=new w({target:q,props:n,hydrate:!0})}L=e,I=JSON.stringify(r.query),P=!0,H=!1}async function K(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let c=null;const o={error:null,status:200,segments:[r[0]]},s={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(c&&(c.statusCode!==t||c.location!==e))throw new Error("Conflicting redirects");c={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};let i;C||(C=_.preloaded[0]||a.call(s,{host:n.host,path:n.path,query:n.query,params:{}},N));let u=1;try{const c=JSON.stringify(n.query),a=e.pattern.exec(n.path);let l=!1;i=await Promise.all(e.parts.map(async(e,i)=>{const f=r[i];if(function(t,e,n,r){if(r!==I)return!0;const c=L[t];return!!c&&(e!==c.segment||(!(!c.match||JSON.stringify(c.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(i,f,a,c)&&(l=!0),o.segments[u]=r[i+1],!e)return{segment:f};const b=u++;if(!H&&!l&&L[i]&&L[i].part===e.i)return L[i];l=!1;const{default:d,preload:p}=await X(x[e.i]);let h;return h=P||!_.preloaded[i+1]?p?await p.call(s,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},N):{}:_.preloaded[i+1],o[`level${b}`]={component:d,props:h,segment:f,match:a,part:e.i}}))}catch(t){o.error=t,o.status=500,i=[]}return{redirect:c,props:o,branch:i}}function W(t){const e=`client/${t}`;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function X(t){const e="string"==typeof t.css?[]:t.css.map(W);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}function Y(t){t.parentNode.removeChild(t)}function Q(t){const e=D(new URL(t,document.baseURI));if(e)return T&&t===T.href||function(t,e){T={href:t,promise:e}}(t,K(e)),T.promise}let Z;function tt(t){clearTimeout(Z),Z=setTimeout(()=>{et(t)},20)}function et(t){const e=rt(t.target);e&&"prefetch"===e.rel&&Q(e.href)}function nt(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=rt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const c=new URL(r);if(c.pathname===location.pathname&&c.search===location.search)return;const o=D(c);if(o){V(o,null,e.hasAttribute("sapper-noscroll"),c.hash),t.preventDefault(),F.pushState({id:U},"",c.href)}}function rt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function ct(t){if(M[U]=J(),t.state){const e=D(new URL(location.href));e?V(e,t.state.id):location.href=location.href}else(function(t){U=t})(B=B+1),F.replaceState({id:U},"",location.href)}var ot,st;ot={target:document.querySelector("#sapper")},"scrollRestoration"in F&&(F.scrollRestoration="manual"),st=ot.target,q=st,addEventListener("click",nt),addEventListener("popstate",ct),addEventListener("touchstart",et),addEventListener("mousemove",tt),Promise.resolve().then(()=>{const{hash:t,href:e}=location;F.replaceState({id:B},"",e);const n=new URL(location.href);if(_.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:c,preloaded:o,status:s,error:a}=_;C||(C=o&&o[0]),z(null,[],{error:a,status:s,session:c,level0:{props:C},level1:{props:{status:s,error:a},component:O},segments:o},{host:e,path:n,query:G(r),params:{}})}();const r=D(n);return r?V(r,B,!0,t):void 0})}]);