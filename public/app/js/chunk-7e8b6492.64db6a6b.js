(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e8b6492"],{"4de4":function(e,t,n){"use strict";var a=n("23e7"),r=n("b727").filter,o=n("1dde"),i=o("filter");a({target:"Array",proto:!0,forced:!i},{filter:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},5530:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("b64b"),n("a4d3"),n("4de4"),n("d3b7"),n("e439"),n("159b"),n("dbb4");function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},b816:function(e,t,n){"use strict";n.r(t);n("b0c0");var a=n("7a23"),r={class:"grid"},o={class:"col-12"},i={class:"card"},s={class:"my-2"},l={class:"flex flex-column md:flex-row md:justify-content-between md:align-items-center"},c=Object(a["j"])("h5",{class:"m-0"},"Manajemen Pengguna",-1),u={class:"block mt-2 md:mt-0 p-input-icon-left"},d=Object(a["j"])("i",{class:"pi pi-search"},null,-1),p=Object(a["j"])("span",{class:"p-column-title"},"ID",-1),f=Object(a["j"])("span",{class:"p-column-title"},"Nama",-1),b=Object(a["j"])("span",{class:"p-column-title"},"Pengatur Jam Kerja",-1),m={class:"field"},h=Object(a["j"])("label",{for:"name"},"Nama",-1),g={key:0,class:"p-invalid"},j={class:"field"},O=Object(a["j"])("label",{for:"email"},"Email",-1),v={key:0,class:"p-invalid"},k={class:"field"},w=Object(a["j"])("label",{for:"password"},"Password",-1),y={class:"field"},_=Object(a["j"])("label",null,"Jabatan",-1),P={key:0,class:"p-invalid"},S={class:"field"},U=Object(a["j"])("label",null,"OPD",-1),T={key:0,class:"p-invalid"},D={class:"field"},z=Object(a["j"])("label",null,"Pengatur Jam Kerja",-1);function L(e,t,n,L,C,R){var I=Object(a["H"])("Button"),V=Object(a["H"])("Toolbar"),F=Object(a["H"])("InputText"),A=Object(a["H"])("Column"),x=Object(a["H"])("router-link"),B=Object(a["H"])("DataTable"),N=Object(a["H"])("Dropdown"),J=Object(a["H"])("Dialog");return Object(a["z"])(),Object(a["i"])("div",r,[Object(a["j"])("div",o,[Object(a["j"])("div",i,[Object(a["n"])(V,{class:"mb-4"},{start:Object(a["R"])((function(){return[Object(a["j"])("div",s,[Object(a["n"])(I,{label:"New",icon:"pi pi-plus",class:"p-button-success mr-2",onClick:R.openNew},null,8,["onClick"])])]})),_:1}),Object(a["n"])(B,{value:C.users,lazy:!0,paginator:!0,rows:10,filters:C.filters,"onUpdate:filters":t[1]||(t[1]=function(e){return C.filters=e}),ref:"dt",dataKey:"id",totalRecords:C.totalRecords,loading:C.loading,onPage:t[2]||(t[2]=function(e){return R.onPage(e)}),onSort:t[3]||(t[3]=function(e){return R.onSort(e)}),onFilter:t[4]||(t[4]=function(e){return R.onFilter(e)}),globalFilterFields:["name"],selection:C.selectedUsers,"onUpdate:selection":t[5]||(t[5]=function(e){return C.selectedUsers=e}),selectAll:C.selectAll,onSelectAllChange:R.onSelectAllChange,onRowSelect:R.onRowSelect,onRowUnselect:R.onRowUnselect,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} products",responsiveLayout:"scroll"},{header:Object(a["R"])((function(){return[Object(a["j"])("div",l,[c,Object(a["j"])("span",u,[d,Object(a["n"])(F,{modelValue:C.filters["global"].value,"onUpdate:modelValue":t[0]||(t[0]=function(e){return C.filters["global"].value=e}),placeholder:"Search...",onKeyup:R.onFilter},null,8,["modelValue","onKeyup"])])])]})),default:Object(a["R"])((function(){return[Object(a["n"])(A,{field:"id",header:"ID",sortable:!0},{body:Object(a["R"])((function(e){return[p,Object(a["m"])(" "+Object(a["L"])(e.data.id),1)]})),_:1}),Object(a["n"])(A,{field:"email",header:"Email"}),Object(a["n"])(A,{field:"workunit.name",header:"OPD"}),Object(a["n"])(A,{field:"name",header:"Nama",filterMatchMode:"startsWith",ref:"name",sortable:!0,headerStyle:"width:20%; min-width:10rem;"},{body:Object(a["R"])((function(e){return[f,Object(a["n"])(x,{to:{name:"users.detail",params:{id:e.data.id}}},{default:Object(a["R"])((function(){return[Object(a["m"])(Object(a["L"])(e.data.name),1)]})),_:2},1032,["to"])]})),_:1},512),Object(a["n"])(A,{field:"role",header:"Jabatan"}),Object(a["n"])(A,{field:"shift_management",header:"Pengatur Jam Kerja"},{body:Object(a["R"])((function(e){return[b,Object(a["m"])(" "+Object(a["L"])(e.data.shift_management?"Ya":"Tidak"),1)]})),_:1}),Object(a["n"])(A,{header:"Aksi"},{body:Object(a["R"])((function(e){return["pegawai"!=e.data.role?(Object(a["z"])(),Object(a["g"])(I,{key:0,icon:"pi pi-pencil",class:"p-button-rounded p-button-success mr-2",onClick:function(t){return R.editUser(e.data)}},null,8,["onClick"])):Object(a["h"])("",!0),"pegawai"!=e.data.role?(Object(a["z"])(),Object(a["g"])(I,{key:1,icon:"pi pi-trash",class:"p-button-rounded p-button-warning mt-2",onClick:function(t){return R.confirmDelete(e.data)}},null,8,["onClick"])):Object(a["h"])("",!0)]})),_:1})]})),_:1},8,["value","filters","totalRecords","loading","selection","selectAll","onSelectAllChange","onRowSelect","onRowUnselect"]),Object(a["n"])(J,{visible:C.userDialog,"onUpdate:visible":t[12]||(t[12]=function(e){return C.userDialog=e}),style:{width:"450px"},header:"Form Pengguna",modal:!0,class:"p-fluid"},{footer:Object(a["R"])((function(){return[Object(a["n"])(I,{label:"Cancel",icon:"pi pi-times",class:"p-button-text",onClick:R.hideDialog},null,8,["onClick"]),Object(a["n"])(I,{label:"Save",icon:"pi pi-check",class:"p-button-text",onClick:R.saveUser},null,8,["onClick"])]})),default:Object(a["R"])((function(){return[Object(a["j"])("div",m,[h,Object(a["n"])(F,{id:"name",modelValue:C.user.name,"onUpdate:modelValue":t[6]||(t[6]=function(e){return C.user.name=e}),modelModifiers:{trim:!0},required:"true",autofocus:"",class:Object(a["u"])({"p-invalid":C.submitted&&!C.user.name})},null,8,["modelValue","class"]),C.submitted&&!C.user.name?(Object(a["z"])(),Object(a["i"])("small",g,"Nama diperlukan.")):Object(a["h"])("",!0)]),Object(a["j"])("div",j,[O,Object(a["n"])(F,{id:"email",modelValue:C.user.email,"onUpdate:modelValue":t[7]||(t[7]=function(e){return C.user.email=e}),modelModifiers:{trim:!0},required:"true",autofocus:"",class:Object(a["u"])({"p-invalid":C.submitted&&!C.user.email})},null,8,["modelValue","class"]),C.submitted&&!C.user.email?(Object(a["z"])(),Object(a["i"])("small",v,"Email diperlukan.")):Object(a["h"])("",!0)]),Object(a["j"])("div",k,[w,Object(a["n"])(F,{id:"password",modelValue:C.user.password,"onUpdate:modelValue":t[8]||(t[8]=function(e){return C.user.password=e}),modelModifiers:{trim:!0},autofocus:""},null,8,["modelValue"])]),Object(a["j"])("div",y,[_,Object(a["n"])(N,{modelValue:C.user.role,"onUpdate:modelValue":t[9]||(t[9]=function(e){return C.user.role=e}),options:C.roleLists,optionLabel:"name",optionValue:"value",placeholder:"Pilih Jabatan",class:Object(a["u"])({"p-invalid":C.submitted&&!C.user.role})},null,8,["modelValue","options","class"]),C.submitted&&!C.user.role?(Object(a["z"])(),Object(a["i"])("small",P,"Jabatan diperlukan.")):Object(a["h"])("",!0)]),Object(a["j"])("div",S,[U,Object(a["n"])(N,{modelValue:C.user.workunit_id,"onUpdate:modelValue":t[10]||(t[10]=function(e){return C.user.workunit_id=e}),options:C.workunits,optionLabel:"name",optionValue:"id",required:"true",placeholder:"Pilih OPD",class:Object(a["u"])({"p-invalid":C.submitted&&!C.user.workunit_id})},null,8,["modelValue","options","class"]),C.submitted&&!C.user.workunit_id?(Object(a["z"])(),Object(a["i"])("small",T,"OPD diperlukan.")):Object(a["h"])("",!0)]),Object(a["j"])("div",D,[z,Object(a["n"])(N,{modelValue:C.user.shift_management,"onUpdate:modelValue":t[11]||(t[11]=function(e){return C.user.shift_management=e}),options:[{name:"Ya",value:1},{name:"Tidak",value:0}],optionLabel:"name",optionValue:"value",required:"true",placeholder:"Pilih"},null,8,["modelValue"])])]})),_:1},8,["visible"])])])])}var C=n("5530"),R=(n("4de4"),n("d3b7"),n("0393")),I=n("c841"),V=n("fca4"),F={data:function(){return{API_URL:"http://103.151.71.42/api/",loading:!1,onsearchtimeout:null,totalRecords:0,users:null,workunits:null,user:{},selectedUsers:null,selectAll:!1,filters:{},lazyParams:{},userDialog:!1,submitted:!1,roleLists:[{name:"Admin Kota",value:"adminsistem"},{name:"Pegawai",value:"pegawai"},{name:"Kasubag Umum",value:"kasubagumum"},{name:"Admin BKD",value:"adminkepegawaian"},{name:"Admin OPD",value:"adminopd"}]}},UserService:null,WorkunitService:null,created:function(){this.UserService=new I["a"],this.WorkunitService=new V["a"],this.initFilters()},mounted:function(){this.loading=!0,this.lazyParams={first:0,page:0,rows:this.$refs.dt.rows,sortField:null,sortOrder:1,filters:this.filters},this.loadLazyData()},methods:{loadLazyData:function(){var e=this;this.loading=!0,setTimeout((function(){e.UserService.getUsers(e.lazyParams).then((function(t){"redirectTo"in t&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),e.$router.push(t.redirectTo)),e.users=t.data,e.totalRecords=t.total,e.loading=!1})),e.WorkunitService.getWorkunits().then((function(t){"redirectTo"in t&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),e.$router.push(t.redirectTo)),e.workunits=t.data}))}),1e3*Math.random()+250)},openNew:function(){this.user={},this.submitted=!1,this.userDialog=!0},onPage:function(e){this.lazyParams=e,this.loadLazyData()},onSort:function(e){var t=this.lazyParams.page;this.lazyParams=e,this.lazyParams.page=t,this.loadLazyData()},onFilter:function(){var e=this;this.onsearchtimeout&&clearTimeout(this.onsearchtimeout),this.onsearchtimeout=setTimeout((function(){e.lazyParams.filters=e.filters,e.loadLazyData()}),1e3)},onSelectAllChange:function(e){var t=this,n=e.checked;n?this.UserService.getUsers().then((function(e){"redirectTo"in e&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),t.$router.push(e.redirectTo)),t.selectAll=!0,t.selectedUsers=e.data})):(this.selectAll=!1,this.selectedUsers=[])},onRowSelect:function(){this.selectAll=this.selectedUsers.length===this.totalRecords},onRowUnselect:function(){this.selectAll=!1},initFilters:function(){this.filters={global:{value:null,matchMode:R["a"].CONTAINS}}},editUser:function(e){this.user=Object(C["a"])({},e),this.userDialog=!0},hideDialog:function(){this.userDialog=!1,this.submitted=!1},saveUser:function(){var e=this;this.submitted=!0,this.user.id?this.UserService.updateUser(this.user).then((function(t){t.success?(e.loadLazyData(),e.$swal({icon:"success",title:"Success",text:t.message}),e.userDialog=!1,e.user={}):e.$swal({icon:"error",title:"Oops...",text:t.message})})):this.UserService.createUser(this.user).then((function(t){t.success?(e.loadLazyData(),e.$swal({icon:"success",title:"Success",text:t.message}),e.userDialog=!1,e.user={}):e.$swal({icon:"error",title:"Oops...",text:t.message})}))},findIndexById:function(e){for(var t=-1,n=0;n<this.users.length;n++)if(this.users[n].id===e){t=n;break}return t},confirmDelete:function(e){var t=this;this.user=e,this.$swal({title:"Apakah anda yakin akan menghapus data ini ?",showCancelButton:!0,confirmButtonText:"Hapus"}).then((function(e){e.isConfirmed&&t.UserService.deleteUser(t.user).then((function(e){e.success?(t.users=t.users.filter((function(e){return e.id!==t.user.id})),t.$swal({icon:"success",title:"Success",text:e.message}),t.userDialog=!1,t.user={}):t.$swal({icon:"error",title:"Oops...",text:e.message})}))}))}}},A=n("6b0d"),x=n.n(A);const B=x()(F,[["render",L]]);t["default"]=B},bee2:function(e,t,n){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function r(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}n.d(t,"a",(function(){return r}))},c841:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("d4ec"),r=n("bee2"),o=(n("d3b7"),n("e9c4"),n("b0c0"),function(){function e(){Object(a["a"])(this,e)}return Object(r["a"])(e,[{key:"getUsers",value:function(e){var t="user=1&page="+(e.page+1)+"&per_page="+e.rows,n=1==e.sortOrder?"asc":"desc";return t+="&order_by="+n,null!=e.sortField&&(t+="&sort_by="+e.sortField),e.filters.global.value&&(t+="&keyword="+e.filters.global.value),fetch("http://103.151.71.42/api/users?"+t,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"getUser",value:function(e){return fetch("http://103.151.71.42/api/users/"+e,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"createUser",value:function(e){return fetch("http://103.151.71.42/api/users/",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({name:e.name,email:e.email,password:e.password,role:e.role,workunit_id:e.workunit_id,shift_management:e.shift_management})}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"updateUser",value:function(e){return console.log(e),fetch("http://103.151.71.42/api/users/"+e.id,{method:"PUT",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({name:e.name,email:e.email,password:e.password,role:e.role,workunit_id:e.workunit_id,shift_management:e.shift_management})}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"deleteUser",value:function(e){return fetch("http://103.151.71.42/api/users/"+e.id,{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}}]),e}())},d4ec:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n("d9e2");function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},dbb4:function(e,t,n){var a=n("23e7"),r=n("83ab"),o=n("56ef"),i=n("fc6a"),s=n("06cf"),l=n("8418");a({target:"Object",stat:!0,sham:!r},{getOwnPropertyDescriptors:function(e){var t,n,a=i(e),r=s.f,c=o(a),u={},d=0;while(c.length>d)n=r(a,t=c[d++]),void 0!==n&&l(u,t,n);return u}})},e439:function(e,t,n){var a=n("23e7"),r=n("d039"),o=n("fc6a"),i=n("06cf").f,s=n("83ab"),l=r((function(){i(1)})),c=!s||l;a({target:"Object",stat:!0,forced:c,sham:!s},{getOwnPropertyDescriptor:function(e,t){return i(o(e),t)}})},fca4:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("d4ec"),r=n("bee2"),o=(n("d3b7"),n("e9c4"),function(){function e(){Object(a["a"])(this,e)}return Object(r["a"])(e,[{key:"getWorkunits",value:function(e){var t="";if(e){t="?page="+(e.page+1)+"&per_page="+e.rows;var n=1==e.sortOrder?"asc":"desc";t+="&order_by="+n,null!=e.sortField&&(t+="&sort_by="+e.sortField),e.filters.global.value&&(t+="&keyword="+e.filters.global.value)}else t="?all=1&order_by=asc";return fetch("http://103.151.71.42/api/workunits"+t,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"Login"}}:e.json()})).then((function(e){return e.data}))}},{key:"getWorkunit",value:function(e){return fetch("http://103.151.71.42/api/workunits/"+e,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"getPresences",value:function(e,t){var n="";if(e){n="page="+(e.page+1)+"&per_page="+e.rows;var a=1==e.sortOrder?"asc":"desc";n+="&order_by="+a,null!=e.sortField&&(n+="&sort_by="+e.sortField),e.filters.global.value&&(n+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(n+="&date_start="+e.date_start+"&date_end="+e.date_end)}return fetch("http://103.151.71.42/api/workunits/"+t+"/presences?"+n,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"updateWorkunit",value:function(e){return fetch("http://103.151.71.42/api/workunits/"+e.id+"/place",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({lat:e.lat,lng:e.lng,radius:e.radius})}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"assignWorktime",value:function(e,t){return fetch("http://103.151.71.42/api/workunits/"+e.id+"/worktime",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({worktime_id:t.worktime_id})}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"deleteWorktime",value:function(e,t){return fetch("http://103.151.71.42/api/workunits/"+e.id+"/worktime",{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({worktime_id:t.id})}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}}]),e}())}}]);
//# sourceMappingURL=chunk-7e8b6492.64db6a6b.js.map