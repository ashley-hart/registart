(this.webpackJsonpregistart=this.webpackJsonpregistart||[]).push([[0],{40:function(e,n,t){e.exports=t.p+"static/media/logo2.47bc71e2.svg"},41:function(e,n,t){e.exports=t.p+"static/media/aboutmepic.5e49787e.jpg"},42:function(e,n,t){e.exports=t(71)},47:function(e,n,t){},49:function(e,n,t){},71:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(14),l=t.n(o),i=(t(47),t(3)),c=t.n(i),u=t(7),m=t(11),p=(t(49),t(1)),d=t(2),s=t(22),f=t(15);function g(){var e=Object(p.a)(["\n  border-radius: 4px;\n  background: #256ce1;\n  padding: 10px 22px;\n  color: #fff;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n  text-decoration: none;\n\n  &:hover {\n    transition: all 0.2s ease-in-out;\n    background: #fff;\n    color: #010606;\n  }\n"]);return g=function(){return e},e}function b(){var e=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  margin-right: 20px;\n\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]);return b=function(){return e},e}function E(){var e=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  margin-right: -24px;\n\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]);return E=function(){return e},e}function h(){var e=Object(p.a)(["\n  display: none;\n  color: #fff;\n\n  @media screen and (max-width: 768px) {\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    transform: translate(-100%, 75%);\n    font-size: 1.8rem;\n    cursor: pointer;\n  }\n"]);return h=function(){return e},e}function x(){var e=Object(p.a)(["\n  color: #fff;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  padding: 0 1rem;\n  height: 100%;\n  cursor: pointer;\n\n  &.active {\n    color: #15cdfc;\n  }\n"]);return x=function(){return e},e}function v(){var e=Object(p.a)(["\n  background: #000;\n  height: 80px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: space-between;\n  padding: 0.5rem calc((100vx - 1000px) / 2);\n  z-index: 10;\n  position: sticky;\n"]);return v=function(){return e},e}var y=d.a.nav(v()),w=Object(d.a)(s.b)(x()),j=Object(d.a)(f.a)(h()),O=d.a.div(E()),k=d.a.nav(b()),S=Object(d.a)(s.b)(g()),N=t(40),F=t.n(N),T=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,null,r.a.createElement(w,{to:"/"},r.a.createElement("img",{src:F.a,alt:"Logo"})),r.a.createElement(j,null),r.a.createElement(O,null,r.a.createElement(w,{to:"/about",activeStyle:!0},"About"),r.a.createElement(w,{to:"/contact",activeStyle:!0},"Contact"),r.a.createElement(w,{to:"/retcode"},"Enter Retrieval Code")),r.a.createElement(k,null,r.a.createElement(S,{to:"/signin"},"Sign In"))))},q=t(4),z=t(6),A=t.n(z),C=t(13);function D(){var e=Object(p.a)(["\n  margin: 5px 3px 0px 3px;\n  font-size: 1rem;\n  font-weight: bold;\n  display: block;\n  float: left;\n"]);return D=function(){return e},e}function I(){var e=Object(p.a)(['\n  font-family: "Roboto", sans-serif;\n  font-size: 1.3rem;\n  border: 50px;\n  border-color: black;\n  border-radius: 5px;\n  margin: 10px 5px;\n  padding: 7px 10px;\n  width: 25%;\n  background: #0266f2;\n  color: white;\n  &:hover {\n    background: #0244a1;\n  }\n']);return I=function(){return e},e}function P(){var e=Object(p.a)(["\n  resize: none;\n  box-sizing: border-box;\n  width: 75%;\n  height: 200px;\n  font-size: 1rem;\n  padding: 10px 20px;\n  margin: 10px;\n  border: 5px black;\n  border-color: black;\n  border-radius: 4px;\n"]);return P=function(){return e},e}function R(){var e=Object(p.a)(["\n  width: 75%;\n  font-size: 1rem;\n  padding: 10px 20px;\n  margin: 10px 5px 25px 5px;\n  border: 5px black;\n  border-color: black;\n  border-radius: 4px;\n"]);return R=function(){return e},e}function U(){var e=Object(p.a)(["\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  \n"]);return U=function(){return e},e}function B(){var e=Object(p.a)(["\n  width: 50%;\n  flex-direction: column;\n  background-color: rgba(0,0,0,.5);\n  border-radius: 5px;\n  padding: 10px;\n  margin: 0 auto;\n"]);return B=function(){return e},e}function M(){var e=Object(p.a)(["\n  font-size: 1.5rem;\n  margin-bottom: 20px;\n"]);return M=function(){return e},e}var W=d.a.h2(M()),_=d.a.div(B()),J=d.a.form(U()),L=d.a.input(R()),G=d.a.textarea(P()),H=d.a.button(I()),V=d.a.label(D()),Y=function(){var e=Object(C.a)(),n=e.register,t=e.handleSubmit,a=function(e){var n=e.name.substring(0,1)+e.email.substring(0,4)+e.date.substring(5,9);return n+=Math.floor(100*Math.random()+1).toString(),console.log("Ret Code Generated: "+n),n};return r.a.createElement(r.a.Fragment,null,r.a.createElement(W,null,"Set an Appointment"),r.a.createElement(_,null,r.a.createElement(J,{onSubmit:t((function(e){var n={name:e.name,email:e.email,date:e.date,time:e.time,phoneNumber:e.phoneNumber,apptType:e.apptType,notes:e.notes,code:a(e)};console.log("Posting: "+JSON.stringify(n)),A.a.post("http://localhost:5000/editor/add",n).then((function(e){return console.log(e.data)})),alert("IMPORTANT: Write down your retrieval code in case you want to make changes!\n"+n.code),window.location.reload()}))},r.a.createElement(V,{htmlFor:"name"},"Name"),r.a.createElement(L,{type:"text",name:"name",ref:n({required:!0})}),r.a.createElement(V,{htmlFor:"email"},"E-mail"),r.a.createElement(L,{type:"text",name:"email",ref:n({required:!0})}),r.a.createElement(V,{htmlFor:"date"},"Date"),r.a.createElement(L,{type:"date",name:"date",ref:n({required:!0})}),r.a.createElement(V,{htmlFor:"time"},"Time"),r.a.createElement(L,{type:"time",name:"time",step:"3600",min:"9:00",max:"18:00",ref:n({required:!0})}),r.a.createElement(V,{htmlFor:"phoneNumber"},"Phone Number"),r.a.createElement(L,{type:"tel",name:"phoneNumber",defaultValue:"000-000-0000",pattern:"[0-9]{3}-[0-9]{3}-[0-9]{4}",ref:n({required:!0})}),r.a.createElement(V,{htmlFor:"apptType"},"Appointment Type"),r.a.createElement(L,{type:"text",name:"apptType",ref:n({required:!0})}),r.a.createElement(V,{htmlFor:"notes"},"Notes"),r.a.createElement(G,{type:"input",name:"notes",ref:n({required:!0})}),r.a.createElement(H,{type:"submit"},"Submit"))))};function Q(){var e=Object(p.a)(['\n  font-family: "Roboto", sans-serif;\n  font-size: 1.3rem;\n  border: 50px;\n  border-color: black;\n  border-radius: 5px;\n  padding: 7px 10px;\n  width: 25%;\n  background: #0266f2;\n  color: white;\n  &:hover {\n    background: #0244a1;\n  }\n']);return Q=function(){return e},e}function $(){var e=Object(p.a)(["\n  /* width: 50%; */\n  max-width: 300px;\n  max-height: 50%;\n  border-radius: 3px;\n"]);return $=function(){return e},e}function K(){var e=Object(p.a)(["\n    margin: 30px 40px;\n"]);return K=function(){return e},e}function X(){var e=Object(p.a)(["\n    flex-direction: 'column';\n    padding: '10px';\n    margin: 30px 5px 20px 5px;\n"]);return X=function(){return e},e}function Z(){var e=Object(p.a)(["\n    /* margin: 0px 75px; */\n    background-color: #0c0a09;\n    display: flex;\n    flex-direction: column; \n    justify-content: center;\n    align-items: center;\n"]);return Z=function(){return e},e}function ee(){var e=Object(p.a)(["\n    /* height: 100%; */\n    color: white;\n    justify-content: center;\n    align-items: center;\n"]);return ee=function(){return e},e}var ne=d.a.div(ee()),te=d.a.div(Z()),ae=d.a.h1(X()),re=d.a.p(K()),oe=d.a.img($()),le=(d.a.button(Q()),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ne,null,r.a.createElement(te,null,r.a.createElement(ae,null,"Hi, there!"),r.a.createElement(re,null,"Welcome to Registart! I am so glad you are here! Please use the following form to set an appointment with me. I am looking forward to getting in touch!"),r.a.createElement(Y,null))))}),ie=t(41),ce=t.n(ie),ue=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ne,null,r.a.createElement(te,null,r.a.createElement(ae,null,"About Me"),r.a.createElement(oe,{src:ce.a}),r.a.createElement(re,null,"Ashley is a student at the University of Florida. She enjoys writing, reading, art, and writing code!"))))};function me(){var e=Object(p.a)(["\n  margin: 5px 3px 0px 3px;\n  font-size: 1rem;\n  font-weight: bold;\n  display: block;\n  float: left;\n"]);return me=function(){return e},e}function pe(){var e=Object(p.a)(['\n  font-family: "Roboto", sans-serif;\n  font-size: 1.3rem;\n  border: 50px;\n  border-color: black;\n  border-radius: 5px;\n  margin: 10px 5px;\n  padding: 7px 10px;\n  width: 25%;\n  background: #0266f2;\n  color: white;\n  &:hover {\n    background: #0244a1;\n  }\n']);return pe=function(){return e},e}function de(){var e=Object(p.a)(["\n  resize: none;\n  box-sizing: border-box;\n  width: 75%;\n  height: 200px;\n  font-size: 1rem;\n  padding: 10px 20px;\n  margin: 10px;\n  border: 5px black;\n  border-color: black;\n  border-radius: 4px;\n"]);return de=function(){return e},e}function se(){var e=Object(p.a)(["\n  width: 75%;\n  font-size: 1rem;\n  padding: 10px 20px;\n  margin: 10px 5px 25px 5px;\n  border: 5px black;\n  border-color: black;\n  border-radius: 4px;\n"]);return se=function(){return e},e}function fe(){var e=Object(p.a)(["\n  list-style-type: none;\n"]);return fe=function(){return e},e}function ge(){var e=Object(p.a)(['\n  display: flex;\n  padding: 10px;\n  margin: 10px;\n  width: 100%;\n  height: 30%;\n  /* position: relative; */\n  font-family: "Roboto", sans-serif;\n  font-size: 1.5rem;\n  color: white;\n  border: none;\n  border-radius: 3px;\n  text-align: center;\n  text-decoration: none;\n  align-items: center;\n  justify-content: center;\n  background-color: green;\n  cursor: pointer;\n']);return ge=function(){return e},e}function be(){var e=Object(p.a)(['\n  display: flex;\n  padding: 10px;\n  margin: 10px;\n  width: 100%;\n  height: 30%;\n  /* position: relative; */\n  font-family: "Roboto", sans-serif;\n  font-size: 1.8rem;\n  color: white;\n  border: none;\n  border-radius: 3px;\n  text-align: center;\n  text-decoration: none;\n  align-items: center;\n  justify-content: center;\n  background-color: red;\n  cursor: pointer;\n']);return be=function(){return e},e}function Ee(){var e=Object(p.a)(["\n  align-items: end;\n  /* padding: 5px; */\n"]);return Ee=function(){return e},e}function he(){var e=Object(p.a)(["\n  color: white;\n"]);return he=function(){return e},e}function xe(){var e=Object(p.a)(['\n  padding: 10px;\n  margin: 10px;\n  font-family: "Roboto", sans-serif;\n  font-size: 1.2rem;\n  word-wrap: normal;\n  /* width: 50%; */\n']);return xe=function(){return e},e}function ve(){var e=Object(p.a)(["\n  position: relative;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  background-color: #0244a1;\n  width: 70%;\n  padding: 15px 60px;\n  margin: 20px 100px;\n  border-radius: 5px;\n  transition: all 0.2s ease-in-out;\n\n  &:hover {\n    background-color: #0266f2;\n    transition: all 0.2s ease-in-out;\n  }\n"]);return ve=function(){return e},e}function ye(){var e=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border-radius: 10px;\n  background-color: rgba(0,0,0,.5);\n  margin: 10px;\n"]);return ye=function(){return e},e}function we(){var e=Object(p.a)(["\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  \n"]);return we=function(){return e},e}function je(){var e=Object(p.a)(['\n  flex: 1;\n  flex-direction: "column";\n  padding: "10%";\n  /* background-color: #adcfff; */\n  padding: 10px;\n']);return je=function(){return e},e}function Oe(){var e=Object(p.a)(["\n  font-size: 1.5rem;\n  color: white;\n  margin-bottom: 20px;\n"]);return Oe=function(){return e},e}var ke=d.a.h2(Oe()),Se=d.a.div(je()),Ne=d.a.form(we()),Fe=d.a.div(ye()),Te=d.a.div(ve()),qe=d.a.div(xe()),ze=d.a.p(he()),Ae=d.a.div(Ee()),Ce=d.a.button(be()),De=d.a.button(ge()),Ie=d.a.ul(fe()),Pe=d.a.input(se()),Re=d.a.textarea(de()),Ue=d.a.button(pe()),Be=d.a.label(me()),Me=function(e){var n=Object(C.a)(),t=n.register,a=n.handleSubmit;console.log(e.appt),console.log("id recieved! "+e.appt._id);return r.a.createElement(r.a.Fragment,null,r.a.createElement(ke,null,"Enter Your Updated Information!"),r.a.createElement(Se,null,r.a.createElement(Ne,{onSubmit:a((function(n){var t={name:n.name,email:n.email,date:n.date,time:n.time,phoneNumber:n.phoneNumber,apptType:n.apptType,notes:n.notes,code:e.appt.retCode};console.log("Posting: "+JSON.stringify(t)),console.log("http://localhost:5000/update/"+e.appt._id),A.a.post("http://localhost:5000/editor/update/"+e.appt._id,t).then((function(e){return console.log(e.data)})),alert("IMPORTANT: Write down your retrieval code in case you want to make changes!\n"+t.code),window.location.reload()}))},r.a.createElement(Be,{htmlFor:"name"},"Name"),r.a.createElement(Pe,{type:"text",name:"name",ref:t({required:!0})}),r.a.createElement(Be,{htmlFor:"email"},"E-mail"),r.a.createElement(Pe,{type:"text",name:"email",ref:t({required:!0})}),r.a.createElement(Be,{htmlFor:"date"},"Date"),r.a.createElement(Pe,{type:"date",name:"date",ref:t({required:!0})}),r.a.createElement(Be,{htmlFor:"time"},"Time"),r.a.createElement(Pe,{type:"time",name:"time",step:"3600",min:"9:00",max:"18:00",ref:t({required:!0})}),r.a.createElement(Be,{htmlFor:"phoneNumber"},"Phone Number"),r.a.createElement(Pe,{type:"tel",name:"phoneNumber",value:"###-###-####",pattern:"[0-9]{3}-[0-9]{3}-[0-9]{4}",ref:t({required:!0})}),r.a.createElement(Be,{htmlFor:"apptType"},"Appointment Type"),r.a.createElement(Pe,{type:"text",name:"apptType",ref:t({required:!0})}),r.a.createElement(Be,{htmlFor:"notes"},"Notes"),r.a.createElement(Re,{type:"input",name:"notes",ref:t({required:!0})}),r.a.createElement(Ue,{type:"submit"},"Submit"))))};var We=function(e){console.log("Appointment module recieved:"),console.log(e.appt);var n=function(){var n=e.appt._id;console.log("Delete appointment recieved: "),console.log(n),!0===window.confirm("Do you want to delete this appointment?")?(A.a.delete("http://localhost:5000/editor/"+n).then((function(e){return console.log(e.data)})),window.location.reload()):console.log("Opted out of page reload.")},t=function(){console.log("updateAppointment received:"),console.log(e.appt),!0===window.confirm("Do you want to update this appointment?")?(console.log("Updating appointment entry!"),l.a.render(r.a.createElement(Me,{appt:e.appt}),document.getElementById("formSpace"))):console.log("Opted out of page reload.")};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"formSpace"}),r.a.createElement("div",null,function(){var a=Date(e.appt.date);return console.log(a),0!==e.length?r.a.createElement("div",null,r.a.createElement(Te,null,r.a.createElement(qe,null,r.a.createElement(Ie,null,r.a.createElement("li",null,r.a.createElement("b",null,"Name: "),e.appt.name),r.a.createElement("li",null,r.a.createElement("b",null,"E-mail: "),e.appt.email),r.a.createElement("li",null,r.a.createElement("b",null,"Date: "),new Date(e.appt.date).toDateString()),r.a.createElement("li",null,r.a.createElement("b",null,"Time: "),e.appt.time),r.a.createElement("li",null,r.a.createElement("b",null,"Phone #: "),e.appt.phoneNumber),r.a.createElement("li",null,r.a.createElement("b",null,"Appointment Type: "),e.appt.apptType),r.a.createElement("li",null,r.a.createElement("b",null,"Notes: "),e.appt.notes))),r.a.createElement(Ae,null,r.a.createElement(Ce,{onClick:n},r.a.createElement(f.c,null)),r.a.createElement(De,{onClick:t},r.a.createElement(f.b,null))))):r.a.createElement(ze,null,"Whoops! No appointments scheduled yet.")}()))};function _e(){var e=Object(a.useState)([]),n=Object(m.a)(e,2),t=n[0],o=n[1];return Object(a.useEffect)((function(){Object(u.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.get("http://localhost:5000/editor/");case 2:n=e.sent,o(n.data);case 4:case"end":return e.stop()}}),e)})))()}),[]),Object(a.useEffect)((function(){console.log("Appointments updated!"),console.log(t)}),[t]),r.a.createElement("div",{id:"listwrapper"},r.a.createElement(Fe,null,t.map((function(e){return r.a.createElement(We,{appt:e})}))))}var Je=function(){return r.a.createElement("div",null,r.a.createElement(ne,null,r.a.createElement(te,null,r.a.createElement(ae,null,"Appointment Editor Tool"),r.a.createElement(re,null,"Here are the appointments clients have made with you."),r.a.createElement(_e,null))))};var Le=function(){var e=Object(C.a)(),n=e.register,t=e.handleSubmit;return r.a.createElement(r.a.Fragment,null,r.a.createElement(_,null,r.a.createElement(J,{onSubmit:t((function(e){console.log(e);var n={name:e.name,email:e.email,notes:e.notes};A.a.post("http://localhost:5000/contact/add",n).then((function(e){return console.log(e.data)})),alert("Your information has been recieved!"),window.location.reload()}))},r.a.createElement(V,{htmlFor:"name"},"Name"),r.a.createElement(L,{type:"text",name:"name",ref:n({required:!0})}),r.a.createElement(V,{htmlFor:"email"},"E-mail"),r.a.createElement(L,{type:"text",name:"email",ref:n({required:!0})}),r.a.createElement(V,{htmlFor:"notes"},"Notes"),r.a.createElement(G,{type:"input",name:"notes",ref:n({required:!0})}),r.a.createElement(H,{type:"submit"},"Submit"))))},Ge=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ne,null,r.a.createElement(te,null,r.a.createElement(ae,null,"Let's get in touch!"),r.a.createElement(re,null,"Questions? Concerns? Use the form below to send them my way!"),r.a.createElement(Le,null))))},He=function(){var e=Object(C.a)(),n=e.register,t=e.handleSubmit,a=function(){var e=Object(u.a)(c.a.mark((function e(n){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={username:n.username,password:n.password},a="",e.next=4,A.a.post("http://localhost:5000/signin/login",t).then((function(e){console.log(e.data),a=e.data.token}));case 4:console.log("Got token: "+a),localStorage.setItem("auth-token",a),window.location="http://localhost:3000/editor/";case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return r.a.createElement(ne,null,r.a.createElement(te,null,r.a.createElement(ae,null,"Are you the site administator?"),r.a.createElement(W,null,"If so, log in!"),r.a.createElement(_,null,r.a.createElement(J,{onSubmit:t(a)},r.a.createElement(V,{htmlFor:"date"},"Username"),r.a.createElement(L,{type:"text",name:"username",ref:n({required:!0})}),r.a.createElement(V,{htmlFor:"date"},"Password"),r.a.createElement(L,{type:"password",name:"password",ref:n({required:!0})}),r.a.createElement(H,{type:"submit"},"Login")))))},Ve=function(){var e=Object(C.a)(),n=e.register,t=e.handleSubmit;function a(e){var n=0;for(var t in e)e.hasOwnProperty(t)&&++n;return n}var o=function(){var e=Object(u.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.get("http://localhost:5000/editor/");case 2:return n=e.sent,console.log(n.data),e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(e){var n=e._id;console.log("Delete appointment recieved: "),console.log(n),!0===window.confirm("Do you want to delete this appointment?")?(A.a.delete("http://localhost:5000/editor/"+n).then((function(e){return console.log(e.data)})),window.location.reload()):console.log("Opted out of deleting appointment.")},m=function(e){console.log("updateAppointment received:"),console.log(e),!0===window.confirm("Do you want to update this appointment?")?(console.log("Updating appointment entry!"),l.a.render(r.a.createElement(Me,{appt:e}),document.getElementById("formSpace"))):console.log("Opted out of updating appointment.")},p=function(){var e=Object(u.a)(c.a.mark((function e(n){var t,u,p,d,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Submitted!"),console.log(n.retCode),t={code:n.retCode,name:n.name},u=void 0,console.log(t),e.next=7,o();case 7:p=e.sent,console.log("Appoinments fetched!"),console.log(p),d=a(p),console.log("appointment length = "+d),s=0;case 13:if(!(s<p.length)){e.next=22;break}if(console.log(p[s].name),console.log(p[s].retCode),p[s].name!==n.name||p[s].retCode!==n.retCode){e.next=19;break}return u=p[s],e.abrupt("break",22);case 19:s++,e.next=13;break;case 22:console.log("target ="),console.log(u),void 0!==u?l.a.render(r.a.createElement("div",null,r.a.createElement(Fe,null,r.a.createElement(re,null,"Please note that your retrieval code has not been changed."),r.a.createElement(Te,null,r.a.createElement(qe,null,r.a.createElement(Ie,null,r.a.createElement("li",null,r.a.createElement("b",null,"Name: "),u.name),r.a.createElement("li",null,r.a.createElement("b",null,"E-mail: "),u.email),r.a.createElement("li",null,r.a.createElement("b",null,"Date: "),new Date(u.date).toDateString()),r.a.createElement("li",null,r.a.createElement("b",null,"Time: "),u.time),r.a.createElement("li",null,r.a.createElement("b",null,"Phone #:"),u.phoneNumber),r.a.createElement("li",null,r.a.createElement("b",null,"Appointment Type: "),u.apptType),r.a.createElement("li",null,r.a.createElement("b",null,"Notes: "),u.notes))),r.a.createElement(Ae,null,r.a.createElement(De,{onClick:function(){return m(u)}},r.a.createElement(f.b,null)),r.a.createElement(Ce,{onClick:function(){return i(u)}},r.a.createElement(f.c,null)))))),document.getElementById("result")):l.a.render(r.a.createElement(re,null,"No entry was found. Please verify your credentials."),document.getElementById("result"));case 25:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return r.a.createElement(ne,null,r.a.createElement(te,null,r.a.createElement(ae,null,"Appoinment Retrieval"),r.a.createElement(W,null,"Enter your code below!"),r.a.createElement(_,null,r.a.createElement(J,{onSubmit:t(p)},r.a.createElement(V,{htmlFor:"name"},"Name"),r.a.createElement(L,{type:"text",name:"name",ref:n({required:!0})}),r.a.createElement(V,{htmlFor:"retCode"},"Code"),r.a.createElement(L,{type:"text",name:"retCode",ref:n({required:!0})}),r.a.createElement(H,null,"Retrieve!"))),r.a.createElement("div",{id:"formSpace"}),r.a.createElement("div",{id:"result"})))},Ye=Object(a.createContext)(null);var Qe=function(){var e=Object(a.useState)({token:void 0,user:void 0}),n=Object(m.a)(e,2),t=n[0],o=n[1];return Object(a.useEffect)((function(){(function(){var e=Object(u.a)(c.a.mark((function e(){var n,t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return null===(n=localStorage.getItem("auth-token"))&&(localStorage.setItem("auth-token",""),n=""),e.next=4,A.a.post("http://localhost:5000/signin/tokenIsValid",null,{headers:{"x-auth-token":n}});case 4:if(!(t=e.sent).data){e.next=10;break}return e.next=8,A.a.get("http://localhost:5000/signin/loggedin",{headers:{"x-auth-token":n}});case 8:a=e.sent,o({token:n,user:a.data});case 10:console.log("Logged in user detected: "+t.data);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement("div",{className:"bghelper"},r.a.createElement("div",{className:"App"},r.a.createElement(s.a,null,r.a.createElement(Ye.Provider,{value:{userData:t,setUserData:o}},r.a.createElement(T,null),r.a.createElement(q.c,null,r.a.createElement(q.a,{path:"/",exact:!0,component:le}),r.a.createElement(q.a,{path:"/about",component:ue}),r.a.createElement(q.a,{path:"/editor",exact:!0,component:Je}),r.a.createElement(q.a,{path:"/contact",exact:!0,component:Ge}),r.a.createElement(q.a,{path:"/signin",exact:!0,component:He}),r.a.createElement(q.a,{path:"/retcode",exact:!0,component:Ve}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Qe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.77242c8b.chunk.js.map