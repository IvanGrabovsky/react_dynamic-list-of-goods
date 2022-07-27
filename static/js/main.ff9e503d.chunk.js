(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var o=n(6),c=n.n(o),s=n(7),r=n(1),i=n(0),a=function(t){var e=t.goods;return e.length>0?Object(i.jsxs)("table",{className:"table mt-5 is-narrow",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"#"}),Object(i.jsx)("th",{children:"Good"})]})}),Object(i.jsx)("tbody",{children:e.map((function(t){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:t.id}),Object(i.jsx)("td",{"data-cy":"good",style:{color:t.color},children:t.name})]},t.id)}))})]}):Object(i.jsx)("h2",{className:"subtitle is-size-4 mt-5",children:"No goods selected"})},d=(n(13),n(14),n(5));function l(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var u=function(){var t=Object(r.useState)([]),e=Object(s.a)(t,2),n=e[0],o=e[1];return Object(i.jsx)("div",{className:"section",children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h1",{className:"title",children:"Dynamic list of Goods"}),Object(i.jsx)("button",{type:"button",className:"button is-responsive","data-cy":"all-button",onClick:function(){l().then(o)},children:"Load all goods"}),Object(i.jsx)("button",{type:"button",className:"button is-responsive","data-cy":"sorted-button",onClick:function(){l().then((function(t){return Object(d.a)(t).sort((function(t,e){return t.color.localeCompare(e.color)}))})).then(o)},children:"Load all sorted by color"}),Object(i.jsx)("button",{type:"button",className:"button is-responsive","data-cy":"first-five-button",onClick:function(){l().then((function(t){return Object(d.a)(t).sort((function(t,e){return t.name.localeCompare(e.name)}))})).then((function(t){return t.slice(0,5)})).then(o)},children:"Load 5 first goods"}),Object(i.jsx)("button",{type:"button",className:"button is-responsive","data-cy":"red-button",onClick:function(){l().then((function(t){return t.filter((function(t){return"red"===t.color}))})).then(o)},children:"Load red goods"}),Object(i.jsx)("button",{type:"button",className:"button is-responsive","data-cy":"hide-button",onClick:function(){return o([])},children:"Hide goods"}),Object(i.jsx)(a,{goods:n})]})})};c.a.render(Object(i.jsx)(u,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.ff9e503d.chunk.js.map