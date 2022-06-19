(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1496dd92"],{"06d6":function(e,t,o){"use strict";o.d(t,"a",(function(){return r}));var i=o("5530"),a=o("d4ec"),n=o("bee2"),r=(o("d3b7"),o("e9c4"),function(){function e(){Object(a["a"])(this,e)}return Object(n["a"])(e,[{key:"getEmployees",value:function(e){var t="page="+(e.page+1)+"&per_page="+e.rows,o=1==e.sortOrder?"asc":"desc";return t+="&order_by="+o,null!=e.sortField&&(t+="&sort_by="+e.sortField),e.filters.global.value&&(t+="&keyword="+e.filters.global.value),fetch("http://103.151.71.42/api/employees?"+t,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"getEmployee",value:function(e){return fetch("http://103.151.71.42/api/employees/"+e,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"updateEmployee",value:function(e){return fetch("http://103.151.71.42/api/employees/"+e.id+"/place",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({lat:e.lat,lng:e.lng,radius:e.radius})}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"updateRole",value:function(e,t){var o=Object(i["a"])({},e);return o.role=t,fetch("http://103.151.71.42/api/users/"+e.id,{method:"PUT",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(o)}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"addPlace",value:function(e,t){return fetch("http://103.151.71.42/api/employees/"+e.id+"/place",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(t)}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"deletePlace",value:function(e,t){return fetch("http://103.151.71.42/api/employees/"+e.id+"/place",{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({place_id:t.id})}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"patchPlace",value:function(e){return fetch("http://103.151.71.42/api/employees/"+e.id+"/place",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"addWorktime",value:function(e,t){return fetch("http://103.151.71.42/api/employees/"+e.id+"/worktime",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(t)}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"deleteWorktime",value:function(e,t){return fetch("http://103.151.71.42/api/employees/"+e.id+"/worktime",{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({worktime_id:t.id})}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}}]),e}())},"4de4":function(e,t,o){"use strict";var i=o("23e7"),a=o("b727").filter,n=o("1dde"),r=n("filter");i({target:"Array",proto:!0,forced:!r},{filter:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},5530:function(e,t,o){"use strict";o.d(t,"a",(function(){return n}));o("b64b"),o("a4d3"),o("4de4"),o("d3b7"),o("e439"),o("159b"),o("dbb4");function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function n(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}},7467:function(e,t,o){"use strict";o.d(t,"a",(function(){return n}));var i=o("d4ec"),a=o("bee2"),n=(o("d3b7"),o("e9c4"),function(){function e(){Object(i["a"])(this,e)}return Object(a["a"])(e,[{key:"getWorktimes",value:function(e){var t="page="+(e.page+1)+"&per_page="+e.rows,o=1==e.sortOrder?"asc":"desc";return t+="&order_by="+o,null!=e.sortField&&(t+="&sort_by="+e.sortField),e.filters.global.value&&(t+="&keyword="+e.filters.global.value),fetch("http://103.151.71.42/api/worktimes?"+t,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"getAllWorktimes",value:function(){return fetch("http://103.151.71.42/api/worktimes?response=array",{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"createWorktime",value:function(e){return fetch("http://103.151.71.42/api/worktimes",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(e)}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"updateWorktime",value:function(e){return fetch("http://103.151.71.42/api/worktimes/"+e.id,{method:"PUT",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(e)}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"deleteWorktime",value:function(e){return fetch("http://103.151.71.42/api/worktimes/"+e.id,{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(e)}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}}]),e}())},"7db0":function(e,t,o){"use strict";var i=o("23e7"),a=o("b727").find,n=o("44d2"),r="find",l=!0;r in[]&&Array(1)[r]((function(){l=!1})),i({target:"Array",proto:!0,forced:l},{find:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),n(r)},ae80:function(e,t,o){"use strict";o.r(t);o("b0c0"),o("7db0"),o("d3b7"),o("b64b");var i=o("7a23"),a={class:"grid"},n={class:"col-12"},r={class:"card"},l=Object(i["j"])("div",{class:"font-medium text-3xl text-900 mb-3"},"Detail Pegawai",-1),c={class:"list-none p-0 m-0"},s={class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},u=Object(i["j"])("div",{class:"text-500 w-6 md:w-2 font-medium"},"NIP",-1),d={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},p={class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},m=Object(i["j"])("div",{class:"text-500 w-6 md:w-2 font-medium"},"Nama",-1),b={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},f={class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},h=Object(i["j"])("div",{class:"text-500 w-6 md:w-2 font-medium"},"Golongan",-1),j={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},y={class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},O=Object(i["j"])("div",{class:"text-500 w-6 md:w-2 font-medium"},"Jabatan",-1),g={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},k={class:"flex align-items-center py-3 px-2 border-top-1 border-bottom-1 surface-border flex-wrap"},v=Object(i["j"])("div",{class:"text-500 w-6 md:w-2 font-medium"},"Instansi",-1),w={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1 line-height-3"},_={class:"flex align-items-center py-3 px-2 border-top-1 border-bottom-1 surface-border flex-wrap"},x=Object(i["j"])("div",{class:"text-500 w-6 md:w-2 font-medium"},"System Role",-1),D={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1 line-height-3"},S=Object(i["m"])(" - "),T={class:"flex align-items-center py-3 px-2 border-top-1 border-bottom-1 surface-border flex-wrap"},W=Object(i["j"])("div",{class:"text-500 w-6 md:w-2 font-medium"},"Bebas Lokasi",-1),C={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1 line-height-3"},P={class:"field"},L=Object(i["j"])("label",{for:"name"},"Role Name",-1),I={key:0,class:"p-invalid"};function z(e,t,o,z,B,R){var U=Object(i["H"])("Dropdown"),H=Object(i["H"])("Button"),$=Object(i["H"])("Dialog"),F=Object(i["H"])("DetailPlace"),N=Object(i["H"])("DetailWorktime");return Object(i["z"])(),Object(i["i"])("div",a,[Object(i["j"])("div",n,[Object(i["j"])("div",r,[l,Object(i["j"])("ul",c,[Object(i["j"])("li",s,[u,Object(i["j"])("div",d,Object(i["L"])(B.employee.nip),1)]),Object(i["j"])("li",p,[m,Object(i["j"])("div",b,Object(i["L"])(B.employee.name),1)]),Object(i["j"])("li",f,[h,Object(i["j"])("div",j,Object(i["L"])(B.employee.group),1)]),Object(i["j"])("li",y,[O,Object(i["j"])("div",g,Object(i["L"])(B.employee.position),1)]),Object(i["j"])("li",k,[v,Object(i["j"])("div",w,Object(i["L"])(B.employee.workunit?B.employee.workunit.name:""),1)]),Object(i["j"])("li",_,[x,Object(i["j"])("div",D,[Object(i["m"])(Object(i["L"])(B.employee.user?B.roleLists.find((function(e){return e.value===B.employee.user.role})).name:"")+" ",1),B.employee.user?(Object(i["z"])(),Object(i["i"])(i["a"],{key:0},[S,Object(i["j"])("a",{href:"javascript:void(0)",onClick:t[0]||(t[0]=function(e){return R.editRole()})},"Edit")],64)):Object(i["h"])("",!0)])]),Object(i["j"])("li",T,[W,Object(i["j"])("div",C,[Object(i["m"])(Object(i["L"])(B.employee.is_free_place?"Ya":"Tidak")+" - ",1),Object(i["j"])("a",{href:"javascript:void(0)",onClick:t[1]||(t[1]=function(e){return R.patchPlace()})},"Update")])])])])]),Object(i["n"])($,{visible:B.roleDialog,"onUpdate:visible":t[3]||(t[3]=function(e){return B.roleDialog=e}),style:{width:"450px"},header:"Edit System Role",modal:!0,class:"p-fluid"},{footer:Object(i["R"])((function(){return[Object(i["n"])(H,{label:"Cancel",icon:"pi pi-times",class:"p-button-text",onClick:R.hideRoleDialog},null,8,["onClick"]),Object(i["n"])(H,{label:"Save",icon:"pi pi-check",class:"p-button-text",onClick:R.saveRole},null,8,["onClick"])]})),default:Object(i["R"])((function(){return[Object(i["j"])("div",P,[L,Object(i["n"])(U,{modelValue:B.user_role,"onUpdate:modelValue":t[2]||(t[2]=function(e){return B.user_role=e}),options:B.roleLists,optionLabel:"name",optionValue:"value",placeholder:"Pilih Role",class:Object(i["u"])({"p-invalid":B.submitted&&!B.user_role})},null,8,["modelValue","options","class"]),B.submitted&&!B.user_role?(Object(i["z"])(),Object(i["i"])("small",I,"Role name diperlukan.")):Object(i["h"])("",!0)])]})),_:1},8,["visible"]),0!=Object.keys(B.employee).length?(Object(i["z"])(),Object(i["g"])(F,{key:0,employee:B.employee,employeeService:e.employeeService},null,8,["employee","employeeService"])):Object(i["h"])("",!0),0!=Object.keys(B.employee).length?(Object(i["z"])(),Object(i["g"])(N,{key:1,employee:B.employee,employeeService:e.employeeService},null,8,["employee","employeeService"])):Object(i["h"])("",!0)])}var B=o("06d6"),R={class:"col-12"},U={class:"card"},H={class:"my-2"},$=Object(i["j"])("div",{class:"flex flex-column md:flex-row md:justify-content-between md:align-items-center"},[Object(i["j"])("h5",{class:"m-0"},"Detail Lokasi Absen")],-1),F=Object(i["j"])("span",{class:"p-column-title"},"ID",-1),N={class:"field"},V=Object(i["j"])("label",{for:"name"},"Latitude",-1),E={key:0,class:"p-invalid"},J={class:"field"},A=Object(i["j"])("label",{for:"name"},"Longitude",-1),M={key:0,class:"p-invalid"};function K(e,t,o,a,n,r){var l=Object(i["H"])("Button"),c=Object(i["H"])("Toolbar"),s=Object(i["H"])("Column"),u=Object(i["H"])("DataTable"),d=Object(i["H"])("InputText"),p=Object(i["H"])("Dialog");return Object(i["z"])(),Object(i["i"])("div",R,[Object(i["j"])("div",U,[Object(i["n"])(c,{class:"mb-4"},{start:Object(i["R"])((function(){return[Object(i["j"])("div",H,[Object(i["n"])(l,{label:"New",icon:"pi pi-plus",class:"p-button-success mr-2",onClick:r.openNew},null,8,["onClick"])])]})),_:1}),Object(i["n"])(u,{value:n.places,ref:"dt",dataKey:"id",responsiveLayout:"scroll"},{header:Object(i["R"])((function(){return[$]})),default:Object(i["R"])((function(){return[Object(i["n"])(s,{field:"id",header:"ID",sortable:!0},{body:Object(i["R"])((function(e){return[F,Object(i["m"])(" "+Object(i["L"])(e.data.id),1)]})),_:1}),Object(i["n"])(s,{field:"lat",header:"Latitute"}),Object(i["n"])(s,{field:"lng",header:"Longitude"}),Object(i["n"])(s,{header:"Aksi"},{body:Object(i["R"])((function(e){return[e.data.id?(Object(i["z"])(),Object(i["g"])(l,{key:0,icon:"pi pi-trash",class:"p-button-rounded p-button-warning mt-2",onClick:function(t){return r.confirmDelete(e.data)}},null,8,["onClick"])):Object(i["h"])("",!0)]})),_:1})]})),_:1},8,["value"]),Object(i["n"])(p,{visible:n.placeDialog,"onUpdate:visible":t[2]||(t[2]=function(e){return n.placeDialog=e}),style:{width:"450px"},header:"Form Detail Jam Kerja",modal:!0,class:"p-fluid"},{footer:Object(i["R"])((function(){return[Object(i["n"])(l,{label:"Cancel",icon:"pi pi-times",class:"p-button-text",onClick:r.hideDialog},null,8,["onClick"]),Object(i["n"])(l,{label:"Save",icon:"pi pi-check",class:"p-button-text",onClick:r.savePlace},null,8,["onClick"])]})),default:Object(i["R"])((function(){return[Object(i["j"])("div",N,[V,Object(i["n"])(d,{id:"name",modelValue:n.place.lat,"onUpdate:modelValue":t[0]||(t[0]=function(e){return n.place.lat=e}),modelModifiers:{trim:!0},required:"true",autofocus:"",class:Object(i["u"])({"p-invalid":n.submitted&&!n.place.lat})},null,8,["modelValue","class"]),n.submitted&&!n.place.lat?(Object(i["z"])(),Object(i["i"])("small",E,"Latitute diperlukan.")):Object(i["h"])("",!0)]),Object(i["j"])("div",J,[A,Object(i["n"])(d,{id:"name",modelValue:n.place.lng,"onUpdate:modelValue":t[1]||(t[1]=function(e){return n.place.lng=e}),modelModifiers:{trim:!0},required:"true",autofocus:"",class:Object(i["u"])({"p-invalid":n.submitted&&!n.place.lng})},null,8,["modelValue","class"]),n.submitted&&!n.place.lng?(Object(i["z"])(),Object(i["i"])("small",M,"Longitude diperlukan.")):Object(i["h"])("",!0)])]})),_:1},8,["visible"])])])}var q=o("5530"),Y=(o("4de4"),{props:{employee:{},employeeService:null},data:function(){return{loading:!1,places:null,place:{},filters:{},lazyParams:{},columns:[{field:"id",header:"ID"},{field:"lat",header:"Latitute"},{field:"lng",header:"Longitude"}],placeDialog:!1,submitted:!1}},created:function(){this.places=this.employee.places},mounted:function(){this.lazyParams={first:0,page:0,rows:this.$refs.dt.rows,sortField:null,sortOrder:1,filters:this.filters}},methods:{openNew:function(){this.place={},this.submitted=!1,this.placeDialog=!0},editPlace:function(e){this.place=Object(q["a"])({},e),this.placeDialog=!0},confirmDelete:function(e){var t=this;this.place=e,this.$swal({title:"Apakah anda yakin akan menghapus data ini ?",showCancelButton:!0,confirmButtonText:"Hapus"}).then((function(e){e.isConfirmed&&t.employeeService.deletePlace(t.employee,t.place).then((function(e){"redirectTo"in e&&(localStorage.removeItem("presence_app_token"),t.$router.push(e.redirectTo)),e.success?(t.places=t.places.filter((function(e){return e.id!==t.place.id})),t.$swal({icon:"success",title:"Success",text:e.message}),t.placeDialog=!1,t.place={}):t.$swal({icon:"error",title:"Oops...",text:e.message})}))}))},hideDialog:function(){this.placeDialog=!1,this.submitted=!1},savePlace:function(){var e=this;this.submitted=!0,this.employeeService.addPlace(this.employee,this.place).then((function(t){"redirectTo"in t&&(localStorage.removeItem("presence_app_token"),e.$router.push(t.redirectTo)),t.success?(e.$swal({icon:"success",title:"Success",text:t.message}),e.places.push(e.place),e.placeDialog=!1,e.place={}):e.$swal({icon:"error",title:"Oops...",text:t.message})}))},findIndexById:function(e){for(var t=-1,o=0;o<this.places.length;o++)if(this.places[o].id===e){t=o;break}return t}}}),G=o("6b0d"),Q=o.n(G);const X=Q()(Y,[["render",K]]);var Z=X,ee={class:"col-12"},te={class:"card"},oe={class:"my-2"},ie=Object(i["j"])("div",{class:"flex flex-column md:flex-row md:justify-content-between md:align-items-center"},[Object(i["j"])("h5",{class:"m-0"},"Detail Jam Kerja")],-1),ae=Object(i["j"])("span",{class:"p-column-title"},"ID",-1),ne={class:"field"},re=Object(i["j"])("label",{for:"name"},"Jam Kerja",-1),le={key:0,class:"p-invalid"},ce={class:"field"},se=Object(i["j"])("label",{for:"date"},"Tanggal Mulai",-1),ue={key:0,class:"p-invalid"},de={class:"field"},pe=Object(i["j"])("label",{for:"date"},"Tanggal Selesai",-1),me={key:0,class:"p-invalid"};function be(e,t,o,a,n,r){var l=Object(i["H"])("Button"),c=Object(i["H"])("Toolbar"),s=Object(i["H"])("Column"),u=Object(i["H"])("DataTable"),d=Object(i["H"])("Dropdown"),p=Object(i["H"])("Calendar"),m=Object(i["H"])("Dialog");return Object(i["z"])(),Object(i["i"])("div",ee,[Object(i["j"])("div",te,[Object(i["n"])(c,{class:"mb-4"},{start:Object(i["R"])((function(){return[Object(i["j"])("div",oe,[Object(i["n"])(l,{label:"New",icon:"pi pi-plus",class:"p-button-success mr-2",onClick:r.openNew},null,8,["onClick"])])]})),_:1}),Object(i["n"])(u,{value:n.employeeWorktimes,ref:"dt",dataKey:"id",responsiveLayout:"scroll"},{header:Object(i["R"])((function(){return[ie]})),default:Object(i["R"])((function(){return[Object(i["n"])(s,{field:"id",header:"ID",sortable:!0},{body:Object(i["R"])((function(e){return[ae,Object(i["m"])(" "+Object(i["L"])(e.data.id),1)]})),_:1}),Object(i["n"])(s,{field:"name",header:"Nama"}),Object(i["n"])(s,{field:"pivot.date_start",header:"Tanggal Mulai"}),Object(i["n"])(s,{field:"pivot.date_end",header:"Tanggal Selesai"}),Object(i["n"])(s,{header:"Aksi"},{body:Object(i["R"])((function(e){return[e.data.id?(Object(i["z"])(),Object(i["g"])(l,{key:0,icon:"pi pi-trash",class:"p-button-rounded p-button-warning mt-2",onClick:function(t){return r.confirmDelete(e.data)}},null,8,["onClick"])):Object(i["h"])("",!0)]})),_:1})]})),_:1},8,["value"]),Object(i["n"])(m,{visible:n.employeeWorktimeDialog,"onUpdate:visible":t[3]||(t[3]=function(e){return n.employeeWorktimeDialog=e}),style:{width:"450px"},header:"Form Detail Jam Kerja",modal:!0,class:"p-fluid"},{footer:Object(i["R"])((function(){return[Object(i["n"])(l,{label:"Cancel",icon:"pi pi-times",class:"p-button-text",onClick:r.hideDialog},null,8,["onClick"]),Object(i["n"])(l,{label:"Save",icon:"pi pi-check",class:"p-button-text",onClick:r.saveWorktime},null,8,["onClick"])]})),default:Object(i["R"])((function(){return[Object(i["j"])("div",ne,[re,Object(i["n"])(d,{modelValue:n.employeeWorktime.worktime_id,"onUpdate:modelValue":t[0]||(t[0]=function(e){return n.employeeWorktime.worktime_id=e}),options:n.worktimes,optionLabel:"name",optionValue:"id",placeholder:"Pilih Jam Kerja",class:Object(i["u"])({"p-invalid":n.submitted&&!n.employeeWorktime.worktime_id})},null,8,["modelValue","options","class"]),n.submitted&&!n.employeeWorktime.worktime_id?(Object(i["z"])(),Object(i["i"])("small",le,"Jam kerja diperlukan.")):Object(i["h"])("",!0)]),Object(i["j"])("div",ce,[se,Object(i["n"])(p,{id:"date",dateFormat:"yy-mm-dd",showIcon:!0,showButtonBar:!0,modelValue:n.employeeWorktime.date_start,"onUpdate:modelValue":t[1]||(t[1]=function(e){return n.employeeWorktime.date_start=e}),required:"true",autofocus:"",class:Object(i["u"])({"p-invalid":n.submitted&&!n.employeeWorktime.date_start})},null,8,["modelValue","class"]),n.submitted&&!n.employeeWorktime.date_start?(Object(i["z"])(),Object(i["i"])("small",ue,"Tanggal mulai diperlukan.")):Object(i["h"])("",!0)]),Object(i["j"])("div",de,[pe,Object(i["n"])(p,{id:"date",dateFormat:"yy-mm-dd",showIcon:!0,showButtonBar:!0,modelValue:n.employeeWorktime.date_end,"onUpdate:modelValue":t[2]||(t[2]=function(e){return n.employeeWorktime.date_end=e}),required:"true",autofocus:"",class:Object(i["u"])({"p-invalid":n.submitted&&!n.employeeWorktime.date_end})},null,8,["modelValue","class"]),n.submitted&&!n.employeeWorktime.date_end?(Object(i["z"])(),Object(i["i"])("small",me,"Tanggal selesai diperlukan.")):Object(i["h"])("",!0)])]})),_:1},8,["visible"])])])}var fe=o("7467"),he={props:{employee:{},employeeService:null},data:function(){return{loading:!1,worktimes:null,employeeWorktimes:null,employeeWorktime:{},filters:{},lazyParams:{},columns:[{field:"id",header:"ID"},{field:"name",header:"Nama"},{field:"pivot.date_start",header:"Tanggal Mulai"},{field:"pivot.date_end",header:"Tanggal Selesai"}],employeeWorktimeDialog:!1,submitted:!1}},worktimeService:null,created:function(){this.worktimeService=new fe["a"],this.employeeWorktimes=this.employee.worktimes},mounted:function(){this.initData()},methods:{initData:function(){var e=this;this.worktimeService.getAllWorktimes().then((function(t){e.worktimes=t}))},openNew:function(){this.employeeWorktime={},this.submitted=!1,this.employeeWorktimeDialog=!0},editPlace:function(e){this.employeeWorktime=Object(q["a"])({},e),this.employeeWorktimeDialog=!0},confirmDelete:function(e){var t=this;this.employeeWorktime=e,this.$swal({title:"Apakah anda yakin akan menghapus data ini ?",showCancelButton:!0,confirmButtonText:"Hapus"}).then((function(e){e.isConfirmed&&t.employeeService.deleteWorktime(t.employee,t.employeeWorktime).then((function(e){"redirectTo"in e&&(localStorage.removeItem("presence_app_token"),t.$router.push(e.redirectTo)),e.success?(t.employeeWorktimes=t.employeeWorktimes.filter((function(e){return e.id!==t.employeeWorktime.id})),t.$swal({icon:"success",title:"Success",text:e.message}),t.employeeWorktimeDialog=!1,t.employeeWorktime={}):t.$swal({icon:"error",title:"Oops...",text:e.message})}))}))},hideDialog:function(){this.employeeWorktimeDialog=!1,this.submitted=!1},saveWorktime:function(){var e=this;this.submitted=!0;var t=this.employeeWorktime.date_start,o=t.getDate()<10?"0"+t.getDate():t.getDate(),i=t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1;this.employeeWorktime.date_start=t.getFullYear()+"-"+i+"-"+o,t=this.employeeWorktime.date_end,o=t.getDate()<10?"0"+t.getDate():t.getDate(),i=t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1,this.employeeWorktime.date_end=t.getFullYear()+"-"+i+"-"+o,this.employeeService.addWorktime(this.employee,this.employeeWorktime).then((function(t){if("redirectTo"in t&&(localStorage.removeItem("presence_app_token"),e.$router.push(t.redirectTo)),t.success){e.$swal({icon:"success",title:"Success",text:t.message});var o=e.worktimes.find((function(t){return t.id===e.employeeWorktime.worktime_id}));e.employeeWorktimes.push({name:o.name,pivot:{date_start:e.employeeWorktime.date_start,date_end:e.employeeWorktime.date_end}}),e.employeeWorktimeDialog=!1,e.employeeWorktime={}}else e.$swal({icon:"error",title:"Oops...",text:t.message})}))},findIndexById:function(e){for(var t=-1,o=0;o<this.employeeWorktimes.length;o++)if(this.employeeWorktimes[o].id===e){t=o;break}return t}}};const je=Q()(he,[["render",be]]);var ye=je,Oe={components:{DetailPlace:Z,DetailWorktime:ye},data:function(){return{employeeId:null,employee:{},roleDialog:!1,submitted:!1,user_role:"",roleLists:[{name:"Pegawai",value:"pegawai"},{name:"Kasubag Umum",value:"kasubagumum"},{name:"Admin BKD",value:"adminkepegawaian"},{name:"Admin OPD",value:"adminopd"}]}},employeeService:null,created:function(){this.employeeId=this.$route.params.id,this.employeeService=new B["a"]},mounted:function(){this.initData()},methods:{initData:function(){var e=this;this.employeeService.getEmployee(this.employeeId).then((function(t){e.employee=t}))},editRole:function(){this.roleDialog=!0,this.user_role=this.employee.user.role},hideRoleDialog:function(){this.roleDialog=!1,this.submitted=!1},saveRole:function(){var e=this;this.submitted=!0,this.employeeService.updateRole(this.employee.user,this.user_role).then((function(t){"redirectTo"in t&&(localStorage.removeItem("presence_app_token"),e.$router.push(t.redirectTo)),t.success?(e.$swal({icon:"success",title:"Success",text:t.message}),e.roleDialog=!1,e.employee.user.role=e.user_role):e.$swal({icon:"error",title:"Oops...",text:t.message})}))},patchPlace:function(){var e=this;this.employeeService.patchPlace(this.employee).then((function(t){"redirectTo"in t&&(localStorage.removeItem("presence_app_token"),e.$router.push(t.redirectTo)),t.success?(e.$swal({icon:"success",title:"Success",text:t.message}),e.employee.is_free_place=!e.employee.is_free_place):e.$swal({icon:"error",title:"Oops...",text:t.message})}))}}};const ge=Q()(Oe,[["render",z]]);t["default"]=ge},b64b:function(e,t,o){var i=o("23e7"),a=o("7b0b"),n=o("df75"),r=o("d039"),l=r((function(){n(1)}));i({target:"Object",stat:!0,forced:l},{keys:function(e){return n(a(e))}})},bee2:function(e,t,o){"use strict";function i(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function a(e,t,o){return t&&i(e.prototype,t),o&&i(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e}o.d(t,"a",(function(){return a}))},d4ec:function(e,t,o){"use strict";o.d(t,"a",(function(){return i}));o("d9e2");function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},dbb4:function(e,t,o){var i=o("23e7"),a=o("83ab"),n=o("56ef"),r=o("fc6a"),l=o("06cf"),c=o("8418");i({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(e){var t,o,i=r(e),a=l.f,s=n(i),u={},d=0;while(s.length>d)o=a(i,t=s[d++]),void 0!==o&&c(u,t,o);return u}})},e439:function(e,t,o){var i=o("23e7"),a=o("d039"),n=o("fc6a"),r=o("06cf").f,l=o("83ab"),c=a((function(){r(1)})),s=!l||c;i({target:"Object",stat:!0,forced:s,sham:!l},{getOwnPropertyDescriptor:function(e,t){return r(n(e),t)}})}}]);
//# sourceMappingURL=chunk-1496dd92.17e7f5ff.js.map