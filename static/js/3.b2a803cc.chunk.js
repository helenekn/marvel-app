(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[3],{41:function(e,t,c){"use strict";var a=c.p+"static/media/error.42292aa1.gif",r=c(2);t.a=function(){return Object(r.jsx)("img",{style:{display:"block",width:"250px",height:"230px",objectFit:"contain",margin:"0 auto"},src:a,alt:"Error"})}},43:function(e,t,c){"use strict";var a=c(4),r=c.n(a),n=c(6),s=c(5),i=c(0);t.a=function(){var e=function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),c=t[0],a=t[1],o=Object(i.useState)(null),l=Object(s.a)(o,2),u=l[0],j=l[1];return{loading:c,request:Object(i.useCallback)(function(){var e=Object(n.a)(r.a.mark((function e(t){var c,n,s,i,o,l=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=l.length>1&&void 0!==l[1]?l[1]:"GET",n=l.length>2&&void 0!==l[2]?l[2]:null,s=l.length>3&&void 0!==l[3]?l[3]:{"Content-Type":"application/json"},a(!0),e.prev=4,e.next=7,fetch(t,{method:c,body:n,headers:s});case 7:if((i=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(i.status));case 10:return e.next=12,i.json();case 12:return o=e.sent,a(!1),e.abrupt("return",o);case 17:throw e.prev=17,e.t0=e.catch(4),a(!1),j(e.t0.message),e.t0;case 22:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(t){return e.apply(this,arguments)}}(),[]),error:u,clearError:Object(i.useCallback)((function(){return j(null)}),[])}}(),t=e.loading,c=e.request,a=e.error,o=e.clearError,l="https://gateway.marvel.com:443/v1/public/",u="apikey=aa2c874a5391b732985da0ed1ea67672",j=function(){var e=Object(n.a)(r.a.mark((function e(){var t,a,n=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:210,e.next=3,c("".concat(l,"characters?limit=9&offset=").concat(t,"&").concat(u));case 3:return a=e.sent,e.abrupt("return",a.data.results.map(O));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(n.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(l,"characters?name=").concat(t,"&").concat(u));case 2:return a=e.sent,e.abrupt("return",a.data.results.map(O));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(n.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(l,"characters/").concat(t,"?").concat(u));case 2:return a=e.sent,e.abrupt("return",O(a.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(n.a)(r.a.mark((function e(){var t,a,n=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:0,e.next=3,c("".concat(l,"comics?orderBy=issueNumber&limit=8&offset=").concat(t,"&").concat(u));case 3:return a=e.sent,e.abrupt("return",a.data.results.map(p));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(n.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("".concat(l,"comics/").concat(t,"?").concat(u));case 2:return a=e.sent,e.abrupt("return",p(a.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(e){return{id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}},p=function(e){var t;return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:(null===(t=e.textObjects[0])||void 0===t?void 0:t.language)||"en-us",price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"not available"}};return{loading:t,error:a,clearError:o,getAllCharacters:j,getCharacterByName:h,getCharacter:b,getAllComics:d,getComic:m}}},44:function(e,t,c){},45:function(e,t,c){"use strict";c(44);var a=c.p+"static/media/Avengers.4065c8f9.png",r=c.p+"static/media/Avengers_logo.9eaf2193.png",n=c(2);t.a=function(){return Object(n.jsxs)("div",{className:"app__banner",children:[Object(n.jsx)("img",{src:a,alt:"Avengers"}),Object(n.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",Object(n.jsx)("br",{}),"Stay tuned!"]}),Object(n.jsx)("img",{src:r,alt:"Avengers logo"})]})}},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},57:function(e,t,c){},73:function(e,t,c){"use strict";c.r(t);var a=c(5),r=c(0),n=c(23),s=c(41),i=(c(50),c.p+"static/media/mjolnir.61f31e18.png"),o=c(43),l=c(2),u=function(e){var t=e.char,c=t.name,a=t.description,r=t.thumbnail,n=t.homepage,s=t.wiki;return Object(l.jsxs)("div",{className:"randomchar__block",children:[Object(l.jsx)("img",{src:r,alt:"Random character",className:"randomchar__img",style:"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r?{objectFit:"contain"}:{objectFit:"cover"}}),Object(l.jsxs)("div",{className:"randomchar__info",children:[Object(l.jsx)("p",{className:"randomchar__name",children:c}),Object(l.jsx)("p",{className:"randomchar__descr",children:a}),Object(l.jsxs)("div",{className:"randomchar__btns",children:[Object(l.jsx)("a",{href:n,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"homepage"})}),Object(l.jsx)("a",{href:s,className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},j=function(){var e=Object(r.useState)({}),t=Object(a.a)(e,2),c=t[0],j=t[1],h=Object(o.a)(),b=h.loading,d=h.error,m=h.getCharacter,O=h.clearError;Object(r.useEffect)((function(){f();var e=setInterval(f,6e4);return function(){clearInterval(e)}}),[]);var p=function(e){j(e)},f=function(){O();var e=Math.floor(400*Math.random()+1011e3);m(e).then(p)},v=d?Object(l.jsx)(s.a,{}):null,x=b?Object(l.jsx)(n.a,{}):null,_=b||d?null:Object(l.jsx)(u,{char:c});return Object(l.jsxs)("div",{className:"randomchar",children:[v,x,_,Object(l.jsxs)("div",{className:"randomchar__static",children:[Object(l.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(l.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(l.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(l.jsx)("button",{onClick:f,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"try it"})}),Object(l.jsx)("img",{src:i,alt:"mjolnir",className:"randomchar__decoration"})]})]})},h=c(8),b=(c(51),function(e){var t=Object(r.useState)([]),c=Object(a.a)(t,2),i=c[0],u=c[1],j=Object(r.useState)(!1),b=Object(a.a)(j,2),d=b[0],m=b[1],O=Object(r.useState)(210),p=Object(a.a)(O,2),f=p[0],v=p[1],x=Object(r.useState)(!1),_=Object(a.a)(x,2),g=_[0],N=_[1],k=Object(o.a)(),y=k.loading,w=k.error,C=k.getAllCharacters;Object(r.useEffect)((function(){S(f,!0)}),[]);var S=function(e,t){m(!t),C(e).then(E)},E=function(e){var t=!1;e.length<9&&(t=!0),u((function(t){return[].concat(Object(h.a)(t),Object(h.a)(e))})),v((function(e){return e+9})),N((function(e){return t}))},F=Object(r.useRef)([]),T=function(e){F.current.forEach((function(e){return e.classList.remove("char__item_selected")})),F.current[e].classList.add("char__item_selected"),F.current[e].focus()};var A=function(t){var c=t.map((function(t,c){var a={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t.thumbnail&&(a={objectFit:"contain"}),Object(l.jsxs)("li",{className:"char__item",tabIndex:0,ref:function(e){return F.current[c]=e},onClick:function(){e.onCharSelected(t.id),T(c)},onKeyPress:function(a){" "!==a.key&&"Enter"!==a.key||(e.onCharSelected(t.id),T(c))},children:[Object(l.jsx)("img",{src:t.thumbnail,alt:t.name,style:a}),Object(l.jsx)("div",{className:"char__name",children:t.name})]},t.id)}));return Object(l.jsx)("ul",{className:"char__grid",children:c})}(i),I=w?Object(l.jsx)(s.a,{}):null,q=y&&!d?Object(l.jsx)(n.a,{}):null;return Object(l.jsxs)("div",{className:"char__list",children:[I,q,A,Object(l.jsx)("button",{className:"button button__main button__long",disabled:d,style:{display:g?"none":"block"},onClick:function(){return S(f)},children:Object(l.jsx)("div",{className:"inner",children:"load more"})})]})}),d=c(12),m=(c(52),c(53),function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(l.jsxs)("div",{className:"skeleton",children:[Object(l.jsxs)("div",{className:"pulse skeleton__header",children:[Object(l.jsx)("div",{className:"pulse skeleton__circle"}),Object(l.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(l.jsx)("div",{className:"pulse skeleton__block"}),Object(l.jsx)("div",{className:"pulse skeleton__block"}),Object(l.jsx)("div",{className:"pulse skeleton__block"})]})]})}),O=function(e){var t=e.char,c=t.name,a=t.description,r=t.thumbnail,n=t.homepage,s=t.wiki,i=t.comics,o={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r&&(o={objectFit:"contain"}),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"char__basics",children:[Object(l.jsx)("img",{src:r,alt:c,style:o}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"char__info-name",children:c}),Object(l.jsxs)("div",{className:"char__btns",children:[Object(l.jsx)("a",{href:n,className:"button button__main",children:Object(l.jsx)("div",{className:"inner",children:"homepage"})}),Object(l.jsx)("a",{href:s,className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(l.jsx)("div",{className:"char__descr",children:a}),Object(l.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(l.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:"There is no commics with this character",i.map((function(e,t){if(!(t>9)){var c=e.resourceURI.substring(43);return Object(l.jsx)(d.b,{to:"/comics/".concat(c),className:"char__comics-item",style:"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r?{objectFit:"unset"}:{objectFit:"cover"},children:e.name},t)}}))]})]})},p=function(e){var t=Object(r.useState)(null),c=Object(a.a)(t,2),i=c[0],u=c[1],j=Object(o.a)(),h=j.loading,b=j.error,d=j.getCharacter,p=j.clearError;Object(r.useEffect)((function(){f()}),[e.charId]);var f=function(){var t=e.charId;t&&(p(),d(t).then(v))},v=function(e){u(e)},x=i||h||b?null:Object(l.jsx)(m,{}),_=b?Object(l.jsx)(s.a,{}):null,g=h?Object(l.jsx)(n.a,{}):null,N=h||b||!i?null:Object(l.jsx)(O,{char:i});return Object(l.jsxs)("div",{className:"char__info",children:[x,_,g,N]})},f=(c(45),c.p+"static/media/vision.067d4ae1.png"),v=c(10),x=c(14),_=c(15),g=c(17),N=function(e){Object(_.a)(c,e);var t=Object(g.a)(c);function c(){var e;Object(v.a)(this,c);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={error:!1},e}return Object(x.a)(c,[{key:"componentDidCatch",value:function(e,t){console.log(e,t),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(l.jsx)(s.a,{}):this.props.children}}]),c}(r.Component),k=c(67),y=c(68),w=(c(57),function(){var e=Object(r.useState)(null),t=Object(a.a)(e,2),c=t[0],n=t[1],i=Object(o.a)(),u=i.loading,j=i.error,h=i.getCharacterByName,b=i.clearError,m=function(e){n(e)},O=j?Object(l.jsx)("div",{className:"char__search-critical-error",children:Object(l.jsx)(s.a,{})}):null,p=c?c.length>0?Object(l.jsxs)("div",{className:"char__search-wrapper",children:[Object(l.jsxs)("div",{className:"char__search-success",children:["There is! Visit ",c[0].name," page?"]}),Object(l.jsx)(d.b,{to:"/characters/".concat(c[0].id),className:"button button__secondary",children:Object(l.jsx)("div",{className:"inner",children:"To page"})})]}):Object(l.jsx)("div",{className:"char__search-error",children:"The character was not found. Check the name and try again"}):null;return Object(l.jsxs)("div",{className:"char__search-form",children:[Object(l.jsx)(k.d,{initialValues:{charName:""},validationSchema:y.a({charName:y.b().required("This field is required")}),onSubmit:function(e){var t,c=e.charName;t=c,b(),h(t).then(m)},children:Object(l.jsxs)(k.c,{children:[Object(l.jsx)("label",{className:"char__search-label",htmlFor:"charName",children:"Or find a character by name:"}),Object(l.jsxs)("div",{className:"char__search-wrapper",children:[Object(l.jsx)(k.b,{id:"charName",name:"charName",type:"text",placeholder:"Enter name"}),Object(l.jsx)("button",{type:"submit",className:"button button__main",disabled:u,children:Object(l.jsx)("div",{className:"inner",children:"find"})})]}),Object(l.jsx)(k.a,{component:"div",className:"char__search-error",name:"charName"})]})}),p,O]})});t.default=function(){var e=Object(r.useState)(null),t=Object(a.a)(e,2),c=t[0],n=t[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(N,{children:Object(l.jsx)(j,{})}),Object(l.jsxs)("div",{className:"char__content",children:[Object(l.jsx)(N,{children:Object(l.jsx)(b,{onCharSelected:function(e){n(e)}})}),Object(l.jsxs)("div",{children:[Object(l.jsx)(N,{children:Object(l.jsx)(p,{charId:c})}),Object(l.jsx)(N,{children:Object(l.jsx)(w,{})})]})]}),Object(l.jsx)("img",{className:"bg-decoration",src:f,alt:"vision"})]})}}}]);
//# sourceMappingURL=3.b2a803cc.chunk.js.map