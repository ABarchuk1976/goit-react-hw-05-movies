"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[319],{9645:function(n,r,e){e.d(r,{Z:function(){return i}});var t=e(5243),a="Loader_container__X02md",c=e(184),i=function(){return(0,c.jsx)("div",{className:a,children:(0,c.jsx)(t.Z1,{height:"50",width:"50",color:"#3f51b5",visible:!0,ariaLabel:"three-circles-rotating"})})}},1598:function(n,r,e){e.d(r,{$0:function(){return f},Fg:function(){return p},PQ:function(){return m},eb:function(){return l}});var t,a,c,i,o=e(168),u=e(6444),s=e(1087),f=u.ZP.div(t||(t=(0,o.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n"]))),l=u.ZP.header(a||(a=(0,o.Z)(["\n  display: flex;\n  align-items: center;\n  padding: 1rem 2rem;\n  box-shadow: 0.25rem 0.25rem 0.25rem 0 rgba(0, 0, 0, 0.4);\n"]))),m=u.ZP.main(c||(c=(0,o.Z)(["\n  padding: 2rem;\n"]))),p=(0,u.ZP)(s.OL)(i||(i=(0,o.Z)(["\n  font-size: 1rem;\n  font-weight: 600;\n  margin-right: 1rem;\n  text-decoration: none;\n  color: black;\n  &.active {\n    color: red;\n  }\n"])))},3909:function(n,r,e){e.d(r,{Fn:function(){return t},KD:function(){return o},bl:function(){return i},e2:function(){return c},oZ:function(){return a},tJ:function(){return u}});var t="9068359f92c010fa6a3cf763f10a0606",a="movie",c="day",i="https://api.themoviedb.org/3",o={TRENDING:"trending",SEARCH:"search"},u="https://image.tmdb.org/t/p/w500"},9820:function(n,r,e){e.d(r,{Cq:function(){return m},KR:function(){return l},h5:function(){return f},ml:function(){return s}});var t=e(5861),a=e(7757),c=e.n(a),i=e(3263),o=e(7596),u=e(3909),s=function(){var n=(0,t.Z)(c().mark((function n(r){var e,t,a,s=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=s.length>1&&void 0!==s[1]?s[1]:"",t=r===u.KD.TRENDING?"".concat(u.bl,"/trending/").concat(u.oZ,"/").concat(u.e2,"?api_key=").concat(u.Fn):"".concat(u.bl,"/search/").concat(u.oZ,"?api_key=").concat(u.Fn,"&query=").concat(e),n.prev=2,n.next=5,i.Z.get(t);case 5:if(200===(a=n.sent).status&&a){n.next=8;break}throw new Error("Service is temporarily unavailable .");case 8:return n.abrupt("return",a.data);case 11:n.prev=11,n.t0=n.catch(2),o.Am.error(n.t0.message);case 14:case"end":return n.stop()}}),n,null,[[2,11]])})));return function(r){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(c().mark((function n(r){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(u.bl,"/movie/").concat(r,"?api_key=").concat(u.Fn),n.prev=1,n.next=4,i.Z.get(e);case 4:if(200===(t=n.sent).status&&t){n.next=7;break}throw new Error("Service is temporarily unavailable .");case 7:return n.abrupt("return",t.data);case 10:n.prev=10,n.t0=n.catch(1),o.Am.error(n.t0.message);case 13:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(r){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(c().mark((function n(r){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(u.bl,"/movie/").concat(r,"/reviews?api_key=").concat(u.Fn),n.prev=1,n.next=4,i.Z.get(e);case 4:if(200===(t=n.sent).status&&t){n.next=7;break}throw new Error("Service is temporarily unavailable .");case 7:return n.abrupt("return",t.data);case 10:n.prev=10,n.t0=n.catch(1),o.Am.error(n.t0.message);case 13:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(r){return n.apply(this,arguments)}}(),m=function(){var n=(0,t.Z)(c().mark((function n(r){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(u.bl,"/movie/").concat(r,"/credits?api_key=").concat(u.Fn),n.prev=1,n.next=4,i.Z.get(e);case 4:if(200===(t=n.sent).status&&t){n.next=7;break}throw new Error("Service is temporarily unavailable .");case 7:return n.abrupt("return",t.data);case 10:n.prev=10,n.t0=n.catch(1),o.Am.error(n.t0.message);case 13:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(r){return n.apply(this,arguments)}}()},2319:function(n,r,e){e.r(r),e.d(r,{default:function(){return Z}});var t,a,c=e(9439),i=e(2791),o=e(7689),u=e(9645),s=e(9820),f=e(1598),l=e(6454),m=e(168),p=e(6444),d=p.ZP.ul(t||(t=(0,m.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  flex-shrink: 1;\n  padding: 1rem 0;\n  margin: 0;\n"]))),h=p.ZP.li(a||(a=(0,m.Z)(["\n  width: 150px;\n  list-style: none;\n  margin-right: 1rem;\n"]))),v=e(3909),g=e(1224),b=e(184),Z=function(){var n=(0,i.useState)([]),r=(0,c.Z)(n,2),e=r[0],t=r[1],a=(0,i.useState)(!1),m=(0,c.Z)(a,2),p=m[0],Z=m[1],x=(0,o.UO)().movieId;return(0,i.useEffect)((function(){x&&(Z(!0),(0,s.Cq)(x).then((function(n){var r=n.cast;return t(r.map((function(n){var r=n.name,e=n.character,t=n.profile_path;return{castName:r,character:e,imgURL:t?v.tJ+t:g}})))})).catch((function(n){return console.error(n)})).finally(Z(!1)))}),[x]),(0,b.jsxs)(b.Fragment,{children:[p&&(0,b.jsx)(u.Z,{}),(0,b.jsx)(f.$0,{children:(0,b.jsx)(d,{children:e.map((function(n){var r=n.imgURL,e=n.castName,t=n.character;return(0,b.jsxs)(h,{children:[(0,b.jsx)("img",{src:r,alt:e,width:"100%"}),(0,b.jsx)(l.qY,{children:e}),(0,b.jsx)(l.qY,{children:t})]},e)}))})})]})}},6454:function(n,r,e){e.d(r,{EO:function(){return Z},Nh:function(){return w},Nx:function(){return h},QJ:function(){return b},iO:function(){return g},jB:function(){return d},qY:function(){return x},xU:function(){return v}});var t,a,c,i,o,u,s,f,l=e(168),m=e(6444),p=e(1087),d=(0,m.ZP)(p.rU)(t||(t=(0,l.Z)(["\n  display: inline-block;\n  text-decoration: none;\n  outline: none;\n  font-size: 0.75rem;\n  padding: 0.25rem 0.5rem;\n  border: 1px solid black;\n  border-radius: 0.25rem;\n  background-color: #a6a6a6;\n  color: black;\n  :hover {\n    background-color: #999999;\n  }\n"]))),h=m.ZP.article(a||(a=(0,l.Z)(["\n  display: grid;\n  grid-template-columns: 200px 1fr;\n  max-width: 1600px;\n  margin: 1rem auto;\n"]))),v=m.ZP.div(c||(c=(0,l.Z)(["\n  height: fit-content;\n"]))),g=m.ZP.div(i||(i=(0,l.Z)(["\n  padding: 1rem;\n  padding-bottom: 0;\n  font-size: 0.75rem;\n  color: black;\n"]))),b=m.ZP.h1(o||(o=(0,l.Z)(["\n  font-size: 1.5rem;\n  font-weight: 800;\n  margin-bottom: 1rem;\n"]))),Z=m.ZP.h2(u||(u=(0,l.Z)(["\n  font-size: 1rem;\n  font-weight: 600;\n  margin-bottom: 1rem;\n"]))),x=m.ZP.p(s||(s=(0,l.Z)(["\n  margin-bottom: 1rem;\n"]))),w=m.ZP.div(f||(f=(0,l.Z)(["\n  border-top: 1px solid black;\n  border-bottom: 1px solid black;\n  padding-top: 1rem;\n"])))},1224:function(n,r,e){n.exports=e.p+"static/media/no_image.34273bf388e9df66c8b9.jpg"},168:function(n,r,e){function t(n,r){return r||(r=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(r)}}))}e.d(r,{Z:function(){return t}})}}]);
//# sourceMappingURL=319.c65b1270.chunk.js.map