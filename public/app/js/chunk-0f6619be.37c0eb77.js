(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f6619be"],{"06d6":function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));class o{getEmployees(e,t=!1){var a="";if(e){a="page="+(e.page+1)+"&per_page="+e.rows;var o=1==e.sortOrder?"asc":"desc";a+="&order_by="+o,null!=e.sortField&&(a+="&sort_by="+e.sortField),e.filters.global.value&&(a+="&keyword="+e.filters.global.value)}var r=JSON.parse(localStorage.getItem("presence_user_data"));return r.workunit_id&&(a+="&workunit_id="+r.workunit_id),t&&(a+="&workunit_id="+t),fetch("https://sisapa.tanjungbalaikota.go.id/api/employees?"+a,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then(e=>401==e.status?{data:{redirectTo:"login"}}:e.json()).then(e=>e.data)}getEmployeesReport(e,t){var a="";if(e){a="page="+(e.page+1)+"&per_page="+e.rows;var o=1==e.sortOrder?"asc":"desc";a+="&order_by="+o,null!=e.sortField&&(a+="&sort_by="+e.sortField),e.filters.global.value&&(a+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(a+="&date_start="+e.date_start+"&date_end="+e.date_end)}return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/reports/"+t+"?"+a,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then(e=>401==e.status?{data:{redirectTo:"login"}}:e.json()).then(e=>e.data)}getEmployeesReportDetail(e,t){var a="";if(e){a="page="+(e.page+1)+"&per_page="+e.rows;var o=1==e.sortOrder?"asc":"desc";a+="&order_by="+o,null!=e.sortField&&(a+="&sort_by="+e.sortField),e.filters.global.value&&(a+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(a+="&date_start="+e.date_start+"&date_end="+e.date_end)}return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/report-details/"+t+"?"+a,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then(e=>401==e.status?{data:{redirectTo:"login"}}:e.json()).then(e=>e.data)}getEmployeesReportPdfLink(e,t){var a="";if(e){var o=1==e.sortOrder?"asc":"desc";a+="&order_by="+o,null!=e.sortField&&(a+="&sort_by="+e.sortField),e.filters.global.value&&(a+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(a+="&date_start="+e.date_start+"&date_end="+e.date_end)}return"https://sisapa.tanjungbalaikota.go.id/api/employees/report-pdf/"+t+"?"+a}getEmployeesReportDetailPdfLink(e,t){var a="";if(e){var o=1==e.sortOrder?"asc":"desc";a+="&order_by="+o,null!=e.sortField&&(a+="&sort_by="+e.sortField),e.filters.global.value&&(a+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(a+="&date_start="+e.date_start+"&date_end="+e.date_end)}return"https://sisapa.tanjungbalaikota.go.id/api/employees/report-detail-pdf/"+t+"?"+a}getEmployee(e){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+e,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then(e=>401==e.status?{data:{redirectTo:"login"}}:e.json()).then(e=>e.data)}getPresence(e,t){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+e+"/presences/"+t,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then(e=>401==e.status?{data:{redirectTo:"login"}}:e.json()).then(e=>e.data)}updateEmployee(e){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+e.id+"/place",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({lat:e.lat,lng:e.lng,radius:e.radius})}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}updateRole(e,t){var a={...e};return a.role=t,fetch("https://sisapa.tanjungbalaikota.go.id/api/users/"+e.id,{method:"PUT",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(a)}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}addPlace(e,t){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+e.id+"/place",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(t)}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}deletePlace(e,t){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+e.id+"/place",{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({place_id:t.id})}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}patchPlace(e){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+e.id+"/place",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"}}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}patchAndroid(e){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+e.id+"/android-user",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"}}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}resetDevice(e){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+e.id+"/reset-device",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"}}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}addWorktime(e,t){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+e.id+"/worktime",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(t)}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}deleteWorktime(e,t){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+e.id+"/worktime",{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({worktime_id:t.id})}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}actionPresence(e,t){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+t.employee_id+"/presences/"+t.id,{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({status:e})}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}insertPresence(e,t){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+e+"/presences",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")},body:t}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}}},"699f":function(e,t,a){"use strict";a.r(t);var o=a("7a23");const r={class:"grid"},s={class:"col-12"},i={class:"card"},n={class:"my-2 d-flex"},l={class:"p-input-icon-left m-2"},d=Object(o["j"])("i",{class:"pi pi-search"},null,-1),c={class:"flex flex-column md:flex-row md:justify-content-between md:align-items-center"},p=Object(o["j"])("h5",{class:"m-0"},"Laporan",-1),u=Object(o["j"])("span",{class:"p-column-title"},"ID",-1);function h(e,t,a,h,g,m){const _=Object(o["H"])("Calendar"),b=Object(o["H"])("Dropdown"),k=Object(o["H"])("InputText"),y=Object(o["H"])("Button"),f=Object(o["H"])("Toolbar"),j=Object(o["H"])("Column"),w=Object(o["H"])("DataTable");return Object(o["z"])(),Object(o["i"])("div",r,[Object(o["j"])("div",s,[Object(o["j"])("div",i,[Object(o["m"])(f,{class:"mb-4"},{start:Object(o["S"])(()=>[Object(o["j"])("div",n,[Object(o["m"])(_,{dateFormat:"yy-mm-dd",showIcon:!0,showButtonBar:!0,modelValue:g.date_start,"onUpdate:modelValue":t[0]||(t[0]=e=>g.date_start=e),class:"m-2",placeholder:"Pilih Tanggal Mulai",onDateSelect:m.onDateChange},null,8,["modelValue","onDateSelect"]),Object(o["m"])(_,{dateFormat:"yy-mm-dd",showIcon:!0,showButtonBar:!0,modelValue:g.date_end,"onUpdate:modelValue":t[1]||(t[1]=e=>g.date_end=e),class:"m-2",placeholder:"Pilih Tanggal Selesai"},null,8,["modelValue"]),["superuser","adminsistem","adminkepegawaian"].includes(g.role)?(Object(o["z"])(),Object(o["g"])(b,{key:0,modelValue:g.selectedWorkunit.id,"onUpdate:modelValue":t[2]||(t[2]=e=>g.selectedWorkunit.id=e),options:g.workunits,optionLabel:"name",optionValue:"id",class:"m-2",placeholder:"Pilih OPD"},null,8,["modelValue","options"])):Object(o["h"])("",!0),Object(o["j"])("span",l,[d,Object(o["m"])(k,{modelValue:g.filters["global"].value,"onUpdate:modelValue":t[3]||(t[3]=e=>g.filters["global"].value=e),placeholder:"Search...",onKeyup:m.onFilter},null,8,["modelValue","onKeyup"])]),Object(o["m"])(y,{label:"Filter",icon:"pi pi-search",class:"p-button-success m-2",onClick:m.onSearch},null,8,["onClick"])])]),_:1}),Object(o["m"])(w,{value:g.employees,lazy:!0,filters:g.filters,"onUpdate:filters":t[4]||(t[4]=e=>g.filters=e),ref:"dt",dataKey:"id",loading:g.loading,globalFilterFields:["name"],selection:e.selectedCustomers,"onUpdate:selection":t[5]||(t[5]=t=>e.selectedCustomers=t),selectAll:g.selectAll,onSelectAllChange:e.onSelectAllChange,onRowSelect:e.onRowSelect,onRowUnselect:e.onRowUnselect,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} products",responsiveLayout:"scroll"},{header:Object(o["S"])(()=>[Object(o["j"])("div",c,[p,Object(o["j"])("div",null,[g.employees.length?(Object(o["z"])(),Object(o["g"])(y,{key:0,label:"Download Pdf",class:"p-button-success m-2",onClick:m.onDownloadPdf},null,8,["onClick"])):Object(o["h"])("",!0)])])]),default:Object(o["S"])(()=>[Object(o["m"])(j,{field:"id",header:"ID",sortable:!0},{body:Object(o["S"])(e=>[u,Object(o["l"])(" "+Object(o["L"])(e.data.id),1)]),_:1}),Object(o["m"])(j,{field:"name",header:"Nama"}),Object(o["m"])(j,{field:"nip",header:"NIP"}),Object(o["m"])(j,{field:"group",header:"Golongan"}),Object(o["m"])(j,{field:"position",header:"Jabatan"}),Object(o["m"])(j,{field:"_hadir",class:"text-center",header:"Hadir"}),Object(o["m"])(j,{field:"alfa",class:"text-center",header:"Alfa"}),Object(o["m"])(j,{field:"_cuti",class:"text-center",header:"Cuti"}),Object(o["m"])(j,{field:"_tugas",class:"text-center",header:"Tugas Luar/Dalam"}),Object(o["m"])(j,{field:"hari_kerja",class:"text-center",header:"Hari Kerja"}),Object(o["m"])(j,{field:"time_left",class:"text-center",header:"Kekurangan Waktu (Menit)"}),Object(o["m"])(j,{field:"presentase",class:"text-center",header:"Persentase"})]),_:1},8,["value","filters","loading","selection","selectAll","onSelectAllChange","onRowSelect","onRowUnselect"])])])])}a("14d9");var g=a("0393"),m=a("fca4"),_=a("06d6"),b={data(){return{loading:!1,employees:[],onsearchtimeout:null,totalRecords:0,selectAll:!1,filters:{},lazyParams:{},date_start:null,date_end:null,cdate_start:null,cdate_end:null,workunits:[],selectedWorkunit:{},role:localStorage.getItem("presence_app_role"),fields:{Nama:"name",NIP:{field:"nip",callback:e=>"'"+e},Golongan:"group",Jabatan:"position",Hadir:"hadir",Izin:"izin",Cuti:"cuti",Sakit:"sakit","Tugas Luar":"tugasluar",Kegiatan:"kegiatan",Alfa:"alfa"}}},workunitService:null,employeeService:null,created(){this.workunitService=new m["a"],this.employeeService=new _["a"],this.initFilters()},mounted(){this.loading=!0,this.lazyParams={first:0,page:0,rows:this.$refs.dt.rows,sortField:null,sortOrder:1,date_start:null,date_end:null,filters:this.filters},this.loadLazyData()},methods:{loadLazyData(){this.loading=!0;var e=JSON.parse(localStorage.getItem("presence_user_data"));e.workunit_id&&(this.selectedWorkunit.id=e.workunit_id),setTimeout(()=>{this.workunitService.getWorkunits().then(e=>{"redirectTo"in e&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),this.$router.push(e.redirectTo)),this.workunits=e.data,this.loading=!1}),this.selectedWorkunit.id&&this.employeeService.getEmployeesReport(this.lazyParams,this.selectedWorkunit.id).then(e=>{"redirectTo"in e&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),this.$router.push(e.redirectTo)),this.employees=e.data,this.totalRecords=e.total,this.loading=!1})},1e3*Math.random()+250)},onPage(e){this.lazyParams=e,this.loadLazyData()},onSort(e){var t=this.lazyParams.page;this.lazyParams=e,this.lazyParams.page=t,this.loadLazyData()},onFilter(){this.onsearchtimeout&&clearTimeout(this.onsearchtimeout),this.onsearchtimeout=setTimeout(()=>{this.lazyParams.filters=this.filters,this.loadLazyData()},1e3)},onDownloadPdf(){var e;window.open(this.employeeService.getEmployeesReportPdfLink(this.lazyParams,null!==(e=this.selectedWorkunit.id)&&void 0!==e?e:this.userData.workunit_id))},onDateChange(){if(this.date_start){let e=this.date_start,t=e.getDate()<10?"0"+e.getDate():e.getDate(),a=e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1;this.cdate_start=e.getFullYear()+"-"+a+"-"+t}if(this.date_end){let e=this.date_end,t=e.getDate()<10?"0"+e.getDate():e.getDate(),a=e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1;this.cdate_end=e.getFullYear()+"-"+a+"-"+t}},onSearch(){if(this.lazyParams.filters=this.filters,this.date_start){let e=this.date_start,t=e.getDate()<10?"0"+e.getDate():e.getDate(),a=e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1;this.lazyParams.date_start=e.getFullYear()+"-"+a+"-"+t}if(this.date_end){let e=this.date_end,t=e.getDate()<10?"0"+e.getDate():e.getDate(),a=e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1;this.lazyParams.date_end=e.getFullYear()+"-"+a+"-"+t}this.loadLazyData()},onPengajuanWorkunitChange(){this.workunitService.getWorkunit(this.pengajuan.workunit_id).then(e=>{"redirectTo"in e&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),this.$router.push(e.redirectTo)),this.employees=e.employees})},initFilters(){this.filters={global:{value:null,matchMode:g["a"].CONTAINS}}}}},k=a("6b0d"),y=a.n(k);const f=y()(b,[["render",h]]);t["default"]=f},fca4:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));class o{getWorkunits(e){var t="";if(e){t="?page="+(e.page+1)+"&per_page="+e.rows;var a=1==e.sortOrder?"asc":"desc";t+="&order_by="+a,null!=e.sortField&&(t+="&sort_by="+e.sortField),e.filters.global.value&&(t+="&keyword="+e.filters.global.value)}else t="?all=1&order_by=asc";return fetch("https://sisapa.tanjungbalaikota.go.id/api/workunits"+t,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then(e=>401==e.status?{data:{redirectTo:"Login"}}:e.json()).then(e=>e.data)}getWorkunit(e){return fetch("https://sisapa.tanjungbalaikota.go.id/api/workunits/"+e,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then(e=>401==e.status?{data:{redirectTo:"login"}}:e.json()).then(e=>e.data)}getPresences(e,t=!1,a=!1){var o="";if(e){o="page="+(e.page+1)+"&per_page="+e.rows;var r=1==e.sortOrder?"asc":"desc";o+="&order_by="+r,null!=e.sortField&&(o+="&sort_by="+e.sortField),e.filters.global.value&&(o+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(o+="&date_start="+e.date_start+"&date_end="+e.date_end)}a&&(o+="&type="+a);var s=t?"https://sisapa.tanjungbalaikota.go.id/api/workunits/"+t+"/presences?"+o:"https://sisapa.tanjungbalaikota.go.id/api/workunits/presences?"+o;return fetch(s,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then(e=>401==e.status?{data:{redirectTo:"login"}}:e.json()).then(e=>e.data)}updateWorkunit(e){return fetch("https://sisapa.tanjungbalaikota.go.id/api/workunits/"+e.id+"/place",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({lat:e.lat,lng:e.lng,radius:e.radius})}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}assignWorktime(e,t){return fetch("https://sisapa.tanjungbalaikota.go.id/api/workunits/"+e.id+"/worktime",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({worktime_id:t.worktime_id})}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}deleteWorktime(e,t){return fetch("https://sisapa.tanjungbalaikota.go.id/api/workunits/"+e.id+"/worktime",{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({worktime_id:t.id})}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}}}}]);
//# sourceMappingURL=chunk-0f6619be.37c0eb77.js.map