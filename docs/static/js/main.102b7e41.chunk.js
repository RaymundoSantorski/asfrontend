(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{44:function(t,e,c){},50:function(t,e,c){"use strict";c.r(e);var a=c(2),r=c(1),n=c(23),s=c.n(n),i=c(9),o=(c(44),c(16)),d=c(6),j=c(7),u="[CART] addItem",l="[CART] setItems",b="[CART] deleteItems",p="[CART] setStatus",O="[CART] incrementItem",m="[PRODUCT] setItems",h=function(t){return{type:u,payload:t}},f=function(t){return{type:O,payload:Object(j.a)(Object(j.a)({},t),{},{cant:t.cant+1})}},x=function(){var t=Object(d.f)(),e=Object(i.b)(),c=function(){t.goBack()},r=Object(i.c)((function(t){return t.cart})).cartItems,n=0,s="< Volver";return r.length<=0?Object(a.jsxs)("div",{className:"cart-items-empty",children:[Object(a.jsxs)("p",{onClick:c,className:"return",children:[" ",s," "]}),Object(a.jsx)("h1",{className:"empty-text",children:"No hay productos"}),Object(a.jsx)("div",{className:"cart-buttons-empty",children:Object(a.jsx)("button",{className:"card-button btn-block primary",onClick:function(){t.push("/")},children:"Empezar a comprar"})})]}):Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"cart-items",children:[Object(a.jsxs)("p",{onClick:c,className:"return",children:[" ",s," "]}),r.map((function(t){return n+=Number(t.price*t.cant),Object(a.jsxs)("p",{children:[t.title," ",Object(a.jsxs)("strong",{children:["$",t.price]})," ",t.cant]},t.id)})),Object(a.jsxs)("div",{className:"cart-buttons",children:[Object(a.jsxs)("h1",{className:"cart-total",children:["Total: ",Object(a.jsxs)("strong",{children:["$",n]})]}),Object(a.jsx)("button",{className:"card-button outline-warning",onClick:function(){e({type:b})},children:"Vaciar carrito"}),Object(a.jsx)("button",{className:"card-button secondary",children:"Pagar"})]})]})})},v=function(t){var e=t.id,c=t.title,r=t.description,n=t.price,s=t.img,o=Object(i.b)(),j=Object(d.f)(),u=Object(i.c)((function(t){return t.cart})).cartItems;return Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("div",{className:"",onClick:function(){j.push("/product/".concat(e))},children:Object(a.jsx)("img",{src:s,alt:"dark-galaxy",loading:"lazy",className:"card-img"})}),Object(a.jsx)("div",{className:"card-title",children:Object(a.jsx)("h1",{children:c})}),Object(a.jsx)("div",{className:"card-body",children:Object(a.jsx)("p",{children:r})}),Object(a.jsxs)("div",{className:"card-body",children:["$",n]}),Object(a.jsxs)("div",{className:"card-buttons",children:[Object(a.jsx)("button",{className:"card-button primary",children:"Comprar"}),Object(a.jsx)("button",{className:"card-button secondary",onClick:function(){var t=u.find((function(t){return t.id===e}));o(t?f(t):h({id:e,description:r,title:c,price:n,img:s,cant:1}))},children:"Agregar"})]})]})},N=function(){var t=Object(i.c)((function(t){return t.products})).products;return Object(a.jsxs)("div",{className:"products-screen",children:[Object(a.jsx)("div",{className:"search-box",children:Object(a.jsxs)("form",{className:"search-form",onSubmit:function(t){t.preventDefault()},children:[Object(a.jsx)("input",{type:"text",name:"search",placeholder:"Buscar...",autoComplete:"off",className:"search-input"}),Object(a.jsx)("button",{type:"submit",className:"search-btn",children:"Buscar"})]})}),Object(a.jsx)("div",{className:"card-grid",children:t.map((function(t){return Object(a.jsx)(v,Object(j.a)({},t),t.id)}))})]})},g=function(){var t=window;t.innerWidth,t.innerHeight,Object(d.f)(),Object(i.b)();return Object(a.jsxs)("div",{className:"navbar",children:[Object(a.jsx)(o.b,{to:"/",className:"navbar-link",children:Object(a.jsx)("h1",{className:"navbar-title",children:"Apapachate Store"})}),Object(a.jsx)(o.b,{className:"navbar-link navbar-carrito",to:"/cart",children:Object(a.jsx)("img",{src:"./shopping-cart.png",alt:"shopping cart",className:"cart-icon"})})]})},y=function(){var t=Object(d.f)(),e=Object(i.b)(),c=Object(i.c)((function(t){return t.products})).products,r=Object(i.c)((function(t){return t.cart})).cartItems,n=Object(d.g)().id,s=c.find((function(t){return t.id===n}));if(!s)return Object(a.jsx)("p",{children:"No hay nada para mostrar"});return Object(a.jsxs)("div",{className:"product-screen",children:[Object(a.jsxs)("p",{onClick:function(){t.goBack()},className:"return",children:[" ","< Volver"," "]}),Object(a.jsx)("div",{className:"product-card",children:Object(a.jsx)("img",{src:s.img,alt:"dark-galaxy",className:"product-img"})}),Object(a.jsxs)("div",{className:"product-info",children:[Object(a.jsx)("div",{className:"product-title",children:Object(a.jsx)("h1",{children:s.title})}),Object(a.jsx)("div",{className:"product-desc",children:Object(a.jsx)("p",{children:s.description})}),Object(a.jsx)("div",{className:"product-price",children:Object(a.jsxs)("strong",{children:["$",s.price]})}),Object(a.jsxs)("div",{className:"card-buttons",children:[Object(a.jsx)("button",{className:"card-button primary",children:"Comprar"}),Object(a.jsx)("button",{className:"card-button secondary",onClick:function(){var t=r.find((function(t){return t.id===n}));e(t?f(t):h({id:s.id,description:s.description,title:s.title,price:s.price,img:s.img,cant:1}))},children:"Agregar"})]})]})]})},I=c(20),k=c.n(I),C=c(25),w=c(26);c(51),c(48);w.a.initializeApp({apiKey:"AIzaSyDmkHLRdhIBItHiczxOoi_I3H8VL6WM5fE",authDomain:"apapachatestore-c7d74.firebaseapp.com",projectId:"apapachatestore-c7d74",storageBucket:"apapachatestore-c7d74.appspot.com",messagingSenderId:"538858354353",appId:"1:538858354353:web:6f077aa8fc657e499dd490"});var S=w.a.firestore(),E=function(){var t=Object(C.a)(k.a.mark((function t(){var e,c;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.collection("productos").get();case 2:return e=t.sent,c=[],e.forEach((function(t){c.push(Object(j.a)({id:t.id},t.data()))})),t.abrupt("return",c);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),A=function(t){return{type:m,payload:t}},T=function(){var t=Object(i.b)(),e=Object(i.c)((function(t){return t.cart})),c=e.cartItems;e.cartStatus;return Object(r.useEffect)((function(){var e=JSON.parse(localStorage.getItem("cartItems"))||[];t(function(){var t=Object(C.a)(k.a.mark((function t(e){var c;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E();case 2:c=t.sent,e(A(c));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t(function(t){return{type:l,payload:t}}(e))}),[t]),Object(r.useEffect)((function(){localStorage.setItem("cartItems",JSON.stringify(c))}),[c]),Object(a.jsxs)(o.a,{children:[Object(a.jsx)(g,{className:"navbar"}),Object(a.jsx)("div",{children:Object(a.jsxs)(d.c,{children:[Object(a.jsx)(d.a,{path:"/product/:id",component:y}),Object(a.jsx)(d.a,{path:"/cart",component:x}),Object(a.jsx)(d.a,{exact:!0,path:"/",component:N})]})})]})},R=c(34),_=c(17),B=c(32),D={cartItems:[],cartStatus:!1},z={products:[]},V="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||_.d,H=Object(_.c)({cart:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case u:return Object(j.a)(Object(j.a)({},t),{},{cartItems:[].concat(Object(B.a)(t.cartItems),[e.payload])});case l:return Object(j.a)(Object(j.a)({},t),{},{cartItems:e.payload});case b:return Object(j.a)(Object(j.a)({},t),{},{cartItems:[]});case p:return Object(j.a)(Object(j.a)({},t),{},{cartStatus:!t.cartStatus});case O:var c=t.cartItems.findIndex((function(t){return t.id===e.payload.id})),a=Object(B.a)(t.cartItems);return a[c]=e.payload,Object(j.a)(Object(j.a)({},t),{},{cartItems:a});default:return t}},products:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case m:return Object(j.a)(Object(j.a)({},t),{},{products:e.payload});default:return t}}}),J=Object(_.e)(H,V(Object(_.a)(R.a))),$=function(){return Object(a.jsx)(i.a,{store:J,children:Object(a.jsx)(T,{})})};s.a.render(Object(a.jsx)($,{}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.102b7e41.chunk.js.map