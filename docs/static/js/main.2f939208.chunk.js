(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{15:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(7),r=n.n(a),i=(n(15),n(2)),s=n(9),u=n(0),o=function(t){var e=t.setcategorias,n=Object(c.useState)(""),a=Object(i.a)(n,2),r=a[0],o=a[1];return Object(u.jsx)("form",{onSubmit:function(t){t.preventDefault(),r.trim().length>2&&(e((function(t){return[r].concat(Object(s.a)(t))})),o(""))},children:Object(u.jsx)("input",{type:"text",value:r,onChange:function(t){o(t.target.value)}})})},j=n(10),d=function(t){var e=t.title,n=t.url;return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("img",{src:n,alt:e}),Object(u.jsx)("p",{children:e})]})},l=n(6),p=n.n(l),b=n(8),f=function(){var t=Object(b.a)(p.a.mark((function t(e){var n,c,a,r,i;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="http://api.giphy.com/v1/gifs/search?api_key=7YWemLJLKJhV1Al8orCcH5q3qZ5djxU8&q=".concat(encodeURI(e),"&limit=7"),t.next=3,fetch(n);case 3:return c=t.sent,t.next=6,c.json();case 6:return a=t.sent,r=a.data,i=r.map((function(t){var e=t.id,n=t.images;return{id:e,title:t.title,url:n.downsized.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(t){var e=Object(c.useState)({data:[],isLoading:!0}),n=Object(i.a)(e,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){f(t).then((function(t){r({data:t,isLoading:!1})}))}),[t]),a},h=function(t){var e=t.category,n=O(e),c=n.data,a=n.isLoading;return Object(u.jsxs)("div",{className:"animate__animated animate__bounce",children:[Object(u.jsx)("h2",{children:e}),a&&Object(u.jsx)("div",{className:"loader"}),Object(u.jsx)("div",{className:"card-grid",children:null===c||void 0===c?void 0:c.map((function(t){return Object(u.jsx)(d,Object(j.a)({},t),t.id)}))})]})},x=function(){var t=Object(c.useState)(["goku","superman"]),e=Object(i.a)(t,2),n=e[0],a=e[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Gif Expert App"}),Object(u.jsx)(o,{setcategorias:a}),Object(u.jsx)("ol",{children:null===n||void 0===n?void 0:n.map((function(t){return Object(u.jsx)(h,{category:t},t)}))})]})};r.a.render(Object(u.jsx)(x,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.2f939208.chunk.js.map