(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,a){},33:function(e,t,a){},36:function(e,t,a){e.exports=a(75)},41:function(e,t,a){},62:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),l=a.n(c),o=(a(41),a(1)),s=a(6),m=a(8),i=a(5),u=a.n(i),p=a(9),d=a(3),b=a.n(d),f=(a(62),function(e){var t=e.history,a=Object(n.useState)(""),c=Object(o.a)(a,2),l=c[0],m=c[1],i=Object(n.useState)(""),d=Object(o.a)(i,2),f=d[0],E=d[1],v=Object(n.useState)(""),g=Object(o.a)(v,2),h=g[0],N=g[1];Object(n.useEffect)(function(){localStorage.getItem("authToken")&&t.push("/login")},[t]);var j=function(){var e=Object(p.a)(u.a.mark(function e(a){var n,r,c;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n={header:{"Content-Type":"application/json"}},e.prev=2,e.next=5,b.a.post("/api/auth/login",{email:l,password:f},n);case 5:r=e.sent,c=r.data,localStorage.setItem("authToken",c.token),t.push("/portal"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0.response.data),setTimeout(function(){N("")},5e3);case 15:case"end":return e.stop()}},e,null,[[2,11]])}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"login-screen"},r.a.createElement("form",{onSubmit:j,className:"login-screen__form"},r.a.createElement("h3",{className:"login-screen__title"},"Login"),h&&r.a.createElement("span",{className:"error-message"},h),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email:"),r.a.createElement("input",{type:"email",required:!0,id:"email",placeholder:"Email address",onChange:function(e){return m(e.target.value)},value:l,tabIndex:1})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password:"," ",r.a.createElement(s.b,{to:"/forgotpassword",className:"login-screen__forgotpassword"},"Forgot Password?")),r.a.createElement("input",{type:"password",required:!0,id:"password",autoComplete:"true",placeholder:"Enter password",onChange:function(e){return E(e.target.value)},value:f,tabIndex:2})),r.a.createElement("button",{type:"submit",className:"btn btn-block"},"Login"),r.a.createElement("span",{className:"login-screen__subtext"},"Don't have an account? ",r.a.createElement(s.b,{to:"/register"},"Register"))))}),E=(a(68),function(e){var t=e.history,a=Object(n.useState)(""),c=Object(o.a)(a,2),l=c[0],m=c[1],i=Object(n.useState)(""),d=Object(o.a)(i,2),f=d[0],E=d[1],v=Object(n.useState)(""),g=Object(o.a)(v,2),h=g[0],N=g[1],j=Object(n.useState)(""),O=Object(o.a)(j,2),w=O[0],y=O[1],S=Object(n.useState)(""),T=Object(o.a)(S,2),x=T[0],k=T[1],C=function(){var e=Object(p.a)(u.a.mark(function e(a){var n,r,c;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),n={header:{"Content-Type":"application/json"}},h===w){e.next=7;break}return N(""),y(""),setTimeout(function(){k("")},5e3),e.abrupt("return",k("Passwords do not match"));case 7:return e.prev=7,e.next=10,b.a.post("/api/auth/register",{username:l,email:f,password:h},n);case 10:r=e.sent,c=r.data,console.log(c),t.push("/login"),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(7),k(e.t0.response.data.error),setTimeout(function(){k("")},5e3);case 20:case"end":return e.stop()}},e,null,[[7,16]])}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"register-screen"},r.a.createElement("form",{onSubmit:C,className:"register-screen__form"},r.a.createElement("h3",{className:"register-screen__title"},"Sign Up"),x&&r.a.createElement("span",{className:"error-message"},x),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Username:"),r.a.createElement("input",{type:"text",required:!0,id:"name",placeholder:"Enter Full Name",value:l,onChange:function(e){return m(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email:"),r.a.createElement("input",{type:"email",required:!0,id:"email",placeholder:"Email address",value:f,onChange:function(e){return E(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password:"),r.a.createElement("input",{type:"password",required:!0,id:"password",autoComplete:"true",placeholder:"Enter password",value:h,onChange:function(e){return N(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"confirmpassword"},"Confirm Password:"),r.a.createElement("input",{type:"password",required:!0,id:"confirmpassword",autoComplete:"true",placeholder:"Confirm password",value:w,onChange:function(e){return y(e.target.value)}})),r.a.createElement("button",{type:"submit",className:"btn btn-block"}," ","Sign Up"),r.a.createElement("span",{className:"register-screen__subtext"},"Already have an account? ",r.a.createElement(s.b,{to:"/login"},"Login"))))}),v=(a(69),function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),s=Object(o.a)(l,2),m=s[0],i=s[1],d=Object(n.useState)(""),f=Object(o.a)(d,2),E=f[0],v=f[1],g=function(){var e=Object(p.a)(u.a.mark(function e(t){var n,r,l;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={header:{"Content-Type":"application/json"}},e.prev=2,e.next=5,b.a.post("/api/auth/forgotpassword",{email:a},n);case 5:r=e.sent,l=r.data,v(l.data),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(2),i(e.t0.response.data.error),c(""),setTimeout(function(){i("")},5e3);case 15:case"end":return e.stop()}},e,null,[[2,10]])}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"forgotpassword-screen"},r.a.createElement("form",{onSubmit:g,className:"forgotpassword-screen__form"},r.a.createElement("h3",{className:"forgotpassword-screen__title"},"Forgot Password"),m&&r.a.createElement("span",{className:"error-message"},m),E&&r.a.createElement("span",{className:"success-message"},E),r.a.createElement("div",{className:"form-group"},r.a.createElement("p",{className:"forgotpassword-screen__subtext"},"Please enter the email address you register your account with. We will send you reset password confirmation to this email"),r.a.createElement("label",{htmlFor:"email"},"Email:"),r.a.createElement("input",{type:"email",required:!0,id:"email",placeholder:"Email address",value:a,onChange:function(e){return c(e.target.value)}})),r.a.createElement("button",{type:"submit",className:"btn btn-block"},"Send Email")))}),g=(a(70),function(e){var t=e.match,a=e.history,c=Object(n.useState)(""),l=Object(o.a)(c,2),s=l[0],m=l[1],i=Object(n.useState)(""),d=Object(o.a)(i,2),f=d[0],E=d[1],v=Object(n.useState)(""),g=Object(o.a)(v,2),h=g[0],N=g[1],j=Object(n.useState)(""),O=Object(o.a)(j,2),w=O[0],y=O[1],S=function(){var e=Object(p.a)(u.a.mark(function e(n){var r,c,l;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r={header:{"Content-Type":"application/json"}},s===f){e.next=7;break}return m(""),E(""),setTimeout(function(){N("")},5e3),e.abrupt("return",N("Passwords don't match"));case 7:return e.prev=7,e.next=10,b.a.put("/api/auth/passwordreset/".concat(t.params.resetToken),{password:s},r);case 10:c=e.sent,l=c.data,console.log(l),y(l.data),setTimeout(function(){a.push("/login")},2e3),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(7),N(e.t0.response.data.error),setTimeout(function(){N("")},5e3);case 21:case"end":return e.stop()}},e,null,[[7,17]])}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"resetpassword-screen"},r.a.createElement("form",{onSubmit:S,className:"resetpassword-screen__form"},r.a.createElement("h3",{className:"resetpassword-screen__title"},"Forgot Password"),h&&r.a.createElement("span",{className:"error-message"},h," "),w&&r.a.createElement("span",{className:"success-message"},w),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"New Password:"),r.a.createElement("input",{type:"password",required:!0,id:"password",placeholder:"Enter new password",autoComplete:"true",value:s,onChange:function(e){return m(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"confirmpassword"},"Confirm New Password:"),r.a.createElement("input",{type:"password",required:!0,id:"confirmpassword",placeholder:"Confirm new password",autoComplete:"true",value:f,onChange:function(e){return E(e.target.value)}})),r.a.createElement("button",{type:"submit",className:"btn btn-block"},"Reset Password")))}),h=r.a.createContext({username:"",email:"",_id:"",teams:[]}),N=a(77),j=(a(71),function(){var e=Object(n.useContext)(h),t=e.username,a=e.email,c=e.image;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card h-100"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",null,r.a.createElement("img",{className:"profile-userpic",src:"/uploads/".concat(c),alt:t})),r.a.createElement("h4",{className:"user-details"},t),r.a.createElement("h6",{className:"user-details"},a),r.a.createElement("div",{className:"center-button"},r.a.createElement(w,null)))))}),O=function(e){var t=e.history,a=Object(n.useContext)(h)._id,c=Object(n.useState)(""),l=Object(o.a)(c,2),s=l[0],m=l[1],i=Object(n.useState)(""),d=Object(o.a)(i,2),f=d[0],E=d[1],v=Object(n.useState)(""),g=Object(o.a)(v,2),N=g[0],O=g[1],w=Object(n.useState)(""),y=Object(o.a)(w,2),S=y[0],T=y[1],x=Object(n.useState)(""),k=Object(o.a)(x,2),C=k[0],I=k[1];Object(n.useEffect)(function(){localStorage.getItem("authToken")||(I("You are not authorized please login! redirecting to login"),setTimeout(function(){t.push("/login")},2e3)),function(){var e=Object(p.a)(u.a.mark(function e(){var a,n,r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("authToken"))}},e.prev=1,e.next=4,b.a.get("/api/private",a);case 4:n=e.sent,r=n.data,m(r.username),E(r.email),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(1),localStorage.removeItem("authToken"),I("You are not authorized please login! Redirecting to login"),setTimeout(function(){t.push("/login")},2e3);case 15:case"end":return e.stop()}},e,null,[[1,10]])}));return function(){return e.apply(this,arguments)}}()()},[]);var _=function(){var e=Object(p.a)(u.a.mark(function e(t){var n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={header:{"Content-Type":"application/json"}},e.prev=2,e.next=5,b.a.put("/api/users/".concat(a,"/update"),{username:s,email:f,password:N},n);case 5:T("Profile Updated Successfully"),setTimeout(function(){T("")},2e3),window.location.reload(),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(2),I("Email Already Exists"),O(""),e.t0&&setTimeout(function(){I("")},2e3);case 15:case"end":return e.stop()}},e,null,[[2,10]])}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row gutters"},r.a.createElement("div",{className:"col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 card-space"},r.a.createElement(j,null)),r.a.createElement("div",{className:"col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 card-space"},r.a.createElement("div",{className:"card h-100"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"row gutters"},r.a.createElement("div",{className:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"},r.a.createElement("h4",{className:"mb-3 text"},"Personal Details"),C&&r.a.createElement("div",{className:"alert alert-danger"},C),S&&r.a.createElement("span",{className:"success-message"},S),r.a.createElement("form",{onSubmit:_},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Username:"),r.a.createElement("input",{type:"text",required:!0,id:"name",placeholder:"Enter Full Name",value:s,onChange:function(e){return m(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email:"),r.a.createElement("input",{type:"email",required:!0,id:"email",placeholder:"Email address",value:f,onChange:function(e){return E(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Password:"),r.a.createElement("input",{type:"password",required:!0,minLength:"6",id:"password",autoComplete:"true",placeholder:"Enter password",value:N,onChange:function(e){return O(e.target.value)}})),r.a.createElement("button",{type:"submit",className:"btn btn-primary button-sub"}," ","Save Changes"))))))))))},w=function(){var e=Object(n.useContext)(h)._id,t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(""),m=Object(o.a)(s,2),i=m[0],d=m[1],f=Object(n.useState)(""),E=Object(o.a)(f,2),v=E[0],g=E[1],j=Object(n.useState)(!1),O=Object(o.a)(j,2),w=O[0],y=O[1],S=function(){var t=Object(p.a)(u.a.mark(function t(a){var n,r,l,o;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n={header:{"Content-Type":"application/json"}},(r=new FormData).append("image",c),t.prev=4,t.next=7,b.a.put("/api/users/".concat(e,"/updatepic"),r,n);case 7:l=t.sent,o=l.data,console.log(o),window.location.reload(),g("Image Updated"),setTimeout(function(){g("")},5e3),t.next=20;break;case 15:t.prev=15,t.t0=t.catch(4),d("File not supported"),console.log(t.t0),setTimeout(function(){d("")},5e3);case 20:case"end":return t.stop()}},t,null,[[4,15]])}));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-block mt-2",onClick:function(){return y(!0)}},"Update Image")),r.a.createElement(N.a,{show:w,onHide:function(){return y(!1)}},r.a.createElement(N.a.Header,{closeButton:!0},r.a.createElement(N.a.Title,null,"Update Image")),r.a.createElement(N.a.Body,null,r.a.createElement("form",{onSubmit:S,encType:"multipart/form-data"},i&&r.a.createElement("span",{className:"error-message"},i),v&&r.a.createElement("span",{className:"success-message"},v),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"file"},"Choose Image File:"),r.a.createElement("input",{type:"file",filename:"image",className:"form-control-file",onChange:function(e){l(e.target.files[0])}})),r.a.createElement("button",{type:"submit",className:"btn btn-block"},"Update")))))},y=function(e){var t=e.getUsername,a=Object(m.f)(),c=Object(n.useState)(""),l=Object(o.a)(c,2),s=l[0],i=l[1],d=Object(n.useState)({username:"",_id:"",email:"",teams:"",userCreated:""}),f=Object(o.a)(d,2),E=f[0],v=f[1];return Object(n.useEffect)(function(){localStorage.getItem("authToken")||(i("You are not authorized please login! redirecting to login"),setTimeout(function(){a.push("/login")},2e3)),function(){var e=Object(p.a)(u.a.mark(function e(){var n,r,c;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("authToken"))}},e.prev=1,e.next=4,b.a.get("/api/private",n);case 4:r=e.sent,c=r.data,v(c),t(c.username),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(1),localStorage.removeItem("authToken"),i("You are not authorized please login! Redirecting to login"),setTimeout(function(){a.push("/login")},2e3);case 15:case"end":return e.stop()}},e,null,[[1,10]])}));return function(){return e.apply(this,arguments)}}()()},[a]),s?r.a.createElement("div",{className:"alert alert-danger",role:"alert"},s):r.a.createElement(h.Provider,{value:E},r.a.createElement("div",{className:"container"},r.a.createElement(O,null)))};a(32),a(73);var S=function(e){var t=e.myTeams;return r.a.createElement("div",{className:"mt-3"},t.map(function(e){return r.a.createElement(s.b,{className:"card-link",to:{pathname:"/portal/".concat(e._id),state:{team:e}},key:e._id},r.a.createElement("div",{className:"team-card"},r.a.createElement("div",{className:"row text-center mb-2 p-3"},r.a.createElement("div",{className:"col-4"},r.a.createElement("img",{className:"teamcard-img",src:"/uploads/".concat(e.teamImage),alt:""})),r.a.createElement("div",{className:"col-4"},r.a.createElement("p",{className:"mt-3"},e.teamName)),r.a.createElement("div",{className:"col-4"},r.a.createElement("p",{className:"mt-3"},e.sport)))))}))};function T(e){var t=e.getShowTeams,a=Object(n.useContext)(h)._id,c=Object(n.useState)(""),l=Object(o.a)(c,2),s=l[0],m=l[1],i=Object(n.useState)(""),d=Object(o.a)(i,2),f=d[0],E=d[1],v=Object(n.useState)(""),g=Object(o.a)(v,2),N=g[0],j=g[1],O=function(){var e=Object(p.a)(u.a.mark(function e(n){var r;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r={header:{"Content-Type":"application/json"}},e.prev=2,e.next=5,b.a.post("/api/teams/createteam",{_id:a,teamName:s,sport:f},r);case 5:t(!0),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0),j(e.t0.response.data.error),setTimeout(function(){j("")},5e3);case 13:case"end":return e.stop()}},e,null,[[2,8]])}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,N&&r.a.createElement("span",{className:"error-message"},N),r.a.createElement("div",{className:"text-center mt-4"},r.a.createElement("h3",null,"Please Enter The Team Information"),r.a.createElement("form",{onSubmit:O,className:"add-team-form"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",id:"team-name",placeholder:"Team Name",onChange:function(e){return m(e.target.value)},required:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",id:"sport",placeholder:"Sport",onChange:function(e){return E(e.target.value)},required:!0})),r.a.createElement("button",{className:"btn btn-block",type:"submit"},"Create Team"))))}var x=function(){var e=window.location.pathname,t=e.substring(e.lastIndexOf("/")+1),a=Object(m.f)(),c=Object(n.useState)(""),l=Object(o.a)(c,2),s=l[0],i=l[1],u=Object(n.useState)(""),p=Object(o.a)(u,2),d=p[0],f=p[1],E=Object(n.useState)(""),v=Object(o.a)(E,2),g=v[0],h=v[1],j=Object(n.useState)(""),O=Object(o.a)(j,2),w=O[0],y=O[1],S=Object(n.useState)(""),T=Object(o.a)(S,2),x=T[0],k=T[1],C=Object(n.useState)(!1),I=Object(o.a)(C,2),_=I[0],F=I[1];return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-block mt-2",onClick:function(){return F(!0)}},"Update Team")),r.a.createElement(N.a,{show:_,onHide:function(){return F(!1)}},r.a.createElement(N.a.Header,{closeButton:!0},r.a.createElement(N.a.Title,null,"Update Team")),r.a.createElement(N.a.Body,null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var n={header:{"Content-Type":"application/json"}},r=new FormData;r.append("sport",d),r.append("teamName",s),r.append("teamImage",g),g?b.a.put("/api/teams/".concat(t,"/update"),r,n).then(function(){k("Post Added Successfully"),setTimeout(function(){k("")},3e3),a.push("/portal")}).catch(function(e){y("Image Required/ File Unsupported"),e&&setTimeout(function(){y("")},3e3)}):b.a.put("/api/teams/".concat(t,"/updatenp"),{teamName:s,sport:d},n).then(function(){k("Team Updated Successfully"),setTimeout(function(){k("")},3e3),a.push("/portal")}).catch(function(e){y(e),e&&setTimeout(function(){y("")},3e3)})},encType:"multipart/form-data"},w&&r.a.createElement("span",{className:"error-message"},w),x&&r.a.createElement("span",{className:"success-message"},x),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Team Name:"),r.a.createElement("input",{type:"text",required:!0,id:"teamName",placeholder:"Enter Team Name",value:s,onChange:function(e){return i(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Sport:"),r.a.createElement("input",{type:"text",required:!0,id:"sport",placeholder:"Enter Sport",value:d,onChange:function(e){return f(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"file"},"Choose Image File:"),r.a.createElement("input",{type:"file",filename:"teamImage",className:"form-control-file",onChange:function(e){h(e.target.files[0])}})),r.a.createElement("button",{type:"submit",className:"btn btn-block"},"Update")))))},k=function(){var e=window.location.pathname,t=e.substring(e.lastIndexOf("/")+1),a=Object(m.f)(),c=Object(n.useState)(!1),l=Object(o.a)(c,2),s=l[0],i=l[1],u=function(){return i(!1)};return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-block mt-2",onClick:function(){return i(!0)}},"Delete Team")),r.a.createElement(N.a,{show:s,onHide:u},r.a.createElement(N.a.Header,{closeButton:!0},r.a.createElement(N.a.Title,null,"Confirmation")),r.a.createElement(N.a.Body,null,"Are you sure you want to delete this team?"),r.a.createElement(N.a.Footer,null,r.a.createElement("button",{variant:"secondary",className:"btn",onClick:u}," Close"),r.a.createElement("button",{variant:"primary",className:"btn",onClick:function(e){e.preventDefault(),b.a.delete("/api/teams/delete/".concat(t)).then(function(){a.push("/portal")}).catch(function(e){return console.log(e)})}},"Delete Team"))))};var C=function(){var e=Object(n.useContext)(h)._id,t=Object(n.useState)(!0),a=Object(o.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)([]),m=Object(o.a)(s,2),i=m[0],u=m[1],p=Object(n.useState)(""),d=Object(o.a)(p,2),f=d[0],E=d[1];Object(n.useEffect)(function(){v()},[e,c]);var v=function(){e&&b.a.get("/api/users/".concat(e,"/teams")).then(function(e){return u(e.data.teams)})};return r.a.createElement("div",{className:"container mt-3"},c&&r.a.createElement("div",{className:"text-right"},r.a.createElement("button",{className:"btn",onClick:function(){return l(!1)}},"Create Team")),f&&r.a.createElement("div",{className:"alert alert-success"},f),c&&r.a.createElement(S,{myTeams:i}),!c&&r.a.createElement(T,{getShowTeams:function(e){l(e),E("Team Created"),setTimeout(function(){E("")},3e3)}}))},I=function(e){var t=e.getUsername,a=Object(m.f)(),c=Object(n.useState)(""),l=Object(o.a)(c,2),s=l[0],i=l[1],d=Object(n.useState)({username:"",_id:"",email:"",teams:"",userCreated:""}),f=Object(o.a)(d,2),E=f[0],v=f[1];return Object(n.useEffect)(function(){localStorage.getItem("authToken")||(i("You are not authorized please login! redirecting to login"),setTimeout(function(){a.push("/login")},2e3)),function(){var e=Object(p.a)(u.a.mark(function e(){var n,r,c;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("authToken"))}},e.prev=1,e.next=4,b.a.get("/api/private",n);case 4:r=e.sent,c=r.data,v(c),t(c.username),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(1),localStorage.removeItem("authToken"),i("You are not authorized please login! Redirecting to login"),setTimeout(function(){a.push("/login")},2e3);case 15:case"end":return e.stop()}},e,null,[[1,10]])}));return function(){return e.apply(this,arguments)}}()()},[a]),s?r.a.createElement("div",{className:"alert alert-danger",role:"alert"},s):r.a.createElement(h.Provider,{value:E},r.a.createElement("div",null,r.a.createElement(C,null)))},_=(a(33),function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"orange"},r.a.createElement("div",{id:"titlebox"},r.a.createElement("h1",{id:"title"},"TEAM")),r.a.createElement("div",{id:"buttoncontainer"},r.a.createElement(s.b,{to:"/register",className:"mr-4"},r.a.createElement("button",{className:"button",type:"button"},"Sign Up")),r.a.createElement("br",null),r.a.createElement(s.b,{to:"/login",className:"mr-4"},r.a.createElement("button",{className:"button"},"Login ")," "))))});var F=function(e){var t=e.username,a=Object(m.g)();return r.a.createElement("div",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(s.b,{className:"navbar-brand",to:localStorage.getItem("authToken")?"/portal":"/"},"My Team"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},localStorage.getItem("authToken")&&r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement(s.b,{to:"#",className:"/profile"===a.pathname?"dropdown-toggle nav-link  active":"dropdown-toggle nav-link",id:"navbarDropdownMenuLink",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Hi ",t,"!"),r.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown"},r.a.createElement(s.b,{className:"dropdown-item",to:"/profile"},"Profile"))),r.a.createElement("li",{className:"nav-item "},r.a.createElement(s.b,{className:"/portal"===a.pathname?"nav-link active":"nav-link",to:"/portal"},"Teams ",r.a.createElement("span",{className:"sr-only"}))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{className:"nav-link",to:"/",onClick:function(){localStorage.removeItem("authToken")}},"Logout"))),!localStorage.getItem("authToken")&&r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item "},r.a.createElement(s.b,{className:"/login"===a.pathname?"nav-link active":"nav-link",to:"/login"},"Login ",r.a.createElement("span",{className:"sr-only"}))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(s.b,{className:"/register"===a.pathname?"nav-link active":"nav-link",to:"/register"},"Register")))))};var P=function(e){var t=e.teamId,a=e.addedPlayers,c=Object(n.useState)(""),l=Object(o.a)(c,2),s=l[0],m=l[1],i=Object(n.useState)(""),u=Object(o.a)(i,2),p=u[0],d=u[1],f=Object(n.useState)(""),E=Object(o.a)(f,2),v=E[0],g=E[1];return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),b.a.post("/api/teams/addmember",{searchInput:s,teamId:t}).then(function(e){a(!0),"Member Added"===e.data?(d(e.data),setTimeout(function(){d("")},2e3),m("")):(g(e.data),setTimeout(function(){g("")},2e3))}).catch(function(e){return console.log(e)})}},r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Player email",value:s,onChange:function(e){m(e.target.value)},required:!0})),r.a.createElement("div",{className:"mt-2"},p&&r.a.createElement("div",{className:"alert alert-success"},p),v&&r.a.createElement("div",{className:"alert alert-danger"},v)))},A=function(e){var t=e.newPostModel,a=e.updateNewPostModel,c=window.location.pathname,l=c.substring(c.lastIndexOf("/")+1),s=Object(n.useState)(""),m=Object(o.a)(s,2),i=m[0],u=m[1],p=Object(n.useState)(""),d=Object(o.a)(p,2),f=d[0],E=d[1],v=Object(n.useState)(""),g=Object(o.a)(v,2),h=g[0],j=g[1],O=Object(n.useState)(""),w=Object(o.a)(O,2),y=w[0],S=(w[1],Object(n.useState)("")),T=Object(o.a)(S,2),x=T[0],k=T[1],C=Object(n.useState)(""),I=Object(o.a)(C,2),_=I[0],F=I[1];return r.a.createElement("div",null,r.a.createElement(N.a,{size:"lg",show:t,onHide:function(){return a(!1)},"aria-labelledby":"example-modal-sizes-title-lg"},r.a.createElement(N.a.Header,{closeButton:!0},r.a.createElement(N.a.Title,null,"Add New Post")),r.a.createElement(N.a.Body,null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={header:{"Content-Type":"application/json"}},n=new FormData;n.append("title",i),n.append("postAuthor",h),n.append("post",f),n.append("postFile",_),_?b.a.post("/api/posts/addpost/".concat(l),n,t).then(function(){a(!1)}).catch(function(e){k("Image Required/ File Unsupported"),e&&setTimeout(function(){k("")},2e3)}):b.a.post("/api/posts/addnew/".concat(l),{title:i,postAuthor:h,post:f},t).then(function(){return a(!1)}).catch(function(e){k(e),e&&setTimeout(function(){k("")},2e3)})},encType:"multipart/form-data"},x&&r.a.createElement("span",{className:"error-message"},x),y&&r.a.createElement("span",{className:"success-message"},y),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",value:i,placeholder:"Enter Title",onChange:function(e){return u(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Author"),r.a.createElement("input",{type:"text",required:!0,id:"postAuthor",placeholder:"Author",value:h,onChange:function(e){return j(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"password"},"Post:"),r.a.createElement("textarea",{className:"form-control",required:!0,placeholder:"Enter post here...",value:f,rows:"10",onChange:function(e){return E(e.target.value)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"file"},"Choose Image File: (optional)"),r.a.createElement("input",{type:"file",filename:"postFile",className:"form-control-file",onChange:function(e){F(e.target.files[0])}})),r.a.createElement("button",{type:"submit",className:"btn btn-block"}," "," "," Add Post ")))))},q=function(){var e=Object(m.f)(),t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(""),i=Object(o.a)(s,2),u=i[0],p=i[1],d=Object(n.useState)(""),f=Object(o.a)(d,2),E=f[0],v=f[1],g=Object(n.useState)(""),h=Object(o.a)(g,2),N=h[0],j=h[1],O=window.location.pathname,w=O.substring(O.lastIndexOf("/")+1),y=O.split("/").slice(-2).join("/");return Object(n.useEffect)(function(){b.a.get("/api/posts/getpost/".concat(w)).then(function(e){return[console.log(e),l(e.data.title),v(e.data.postAuthor),p(e.data.post),j(e.data.postFile)]})},[]),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h1",{className:"display-4"},c),r.a.createElement("span",null,"Written by: ",E),r.a.createElement("p",null,u),r.a.createElement("div",null,N&&N.endsWith("mp4")?r.a.createElement("video",{controls:!0,loop:!0,muted:!0,width:"75%"},r.a.createElement("source",{src:"/uploads/".concat(N),type:"video/mp4"}),"Your browser does not support the video tag. I suggest you upgrade your browser."):r.a.createElement("img",{src:"/uploads/".concat(N),alt:""})),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.go(-1)}},"Back")),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-primary",onClick:function(){b.a.delete("/api/posts/".concat(y)).then(function(e){return console.log(e.data)}),e.go(-1)}},"Delete Post")))))},D=function(){var e=window.location.pathname,t=e.substring(e.lastIndexOf("/")+1),a=Object(n.useState)([]),c=Object(o.a)(a,2),l=c[0],m=c[1],i=Object(n.useState)(!1),u=Object(o.a)(i,2),p=u[0],d=u[1];Object(n.useEffect)(function(){f()},[p]);var f=function(){b.a.get("/api/posts/getposts/team/".concat(t)).then(function(e){return m(e.data.posts)}).catch(function(e){return console.log(e)})};return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("button",{className:"btn",onClick:function(){return d(!0)}},"Add Post")),p&&r.a.createElement(A,{newPostModel:p,updateNewPostModel:function(e){d(e)}}),l.map(function(e,a){return r.a.createElement("div",{className:"card  register-screen__form w-100",key:a},r.a.createElement("div",{className:"card-body"},r.a.createElement(s.b,{to:"/view/".concat(t,"/").concat(e._id)}," ",r.a.createElement("h3",null,e.title)," "),r.a.createElement("span",{className:"card-text"},"posted by: ",e.postAuthor),r.a.createElement("p",null,r.a.createElement("span",{className:"card-text"},"post date: ",e.timestamp))))}).reverse())};var U=function(e){var t=e.location,a=(e.history,t.state.team),c=Object(n.useState)([]),l=Object(o.a)(c,2),s=l[0],m=l[1],i=Object(n.useState)(!1),u=Object(o.a)(i,2),p=u[0],d=u[1],f=Object(n.useState)(""),E=Object(o.a)(f,2),v=E[0],g=E[1];return Object(n.useEffect)(function(){a._id&&b.a.get("/api/teams/".concat(a._id,"/players")).then(function(e){return m(e.data.players)}).catch(function(e){return console.log(e)})},[a._id,p]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"text"},a.teamName),r.a.createElement("div",{className:"row gutters-sm"},r.a.createElement("div",{className:"col-md-4 mb-3"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"d-flex flex-column align-items-center text-center "},r.a.createElement("img",{src:"/uploads/".concat(a.teamImage),alt:"",className:"img-fluid"}),r.a.createElement(x,null)))),r.a.createElement("div",{className:"card mt-3"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h3",null,"Team Roster"),s.map(function(e){return r.a.createElement("div",{key:e.player._id,className:"card my-2"},r.a.createElement("div",{className:"d-flex p-2"},r.a.createElement("div",null,e.player.username,e.isAdmin&&r.a.createElement("span",null," (Admin)")),r.a.createElement("div",{className:"far fa-trash-alt ml-auto mt-1",onClick:function(){return t=e.player._id,void b.a.delete("/api/teams/deletemember/"+t,{data:{teamId:a._id}}).then(function(e){d(!0),g(e.data),setTimeout(function(){g("")},2e3)}).catch(function(e){return console.log(e)});var t}})))}),v&&r.a.createElement("div",{className:"alert alert-danger"},v),r.a.createElement("hr",null),r.a.createElement("div",{className:"mt-3"},r.a.createElement("h3",null,"Add Players"),r.a.createElement(P,{teamId:a._id,addedPlayers:function(e){d(!0),setTimeout(function(){d(!1)},100)}})))),r.a.createElement("div",{className:"card-mt-3"},r.a.createElement("div",{className:"text-right "},r.a.createElement(k,null)))),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"card mb-3"},r.a.createElement("h3",{className:"text"},"Team Posts"),r.a.createElement("div",{className:"card-body"},r.a.createElement(A,null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12 text-secondary"},r.a.createElement("div",null,r.a.createElement(D,null))))))))))},B=function(){var e=Object(m.f)(),t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)(function(){localStorage.getItem("authToken")||(l("You are not authorized please login! redirecting to login"),setTimeout(function(){e.push("/login")},2e3)),function(){var t=Object(p.a)(u.a.mark(function t(){var a,n,r;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a={headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("authToken"))}},t.prev=1,t.next=4,b.a.get("/api/private",a);case 4:n=t.sent,r=n.data,console.log(r),t.next=14;break;case 9:t.prev=9,t.t0=t.catch(1),localStorage.removeItem("authToken"),l("You are not authorized please login! Redirecting to login"),setTimeout(function(){e.push("/login")},2e3);case 14:case"end":return t.stop()}},t,null,[[1,9]])}));return function(){return t.apply(this,arguments)}}()()},[e]),c?r.a.createElement("div",{className:"alert alert-danger",role:"alert"},c):r.a.createElement("div",null,r.a.createElement(q,null))},z=function(){return r.a.createElement("div",{class:"page-wrap d-flex flex-row align-items-center"},r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"row justify-content-center"},r.a.createElement("div",{class:"col-md-12 text-center"},r.a.createElement("span",{class:"display-1 d-block"},"404"),r.a.createElement("div",{class:"mb-4 lead"},"The page you are looking for was not found."),r.a.createElement("a",{href:"/portal",class:"btn btn-link"},"Back to Home")))))};a(74);var H=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,"Group2-project3 \xa9 2021"))},R=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],l=function(e){c(e)};return r.a.createElement(s.a,null,r.a.createElement("div",{className:"app"},r.a.createElement(F,{username:a}),r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/",component:_}),r.a.createElement(m.a,{exact:!0,path:"/portal"},r.a.createElement(I,{getUsername:l})),r.a.createElement(m.a,{path:"/login",component:f}),r.a.createElement(m.a,{path:"/register",component:E}),r.a.createElement(m.a,{path:"/forgotpassword",component:v}),r.a.createElement(m.a,{exact:!0,path:"/passwordreset/:resetToken",component:g}),r.a.createElement(m.a,{exact:!0,path:"/portal/:myteam",component:U}),r.a.createElement(m.a,{exact:!0,path:"/passwordreset/:resetToken",component:g}),r.a.createElement(m.a,{path:"/profile"},r.a.createElement(y,{getUsername:l})),r.a.createElement(m.a,{exact:!0,path:"/view/:teamid/:id"},r.a.createElement(B,{username:a})),r.a.createElement(m.a,{path:"*",component:z})),r.a.createElement(H,null)))};l.a.render(r.a.createElement(R,null),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.ea14f8d1.chunk.js.map