(this.webpackJsonpmy_website=this.webpackJsonpmy_website||[]).push([[0],{20:function(e,t,a){e.exports=a(37)},27:function(e,t,a){},28:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(15),i=a.n(r),c=a(9),s=a(6),l=a(5),m=Object(n.createContext)(),u=function(e){var t=Object(n.useState)({Home:!1,About:!1,Projects:!1}),a=Object(l.a)(t,2),r=a[0],i=a[1];return o.a.createElement(m.Provider,{value:[r,i]},e.children)},h=a(16),d=function(e){var t,a=e.src,r=e.width,i=e.height,c=e.title,s=e.caption,m=e.percentage,u=o.a.createElement("div",null),d=m||.8,p=c||a.split("/")[4],f=Object(n.useState)(window.innerWidth),w=Object(l.a)(f,2),b=w[0],v=w[1],g=Object(n.useState)(parseInt(r,10)||b*d),E=Object(l.a)(g,2),j=E[0],y=E[1];a.includes("instagram")?u=o.a.createElement(h.a,{className:"instaPost",url:a,maxWidth:j,hideCaption:!0,containerTagName:"div",protocol:"",injectScript:!0,onLoading:function(){},onSuccess:function(){},onAfterRender:function(){},onFailure:function(){}}):a.includes("youtube")?(t=.5625*j,u=o.a.createElement("iframe",{className:"history-item-youtube",title:p,width:j.toString(),height:t.toString(),src:a,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})):(t=i,u=o.a.createElement("img",{src:a,alt:"place-holder",width:j,height:t,title:c}));var N=function(){v(window.innerWidth),y(b<r*(1/d)||void 0===r?b*d:r)};return Object(n.useEffect)(N,[]),window.addEventListener("resize",N),o.a.createElement("div",{className:"history-item"},o.a.createElement("h1",{className:"history-item-title"},p),u,o.a.createElement("figcaption",{className:"history-item-caption"},s))};a(27);var p=function(){return o.a.createElement("div",{className:"Home",id:"Page"},o.a.createElement(d,{src:"https://www.youtube-nocookie.com/embed/TFHPFltoJO4",title:"Haas Automation, Inc",width:400,caption:"I coded a Nachi robot to interact with  a HAAS CNC Lathe to pick up parts from a tray,  have one side of it cut down to shape, then flip  the part so the opposite side can be lathed. No  actual cutting occured in this video sample."}),o.a.createElement(d,{src:"https://www.youtube-nocookie.com/embed/1Dp1Uwp6pMk",title:"Team 696",width:400,caption:"On FRC Team 696, I was the head programmer  of the team. I worked with a small team of developers to get our competition robot capable of performing  tasks autonomously and then be remotely controlled by  the driver(me) of the robot. This video shows a  recap of the 2017 LA Regional competition where we  won first place and moved up to championships for the  first time in our teams' history."}))};a(28);var f=function(){return o.a.createElement("div",{className:"About",id:"Page"},o.a.createElement("h1",null,"Daniel Torres"),o.a.createElement("div",null,o.a.createElement("img",{src:"https://lh3.googleusercontent.com/3Tg7KRRLhvnqdL5efqpMUW-uWNU7AyaYg16VojkCzGcy0nUkidsPASYosvFvYWlkrCqebGNfta43co3QneoPh3zvIrk1vWViMuJb1qk7BP5Vf9cK8VzC0CyVvzuK_YvcLz-BWd-MsX4=w2400",className:"profile-picture",alt:"profile"}),o.a.createElement("p",{className:"bio"},"Daniel has been programming for several years. He started programming in middle school as part of its lego robotics team. He continued his programming career with the FIRST Robotics Competition where he was part of Team 696, The Circuit Breakers. Daniel was the head programmer of his team and during this time he learned how to program in LabView, JAVA, and C++, and really found his love for programming. He continued his work with programming as a software test engineer at HAAS Automation where he learned how to test software by finding vulnerabilities and misbehavior. Daniel is now working on web development and has been focusing on growing his skills with ReactJS and Redux. Some of his work in ReactJS and Redux can be found in the 'Projects' tab.")))};var w=function(){return o.a.createElement("div",{className:"Projects",id:"Page"},o.a.createElement("h1",null,"Projects"))};var b=function(e){var t=e.name,a=e.selected;return o.a.createElement("h1",{className:a?"NavOptionsSelected":"NavOptions"},t)};var v=function(e){var t=e.name,a=Object(n.useContext)(m),r=Object(l.a)(a,2),i=r[0],s=r[1],u=Object(n.useState)(window.location.href.split("/")[3]),h=Object(l.a)(u,2),d=h[0],p=h[1],f=function(){switch(d.toLowerCase()){case"":case"home":s({Home:!0,About:!1,Projects:!1});break;case"about":s({Home:!1,About:!0,Projects:!1});break;case"projects":s({Home:!1,About:!1,Projects:!0});break;default:s({Home:!1,About:!1,Projects:!1})}},w=function(e){""===d&&p("Home"),p(t),f()};return Object(n.useEffect)((function(){w(),f()}),[]),o.a.createElement(c.b,{className:"NavLinks",to:"Home"===t?"/":"/".concat(t),onClick:w},o.a.createElement(b,{name:t,selected:i[t]}))};a(34);var g=function(){return o.a.createElement("nav",{className:"NavigationBar"},o.a.createElement(v,{name:"Home"}),o.a.createElement(v,{name:"About"}),o.a.createElement(v,{name:"Projects"}))};a(35);var E=function(){return o.a.createElement("div",{className:"Header"},o.a.createElement("h2",{className:"Title"},"It's Daniel Torres"),o.a.createElement(g,null))};var j=function(){return document.title="It's Daniel Torres",o.a.createElement(u,null,o.a.createElement(c.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(E,null),o.a.createElement(s.c,null,o.a.createElement(s.a,{path:"/",exact:!0,component:p}),o.a.createElement(s.a,{path:"/about",component:f}),o.a.createElement(s.a,{path:"/projects",component:w})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(36);i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.ba8ed8d1.chunk.js.map