(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54d1993c"],{"06d6":function(e,t,o){"use strict";o.d(t,"a",(function(){return a}));var r=o("5530"),n=o("d4ec"),i=o("bee2"),a=(o("d3b7"),o("e9c4"),function(){function e(){Object(n["a"])(this,e)}return Object(i["a"])(e,[{key:"getEmployees",value:function(e){var t="";if(e){t="page="+(e.page+1)+"&per_page="+e.rows;var o=1==e.sortOrder?"asc":"desc";t+="&order_by="+o,null!=e.sortField&&(t+="&sort_by="+e.sortField),e.filters.global.value&&(t+="&keyword="+e.filters.global.value)}return fetch("http://103.151.71.42/api/employees?"+t,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"getEmployeesReport",value:function(e,t){var o="";if(e){o="page="+(e.page+1)+"&per_page="+e.rows;var r=1==e.sortOrder?"asc":"desc";o+="&order_by="+r,null!=e.sortField&&(o+="&sort_by="+e.sortField),e.filters.global.value&&(o+="&keyword="+e.filters.global.value)}return fetch("http://103.151.71.42/api/employees/reports/"+t+"?"+o,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"getEmployee",value:function(e){return fetch("http://103.151.71.42/api/employees/"+e,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"getPresence",value:function(e,t){return fetch("http://103.151.71.42/api/employees/"+e+"/presences/"+t,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"updateEmployee",value:function(e){return fetch("http://103.151.71.42/api/employees/"+e.id+"/place",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({lat:e.lat,lng:e.lng,radius:e.radius})}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"updateRole",value:function(e,t){var o=Object(r["a"])({},e);return o.role=t,fetch("http://103.151.71.42/api/users/"+e.id,{method:"PUT",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(o)}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"addPlace",value:function(e,t){return fetch("http://103.151.71.42/api/employees/"+e.id+"/place",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(t)}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"deletePlace",value:function(e,t){return fetch("http://103.151.71.42/api/employees/"+e.id+"/place",{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({place_id:t.id})}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"patchPlace",value:function(e){return fetch("http://103.151.71.42/api/employees/"+e.id+"/place",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"addWorktime",value:function(e,t){return fetch("http://103.151.71.42/api/employees/"+e.id+"/worktime",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(t)}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"deleteWorktime",value:function(e,t){return fetch("http://103.151.71.42/api/employees/"+e.id+"/worktime",{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({worktime_id:t.id})}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"actionPresence",value:function(e,t){return fetch("http://103.151.71.42/api/employees/"+t.employee_id+"/presences/"+t.id,{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({status:e})}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"insertPresence",value:function(e,t){return fetch("http://103.151.71.42/api/employees/"+e+"/presences",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")},body:t}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}}]),e}())},"4de4":function(e,t,o){"use strict";var r=o("23e7"),n=o("b727").filter,i=o("1dde"),a=i("filter");r({target:"Array",proto:!0,forced:!a},{filter:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},5530:function(e,t,o){"use strict";o.d(t,"a",(function(){return i}));o("b64b"),o("a4d3"),o("4de4"),o("d3b7"),o("e439"),o("159b"),o("dbb4");function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}},7467:function(e,t,o){"use strict";o.d(t,"a",(function(){return i}));var r=o("d4ec"),n=o("bee2"),i=(o("d3b7"),o("e9c4"),function(){function e(){Object(r["a"])(this,e)}return Object(n["a"])(e,[{key:"getWorktimes",value:function(e){var t="page="+(e.page+1)+"&per_page="+e.rows,o=1==e.sortOrder?"asc":"desc";return t+="&order_by="+o,null!=e.sortField&&(t+="&sort_by="+e.sortField),e.filters.global.value&&(t+="&keyword="+e.filters.global.value),fetch("http://103.151.71.42/api/worktimes?"+t,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"getAllWorktimes",value:function(){return fetch("http://103.151.71.42/api/worktimes?response=array",{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"createWorktime",value:function(e){return fetch("http://103.151.71.42/api/worktimes",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(e)}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"updateWorktime",value:function(e){return fetch("http://103.151.71.42/api/worktimes/"+e.id,{method:"PUT",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(e)}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"deleteWorktime",value:function(e){return fetch("http://103.151.71.42/api/worktimes/"+e.id,{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(e)}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}}]),e}())},"7db0":function(e,t,o){"use strict";var r=o("23e7"),n=o("b727").find,i=o("44d2"),a="find",l=!0;a in[]&&Array(1)[a]((function(){l=!1})),r({target:"Array",proto:!0,forced:l},{find:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),i(a)},ae80:function(e,t,o){"use strict";o.r(t);o("b0c0"),o("7db0"),o("d3b7"),o("b64b");var r=o("7a23"),n={class:"grid"},i={class:"col-12"},a={class:"card"},l=Object(r["j"])("div",{class:"font-medium text-3xl text-900 mb-3"},"Detail Pegawai",-1),c={class:"list-none p-0 m-0"},s={class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},u=Object(r["j"])("div",{class:"text-500 w-6 md:w-2 font-medium"},"NIP",-1),d={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},p={class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},m=Object(r["j"])("div",{class:"text-500 w-6 md:w-2 font-medium"},"Nama",-1),f={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},b={class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},h=Object(r["j"])("div",{class:"text-500 w-6 md:w-2 font-medium"},"Golongan",-1),j={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},y={class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},g=Object(r["j"])("div",{class:"text-500 w-6 md:w-2 font-medium"},"Jabatan",-1),O={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},k={class:"flex align-items-center py-3 px-2 border-top-1 border-bottom-1 surface-border flex-wrap"},v=Object(r["j"])("div",{class:"text-500 w-6 md:w-2 font-medium"},"Instansi",-1),w={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1 line-height-3"},_={class:"flex align-items-center py-3 px-2 border-top-1 border-bottom-1 surface-border flex-wrap"},x=Object(r["j"])("div",{class:"text-500 w-6 md:w-2 font-medium"},"System Role",-1),S={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1 line-height-3"},T=Object(r["m"])(" - "),W={class:"flex align-items-center py-3 px-2 border-top-1 border-bottom-1 surface-border flex-wrap"},D=Object(r["j"])("div",{class:"text-500 w-6 md:w-2 font-medium"},"Bebas Lokasi",-1),I={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1 line-height-3"},P={class:"field"},C=Object(r["j"])("label",{for:"name"},"Role Name",-1),L={key:0,class:"p-invalid"};function z(e,t,o,z,B,R){var F=Object(r["H"])("Dropdown"),U=Object(r["H"])("Button"),E=Object(r["H"])("Dialog"),J=Object(r["H"])("DetailWorktime");return Object(r["z"])(),Object(r["i"])("div",n,[Object(r["j"])("div",i,[Object(r["j"])("div",a,[l,Object(r["j"])("ul",c,[Object(r["j"])("li",s,[u,Object(r["j"])("div",d,Object(r["L"])(B.employee.nip),1)]),Object(r["j"])("li",p,[m,Object(r["j"])("div",f,Object(r["L"])(B.employee.name),1)]),Object(r["j"])("li",b,[h,Object(r["j"])("div",j,Object(r["L"])(B.employee.group),1)]),Object(r["j"])("li",y,[g,Object(r["j"])("div",O,Object(r["L"])(B.employee.position),1)]),Object(r["j"])("li",k,[v,Object(r["j"])("div",w,Object(r["L"])(B.employee.workunit?B.employee.workunit.name:""),1)]),Object(r["j"])("li",_,[x,Object(r["j"])("div",S,[Object(r["m"])(Object(r["L"])(B.employee.user?B.roleLists.find((function(e){return e.value===B.employee.user.role})).name:"")+" ",1),B.employee.user?(Object(r["z"])(),Object(r["i"])(r["a"],{key:0},[T,Object(r["j"])("a",{href:"javascript:void(0)",onClick:t[0]||(t[0]=function(e){return R.editRole()})},"Edit")],64)):Object(r["h"])("",!0)])]),Object(r["j"])("li",W,[D,Object(r["j"])("div",I,[Object(r["m"])(Object(r["L"])(B.employee.is_free_place?"Ya":"Tidak")+" "+Object(r["L"])("adminsistem"!=B.role?"-":"")+" ",1),"adminsistem"!=B.role?(Object(r["z"])(),Object(r["i"])("a",{key:0,href:"javascript:void(0)",onClick:t[1]||(t[1]=function(e){return R.patchPlace()})},"Update")):Object(r["h"])("",!0)])])])])]),Object(r["n"])(E,{visible:B.roleDialog,"onUpdate:visible":t[3]||(t[3]=function(e){return B.roleDialog=e}),style:{width:"450px"},header:"Edit System Role",modal:!0,class:"p-fluid"},{footer:Object(r["R"])((function(){return[Object(r["n"])(U,{label:"Cancel",icon:"pi pi-times",class:"p-button-text",onClick:R.hideRoleDialog},null,8,["onClick"]),Object(r["n"])(U,{label:"Save",icon:"pi pi-check",class:"p-button-text",onClick:R.saveRole},null,8,["onClick"])]})),default:Object(r["R"])((function(){return[Object(r["j"])("div",P,[C,Object(r["n"])(F,{modelValue:B.user_role,"onUpdate:modelValue":t[2]||(t[2]=function(e){return B.user_role=e}),options:B.roleLists,optionLabel:"name",optionValue:"value",placeholder:"Pilih Role",class:Object(r["u"])({"p-invalid":B.submitted&&!B.user_role})},null,8,["modelValue","options","class"]),B.submitted&&!B.user_role?(Object(r["z"])(),Object(r["i"])("small",L,"Role name diperlukan.")):Object(r["h"])("",!0)])]})),_:1},8,["visible"]),0!=Object.keys(B.employee).length?(Object(r["z"])(),Object(r["g"])(J,{key:0,employee:B.employee,employeeService:e.employeeService},null,8,["employee","employeeService"])):Object(r["h"])("",!0)])}var B=o("06d6"),R={class:"col-12"},F={class:"card"},U={class:"my-2"},E=Object(r["j"])("div",{class:"flex flex-column md:flex-row md:justify-content-between md:align-items-center"},[Object(r["j"])("h5",{class:"m-0"},"Detail Jam Kerja")],-1),J=Object(r["j"])("span",{class:"p-column-title"},"ID",-1),N={class:"field"},H=Object(r["j"])("label",{for:"name"},"Jam Kerja",-1),V={key:0,class:"p-invalid"},$={class:"field"},A=Object(r["j"])("label",{for:"date"},"Tanggal Mulai",-1),M={key:0,class:"p-invalid"},K={class:"field"},Y=Object(r["j"])("label",{for:"date"},"Tanggal Selesai",-1),q={key:0,class:"p-invalid"};function G(e,t,o,n,i,a){var l=Object(r["H"])("Button"),c=Object(r["H"])("Toolbar"),s=Object(r["H"])("Column"),u=Object(r["H"])("DataTable"),d=Object(r["H"])("Dropdown"),p=Object(r["H"])("Calendar"),m=Object(r["H"])("Dialog");return Object(r["z"])(),Object(r["i"])("div",R,[Object(r["j"])("div",F,[Object(r["n"])(c,{class:"mb-4"},{start:Object(r["R"])((function(){return[Object(r["j"])("div",U,[Object(r["n"])(l,{label:"New",icon:"pi pi-plus",class:"p-button-success mr-2",onClick:a.openNew},null,8,["onClick"])])]})),_:1}),Object(r["n"])(u,{value:i.employeeWorktimes,ref:"dt",dataKey:"id",responsiveLayout:"scroll"},{header:Object(r["R"])((function(){return[E]})),default:Object(r["R"])((function(){return[Object(r["n"])(s,{field:"id",header:"ID",sortable:!0},{body:Object(r["R"])((function(e){return[J,Object(r["m"])(" "+Object(r["L"])(e.data.id),1)]})),_:1}),Object(r["n"])(s,{field:"name",header:"Nama"}),Object(r["n"])(s,{field:"pivot.date_start",header:"Tanggal Mulai"}),Object(r["n"])(s,{field:"pivot.date_end",header:"Tanggal Selesai"}),Object(r["n"])(s,{header:"Aksi"},{body:Object(r["R"])((function(e){return[e.data.id?(Object(r["z"])(),Object(r["g"])(l,{key:0,icon:"pi pi-trash",class:"p-button-rounded p-button-warning mt-2",onClick:function(t){return a.confirmDelete(e.data)}},null,8,["onClick"])):Object(r["h"])("",!0)]})),_:1})]})),_:1},8,["value"]),Object(r["n"])(m,{visible:i.employeeWorktimeDialog,"onUpdate:visible":t[3]||(t[3]=function(e){return i.employeeWorktimeDialog=e}),style:{width:"450px"},header:"Form Detail Jam Kerja",modal:!0,class:"p-fluid"},{footer:Object(r["R"])((function(){return[Object(r["n"])(l,{label:"Cancel",icon:"pi pi-times",class:"p-button-text",onClick:a.hideDialog},null,8,["onClick"]),Object(r["n"])(l,{label:"Save",icon:"pi pi-check",class:"p-button-text",onClick:a.saveWorktime},null,8,["onClick"])]})),default:Object(r["R"])((function(){return[Object(r["j"])("div",N,[H,Object(r["n"])(d,{modelValue:i.employeeWorktime.worktime_id,"onUpdate:modelValue":t[0]||(t[0]=function(e){return i.employeeWorktime.worktime_id=e}),options:i.worktimes,optionLabel:"name",optionValue:"id",placeholder:"Pilih Jam Kerja",class:Object(r["u"])({"p-invalid":i.submitted&&!i.employeeWorktime.worktime_id})},null,8,["modelValue","options","class"]),i.submitted&&!i.employeeWorktime.worktime_id?(Object(r["z"])(),Object(r["i"])("small",V,"Jam kerja diperlukan.")):Object(r["h"])("",!0)]),Object(r["j"])("div",$,[A,Object(r["n"])(p,{id:"date",dateFormat:"yy-mm-dd",showIcon:!0,showButtonBar:!0,modelValue:i.employeeWorktime.date_start,"onUpdate:modelValue":t[1]||(t[1]=function(e){return i.employeeWorktime.date_start=e}),required:"true",autofocus:"",class:Object(r["u"])({"p-invalid":i.submitted&&!i.employeeWorktime.date_start})},null,8,["modelValue","class"]),i.submitted&&!i.employeeWorktime.date_start?(Object(r["z"])(),Object(r["i"])("small",M,"Tanggal mulai diperlukan.")):Object(r["h"])("",!0)]),Object(r["j"])("div",K,[Y,Object(r["n"])(p,{id:"date",dateFormat:"yy-mm-dd",showIcon:!0,showButtonBar:!0,modelValue:i.employeeWorktime.date_end,"onUpdate:modelValue":t[2]||(t[2]=function(e){return i.employeeWorktime.date_end=e}),required:"true",autofocus:"",class:Object(r["u"])({"p-invalid":i.submitted&&!i.employeeWorktime.date_end})},null,8,["modelValue","class"]),i.submitted&&!i.employeeWorktime.date_end?(Object(r["z"])(),Object(r["i"])("small",q,"Tanggal selesai diperlukan.")):Object(r["h"])("",!0)])]})),_:1},8,["visible"])])])}var Q=o("5530"),X=(o("4de4"),o("7467")),Z={props:{employee:{},employeeService:null},data:function(){return{loading:!1,worktimes:null,employeeWorktimes:null,employeeWorktime:{},filters:{},lazyParams:{},columns:[{field:"id",header:"ID"},{field:"name",header:"Nama"},{field:"pivot.date_start",header:"Tanggal Mulai"},{field:"pivot.date_end",header:"Tanggal Selesai"}],employeeWorktimeDialog:!1,submitted:!1}},worktimeService:null,created:function(){this.worktimeService=new X["a"],this.employeeWorktimes=this.employee.worktimes},mounted:function(){this.initData()},methods:{initData:function(){var e=this;this.worktimeService.getAllWorktimes().then((function(t){e.worktimes=t}))},openNew:function(){this.employeeWorktime={},this.submitted=!1,this.employeeWorktimeDialog=!0},editPlace:function(e){this.employeeWorktime=Object(Q["a"])({},e),this.employeeWorktimeDialog=!0},confirmDelete:function(e){var t=this;this.employeeWorktime=e,this.$swal({title:"Apakah anda yakin akan menghapus data ini ?",showCancelButton:!0,confirmButtonText:"Hapus"}).then((function(e){e.isConfirmed&&t.employeeService.deleteWorktime(t.employee,t.employeeWorktime).then((function(e){"redirectTo"in e&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),t.$router.push(e.redirectTo)),e.success?(t.employeeWorktimes=t.employeeWorktimes.filter((function(e){return e.id!==t.employeeWorktime.id})),t.$swal({icon:"success",title:"Success",text:e.message}),t.employeeWorktimeDialog=!1,t.employeeWorktime={}):t.$swal({icon:"error",title:"Oops...",text:e.message})}))}))},hideDialog:function(){this.employeeWorktimeDialog=!1,this.submitted=!1},saveWorktime:function(){var e=this;this.submitted=!0;var t=this.employeeWorktime.date_start,o=t.getDate()<10?"0"+t.getDate():t.getDate(),r=t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1;this.employeeWorktime.date_start=t.getFullYear()+"-"+r+"-"+o,t=this.employeeWorktime.date_end,o=t.getDate()<10?"0"+t.getDate():t.getDate(),r=t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1,this.employeeWorktime.date_end=t.getFullYear()+"-"+r+"-"+o,this.employeeService.addWorktime(this.employee,this.employeeWorktime).then((function(t){if("redirectTo"in t&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),e.$router.push(t.redirectTo)),t.success){e.$swal({icon:"success",title:"Success",text:t.message});var o=e.worktimes.find((function(t){return t.id===e.employeeWorktime.worktime_id}));e.employeeWorktimes.push({name:o.name,pivot:{date_start:e.employeeWorktime.date_start,date_end:e.employeeWorktime.date_end}}),e.employeeWorktimeDialog=!1,e.employeeWorktime={}}else e.$swal({icon:"error",title:"Oops...",text:t.message})}))},findIndexById:function(e){for(var t=-1,o=0;o<this.employeeWorktimes.length;o++)if(this.employeeWorktimes[o].id===e){t=o;break}return t}}},ee=o("6b0d"),te=o.n(ee);const oe=te()(Z,[["render",G]]);var re=oe,ne={components:{DetailWorktime:re},data:function(){return{employeeId:null,employee:{},roleDialog:!1,submitted:!1,user_role:"",roleLists:[{name:"Pegawai",value:"pegawai"},{name:"Kasubag Umum",value:"kasubagumum"},{name:"Admin BKD",value:"adminkepegawaian"},{name:"Admin OPD",value:"adminopd"}],role:localStorage.getItem("presence_app_role")}},employeeService:null,created:function(){this.employeeId=this.$route.params.id,this.employeeService=new B["a"]},mounted:function(){this.initData()},methods:{initData:function(){var e=this;this.employeeService.getEmployee(this.employeeId).then((function(t){e.employee=t}))},editRole:function(){this.roleDialog=!0,this.user_role=this.employee.user.role},hideRoleDialog:function(){this.roleDialog=!1,this.submitted=!1},saveRole:function(){var e=this;this.submitted=!0,this.employeeService.updateRole(this.employee.user,this.user_role).then((function(t){"redirectTo"in t&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),e.$router.push(t.redirectTo)),t.success?(e.$swal({icon:"success",title:"Success",text:t.message}),e.roleDialog=!1,e.employee.user.role=e.user_role):e.$swal({icon:"error",title:"Oops...",text:t.message})}))},patchPlace:function(){var e=this;this.employeeService.patchPlace(this.employee).then((function(t){"redirectTo"in t&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),e.$router.push(t.redirectTo)),t.success?(e.$swal({icon:"success",title:"Success",text:t.message}),e.employee.is_free_place=!e.employee.is_free_place):e.$swal({icon:"error",title:"Oops...",text:t.message})}))}}};const ie=te()(ne,[["render",z]]);t["default"]=ie},b64b:function(e,t,o){var r=o("23e7"),n=o("7b0b"),i=o("df75"),a=o("d039"),l=a((function(){i(1)}));r({target:"Object",stat:!0,forced:l},{keys:function(e){return i(n(e))}})},bee2:function(e,t,o){"use strict";function r(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,t,o){return t&&r(e.prototype,t),o&&r(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e}o.d(t,"a",(function(){return n}))},d4ec:function(e,t,o){"use strict";o.d(t,"a",(function(){return r}));o("d9e2");function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},dbb4:function(e,t,o){var r=o("23e7"),n=o("83ab"),i=o("56ef"),a=o("fc6a"),l=o("06cf"),c=o("8418");r({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(e){var t,o,r=a(e),n=l.f,s=i(r),u={},d=0;while(s.length>d)o=n(r,t=s[d++]),void 0!==o&&c(u,t,o);return u}})},e439:function(e,t,o){var r=o("23e7"),n=o("d039"),i=o("fc6a"),a=o("06cf").f,l=o("83ab"),c=n((function(){a(1)})),s=!l||c;r({target:"Object",stat:!0,forced:s,sham:!l},{getOwnPropertyDescriptor:function(e,t){return a(i(e),t)}})}}]);
//# sourceMappingURL=chunk-54d1993c.cca8ebde.js.map