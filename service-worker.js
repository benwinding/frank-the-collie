!function(e){var t={};function n(c){if(t[c])return t[c].exports;var a=t[c]={i:c,l:!1,exports:{}};return e[c].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,c){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(c,a,function(t){return e[t]}.bind(null,a));return c},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const c=["client/16cafce2d502bacbdbdf/about.0.js","client/16cafce2d502bacbdbdf/contact.1.js","client/16cafce2d502bacbdbdf/contact_thanks.2.js","client/16cafce2d502bacbdbdf/index.3.js","client/16cafce2d502bacbdbdf/main.js","client/16cafce2d502bacbdbdf/shop.5.js","client/16cafce2d502bacbdbdf/vendors~about.6.js"].concat(["service-worker-index.html","favicon.png","global.css","images/family.jpg","images/frankstagram.png","images/loading.gif","images/logo-winked.png","images/logo.png","images/social1.jpeg","images/thanks.gif","index.css","logo-192.png","logo-512.png","manifest.json","shop/esky1.png","shop/mug1.png","shop/shirt1.jpeg","shop/shirt2.jpeg","shop/shirt3.jpeg","shop/shoe1.png","shop/toy1.png","tailwind.css"]),a=new Set(c);self.addEventListener("install",e=>{e.waitUntil(caches.open("cache1614207148047").then(e=>e.addAll(c)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1614207148047"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const t=new URL(e.request.url);t.protocol.startsWith("http")&&(t.hostname===self.location.hostname&&t.port!==self.location.port||(t.host===self.location.host&&a.has(t.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1614207148047").then(async t=>{try{const n=await fetch(e.request);return t.put(e.request,n.clone()),n}catch(n){const c=await t.match(e.request);if(c)return c;throw n}}))))})}]);