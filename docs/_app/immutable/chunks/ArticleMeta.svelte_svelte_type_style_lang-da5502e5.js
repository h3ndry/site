import{S as h,i as g,s as _,e as l,T as f,c as m,d as c,b as i,J as d,n as p}from"./index-651748e0.js";function v(s){let a,o,e,n;return document.title=a=s[2],{c(){o=l("meta"),e=l("meta"),n=l("meta"),this.h()},l(r){const t=f('[data-svelte="svelte-17be3w9"]',document.head);o=m(t,"META",{property:!0,content:!0}),e=m(t,"META",{property:!0,content:!0}),n=m(t,"META",{property:!0,content:!0}),t.forEach(c),this.h()},h(){i(o,"property","og:site_name"),i(o,"content",u),i(e,"property","og:title"),i(e,"content",s[0]),i(n,"property","og:description"),i(n,"content",s[1])},m(r,t){d(document.head,o),d(document.head,e),d(document.head,n)},p(r,[t]){t&4&&a!==(a=r[2])&&(document.title=a),t&1&&i(e,"content",r[0]),t&2&&i(n,"content",r[1])},i:p,o:p,d(r){c(o),c(e),c(n)}}}const u="Hendry Khoza's Site";function y(s,a,o){let{title:e}=a,{description:n}=a;const r=e?`${e} | ${u}`:u;return s.$$set=t=>{"title"in t&&o(0,e=t.title),"description"in t&&o(1,n=t.description)},[e,n,r]}class A extends h{constructor(a){super(),g(this,a,y,v,_,{title:0,description:1})}}export{A as P};