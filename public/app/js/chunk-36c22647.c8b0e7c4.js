(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36c22647"],{"013f":function(e,t,n){"use strict";n.r(t);var a=n("7a23"),r=function(e){return Object(a["C"])("data-v-4da0766c"),e=e(),Object(a["A"])(),e},l={class:"surface-0 flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden"},i={class:"grid justify-content-center p-2 lg:p-0",style:{"min-width":"80%"}},s={class:"col-12 xl:col-6",style:{"border-radius":"56px",padding:"0.3rem",background:"linear-gradient(180deg, var(--primary-color), rgba(33, 150, 243, 0) 30%)"}},c={class:"h-full w-full m-0 py-7 px-4",style:{"border-radius":"53px",background:"linear-gradient(180deg, var(--surface-50) 38.9%, var(--surface-0))"}},o={class:"text-center mb-5"},u=["src"],d=r((function(){return Object(a["j"])("div",{class:"text-900 text-3xl font-medium mb-3"},"Selamat Datang!",-1)})),p=r((function(){return Object(a["j"])("span",{class:"text-600 font-medium"},"Silahkan masuk untuk melanjutkan",-1)})),b={class:"w-full md:w-10 mx-auto"},f=r((function(){return Object(a["j"])("label",{for:"email1",class:"block text-900 text-xl font-medium mb-2"},"NIP/NIK/Username",-1)})),m=r((function(){return Object(a["j"])("label",{for:"password1",class:"block text-900 font-medium text-xl mb-2"},"Kata Sandi",-1)}));function h(e,t,n,r,h,g){var j=Object(a["H"])("InputText"),w=Object(a["H"])("Password"),O=Object(a["H"])("Button");return Object(a["z"])(),Object(a["i"])("div",l,[Object(a["j"])("div",i,[Object(a["j"])("div",s,[Object(a["j"])("div",c,[Object(a["j"])("div",o,[Object(a["j"])("img",{src:h.app_logo,alt:"Image",height:"100",class:"mb-3"},null,8,u),d,p]),Object(a["j"])("div",b,[f,Object(a["n"])(j,{id:"email1",modelValue:h.email,"onUpdate:modelValue":t[0]||(t[0]=function(e){return h.email=e}),type:"text",class:"w-full mb-3",placeholder:"Email",style:{padding:"1rem"}},null,8,["modelValue"]),m,Object(a["n"])(w,{id:"password1",modelValue:h.password,"onUpdate:modelValue":t[1]||(t[1]=function(e){return h.password=e}),placeholder:"Password",toggleMask:!0,class:"w-full mb-3",inputClass:"w-full",inputStyle:"padding:1rem",feedback:!1},null,8,["modelValue"]),Object(a["n"])(O,{label:h.sign_in_label,disabled:h.disabled,class:"w-full p-3 text-xl",onClick:t[2]||(t[2]=function(e){return g.doLogin()})},null,8,["label","disabled"])])])])])])}n("e9c4");var g=n("c7eb"),j=n("1da1"),w=n("d4ec"),O=n("bee2"),v=(n("d3b7"),function(){function e(){Object(w["a"])(this,e)}return Object(O["a"])(e,[{key:"validate",value:function(){var e=Object(j["a"])(Object(g["a"])().mark((function e(){var t;return Object(g["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://103.151.71.42/api/user",{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}});case 2:return t=e.sent,e.abrupt("return",t.status);case 4:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"login",value:function(e){return fetch("http://103.151.71.42/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()}))}}]),e}()),k={data:function(){return{email:"",password:"",sign_in_label:"Masuk",disabled:!1,API_URL:"http://103.151.71.42/api/",app_logo:"http://103.151.71.42/app-logo.png",checked:!1}},AuthService:null,created:function(){this.AuthService=new v},methods:{doLogin:function(){var e=this;this.sign_in_label="Silahkan tunggu...",this.disabled=!0,this.AuthService.login({email:this.email,password:this.password}).then((function(t){t.success?(localStorage.setItem("presence_app_token",t.data.token),localStorage.setItem("presence_app_role",t.data.user.role),localStorage.setItem("presence_user_data",JSON.stringify(t.data.user)),e.sign_in_label="Login berhasil",e.$router.push({name:"dashboard"})):(e.$swal({icon:"error",title:"Oops...",text:t.message}),e.sign_in_label="Masuk",e.disabled=!1)}))}},computed:{logoColor:function(){return this.$appState.darkTheme?"white":"dark"}}},x=(n("ab67"),n("6b0d")),y=n.n(x);const _=y()(k,[["render",h],["__scopeId","data-v-4da0766c"]]);t["default"]=_},"9e7a":function(e,t,n){},ab67:function(e,t,n){"use strict";n("9e7a")},bee2:function(e,t,n){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function r(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}n.d(t,"a",(function(){return r}))},d4ec:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n("d9e2");function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}}}]);
//# sourceMappingURL=chunk-36c22647.c8b0e7c4.js.map