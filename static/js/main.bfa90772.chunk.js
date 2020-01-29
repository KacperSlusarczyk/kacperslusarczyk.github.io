(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{27:function(n,e,t){n.exports=t(39)},39:function(n,e,t){"use strict";t.r(e);var r=t(1),a=t.n(r),i=t(19),l=t.n(i),o=t(2),c=t(14),u=t(8),s=t(3),d="#43B4FF",p="#EBF0F3",f="#004A78",m="#6991AA",b="#FFFFFF",v="#FF4343",h="#FFC743",g="#32E16C",x=t(10),E=t(0),k=[{title:"Portfolio",description:"Miejsce gdzie mo\u017cna spotka\u0107 wszystkie moje prace"},{title:"React app",description:"Aplikacja pogodowa napisana w ReactJS wraz z routerem"},{title:"Na kodzie",description:"Strona internetowa z CMS do wrzucania prezentacji z lekcji"},{title:"WebAssembly",description:"Pocz\u0105tki z WebAssembly wraz z j\u0119zykiem Rust"},{title:"Rust",description:"Pocz\u0105tki nauki j\u0119zyka Rust, kt\xf3ry ju\u017c mi si\u0119 podoba"},{title:"C++",description:"Szkolne projekty z lekcji, dla ka\u017cdego"},{title:"Godot game",description:"Gra oparta z silnika Godot"}],w=[{title:"JavaScript",lvl:90,list:["React","Vue","Gatsby","Node.js","TypeScript"]},{title:"Python",lvl:70,list:["Django","Vue","TypeScript","jQuery"]},{title:"HTML",lvl:100,list:["Pug"]},{title:"CSS",lvl:85,list:["SASS","Less","Styled components"]},{title:"Rust",lvl:23,list:["WebAssembly"]},{title:"C++",lvl:58,list:[]},{title:"Dart",lvl:30,list:["Flutter"]},{title:"Git",lvl:60,list:["GitHub"]}];function y(){var n=Object(o.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 1rem;\n  margin: 0;\n  width: 620px;\n"]);return y=function(){return n},n}function j(){var n=Object(o.a)(["\n  clear: both;\n  margin-top: 20px;\n  color: ",";\n  font-size: 15px;\n"]);return j=function(){return n},n}function z(){var n=Object(o.a)(["\n  font-weight: bold;\n  font-size: 20px;\n  margin: 12px 0 0 20px;\n  display: inline-block;\n"]);return z=function(){return n},n}function O(){var n=Object(o.a)(["\n  width: 20px;\n  height: 20px;\n  padding: 15px;\n  background-color: ",";\n  border-radius: 20px;\n  box-shadow: 0 3px 10px ","72;\n  float: left;\n"]);return O=function(){return n},n}function S(){var n=Object(o.a)(["\n  height: 50px;\n"]);return S=function(){return n},n}function F(){var n=Object(o.a)(["\n  width: 260px;\n  height: 110px;\n  padding: 20px;\n  background-color: ",";\n  border-radius: 20px;\n"]);return F=function(){return n},n}var A=s.b.div(F(),b),P=s.b.div(S()),C=s.b.div(O(),d,d),R=s.b.h3(z()),B=s.b.div(j(),m),D=function(n){var e=n.title,t=n.description;return a.a.createElement(A,null,a.a.createElement(P,null,a.a.createElement(C,null,a.a.createElement(E.b.Provider,{value:{style:{color:b,fontSize:20}}},a.a.createElement(x.c,null))),a.a.createElement(R,null,e)),a.a.createElement(B,null,t))},G=s.b.div(y());var W=function(){return a.a.createElement(G,null,k.map((function(n){return a.a.createElement(D,{key:n.title,title:n.title,description:n.description})})))};function M(){var n=Object(o.a)(["\n  display: inline-block;\n  width: 45%;\n  color: ",';\n  font-size: 15px;\n  font-weight: 700;\n  line-height: 25px;\n  ul {\n    list-style: none;\n    li:before {\n      content: "+";\n      margin-right: 5px;\n    }\n  }\n']);return M=function(){return n},n}function H(){var n=Object(o.a)(["\n  font-weight: bold;\n  font-size: 20px;\n  margin: 40px 0 0 20px;\n  display: inline-block;\n"]);return H=function(){return n},n}function I(){var n=Object(o.a)(["\n  width: 95px;\n  height: 95px;\n  position: relative;\n  float: left;\n"]);return I=function(){return n},n}function J(){var n=Object(o.a)(["\n  vertical-align: top;\n  height: 100px;\n  width: 50%;\n"]);return J=function(){return n},n}function T(){var n=Object(o.a)(["\n  display: flex;\n  min-height: 100px;\n  padding: 20px;\n  background-color: ",";\n  border-radius: 20px;\n"]);return T=function(){return n},n}function L(){var n=Object(o.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 1rem;\n  margin: 0;\n  width: 620px;\n"]);return L=function(){return n},n}var N=s.b.div(L()),V=s.b.div(T(),b),K=s.b.div(J()),Q=s.b.div(I()),$=s.b.h3(H()),q=s.b.div(M(),m),U=function(n){var e,t=n.radius,r=n.progress,i=n.filterId,l=t-12,o=2*l*Math.PI,c=o-r/100*o,u=(e=r)<25?v:e<50?h:e<75?d:g;return a.a.createElement("svg",{height:2*t,width:2*t},a.a.createElement("defs",null,a.a.createElement("filter",{id:i,x:"-1",y:"-1",width:"300%",height:"300%"},a.a.createElement("feDropShadow",{dx:"0",dy:"2",stdDeviation:"5",floodColor:"".concat(u,"72")}))),a.a.createElement("circle",{stroke:u,strokeLinecap:"round",fill:"transparent",strokeWidth:6,strokeDasharray:o+" "+o,style:{strokeDashoffset:c},r:l,cx:t,cy:t,filter:"url(#".concat(i,")")}))},X=function(n){var e=n.title,t=n.lvl,r=n.list;return a.a.createElement(V,null,a.a.createElement(K,null,a.a.createElement(Q,null,a.a.createElement(U,{radius:50,progress:t,filterId:e}),a.a.createElement(E.b.Provider,{value:{style:{color:f,fontSize:30,position:"absolute",top:35,left:35}}},a.a.createElement(x.a,null))),a.a.createElement($,null,e)),a.a.createElement(q,null,a.a.createElement("ul",null,r.map((function(n){return a.a.createElement("li",{key:"".concat(e,"-").concat(n)},n)})))))};var Y=function(){return a.a.createElement(N,null,w.map((function(n){return a.a.createElement(X,{key:n.title,title:n.title,lvl:n.lvl,list:n.list})})))};var Z=function(){return a.a.createElement("h2",null,"About")},_=t(24),nn=t(25);function en(){var n=Object(o.a)(["\n  text-align: center;\n  flex: 1;\n"]);return en=function(){return n},n}function tn(){var n=Object(o.a)(["\n  display: flex;\n  width: 100%;\n  a {\n    font-weight: bold;\n    color: ",";\n  }\n"]);return tn=function(){return n},n}function rn(){var n=Object(o.a)(["\n  position: fixed;\n  top: 0;\n  right: 0;\n  width: 300px;\n  height: 55px;\n  border-radius: 20px;\n  background-color: ",";\n  padding: 10px;\n  margin: 10px;\n"]);return rn=function(){return n},n}var an=s.b.div(rn(),b),ln=s.b.nav(tn(),d),on=Object(s.b)(c.b)(en());var cn=function(){return a.a.createElement(an,null,a.a.createElement(ln,null,a.a.createElement(E.b.Provider,{value:{style:{color:f,fontSize:35,flex:1,margin:"10px 0"}}},a.a.createElement(on,{to:"/"},a.a.createElement(_.a,null)),a.a.createElement(on,{to:"/skills"},a.a.createElement(x.b,null)),a.a.createElement(on,{to:"/about"},a.a.createElement(nn.a,null)))))};function un(){var n=Object(o.a)(["\n  font-size: 35px;\n  margin: 25px;\n  span {\n    color: ",";\n  }\n"]);return un=function(){return n},n}function sn(){var n=Object(o.a)(["\n  width: 100%;\n  height: 100px;\n"]);return sn=function(){return n},n}var dn=s.b.header(sn()),pn=s.b.h1(un(),d);var fn=function(){return a.a.createElement(dn,null,a.a.createElement(pn,null,"Kacper",a.a.createElement("span",null,"u")),a.a.createElement(cn,null))};function mn(){var n=Object(o.a)(["\n  body {\n    margin: 0;\n    font-family: 'Montserrat', sans-serif;\n    background-color: ",";\n    color: ",";\n  }\n  /* width */\n  ::-webkit-scrollbar {\n    width: 10px;\n  }\n\n  /* Track */\n  ::-webkit-scrollbar-track {\n    background: ",";\n  }\n\n  /* Handle */\n  ::-webkit-scrollbar-thumb {\n    background: ",";\n    border-radius: 20px;\n    box-shadow:  0 0 15px ","72;\n  }\n\n  /* Handle on hover */\n  ::-webkit-scrollbar-thumb:hover {\n    background: ","BB;\n  }\n"]);return mn=function(){return n},n}var bn=Object(s.a)(mn(),p,f,p,d,d,d);function vn(){var n=Object(o.a)(["\n  display: flex;\n  margin: auto;\n  max-width: 620px;\n"]);return vn=function(){return n},n}var hn=s.b.div(vn()),gn=function(){return a.a.createElement(c.a,null,a.a.createElement(bn,null),a.a.createElement(fn,null),a.a.createElement(hn,null,a.a.createElement("main",null,a.a.createElement(u.a,{path:"/",exact:!0,component:W}),a.a.createElement(u.a,{path:"/skills",component:Y}),a.a.createElement(u.a,{path:"/about",component:Z}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(38),l.a.render(a.a.createElement(gn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.bfa90772.chunk.js.map