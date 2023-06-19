"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[728],{532:function(e,n,a){a.r(n),a.d(n,{default:function(){return Z}});var s=a(439),r=a(791),c=a(394),t=a(613),i=a(482),l=a.p+"static/media/mjolnir.61f31e1809f12183a524.png",o=a(184),h=function(e){var n=e.char,a=n.name,s=n.description,r=n.thumbnail,c=n.homepage,t=n.wiki,i={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r&&(i={objectFit:"contain"}),(0,o.jsxs)("div",{className:"randomchar__block",children:[(0,o.jsx)("img",{src:r,alt:"Random character",className:"randomchar__img",style:i}),(0,o.jsxs)("div",{className:"randomchar__info",children:[(0,o.jsx)("p",{className:"randomchar__name",children:a}),(0,o.jsx)("p",{className:"randomchar__descr",children:s}),(0,o.jsxs)("div",{className:"randomchar__btns",children:[(0,o.jsx)("a",{href:c,className:"button button__main",children:(0,o.jsx)("div",{className:"inner",children:"homepage"})}),(0,o.jsx)("a",{href:t,className:"button button__secondary",children:(0,o.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},d=function(){var e=(0,r.useState)(null),n=(0,s.Z)(e,2),a=n[0],d=n[1],u=(0,i.Z)(),m=u.loading,_=u.error,j=u.getCharacter,x=u.clearError;(0,r.useEffect)((function(){v()}),[]);var f=function(e){d(e)},v=function(){x();var e=Math.floor(400*Math.random()+1011e3);j(e).then(f)},b=_?(0,o.jsx)(t.Z,{}):null,p=m?(0,o.jsx)(c.Z,{}):null,N=m||_||!a?null:(0,o.jsx)(h,{char:a});return(0,o.jsxs)("div",{className:"randomchar",children:[b,p,N,(0,o.jsxs)("div",{className:"randomchar__static",children:[(0,o.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",(0,o.jsx)("br",{}),"Do you want to get to know him better?"]}),(0,o.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),(0,o.jsx)("button",{onClick:v,className:"button button__main",children:(0,o.jsx)("div",{className:"inner",children:"try it"})}),(0,o.jsx)("img",{src:l,alt:"mjolnir",className:"randomchar__decoration"})]})]})},u=a(671),m=a(466),_=a(136),j=a(516),x=function(e){(0,_.Z)(a,e);var n=(0,j.Z)(a);function a(){var e;(0,u.Z)(this,a);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=n.call.apply(n,[this].concat(r))).state={error:!1},e}return(0,m.Z)(a,[{key:"componentDidCatch",value:function(e,n){console.log(e,n),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?(0,o.jsx)(t.Z,{}):this.props.children}}]),a}(r.Component),f=x,v=a(433),b=function(e){var n=(0,r.useState)([]),a=(0,s.Z)(n,2),l=a[0],h=a[1],d=(0,r.useState)(!1),u=(0,s.Z)(d,2),m=u[0],_=u[1],j=(0,r.useState)(210),x=(0,s.Z)(j,2),f=x[0],b=x[1],p=(0,r.useState)(!1),N=(0,s.Z)(p,2),g=N[0],k=N[1],Z=(0,i.Z)(),y=Z.loading,C=Z.error,S=Z.getAllCharacters;(0,r.useEffect)((function(){F(f,!0)}),[]);var F=function(e,n){_(!n),S(e).then(w)},w=function(e){var n=!1;e.length<9&&(n=!0),h((function(n){return[].concat((0,v.Z)(n),(0,v.Z)(e))})),_(!1),b((function(e){return e+9})),k(n)},E=(0,r.useRef)([]),I=function(e){E.current.forEach((function(e){return e.classList.remove("char__item_selected")})),E.current[e].classList.add("char__item_selected"),E.current[e].focus()};var R=function(n){var a=n.map((function(n,a){var s={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===n.thumbnail&&(s={objectFit:"unset"}),(0,o.jsxs)("li",{className:"char__item",tabIndex:0,ref:function(e){return E.current[a]=e},onClick:function(){e.onCharSelected(n.id),I(a)},onKeyPress:function(s){" "!==s.key&&"Enter"!==s.key||(e.onCharSelected(n.id),I(a))},children:[(0,o.jsx)("img",{src:n.thumbnail,alt:n.name,style:s}),(0,o.jsx)("div",{className:"char__name",children:n.name})]},n.id)}));return(0,o.jsx)("ul",{className:"char__grid",children:a})}(l),A=C?(0,o.jsx)(t.Z,{}):null,D=y&&!m?(0,o.jsx)(c.Z,{}):null;return(0,o.jsxs)("div",{className:"char__list",children:[A,D,R,(0,o.jsx)("button",{className:"button button__main button__long",disabled:m,style:{display:g?"none":"block"},onClick:function(){return F(f)},children:(0,o.jsx)("div",{className:"inner",children:"load more"})})]})},p=function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),(0,o.jsxs)("div",{className:"skeleton",children:[(0,o.jsxs)("div",{className:"pulse skeleton__header",children:[(0,o.jsx)("div",{className:"pulse skeleton__circle"}),(0,o.jsx)("div",{className:"pulse skeleton__mini"})]}),(0,o.jsx)("div",{className:"pulse skeleton__block"}),(0,o.jsx)("div",{className:"pulse skeleton__block"}),(0,o.jsx)("div",{className:"pulse skeleton__block"})]})]})},N=function(e){var n=e.char,a=n.name,s=n.description,r=n.thumbnail,c=n.homepage,t=n.wiki,i=n.comics,l={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r&&(l={objectFit:"contain"}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"char__basics",children:[(0,o.jsx)("img",{src:r,alt:a,style:l}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:"char__info-name",children:a}),(0,o.jsxs)("div",{className:"char__btns",children:[(0,o.jsx)("a",{href:c,className:"button button__main",children:(0,o.jsx)("div",{className:"inner",children:"homepage"})}),(0,o.jsx)("a",{href:t,className:"button button__secondary",children:(0,o.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),(0,o.jsx)("div",{className:"char__descr",children:s}),(0,o.jsx)("div",{className:"char__comics",children:"Comics:"}),(0,o.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:"There is no comics with this character",i.map((function(e,n){if(!(n>9))return(0,o.jsx)("li",{className:"char__comics-item",children:e.name},n)}))]})]})},g=function(e){var n=(0,r.useState)(null),a=(0,s.Z)(n,2),l=a[0],h=a[1],d=(0,i.Z)(),u=d.loading,m=d.error,_=d.getCharacter,j=d.clearError;(0,r.useEffect)((function(){x()}),[e.charId]);var x=function(){j();var n=e.charId;n&&_(n).then(f)},f=function(e){h(e)},v=l||u||m?null:(0,o.jsx)(p,{}),b=m?(0,o.jsx)(t.Z,{}):null,g=u?(0,o.jsx)(c.Z,{}):null,k=u||m||!l?null:(0,o.jsx)(N,{char:l});return(0,o.jsxs)("div",{className:"char__info",children:[v,b,g,k]})},k=a.p+"static/media/vision.067d4ae1936d64a577ce.png",Z=function(){var e=(0,r.useState)(null),n=(0,s.Z)(e,2),a=n[0],c=n[1];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(d,{}),(0,o.jsxs)("div",{className:"char__content",children:[(0,o.jsx)(f,{children:(0,o.jsx)(b,{onCharSelected:function(e){c(e)}})}),(0,o.jsx)(g,{charId:a})]}),(0,o.jsx)("img",{className:"bg-decoration",src:k,alt:"vision"})]})}}}]);
//# sourceMappingURL=728.0dab1295.chunk.js.map