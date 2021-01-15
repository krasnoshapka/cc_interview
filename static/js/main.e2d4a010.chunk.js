(this.webpackJsonpcc_interview=this.webpackJsonpcc_interview||[]).push([[0],{66:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(4),r=a(3),c=a.n(r),i=a(57),u=a.n(i),s=(a(66),a(37)),d=a(32),o=a(43),l=a(21),j=a(60),p=c.a.createContext(null),b=function(e){var t=e.children,a=c.a.useState([]),r=Object(l.a)(a,2),i=r[0],u=r[1];return Object(n.jsx)(p.Provider,{value:{packages:i,modifyPackage:function(e){var t=Object(j.a)(i),a=t.findIndex((function(t){return t.packageId===e.packageId}));t[a]=e,u(t)},loadPackages:function(e){u(e)}},children:t})},g=a(27),m=a.n(g),f=a(44),h=a(38),O=a(16);function v(e){for(var t="".concat(e).split("");t.length<3;)t.unshift("0");return t.push("0","0"),"LECA"+t.join("")}function x(){var e=Object(h.a)(["\n    mutation updatePackageInCart($id:ID!, $quantity: Int!) {\n      updatePackageInCart(cartItemId: $id, personalMessage:false, quantity: $quantity) {\n        id\n      }\n    }\n  "]);return x=function(){return e},e}function k(){var e=Object(h.a)(["\n    query Cart {\n      cart {\n        id,\n        items {\n          id,\n          quantity\n          variant {\n            id,\n            sku\n          },\n          price \n        }\n      }\n    }\n  "]);return k=function(){return e},e}function y(){var e=Object(h.a)(["\n    mutation addPackageToCart($sku:SKU!, $quantity: Int!) {\n      addPackageToCart(sku: $sku, quantity: $quantity, personalMessage: false) {\n        items {\n          id,\n          quantity,\n          price\n        }\n      }\n    }\n  "]);return y=function(){return e},e}var q=Object(O.createHttpLink)({uri:"https://staging.nxte.nl:5000/graphql",credentials:"include",headers:{"x-store":"7"}}),C=new O.ApolloClient({link:q,cache:new O.InMemoryCache});var I={packageId:0,quantity:1,amount:5},P=function(e){var t=e.formType,a=e.p,r=void 0===a?I:a,i=(Object(s.a)(e,["formType","p"]),c.a.useContext(p)),u=i.packages,j=i.loadPackages,b=i.modifyPackage,g=c.a.useState(r),h=Object(l.a)(g,2),k=h[0],q=h[1],C=function(){var e=Object(O.useMutation)(Object(O.gql)(y())),t=Object(l.a)(e,2),a=t[0],n=t[1],r=n.data,c=n.loading,i=n.error;return{addPackageToCart:function(){var e=Object(f.a)(m.a.mark((function e(t){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a({variables:{sku:v(t.amount),quantity:t.quantity}});case 3:return n=e.sent,r=n.data.addPackageToCart.items,e.abrupt("return",r.map((function(e){return{packageId:e.id,amount:e.price,quantity:e.quantity}})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.graphQLErrors);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),data:r,loading:c,error:i}}().addPackageToCart,P=function(){var e=Object(O.useMutation)(Object(O.gql)(x())),t=Object(l.a)(e,2),a=t[0],n=t[1],r=n.data,c=n.loading,i=n.error;return{updatePackageInCart:function(){var e=Object(f.a)(m.a.mark((function e(t){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a({variables:{id:t.packageId,quantity:t.quantity}});case 3:return n=e.sent,r=n.data.updatePackageInCart.id,e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.graphQLErrors);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),data:r,loading:c,error:i}}().updatePackageInCart,N=function(e){q(Object(o.a)(Object(o.a)({},k),{},Object(d.a)({},e.currentTarget.id,e.currentTarget.value)))};return Object(n.jsxs)(c.a.Fragment,{children:["add"===t&&Object(n.jsxs)("h2",{children:["Package ",u.length+1]}),Object(n.jsxs)("form",{onSubmit:function(e){return function(e,a){e.preventDefault(),"add"===t?C(a).then((function(e){j(e),q(I)})):P(a).then((function(e){b(a)}))}(e,k)},className:"package-form",children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{htmlFor:"quantity",children:"Quantity:"}),Object(n.jsx)("input",{id:"quantity",type:"number",min:"1",max:"10",value:k.quantity,onChange:N})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("label",{htmlFor:"amount",children:"Amount:"}),Object(n.jsx)("input",{id:"amount",type:"number",min:"5",max:"150",value:Math.round(k.amount),onChange:N})]}),Object(n.jsx)("div",{children:Object(n.jsxs)("button",{children:["add"===t?"Add":"Save"," Package"]})})]})]})},N=function(e){var t=e.p,a=e.index;Object(s.a)(e,["p","index"]);return Object(n.jsxs)("div",{className:"package-list-item",children:[Object(n.jsxs)("div",{className:"package-details",children:[Object(n.jsxs)("div",{className:"package-title",children:["Package ",a+1]}),Object(n.jsxs)("div",{className:"package-quantity",children:["Quantity: ",t.quantity]}),Object(n.jsxs)("div",{className:"package-amount",children:["Amount: ",t.amount]})]}),Object(n.jsxs)("div",{className:"package-modify",children:[Object(n.jsx)("b",{children:"Modify"}),Object(n.jsx)(P,{formType:"modify",p:t})]})]})};var T=function(){var e=c.a.useContext(p).packages,t=function(){var e=c.a.useContext(p).loadPackages,t=Object(O.useQuery)(Object(O.gql)(k()),{onCompleted:function(t){e(t.cart.items.map((function(e){return{packageId:e.id,quantity:e.quantity,amount:e.price}})))}});return{data:t.data,loading:t.loading,error:t.error}}(),a=t.loading;return t.error,Object(n.jsxs)("div",{className:"package-list",children:[a&&Object(n.jsx)("div",{className:"loading",children:"Loading packages..."}),e&&e.map((function(e,t){return Object(n.jsx)(N,{p:e,index:t},e.packageId)}))]})};var w=function(){return Object(n.jsx)(O.ApolloProvider,{client:C,children:Object(n.jsx)(b,{children:Object(n.jsxs)("div",{className:"package-order",children:[Object(n.jsx)(T,{}),Object(n.jsx)(P,{formType:"add"})]})})})};var A=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("header",{className:"App-header",children:Object(n.jsx)("h1",{children:"Giftcard order"})}),Object(n.jsx)(w,{})]})};u.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(A,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.e2d4a010.chunk.js.map