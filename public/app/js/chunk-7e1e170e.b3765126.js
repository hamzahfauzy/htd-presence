(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e1e170e"],{"06d6":function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));class o{getEmployees(e,t=!1){var a="";if(e){a="page="+(e.page+1)+"&per_page="+e.rows;var o=1==e.sortOrder?"asc":"desc";a+="&order_by="+o,null!=e.sortField&&(a+="&sort_by="+e.sortField),e.filters.global.value&&(a+="&keyword="+e.filters.global.value)}var s=JSON.parse(localStorage.getItem("presence_user_data"));return s.workunit_id&&(a+="&workunit_id="+s.workunit_id),t&&(a+="&workunit_id="+t),fetch("https://sisapa.tanjungbalaikota.go.id/api/employees?"+a,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then(e=>401==e.status?{data:{redirectTo:"login"}}:e.json()).then(e=>e.data)}getEmployeesReport(e,t){var a="";if(e){a="page="+(e.page+1)+"&per_page="+e.rows;var o=1==e.sortOrder?"asc":"desc";a+="&order_by="+o,null!=e.sortField&&(a+="&sort_by="+e.sortField),e.filters.global.value&&(a+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(a+="&date_start="+e.date_start+"&date_end="+e.date_end)}return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/reports/"+t+"?"+a,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then(e=>401==e.status?{data:{redirectTo:"login"}}:e.json()).then(e=>e.data)}getEmployeesReportDetail(e,t){var a="";if(e){a="page="+(e.page+1)+"&per_page="+e.rows;var o=1==e.sortOrder?"asc":"desc";a+="&order_by="+o,null!=e.sortField&&(a+="&sort_by="+e.sortField),e.filters.global.value&&(a+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(a+="&date_start="+e.date_start+"&date_end="+e.date_end)}return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/report-details/"+t+"?"+a,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then(e=>401==e.status?{data:{redirectTo:"login"}}:e.json()).then(e=>e.data)}getEmployeesReportPdfLink(e,t){var a="";if(e){var o=1==e.sortOrder?"asc":"desc";a+="&order_by="+o,null!=e.sortField&&(a+="&sort_by="+e.sortField),e.filters.global.value&&(a+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(a+="&date_start="+e.date_start+"&date_end="+e.date_end)}return"https://sisapa.tanjungbalaikota.go.id/api/employees/report-pdf/"+t+"?"+a}getEmployeesReportDetailPdfLink(e,t){var a="";if(e){var o=1==e.sortOrder?"asc":"desc";a+="&order_by="+o,null!=e.sortField&&(a+="&sort_by="+e.sortField),e.filters.global.value&&(a+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(a+="&date_start="+e.date_start+"&date_end="+e.date_end)}return"https://sisapa.tanjungbalaikota.go.id/api/employees/report-detail-pdf/"+t+"?"+a}getEmployee(e){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+e,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then(e=>401==e.status?{data:{redirectTo:"login"}}:e.json()).then(e=>e.data)}getPresence(e,t){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+e+"/presences/"+t,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then(e=>401==e.status?{data:{redirectTo:"login"}}:e.json()).then(e=>e.data)}updateEmployee(e){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+e.id+"/place",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({lat:e.lat,lng:e.lng,radius:e.radius})}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}updateRole(e,t){var a={...e};return a.role=t,fetch("https://sisapa.tanjungbalaikota.go.id/api/users/"+e.id,{method:"PUT",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(a)}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}addPlace(e,t){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+e.id+"/place",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(t)}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}deletePlace(e,t){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+e.id+"/place",{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({place_id:t.id})}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}patchPlace(e){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+e.id+"/place",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"}}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}patchAndroid(e){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+e.id+"/android-user",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"}}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}resetDevice(e){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+e.id+"/reset-device",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"}}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}resetPassword(e){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+e.id+"/reset-password",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"}}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}addWorktime(e,t){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+e.id+"/worktime",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(t)}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}deleteWorktime(e,t){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+e.id+"/worktime",{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({worktime_id:t.id})}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}actionPresence(e,t){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+t.employee_id+"/presences/"+t.id,{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({status:e})}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}insertPresence(e,t){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+e+"/presences",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")},body:t}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}}},"413a":function(e,t,a){"use strict";a.r(t);var o=a("7a23");const s={class:"grid"},r={class:"col-12"},i={class:"card"},l={class:"my-2 d-flex"},n={class:"p-input-icon-left m-2"},d=Object(o["j"])("i",{class:"pi pi-search"},null,-1),c={class:"flex flex-column md:flex-row md:justify-content-between md:align-items-center"},p=Object(o["j"])("h5",{class:"m-0"},"Laporan",-1),u=Object(o["j"])("span",{class:"p-column-title"},"ID",-1),h=Object(o["j"])("tr",null,[Object(o["j"])("th",{class:"p-3"},"Status"),Object(o["j"])("th",{class:"p-3"},"Lampiran"),Object(o["j"])("th",{class:"p-3"},"Lokasi"),Object(o["j"])("th",{class:"p-3"},"Foto Selfi"),Object(o["j"])("th",{class:"p-3"},"Jam"),Object(o["j"])("th",{class:"p-3"},"Keterlambatan / Sebelum Waktu"),Object(o["j"])("th",{class:"p-3"},"%")],-1),g={class:"p-3"},m={class:"p-3"},b=["href"],j={key:1},_={class:"p-3"},k={key:1},y={class:"p-3"},O={key:1},f={class:"p-3"},w={class:"p-3"},S={class:"p-3"},v=Object(o["j"])("th",{class:"p-3",colspan:"5"},"Total",-1),T={class:"p-3"},P={class:"p-3"},L=["src"],z=["src"];function D(e,t,a,D,I,C){const F=Object(o["H"])("Calendar"),U=Object(o["H"])("Dropdown"),B=Object(o["H"])("InputText"),E=Object(o["H"])("Button"),R=Object(o["H"])("Toolbar"),A=Object(o["H"])("Column"),N=Object(o["H"])("DataTable"),J=Object(o["H"])("Dialog");return Object(o["z"])(),Object(o["i"])("div",s,[Object(o["j"])("div",r,[Object(o["j"])("div",i,[Object(o["m"])(R,{class:"mb-4"},{start:Object(o["S"])(()=>[Object(o["j"])("div",l,[Object(o["m"])(F,{dateFormat:"yy-mm-dd",showIcon:!0,showButtonBar:!0,modelValue:I.date_start,"onUpdate:modelValue":t[0]||(t[0]=e=>I.date_start=e),class:"m-2",placeholder:"Pilih Tanggal Mulai",onChange:e.onDateChange},null,8,["modelValue","onChange"]),Object(o["m"])(F,{dateFormat:"yy-mm-dd",showIcon:!0,showButtonBar:!0,modelValue:I.date_end,"onUpdate:modelValue":t[1]||(t[1]=e=>I.date_end=e),class:"m-2",placeholder:"Pilih Tanggal Selesai",onChange:e.onDateChange},null,8,["modelValue","onChange"]),["superuser","adminsistem","adminkepegawaian"].includes(I.role)?(Object(o["z"])(),Object(o["g"])(U,{key:0,modelValue:I.selectedWorkunit.id,"onUpdate:modelValue":t[2]||(t[2]=e=>I.selectedWorkunit.id=e),options:I.workunits,optionLabel:"name",optionValue:"id",class:"m-2",placeholder:"Pilih OPD"},null,8,["modelValue","options"])):Object(o["h"])("",!0),Object(o["j"])("span",n,[d,Object(o["m"])(B,{modelValue:I.filters["global"].value,"onUpdate:modelValue":t[3]||(t[3]=e=>I.filters["global"].value=e),placeholder:"Search...",onKeyup:C.onFilter},null,8,["modelValue","onKeyup"])]),Object(o["m"])(E,{label:"Filter",icon:"pi pi-search",class:"p-button-success m-2",onClick:C.onSearch},null,8,["onClick"])])]),_:1}),Object(o["m"])(N,{value:I.employees,lazy:!0,filters:I.filters,"onUpdate:filters":t[4]||(t[4]=e=>I.filters=e),ref:"dt",dataKey:"id",loading:I.loading,globalFilterFields:["name"],selectAll:I.selectAll,onSelectAllChange:e.onSelectAllChange,onRowSelect:e.onRowSelect,onRowUnselect:e.onRowUnselect,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} products",responsiveLayout:"scroll"},{header:Object(o["S"])(()=>[Object(o["j"])("div",c,[p,Object(o["j"])("div",null,[I.employees.length?(Object(o["z"])(),Object(o["g"])(E,{key:0,label:"Download Pdf",class:"p-button-success m-2",onClick:C.onDownloadPdf},null,8,["onClick"])):Object(o["h"])("",!0)])])]),default:Object(o["S"])(()=>[Object(o["m"])(A,{field:"id",header:"ID",sortable:!0},{body:Object(o["S"])(e=>[u,Object(o["l"])(" "+Object(o["L"])(e.data.id),1)]),_:1}),Object(o["m"])(A,{field:"date",header:"Tanggal"}),Object(o["m"])(A,{field:"name",header:"Nama"}),Object(o["m"])(A,{field:"nip",header:"NIP"}),Object(o["m"])(A,{field:"group",header:"Pangkat"}),Object(o["m"])(A,{field:"position",header:"Jabatan"}),Object(o["m"])(A,{field:"types",header:"Keterangan"},{body:Object(o["S"])(e=>[Object(o["j"])("table",null,[h,(Object(o["z"])(!0),Object(o["i"])(o["a"],null,Object(o["F"])(e.data.types,(e,t)=>{var a,s;return Object(o["z"])(),Object(o["i"])("tr",{key:t},[Object(o["j"])("th",g,Object(o["L"])(e.type),1),Object(o["j"])("td",m,[e.attachment_url?(Object(o["z"])(),Object(o["i"])("a",{key:0,href:I.storage_url+e.attachment_url},"Download",8,b)):(Object(o["z"])(),Object(o["i"])("p",j,"Tidak ada Lampiran"))]),Object(o["j"])("td",_,[e.lat&&e.lng?(Object(o["z"])(),Object(o["g"])(E,{key:0,label:"Lihat",class:"p-button-sm p-button-success",onClick:t=>C.showLocation(e.lat,e.lng)},null,8,["onClick"])):(Object(o["z"])(),Object(o["i"])("p",k,"Tidak ada Lokasi"))]),Object(o["j"])("td",y,[e.pic_url?(Object(o["z"])(),Object(o["g"])(E,{key:0,label:"Lihat",class:"p-button-sm p-button-success",onClick:t=>C.showImage(I.storage_url+e.pic_url)},null,8,["onClick"])):(Object(o["z"])(),Object(o["i"])("p",O,"Tidak ada Foto Selfi"))]),Object(o["j"])("td",f,Object(o["L"])(0!=e.time?e.time:"Tidak ada Jam"),1),Object(o["j"])("td",w,Object(o["L"])(null!==(a=e.time_left)&&void 0!==a?a:"-"),1),Object(o["j"])("td",S,Object(o["L"])(null!==(s=e.presentase)&&void 0!==s?s:0)+"%",1)])}),128)),Object(o["j"])("tr",null,[v,Object(o["j"])("th",T,Object(o["L"])(e.data.time_left),1),Object(o["j"])("th",P,Object(o["L"])(e.data.presentase)+"%",1)])])]),_:1})]),_:1},8,["value","filters","loading","selectAll","onSelectAllChange","onRowSelect","onRowUnselect"])])]),Object(o["m"])(J,{visible:I.locationDialog,"onUpdate:visible":t[6]||(t[6]=e=>I.locationDialog=e),style:{width:"800px"},header:"Lokasi",modal:!0,class:"p-fluid"},{footer:Object(o["S"])(()=>[Object(o["m"])(E,{label:"Close",icon:"pi pi-times",class:"p-button-text",onClick:t[5]||(t[5]=e=>I.locationDialog=!1)})]),default:Object(o["S"])(()=>[Object(o["j"])("div",null,[Object(o["j"])("iframe",{width:"100%",height:"500",src:"//maps.google.com/maps?q="+I.lat+","+I.lng+"&z=15&output=embed",allowfullscreen:"",style:{border:"0"},referrerpolicy:"no-referrer-when-downgrade"},null,8,L)])]),_:1},8,["visible"]),Object(o["m"])(J,{visible:I.imageDialog,"onUpdate:visible":t[8]||(t[8]=e=>I.imageDialog=e),style:{width:"800px"},header:"Foto Selfi",modal:!0,class:"p-fluid"},{footer:Object(o["S"])(()=>[Object(o["m"])(E,{label:"Close",icon:"pi pi-times",class:"p-button-text",onClick:t[7]||(t[7]=e=>I.imageDialog=!1)})]),default:Object(o["S"])(()=>[Object(o["j"])("div",null,[Object(o["j"])("img",{src:I.selectedImage,style:{"max-width":"500px"},alt:"Foto Selfi"},null,8,z)])]),_:1},8,["visible"])])}a("14d9");var I=a("0393"),C=a("fca4"),F=a("06d6"),U={data(){return{loading:!1,employees:[],onsearchtimeout:null,totalRecords:0,selectAll:!1,filters:{},lazyParams:{},date_start:null,date_end:null,workunits:[],selectedWorkunit:{},storage_url:"https://sisapa.tanjungbalaikota.go.id/storage/",role:localStorage.getItem("presence_app_role"),userData:JSON.parse(localStorage.getItem("presence_user_data")),imageDialog:!1,selectedImage:"",locationDialog:!1,lat:null,lng:null,MAP_KEY:Object({NODE_ENV:"production",VUE_APP_API_URL:"https://sisapa.tanjungbalaikota.go.id/api/",VUE_APP_LOGO_URL:"https://sisapa.tanjungbalaikota.go.id/app-logo.png",VUE_APP_STORAGE_URL:"https://sisapa.tanjungbalaikota.go.id/storage/",BASE_URL:"/app/"}).VUE_APP_MAP_KEY,fields:{Nama:"name",NIP:"nip",OPD:"workunit",Tanggal:"date"}}},workunitService:null,employeeService:null,created(){this.workunitService=new C["a"],this.employeeService=new F["a"],this.initFilters()},mounted(){this.loading=!0,this.lazyParams={first:0,page:0,rows:this.$refs.dt.rows,sortField:null,sortOrder:1,date_start:null,date_end:null,filters:this.filters},this.loadLazyData()},methods:{loadLazyData(){this.loading=!0;var e=JSON.parse(localStorage.getItem("presence_user_data"));e.workunit_id&&(this.selectedWorkunit.id=e.workunit_id),setTimeout(()=>{this.workunitService.getWorkunits().then(e=>{"redirectTo"in e&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),this.$router.push(e.redirectTo)),this.workunits=e.data,this.loading=!1}),this.selectedWorkunit.id?this.employeeService.getEmployeesReportDetail(this.lazyParams,this.selectedWorkunit.id).then(e=>{"redirectTo"in e&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),this.$router.push(e.redirectTo)),this.employees=e.data,this.totalRecords=e.total,this.loading=!1}):this.userData.workunit_id&&this.employeeService.getEmployeesReportDetail(this.lazyParams,this.userData.workunit_id).then(e=>{"redirectTo"in e&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),this.$router.push(e.redirectTo)),this.employees=e.data,this.totalRecords=e.total,this.loading=!1})},1e3*Math.random()+250)},onPage(e){this.lazyParams=e,this.loadLazyData()},onSort(e){var t=this.lazyParams.page;this.lazyParams=e,this.lazyParams.page=t,this.loadLazyData()},onFilter(){this.onsearchtimeout&&clearTimeout(this.onsearchtimeout),this.onsearchtimeout=setTimeout(()=>{this.lazyParams.filters=this.filters,this.loadLazyData()},1e3)},onDownloadPdf(){var e;window.open(this.employeeService.getEmployeesReportDetailPdfLink(this.lazyParams,null!==(e=this.selectedWorkunit.id)&&void 0!==e?e:this.userData.workunit_id))},showImage(e){this.selectedImage=e,this.imageDialog=!0},showLocation(e,t){this.lat=e,this.lng=t,this.locationDialog=!0},onSearch(){if(this.lazyParams.filters=this.filters,this.date_start){let e=this.date_start,t=e.getDate()<10?"0"+e.getDate():e.getDate(),a=e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1;this.lazyParams.date_start=e.getFullYear()+"-"+a+"-"+t}if(this.date_end){let e=this.date_end,t=e.getDate()<10?"0"+e.getDate():e.getDate(),a=e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1;this.lazyParams.date_end=e.getFullYear()+"-"+a+"-"+t}this.loadLazyData()},onPengajuanWorkunitChange(){this.workunitService.getWorkunit(this.pengajuan.workunit_id).then(e=>{"redirectTo"in e&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),this.$router.push(e.redirectTo)),this.employees=e.employees})},initFilters(){this.filters={global:{value:null,matchMode:I["a"].CONTAINS}}}}},B=a("6b0d"),E=a.n(B);const R=E()(U,[["render",D]]);t["default"]=R},fca4:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));class o{getWorkunits(e){var t="";if(e){t="?page="+(e.page+1)+"&per_page="+e.rows;var a=1==e.sortOrder?"asc":"desc";t+="&order_by="+a,null!=e.sortField&&(t+="&sort_by="+e.sortField),e.filters.global.value&&(t+="&keyword="+e.filters.global.value)}else t="?all=1&order_by=asc";return fetch("https://sisapa.tanjungbalaikota.go.id/api/workunits"+t,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then(e=>401==e.status?{data:{redirectTo:"Login"}}:e.json()).then(e=>e.data)}getWorkunit(e){return fetch("https://sisapa.tanjungbalaikota.go.id/api/workunits/"+e,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then(e=>401==e.status?{data:{redirectTo:"login"}}:e.json()).then(e=>e.data)}getPresences(e,t=!1,a=!1){var o="";if(e){o="page="+(e.page+1)+"&per_page="+e.rows;var s=1==e.sortOrder?"asc":"desc";o+="&order_by="+s,null!=e.sortField&&(o+="&sort_by="+e.sortField),e.filters.global.value&&(o+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(o+="&date_start="+e.date_start+"&date_end="+e.date_end)}a&&(o+="&type="+a);var r=t?"https://sisapa.tanjungbalaikota.go.id/api/workunits/"+t+"/presences?"+o:"https://sisapa.tanjungbalaikota.go.id/api/workunits/presences?"+o;return fetch(r,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then(e=>401==e.status?{data:{redirectTo:"login"}}:e.json()).then(e=>e.data)}updateWorkunit(e){return fetch("https://sisapa.tanjungbalaikota.go.id/api/workunits/"+e.id+"/place",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({lat:e.lat,lng:e.lng,radius:e.radius})}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}assignWorktime(e,t){return fetch("https://sisapa.tanjungbalaikota.go.id/api/workunits/"+e.id+"/worktime",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({worktime_id:t.worktime_id})}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}deleteWorktime(e,t){return fetch("https://sisapa.tanjungbalaikota.go.id/api/workunits/"+e.id+"/worktime",{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({worktime_id:t.id})}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}}}}]);
//# sourceMappingURL=chunk-7e1e170e.b3765126.js.map