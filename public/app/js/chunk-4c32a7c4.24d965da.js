(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4c32a7c4"],{"06d6":function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));class r{getEmployees(e,t=!1){var a="";if(e){a="page="+(e.page+1)+"&per_page="+e.rows;var r=1==e.sortOrder?"asc":"desc";a+="&order_by="+r,null!=e.sortField&&(a+="&sort_by="+e.sortField),e.filters.global.value&&(a+="&keyword="+e.filters.global.value)}var o=JSON.parse(localStorage.getItem("presence_user_data"));return o.workunit_id&&(a+="&workunit_id="+o.workunit_id),t&&(a+="&workunit_id="+t),fetch("http://103.151.71.42/api/employees?"+a,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then(e=>401==e.status?{data:{redirectTo:"login"}}:e.json()).then(e=>e.data)}getEmployeesReport(e,t){var a="";if(e){a="page="+(e.page+1)+"&per_page="+e.rows;var r=1==e.sortOrder?"asc":"desc";a+="&order_by="+r,null!=e.sortField&&(a+="&sort_by="+e.sortField),e.filters.global.value&&(a+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(a+="&date_start="+e.date_start+"&date_end="+e.date_end)}return fetch("http://103.151.71.42/api/employees/reports/"+t+"?"+a,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then(e=>401==e.status?{data:{redirectTo:"login"}}:e.json()).then(e=>e.data)}getEmployeesReportDetail(e,t){var a="";if(e){a="page="+(e.page+1)+"&per_page="+e.rows;var r=1==e.sortOrder?"asc":"desc";a+="&order_by="+r,null!=e.sortField&&(a+="&sort_by="+e.sortField),e.filters.global.value&&(a+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(a+="&date_start="+e.date_start+"&date_end="+e.date_end)}return fetch("http://103.151.71.42/api/employees/report-details/"+t+"?"+a,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then(e=>401==e.status?{data:{redirectTo:"login"}}:e.json()).then(e=>e.data)}getEmployeesReportPdfLink(e,t){var a="";if(e){var r=1==e.sortOrder?"asc":"desc";a+="&order_by="+r,null!=e.sortField&&(a+="&sort_by="+e.sortField),e.filters.global.value&&(a+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(a+="&date_start="+e.date_start+"&date_end="+e.date_end)}return"http://103.151.71.42/api/employees/report-pdf/"+t+"?"+a}getEmployeesReportDetailPdfLink(e,t){var a="";if(e){var r=1==e.sortOrder?"asc":"desc";a+="&order_by="+r,null!=e.sortField&&(a+="&sort_by="+e.sortField),e.filters.global.value&&(a+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(a+="&date_start="+e.date_start+"&date_end="+e.date_end)}return"http://103.151.71.42/api/employees/report-detail-pdf/"+t+"?"+a}getEmployee(e){return fetch("http://103.151.71.42/api/employees/"+e,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then(e=>401==e.status?{data:{redirectTo:"login"}}:e.json()).then(e=>e.data)}getPresence(e,t){return fetch("http://103.151.71.42/api/employees/"+e+"/presences/"+t,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then(e=>401==e.status?{data:{redirectTo:"login"}}:e.json()).then(e=>e.data)}updateEmployee(e){return fetch("http://103.151.71.42/api/employees/"+e.id+"/place",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({lat:e.lat,lng:e.lng,radius:e.radius})}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}updateRole(e,t){var a={...e};return a.role=t,fetch("http://103.151.71.42/api/users/"+e.id,{method:"PUT",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(a)}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}addPlace(e,t){return fetch("http://103.151.71.42/api/employees/"+e.id+"/place",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(t)}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}deletePlace(e,t){return fetch("http://103.151.71.42/api/employees/"+e.id+"/place",{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({place_id:t.id})}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}patchPlace(e){return fetch("http://103.151.71.42/api/employees/"+e.id+"/place",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"}}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}patchAndroid(e){return fetch("http://103.151.71.42/api/employees/"+e.id+"/android-user",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"}}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}resetDevice(e){return fetch("http://103.151.71.42/api/employees/"+e.id+"/reset-device",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"}}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}addWorktime(e,t){return fetch("http://103.151.71.42/api/employees/"+e.id+"/worktime",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(t)}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}deleteWorktime(e,t){return fetch("http://103.151.71.42/api/employees/"+e.id+"/worktime",{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({worktime_id:t.id})}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}actionPresence(e,t){return fetch("http://103.151.71.42/api/employees/"+t.employee_id+"/presences/"+t.id,{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({status:e})}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}insertPresence(e,t){return fetch("http://103.151.71.42/api/employees/"+e+"/presences",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")},body:t}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}}},"9ee9":function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));class r{getPresences(e){var t="page="+(e.page+1)+"&per_page="+e.rows,a=1==e.sortOrder?"asc":"desc";return t+="&order_by="+a,null!=e.sortField&&(t+="&sort_by="+e.sortField),e.filters.global.value&&(t+="&keyword="+e.filters.global.value),fetch("http://103.151.71.42/api/presences?"+t,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then(e=>401==e.status?{data:{redirectTo:"Login"}}:e.json()).then(e=>e.data)}getAllPresences(){return fetch("http://103.151.71.42/api/presences?response=array",{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then(e=>401==e.status?{data:{redirectTo:"Login"}}:e.json()).then(e=>e.data)}createPresence(e){return fetch("http://103.151.71.42/api/presences/",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(e)}).then(e=>401==e.status?{redirectTo:"login"}:e.json())}updatePresence(e){return fetch("http://103.151.71.42/api/presences/"+e.id,{method:"PUT",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(e)}).then(e=>401==e.status?{redirectTo:"login"}:e.json())}deletePresence(e){return fetch("http://103.151.71.42/api/presences/"+e.id,{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(e)}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}}},c084:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));class r{getPaidLeaves(e){var t="";if(e){t="page="+(e.page+1)+"&per_page="+e.rows;var a=1==e.sortOrder?"asc":"desc";t+="&order_by="+a,null!=e.sortField&&(t+="&sort_by="+e.sortField),e.filters.global.value&&(t+="&keyword="+e.filters.global.value)}return fetch("http://103.151.71.42/api/paid_leaves?"+t,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then(e=>401==e.status?{data:{redirectTo:"login"}}:e.json()).then(e=>e.data)}getPaidLeave(e){return fetch("http://103.151.71.42/api/paid_leaves/"+e,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then(e=>401==e.status?{data:{redirectTo:"login"}}:e.json()).then(e=>e.data)}createPaidLeave(e){return fetch("http://103.151.71.42/api/paid_leaves/",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({name:e.name})}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}updatePaidLeave(e){return fetch("http://103.151.71.42/api/paid_leaves/"+e.id,{method:"PUT",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({name:e.name})}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}deletePaidLeave(e){return fetch("http://103.151.71.42/api/paid_leaves/"+e.id,{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"}}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}}},c891:function(e,t,a){"use strict";a.r(t);var r=a("7a23");const o={class:"grid"},n={class:"col-12"},s={class:"card"},i={class:"my-2 d-flex"},l={class:"p-input-icon-left m-2"},d=Object(r["j"])("i",{class:"pi pi-search"},null,-1),c={class:"flex flex-column md:flex-row md:justify-content-between md:align-items-center"},p=Object(r["j"])("h5",{class:"m-0"},"Manajemen Absensi",-1),u={class:"flex"},h={class:"mt-2 md:mt-0 p-input-icon-left"},g=Object(r["j"])("i",{class:"pi pi-search"},null,-1),m=Object(r["j"])("span",{class:"p-column-title"},"ID",-1),_={class:"field"},j=Object(r["j"])("label",{for:"name"},"OPD",-1),b={key:0,class:"p-invalid"},y={class:"field"},f=Object(r["j"])("label",{for:"name"},"Pegawai",-1),k={key:0,class:"p-invalid"},O={class:"field"},v=Object(r["j"])("label",{for:"lat"},"Jenis Pengajuan",-1),S={key:0,class:"p-invalid"},w={class:"field"},T=Object(r["j"])("label",{for:"lat"},"Lampiran",-1),P={class:"p-component p-inputwrapper mr-3"},z={key:0,class:"p-invalid"};function C(e,t,a,C,L,F){const D=Object(r["H"])("Calendar"),I=Object(r["H"])("Dropdown"),B=Object(r["H"])("InputText"),U=Object(r["H"])("Button"),V=Object(r["H"])("Toolbar"),J=Object(r["H"])("Column"),E=Object(r["H"])("router-link"),N=Object(r["H"])("DataTable"),A=Object(r["H"])("Dialog");return Object(r["z"])(),Object(r["i"])("div",o,[Object(r["j"])("div",n,[Object(r["j"])("div",s,[Object(r["m"])(V,{class:"mb-4"},{start:Object(r["S"])(()=>[Object(r["j"])("div",i,[Object(r["m"])(D,{dateFormat:"yy-mm-dd",showIcon:!0,showButtonBar:!0,modelValue:L.date_start,"onUpdate:modelValue":t[0]||(t[0]=e=>L.date_start=e),class:"m-2",placeholder:"Pilih Tanggal Mulai",onChange:e.onDateChange},null,8,["modelValue","onChange"]),Object(r["m"])(D,{dateFormat:"yy-mm-dd",showIcon:!0,showButtonBar:!0,modelValue:L.date_end,"onUpdate:modelValue":t[1]||(t[1]=e=>L.date_end=e),class:"m-2",placeholder:"Pilih Tanggal Selesai",onChange:e.onDateChange},null,8,["modelValue","onChange"]),"kasubagumum"!=L.role?(Object(r["z"])(),Object(r["g"])(I,{key:0,modelValue:L.selectedWorkunit.id,"onUpdate:modelValue":t[2]||(t[2]=e=>L.selectedWorkunit.id=e),options:L.workunits,optionLabel:"name",optionValue:"id",class:"m-2",placeholder:"Pilih OPD"},null,8,["modelValue","options"])):Object(r["h"])("",!0),Object(r["j"])("span",l,[d,Object(r["m"])(B,{modelValue:L.filters["global"].value,"onUpdate:modelValue":t[3]||(t[3]=e=>L.filters["global"].value=e),placeholder:"Search...",onKeyup:F.onFilter},null,8,["modelValue","onKeyup"])]),Object(r["m"])(U,{label:"Filter",icon:"pi pi-search",class:"p-button-success m-2",onClick:F.onSearch},null,8,["onClick"])])]),_:1}),Object(r["m"])(N,{value:L.presences,lazy:!0,paginator:!0,rows:10,filters:L.filters,"onUpdate:filters":t[5]||(t[5]=e=>L.filters=e),ref:"dt",dataKey:"id",totalRecords:L.totalRecords,loading:L.loading,onPage:t[6]||(t[6]=e=>F.onPage(e)),onSort:t[7]||(t[7]=e=>F.onSort(e)),onFilter:t[8]||(t[8]=e=>F.onFilter(e)),globalFilterFields:["name"],selection:e.selectedCustomers,"onUpdate:selection":t[9]||(t[9]=t=>e.selectedCustomers=t),selectAll:L.selectAll,onSelectAllChange:e.onSelectAllChange,onRowSelect:e.onRowSelect,onRowUnselect:e.onRowUnselect,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} products",responsiveLayout:"scroll"},{header:Object(r["S"])(()=>[Object(r["j"])("div",c,[p,Object(r["j"])("div",u,[Object(r["j"])("span",h,[g,Object(r["m"])(B,{modelValue:L.filters["global"].value,"onUpdate:modelValue":t[4]||(t[4]=e=>L.filters["global"].value=e),placeholder:"Search...",onKeyup:F.onFilter},null,8,["modelValue","onKeyup"])])])])]),default:Object(r["S"])(()=>[Object(r["m"])(J,{field:"id",header:"ID",sortable:!0},{body:Object(r["S"])(e=>[m,Object(r["l"])(" "+Object(r["L"])(e.data.id),1)]),_:1}),Object(r["m"])(J,{field:"employee.name",header:"Nama"}),Object(r["m"])(J,{field:"worktime_item.name",header:"Jadwal"}),Object(r["m"])(J,{field:"workunit.name",header:"OPD"}),Object(r["m"])(J,{field:"type",header:"Tipe"}),Object(r["m"])(J,{field:"in_location",header:"Di lokasi"},{body:Object(r["S"])(e=>[Object(r["j"])("p",null,Object(r["L"])(1==e.data.in_location?"Ya":"Tidak"),1)]),_:1}),Object(r["m"])(J,{field:"status",header:"Status"}),Object(r["m"])(J,{field:"created_at",header:"Tanggal"}),"kasubagumum"!=L.role?(Object(r["z"])(),Object(r["g"])(J,{key:0,header:"Aksi"},{body:Object(r["S"])(e=>[Object(r["m"])(E,{to:{name:"presences.detail",params:{id:e.data.id,employee_id:e.data.employee.id}}},{default:Object(r["S"])(()=>[Object(r["m"])(U,{icon:"pi pi-eye",class:"p-button-rounded p-button-info mr-2"})]),_:2},1032,["to"]),"diajukan"==e.data.status?(Object(r["z"])(),Object(r["g"])(U,{key:0,icon:"pi pi-check",class:"p-button-rounded p-button-success mr-2",onClick:t=>F.action("setujui",e.data)},null,8,["onClick"])):Object(r["h"])("",!0),"diajukan"==e.data.status?(Object(r["z"])(),Object(r["g"])(U,{key:1,icon:"pi pi-times",class:"p-button-rounded p-button-danger mr-2",onClick:t=>F.action("tolak",e.data)},null,8,["onClick"])):Object(r["h"])("",!0)]),_:1})):Object(r["h"])("",!0)]),_:1},8,["value","filters","totalRecords","loading","selection","selectAll","onSelectAllChange","onRowSelect","onRowUnselect"]),Object(r["m"])(A,{visible:L.pengajuanDialog,"onUpdate:visible":t[13]||(t[13]=e=>L.pengajuanDialog=e),style:{width:"450px"},header:"Form Pengajuan Cuti",modal:!0,class:"p-fluid"},{footer:Object(r["S"])(()=>[Object(r["m"])(U,{label:"Cancel",icon:"pi pi-times",class:"p-button-text",onClick:F.hideDialog},null,8,["onClick"]),Object(r["m"])(U,{label:"Save",icon:"pi pi-check",class:"p-button-text",onClick:F.savePengajuan},null,8,["onClick"])]),default:Object(r["S"])(()=>[Object(r["j"])("div",_,[j,Object(r["m"])(I,{modelValue:L.pengajuan.workunit_id,"onUpdate:modelValue":t[10]||(t[10]=e=>L.pengajuan.workunit_id=e),options:L.workunits,optionLabel:"name",optionValue:"id",class:Object(r["t"])(["mr-3",{"p-invalid":L.submitted&&!L.pengajuan.workunit_id}]),required:"true",placeholder:"Pilih OPD",onChange:F.onPengajuanWorkunitChange},null,8,["modelValue","options","onChange","class"]),L.submitted&&!L.pengajuan.workunit_id?(Object(r["z"])(),Object(r["i"])("small",b,"OPD diperlukan.")):Object(r["h"])("",!0)]),Object(r["j"])("div",y,[f,Object(r["m"])(I,{modelValue:L.pengajuan.employee_id,"onUpdate:modelValue":t[11]||(t[11]=e=>L.pengajuan.employee_id=e),options:L.employees,optionLabel:"name",optionValue:"id",class:Object(r["t"])(["mr-3",{"p-invalid":L.submitted&&!L.pengajuan.employee_id}]),required:"true",placeholder:"Pilih Pegawai"},null,8,["modelValue","options","class"]),L.submitted&&!L.pengajuan.employee_id?(Object(r["z"])(),Object(r["i"])("small",k,"Pegawai diperlukan.")):Object(r["h"])("",!0)]),Object(r["j"])("div",O,[v,Object(r["m"])(I,{modelValue:L.pengajuan.type,"onUpdate:modelValue":t[12]||(t[12]=e=>L.pengajuan.type=e),options:L.paid_leaves,optionLabel:"name",optionValue:"name",class:Object(r["t"])(["mr-3",{"p-invalid":L.submitted&&!L.pengajuan.type}]),required:"true",placeholder:"Pilih Jenis Pengajuan"},null,8,["modelValue","options","class"]),L.submitted&&!L.pengajuan.type?(Object(r["z"])(),Object(r["i"])("small",S,"Jenis pengajuan diperlukan.")):Object(r["h"])("",!0)]),Object(r["j"])("div",w,[T,Object(r["j"])("div",P,[Object(r["j"])("input",{type:"file",ref:"lampiran",class:Object(r["t"])(["",{"p-invalid":L.submitted&&!L.pengajuan.attachment}]),required:"true"},null,2)]),L.submitted&&!L.pengajuan.attachment?(Object(r["z"])(),Object(r["i"])("small",z,"File lampiran diperlukan.")):Object(r["h"])("",!0)])]),_:1},8,["visible"])])])])}a("14d9");var L=a("0393"),F=a("9ee9"),D=a("fca4"),I=a("06d6"),B=a("c084"),U={data(){return{loading:!1,pengajuanDialog:!1,employees:null,paid_leaves:null,pengajuan:{},submitted:!1,onsearchtimeout:null,totalRecords:0,presences:null,presence:{},selectedPresences:null,selectAll:!1,filters:{},lazyParams:{},workunits:[],selectedWorkunit:{},role:localStorage.getItem("presence_app_role"),date_start:null,date_end:null}},presenceService:null,workunitService:null,employeeService:null,paidLeaveService:null,created(){this.presenceService=new F["a"],this.workunitService=new D["a"],this.employeeService=new I["a"],this.paidLeaveService=new B["a"],this.initFilters()},mounted(){this.loading=!0,this.lazyParams={first:0,page:0,rows:this.$refs.dt.rows,sortField:null,sortOrder:1,filters:this.filters,date_start:null,date_end:null},this.loadLazyData()},methods:{loadLazyData(){this.loading=!0;var e=JSON.parse(localStorage.getItem("presence_user_data"));e.workunit_id&&(this.selectedWorkunit.id=e.workunit_id),setTimeout(()=>{this.workunitService.getWorkunits().then(e=>{"redirectTo"in e&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),this.$router.push(e.redirectTo)),this.workunits=e.data,this.loading=!1}),this.selectedWorkunit.id?this.workunitService.getPresences(this.lazyParams,this.selectedWorkunit.id,1).then(e=>{"redirectTo"in e&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),this.$router.push(e.redirectTo)),this.presences=e.data,this.loading=!1}):this.workunitService.getPresences(this.lazyParams,!1,1).then(e=>{"redirectTo"in e&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),this.$router.push(e.redirectTo)),this.presences=e.data,this.loading=!1}),this.paidLeaveService.getPaidLeaves().then(e=>{"redirectTo"in e&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),this.$router.push(e.redirectTo)),this.paid_leaves=e.data})},1e3*Math.random()+250)},onPage(e){this.lazyParams=e,this.loadLazyData()},onSort(e){var t=this.lazyParams.page;this.lazyParams=e,this.lazyParams.page=t,this.loadLazyData()},onFilter(){this.onsearchtimeout&&clearTimeout(this.onsearchtimeout),this.onsearchtimeout=setTimeout(()=>{this.lazyParams.filters=this.filters,this.loadLazyData()},1e3)},onSearch(){if(this.lazyParams.filters=this.filters,this.date_start){let e=this.date_start,t=e.getDate()<10?"0"+e.getDate():e.getDate(),a=e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1;this.lazyParams.date_start=e.getFullYear()+"-"+a+"-"+t}if(this.date_end){let e=this.date_end,t=e.getDate()<10?"0"+e.getDate():e.getDate(),a=e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1;this.lazyParams.date_end=e.getFullYear()+"-"+a+"-"+t}this.loadLazyData()},openNew(){this.pengajuanDialog=!0},savePengajuan(){this.submitted=!0;var e=this.$refs.lampiran;if(e.files.length){var t=this.pengajuan.started_at,a=t.getDate()<10?"0"+t.getDate():t.getDate(),r=t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1;this.pengajuan.started_at=t.getFullYear()+"-"+r+"-"+a,t=this.pengajuan.finished_at,a=t.getDate()<10?"0"+t.getDate():t.getDate(),r=t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1,this.pengajuan.finished_at=t.getFullYear()+"-"+r+"-"+a,this.pengajuan.attachment=!0;var o=new FormData;o.append("type",this.pengajuan.type),o.append("attachment",e.files[0]),o.append("started_at",this.pengajuan.started_at),o.append("finished_at",this.pengajuan.finished_at),this.employeeService.insertPresence(this.pengajuan.employee_id,o).then(e=>{"redirectTo"in e&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),this.$router.push(e.redirectTo)),e.success?(this.$swal({icon:"success",title:"Success",text:e.message}),this.selectedWorkunit.id=this.pengajuan.workunit_id,this.loadLazyData(),this.hideDialog()):this.$swal({icon:"error",title:"Oops...",text:e.message})})}},onWorkunitChange(){this.lazyParams.filters=this.filters,this.loadLazyData()},onPengajuanWorkunitChange(){this.workunitService.getWorkunit(this.pengajuan.workunit_id).then(e=>{"redirectTo"in e&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),this.$router.push(e.redirectTo)),this.employees=e.employees})},initFilters(){this.filters={global:{value:null,matchMode:L["a"].CONTAINS}}},confirmDelete(e){this.presence=e,this.$swal({title:"Apakah anda yakin akan menghapus data ini ?",showCancelButton:!0,confirmButtonText:"Hapus"}).then(e=>{e.isConfirmed&&this.presenceService.deletePresence(this.presence).then(e=>{e.success?(this.presences=this.presences.filter(e=>e.id!==this.presence.id),this.$swal({icon:"success",title:"Success",text:e.message}),this.presenceDialog=!1,this.presence={}):this.$swal({icon:"error",title:"Oops...",text:e.message})})})},action(e,t){this.$swal({title:"Apakah anda yakin akan "+e+" data ini ?",showCancelButton:!0,confirmButtonText:"Ya"}).then(a=>{a.isConfirmed&&this.employeeService.actionPresence("di"+e,t).then(e=>{e.success?(this.$swal({icon:"success",title:"Success",text:e.message}),this.loadLazyData()):this.$swal({icon:"error",title:"Oops...",text:e.message})})})},hideDialog(){this.pengajuanDialog=!1,this.submitted=!1}}},V=a("6b0d"),J=a.n(V);const E=J()(U,[["render",C]]);t["default"]=E},fca4:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));class r{getWorkunits(e){var t="";if(e){t="?page="+(e.page+1)+"&per_page="+e.rows;var a=1==e.sortOrder?"asc":"desc";t+="&order_by="+a,null!=e.sortField&&(t+="&sort_by="+e.sortField),e.filters.global.value&&(t+="&keyword="+e.filters.global.value)}else t="?all=1&order_by=asc";return fetch("http://103.151.71.42/api/workunits"+t,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then(e=>401==e.status?{data:{redirectTo:"Login"}}:e.json()).then(e=>e.data)}getWorkunit(e){return fetch("http://103.151.71.42/api/workunits/"+e,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then(e=>401==e.status?{data:{redirectTo:"login"}}:e.json()).then(e=>e.data)}getPresences(e,t=!1,a=!1){var r="";if(e){r="page="+(e.page+1)+"&per_page="+e.rows;var o=1==e.sortOrder?"asc":"desc";r+="&order_by="+o,null!=e.sortField&&(r+="&sort_by="+e.sortField),e.filters.global.value&&(r+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(r+="&date_start="+e.date_start+"&date_end="+e.date_end)}a&&(r+="&type="+a);var n=t?"http://103.151.71.42/api/workunits/"+t+"/presences?"+r:"http://103.151.71.42/api/workunits/presences?"+r;return fetch(n,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then(e=>401==e.status?{data:{redirectTo:"login"}}:e.json()).then(e=>e.data)}updateWorkunit(e){return fetch("http://103.151.71.42/api/workunits/"+e.id+"/place",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({lat:e.lat,lng:e.lng,radius:e.radius})}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}assignWorktime(e,t){return fetch("http://103.151.71.42/api/workunits/"+e.id+"/worktime",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({worktime_id:t.worktime_id})}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}deleteWorktime(e,t){return fetch("http://103.151.71.42/api/workunits/"+e.id+"/worktime",{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({worktime_id:t.id})}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}}}}]);
//# sourceMappingURL=chunk-4c32a7c4.24d965da.js.map