(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2929925f"],{"013f":function(e,a,t){"use strict";t.r(a);var s=t("7a23");const l=e=>(Object(s["C"])("data-v-ed5a2d3e"),e=e(),Object(s["A"])(),e),i={class:"surface-0 flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden"},n={class:"grid justify-content-center p-2 lg:p-0",style:{"min-width":"80%"}},o={class:"col-12 xl:col-6",style:{"border-radius":"56px",padding:"0.3rem",background:"linear-gradient(180deg, var(--primary-color), rgba(33, 150, 243, 0) 30%)"}},d={class:"h-full w-full m-0 py-7 px-4",style:{"border-radius":"53px",background:"linear-gradient(180deg, var(--surface-50) 38.9%, var(--surface-0))"}},r={class:"text-center mb-5"},c=["src"],u=l(()=>Object(s["j"])("div",{class:"text-900 text-3xl font-medium mb-3"},"Selamat Datang!",-1)),p=l(()=>Object(s["j"])("span",{class:"text-600 font-medium"},"Silahkan masuk untuk melanjutkan",-1)),b={class:"w-full md:w-10 mx-auto"},m=l(()=>Object(s["j"])("label",{for:"email1",class:"block text-900 text-xl font-medium mb-2"},"Username",-1)),g=l(()=>Object(s["j"])("label",{for:"password1",class:"block text-900 font-medium text-xl mb-2"},"Kata Sandi",-1));function h(e,a,t,l,h,j){const f=Object(s["H"])("InputText"),w=Object(s["H"])("Password"),k=Object(s["H"])("Button");return Object(s["z"])(),Object(s["i"])("div",i,[Object(s["j"])("div",n,[Object(s["j"])("div",o,[Object(s["j"])("div",d,[Object(s["j"])("div",r,[Object(s["j"])("img",{src:h.app_logo,alt:"Image",height:"200",class:"mb-3"},null,8,c),u,p]),Object(s["j"])("div",b,[Object(s["j"])("form",{action:"",method:"post",onSubmit:a[3]||(a[3]=Object(s["V"])(e=>j.doLogin(),["prevent"]))},[m,Object(s["m"])(f,{id:"email1",modelValue:h.email,"onUpdate:modelValue":a[0]||(a[0]=e=>h.email=e),type:"text",class:"w-full mb-3",placeholder:"Email",style:{padding:"1rem"}},null,8,["modelValue"]),g,Object(s["m"])(w,{id:"password1",modelValue:h.password,"onUpdate:modelValue":a[1]||(a[1]=e=>h.password=e),placeholder:"Password",toggleMask:!0,class:"w-full mb-3",inputClass:"w-full",inputStyle:"padding:1rem",feedback:!1},null,8,["modelValue"]),Object(s["m"])(k,{type:"submit",label:h.sign_in_label,disabled:h.disabled,class:"w-full p-3 text-xl",onClick:a[2]||(a[2]=e=>j.doLogin())},null,8,["label","disabled"])],32)])])])])])}t("14d9");class j{async validate(){var e=await fetch("https://sisapa.tanjungbalaikota.go.id/api/user",{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}});return e.status}login(e){return fetch("https://sisapa.tanjungbalaikota.go.id/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(e=>e.json())}}var f={data(){return{email:"",password:"",sign_in_label:"Masuk",disabled:!1,API_URL:"https://sisapa.tanjungbalaikota.go.id/api/",app_logo:"https://sisapa.tanjungbalaikota.go.id/app-logo.png",checked:!1}},AuthService:null,created(){this.AuthService=new j},methods:{doLogin(){this.sign_in_label="Silahkan tunggu...",this.disabled=!0,this.AuthService.login({email:this.email,password:this.password}).then(e=>{e.success?(localStorage.setItem("presence_app_token",e.data.token),localStorage.setItem("presence_app_role",e.data.user.role),localStorage.setItem("presence_user_data",JSON.stringify(e.data.user)),this.sign_in_label="Login berhasil",this.$router.push({name:"dashboard"})):(this.$swal({icon:"error",title:"Oops...",text:e.message}),this.sign_in_label="Masuk",this.disabled=!1)})}},computed:{logoColor(){return this.$appState.darkTheme?"white":"dark"}}},w=(t("2418"),t("6b0d")),k=t.n(w);const O=k()(f,[["render",h],["__scopeId","data-v-ed5a2d3e"]]);a["default"]=O},2418:function(e,a,t){"use strict";t("9e21")},"9e21":function(e,a,t){}}]);
//# sourceMappingURL=chunk-2929925f.9f9c2fd4.js.map