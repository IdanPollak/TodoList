(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{15:function(e,t,n){e.exports=n(23)},20:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),l=n.n(c),o=(n(20),n(6)),i=n(1),u=n(2);function s(){var e=Object(i.a)(["\ndisplay:flex;\njustify-content:center;\nbackground-color:bisque;\n"]);return s=function(){return e},e}var d=u.a.div(s()),m=function(){return r.a.createElement(d,null,r.a.createElement("h1",null,"Todo List"))};function f(){var e=Object(i.a)(["\n.center {\n  display:flex;\n  justify-content:center;\n}\n.content {\n  text-align:center;\n  margin: auto;\n  width: 60%;\n  border: 3px solid;\n  padding: 10px;\n}\n.crossed-line {\n    text-decoration: line-through;\n}"]);return f=function(){return e},e}var E=u.a.div(f()),v=function(e){var t=e.arr,n=function(e){e.target.classList.toggle("crossed-line")};return r.a.createElement(E,null,r.a.createElement("table",{className:"ui celled table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"center"},"Missions Todo"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,t.map((function(e){return r.a.createElement("div",{className:"content",onClick:n,key:Math.random()},e.text)})))))))},b=n(14);function h(){var e=Object(i.a)(["\ndisplay:flex;\njustify-content:center;\nmargin-top:50px;\n\n"]);return h=function(){return e},e}var g=u.a.div(h()),p=function(e){var t=e.AddToList,n=Object(a.useState)(""),c=Object(o.a)(n,2),l=c[0],i=c[1];return r.a.createElement(g,null,r.a.createElement("br",null),r.a.createElement("label",null,"Add TODO"),r.a.createElement("input",{id:"search",type:"text",value:l.value,onChange:function(e){i({text:e.target.value})}}),r.a.createElement("button",{onClick:function(e){t((function(e){return[].concat(Object(b.a)(e),[l])})),i({text:""}),console.log(l)}},"Add"))},x=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1];return r.a.createElement("div",null,r.a.createElement(m,null),r.a.createElement(p,{AddToList:c}),r.a.createElement(v,{arr:n}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.ee6c0919.chunk.js.map