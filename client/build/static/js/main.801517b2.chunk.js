(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,a,t){e.exports=t(72)},39:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){},67:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){},71:function(e,a,t){},72:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(16),s=t.n(l),c=(t(39),t(6)),o=t(5),m=t(33),i=function(e){var a=e.component,t=Object(m.a)(e,["component"]);return r.a.createElement(o.b,Object.assign({},t,{render:function(e){return localStorage.getItem("authToken")?r.a.createElement(a,e):r.a.createElement(o.a,{to:"/login"})}}))},u=t(7),p=t.n(u),d=t(12),E=t(3),b=t(13),v=t.n(b),g=(t(65),function(e){var a=e.history,t=Object(n.useState)(""),l=Object(E.a)(t,2),s=l[0],o=l[1],m=Object(n.useState)(""),i=Object(E.a)(m,2),u=i[0],b=i[1],g=Object(n.useState)(""),f=Object(E.a)(g,2),h=f[0],w=f[1];Object(n.useEffect)(function(){localStorage.getItem("authToken")&&a.push("/login")},[a]);var N=function(){var e=Object(d.a)(p.a.mark(function e(t){var n,r,l;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={header:{"Content-Type":"application/json"}},e.prev=2,e.next=5,v.a.post("/api/auth/login",{email:s,password:u},n);case 5:r=e.sent,l=r.data,localStorage.setItem("authToken",l.token),a.push("/portal"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),w(e.t0.response.data.error),setTimeout(function(){w("")},5e3);case 15:case"end":return e.stop()}},e,null,[[2,11]])}));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"login-screen"},r.a.createElement("form",{onSubmit:N,className:"login-screen__form"},r.a.createElement("h3",{className:"login-screen__title"},"Login"),h&&r.a.createElement("span",{className:"error-message"},h),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email:"),r.a.createElement("input",{type:"email",required:!0,id:"email",placeholder:"Email address",onChange:function(e){return o(e.target.value)},value:s,tabIndex:1})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password:"," ",r.a.createElement(c.b,{to:"/forgotpassword",className:"login-screen__forgotpassword"},"Forgot Password?")),r.a.createElement("input",{type:"password",required:!0,id:"password",autoComplete:"true",placeholder:"Enter password",onChange:function(e){return b(e.target.value)},value:u,tabIndex:2})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Login"),r.a.createElement("span",{className:"login-screen__subtext"},"Don't have an account? ",r.a.createElement(c.b,{to:"/register"},"Register"))))}),f=(t(66),function(e){var a=e.history,t=Object(n.useState)(""),l=Object(E.a)(t,2),s=l[0],o=l[1],m=Object(n.useState)(""),i=Object(E.a)(m,2),u=i[0],b=i[1],g=Object(n.useState)(""),f=Object(E.a)(g,2),h=f[0],w=f[1],N=Object(n.useState)(""),j=Object(E.a)(N,2),O=j[0],y=j[1],x=Object(n.useState)(""),S=Object(E.a)(x,2),C=S[0],k=S[1],T=function(){var e=Object(d.a)(p.a.mark(function e(t){var n,r,l;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n={header:{"Content-Type":"application/json"}},h===O){e.next=7;break}return w(""),y(""),setTimeout(function(){k("")},5e3),e.abrupt("return",k("Passwords do not match"));case 7:return e.prev=7,e.next=10,v.a.post("/api/auth/register",{username:s,email:u,password:h},n);case 10:r=e.sent,l=r.data,console.log(l),a.push("/login"),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(7),k("Email is already registered"),setTimeout(function(){k("")},5e3);case 20:case"end":return e.stop()}},e,null,[[7,16]])}));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"register-screen"},r.a.createElement("form",{onSubmit:T,className:"register-screen__form"},r.a.createElement("h3",{className:"register-screen__title"},"Sign Up"),C&&r.a.createElement("span",{className:"error-message"},C),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Username:"),r.a.createElement("input",{type:"text",required:!0,id:"name",placeholder:"Enter Full Name",value:s,onChange:function(e){return o(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email:"),r.a.createElement("input",{type:"email",required:!0,id:"email",placeholder:"Email address",value:u,onChange:function(e){return b(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password:"),r.a.createElement("input",{type:"password",required:!0,id:"password",autoComplete:"true",placeholder:"Enter password",value:h,onChange:function(e){return w(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"confirmpassword"},"Confirm Password:"),r.a.createElement("input",{type:"password",required:!0,id:"confirmpassword",autoComplete:"true",placeholder:"Confirm password",value:O,onChange:function(e){return y(e.target.value)}})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"}," Sign Up"),r.a.createElement("span",{className:"register-screen__subtext"},"Already have an account? ",r.a.createElement(c.b,{to:"/login"},"Login"))))}),h=(t(67),function(){var e=Object(n.useState)(""),a=Object(E.a)(e,2),t=a[0],l=a[1],s=Object(n.useState)(""),c=Object(E.a)(s,2),o=c[0],m=c[1],i=Object(n.useState)(""),u=Object(E.a)(i,2),b=u[0],g=u[1],f=function(){var e=Object(d.a)(p.a.mark(function e(a){var n,r,s;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n={header:{"Content-Type":"application/json"}},e.prev=2,e.next=5,v.a.post("/api/auth/forgotpassword",{email:t},n);case 5:r=e.sent,s=r.data,g(s.data),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(2),m(e.t0.response.data.error),l(""),setTimeout(function(){m("")},5e3);case 15:case"end":return e.stop()}},e,null,[[2,10]])}));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"forgotpassword-screen"},r.a.createElement("form",{onSubmit:f,className:"forgotpassword-screen__form"},r.a.createElement("h3",{className:"forgotpassword-screen__title"},"Forgot Password"),o&&r.a.createElement("span",{className:"error-message"},o),b&&r.a.createElement("span",{className:"success-message"},b),r.a.createElement("div",{className:"form-group"},r.a.createElement("p",{className:"forgotpassword-screen__subtext"},"Please enter the email address you register your account with. We will send you reset password confirmation to this email"),r.a.createElement("label",{htmlFor:"email"},"Email:"),r.a.createElement("input",{type:"email",required:!0,id:"email",placeholder:"Email address",value:t,onChange:function(e){return l(e.target.value)}})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Send Email")))}),w=(t(68),function(e){var a=e.match,t=Object(n.useState)(""),l=Object(E.a)(t,2),s=l[0],o=l[1],m=Object(n.useState)(""),i=Object(E.a)(m,2),u=i[0],b=i[1],g=Object(n.useState)(""),f=Object(E.a)(g,2),h=f[0],w=f[1],N=Object(n.useState)(""),j=Object(E.a)(N,2),O=j[0],y=j[1],x=function(){var e=Object(d.a)(p.a.mark(function e(t){var n,r,l;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n={header:{"Content-Type":"application/json"}},s===u){e.next=7;break}return o(""),b(""),setTimeout(function(){w("")},5e3),e.abrupt("return",w("Passwords don't match"));case 7:return e.prev=7,e.next=10,v.a.put("/api/auth/passwordreset/".concat(a.params.resetToken),{password:s},n);case 10:r=e.sent,l=r.data,console.log(l),y(l.data),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(7),w(e.t0.response.data.error),setTimeout(function(){w("")},5e3);case 20:case"end":return e.stop()}},e,null,[[7,16]])}));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"resetpassword-screen"},r.a.createElement("form",{onSubmit:x,className:"resetpassword-screen__form"},r.a.createElement("h3",{className:"resetpassword-screen__title"},"Forgot Password"),h&&r.a.createElement("span",{className:"error-message"},h," "),O&&r.a.createElement("span",{className:"success-message"},O," ",r.a.createElement(c.b,{to:"/login"},"Login")),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"New Password:"),r.a.createElement("input",{type:"password",required:!0,id:"password",placeholder:"Enter new password",autoComplete:"true",value:s,onChange:function(e){return o(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"confirmpassword"},"Confirm New Password:"),r.a.createElement("input",{type:"password",required:!0,id:"confirmpassword",placeholder:"Confirm new password",autoComplete:"true",value:u,onChange:function(e){return b(e.target.value)}})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Reset Password")))}),N=r.a.createContext({username:"",email:"",_id:"",teams:""}),j=t(75),O=(t(69),function(){var e=Object(n.useContext)(N),a=e.username,t=e.email;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row profile"},r.a.createElement("div",{className:"col-md-3"},r.a.createElement("div",{className:"profile-sidebar"},r.a.createElement("div",{className:"profile-userpic"},r.a.createElement("img",{src:"https://racemph.com/wp-content/uploads/2016/09/profile-image-placeholder.png",alt:a})),r.a.createElement("div",{className:"profile-usermenu"},r.a.createElement("ul",{className:"nav"},r.a.createElement("li",{className:"active"}," Name: ",a),r.a.createElement("li",{className:"active"}," Email: ",t)))))))}),y=function(){var e=Object(n.useContext)(N)._id,a=Object(n.useState)(""),t=Object(E.a)(a,2),l=t[0],s=t[1],c=Object(n.useState)(""),o=Object(E.a)(c,2),m=o[0],i=o[1],u=Object(n.useState)(""),b=Object(E.a)(u,2),g=b[0],f=b[1],h=Object(n.useState)(!1),w=Object(E.a)(h,2),O=w[0],y=w[1],x=function(){return y(!1)},S=function(){var a=Object(d.a)(p.a.mark(function a(){var t,n,r;return p.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t={header:{"Content-Type":"application/json"}},a.prev=1,a.next=4,v.a.put("/api/auth/update/".concat(e),{username:l,email:m,password:g},t);case 4:n=a.sent,r=n.data,console.log(r),window.location.reload(),a.next=14;break;case 10:a.prev=10,a.t0=a.catch(1),console.log(a.t0),x();case 14:case"end":return a.stop()}},a,null,[[1,10]])}));return function(){return a.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return y(!0)}},"Update User Information")))))),r.a.createElement("div",{className:"d-flex align-items-center justify-content-center",style:{height:"100vh"}}),r.a.createElement(j.a,{show:O,onHide:x},r.a.createElement(j.a.Header,{closeButton:!0},r.a.createElement(j.a.Title,null,"Update User Information")),r.a.createElement(j.a.Body,null,r.a.createElement("form",{onSubmit:S},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Username:"),r.a.createElement("input",{type:"text",required:!0,id:"name",placeholder:"Enter Full Name",value:l,onChange:function(e){return s(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email:"),r.a.createElement("input",{type:"email",required:!0,id:"email",placeholder:"Email address",value:m,onChange:function(e){return i(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password:"),r.a.createElement("input",{type:"password",required:!0,id:"password",autoComplete:"true",placeholder:"Enter password",value:g,onChange:function(e){return f(e.target.value)}})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"}," ","Save Changes")))))};var x=function(){var e=Object(n.useContext)(N).username,a=Object(o.h)(),t=Object(o.g)();return r.a.createElement("div",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(c.b,{exact:!0,className:"navbar-brand",to:"/portal"},"My Team"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},e&&r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"#",className:"nav-link"},"welcome ",e)),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{className:"/portal"===a.pathname?"nav-link active":"nav-link",to:"/portal"},"Teams ",r.a.createElement("span",{className:"sr-only"}))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{className:"nav-link",onClick:function(){localStorage.removeItem("authToken"),t.push("/login")}},"Logout"))),!e&&r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item "},r.a.createElement(c.b,{className:"/login"===a.pathname?"nav-link active":"nav-link",to:"/login"},"Login ",r.a.createElement("span",{className:"sr-only"}))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{className:"/register"===a.pathname?"nav-link active":"nav-link",to:"/register"},"Register")))))},S=function(e){e.getUserData;var a=Object(o.g)(),t=Object(n.useState)({username:"",_id:"",email:"",teams:"",userCreated:""}),l=Object(E.a)(t,2),s=l[0],c=l[1];return Object(n.useEffect)(function(){localStorage.getItem("authToken")||a.push("/login"),function(){var e=Object(d.a)(p.a.mark(function e(){var t,n,r;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("authToken"))}},e.prev=1,e.next=4,v.a.get("/api/private",t);case 4:n=e.sent,r=n.data,c(r),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),localStorage.removeItem("authToken"),a.push("/login");case 13:case"end":return e.stop()}},e,null,[[1,9]])}));return function(){return e.apply(this,arguments)}}()()},[a]),r.a.createElement(N.Provider,{value:s},r.a.createElement(x,null),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h1",{style:{textAlign:"center",marginTop:"20px"}},"Welcome ",s.username," !!")),r.a.createElement(O,null),r.a.createElement(y,null)))},C=(t(71),function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"titlebox"},r.a.createElement("h1",{id:"title"},"My Team")),r.a.createElement("div",{className:"container home"},r.a.createElement(c.b,{to:"/register",className:"mr-4"},"Sign Up"),r.a.createElement("br",null),r.a.createElement(c.b,{to:"/login"}," Login")))}),k=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(c.a,null,r.a.createElement(o.d,null,r.a.createElement(o.b,{exact:!0,path:"/",component:C}),r.a.createElement(r.a.Fragment,null,r.a.createElement(i,{exact:!0,path:"/portal"},r.a.createElement(S,null)),r.a.createElement(o.b,{path:"/login",component:g}),r.a.createElement(o.b,{exact:!0,path:"/register",component:f}),r.a.createElement(o.b,{exact:!0,path:"/forgotpassword",component:h}),r.a.createElement(o.b,{exact:!0,path:"/passwordreset/:resetToken",component:w})))))};s.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.801517b2.chunk.js.map