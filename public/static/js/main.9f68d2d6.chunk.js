(this["webpackJsonpreact-starter-kit"]=this["webpackJsonpreact-starter-kit"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(10),r=n.n(c),i=n(13),l=n(3),o=n(8),j=(n(18),n(19),n(0)),b=function(){return Object(j.jsxs)("footer",{className:"footer",children:[Object(j.jsx)("nav",{className:"footer_nav",children:Object(j.jsxs)("ul",{className:"footer_links_list",children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"footer_link",href:"https://twitter.com/andrea114am",target:"_blank",rel:"noreferrer",title:"twitter.com/andrea114am",children:Object(j.jsx)("i",{className:"fab fa-twitter"})})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"footer_link",href:"https://www.linkedin.com/in/andrea-aguado-moleon/",target:"_blank",rel:"noreferrer",title:"linkedin.com/in/andrea-aguado-mole\xf3n/",children:Object(j.jsx)("i",{className:"fab fa-linkedin-in"})})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"footer_link",href:"https://github.com/AndreaAguado",target:"_blank",rel:"noreferrer",title:"github.com/AndreaAguado",children:Object(j.jsx)("i",{className:"fab fa-github"})})})]})}),Object(j.jsxs)("small",{className:"footer_small",children:["Hecho con ",Object(j.jsx)("span",{role:"img","aria-label":"emoji coraz\xf3n",title:"emoji coraz\xf3n",children:"\u2764\ufe0f"})," \xa9 Andrea Aguado 2021"]})]})},m=(n(21),function(){return Object(j.jsx)("header",{className:"header",children:Object(j.jsx)("h1",{children:"Book Collection"})})}),d=(n(22),n(23),function(e){var t=function(t){e.handleInput(t.currentTarget.value,t.currentTarget.name)};return Object(j.jsxs)("form",{className:"form",method:"POST",onSubmit:function(e){return e.preventDefault()},children:[Object(j.jsxs)("label",{htmlFor:"title",children:["Title ",Object(j.jsx)("span",{className:"form_asterisk",children:"*"})]}),Object(j.jsx)("input",{onChange:t,type:"text",placeholder:"Romeo and Juliet",name:"title",id:"title",required:!0}),Object(j.jsxs)("label",{htmlFor:"first_name",children:["First name ",Object(j.jsx)("span",{className:"form_asterisk",children:"*"})]}),Object(j.jsx)("input",{onChange:t,type:"text",placeholder:"William",name:"first_name",id:"first_name",required:!0}),Object(j.jsxs)("label",{htmlFor:"last_name",children:["Last name ",Object(j.jsx)("span",{className:"form_asterisk",children:Object(j.jsx)("span",{className:"form_asterisk",children:"*"})})]}),Object(j.jsx)("input",{onChange:t,type:"text",placeholder:"Shakespeare",name:"last_name",id:"last_name",required:!0}),Object(j.jsxs)("label",{htmlFor:"isbn",children:["ISBN ",Object(j.jsx)("span",{className:"form_asterisk",children:"*"})]}),Object(j.jsx)("input",{onChange:t,type:"text",placeholder:"978-1451552058",name:"isbn",id:"isbn",required:!0}),Object(j.jsx)("input",{type:"submit"})]})}),h=(n(24),function(e){return Object(j.jsxs)("section",{id:e.id,className:"".concat(e.classname," section"),children:[Object(j.jsx)("h2",{className:"section_title",children:e.section_name}),e.children]})}),u=function(e){return Object(j.jsxs)("main",{className:"main",children:[Object(j.jsx)(h,{classname:"titles",section_name:"Titles"}),Object(j.jsx)(h,{classname:"add_book",section_name:"Add new book",children:Object(j.jsx)(d,{handleInput:e.handleInput})}),Object(j.jsx)(h,{classname:"update_book",section_name:"Update book info",children:Object(j.jsx)(d,{handleInput:e.handleInput})})]})},f={getAllBooks:function(){return fetch("/books").then((function(e){return e.json()})).then((function(e){return console.log(e),e.map((function(e){return{title:e.name}}))}))}},O=function(){var e=Object(a.useState)({title:"",first_name:"",last_name:"",isbn:""}),t=Object(o.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)([]),r=Object(o.a)(c,2),i=(r[0],r[1]);Object(a.useEffect)((function(){f.getAllBooks().then((function(e){console.log(e),i(e)}))}),[]);return Object(j.jsxs)("div",{className:"page",children:[Object(j.jsx)(m,{}),Object(j.jsx)(u,{handleInput:function(e,t){var a=t;"title"===a||"title"===a?s(Object(l.a)(Object(l.a)({},n),{},{title:e})):"first_name"===a?s(Object(l.a)(Object(l.a)({},n),{},{first_name:e})):"last_name"===a?s(Object(l.a)(Object(l.a)({},n),{},{last_name:e})):"isbn"===a&&s(Object(l.a)(Object(l.a)({},n),{},{isbn:e}))}}),Object(j.jsx)(b,{})]})};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(i.a,{children:Object(j.jsx)(O,{})})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.9f68d2d6.chunk.js.map