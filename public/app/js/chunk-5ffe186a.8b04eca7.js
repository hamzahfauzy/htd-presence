(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ffe186a"],{"06d6":function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));class o{getEmployees(e,t=!1){var a="";if(e){a="page="+(e.page+1)+"&per_page="+e.rows;var o=1==e.sortOrder?"asc":"desc";a+="&order_by="+o,null!=e.sortField&&(a+="&sort_by="+e.sortField),e.filters.global.value&&(a+="&keyword="+e.filters.global.value)}var r=JSON.parse(localStorage.getItem("presence_user_data"));return r.workunit_id&&(a+="&workunit_id="+r.workunit_id),t&&(a+="&workunit_id="+t),fetch("https://sisapa.tanjungbalaikota.go.id/api/employees?"+a,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then(e=>401==e.status?{data:{redirectTo:"login"}}:e.json()).then(e=>e.data)}getEmployeesReport(e,t){var a="";if(e){a="page="+(e.page+1)+"&per_page="+e.rows;var o=1==e.sortOrder?"asc":"desc";a+="&order_by="+o,null!=e.sortField&&(a+="&sort_by="+e.sortField),e.filters.global.value&&(a+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(a+="&date_start="+e.date_start+"&date_end="+e.date_end)}return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/reports/"+t+"?"+a,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then(e=>401==e.status?{data:{redirectTo:"login"}}:e.json()).then(e=>e.data)}getEmployeesReportDetail(e,t){var a="";if(e){a="page="+(e.page+1)+"&per_page="+e.rows;var o=1==e.sortOrder?"asc":"desc";a+="&order_by="+o,null!=e.sortField&&(a+="&sort_by="+e.sortField),e.filters.global.value&&(a+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(a+="&date_start="+e.date_start+"&date_end="+e.date_end)}return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/report-details/"+t+"?"+a,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then(e=>401==e.status?{data:{redirectTo:"login"}}:e.json()).then(e=>e.data)}getEmployeesReportPdfLink(e,t){var a="";if(e){var o=1==e.sortOrder?"asc":"desc";a+="&order_by="+o,null!=e.sortField&&(a+="&sort_by="+e.sortField),e.filters.global.value&&(a+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(a+="&date_start="+e.date_start+"&date_end="+e.date_end)}return"https://sisapa.tanjungbalaikota.go.id/api/employees/report-pdf/"+t+"?"+a}getEmployeesReportDetailPdfLink(e,t){var a="";if(e){var o=1==e.sortOrder?"asc":"desc";a+="&order_by="+o,null!=e.sortField&&(a+="&sort_by="+e.sortField),e.filters.global.value&&(a+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(a+="&date_start="+e.date_start+"&date_end="+e.date_end)}return"https://sisapa.tanjungbalaikota.go.id/api/employees/report-detail-pdf/"+t+"?"+a}getEmployee(e){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+e,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then(e=>401==e.status?{data:{redirectTo:"login"}}:e.json()).then(e=>e.data)}getPresence(e,t){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+e+"/presences/"+t,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then(e=>401==e.status?{data:{redirectTo:"login"}}:e.json()).then(e=>e.data)}updateEmployee(e){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+e.id+"/place",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({lat:e.lat,lng:e.lng,radius:e.radius})}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}updateRole(e,t){var a={...e};return a.role=t,fetch("https://sisapa.tanjungbalaikota.go.id/api/users/"+e.id,{method:"PUT",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(a)}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}addPlace(e,t){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+e.id+"/place",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(t)}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}deletePlace(e,t){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+e.id+"/place",{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({place_id:t.id})}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}patchPlace(e){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+e.id+"/place",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"}}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}patchAndroid(e){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+e.id+"/android-user",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"}}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}resetDevice(e){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+e.id+"/reset-device",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"}}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}resetPassword(e){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+e.id+"/reset-password",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"}}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}addWorktime(e,t){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+e.id+"/worktime",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(t)}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}deleteWorktime(e,t){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+e.id+"/worktime",{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({worktime_id:t.id})}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}actionPresence(e,t){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+t.employee_id+"/presences/"+t.id,{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({status:e})}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}insertPresence(e,t){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+e+"/presences",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")},body:t}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}}},ba97:function(e,t,a){"use strict";a.r(t);var o=a("7a23");const r={class:"grid"},s={class:"col-12"},i={class:"card"},n={class:"flex flex-column md:flex-row md:justify-content-between md:align-items-center"},l=Object(o["j"])("h5",{class:"m-0"},"Manajemen Pegawai",-1),d={class:"flex"},p={class:"mt-2 md:mt-0 p-input-icon-left"},c=Object(o["j"])("i",{class:"pi pi-search"},null,-1),h=Object(o["j"])("span",{class:"p-column-title"},"ID",-1),u=Object(o["j"])("span",{class:"p-column-title"},"Nama",-1);function g(e,t,a,g,m,y){const _=Object(o["H"])("Dropdown"),b=Object(o["H"])("InputText"),k=Object(o["H"])("Column"),j=Object(o["H"])("router-link"),f=Object(o["H"])("DataTable");return Object(o["z"])(),Object(o["i"])("div",r,[Object(o["j"])("div",s,[Object(o["j"])("div",i,[Object(o["m"])(f,{value:m.employees,lazy:!0,paginator:!0,rows:10,filters:m.filters,"onUpdate:filters":t[2]||(t[2]=e=>m.filters=e),ref:"dt",dataKey:"id",totalRecords:m.totalRecords,loading:m.loading,onPage:t[3]||(t[3]=e=>y.onPage(e)),onSort:t[4]||(t[4]=e=>y.onSort(e)),onFilter:t[5]||(t[5]=e=>y.onFilter(e)),globalFilterFields:["name"],selection:e.selectedCustomers,"onUpdate:selection":t[6]||(t[6]=t=>e.selectedCustomers=t),selectAll:m.selectAll,onSelectAllChange:y.onSelectAllChange,onRowSelect:y.onRowSelect,onRowUnselect:y.onRowUnselect,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} products",responsiveLayout:"scroll"},{header:Object(o["S"])(()=>[Object(o["j"])("div",n,[l,Object(o["j"])("div",d,[["superuser","adminsistem","adminkepegawaian"].includes(m.role)?(Object(o["z"])(),Object(o["g"])(_,{key:0,modelValue:m.selectedWorkunit.id,"onUpdate:modelValue":t[0]||(t[0]=e=>m.selectedWorkunit.id=e),options:m.workunits,optionLabel:"name",optionValue:"id",class:"mr-3",placeholder:"Pilih OPD",onChange:y.onWorkunitChange},null,8,["modelValue","options","onChange"])):Object(o["h"])("",!0),Object(o["j"])("span",p,[c,Object(o["m"])(b,{modelValue:m.filters["global"].value,"onUpdate:modelValue":t[1]||(t[1]=e=>m.filters["global"].value=e),placeholder:"Search...",onKeyup:y.onFilter},null,8,["modelValue","onKeyup"])])])])]),default:Object(o["S"])(()=>[Object(o["m"])(k,{field:"id",header:"ID",sortable:!0},{body:Object(o["S"])(e=>[h,Object(o["l"])(" "+Object(o["L"])(e.data.id),1)]),_:1}),Object(o["m"])(k,{field:"nip",header:"NIP"}),Object(o["m"])(k,{field:"workunit.name",header:"OPD / Unit Kerja",headerStyle:"width:20%; min-width:10rem;"}),Object(o["m"])(k,{field:"name",header:"Nama",filterMatchMode:"startsWith",ref:"name",sortable:!0,headerStyle:"width:20%; min-width:10rem;"},{body:Object(o["S"])(e=>[u,Object(o["m"])(j,{to:{name:"employees.detail",params:{id:e.data.id}}},{default:Object(o["S"])(()=>[Object(o["l"])(Object(o["L"])(e.data.name),1)]),_:2},1032,["to"])]),_:1},512),Object(o["m"])(k,{field:"position",header:"Jabatan",ref:"position"},null,512),Object(o["m"])(k,{field:"phone",header:"Telepon",ref:"phone"},null,512)]),_:1},8,["value","filters","totalRecords","loading","selection","selectAll","onSelectAllChange","onRowSelect","onRowUnselect"])])])])}a("14d9");var m=a("0393"),y=a("06d6"),_=a("fca4"),b={data(){return{API_URL:"https://sisapa.tanjungbalaikota.go.id/api/",loading:!1,onsearchtimeout:null,totalRecords:0,employees:null,employee:{},selectedEmployees:null,selectAll:!1,filters:{},lazyParams:{},role:window.localStorage.getItem("presence_app_role"),columns:[{field:"id",header:"ID"},{field:"nip",header:"NIP"},{field:"employee.name",header:"OPD / Unit Kerja"},{field:"name",header:"Nama"},{field:"position",header:"Jabatan"},{field:"phone",header:"Telepon"}],employeeDialog:!1,submitted:!1,workunits:[],selectedWorkunit:{}}},employeeService:null,workunitService:null,created(){this.employeeService=new y["a"],this.workunitService=new _["a"],this.initFilters()},mounted(){this.loading=!0,this.lazyParams={first:0,page:0,rows:this.$refs.dt.rows,sortField:null,sortOrder:1,filters:this.filters},this.loadLazyData()},methods:{loadLazyData(){this.loading=!0,setTimeout(()=>{this.workunitService.getWorkunits(!1).then(e=>{"redirectTo"in e&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),this.$router.push(e.redirectTo)),this.workunits=e.data,this.loading=!1}),this.selectedWorkunit.id?this.employeeService.getEmployees(this.lazyParams,this.selectedWorkunit.id).then(e=>{"redirectTo"in e&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),this.$router.push(e.redirectTo)),this.employees=e.data,this.totalRecords=e.total,this.loading=!1}):this.employeeService.getEmployees(this.lazyParams).then(e=>{"redirectTo"in e&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),this.$router.push(e.redirectTo)),this.employees=e.data,this.totalRecords=e.total,this.loading=!1})},1e3*Math.random()+250)},onPage(e){this.lazyParams=e,this.loadLazyData()},onSort(e){var t=this.lazyParams.page;this.lazyParams=e,this.lazyParams.page=t,this.loadLazyData()},onFilter(){this.onsearchtimeout&&clearTimeout(this.onsearchtimeout),this.onsearchtimeout=setTimeout(()=>{this.lazyParams.filters=this.filters,this.loadLazyData()},1e3)},onSelectAllChange(e){const t=e.checked;t?this.employeeService.getEmployees().then(e=>{"redirectTo"in e&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),this.$router.push(e.redirectTo)),this.selectAll=!0,this.selectedEmployees=e.data}):(this.selectAll=!1,this.selectedEmployees=[])},onRowSelect(){this.selectAll=this.selectedEmployees.length===this.totalRecords},onRowUnselect(){this.selectAll=!1},initFilters(){this.filters={global:{value:null,matchMode:m["a"].CONTAINS}}},onWorkunitChange(){this.lazyParams.filters=this.filters,this.loadLazyData()}}},k=a("6b0d"),j=a.n(k);const f=j()(b,[["render",g]]);t["default"]=f},fca4:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));class o{getWorkunits(e){var t="";if(e){t="?page="+(e.page+1)+"&per_page="+e.rows;var a=1==e.sortOrder?"asc":"desc";t+="&order_by="+a,null!=e.sortField&&(t+="&sort_by="+e.sortField),e.filters.global.value&&(t+="&keyword="+e.filters.global.value)}else t="?all=1&order_by=asc";return fetch("https://sisapa.tanjungbalaikota.go.id/api/workunits"+t,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then(e=>401==e.status?{data:{redirectTo:"Login"}}:e.json()).then(e=>e.data)}getWorkunit(e){return fetch("https://sisapa.tanjungbalaikota.go.id/api/workunits/"+e,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then(e=>401==e.status?{data:{redirectTo:"login"}}:e.json()).then(e=>e.data)}getPresences(e,t=!1,a=!1){var o="";if(e){o="page="+(e.page+1)+"&per_page="+e.rows;var r=1==e.sortOrder?"asc":"desc";o+="&order_by="+r,null!=e.sortField&&(o+="&sort_by="+e.sortField),e.filters.global.value&&(o+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(o+="&date_start="+e.date_start+"&date_end="+e.date_end)}a&&(o+="&type="+a);var s=t?"https://sisapa.tanjungbalaikota.go.id/api/workunits/"+t+"/presences?"+o:"https://sisapa.tanjungbalaikota.go.id/api/workunits/presences?"+o;return fetch(s,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then(e=>401==e.status?{data:{redirectTo:"login"}}:e.json()).then(e=>e.data)}updateWorkunit(e){return fetch("https://sisapa.tanjungbalaikota.go.id/api/workunits/"+e.id+"/place",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({lat:e.lat,lng:e.lng,radius:e.radius})}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}assignWorktime(e,t){return fetch("https://sisapa.tanjungbalaikota.go.id/api/workunits/"+e.id+"/worktime",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({worktime_id:t.worktime_id})}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}deleteWorktime(e,t){return fetch("https://sisapa.tanjungbalaikota.go.id/api/workunits/"+e.id+"/worktime",{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({worktime_id:t.id})}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}}}}]);
//# sourceMappingURL=chunk-5ffe186a.8b04eca7.js.map