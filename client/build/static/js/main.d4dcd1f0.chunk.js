(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,a,t){},34:function(e,a,t){e.exports=t(73)},39:function(e,a,t){},60:function(e,a,t){},66:function(e,a,t){},67:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){},71:function(e,a,t){},72:function(e,a,t){e.exports=t.p+"static/media/orange.e5ec82fa.png"},73:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(16),c=t.n(l),s=(t(39),t(3)),o=t(6),m=t(5),i=t(7),u=t.n(i),p=t(12),d=t(13),E=t.n(d),f=(t(60),function(e){var a=e.history,t=Object(n.useState)(""),l=Object(s.a)(t,2),c=l[0],m=l[1],i=Object(n.useState)(""),d=Object(s.a)(i,2),f=d[0],b=d[1],g=Object(n.useState)(""),v=Object(s.a)(g,2),h=v[0],w=v[1];Object(n.useEffect)(function(){localStorage.getItem("authToken")&&a.push("/login")},[a]);var N=function(){var e=Object(p.a)(u.a.mark(function e(t){var n,r,l;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={header:{"Content-Type":"application/json"}},e.prev=2,e.next=5,E.a.post("/api/auth/login",{email:c,password:f},n);case 5:r=e.sent,l=r.data,localStorage.setItem("authToken",l.token),a.push("/portal"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),w(e.t0.response.data.error),setTimeout(function(){w("")},5e3);case 15:case"end":return e.stop()}},e,null,[[2,11]])}));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"login-screen"},r.a.createElement("form",{onSubmit:N,className:"login-screen__form"},r.a.createElement("h3",{className:"login-screen__title"},"Login"),h&&r.a.createElement("span",{className:"error-message"},h),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email:"),r.a.createElement("input",{type:"email",required:!0,id:"email",placeholder:"Email address",onChange:function(e){return m(e.target.value)},value:c,tabIndex:1})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password:"," ",r.a.createElement(o.b,{to:"/forgotpassword",className:"login-screen__forgotpassword"},"Forgot Password?")),r.a.createElement("input",{type:"password",required:!0,id:"password",autoComplete:"true",placeholder:"Enter password",onChange:function(e){return b(e.target.value)},value:f,tabIndex:2})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Login"),r.a.createElement("span",{className:"login-screen__subtext"},"Don't have an account? ",r.a.createElement(o.b,{to:"/register"},"Register"))))}),b=(t(66),function(e){var a=e.history,t=Object(n.useState)(""),l=Object(s.a)(t,2),c=l[0],m=l[1],i=Object(n.useState)(""),d=Object(s.a)(i,2),f=d[0],b=d[1],g=Object(n.useState)(""),v=Object(s.a)(g,2),h=v[0],w=v[1],N=Object(n.useState)(""),j=Object(s.a)(N,2),O=j[0],y=j[1],S=Object(n.useState)(""),k=Object(s.a)(S,2),C=k[0],x=k[1],T=function(){var e=Object(p.a)(u.a.mark(function e(t){var n,r,l;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n={header:{"Content-Type":"application/json"}},h===O){e.next=7;break}return w(""),y(""),setTimeout(function(){x("")},5e3),e.abrupt("return",x("Passwords do not match"));case 7:return e.prev=7,e.next=10,E.a.post("/api/auth/register",{username:c,email:f,password:h},n);case 10:r=e.sent,l=r.data,console.log(l),a.push("/login"),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(7),x(e.t0.response.data.error),setTimeout(function(){x("")},5e3);case 20:case"end":return e.stop()}},e,null,[[7,16]])}));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"register-screen"},r.a.createElement("form",{onSubmit:T,className:"register-screen__form"},r.a.createElement("h3",{className:"register-screen__title"},"Sign Up"),C&&r.a.createElement("span",{className:"error-message"},C),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Username:"),r.a.createElement("input",{type:"text",required:!0,id:"name",placeholder:"Enter Full Name",value:c,onChange:function(e){return m(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email:"),r.a.createElement("input",{type:"email",required:!0,id:"email",placeholder:"Email address",value:f,onChange:function(e){return b(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password:"),r.a.createElement("input",{type:"password",required:!0,id:"password",autoComplete:"true",placeholder:"Enter password",value:h,onChange:function(e){return w(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"confirmpassword"},"Confirm Password:"),r.a.createElement("input",{type:"password",required:!0,id:"confirmpassword",autoComplete:"true",placeholder:"Confirm password",value:O,onChange:function(e){return y(e.target.value)}})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"}," Sign Up"),r.a.createElement("span",{className:"register-screen__subtext"},"Already have an account? ",r.a.createElement(o.b,{to:"/login"},"Login"))))}),g=(t(67),function(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(""),o=Object(s.a)(c,2),m=o[0],i=o[1],d=Object(n.useState)(""),f=Object(s.a)(d,2),b=f[0],g=f[1],v=function(){var e=Object(p.a)(u.a.mark(function e(a){var n,r,c;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n={header:{"Content-Type":"application/json"}},e.prev=2,e.next=5,E.a.post("/api/auth/forgotpassword",{email:t},n);case 5:r=e.sent,c=r.data,g(c.data),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(2),i(e.t0.response.data.error),l(""),setTimeout(function(){i("")},5e3);case 15:case"end":return e.stop()}},e,null,[[2,10]])}));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"forgotpassword-screen"},r.a.createElement("form",{onSubmit:v,className:"forgotpassword-screen__form"},r.a.createElement("h3",{className:"forgotpassword-screen__title"},"Forgot Password"),m&&r.a.createElement("span",{className:"error-message"},m),b&&r.a.createElement("span",{className:"success-message"},b),r.a.createElement("div",{className:"form-group"},r.a.createElement("p",{className:"forgotpassword-screen__subtext"},"Please enter the email address you register your account with. We will send you reset password confirmation to this email"),r.a.createElement("label",{htmlFor:"email"},"Email:"),r.a.createElement("input",{type:"email",required:!0,id:"email",placeholder:"Email address",value:t,onChange:function(e){return l(e.target.value)}})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Send Email")))}),v=(t(68),function(e){var a=e.match,t=Object(n.useState)(""),l=Object(s.a)(t,2),c=l[0],m=l[1],i=Object(n.useState)(""),d=Object(s.a)(i,2),f=d[0],b=d[1],g=Object(n.useState)(""),v=Object(s.a)(g,2),h=v[0],w=v[1],N=Object(n.useState)(""),j=Object(s.a)(N,2),O=j[0],y=j[1],S=function(){var e=Object(p.a)(u.a.mark(function e(t){var n,r,l;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n={header:{"Content-Type":"application/json"}},c===f){e.next=7;break}return m(""),b(""),setTimeout(function(){w("")},5e3),e.abrupt("return",w("Passwords don't match"));case 7:return e.prev=7,e.next=10,E.a.put("/api/auth/passwordreset/".concat(a.params.resetToken),{password:c},n);case 10:r=e.sent,l=r.data,console.log(l),y(l.data),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(7),w(e.t0.response.data.error),setTimeout(function(){w("")},5e3);case 20:case"end":return e.stop()}},e,null,[[7,16]])}));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"resetpassword-screen"},r.a.createElement("form",{onSubmit:S,className:"resetpassword-screen__form"},r.a.createElement("h3",{className:"resetpassword-screen__title"},"Forgot Password"),h&&r.a.createElement("span",{className:"error-message"},h," "),O&&r.a.createElement("span",{className:"success-message"},O," ",r.a.createElement(o.b,{to:"/login"},"Login")),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"New Password:"),r.a.createElement("input",{type:"password",required:!0,id:"password",placeholder:"Enter new password",autoComplete:"true",value:c,onChange:function(e){return m(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"confirmpassword"},"Confirm New Password:"),r.a.createElement("input",{type:"password",required:!0,id:"confirmpassword",placeholder:"Confirm new password",autoComplete:"true",value:f,onChange:function(e){return b(e.target.value)}})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Reset Password")))}),h=r.a.createContext({username:"",email:"",_id:"",teams:""}),w=t(76),N=(t(69),function(){var e=Object(n.useContext)(h),a=e.username,t=e.email;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"profile-userpic"},r.a.createElement("img",{className:"img-fluid",src:"https://racemph.com/wp-content/uploads/2016/09/profile-image-placeholder.png",alt:a})),r.a.createElement("div",{className:"text-left mt-3"},r.a.createElement("p",null," Name: ",a),r.a.createElement("p",null," Email: ",t)),r.a.createElement(j,null))}),j=function(){var e=Object(n.useContext)(h)._id,a=Object(n.useState)(""),t=Object(s.a)(a,2),l=t[0],c=t[1],o=Object(n.useState)(""),m=Object(s.a)(o,2),i=m[0],d=m[1],f=Object(n.useState)(""),b=Object(s.a)(f,2),g=b[0],v=b[1],N=Object(n.useState)(!1),j=Object(s.a)(N,2),O=j[0],y=j[1],S=function(){return y(!1)},k=Object(n.useState)(""),C=Object(s.a)(k,2),x=C[0],T=C[1],_=function(){var a=Object(p.a)(u.a.mark(function a(){var t;return u.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t={header:{"Content-Type":"application/json"}},a.prev=1,a.next=4,E.a.put("/api/auth/update/".concat(e),{username:l,email:i,password:g},t);case 4:window.location.reload(),a.next=13;break;case 7:a.prev=7,a.t0=a.catch(1),console.log(a.t0),T("Email Already Exists in Database"),a.t0||S(),setTimeout(function(){T("")},2e3);case 13:case"end":return a.stop()}},a,null,[[1,7]])}));return function(){return a.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return y(!0)}},"Update User Information"),r.a.createElement("div",{className:"d-flex align-items-center justify-content-center",style:{height:"100vh"}}),r.a.createElement(w.a,{show:O,onHide:S},r.a.createElement(w.a.Header,{closeButton:!0},r.a.createElement(w.a.Title,null,"Update User Information")),r.a.createElement(w.a.Body,null,x&&r.a.createElement("div",{className:"alert alert-danger"},x),r.a.createElement("form",{onSubmit:_},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Username:"),r.a.createElement("input",{type:"text",required:!0,id:"name",placeholder:"Enter Full Name",value:l,onChange:function(e){return c(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email:"),r.a.createElement("input",{type:"email",required:!0,id:"email",placeholder:"Email address",value:i,onChange:function(e){return d(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password:"),r.a.createElement("input",{type:"password",required:!0,id:"password",autoComplete:"true",placeholder:"Enter password",value:g,onChange:function(e){return v(e.target.value)}})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"}," ","Save Changes")))))},O=(t(71),function(e){var a=e.getUsername,t=Object(m.f)(),l=Object(n.useState)(""),c=Object(s.a)(l,2),o=c[0],i=c[1],d=Object(n.useState)({username:"",_id:"",email:"",teams:"",userCreated:""}),f=Object(s.a)(d,2),b=f[0],g=f[1];return Object(n.useEffect)(function(){localStorage.getItem("authToken")||(i("You are not authorized please login! redirecting to login"),setTimeout(function(){t.push("/login")},2e3)),function(){var e=Object(p.a)(u.a.mark(function e(){var n,r,l;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("authToken"))}},e.prev=1,e.next=4,E.a.get("/api/private",n);case 4:r=e.sent,l=r.data,g(l),a(l.username),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(1),localStorage.removeItem("authToken"),i("You are not authorized please login! Redirecting to login"),setTimeout(function(){t.push("/login")},2e3);case 15:case"end":return e.stop()}},e,null,[[1,10]])}));return function(){return e.apply(this,arguments)}}()()},[t]),o?r.a.createElement("div",{className:"alert alert-danger",role:"alert"},o):r.a.createElement(h.Provider,{value:b},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row text-center"},r.a.createElement("div",{className:"col-sm-3"},r.a.createElement(N,null)),r.a.createElement("div",{className:"col-sm-9"},r.a.createElement("h1",null," Hello from My Teams !!!")))))}),y=(t(31),t(72),function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"orange"},r.a.createElement("h1",{id:"title"},"MY TEAM"),r.a.createElement(o.b,{to:"/register",className:"mr-4"},"Sign Up"),r.a.createElement("br",null),r.a.createElement(o.b,{to:"/login",className:"mr-4"}," Login ")),r.a.createElement("h3",null,"CHAT   BUILD     CREATE "),r.a.createElement("footer",{class:"mainfooter",role:"contentinfo"},r.a.createElement("div",{class:"footer-middle"},r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-md-3 col-sm-6"}),r.a.createElement("div",{class:"col-md-3 col-sm-6"}),r.a.createElement("div",{class:"col-md-3 col-sm-6"},r.a.createElement("div",{class:"footer-pad"},r.a.createElement("h4",null,"Heading 3"),r.a.createElement("ul",{class:"list-unstyled"},r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Parks and Recreation")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Public Works")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Police Department")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Fire")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Mayor and City Council")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"}))))),r.a.createElement("div",{class:"col-md-3"},r.a.createElement("h4",null,"About the Developers"),r.a.createElement("ul",{class:"social-network social-circle"},r.a.createElement("li",null,r.a.createElement("a",{href:"#",class:"icoFacebook",title:"Github"},r.a.createElement("i",{class:"fa fa-github"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"#",class:"icoLinkedin",title:"Githb"},r.a.createElement("i",{class:"fa fa-github"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"#",class:"icoLinkedin",title:"Github"},r.a.createElement("i",{class:"fa fa-github"})))))),r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-md-12 copy"},r.a.createElement("p",{class:"text-center"},"\xa9 Copyright 2021 - My Team.  All rights reserved.")))))))});var S=function(e){var a=e.username,t=Object(m.g)();return r.a.createElement("div",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(o.b,{className:"navbar-brand",to:"/portal"},"My Team"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},localStorage.getItem("authToken")&&r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{to:"#",className:"nav-link"},"Hi ",a,"!")),r.a.createElement("li",{className:"nav-item "},r.a.createElement(o.b,{className:"/portal"===t.pathname?"nav-link active":"nav-link",to:"/portal"},"Teams ",r.a.createElement("span",{className:"sr-only"}))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/login",onClick:function(){localStorage.removeItem("authToken")}},"Logout"))),!localStorage.getItem("authToken")&&r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item "},r.a.createElement(o.b,{className:"/login"===t.pathname?"nav-link active":"nav-link",to:"/login"},"Login ",r.a.createElement("span",{className:"sr-only"}))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"/register"===t.pathname?"nav-link active":"nav-link",to:"/register"},"Register")))))},k=function(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",{className:"app"},r.a.createElement(o.a,null,r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/"},r.a.createElement(y,null)),r.a.createElement(r.a.Fragment,null,r.a.createElement(S,{username:t}),r.a.createElement(m.a,{path:"/portal"},r.a.createElement(O,{getUsername:function(e){l(e)}})),r.a.createElement(m.a,{path:"/login",component:f}),r.a.createElement(m.a,{path:"/register",component:b}),r.a.createElement(m.a,{path:"/forgotpassword",component:g}),r.a.createElement(m.a,{exact:!0,path:"/passwordreset/:resetToken",component:v})))))};c.a.render(r.a.createElement(k,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.d4dcd1f0.chunk.js.map