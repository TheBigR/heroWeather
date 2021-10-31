(this["webpackJsonpweather-themed-rn"]=this["webpackJsonpweather-themed-rn"]||[]).push([[0],{53:function(e,t,n){},54:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(22),r=n.n(a),i=(n(53),n(7)),s=n(13),o=n(2),u=(n(54),n(15)),l=n(6),d="darkMode",j="addLocation",b="deleteLocation",h="updateLocation";function m(e){return{type:d,payload:e}}var O,f=n(1),x=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.configReducer})).darkMode,n=function(t){window.localStorage.setItem("theme",t),e(m(t))};return Object(f.jsxs)("div",{className:"ui secondary pointing menu ",style:{backgroundColor:"orange",padding:3},children:[Object(f.jsxs)(s.b,{to:"/weather",className:"ui button teal",children:[Object(f.jsx)("i",{className:"cloud icon"}),"Weather"]}),Object(f.jsxs)(s.b,{to:"/favorites",className:"ui button teal",children:[Object(f.jsx)("i",{className:"star icon"}),"Favorites"]}),Object(f.jsxs)("div",{className:"right menu",children:[Object(f.jsx)(s.b,{to:"/",className:"item ",children:Object(f.jsx)("i",{className:"home icon"})}),Object(f.jsxs)("div",{className:"ui buttons",children:[Object(f.jsx)("button",{className:"ui button teal  ".concat("dark"===t?"active":""),onClick:function(){return n("dark")},children:"Dark"}),Object(f.jsx)("div",{className:"or ui"}),Object(f.jsx)("button",{className:"ui button teal  ".concat("light"===t?"active":""),onClick:function(){return n("light")},children:"Light"})]})]})]})},p={colors:{background:"#fcfefe",textColor:"#1a2639",cardBackground:"#e3e3e3"}},v={colors:{background:"#1a2639",textColor:"#fcfefe",cardBackground:"#455d7a"}},g=n(24),y=u.b.div(O||(O=Object(g.a)(["\n  background: ",";\n  color: ",";\n  flex-direction: column;\n  width: 100vw;\n  height: 100vh;\n  align-items: center;\n  justify-content: center;\n  font-family: sans-serif;\n  padding: 12px;\n"])),(function(e){return e.theme.colors.background}),(function(e){return e.theme.colors.textColor})),k=n(11),N=n.n(k),w=n(16);var D,S=n(46),E=n.n(S).a.create({baseURL:"https://dataservice.accuweather.com"}),T="K3LUPRDNysN4nBIYZi5hKZh1GVij3sc8",C=function(e){var t=e.location,n=Object(l.b)(),a=Object(c.useState)({temp:"",weatherDesc:""}),r=Object(i.a)(a,2),u=r[0],d=r[1],h=Object(l.c)((function(e){return e.locationReducer})),m=Object(c.useState)(t),O=Object(i.a)(m,2),x=O[0],p=O[1],v=Object(o.e)(),g=h.find((function(e){return e.key===t.key})),y=function(e){var c;n(e?(c=t.key,{type:b,payload:c}):function(e){return{type:j,payload:e}}(t))};return Object(c.useEffect)((function(){function e(){return(e=Object(w.a)(N.a.mark((function e(t){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.get("/currentconditions/v1/".concat(t),{params:{apikey:T,metric:!0}});case 2:return n=e.sent,e.abrupt("return",{temperature:n.data[0].Temperature.Metric.Value,unit:n.data[0].Temperature.Metric.Unit,phrase:n.data[0].WeatherText});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(t){return e.apply(this,arguments)})(x.key).then((function(e){d(e)}))}),[x.key]),Object(c.useEffect)((function(){v.location&&p(v.location)}),[v.location]),Object(f.jsxs)("div",{className:"ui card",children:[Object(f.jsxs)("div",{className:"content",children:[Object(f.jsx)("i",{className:"right floated start icon"}),Object(f.jsx)("div",{className:"header",children:x.name}),Object(f.jsxs)("div",{className:"description",children:[Object(f.jsxs)("p",{className:"floated right",children:["temperature: ",u.temperature," ",u.unit]}),Object(f.jsx)("p",{children:u.phrase})]})]}),Object(f.jsxs)("div",{className:"extra content",children:[Object(f.jsx)("span",{className:"left floated",children:Object(f.jsx)(s.b,{to:{pathname:"/weather/forecast/".concat(t.name),location:t},className:"ui button teal",children:"Forecast"})}),Object(f.jsxs)("span",{className:"right floated star ",onClick:function(){return y(g)},children:[Object(f.jsx)("i",{className:"star icon ".concat(g?"active":"")}),"Favorite"]})]})]})},L=function(){var e=Object(l.c)((function(e){return e.locationReducer}));return Object(f.jsxs)("div",{style:{color:"orange",padding:6},children:[Object(f.jsxs)("div",{className:"ui three column grid",children:[Object(f.jsx)("div",{className:"column center aligned",children:Object(f.jsx)("i",{className:"ui large icon star"})}),Object(f.jsx)("div",{className:"column center aligned",children:Object(f.jsx)("h1",{children:"Favorites"})}),Object(f.jsx)("div",{className:"column center aligned",children:Object(f.jsx)("i",{className:"ui large icon star"})})]}),e.map((function(e){return Object(f.jsx)(C,{location:e},e.key)}))]})},M=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(),s=Object(i.a)(r,2),o=s[0],u=s[1],l=function(){var e=Object(w.a)(N.a.mark((function e(t){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.get("/locations/v1/cities/search",{params:{apikey:T,q:t}});case 2:n=e.sent,u({name:t,key:n.data[0].Key});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{className:"ui center aligned basic segment",children:Object(f.jsxs)("div",{className:"ui left icon action input",children:[Object(f.jsx)("input",{onChange:function(e){a(e.target.value)},value:n,type:"text"}),Object(f.jsx)("button",{className:"ui button teal",onClick:function(){l(n),a("")},children:Object(f.jsx)("i",{className:"search ui icon"})})]})}),o&&Object(f.jsx)("div",{className:"ui center aligned basic segment",children:Object(f.jsx)(C,{location:o})})]})},_=u.b.div(D||(D=Object(g.a)(["\n  background: ",";\n  color: ",";\n  flex-direction: column;\n  width: 10vw;\n  height: 20vh;\n  align-items: center;\n  justify-content: center;\n  font-family: sans-serif;\n  padding: 10px;\n  border-radius: 5px;\n  margin: 10px;\n"])),(function(e){return e.theme.colors.cardBackground}),(function(e){return e.theme.colors.textColor})),R=function(e){var t=e.forecast,n=new Date(1e3*t.EpochDate),c=n.toLocaleDateString("default",{weekday:"long"}),a=n.toLocaleDateString();return Object(f.jsx)(_,{children:Object(f.jsxs)("div",{className:"ui content",children:[Object(f.jsx)("h5",{children:"".concat(c,"\n           ").concat(a,"\n          ")}),Object(f.jsxs)("div",{className:"ui description ",children:[Object(f.jsxs)("div",{children:["max: ",t.Temperature.Maximum.Value," ",t.Temperature.Maximum.Unit]}),Object(f.jsxs)("div",{children:["min: ",t.Temperature.Minimum.Value," ",t.Temperature.Maximum.Unit]}),Object(f.jsx)("h3",{children:t.Day.IconPhrase})]})]})})},F=function(){var e=Object(o.e)(),t=Object(c.useState)([]),n=Object(i.a)(t,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){function t(){return(t=Object(w.a)(N.a.mark((function e(t){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.get("/forecasts/v1/daily/5day/".concat(t),{params:{apikey:T,metric:!0}});case 2:return n=e.sent,e.abrupt("return",n.data.DailyForecasts);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(e){return t.apply(this,arguments)})(e.location.key).then((function(e){r(e)}))}),[e.location.key]),Object(f.jsx)("div",{children:Object(f.jsxs)("div",{children:[Object(f.jsxs)("h1",{children:[e.location.name," forecast "]}),a.length>0&&Object(f.jsx)("div",{className:"ui cards",children:a.map((function(e){return Object(f.jsx)(R,{forecast:e},e.Date)}))})]})})};var I=function(){var e=Object(l.c)((function(e){return e.configReducer})),t=e.darkMode,n=Object(l.b)(),a=Object(c.useState)({name:"Tel Aviv",key:"215854"}),r=Object(i.a)(a,1)[0];return Object(c.useEffect)((function(){e.darkMode||n(m(window.localStorage.getItem("theme")))}),[e.darkMode,n]),Object(f.jsx)(u.a,{theme:"light"===t?p:v,children:Object(f.jsx)(s.a,{children:Object(f.jsxs)(y,{children:[Object(f.jsx)(x,{}),Object(f.jsx)(o.a,{path:"/",exact:!0,component:function(){return Object(f.jsx)(C,{location:r})}}),Object(f.jsx)(o.a,{path:"/favorites",exact:!0,component:L}),Object(f.jsx)(o.a,{path:"/weather",exact:!0,component:M}),Object(f.jsx)(o.a,{path:"/weather/:location",exact:!0,component:C}),Object(f.jsx)(o.a,{path:"/weather/forecast/:location",exact:!0,component:F})]})})})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,86)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))},B=n(19),V=n(31),P=n(25),X=Object(B.b)({configReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return t.type===d?Object(V.a)(Object(V.a)({},e),{},{darkMode:t.payload}):e},locationReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return[].concat(Object(P.a)(e),[t.payload]);case b:return e.filter((function(e){return e.key!==t.payload}));case h:return e.map((function(e){return e.key!==t.payload.key?e:t.payload}));default:return e}}}),K=X,J=n(47),W=n.n(J),Z=n(48),q=Object(B.a)(W.a,Z.a)(B.c);r.a.render(Object(f.jsx)(l.a,{store:q(K,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),children:Object(f.jsx)(I,{})}),document.getElementById("root")),U()}},[[85,1,2]]]);
//# sourceMappingURL=main.52be9daf.chunk.js.map