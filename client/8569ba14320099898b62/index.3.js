(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{167:function(e,t,c){"use strict";var s=c(0);function i(e){let t,c,i,n,a,l,r;return{c(){t=Object(s.q)("div"),c=Object(s.q)("a"),i=Object(s.q)("img"),a=Object(s.K)(),l=Object(s.q)("p"),r=Object(s.N)(e[0]),this.h()},l(n){t=Object(s.i)(n,"DIV",{class:!0});var b=Object(s.g)(t);c=Object(s.i)(b,"A",{href:!0,target:!0});var j=Object(s.g)(c);i=Object(s.i)(j,"IMG",{class:!0,src:!0,alt:!0}),a=Object(s.j)(j),l=Object(s.i)(j,"P",{class:!0});var o=Object(s.g)(l);r=Object(s.k)(o,e[0]),o.forEach(s.p),j.forEach(s.p),b.forEach(s.p),this.h()},h(){Object(s.e)(i,"class","hover-grey rounded rounded-b-none svelte-1mozd4b"),i.src!==(n=e[1])&&Object(s.e)(i,"src",n),Object(s.e)(i,"alt",e[0]),Object(s.e)(l,"class","text-xs p-1 bg-white"),Object(s.e)(c,"href",e[2]),Object(s.e)(c,"target","_blank"),Object(s.e)(t,"class","p-1 bg-gray-300 rounded-lg ")},m(e,n){Object(s.x)(e,t,n),Object(s.c)(t,c),Object(s.c)(c,i),Object(s.c)(c,a),Object(s.c)(c,l),Object(s.c)(l,r)},p(e,[t]){2&t&&i.src!==(n=e[1])&&Object(s.e)(i,"src",n),1&t&&Object(s.e)(i,"alt",e[0]),1&t&&Object(s.I)(r,e[0]),4&t&&Object(s.e)(c,"href",e[2])},i:s.B,o:s.B,d(e){e&&Object(s.p)(t)}}}function n(e,t,c){let{caption:s}=t,{url:i}=t,{urlPost:n}=t,{isVideo:a}=t;return e.$$set=e=>{"caption"in e&&c(0,s=e.caption),"url"in e&&c(1,i=e.url),"urlPost"in e&&c(2,n=e.urlPost),"isVideo"in e&&c(3,a=e.isVideo)},[s,i,n,a]}class a extends s.a{constructor(e){var t;super(),document.getElementById("svelte-1mozd4b-style")||((t=Object(s.q)("style")).id="svelte-1mozd4b-style",t.textContent=".hover-grey.svelte-1mozd4b{transition:filter 0.8s linear}.hover-grey.svelte-1mozd4b:hover{filter:brightness(0.5)}",Object(s.c)(document.head,t)),Object(s.w)(this,e,n,i,s.G,{caption:0,url:1,urlPost:2,isVideo:3})}}t.a=a},170:function(e,t,c){"use strict";c.r(t),function(e){var s=c(0),i=c(2),n=c(167),a=c(3),l=c.n(a);function r(e,t,c){const s=e.slice();return s[4]=t[c].url,s[5]=t[c].caption,s[6]=t[c].urlPost,s[7]=t[c].isVideo,s[9]=c,s}function b(e){let t,c,i=e[0],n=[];for(let t=0;t<i.length;t+=1)n[t]=o(r(e,i,t));const a=e=>Object(s.Q)(n[e],1,1,()=>{n[e]=null});return{c(){t=Object(s.q)("div");for(let e=0;e<n.length;e+=1)n[e].c();this.h()},l(e){t=Object(s.i)(e,"DIV",{class:!0});var c=Object(s.g)(t);for(let e=0;e<n.length;e+=1)n[e].l(c);c.forEach(s.p),this.h()},h(){Object(s.e)(t,"class","masonry svelte-dciv97")},m(e,i){Object(s.x)(e,t,i);for(let e=0;e<n.length;e+=1)n[e].m(t,null);c=!0},p(e,c){if(1&c){let l;for(i=e[0],l=0;l<i.length;l+=1){const a=r(e,i,l);n[l]?(n[l].p(a,c),Object(s.P)(n[l],1)):(n[l]=o(a),n[l].c(),Object(s.P)(n[l],1),n[l].m(t,null))}for(Object(s.v)(),l=i.length;l<n.length;l+=1)a(l);Object(s.f)()}},i(e){if(!c){for(let e=0;e<i.length;e+=1)Object(s.P)(n[e]);c=!0}},o(e){n=n.filter(Boolean);for(let e=0;e<n.length;e+=1)Object(s.Q)(n[e]);c=!1},d(e){e&&Object(s.p)(t),Object(s.o)(n,e)}}}function j(e){let t,c,i,n,a,l,r;return{c(){t=Object(s.q)("div"),c=Object(s.q)("div"),i=Object(s.q)("img"),a=Object(s.K)(),l=Object(s.q)("h2"),r=Object(s.N)("Loading..."),this.h()},l(e){t=Object(s.i)(e,"DIV",{class:!0});var n=Object(s.g)(t);c=Object(s.i)(n,"DIV",{class:!0});var b=Object(s.g)(c);i=Object(s.i)(b,"IMG",{src:!0,width:!0,alt:!0}),a=Object(s.j)(b),l=Object(s.i)(b,"H2",{class:!0});var j=Object(s.g)(l);r=Object(s.k)(j,"Loading..."),j.forEach(s.p),b.forEach(s.p),n.forEach(s.p),this.h()},h(){i.src!==(n="images/loading.gif")&&Object(s.e)(i,"src","images/loading.gif"),Object(s.e)(i,"width","100"),Object(s.e)(i,"alt","loading"),Object(s.e)(l,"class","p-4 text-xl italic"),Object(s.e)(c,"class","flex flex-col items-center"),Object(s.e)(t,"class","flex flex-col items-center py-20")},m(e,n){Object(s.x)(e,t,n),Object(s.c)(t,c),Object(s.c)(c,i),Object(s.c)(c,a),Object(s.c)(c,l),Object(s.c)(l,r)},p:s.B,i:s.B,o:s.B,d(e){e&&Object(s.p)(t)}}}function o(e){let t,c,i,a;return c=new n.a({props:{url:e[4],caption:e[5],urlPost:e[6],isVideo:e[7]}}),{c(){t=Object(s.q)("div"),Object(s.l)(c.$$.fragment),i=Object(s.K)(),this.h()},l(e){t=Object(s.i)(e,"DIV",{class:!0});var n=Object(s.g)(t);Object(s.h)(c.$$.fragment,n),i=Object(s.j)(n),n.forEach(s.p),this.h()},h(){Object(s.e)(t,"class","masonry-item svelte-dciv97")},m(e,n){Object(s.x)(e,t,n),Object(s.A)(c,t,null),Object(s.c)(t,i),a=!0},p(e,t){const s={};1&t&&(s.url=e[4]),1&t&&(s.caption=e[5]),1&t&&(s.urlPost=e[6]),1&t&&(s.isVideo=e[7]),c.$set(s)},i(e){a||(Object(s.P)(c.$$.fragment,e),a=!0)},o(e){Object(s.Q)(c.$$.fragment,e),a=!1},d(e){e&&Object(s.p)(t),Object(s.n)(c)}}}function O(e){let t,c,i,n,a,l,r,o,O,d,h,g,m;const p=[j,b],f=[];function u(e,t){return e[0].length<1?0:1}return d=u(e),h=f[d]=p[d](e),{c(){t=Object(s.K)(),c=Object(s.q)("div"),i=Object(s.q)("a"),n=Object(s.q)("img"),l=Object(s.K)(),r=Object(s.q)("span"),o=Object(s.N)("Instagram Feed"),O=Object(s.K)(),h.c(),g=Object(s.r)(),this.h()},l(e){Object(s.E)('[data-svelte="svelte-1crdqxq"]',document.head).forEach(s.p),t=Object(s.j)(e),c=Object(s.i)(e,"DIV",{class:!0});var a=Object(s.g)(c);i=Object(s.i)(a,"A",{class:!0,target:!0,href:!0});var b=Object(s.g)(i);n=Object(s.i)(b,"IMG",{src:!0,width:!0,alt:!0}),l=Object(s.j)(b),r=Object(s.i)(b,"SPAN",{class:!0});var j=Object(s.g)(r);o=Object(s.k)(j,"Instagram Feed"),j.forEach(s.p),b.forEach(s.p),a.forEach(s.p),O=Object(s.j)(e),h.l(e),g=Object(s.r)(),this.h()},h(){document.title="Frank the collie",n.src!==(a="images/frankstagram.png")&&Object(s.e)(n,"src","images/frankstagram.png"),Object(s.e)(n,"width","30"),Object(s.e)(n,"alt","frank logo"),Object(s.e)(r,"class","italic pl-2"),Object(s.e)(i,"class","flex flex-row items-center"),Object(s.e)(i,"target","_blank"),Object(s.e)(i,"href","https://www.instagram.com/frankthecollie/"),Object(s.e)(c,"class","flex flex-row justify-center items-center pb-4")},m(e,a){Object(s.x)(e,t,a),Object(s.x)(e,c,a),Object(s.c)(c,i),Object(s.c)(i,n),Object(s.c)(i,l),Object(s.c)(i,r),Object(s.c)(r,o),Object(s.x)(e,O,a),f[d].m(e,a),Object(s.x)(e,g,a),m=!0},p(e,[t]){let c=d;d=u(e),d===c?f[d].p(e,t):(Object(s.v)(),Object(s.Q)(f[c],1,1,()=>{f[c]=null}),Object(s.f)(),h=f[d],h?h.p(e,t):(h=f[d]=p[d](e),h.c()),Object(s.P)(h,1),h.m(g.parentNode,g))},i(e){m||(Object(s.P)(h),m=!0)},o(e){Object(s.Q)(h),m=!1},d(e){e&&Object(s.p)(t),e&&Object(s.p)(c),e&&Object(s.p)(O),f[d].d(e),e&&Object(s.p)(g)}}}function d(t,c,s){let n=[];const a=e.env.BASE_PATH||"/";async function r(){console.log("accessing instagram api:");const e=`/${a}/insta-feed/frankthecollie.json`.replace(/[/]+/g,"/"),t=(await l.a.get(e)).data;console.log("accessing instagram api:",{json:t}),s(0,n=t.GraphImages.map(e=>function(e){const t=e.is_video,c=e.edge_media_to_caption.edges,s=`/${a}/insta-feed/${e.shortcode}.jpg`;return{url:s.replace(/[/]+/g,"/"),isVideo:t,caption:c.length&&c[0].node.text,urlPost:`https://www.instagram.com/p/${e.shortcode}/`}}(e)).filter(e=>!e.isVideo))}return Object(i.c)(async()=>{r()}),[n]}class h extends s.a{constructor(e){var t;super(),document.getElementById("svelte-dciv97-style")||((t=Object(s.q)("style")).id="svelte-dciv97-style",t.textContent=".masonry.svelte-dciv97{columns:1;column-gap:0.5rem}.masonry-item.svelte-dciv97{margin-bottom:0.5rem;break-inside:avoid}@media(min-width: 640px){.masonry.svelte-dciv97{columns:2}}@media(min-width: 768px){.masonry.svelte-dciv97{columns:3}}@media(min-width: 1024px){.masonry.svelte-dciv97{columns:4}}",Object(s.c)(document.head,t)),Object(s.w)(this,e,d,O,s.G,{})}}t.default=h}.call(this,c(12))}}]);