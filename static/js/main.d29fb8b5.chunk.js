(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{51:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var i=n(2),a=n.n(i),c=n(25),s=n.n(c),o=n(7),r=n.n(o),l=n(12),m=n(4),u=n(10),j=n.n(u),g=(n(50),n(51),n(26)),d=n.n(g),b=n(1),h=n(53);var f=function(){return Object(b.jsx)(h,{style:{height:"90vh",display:"flex",alignItems:"center",justifyContent:"center",margin:"auto 0"},name:"three-bounce",color:"white"})},v=n(13),O=n(78),x=n(79),p=n(80),A=n(11);var w=function(){return Object(b.jsx)(b.Fragment,{children:Array.from({length:10}).map((function(e,t){return Object(b.jsxs)("div",{className:"skeleon-container",children:[Object(b.jsx)(A.RectShape,{showLoadingAnimation:!0,color:"#272f41",style:{width:320,height:400,marginBottom:"10px"}}),Object(b.jsx)(A.RectShape,{showLoadingAnimation:!0,color:"#272f41",style:{width:100,height:20,marginBottom:"10px"}}),Object(b.jsx)(A.RectShape,{showLoadingAnimation:!0,color:"#272f41",style:{width:50,height:20,marginBottom:"10px"}})]},t)}))})};var B=function(e){var t=e.movies,n=e.skeleton,a=e.handleSubmit,c=e.input,s=e.setInput,o=e.initial,r=e.page,l=e.getPreviousPage,u=e.getNextPage,j=e.session,g=Object(i.useState)(JSON.parse(localStorage.getItem("nominations"))||[]),d=Object(m.a)(g,2),h=d[0],f=d[1],A=function(e,t){var n=Object(v.a)(h).filter((function(n){return e!==n.title||t!==n.year}));f(n)},B=function(e){var t=h.filter((function(t){return t.title===e}));return void 0===t[0]?"star-icon-inactive":t[0].title===e?"star-icon-active":"star-icon-inactive"},N=function(e,t){var n=h.filter((function(t){return t.title===e}));void 0!==n[0]?n[0].title===e&&n[0].year===t&&A(e,t):function(e,t){var n=Object(v.a)(h);!n.map((function(t){return t.title===e})).includes(!0)&&h.length<5&&n.push({title:e,year:t}),f(n)}(e,t)};return Object(i.useEffect)((function(){localStorage.setItem("nominations",JSON.stringify(h))}),[h]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"form-nomination-container",children:[Object(b.jsxs)("div",{className:"text-form-container",children:[Object(b.jsxs)("div",{className:"text-container",children:[Object(b.jsx)("p",{children:"Nominate your favorite movies!"}),Object(b.jsx)(O.b,{className:"movie-icon"})]}),Object(b.jsxs)("div",{className:"form-container",children:[Object(b.jsxs)("form",{onSubmit:a,children:[Object(b.jsx)("input",{spellCheck:!1,type:"text",placeholder:'search movie title... e.g. "dark"',value:c,onChange:function(e){return s(e.target.value)}}),Object(b.jsx)(x.b,{onClick:a,className:"search-icon"})]}),""!==c&&j||o?"":t.Search&&Object(b.jsxs)("div",{className:"button-container",children:[Object(b.jsx)("button",{className:1===r?"disabled":"previous",disabled:1===r,onClick:l,children:Object(b.jsx)(O.a,{})}),Object(b.jsx)("button",{className:t.Search.length<10?"disabled":"next",disabled:t.Search.length<10,onClick:u,children:Object(b.jsx)(O.c,{})})]})]})]}),Object(b.jsxs)("div",{className:"nomination-container",children:[Object(b.jsx)("h2",{className:"nomination-header",children:"Nomination List"}),h.map((function(e,t){return Object(b.jsxs)("div",{className:"nomination-box-container",children:[Object(b.jsx)("div",{className:e.title.length>40?"long-nomination-title":"nomination",children:"".concat(t+1,". ").concat(e.title," (").concat(e.year,")")},t),Object(b.jsx)(x.a,{className:"close-icon",onClick:function(){return A(e.title,e.year)}})]},t)}))]})]}),Object(b.jsx)("div",{className:"movies-container",children:n?Object(b.jsx)(w,{}):t.Search&&t.Search.map((function(e,t){return Object(b.jsxs)("div",{className:"movies",children:[Object(b.jsxs)("div",{className:"movie-img-container",children:[Object(b.jsx)("img",{className:"movie-img",src:"N/A"!==e.Poster?e.Poster:"data:image/png;base64,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",alt:e.Title}),Object(b.jsx)(p.a,{className:B(e.Title),onClick:function(){return N(e.Title,e.Year)}},t)]}),Object(b.jsx)("div",{className:e.Title.length>30?"long-title":"title",children:e.Title}),Object(b.jsx)("div",{className:"year",children:e.Year})]},t)}))}),"Movie not found!"===t.Error&&Object(b.jsx)("div",{className:"no-movie",children:"Movie not found. Please be more specific!"}),"Too many results."===t.Error&&Object(b.jsx)("div",{className:"too-many-movies",children:"Too many results. Please be more specific!"})]})};var N=function(){var e=Object(i.useState)(""),t=Object(m.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)([]),s=Object(m.a)(c,2),o=s[0],u=s[1],g=Object(i.useState)(1),h=Object(m.a)(g,2),v=h[0],O=h[1],x=Object(i.useState)(!0),p=Object(m.a)(x,2),A=p[0],w=p[1],N=Object(i.useState)(!0),Y=Object(m.a)(N,2),S=Y[0],D=Y[1],C=Object(i.useState)(!1),k=Object(m.a)(C,2),M=k[0],L=k[1],F="e5e99dbd",I=JSON.parse(sessionStorage.getItem("movie"))||"",y=function(){var e=Object(l.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("https://www.omdbapi.com/?s=dark&type=movie&page=1&apikey=".concat(F));case 2:t=e.sent,n=t.data,u(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(l.a)(r.a.mark((function e(){var t,i,a,c,s,o=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=o.length>0&&void 0!==o[0]?o[0]:1,""!==n){e.next=9;break}return e.next=4,j.a.get("https://www.omdbapi.com/?s=".concat(I.trim(),"&type=movie&page=").concat(t,"&apikey=").concat(F));case 4:i=e.sent,a=i.data,u(a),e.next=14;break;case 9:return e.next=11,j.a.get("https://www.omdbapi.com/?s=".concat(n.trim(),"&type=movie&page=").concat(t,"&apikey=").concat(F));case 11:c=e.sent,s=c.data,u(s);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){var e=setTimeout((function(){y(),D(!1),d.a.init({duration:1e3})}),3e3);return function(){clearTimeout(e)}}),[]),Object(i.useEffect)((function(){var e=!0;return e&&v>0&&J(v),function(){e=!1}}),[v]),S?Object(b.jsx)(f,{}):Object(b.jsxs)("div",{"data-aos":"fade",className:"container",children:[Object(b.jsx)("h1",{children:"The Shoppies"}),Object(b.jsx)(B,{movies:o,skeleton:M,handleSubmit:function(e){e.preventDefault(),""!==n&&(sessionStorage.setItem("movie",JSON.stringify(n)),L(!0),setTimeout((function(){J(),a(""),O(1),w(!1),L(!1)}),1500))},input:n,setInput:a,initial:A,page:v,getPreviousPage:function(){v>1&&O((function(e){return e-1}))},getNextPage:function(){O((function(e){return e+1}))},session:I})]})};s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(N,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.d29fb8b5.chunk.js.map