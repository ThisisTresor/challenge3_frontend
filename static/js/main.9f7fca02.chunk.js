(this["webpackJsonpmy-app3"]=this["webpackJsonpmy-app3"]||[]).push([[0],{23:function(e,t,n){"use strict";n.r(t);var a=n(2),s=n.n(a),c=n(10),r=n.n(c),i=(n(9),n(4)),o=n(5),l=n(3),u=n(7),b=n(6),h=n(24),d=n(1),j=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(e){return Object(i.a)(this,n),t.call(this,e)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.errorMessage,t=Array.from(this.props.albums).map((function(e,t){return Object(d.jsxs)("div",{className:"col-3 col-sm-2",children:[Object(d.jsx)("a",{children:Object(d.jsx)("img",{src:e.thumbnailUrl})}),Object(d.jsx)("p",{className:"title",children:e.title})]},t)}));return Object(d.jsx)("div",{className:"row mt-3 ml-3",children:e?e.message:t})}}]),n}(a.Component),m=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).HandleChange=function(e){a.setState({album:e.target.value})},a.HandleSubmit=function(e){e.preventDefault(),fetch("https://backend-333.herokuapp.com/albums/".concat(a.state.album,"/photos")).then((function(e){if(e.ok)return e.json();throw e})).then((function(e){a.setState({albumdata:e.formatedPhotos,errorMessage:""})})).catch((function(e){return a.setState({albumdata:"",errorMessage:e})}))},a.HandleFocus=function(){a.setState({album:""})},a.state={album:"",albumdata:"",errorMessage:""},a.HandleChange=a.HandleChange.bind(Object(l.a)(a)),a.HandleSubmit=a.HandleSubmit.bind(Object(l.a)(a)),a}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{class:"topnav",children:[Object(d.jsx)("h3",{class:"active",children:"Albums"}),Object(d.jsxs)("div",{class:"search-container",children:[Object(d.jsxs)("form",{children:[Object(d.jsx)(h.a,{type:"text",name:"album_id",id:"albumId",placeholder:"Enter the Album ID",value:this.state.album,onChange:this.HandleChange,onFocus:this.HandleFocus}),Object(d.jsx)("button",{type:"button",onClick:this.HandleSubmit,children:"Get Album Photos By Id"})]}),Object(d.jsx)("br",{}),Object(d.jsx)(j,{albums:this.state.albumdata,errorMessage:this.state.errorMessage})]})]})}}]),n}(a.Component);var O=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(m,{})})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),c(e),r(e)}))};n(20),n(21),n(22);r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root")),p()},9:function(e,t,n){}},[[23,1,2]]]);
//# sourceMappingURL=main.9f7fca02.chunk.js.map