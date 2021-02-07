(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{44:function(t,e,c){},50:function(t,e,c){"use strict";c.r(e);var a=c(2),r=c(1),n=c(23),s=c.n(n),i=c(9),o=(c(44),c(16)),d=c(6),j=c(11),l="[CART] addItem",u="[CART] setItems",b="[CART] deleteItems",p="[PRODUCT] setItems",m=function(t){return{type:l,payload:t}},O=function(t){var e=t.id,c=t.title,r=t.description,n=t.price,s=t.img,o=Object(i.b)(),j=Object(d.f)();return Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("div",{className:"",onClick:function(){j.push("/product/".concat(e))},children:Object(a.jsx)("img",{src:s,alt:"dark-galaxy",className:"card-img"})}),Object(a.jsx)("div",{className:"card-title",children:Object(a.jsx)("h1",{children:c})}),Object(a.jsx)("div",{className:"card-body",children:Object(a.jsx)("p",{children:r})}),Object(a.jsxs)("div",{className:"card-body",children:["$",n]}),Object(a.jsxs)("div",{className:"card-buttons",children:[Object(a.jsx)("button",{className:"card-button primary",children:"Comprar"}),Object(a.jsx)("button",{className:"card-button secondary",onClick:function(){o(m({id:e,description:r,title:c,price:n,img:s}))},children:"Agregar"})]})]})},h=function(){var t=Object(i.c)((function(t){return t.products})).products;return Object(a.jsxs)("div",{className:"products-screen",children:[Object(a.jsx)("div",{className:"search-box",children:Object(a.jsxs)("form",{className:"search-form",onSubmit:function(t){t.preventDefault()},children:[Object(a.jsx)("input",{type:"text",name:"search",placeholder:"Buscar...",autoComplete:"off",className:"search-input"}),Object(a.jsx)("button",{type:"submit",className:"search-btn",children:"Buscar"})]})}),Object(a.jsx)("div",{className:"card-grid",children:t.map((function(t){return Object(a.jsx)(O,Object(j.a)({},t),t.id)}))})]})},x=function(){return Object(a.jsxs)("div",{className:"navbar",children:[Object(a.jsx)(o.b,{to:"/",className:"navbar-link",children:Object(a.jsx)("h1",{className:"navbar-title",children:"Apapachate Store"})}),Object(a.jsx)(o.b,{className:"navbar-link navbar-carrito",to:"/cart",children:Object(a.jsx)("img",{src:"./shopping-cart.png",alt:"shopping cart",className:"cart-icon"})})]})},f=function(){var t=Object(d.f)(),e=Object(i.b)(),c=Object(i.c)((function(t){return t.products})).products,r=Object(d.g)().id,n=c.find((function(t){return t.id===r}));if(!n)return Object(a.jsx)("p",{children:"No hay nada para mostrar"});return Object(a.jsxs)("div",{className:"product-screen",children:[Object(a.jsxs)("p",{onClick:function(){t.goBack()},className:"return",children:[" ","< Volver"," "]}),Object(a.jsx)("div",{className:"product-card",children:Object(a.jsx)("img",{src:n.img,alt:"dark-galaxy",className:"product-img"})}),Object(a.jsxs)("div",{className:"product-info",children:[Object(a.jsx)("div",{className:"product-title",children:Object(a.jsx)("h1",{children:n.title})}),Object(a.jsx)("div",{className:"product-desc",children:Object(a.jsx)("p",{children:n.description})}),Object(a.jsx)("div",{className:"product-price",children:Object(a.jsxs)("strong",{children:["$",n.price]})}),Object(a.jsxs)("div",{className:"card-buttons",children:[Object(a.jsx)("button",{className:"card-button primary",children:"Comprar"}),Object(a.jsx)("button",{className:"card-button secondary",onClick:function(){e(m({id:n.id,description:n.description,title:n.title,price:n.price,img:n.img}))},children:"Agregar"})]})]})]})},v=function(){var t=Object(d.f)(),e=Object(i.b)(),c=function(){t.goBack()},r=Object(i.c)((function(t){return t.cart})).cartItems,n=0,s="< Volver";return r.length<=0?Object(a.jsxs)("div",{className:"cart-items-empty",children:[Object(a.jsxs)("p",{onClick:c,className:"return",children:[" ",s," "]}),Object(a.jsx)("h1",{className:"empty-text",children:"No hay productos"}),Object(a.jsx)("div",{className:"cart-buttons-empty",children:Object(a.jsx)("button",{className:"card-button btn-block primary",onClick:function(){t.push("/")},children:"Empezar a comprar"})})]}):Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"cart-items",children:[Object(a.jsxs)("p",{onClick:c,className:"return",children:[" ",s," "]}),r.map((function(t){return n+=Number(t.price),Object(a.jsxs)("p",{children:[t.title," ",Object(a.jsxs)("strong",{children:["$",t.price]})]},t.id)})),Object(a.jsxs)("div",{className:"cart-buttons",children:[Object(a.jsxs)("h1",{className:"cart-total",children:["Total: ",Object(a.jsxs)("strong",{children:["$",n]})]}),Object(a.jsx)("button",{className:"card-button outline-warning",onClick:function(){e({type:b})},children:"Vaciar carrito"}),Object(a.jsx)("button",{className:"card-button secondary",children:"Pagar"})]})]})})},N=c(20),g=c.n(N),y=c(25),I=c(26);c(51),c(48);I.a.initializeApp({apiKey:"AIzaSyDmkHLRdhIBItHiczxOoi_I3H8VL6WM5fE",authDomain:"apapachatestore-c7d74.firebaseapp.com",projectId:"apapachatestore-c7d74",storageBucket:"apapachatestore-c7d74.appspot.com",messagingSenderId:"538858354353",appId:"1:538858354353:web:6f077aa8fc657e499dd490"});var k=I.a.firestore(),C=function(){var t=Object(y.a)(g.a.mark((function t(){var e,c;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.collection("productos").get();case 2:return e=t.sent,c=[],e.forEach((function(t){c.push(Object(j.a)({id:t.id},t.data()))})),t.abrupt("return",c);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),w=function(t){return{type:p,payload:t}},E=function(){var t=Object(i.b)(),e=Object(i.c)((function(t){return t.cart})).cartItems;return Object(r.useEffect)((function(){var e=JSON.parse(localStorage.getItem("cartItems"))||[];t(function(){var t=Object(y.a)(g.a.mark((function t(e){var c;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C();case 2:c=t.sent,e(w(c));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t(function(t){return{type:u,payload:t}}(e))}),[t]),Object(r.useEffect)((function(){localStorage.setItem("cartItems",JSON.stringify(e))}),[e]),Object(a.jsxs)(o.a,{children:[Object(a.jsx)(x,{className:"navbar"}),Object(a.jsx)("div",{children:Object(a.jsxs)(d.c,{children:[Object(a.jsx)(d.a,{path:"/product/:id",component:f}),Object(a.jsx)(d.a,{path:"/cart",component:v}),Object(a.jsx)(d.a,{exact:!0,path:"/",component:h})]})})]})},S=c(33),A=c(17),_=c(34),B={cartItems:[]},T={products:[]},D="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||A.d,R=Object(A.c)({cart:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case l:return Object(j.a)(Object(j.a)({},t),{},{cartItems:[].concat(Object(_.a)(t.cartItems),[e.payload])});case u:return Object(j.a)(Object(j.a)({},t),{},{cartItems:e.payload});case b:return Object(j.a)(Object(j.a)({},t),{},{cartItems:[]});default:return t}},products:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case p:return Object(j.a)(Object(j.a)({},t),{},{products:e.payload});default:return t}}}),V=Object(A.e)(R,D(Object(A.a)(S.a))),z=function(){return Object(a.jsx)(i.a,{store:V,children:Object(a.jsx)(E,{})})};s.a.render(Object(a.jsx)(z,{}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.18da8f03.chunk.js.map