(this["webpackJsonpaire2.0"]=this["webpackJsonpaire2.0"]||[]).push([[0],{167:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(26),c=t.n(r),o=(t(68),t(69),t(6)),i=t(12),m=t(11),s=function(e){return{type:"EDIT_HOSTNAME",payload:e}};var u=Object(m.b)((function(e){return{livePolls:e.poll.livepolls,hostname:e.home.hostname}}),(function(e){return{addPoll:function(a){a&&" "!==a&&e(function(e){return{type:"ADD_POLLS",payload:e}}({id:1234,hostname:a}))},changeHostname:function(a,t){e(s(t||a.target.value))}}}))((function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"span-content"},l.a.createElement("span",{style:{color:"#f64c7b"}},"a"),l.a.createElement("span",{style:{color:"#c77f9f"}},"i"),l.a.createElement("span",{style:{color:"#a0a1bd"}},"r"),l.a.createElement("span",{style:{color:"#6dcde0"}},"e"),l.a.createElement("span",{style:{color:"#FF6978"}},"2"),l.a.createElement("span",{style:{color:"#27474E"}},"."),l.a.createElement("span",{style:{color:"#7D387D"}},"O")),l.a.createElement("div",null,l.a.createElement("fieldset",{className:"survey-form"},l.a.createElement("legend",null,l.a.createElement("p",{style:{color:"#6c757d",fontWeight:"400",fontStyle:"italic",fontSize:"0.7rem",padding:"0 0rem",marginLeft:"0.3rem"}},"Survey Name")),l.a.createElement("input",{type:"text",placeholder:"Survey Name",id:"survey-name",onChange:e.changeHostname,value:e.hostname})),l.a.createElement("div",{className:"center"},l.a.createElement("input",{type:"button",style:{backgroundColor:"#3f51b5",color:"#fff",padding:"0.8rem 1rem"},value:"Let's Get Started",className:"btn",onClick:function(){e.addPoll(e.hostname),e.changeHostname(null," ")}}))))}));var d=function(){return l.a.createElement("footer",{className:"footer"},l.a.createElement("p",null,"\u24b8 2020 Copyright: JKirito"))};var E=function(){return l.a.createElement("nav",{className:"navBar App"},l.a.createElement("div",{className:"navBar-content"},l.a.createElement("div",null,l.a.createElement(o.b,{to:"/livepolls"},l.a.createElement("button",{id:"pollinglistbtn",className:"btn"},l.a.createElement("i",{className:"fa fa-clipboard","aria-hidden":"true"})))),l.a.createElement("div",{className:"ml-auto"},l.a.createElement("button",{id:"informationbtn",className:"btn"},l.a.createElement("i",{className:"fa fa-info-circle","aria-hidden":"true"})))))};var p=function(){return l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement(u,null),l.a.createElement(d,null))};var v=function(e){var a=e.hostname,t="/livepolls/".concat(a);return l.a.createElement("div",{className:"poll"},l.a.createElement("input",{type:"button",value:e.hostname,disabled:!0}),l.a.createElement("span",{className:"enterbtn"},l.a.createElement(o.b,{to:t},l.a.createElement("input",{type:"button",value:"Enter"}))))};var f=function(){return l.a.createElement("nav",{className:"navBar App"},l.a.createElement("div",{className:"navBar-content"},l.a.createElement("div",null,l.a.createElement(o.b,{to:"/"},l.a.createElement("button",{id:"pollinglistbtn",className:"btn"},l.a.createElement("i",{className:"fa fa-home","aria-hidden":"true"}))),l.a.createElement("span",{className:"live-navbar-logo"},"Aire"))))};var h=Object(m.b)((function(e){return{livepolls:e.poll.livepolls}}))((function(e){return l.a.createElement("div",null,l.a.createElement(f,null),l.a.createElement("div",{id:"live-poll-heading"},l.a.createElement("span",null,"Live Polls")),l.a.createElement("div",{className:"poll-container"},e.livepolls.map((function(e){return l.a.createElement(v,{key:e.id,hostname:e.hostname,id:e.id})}))))}));var b=function(){return l.a.createElement("nav",{className:"navBar App"},l.a.createElement("div",{className:"navBar-content"},l.a.createElement("div",null,l.a.createElement(o.b,{to:"/livepolls"},l.a.createElement("button",{id:"pollinglistbtn",className:"btn"},l.a.createElement("i",{className:"fa fa-arrow-left","aria-hidden":"true"}))),l.a.createElement("span",{className:"live-navbar-logo"},"Back"))))},N=t(60);var y=function(){return l.a.createElement("div",{className:"res-chart-container"},l.a.createElement("div",{className:"align-center"},l.a.createElement(N.a,{data:{labels:["Yes","No"],datasets:[{data:[1,1,1],label:["Y","N"],backgroundColor:["grey","red","grey"]}]},width:400,height:400,options:{maintainAspectRatio:!1}})))};var g=function(e){return l.a.createElement("div",null,l.a.createElement("h1",null,"Poll Content ",e.hostname),l.a.createElement("div",{className:"chart-container"},l.a.createElement(y,null)))};var S=Object(m.b)((function(e){return{livepolls:e.poll.livepolls}}))((function(e){for(var a=!1,t=0;t<e.livepolls.length;t++)if(e.livepolls[t].hostname===e.match.params.hostname){a=!0;break}return l.a.createElement("div",null,l.a.createElement(b,null),a&&l.a.createElement(g,{livepolls:e.livepolls,hostname:e.match.params.hostname}),!a&&l.a.createElement("h1",null,"404"))}));var O=function(e){return l.a.createElement("div",null,l.a.createElement(f,null),l.a.createElement("h1",null,"Welcome to the Setup page"),l.a.createElement("div",null,l.a.createElement("fieldset",{className:"survey-form"},l.a.createElement("legend",null,l.a.createElement("p",{style:{color:"#6c757d",fontWeight:"400",fontStyle:"italic",fontSize:"0.7rem",padding:"0 0rem",marginLeft:"0.3rem"}},"Survey Name")),l.a.createElement("input",{type:"text",placeholder:"Survey Name",id:"survey-name"})),l.a.createElement("div",{className:"center"},l.a.createElement("input",{type:"button",style:{backgroundColor:"#3f51b5",color:"#fff",padding:"0.8rem 1rem"},value:"Let's Get Started",className:"btn",onClick:function(){}}))))};var w=function(){return l.a.createElement("div",{className:"container"},l.a.createElement(o.a,null,l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/",exact:!0,component:p}),l.a.createElement(i.a,{path:"/livepolls",exact:!0,component:h}),l.a.createElement(i.a,{path:"/livepolls/:hostname",exact:!0,component:S}),l.a.createElement(i.a,{path:"/livepolls/:hostname/ques",component:O}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _=t(14),k={livepolls:[{id:"123",hostname:"Arpit",data:[1,0,0,1,1,1,0]},{id:"321",hostname:"Lucifer",data:[1,1,1,0,1,0,0]}]},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_POLLS":return e.livepolls.push(a.payload),e;default:return e}},L=t(62),A={hostname:""},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"EDIT_HOSTNAME":return Object(L.a)({},e,{hostname:a.payload});default:return e}},C=Object(_.b)({poll:D,home:B}),T=Object(_.c)(C,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(l.a.createElement(m.a,{store:T},l.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},63:function(e,a,t){e.exports=t(167)},68:function(e,a,t){},69:function(e,a,t){}},[[63,1,2]]]);
//# sourceMappingURL=main.29e402a2.chunk.js.map