(this.webpackJsonpmelva=this.webpackJsonpmelva||[]).push([[0],{36:function(e,t,c){},37:function(e,t,c){},49:function(e,t,c){"use strict";c.r(t);var s=c(2),a=c.n(s),n=c(28),i=c.n(n),l=(c(36),c.p,c(37),c(9)),r=c(1),o=function(){return Object(r.jsx)("div",{className:"container-fluid",children:Object(r.jsxs)("nav",{className:"navbar navbar-expand-lg bg-light col-md-12 mt-5 pt-8  ",children:[Object(r.jsx)(l.c,{to:"/",className:"btn",children:"HOME"}),Object(r.jsx)(l.c,{to:"/add",className:"btn",children:"ADD"}),Object(r.jsx)(l.c,{to:"/about",className:"btn",children:"NEWSFEED"})]})})},d=c(4),j=c(18),b=c(12),h=c(10),m=(c(43),c(30).a.initializeApp({apiKey:"AIzaSyBJ0_0Etnqny9i-x6UVj5O29eLQl6LFcwg",authDomain:"users-4c517.firebaseapp.com",databaseURL:"https://users-4c517-default-rtdb.firebaseio.com",projectId:"users-4c517",storageBucket:"users-4c517.appspot.com",messagingSenderId:"927521903745",appId:"1:927521903745:web:a70fad0f01b9e54270a980",measurementId:"G-3YYDN5T3G7"}).database().ref()),u=c(25),x=(c(17),function(){var e={name:"",surname:"",description:"",location:"",age:""},t=Object(s.useState)(e),c=Object(h.a)(t,2),a=c[0],n=c[1],i=a.name,l=a.surname,o=a.description,x=a.location,O=a.age,p=Object(d.f)(),f=Object(d.g)().id,v=Object(s.useState)({}),g=Object(h.a)(v,2),N=g[0],y=g[1];Object(s.useEffect)((function(){m.child("contacts").on("value",(function(e){null!==e.val()?y(Object(b.a)({},e.val())):e({})}))}),[f]),Object(s.useEffect)((function(){Object(u.isEmpty)(f)?n(Object(b.a)({},e)):n(Object(b.a)({},N[f]))}),[f,N]);var w=function(e){var t=e.target,c=t.name,s=t.value;n(Object(b.a)(Object(b.a)({},a),{},Object(j.a)({},c,s)))};return Object(r.jsx)("div",{className:"container mt-5",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsx)("div",{className:"col-md-6",children:Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),Object(u.isEmpty)(f)?m.child("contacts").push(a,(function(e){e&&console.log(e)})):m.child("/contacts/".concat(f)).set(a,(function(e){e&&console.log(e)})),p.push("/")},children:[Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{className:"bmd-label-floating",children:"Name"}),Object(r.jsx)("input",{type:"text",className:"form-control",value:i,name:"name",onChange:w})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{className:"bmd-label-floating",children:"Surname"}),Object(r.jsx)("input",{type:"text",className:"form-control",value:l,name:"surname",onChange:w})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{className:"bmd-label-floating",children:"Description"}),Object(r.jsx)("input",{type:"text",className:"form-control",value:o,name:"description",onChange:w})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{className:"bmd-label-floating",children:"Location"}),Object(r.jsx)("input",{type:"text",className:"form-control",value:x,name:"location",onChange:w})]}),Object(r.jsxs)("div",{className:"form-group",children:[Object(r.jsx)("label",{className:"bmd-label-floating",children:"Age"}),Object(r.jsx)("input",{type:"number",className:"form-control",value:O,name:"age",onChange:w})]}),Object(r.jsx)("button",{className:"btn btn-default",children:"cancel"}),Object(r.jsx)("button",{type:"submit",className:"btn btn-success btn-raised",children:"submit"})]})})})})}),O=function(){var e=Object(s.useState)({}),t=Object(h.a)(e,2),c=t[0],a=t[1];Object(s.useEffect)((function(){m.child("contacts").on("value",(function(e){null!==e.val()?a(Object(b.a)({},e.val())):e({})}))}),[]);return Object(r.jsxs)("div",{className:"container-fluid mt-5 pt-10",children:[Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)("div",{className:"col-lg-12",children:[Object(r.jsx)("div",{className:"jumbotron",children:Object(r.jsx)("h2",{className:"display-2",children:" LIST OF USERS"})}),Object(r.jsxs)("table",{className:"table table-bordered table-striped",children:[Object(r.jsx)("thead",{className:"thead-dark",children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{scope:"col",children:"No"}),Object(r.jsx)("th",{scope:"col",children:"Name"}),Object(r.jsx)("th",{scope:"col",children:"surname"})]})}),Object(r.jsx)("tbody",{children:Object.keys(c).map((function(e,t){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{scope:"row",children:t+1}),Object(r.jsx)("td",{children:c[e].name}),Object(r.jsx)("td",{children:c[e].surname}),Object(r.jsxs)("td",{children:[Object(r.jsx)(l.b,{to:"/update/".concat(e),children:Object(r.jsxs)("a",{className:"btn btn-secondary",href:"#",children:[Object(r.jsx)("i",{className:"fa fa-trash-o fa-lg"})," Update"]})}),Object(r.jsxs)("a",{className:"btn btn-danger",href:"#",onClick:function(){return function(e){window.confirm("are you sure you want to delete?")&&m.child("contacts/".concat(e)).remove((function(e){e&&console.log(e)}))}(e)},children:[Object(r.jsx)("i",{className:"fa fa-trash-o fa-lg"})," Delete"]})]})]},e)}))})]})]})}),Object(r.jsx)("section",{className:"section bg-light",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)("div",{className:"col-md-12 text-center",children:[Object(r.jsx)("h3",{className:"main-heading",children:"our company"}),Object(r.jsx)("div",{className:"underline mx-auto"}),Object(r.jsx)("p",{children:"Our vision is put into action through programs and a focus on environmental stewardship, activities to benefit society, and a commitment to build shareholder value by making PepsiCo a truly sustainable company. At PepsiCo, we're committed to achieving business and financial success while leaving a positive imprint on society - delivering what we call Performance with Purpose.\" (Quoted from"})]})})})}),Object(r.jsx)("section",{className:"section bg-dark",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"row",children:Object(r.jsxs)("div",{className:"col-md-12 mb-5 text-center",children:[Object(r.jsx)("h3",{className:"main-heading",children:"Vision,Mission and Values"}),Object(r.jsx)("div",{className:"underline mx-auto"}),Object(r.jsxs)("div",{className:"col-md-4",children:[Object(r.jsx)("h6",{children:"our vision"}),Object(r.jsx)("p",{children:"Vision sentence example. The sun was brilliant, the pinks and oranges \u2013 combined with the multiple shades of blue sky as it lightened \u2013 creating a vision beyond that of any dream. Her vision blurred with tears, and she stood precariously."})]}),Object(r.jsxs)("div",{className:"col-md-4",children:[Object(r.jsx)("h6",{children:"our Mission"}),Object(r.jsx)("p",{children:"Vision sentence example. The sun was brilliant, the pinks and oranges \u2013 combined with the multiple shades of blue sky as it lightened \u2013 creating a vision beyond that of any dream. Her vision blurred with tears, and she stood precariously."})]}),Object(r.jsxs)("div",{className:"col-md-4",children:[Object(r.jsx)("h6",{children:"our core values"}),Object(r.jsx)("p",{children:"Vision sentence example. The sun was brilliant, the pinks and oranges \u2013 combined with the multiple shades of blue sky as it lightened \u2013 creating a vision beyond that of any dream. Her vision blurred with tears, and she stood precariously."})]})]})})})})]})},p=c(26),f=c.n(p),v=c(31),g=function(e){var t=e.searchText,c=Object(s.useState)(""),a=Object(h.a)(c,2),n=a[0],i=a[1];return Object(r.jsx)("div",{children:Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(n)},children:[Object(r.jsx)("input",{type:"text",placeholder:"e.g politics",className:"py-3 px-3 rounded-l-2g",onChange:function(e){return i(e.target.value)}}),Object(r.jsx)("button",{type:"submit",className:"bg-green-400 py-3 px-3 rounded-r-2g ",children:"Search"})]})})},N=function(){var e=Object(s.useState)([]),t=Object(h.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)("everything"),i=Object(h.a)(n,2),l=i[0],o=i[1],d=Object(s.useState)(!0),j=Object(h.a)(d,2);j[0],j[1];return Object(s.useEffect)((function(){(function(){var e=Object(v.a)(f.a.mark((function e(){var t,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.nytimes.com/svc/search/v2/articlesearch.json?q=".concat(l,"&api-key=ggkUrBknehqvmmdXT5Xzm409A4UwEQhd"));case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,console.log(c.response.docs),a(c.response.docs),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}})()()}),[l]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"showcase",children:Object(r.jsxs)("div",{className:"overlay px-5",children:[Object(r.jsxs)("h1",{className:"text-1xl font-bold text-gray text-center mb-4 lg:text-6xl",children:["Viewing Articles about...",l]}),Object(r.jsx)(g,{searchText:function(e){return o(e)}})]})}),Object(r.jsx)("section",{className:"cont",children:c.map((function(e){var t=e.abstract,c=e.headline.main,s=e.byline.original,a=(e.image,e.lead_paragraph,e.news_desk),n=e.section_name,i=e.web_url,l=e._id,o=e.word_count;return Object(r.jsxs)("article",{className:"contone",children:[Object(r.jsx)("h2",{className:"font-bold text-2xl mb-5 ",children:c}),Object(r.jsx)("p",{children:t}),Object(r.jsx)("p",{children:"lead_paragraph"}),Object(r.jsxs)("ul",{className:"my-4",children:[Object(r.jsx)("li",{children:s}),Object(r.jsxs)("li",{children:[Object(r.jsx)("span",{className:"font-bold",children:"News Desk:"}),a]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("span",{className:"font-bold",children:"Section Name:"}),n]}),Object(r.jsxs)("li",{children:[Object(r.jsx)("span",{className:"font-bold",children:"Word Count:"}),o]})]}),Object(r.jsx)("a",{href:i,target:"_blank",className:"underline",children:"Web Resource"})]},l)}))})]})};var y=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(o,{}),Object(r.jsxs)(d.c,{children:[Object(r.jsx)(d.a,{exact:!0,path:"/",component:O}),Object(r.jsx)(d.a,{exact:!0,path:"/add",component:x}),Object(r.jsx)(d.a,{exact:!0,path:"/update/:id",component:x}),Object(r.jsx)(d.a,{exact:!0,path:"/about",component:N})]})]})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,50)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),s(e),a(e),n(e),i(e)}))};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(l.a,{children:Object(r.jsx)(y,{})})}),document.getElementById("root")),w()}},[[49,1,2]]]);
//# sourceMappingURL=main.bfc7743a.chunk.js.map