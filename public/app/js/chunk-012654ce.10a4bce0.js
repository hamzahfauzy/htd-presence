(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-012654ce"],{"06d6":function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));class n{getEmployees(e,t=!1){var a="";if(e){a="page="+(e.page+1)+"&per_page="+e.rows;var n=1==e.sortOrder?"asc":"desc";a+="&order_by="+n,null!=e.sortField&&(a+="&sort_by="+e.sortField),e.filters.global.value&&(a+="&keyword="+e.filters.global.value)}var s=JSON.parse(localStorage.getItem("presence_user_data"));return s.workunit_id&&(a+="&workunit_id="+s.workunit_id),t&&(a+="&workunit_id="+t),fetch("https://sisapa.tanjungbalaikota.go.id/api/employees?"+a,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then(e=>401==e.status?{data:{redirectTo:"login"}}:e.json()).then(e=>e.data)}getEmployeesReport(e,t){var a="";if(e){a="page="+(e.page+1)+"&per_page="+e.rows;var n=1==e.sortOrder?"asc":"desc";a+="&order_by="+n,null!=e.sortField&&(a+="&sort_by="+e.sortField),e.filters.global.value&&(a+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(a+="&date_start="+e.date_start+"&date_end="+e.date_end)}return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/reports/"+t+"?"+a,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then(e=>401==e.status?{data:{redirectTo:"login"}}:e.json()).then(e=>e.data)}getEmployeesReportDetail(e,t){var a="";if(e){a="page="+(e.page+1)+"&per_page="+e.rows;var n=1==e.sortOrder?"asc":"desc";a+="&order_by="+n,null!=e.sortField&&(a+="&sort_by="+e.sortField),e.filters.global.value&&(a+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(a+="&date_start="+e.date_start+"&date_end="+e.date_end)}return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/report-details/"+t+"?"+a,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then(e=>401==e.status?{data:{redirectTo:"login"}}:e.json()).then(e=>e.data)}getEmployeesReportPdfLink(e,t){var a="";if(e){var n=1==e.sortOrder?"asc":"desc";a+="&order_by="+n,null!=e.sortField&&(a+="&sort_by="+e.sortField),e.filters.global.value&&(a+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(a+="&date_start="+e.date_start+"&date_end="+e.date_end)}return"https://sisapa.tanjungbalaikota.go.id/api/employees/report-pdf/"+t+"?"+a}getEmployeesReportDetailPdfLink(e,t){var a="";if(e){var n=1==e.sortOrder?"asc":"desc";a+="&order_by="+n,null!=e.sortField&&(a+="&sort_by="+e.sortField),e.filters.global.value&&(a+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(a+="&date_start="+e.date_start+"&date_end="+e.date_end)}return"https://sisapa.tanjungbalaikota.go.id/api/employees/report-detail-pdf/"+t+"?"+a}getEmployee(e){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+e,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then(e=>401==e.status?{data:{redirectTo:"login"}}:e.json()).then(e=>e.data)}getPresence(e,t){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+e+"/presences/"+t,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then(e=>401==e.status?{data:{redirectTo:"login"}}:e.json()).then(e=>e.data)}updateEmployee(e){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+e.id+"/place",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({lat:e.lat,lng:e.lng,radius:e.radius})}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}updateRole(e,t){var a={...e};return a.role=t,fetch("https://sisapa.tanjungbalaikota.go.id/api/users/"+e.id,{method:"PUT",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(a)}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}addPlace(e,t){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+e.id+"/place",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(t)}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}deletePlace(e,t){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+e.id+"/place",{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({place_id:t.id})}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}patchPlace(e){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+e.id+"/place",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"}}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}patchAndroid(e){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+e.id+"/android-user",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"}}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}resetDevice(e){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+e.id+"/reset-device",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"}}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}addWorktime(e,t){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+e.id+"/worktime",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(t)}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}deleteWorktime(e,t){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+e.id+"/worktime",{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({worktime_id:t.id})}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}actionPresence(e,t){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+t.employee_id+"/presences/"+t.id,{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({status:e})}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}insertPresence(e,t){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+e+"/presences",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")},body:t}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}}},2455:function(e,t,a){"use strict";a.r(t);var n=a("7a23");const s={class:"grid"},o={class:"col-12"},i={class:"card"},r={class:"my-2 d-flex"},l={class:"p-input-icon-left m-2"},d=Object(n["j"])("i",{class:"pi pi-search"},null,-1),p={class:"flex flex-column md:flex-row md:justify-content-between md:align-items-center"},c=Object(n["j"])("h5",{class:"m-0"},"Manajemen Cuti",-1),u={class:"flex"},h={class:"mt-2 md:mt-0 p-input-icon-left"},g=Object(n["j"])("i",{class:"pi pi-search"},null,-1),m=Object(n["j"])("span",{class:"p-column-title"},"ID",-1),j={class:"field"},b=Object(n["j"])("label",{for:"name"},"OPD",-1),_={key:0,class:"p-invalid"},k={class:"field"},y=Object(n["j"])("label",{for:"name"},"Pegawai",-1),f={key:0,class:"p-invalid"},O={class:"field"},v=Object(n["j"])("label",{for:"lat"},"Jenis Pengajuan",-1),S={key:0,class:"p-invalid"},w={class:"field"},T=Object(n["j"])("label",{for:"name"},"Waktu Mulai",-1),P={key:0,class:"p-invalid"},z={class:"field"},C=Object(n["j"])("label",{for:"name"},"Waktu Selesai",-1),L={key:0,class:"p-invalid"},F={class:"field"},D=Object(n["j"])("label",{for:"lat"},"Lampiran",-1),I={class:"p-component p-inputwrapper mr-3"},B={key:0,class:"p-invalid"};function U(e,t,a,U,V,W){const E=Object(n["H"])("Button"),J=Object(n["H"])("Calendar"),N=Object(n["H"])("Dropdown"),R=Object(n["H"])("InputText"),M=Object(n["H"])("Toolbar"),A=Object(n["H"])("Column"),x=Object(n["H"])("router-link"),H=Object(n["H"])("DataTable"),$=Object(n["H"])("Dialog");return Object(n["z"])(),Object(n["i"])("div",s,[Object(n["j"])("div",o,[Object(n["j"])("div",i,["adminkepegawaian"!=V.role?(Object(n["z"])(),Object(n["g"])(M,{key:0,class:"mb-4"},{start:Object(n["S"])(()=>[Object(n["j"])("div",r,[Object(n["m"])(E,{label:"Pengajuan Cuti",class:"p-button-success m-2",onClick:W.openNew},null,8,["onClick"]),Object(n["m"])(J,{dateFormat:"yy-mm-dd",showIcon:!0,showButtonBar:!0,modelValue:V.date_start,"onUpdate:modelValue":t[0]||(t[0]=e=>V.date_start=e),class:"m-2",placeholder:"Pilih Tanggal Mulai",onChange:e.onDateChange},null,8,["modelValue","onChange"]),Object(n["m"])(J,{dateFormat:"yy-mm-dd",showIcon:!0,showButtonBar:!0,modelValue:V.date_end,"onUpdate:modelValue":t[1]||(t[1]=e=>V.date_end=e),class:"m-2",placeholder:"Pilih Tanggal Selesai",onChange:e.onDateChange},null,8,["modelValue","onChange"]),Object(n["m"])(N,{modelValue:V.selectedWorkunit.id,"onUpdate:modelValue":t[2]||(t[2]=e=>V.selectedWorkunit.id=e),options:V.workunits,optionLabel:"name",optionValue:"id",class:"m-2",placeholder:"Pilih OPD"},null,8,["modelValue","options"]),Object(n["j"])("span",l,[d,Object(n["m"])(R,{modelValue:V.filters["global"].value,"onUpdate:modelValue":t[3]||(t[3]=e=>V.filters["global"].value=e),placeholder:"Search...",onKeyup:W.onFilter},null,8,["modelValue","onKeyup"])]),Object(n["m"])(E,{label:"Filter",icon:"pi pi-search",class:"p-button-success m-2",onClick:W.onSearch},null,8,["onClick"])])]),_:1})):Object(n["h"])("",!0),Object(n["m"])(H,{value:V.presences,lazy:!0,paginator:!0,rows:10,filters:V.filters,"onUpdate:filters":t[5]||(t[5]=e=>V.filters=e),ref:"dt",dataKey:"id",totalRecords:V.totalRecords,loading:V.loading,onPage:t[6]||(t[6]=e=>W.onPage(e)),onSort:t[7]||(t[7]=e=>W.onSort(e)),onFilter:t[8]||(t[8]=e=>W.onFilter(e)),globalFilterFields:["name"],selection:e.selectedCustomers,"onUpdate:selection":t[9]||(t[9]=t=>e.selectedCustomers=t),selectAll:V.selectAll,onSelectAllChange:e.onSelectAllChange,onRowSelect:e.onRowSelect,onRowUnselect:e.onRowUnselect,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} products",responsiveLayout:"scroll"},{header:Object(n["S"])(()=>[Object(n["j"])("div",p,[c,Object(n["j"])("div",u,[Object(n["j"])("span",h,[g,Object(n["m"])(R,{modelValue:V.filters["global"].value,"onUpdate:modelValue":t[4]||(t[4]=e=>V.filters["global"].value=e),placeholder:"Search...",onKeyup:W.onFilter},null,8,["modelValue","onKeyup"])])])])]),default:Object(n["S"])(()=>[Object(n["m"])(A,{field:"id",header:"ID",sortable:!0},{body:Object(n["S"])(e=>[m,Object(n["l"])(" "+Object(n["L"])(e.data.id),1)]),_:1}),Object(n["m"])(A,{field:"employee.name",header:"Nama"}),Object(n["m"])(A,{field:"type",header:"Jenis Pengajuan"}),Object(n["m"])(A,{field:"workunit.name",header:"OPD"}),Object(n["m"])(A,{field:"status",header:"Status"}),Object(n["m"])(A,{field:"started_at",header:"Waktu Mulai"}),Object(n["m"])(A,{field:"finished_at",header:"Waktu Selesai"}),Object(n["m"])(A,{field:"created_at",header:"Tanggal"}),"kasubagumum"!=V.role?(Object(n["z"])(),Object(n["g"])(A,{key:0,header:"Aksi"},{body:Object(n["S"])(e=>[Object(n["m"])(x,{to:{name:"presences.detail",params:{id:e.data.id,employee_id:e.data.employee.id}}},{default:Object(n["S"])(()=>[Object(n["m"])(E,{icon:"pi pi-eye",class:"p-button-rounded p-button-info mr-2"})]),_:2},1032,["to"]),"diajukan"==e.data.status?(Object(n["z"])(),Object(n["g"])(E,{key:0,icon:"pi pi-check",class:"p-button-rounded p-button-success mr-2",onClick:t=>W.action("setujui",e.data)},null,8,["onClick"])):Object(n["h"])("",!0),"diajukan"==e.data.status?(Object(n["z"])(),Object(n["g"])(E,{key:1,icon:"pi pi-times",class:"p-button-rounded p-button-danger mr-2",onClick:t=>W.action("tolak",e.data)},null,8,["onClick"])):Object(n["h"])("",!0)]),_:1})):Object(n["h"])("",!0)]),_:1},8,["value","filters","totalRecords","loading","selection","selectAll","onSelectAllChange","onRowSelect","onRowUnselect"]),Object(n["m"])($,{visible:V.pengajuanDialog,"onUpdate:visible":t[15]||(t[15]=e=>V.pengajuanDialog=e),style:{width:"450px"},header:"Form Pengajuan Cuti",modal:!0,class:"p-fluid"},{footer:Object(n["S"])(()=>[Object(n["m"])(E,{label:"Cancel",icon:"pi pi-times",class:"p-button-text",onClick:W.hideDialog},null,8,["onClick"]),Object(n["m"])(E,{label:"Save",icon:"pi pi-check",class:"p-button-text",onClick:W.savePengajuan},null,8,["onClick"])]),default:Object(n["S"])(()=>[Object(n["j"])("div",j,[b,Object(n["m"])(N,{modelValue:V.pengajuan.workunit_id,"onUpdate:modelValue":t[10]||(t[10]=e=>V.pengajuan.workunit_id=e),options:V.workunits,optionLabel:"name",optionValue:"id",class:Object(n["t"])(["mr-3",{"p-invalid":V.submitted&&!V.pengajuan.workunit_id}]),required:"true",placeholder:"Pilih OPD",onChange:W.onPengajuanWorkunitChange},null,8,["modelValue","options","onChange","class"]),V.submitted&&!V.pengajuan.workunit_id?(Object(n["z"])(),Object(n["i"])("small",_,"OPD diperlukan.")):Object(n["h"])("",!0)]),Object(n["j"])("div",k,[y,Object(n["m"])(N,{modelValue:V.pengajuan.employee_id,"onUpdate:modelValue":t[11]||(t[11]=e=>V.pengajuan.employee_id=e),options:V.employees,optionLabel:"name",optionValue:"id",class:Object(n["t"])(["mr-3",{"p-invalid":V.submitted&&!V.pengajuan.employee_id}]),required:"true",placeholder:"Pilih Pegawai"},null,8,["modelValue","options","class"]),V.submitted&&!V.pengajuan.employee_id?(Object(n["z"])(),Object(n["i"])("small",f,"Pegawai diperlukan.")):Object(n["h"])("",!0)]),Object(n["j"])("div",O,[v,Object(n["m"])(N,{modelValue:V.pengajuan.type,"onUpdate:modelValue":t[12]||(t[12]=e=>V.pengajuan.type=e),options:V.paid_leaves,optionLabel:"name",optionValue:"name",class:Object(n["t"])(["mr-3",{"p-invalid":V.submitted&&!V.pengajuan.type}]),required:"true",placeholder:"Pilih Jenis Pengajuan"},null,8,["modelValue","options","class"]),V.submitted&&!V.pengajuan.type?(Object(n["z"])(),Object(n["i"])("small",S,"Jenis pengajuan diperlukan.")):Object(n["h"])("",!0)]),Object(n["j"])("div",w,[T,Object(n["m"])(J,{modelValue:V.pengajuan.started_at,"onUpdate:modelValue":t[13]||(t[13]=e=>V.pengajuan.started_at=e),class:Object(n["t"])({"p-invalid":V.submitted&&!V.pengajuan.started_at})},null,8,["modelValue","class"]),V.submitted&&!V.pengajuan.started_at?(Object(n["z"])(),Object(n["i"])("small",P,"Waktu Mulai diperlukan.")):Object(n["h"])("",!0)]),Object(n["j"])("div",z,[C,Object(n["m"])(J,{modelValue:V.pengajuan.finished_at,"onUpdate:modelValue":t[14]||(t[14]=e=>V.pengajuan.finished_at=e),class:Object(n["t"])({"p-invalid":V.submitted&&!V.pengajuan.finished_at})},null,8,["modelValue","class"]),V.submitted&&!V.pengajuan.finished_at?(Object(n["z"])(),Object(n["i"])("small",L,"Waktu Mulai diperlukan.")):Object(n["h"])("",!0)]),Object(n["j"])("div",F,[D,Object(n["j"])("div",I,[Object(n["j"])("input",{type:"file",ref:"lampiran",class:Object(n["t"])(["",{"p-invalid":V.submitted&&!V.pengajuan.attachment}]),required:"true"},null,2)]),V.submitted&&!V.pengajuan.attachment?(Object(n["z"])(),Object(n["i"])("small",B,"File lampiran diperlukan.")):Object(n["h"])("",!0)])]),_:1},8,["visible"])])])])}a("14d9");var V=a("0393"),W=a("9ee9"),E=a("fca4"),J=a("06d6"),N=a("c084"),R={data(){return{loading:!1,pengajuanDialog:!1,employees:null,paid_leaves:null,pengajuan:{},submitted:!1,onsearchtimeout:null,totalRecords:0,presences:null,presence:{},selectedPresences:null,selectAll:!1,filters:{},lazyParams:{},workunits:[],selectedWorkunit:{},role:localStorage.getItem("presence_app_role"),date_start:null,date_end:null}},presenceService:null,workunitService:null,employeeService:null,paidLeaveService:null,created(){this.presenceService=new W["a"],this.workunitService=new E["a"],this.employeeService=new J["a"],this.paidLeaveService=new N["a"],this.initFilters()},mounted(){this.loading=!0,this.lazyParams={first:0,page:0,rows:this.$refs.dt.rows,sortField:null,sortOrder:1,filters:this.filters,date_start:null,date_end:null},this.loadLazyData()},methods:{loadLazyData(){this.loading=!0,setTimeout(()=>{this.workunitService.getWorkunits().then(e=>{"redirectTo"in e&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),this.$router.push(e.redirectTo)),this.workunits=e.data,this.loading=!1}),this.selectedWorkunit.id?this.workunitService.getPresences(this.lazyParams,this.selectedWorkunit.id,2).then(e=>{"redirectTo"in e&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),this.$router.push(e.redirectTo)),this.presences=e.data,this.totalRecords=e.total,this.loading=!1}):this.workunitService.getPresences(this.lazyParams,!1,2).then(e=>{"redirectTo"in e&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),this.$router.push(e.redirectTo)),this.presences=e.data,this.totalRecords=e.total,this.loading=!1}),this.paidLeaveService.getPaidLeaves().then(e=>{"redirectTo"in e&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),this.$router.push(e.redirectTo)),this.paid_leaves=e.data})},1e3*Math.random()+250)},onPage(e){this.lazyParams=e,this.loadLazyData()},onSort(e){var t=this.lazyParams.page;this.lazyParams=e,this.lazyParams.page=t,this.loadLazyData()},onFilter(){this.onsearchtimeout&&clearTimeout(this.onsearchtimeout),this.onsearchtimeout=setTimeout(()=>{this.lazyParams.filters=this.filters,this.loadLazyData()},1e3)},onSearch(){if(this.lazyParams.filters=this.filters,this.date_start){let e=this.date_start,t=e.getDate()<10?"0"+e.getDate():e.getDate(),a=e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1;this.lazyParams.date_start=e.getFullYear()+"-"+a+"-"+t}if(this.date_end){let e=this.date_end,t=e.getDate()<10?"0"+e.getDate():e.getDate(),a=e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1;this.lazyParams.date_end=e.getFullYear()+"-"+a+"-"+t}this.loadLazyData()},openNew(){this.pengajuanDialog=!0},savePengajuan(){this.submitted=!0;var e=this.$refs.lampiran;if(e.files.length){var t=this.pengajuan.started_at,a=t.getDate()<10?"0"+t.getDate():t.getDate(),n=t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1;this.pengajuan.started_at=t.getFullYear()+"-"+n+"-"+a,t=this.pengajuan.finished_at,a=t.getDate()<10?"0"+t.getDate():t.getDate(),n=t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1,this.pengajuan.finished_at=t.getFullYear()+"-"+n+"-"+a,this.pengajuan.attachment=!0;var s=new FormData;s.append("type",this.pengajuan.type),s.append("attachment",e.files[0]),s.append("started_at",this.pengajuan.started_at),s.append("finished_at",this.pengajuan.finished_at),this.employeeService.insertPresence(this.pengajuan.employee_id,s).then(e=>{"redirectTo"in e&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),this.$router.push(e.redirectTo)),e.success?(this.$swal({icon:"success",title:"Success",text:e.message}),this.selectedWorkunit.id=this.pengajuan.workunit_id,this.loadLazyData(),this.hideDialog()):this.$swal({icon:"error",title:"Oops...",text:e.message})})}},onWorkunitChange(){this.lazyParams.filters=this.filters,this.loadLazyData()},onPengajuanWorkunitChange(){this.workunitService.getWorkunit(this.pengajuan.workunit_id).then(e=>{"redirectTo"in e&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),this.$router.push(e.redirectTo)),this.employees=e.employees})},initFilters(){this.filters={global:{value:null,matchMode:V["a"].CONTAINS}}},confirmDelete(e){this.presence=e,this.$swal({title:"Apakah anda yakin akan menghapus data ini ?",showCancelButton:!0,confirmButtonText:"Hapus"}).then(e=>{e.isConfirmed&&this.presenceService.deletePresence(this.presence).then(e=>{e.success?(this.presences=this.presences.filter(e=>e.id!==this.presence.id),this.$swal({icon:"success",title:"Success",text:e.message}),this.presenceDialog=!1,this.presence={}):this.$swal({icon:"error",title:"Oops...",text:e.message})})})},action(e,t){this.$swal({title:"Apakah anda yakin akan "+e+" data ini ?",showCancelButton:!0,confirmButtonText:"Ya"}).then(a=>{a.isConfirmed&&this.employeeService.actionPresence("di"+e,t).then(e=>{e.success?(this.$swal({icon:"success",title:"Success",text:e.message}),this.loadLazyData()):this.$swal({icon:"error",title:"Oops...",text:e.message})})})},hideDialog(){this.pengajuanDialog=!1,this.submitted=!1}}},M=a("6b0d"),A=a.n(M);const x=A()(R,[["render",U]]);t["default"]=x},"9ee9":function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));class n{getPresences(e){var t="page="+(e.page+1)+"&per_page="+e.rows,a=1==e.sortOrder?"asc":"desc";return t+="&order_by="+a,null!=e.sortField&&(t+="&sort_by="+e.sortField),e.filters.global.value&&(t+="&keyword="+e.filters.global.value),fetch("https://sisapa.tanjungbalaikota.go.id/api/presences?"+t,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then(e=>401==e.status?{data:{redirectTo:"Login"}}:e.json()).then(e=>e.data)}getAllPresences(){return fetch("https://sisapa.tanjungbalaikota.go.id/api/presences?response=array",{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then(e=>401==e.status?{data:{redirectTo:"Login"}}:e.json()).then(e=>e.data)}createPresence(e){return fetch("https://sisapa.tanjungbalaikota.go.id/api/presences/",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(e)}).then(e=>401==e.status?{redirectTo:"login"}:e.json())}updatePresence(e){return fetch("https://sisapa.tanjungbalaikota.go.id/api/presences/"+e.id,{method:"PUT",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(e)}).then(e=>401==e.status?{redirectTo:"login"}:e.json())}deletePresence(e){return fetch("https://sisapa.tanjungbalaikota.go.id/api/presences/"+e.id,{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(e)}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}}},c084:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));class n{getPaidLeaves(e){var t="";if(e){t="page="+(e.page+1)+"&per_page="+e.rows;var a=1==e.sortOrder?"asc":"desc";t+="&order_by="+a,null!=e.sortField&&(t+="&sort_by="+e.sortField),e.filters.global.value&&(t+="&keyword="+e.filters.global.value)}return fetch("https://sisapa.tanjungbalaikota.go.id/api/paid_leaves?"+t,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then(e=>401==e.status?{data:{redirectTo:"login"}}:e.json()).then(e=>e.data)}getPaidLeave(e){return fetch("https://sisapa.tanjungbalaikota.go.id/api/paid_leaves/"+e,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then(e=>401==e.status?{data:{redirectTo:"login"}}:e.json()).then(e=>e.data)}createPaidLeave(e){return fetch("https://sisapa.tanjungbalaikota.go.id/api/paid_leaves/",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({name:e.name})}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}updatePaidLeave(e){return fetch("https://sisapa.tanjungbalaikota.go.id/api/paid_leaves/"+e.id,{method:"PUT",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({name:e.name})}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}deletePaidLeave(e){return fetch("https://sisapa.tanjungbalaikota.go.id/api/paid_leaves/"+e.id,{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"}}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}}},fca4:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));class n{getWorkunits(e){var t="";if(e){t="?page="+(e.page+1)+"&per_page="+e.rows;var a=1==e.sortOrder?"asc":"desc";t+="&order_by="+a,null!=e.sortField&&(t+="&sort_by="+e.sortField),e.filters.global.value&&(t+="&keyword="+e.filters.global.value)}else t="?all=1&order_by=asc";return fetch("https://sisapa.tanjungbalaikota.go.id/api/workunits"+t,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then(e=>401==e.status?{data:{redirectTo:"Login"}}:e.json()).then(e=>e.data)}getWorkunit(e){return fetch("https://sisapa.tanjungbalaikota.go.id/api/workunits/"+e,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then(e=>401==e.status?{data:{redirectTo:"login"}}:e.json()).then(e=>e.data)}getPresences(e,t=!1,a=!1){var n="";if(e){n="page="+(e.page+1)+"&per_page="+e.rows;var s=1==e.sortOrder?"asc":"desc";n+="&order_by="+s,null!=e.sortField&&(n+="&sort_by="+e.sortField),e.filters.global.value&&(n+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(n+="&date_start="+e.date_start+"&date_end="+e.date_end)}a&&(n+="&type="+a);var o=t?"https://sisapa.tanjungbalaikota.go.id/api/workunits/"+t+"/presences?"+n:"https://sisapa.tanjungbalaikota.go.id/api/workunits/presences?"+n;return fetch(o,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then(e=>401==e.status?{data:{redirectTo:"login"}}:e.json()).then(e=>e.data)}updateWorkunit(e){return fetch("https://sisapa.tanjungbalaikota.go.id/api/workunits/"+e.id+"/place",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({lat:e.lat,lng:e.lng,radius:e.radius})}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}assignWorktime(e,t){return fetch("https://sisapa.tanjungbalaikota.go.id/api/workunits/"+e.id+"/worktime",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({worktime_id:t.worktime_id})}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}deleteWorktime(e,t){return fetch("https://sisapa.tanjungbalaikota.go.id/api/workunits/"+e.id+"/worktime",{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({worktime_id:t.id})}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}}}}]);
//# sourceMappingURL=chunk-012654ce.10a4bce0.js.map