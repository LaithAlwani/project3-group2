(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,a,t){},34:function(e,a,t){e.exports=t(74)},39:function(e,a,t){},60:function(e,a,t){},66:function(e,a,t){},67:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){},71:function(e,a,t){},72:function(e,a,t){},73:function(e,a,t){e.exports=t.p+"static/media/orange.e5ec82fa.png"},74:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(16),s=t.n(c),l=(t(39),t(2)),o=t(7),m=t(5),i=t(6),u=t.n(i),p=t(11),d=t(9),E=t.n(d),b=(t(60),function(e){var a=e.history,t=Object(n.useState)(""),c=Object(l.a)(t,2),s=c[0],m=c[1],i=Object(n.useState)(""),d=Object(l.a)(i,2),b=d[0],v=d[1],f=Object(n.useState)(""),g=Object(l.a)(f,2),h=g[0],N=g[1];Object(n.useEffect)(function(){localStorage.getItem("authToken")&&a.push("/login")},[a]);var w=function(){var e=Object(p.a)(u.a.mark(function e(t){var n,r,c;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={header:{"Content-Type":"application/json"}},e.prev=2,e.next=5,E.a.post("/api/auth/login",{email:s,password:b},n);case 5:r=e.sent,c=r.data,localStorage.setItem("authToken",c.token),a.push("/portal"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),N(e.t0.response.data.error),setTimeout(function(){N("")},5e3);case 15:case"end":return e.stop()}},e,null,[[2,11]])}));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"login-screen"},r.a.createElement("form",{onSubmit:w,className:"login-screen__form"},r.a.createElement("h3",{className:"login-screen__title"},"Login"),h&&r.a.createElement("span",{className:"error-message"},h),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email:"),r.a.createElement("input",{type:"email",required:!0,id:"email",placeholder:"Email address",onChange:function(e){return m(e.target.value)},value:s,tabIndex:1})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password:"," ",r.a.createElement(o.b,{to:"/forgotpassword",className:"login-screen__forgotpassword"},"Forgot Password?")),r.a.createElement("input",{type:"password",required:!0,id:"password",autoComplete:"true",placeholder:"Enter password",onChange:function(e){return v(e.target.value)},value:b,tabIndex:2})),r.a.createElement("button",{type:"submit",className:"btn btn-block"},"Login"),r.a.createElement("span",{className:"login-screen__subtext"},"Don't have an account? ",r.a.createElement(o.b,{to:"/register"},"Register"))))}),v=(t(66),function(e){var a=e.history,t=Object(n.useState)(""),c=Object(l.a)(t,2),s=c[0],m=c[1],i=Object(n.useState)(""),d=Object(l.a)(i,2),b=d[0],v=d[1],f=Object(n.useState)(""),g=Object(l.a)(f,2),h=g[0],N=g[1],w=Object(n.useState)(""),j=Object(l.a)(w,2),O=j[0],S=j[1],y=Object(n.useState)(""),x=Object(l.a)(y,2),k=x[0],C=x[1],T=function(){var e=Object(p.a)(u.a.mark(function e(t){var n,r,c;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n={header:{"Content-Type":"application/json"}},h===O){e.next=7;break}return N(""),S(""),setTimeout(function(){C("")},5e3),e.abrupt("return",C("Passwords do not match"));case 7:return e.prev=7,e.next=10,E.a.post("/api/auth/register",{username:s,email:b,password:h},n);case 10:r=e.sent,c=r.data,console.log(c),a.push("/login"),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(7),C(e.t0.response.data.error),setTimeout(function(){C("")},5e3);case 20:case"end":return e.stop()}},e,null,[[7,16]])}));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"register-screen"},r.a.createElement("form",{onSubmit:T,className:"register-screen__form"},r.a.createElement("h3",{className:"register-screen__title"},"Sign Up"),k&&r.a.createElement("span",{className:"error-message"},k),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Username:"),r.a.createElement("input",{type:"text",required:!0,id:"name",placeholder:"Enter Full Name",value:s,onChange:function(e){return m(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email:"),r.a.createElement("input",{type:"email",required:!0,id:"email",placeholder:"Email address",value:b,onChange:function(e){return v(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password:"),r.a.createElement("input",{type:"password",required:!0,id:"password",autoComplete:"true",placeholder:"Enter password",value:h,onChange:function(e){return N(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"confirmpassword"},"Confirm Password:"),r.a.createElement("input",{type:"password",required:!0,id:"confirmpassword",autoComplete:"true",placeholder:"Confirm password",value:O,onChange:function(e){return S(e.target.value)}})),r.a.createElement("button",{type:"submit",className:"btn btn-block"}," ","Sign Up"),r.a.createElement("span",{className:"register-screen__subtext"},"Already have an account? ",r.a.createElement(o.b,{to:"/login"},"Login"))))}),f=(t(67),function(){var e=Object(n.useState)(""),a=Object(l.a)(e,2),t=a[0],c=a[1],s=Object(n.useState)(""),o=Object(l.a)(s,2),m=o[0],i=o[1],d=Object(n.useState)(""),b=Object(l.a)(d,2),v=b[0],f=b[1],g=function(){var e=Object(p.a)(u.a.mark(function e(a){var n,r,s;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n={header:{"Content-Type":"application/json"}},e.prev=2,e.next=5,E.a.post("/api/auth/forgotpassword",{email:t},n);case 5:r=e.sent,s=r.data,f(s.data),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(2),i(e.t0.response.data.error),c(""),setTimeout(function(){i("")},5e3);case 15:case"end":return e.stop()}},e,null,[[2,10]])}));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"forgotpassword-screen"},r.a.createElement("form",{onSubmit:g,className:"forgotpassword-screen__form"},r.a.createElement("h3",{className:"forgotpassword-screen__title"},"Forgot Password"),m&&r.a.createElement("span",{className:"error-message"},m),v&&r.a.createElement("span",{className:"success-message"},v),r.a.createElement("div",{className:"form-group"},r.a.createElement("p",{className:"forgotpassword-screen__subtext"},"Please enter the email address you register your account with. We will send you reset password confirmation to this email"),r.a.createElement("label",{htmlFor:"email"},"Email:"),r.a.createElement("input",{type:"email",required:!0,id:"email",placeholder:"Email address",value:t,onChange:function(e){return c(e.target.value)}})),r.a.createElement("button",{type:"submit",className:"btn btn-block"},"Send Email")))}),g=(t(68),function(e){var a=e.match,t=Object(n.useState)(""),c=Object(l.a)(t,2),s=c[0],m=c[1],i=Object(n.useState)(""),d=Object(l.a)(i,2),b=d[0],v=d[1],f=Object(n.useState)(""),g=Object(l.a)(f,2),h=g[0],N=g[1],w=Object(n.useState)(""),j=Object(l.a)(w,2),O=j[0],S=j[1],y=function(){var e=Object(p.a)(u.a.mark(function e(t){var n,r,c;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n={header:{"Content-Type":"application/json"}},s===b){e.next=7;break}return m(""),v(""),setTimeout(function(){N("")},5e3),e.abrupt("return",N("Passwords don't match"));case 7:return e.prev=7,e.next=10,E.a.put("/api/auth/passwordreset/".concat(a.params.resetToken),{password:s},n);case 10:r=e.sent,c=r.data,console.log(c),S(c.data),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(7),N(e.t0.response.data.error),setTimeout(function(){N("")},5e3);case 20:case"end":return e.stop()}},e,null,[[7,16]])}));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"resetpassword-screen"},r.a.createElement("form",{onSubmit:y,className:"resetpassword-screen__form"},r.a.createElement("h3",{className:"resetpassword-screen__title"},"Forgot Password"),h&&r.a.createElement("span",{className:"error-message"},h," "),O&&r.a.createElement("span",{className:"success-message"},O," ",r.a.createElement(o.b,{to:"/login"},"Login")),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"New Password:"),r.a.createElement("input",{type:"password",required:!0,id:"password",placeholder:"Enter new password",autoComplete:"true",value:s,onChange:function(e){return m(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"confirmpassword"},"Confirm New Password:"),r.a.createElement("input",{type:"password",required:!0,id:"confirmpassword",placeholder:"Confirm new password",autoComplete:"true",value:b,onChange:function(e){return v(e.target.value)}})),r.a.createElement("button",{type:"submit",className:"btn btn-block"},"Reset Password")))}),h=r.a.createContext({username:"",email:"",_id:"",teams:""}),N=t(77),w=(t(69),function(){var e=Object(n.useContext)(h),a=e.username,t=e.email;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"profile-userpic"},r.a.createElement("img",{className:"img-fluid",src:"https://racemph.com/wp-content/uploads/2016/09/profile-image-placeholder.png",alt:a})),r.a.createElement("div",{className:"text-left mt-3"},r.a.createElement("p",null," Name: ",a),r.a.createElement("p",null," Email: ",t)),r.a.createElement(j,null))}),j=function(){var e=Object(n.useContext)(h)._id,a=Object(n.useState)(""),t=Object(l.a)(a,2),c=t[0],s=t[1],o=Object(n.useState)(""),m=Object(l.a)(o,2),i=m[0],d=m[1],b=Object(n.useState)(""),v=Object(l.a)(b,2),f=v[0],g=v[1],w=Object(n.useState)(!1),j=Object(l.a)(w,2),O=j[0],S=j[1],y=function(){return S(!1)},x=Object(n.useState)(""),k=Object(l.a)(x,2),C=k[0],T=k[1],_=function(){var a=Object(p.a)(u.a.mark(function a(){var t;return u.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t={header:{"Content-Type":"application/json"}},a.prev=1,a.next=4,E.a.put("/api/auth/update/".concat(e),{username:c,email:i,password:f},t);case 4:window.location.reload(),a.next=13;break;case 7:a.prev=7,a.t0=a.catch(1),console.log(a.t0),T("Email Already Exists in Database"),a.t0||y(),setTimeout(function(){T("")},2e3);case 13:case"end":return a.stop()}},a,null,[[1,7]])}));return function(){return a.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-block",onClick:function(){return S(!0)}},"Update"),r.a.createElement(N.a,{show:O,onHide:y},r.a.createElement(N.a.Header,{closeButton:!0},r.a.createElement(N.a.Title,null,"Update User Information")),r.a.createElement(N.a.Body,null,C&&r.a.createElement("div",{className:"alert alert-danger"},C),r.a.createElement("form",{onSubmit:_},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Username:"),r.a.createElement("input",{type:"text",required:!0,id:"name",placeholder:"Enter Full Name",value:c,onChange:function(e){return s(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email:"),r.a.createElement("input",{type:"email",required:!0,id:"email",placeholder:"Email address",value:i,onChange:function(e){return d(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password:"),r.a.createElement("input",{type:"password",required:!0,id:"password",autoComplete:"true",placeholder:"Enter password",value:f,onChange:function(e){return g(e.target.value)}})),r.a.createElement("button",{type:"submit",className:"btn btn-primary"}," ","Save Changes")))))};t(71),t(72);var O=function(e){var a=e.myTeams;return r.a.createElement("div",{className:"mt-3"},a.map(function(e){return r.a.createElement("div",{key:e._id,className:"team-card"},r.a.createElement("div",{className:"row text-center mb-2 p-3"},r.a.createElement("div",{className:"col-4"},r.a.createElement("img",{src:"https://image.shutterstock.com/image-vector/furious-eagle-head-athletic-club-260nw-693912817.jpg",alt:""}),r.a.createElement("span",{className:"team-card-text"},e.teamName)),r.a.createElement("div",{className:"col-4"},r.a.createElement("span",{className:"team-card-text"},e.sport)),r.a.createElement("div",{className:"col-4"},r.a.createElement("button",{className:"btn"},"Delete"))))}))};var S=function(e){var a=e.getShowTeams,t=Object(n.useContext)(h)._id,c=Object(n.useState)(""),s=Object(l.a)(c,2),o=s[0],m=s[1],i=Object(n.useState)(""),d=Object(l.a)(i,2),b=d[0],v=d[1],f=Object(n.useState)(""),g=Object(l.a)(f,2),N=g[0],w=g[1],j=function(){var e=Object(p.a)(u.a.mark(function e(n){var r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r={header:{"Content-Type":"application/json"}},e.prev=2,e.next=5,E.a.post("api/auth/createteam",{_id:t,teamName:o,sport:b},r);case 5:a(!0),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0),w(e.t0.response.data.error),setTimeout(function(){w("")},5e3);case 13:case"end":return e.stop()}},e,null,[[2,8]])}));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,N&&r.a.createElement("span",{className:"error-message"},N),r.a.createElement("div",{className:"text-center mt-4"},r.a.createElement("h3",null,"please enter the team information"),r.a.createElement("form",{onSubmit:j,className:"add-team-form"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",id:"team-name",placeholder:"Team Name",onChange:function(e){return m(e.target.value)},required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",id:"sport",placeholder:"Sport",onChange:function(e){return v(e.target.value)},required:!0})),r.a.createElement("button",{className:"btn btn-block",type:"submit"},"Create Team"))))};var y=function(){var e=Object(n.useContext)(h)._id,a=Object(n.useState)(!0),t=Object(l.a)(a,2),c=t[0],s=t[1],o=Object(n.useState)([]),m=Object(l.a)(o,2),i=m[0],u=m[1],p=Object(n.useState)(""),d=Object(l.a)(p,2),b=d[0],v=d[1];Object(n.useEffect)(function(){f()},[e,c]);var f=function(){e&&E.a.get("api/auth/teams/"+e).then(function(e){console.log(e.data.teams),u(e.data.teams)})};return r.a.createElement("div",{className:"mt-3"},c&&r.a.createElement("div",{className:"text-right"},r.a.createElement("button",{className:"btn",onClick:function(){return s(!1)}},"Create Team")),b&&r.a.createElement("div",{className:"alert alert-success"},b),c&&r.a.createElement(O,{myTeams:i}),!c&&r.a.createElement(S,{getShowTeams:function(e){s(e),v("Team Created"),setTimeout(function(){v("")},3e3)}}))},x=function(e){var a=e.getUsername,t=Object(m.f)(),c=Object(n.useState)(""),s=Object(l.a)(c,2),o=s[0],i=s[1],d=Object(n.useState)({username:"",_id:"",email:"",teams:"",userCreated:""}),b=Object(l.a)(d,2),v=b[0],f=b[1];return Object(n.useEffect)(function(){localStorage.getItem("authToken")||(i("You are not authorized please login! redirecting to login"),setTimeout(function(){t.push("/login")},2e3)),function(){var e=Object(p.a)(u.a.mark(function e(){var n,r,c;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("authToken"))}},e.prev=1,e.next=4,E.a.get("/api/private",n);case 4:r=e.sent,c=r.data,f(c),a(c.username),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(1),localStorage.removeItem("authToken"),i("You are not authorized please login! Redirecting to login"),setTimeout(function(){t.push("/login")},2e3);case 15:case"end":return e.stop()}},e,null,[[1,10]])}));return function(){return e.apply(this,arguments)}}()()},[t]),o?r.a.createElement("div",{className:"alert alert-danger",role:"alert"},o):r.a.createElement(h.Provider,{value:v},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row "},r.a.createElement("div",{className:"col-md-3"},r.a.createElement(w,null)),r.a.createElement("div",{className:"col-md-9"},r.a.createElement(y,null)))))},k=(t(31),t(73),function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"orange"},r.a.createElement(o.b,{to:"/register",className:"mr-4"},"Sign Up"),r.a.createElement("br",null),r.a.createElement(o.b,{to:"/login",className:"mr-4"}," ","Login"," ")),r.a.createElement("div",{class:"footer-dark"},r.a.createElement("footer",null,r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-sm-6 col-md-3 item"}),r.a.createElement("div",{class:"col-sm-6 col-md-3 item"}),r.a.createElement("div",{class:"col-md-6 item text"}),r.a.createElement("i",{class:"fa fa-github","aria-hidden":"true"})),r.a.createElement("p",{class:"copyright"},"My Team \xa9 2021")))))});var C=function(e){var a=e.username,t=Object(m.g)();return r.a.createElement("div",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(o.b,{className:"navbar-brand",to:"/portal"},"My Team"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},localStorage.getItem("authToken")&&r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{to:"#",className:"nav-link"},"Hi ",a,"!")),r.a.createElement("li",{className:"nav-item "},r.a.createElement(o.b,{className:"/portal"===t.pathname?"nav-link active":"nav-link",to:"/portal"},"Teams ",r.a.createElement("span",{className:"sr-only"}))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/login",onClick:function(){localStorage.removeItem("authToken")}},"Logout"))),!localStorage.getItem("authToken")&&r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item "},r.a.createElement(o.b,{className:"/login"===t.pathname?"nav-link active":"nav-link",to:"/login"},"Login ",r.a.createElement("span",{className:"sr-only"}))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"/register"===t.pathname?"nav-link active":"nav-link",to:"/register"},"Register")))))},T=function(){var e=Object(n.useState)(""),a=Object(l.a)(e,2),t=a[0],c=a[1];return r.a.createElement("div",{className:"app"},r.a.createElement(o.a,null,r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/"},r.a.createElement(k,null)),r.a.createElement(r.a.Fragment,null,r.a.createElement(C,{username:t}),r.a.createElement(m.a,{path:"/portal"},r.a.createElement(x,{getUsername:function(e){c(e)}})),r.a.createElement(m.a,{path:"/login",component:b}),r.a.createElement(m.a,{path:"/register",component:v}),r.a.createElement(m.a,{path:"/forgotpassword",component:f}),r.a.createElement(m.a,{exact:!0,path:"/passwordreset/:resetToken",component:g})))))};s.a.render(r.a.createElement(T,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.d1e13eed.chunk.js.map