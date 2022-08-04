(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-42b286d8"],{"06d6":function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("5530"),r=a("d4ec"),o=a("bee2"),i=(a("d3b7"),a("e9c4"),function(){function e(){Object(r["a"])(this,e)}return Object(o["a"])(e,[{key:"getEmployees",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a="";if(e){a="page="+(e.page+1)+"&per_page="+e.rows;var n=1==e.sortOrder?"asc":"desc";a+="&order_by="+n,null!=e.sortField&&(a+="&sort_by="+e.sortField),e.filters.global.value&&(a+="&keyword="+e.filters.global.value)}var r=JSON.parse(localStorage.getItem("presence_user_data"));return r.workunit_id&&(a+="&workunit_id="+r.workunit_id),t&&(a+="&workunit_id="+t),fetch("http://103.151.71.42/api/employees?"+a,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"getEmployeesReport",value:function(e,t){var a="";if(e){a="page="+(e.page+1)+"&per_page="+e.rows;var n=1==e.sortOrder?"asc":"desc";a+="&order_by="+n,null!=e.sortField&&(a+="&sort_by="+e.sortField),e.filters.global.value&&(a+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(a+="&date_start="+e.date_start+"&date_end="+e.date_end)}return fetch("http://103.151.71.42/api/employees/reports/"+t+"?"+a,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"getEmployeesReportDetail",value:function(e,t){var a="";if(e){a="page="+(e.page+1)+"&per_page="+e.rows;var n=1==e.sortOrder?"asc":"desc";a+="&order_by="+n,null!=e.sortField&&(a+="&sort_by="+e.sortField),e.filters.global.value&&(a+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(a+="&date_start="+e.date_start+"&date_end="+e.date_end)}return fetch("http://103.151.71.42/api/employees/report-details/"+t+"?"+a,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"getEmployeesReportPdfLink",value:function(e,t){var a="";if(e){var n=1==e.sortOrder?"asc":"desc";a+="&order_by="+n,null!=e.sortField&&(a+="&sort_by="+e.sortField),e.filters.global.value&&(a+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(a+="&date_start="+e.date_start+"&date_end="+e.date_end)}return"http://103.151.71.42/api/employees/report-pdf/"+t+"?"+a}},{key:"getEmployeesReportDetailPdfLink",value:function(e,t){var a="";if(e){var n=1==e.sortOrder?"asc":"desc";a+="&order_by="+n,null!=e.sortField&&(a+="&sort_by="+e.sortField),e.filters.global.value&&(a+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(a+="&date_start="+e.date_start+"&date_end="+e.date_end)}return"http://103.151.71.42/api/employees/report-detail-pdf/"+t+"?"+a}},{key:"getEmployee",value:function(e){return fetch("http://103.151.71.42/api/employees/"+e,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"getPresence",value:function(e,t){return fetch("http://103.151.71.42/api/employees/"+e+"/presences/"+t,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"updateEmployee",value:function(e){return fetch("http://103.151.71.42/api/employees/"+e.id+"/place",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({lat:e.lat,lng:e.lng,radius:e.radius})}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"updateRole",value:function(e,t){var a=Object(n["a"])({},e);return a.role=t,fetch("http://103.151.71.42/api/users/"+e.id,{method:"PUT",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(a)}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"addPlace",value:function(e,t){return fetch("http://103.151.71.42/api/employees/"+e.id+"/place",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(t)}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"deletePlace",value:function(e,t){return fetch("http://103.151.71.42/api/employees/"+e.id+"/place",{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({place_id:t.id})}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"patchPlace",value:function(e){return fetch("http://103.151.71.42/api/employees/"+e.id+"/place",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"resetDevice",value:function(e){return fetch("http://103.151.71.42/api/employees/"+e.id+"/reset-device",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"addWorktime",value:function(e,t){return fetch("http://103.151.71.42/api/employees/"+e.id+"/worktime",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(t)}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"deleteWorktime",value:function(e,t){return fetch("http://103.151.71.42/api/employees/"+e.id+"/worktime",{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({worktime_id:t.id})}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"actionPresence",value:function(e,t){return fetch("http://103.151.71.42/api/employees/"+t.employee_id+"/presences/"+t.id,{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({status:e})}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"insertPresence",value:function(e,t){return fetch("http://103.151.71.42/api/employees/"+e+"/presences",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")},body:t}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}}]),e}())},2455:function(e,t,a){"use strict";a.r(t);var n=a("7a23"),r={class:"grid"},o={class:"col-12"},i={class:"card"},l={class:"my-2 d-flex"},s={class:"p-input-icon-left m-2"},c=Object(n["j"])("i",{class:"pi pi-search"},null,-1),u={class:"flex flex-column md:flex-row md:justify-content-between md:align-items-center"},d=Object(n["j"])("h5",{class:"m-0"},"Manajemen Cuti",-1),p={class:"flex"},h={class:"mt-2 md:mt-0 p-input-icon-left"},g=Object(n["j"])("i",{class:"pi pi-search"},null,-1),f=Object(n["j"])("span",{class:"p-column-title"},"ID",-1),m={class:"field"},b=Object(n["j"])("label",{for:"name"},"OPD",-1),j={key:0,class:"p-invalid"},y={class:"field"},_=Object(n["j"])("label",{for:"name"},"Pegawai",-1),k={key:0,class:"p-invalid"},v={class:"field"},O=Object(n["j"])("label",{for:"lat"},"Jenis Pengajuan",-1),w={key:0,class:"p-invalid"},S={class:"field"},T=Object(n["j"])("label",{for:"name"},"Waktu Mulai",-1),P={key:0,class:"p-invalid"},C={class:"field"},D=Object(n["j"])("label",{for:"name"},"Waktu Selesai",-1),I={key:0,class:"p-invalid"},F={class:"field"},L=Object(n["j"])("label",{for:"lat"},"Lampiran",-1),z={class:"p-component p-inputwrapper mr-3"},B={key:0,class:"p-invalid"};function U(e,t,a,U,V,A){var E=Object(n["I"])("Button"),W=Object(n["I"])("Calendar"),J=Object(n["I"])("Dropdown"),N=Object(n["I"])("InputText"),M=Object(n["I"])("Toolbar"),R=Object(n["I"])("Column"),x=Object(n["I"])("router-link"),$=Object(n["I"])("DataTable"),H=Object(n["I"])("Dialog");return Object(n["A"])(),Object(n["i"])("div",r,[Object(n["j"])("div",o,[Object(n["j"])("div",i,["adminkepegawaian"!=V.role?(Object(n["A"])(),Object(n["g"])(M,{key:0,class:"mb-4"},{start:Object(n["T"])((function(){return[Object(n["j"])("div",l,[Object(n["n"])(E,{label:"Pengajuan Cuti",class:"p-button-success m-2",onClick:A.openNew},null,8,["onClick"]),Object(n["n"])(W,{dateFormat:"yy-mm-dd",showIcon:!0,showButtonBar:!0,modelValue:V.date_start,"onUpdate:modelValue":t[0]||(t[0]=function(e){return V.date_start=e}),class:"m-2",placeholder:"Pilih Tanggal Mulai",onChange:e.onDateChange},null,8,["modelValue","onChange"]),Object(n["n"])(W,{dateFormat:"yy-mm-dd",showIcon:!0,showButtonBar:!0,modelValue:V.date_end,"onUpdate:modelValue":t[1]||(t[1]=function(e){return V.date_end=e}),class:"m-2",placeholder:"Pilih Tanggal Selesai",onChange:e.onDateChange},null,8,["modelValue","onChange"]),Object(n["n"])(J,{modelValue:V.selectedWorkunit.id,"onUpdate:modelValue":t[2]||(t[2]=function(e){return V.selectedWorkunit.id=e}),options:V.workunits,optionLabel:"name",optionValue:"id",class:"m-2",placeholder:"Pilih OPD"},null,8,["modelValue","options"]),Object(n["j"])("span",s,[c,Object(n["n"])(N,{modelValue:V.filters["global"].value,"onUpdate:modelValue":t[3]||(t[3]=function(e){return V.filters["global"].value=e}),placeholder:"Search...",onKeyup:A.onFilter},null,8,["modelValue","onKeyup"])]),Object(n["n"])(E,{label:"Filter",icon:"pi pi-search",class:"p-button-success m-2",onClick:A.onSearch},null,8,["onClick"])])]})),_:1})):Object(n["h"])("",!0),Object(n["n"])($,{value:V.presences,lazy:!0,paginator:!0,rows:10,filters:V.filters,"onUpdate:filters":t[5]||(t[5]=function(e){return V.filters=e}),ref:"dt",dataKey:"id",totalRecords:V.totalRecords,loading:V.loading,onPage:t[6]||(t[6]=function(e){return A.onPage(e)}),onSort:t[7]||(t[7]=function(e){return A.onSort(e)}),onFilter:t[8]||(t[8]=function(e){return A.onFilter(e)}),globalFilterFields:["name"],selection:e.selectedCustomers,"onUpdate:selection":t[9]||(t[9]=function(t){return e.selectedCustomers=t}),selectAll:V.selectAll,onSelectAllChange:e.onSelectAllChange,onRowSelect:e.onRowSelect,onRowUnselect:e.onRowUnselect,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} products",responsiveLayout:"scroll"},{header:Object(n["T"])((function(){return[Object(n["j"])("div",u,[d,Object(n["j"])("div",p,[Object(n["j"])("span",h,[g,Object(n["n"])(N,{modelValue:V.filters["global"].value,"onUpdate:modelValue":t[4]||(t[4]=function(e){return V.filters["global"].value=e}),placeholder:"Search...",onKeyup:A.onFilter},null,8,["modelValue","onKeyup"])])])])]})),default:Object(n["T"])((function(){return[Object(n["n"])(R,{field:"id",header:"ID",sortable:!0},{body:Object(n["T"])((function(e){return[f,Object(n["m"])(" "+Object(n["M"])(e.data.id),1)]})),_:1}),Object(n["n"])(R,{field:"employee.name",header:"Nama"}),Object(n["n"])(R,{field:"worktime_item.name",header:"Jadwal"}),Object(n["n"])(R,{field:"workunit.name",header:"OPD"}),Object(n["n"])(R,{field:"type",header:"Tipe"}),Object(n["n"])(R,{field:"status",header:"Status"}),Object(n["n"])(R,{field:"started_at",header:"Waktu Mulai"}),Object(n["n"])(R,{field:"finished_at",header:"Waktu Selesai"}),Object(n["n"])(R,{field:"created_at",header:"Tanggal"}),"kasubagumum"!=V.role?(Object(n["A"])(),Object(n["g"])(R,{key:0,header:"Aksi"},{body:Object(n["T"])((function(e){return[Object(n["n"])(x,{to:{name:"presences.detail",params:{id:e.data.id,employee_id:e.data.employee.id}}},{default:Object(n["T"])((function(){return[Object(n["n"])(E,{icon:"pi pi-eye",class:"p-button-rounded p-button-info mr-2"})]})),_:2},1032,["to"]),"diajukan"==e.data.status?(Object(n["A"])(),Object(n["g"])(E,{key:0,icon:"pi pi-check",class:"p-button-rounded p-button-success mr-2",onClick:function(t){return A.action("setujui",e.data)}},null,8,["onClick"])):Object(n["h"])("",!0),"diajukan"==e.data.status?(Object(n["A"])(),Object(n["g"])(E,{key:1,icon:"pi pi-times",class:"p-button-rounded p-button-danger mr-2",onClick:function(t){return A.action("tolak",e.data)}},null,8,["onClick"])):Object(n["h"])("",!0)]})),_:1})):Object(n["h"])("",!0)]})),_:1},8,["value","filters","totalRecords","loading","selection","selectAll","onSelectAllChange","onRowSelect","onRowUnselect"]),Object(n["n"])(H,{visible:V.pengajuanDialog,"onUpdate:visible":t[15]||(t[15]=function(e){return V.pengajuanDialog=e}),style:{width:"450px"},header:"Form Pengajuan Cuti",modal:!0,class:"p-fluid"},{footer:Object(n["T"])((function(){return[Object(n["n"])(E,{label:"Cancel",icon:"pi pi-times",class:"p-button-text",onClick:A.hideDialog},null,8,["onClick"]),Object(n["n"])(E,{label:"Save",icon:"pi pi-check",class:"p-button-text",onClick:A.savePengajuan},null,8,["onClick"])]})),default:Object(n["T"])((function(){return[Object(n["j"])("div",m,[b,Object(n["n"])(J,{modelValue:V.pengajuan.workunit_id,"onUpdate:modelValue":t[10]||(t[10]=function(e){return V.pengajuan.workunit_id=e}),options:V.workunits,optionLabel:"name",optionValue:"id",class:Object(n["u"])(["mr-3",{"p-invalid":V.submitted&&!V.pengajuan.workunit_id}]),required:"true",placeholder:"Pilih OPD",onChange:A.onPengajuanWorkunitChange},null,8,["modelValue","options","onChange","class"]),V.submitted&&!V.pengajuan.workunit_id?(Object(n["A"])(),Object(n["i"])("small",j,"OPD diperlukan.")):Object(n["h"])("",!0)]),Object(n["j"])("div",y,[_,Object(n["n"])(J,{modelValue:V.pengajuan.employee_id,"onUpdate:modelValue":t[11]||(t[11]=function(e){return V.pengajuan.employee_id=e}),options:V.employees,optionLabel:"name",optionValue:"id",class:Object(n["u"])(["mr-3",{"p-invalid":V.submitted&&!V.pengajuan.employee_id}]),required:"true",placeholder:"Pilih Pegawai"},null,8,["modelValue","options","class"]),V.submitted&&!V.pengajuan.employee_id?(Object(n["A"])(),Object(n["i"])("small",k,"Pegawai diperlukan.")):Object(n["h"])("",!0)]),Object(n["j"])("div",v,[O,Object(n["n"])(J,{modelValue:V.pengajuan.type,"onUpdate:modelValue":t[12]||(t[12]=function(e){return V.pengajuan.type=e}),options:V.paid_leaves,optionLabel:"name",optionValue:"name",class:Object(n["u"])(["mr-3",{"p-invalid":V.submitted&&!V.pengajuan.type}]),required:"true",placeholder:"Pilih Jenis Pengajuan"},null,8,["modelValue","options","class"]),V.submitted&&!V.pengajuan.type?(Object(n["A"])(),Object(n["i"])("small",w,"Jenis pengajuan diperlukan.")):Object(n["h"])("",!0)]),Object(n["j"])("div",S,[T,Object(n["n"])(W,{modelValue:V.pengajuan.started_at,"onUpdate:modelValue":t[13]||(t[13]=function(e){return V.pengajuan.started_at=e}),class:Object(n["u"])({"p-invalid":V.submitted&&!V.pengajuan.started_at})},null,8,["modelValue","class"]),V.submitted&&!V.pengajuan.started_at?(Object(n["A"])(),Object(n["i"])("small",P,"Waktu Mulai diperlukan.")):Object(n["h"])("",!0)]),Object(n["j"])("div",C,[D,Object(n["n"])(W,{modelValue:V.pengajuan.finished_at,"onUpdate:modelValue":t[14]||(t[14]=function(e){return V.pengajuan.finished_at=e}),class:Object(n["u"])({"p-invalid":V.submitted&&!V.pengajuan.finished_at})},null,8,["modelValue","class"]),V.submitted&&!V.pengajuan.finished_at?(Object(n["A"])(),Object(n["i"])("small",I,"Waktu Mulai diperlukan.")):Object(n["h"])("",!0)]),Object(n["j"])("div",F,[L,Object(n["j"])("div",z,[Object(n["j"])("input",{type:"file",ref:"lampiran",class:Object(n["u"])(["",{"p-invalid":V.submitted&&!V.pengajuan.attachment}]),required:"true"},null,2)]),V.submitted&&!V.pengajuan.attachment?(Object(n["A"])(),Object(n["i"])("small",B,"File lampiran diperlukan.")):Object(n["h"])("",!0)])]})),_:1},8,["visible"])])])])}a("4de4"),a("d3b7");var V=a("0393"),A=a("9ee9"),E=a("fca4"),W=a("06d6"),J=a("c084"),N={data:function(){return{loading:!1,pengajuanDialog:!1,employees:null,paid_leaves:null,pengajuan:{},submitted:!1,onsearchtimeout:null,totalRecords:0,presences:null,presence:{},selectedPresences:null,selectAll:!1,filters:{},lazyParams:{},workunits:[],selectedWorkunit:{},role:localStorage.getItem("presence_app_role"),date_start:null,date_end:null}},presenceService:null,workunitService:null,employeeService:null,paidLeaveService:null,created:function(){this.presenceService=new A["a"],this.workunitService=new E["a"],this.employeeService=new W["a"],this.paidLeaveService=new J["a"],this.initFilters()},mounted:function(){this.loading=!0,this.lazyParams={first:0,page:0,rows:this.$refs.dt.rows,sortField:null,sortOrder:1,filters:this.filters,date_start:null,date_end:null},this.loadLazyData()},methods:{loadLazyData:function(){var e=this;this.loading=!0,setTimeout((function(){e.workunitService.getWorkunits().then((function(t){"redirectTo"in t&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),e.$router.push(t.redirectTo)),e.workunits=t.data,e.loading=!1})),e.selectedWorkunit.id&&e.workunitService.getPresences(e.lazyParams,e.selectedWorkunit.id,2).then((function(t){"redirectTo"in t&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),e.$router.push(t.redirectTo)),e.presences=t.data,e.loading=!1})),e.paidLeaveService.getPaidLeaves().then((function(t){"redirectTo"in t&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),e.$router.push(t.redirectTo)),e.paid_leaves=t.data}))}),1e3*Math.random()+250)},onPage:function(e){this.lazyParams=e,this.loadLazyData()},onSort:function(e){var t=this.lazyParams.page;this.lazyParams=e,this.lazyParams.page=t,this.loadLazyData()},onFilter:function(){var e=this;this.onsearchtimeout&&clearTimeout(this.onsearchtimeout),this.onsearchtimeout=setTimeout((function(){e.lazyParams.filters=e.filters,e.loadLazyData()}),1e3)},onSearch:function(){if(this.lazyParams.filters=this.filters,this.date_start){var e=this.date_start,t=e.getDate()<10?"0"+e.getDate():e.getDate(),a=e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1;this.lazyParams.date_start=e.getFullYear()+"-"+a+"-"+t}if(this.date_end){var n=this.date_end,r=n.getDate()<10?"0"+n.getDate():n.getDate(),o=n.getMonth()+1<10?"0"+(n.getMonth()+1):n.getMonth()+1;this.lazyParams.date_end=n.getFullYear()+"-"+o+"-"+r}this.loadLazyData()},openNew:function(){this.pengajuanDialog=!0},savePengajuan:function(){var e=this;this.submitted=!0;var t=this.$refs.lampiran;if(t.files.length){var a=this.pengajuan.started_at,n=a.getDate()<10?"0"+a.getDate():a.getDate(),r=a.getMonth()+1<10?"0"+(a.getMonth()+1):a.getMonth()+1;this.pengajuan.started_at=a.getFullYear()+"-"+r+"-"+n,a=this.pengajuan.finished_at,n=a.getDate()<10?"0"+a.getDate():a.getDate(),r=a.getMonth()+1<10?"0"+(a.getMonth()+1):a.getMonth()+1,this.pengajuan.finished_at=a.getFullYear()+"-"+r+"-"+n,this.pengajuan.attachment=!0;var o=new FormData;o.append("type",this.pengajuan.type),o.append("attachment",t.files[0]),o.append("started_at",this.pengajuan.started_at),o.append("finished_at",this.pengajuan.finished_at),this.employeeService.insertPresence(this.pengajuan.employee_id,o).then((function(t){"redirectTo"in t&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),e.$router.push(t.redirectTo)),t.success?(e.$swal({icon:"success",title:"Success",text:t.message}),e.selectedWorkunit.id=e.pengajuan.workunit_id,e.loadLazyData(),e.hideDialog()):e.$swal({icon:"error",title:"Oops...",text:t.message})}))}},onWorkunitChange:function(){this.lazyParams.filters=this.filters,this.loadLazyData()},onPengajuanWorkunitChange:function(){var e=this;this.workunitService.getWorkunit(this.pengajuan.workunit_id).then((function(t){"redirectTo"in t&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),e.$router.push(t.redirectTo)),e.employees=t.employees}))},initFilters:function(){this.filters={global:{value:null,matchMode:V["a"].CONTAINS}}},confirmDelete:function(e){var t=this;this.presence=e,this.$swal({title:"Apakah anda yakin akan menghapus data ini ?",showCancelButton:!0,confirmButtonText:"Hapus"}).then((function(e){e.isConfirmed&&t.presenceService.deletePresence(t.presence).then((function(e){e.success?(t.presences=t.presences.filter((function(e){return e.id!==t.presence.id})),t.$swal({icon:"success",title:"Success",text:e.message}),t.presenceDialog=!1,t.presence={}):t.$swal({icon:"error",title:"Oops...",text:e.message})}))}))},action:function(e,t){var a=this;this.$swal({title:"Apakah anda yakin akan "+e+" data ini ?",showCancelButton:!0,confirmButtonText:"Ya"}).then((function(n){n.isConfirmed&&a.employeeService.actionPresence("di"+e,t).then((function(e){e.success?(a.$swal({icon:"success",title:"Success",text:e.message}),a.loadLazyData()):a.$swal({icon:"error",title:"Oops...",text:e.message})}))}))},hideDialog:function(){this.pengajuanDialog=!1,this.submitted=!1}}},M=a("6b0d"),R=a.n(M);const x=R()(N,[["render",U]]);t["default"]=x},"4de4":function(e,t,a){"use strict";var n=a("23e7"),r=a("b727").filter,o=a("1dde"),i=o("filter");n({target:"Array",proto:!0,forced:!i},{filter:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},5530:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));a("b64b"),a("a4d3"),a("4de4"),a("d3b7"),a("e439"),a("159b"),a("dbb4");function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}},"9ee9":function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("d4ec"),r=a("bee2"),o=(a("d3b7"),a("e9c4"),function(){function e(){Object(n["a"])(this,e)}return Object(r["a"])(e,[{key:"getPresences",value:function(e){var t="page="+(e.page+1)+"&per_page="+e.rows,a=1==e.sortOrder?"asc":"desc";return t+="&order_by="+a,null!=e.sortField&&(t+="&sort_by="+e.sortField),e.filters.global.value&&(t+="&keyword="+e.filters.global.value),fetch("http://103.151.71.42/api/presences?"+t,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"Login"}}:e.json()})).then((function(e){return e.data}))}},{key:"getAllPresences",value:function(){return fetch("http://103.151.71.42/api/presences?response=array",{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"Login"}}:e.json()})).then((function(e){return e.data}))}},{key:"createPresence",value:function(e){return fetch("http://103.151.71.42/api/presences/",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(e)}).then((function(e){return 401==e.status?{redirectTo:"login"}:e.json()}))}},{key:"updatePresence",value:function(e){return fetch("http://103.151.71.42/api/presences/"+e.id,{method:"PUT",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(e)}).then((function(e){return 401==e.status?{redirectTo:"login"}:e.json()}))}},{key:"deletePresence",value:function(e){return fetch("http://103.151.71.42/api/presences/"+e.id,{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(e)}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}}]),e}())},c084:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("d4ec"),r=a("bee2"),o=(a("d3b7"),a("e9c4"),a("b0c0"),function(){function e(){Object(n["a"])(this,e)}return Object(r["a"])(e,[{key:"getPaidLeaves",value:function(e){var t="";if(e){t="page="+(e.page+1)+"&per_page="+e.rows;var a=1==e.sortOrder?"asc":"desc";t+="&order_by="+a,null!=e.sortField&&(t+="&sort_by="+e.sortField),e.filters.global.value&&(t+="&keyword="+e.filters.global.value)}return fetch("http://103.151.71.42/api/paid_leaves?"+t,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"getPaidLeave",value:function(e){return fetch("http://103.151.71.42/api/paid_leaves/"+e,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"createPaidLeave",value:function(e){return fetch("http://103.151.71.42/api/paid_leaves/",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({name:e.name})}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"updatePaidLeave",value:function(e){return fetch("http://103.151.71.42/api/paid_leaves/"+e.id,{method:"PUT",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({name:e.name})}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"deletePaidLeave",value:function(e){return fetch("http://103.151.71.42/api/paid_leaves/"+e.id,{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}}]),e}())},dbb4:function(e,t,a){var n=a("23e7"),r=a("83ab"),o=a("56ef"),i=a("fc6a"),l=a("06cf"),s=a("8418");n({target:"Object",stat:!0,sham:!r},{getOwnPropertyDescriptors:function(e){var t,a,n=i(e),r=l.f,c=o(n),u={},d=0;while(c.length>d)a=r(n,t=c[d++]),void 0!==a&&s(u,t,a);return u}})},e439:function(e,t,a){var n=a("23e7"),r=a("d039"),o=a("fc6a"),i=a("06cf").f,l=a("83ab"),s=r((function(){i(1)})),c=!l||s;n({target:"Object",stat:!0,forced:c,sham:!l},{getOwnPropertyDescriptor:function(e,t){return i(o(e),t)}})},fca4:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("d4ec"),r=a("bee2"),o=(a("d3b7"),a("e9c4"),function(){function e(){Object(n["a"])(this,e)}return Object(r["a"])(e,[{key:"getWorkunits",value:function(e){var t="";if(e){t="?page="+(e.page+1)+"&per_page="+e.rows;var a=1==e.sortOrder?"asc":"desc";t+="&order_by="+a,null!=e.sortField&&(t+="&sort_by="+e.sortField),e.filters.global.value&&(t+="&keyword="+e.filters.global.value)}else t="?all=1&order_by=asc";return fetch("http://103.151.71.42/api/workunits"+t,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"Login"}}:e.json()})).then((function(e){return e.data}))}},{key:"getWorkunit",value:function(e){return fetch("http://103.151.71.42/api/workunits/"+e,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"getPresences",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n="";if(e){n="page="+(e.page+1)+"&per_page="+e.rows;var r=1==e.sortOrder?"asc":"desc";n+="&order_by="+r,null!=e.sortField&&(n+="&sort_by="+e.sortField),e.filters.global.value&&(n+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(n+="&date_start="+e.date_start+"&date_end="+e.date_end)}return a&&(n+="&type="+a),fetch("http://103.151.71.42/api/workunits/"+t+"/presences?"+n,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"updateWorkunit",value:function(e){return fetch("http://103.151.71.42/api/workunits/"+e.id+"/place",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({lat:e.lat,lng:e.lng,radius:e.radius})}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"assignWorktime",value:function(e,t){return fetch("http://103.151.71.42/api/workunits/"+e.id+"/worktime",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({worktime_id:t.worktime_id})}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"deleteWorktime",value:function(e,t){return fetch("http://103.151.71.42/api/workunits/"+e.id+"/worktime",{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({worktime_id:t.id})}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}}]),e}())}}]);
//# sourceMappingURL=chunk-42b286d8.90cd965e.js.map