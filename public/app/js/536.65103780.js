"use strict";(self["webpackChunksakai_vue"]=self["webpackChunksakai_vue"]||[]).push([[536],{6234:function(e,t,a){a.d(t,{Z:function(){return o}});class o{getEmployees(e,t=!1){var a="";if(e){a="page="+(e.page+1)+"&per_page="+e.rows;var o=1==e.sortOrder?"asc":"desc";a+="&order_by="+o,null!=e.sortField&&(a+="&sort_by="+e.sortField),e.filters.global.value&&(a+="&keyword="+e.filters.global.value)}var s=JSON.parse(localStorage.getItem("presence_user_data"));return s.workunit_id&&(a+="&workunit_id="+s.workunit_id),t&&(a+="&workunit_id="+t),fetch("https://sisapa.tanjungbalaikota.go.id/api/employees?"+a,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((e=>401==e.status?{data:{redirectTo:"login"}}:e.json())).then((e=>e.data))}getEmployeesReport(e,t){var a="";if(e){a="page="+(e.page+1)+"&per_page="+e.rows;var o=1==e.sortOrder?"asc":"desc";a+="&order_by="+o,null!=e.sortField&&(a+="&sort_by="+e.sortField),e.filters.global.value&&(a+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(a+="&date_start="+e.date_start+"&date_end="+e.date_end)}return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/reports/"+t+"?"+a,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((e=>401==e.status?{data:{redirectTo:"login"}}:e.json())).then((e=>e.data))}getEmployeesReportDetail(e,t){var a="";if(e){a="page="+(e.page+1)+"&per_page="+e.rows;var o=1==e.sortOrder?"asc":"desc";a+="&order_by="+o,null!=e.sortField&&(a+="&sort_by="+e.sortField),e.filters.global.value&&(a+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(a+="&date_start="+e.date_start+"&date_end="+e.date_end)}return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/report-details/"+t+"?"+a,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((e=>401==e.status?{data:{redirectTo:"login"}}:e.json())).then((e=>e.data))}getEmployeesReportPdfLink(e,t){var a="";if(e){var o=1==e.sortOrder?"asc":"desc";a+="&order_by="+o,null!=e.sortField&&(a+="&sort_by="+e.sortField),e.filters.global.value&&(a+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(a+="&date_start="+e.date_start+"&date_end="+e.date_end)}return"https://sisapa.tanjungbalaikota.go.id/api/employees/report-pdf/"+t+"?"+a}getEmployeesReportDetailPdfLink(e,t){var a="";if(e){var o=1==e.sortOrder?"asc":"desc";a+="&order_by="+o,null!=e.sortField&&(a+="&sort_by="+e.sortField),e.filters.global.value&&(a+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(a+="&date_start="+e.date_start+"&date_end="+e.date_end)}return"https://sisapa.tanjungbalaikota.go.id/api/employees/report-detail-pdf/"+t+"?"+a}getEmployee(e){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+e,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((e=>401==e.status?{data:{redirectTo:"login"}}:e.json())).then((e=>e.data))}getPresence(e,t){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+e+"/presences/"+t,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((e=>401==e.status?{data:{redirectTo:"login"}}:e.json())).then((e=>e.data))}updateEmployee(e){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+e.id+"/place",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({lat:e.lat,lng:e.lng,radius:e.radius})}).then((e=>401==e.status?{redirectTo:"Login"}:e.json()))}updateRole(e,t){var a={...e};return a.role=t,fetch("https://sisapa.tanjungbalaikota.go.id/api/users/"+e.id,{method:"PUT",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(a)}).then((e=>401==e.status?{redirectTo:"Login"}:e.json()))}addPlace(e,t){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+e.id+"/place",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(t)}).then((e=>401==e.status?{redirectTo:"Login"}:e.json()))}deletePlace(e,t){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+e.id+"/place",{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({place_id:t.id})}).then((e=>401==e.status?{redirectTo:"Login"}:e.json()))}patchPlace(e){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+e.id+"/place",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"}}).then((e=>401==e.status?{redirectTo:"Login"}:e.json()))}patchAndroid(e){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+e.id+"/android-user",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"}}).then((e=>401==e.status?{redirectTo:"Login"}:e.json()))}resetDevice(e){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+e.id+"/reset-device",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"}}).then((e=>401==e.status?{redirectTo:"Login"}:e.json()))}resetPassword(e){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+e.id+"/reset-password",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"}}).then((e=>401==e.status?{redirectTo:"Login"}:e.json()))}addWorktime(e,t){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+e.id+"/worktime",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(t)}).then((e=>401==e.status?{redirectTo:"Login"}:e.json()))}deleteWorktime(e,t){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+e.id+"/worktime",{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({worktime_id:t.id,date_start:t.pivot.date_start,date_end:t.pivot.date_end})}).then((e=>401==e.status?{redirectTo:"Login"}:e.json()))}actionPresence(e,t){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+t.employee_id+"/presences/"+t.id,{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({status:e})}).then((e=>401==e.status?{redirectTo:"Login"}:e.json()))}insertPresence(e,t){return fetch("https://sisapa.tanjungbalaikota.go.id/api/employees/"+e+"/presences",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")},body:t}).then((e=>401==e.status?{redirectTo:"Login"}:e.json()))}}},265:function(e,t,a){a.d(t,{Z:function(){return o}});class o{getWorkunits(e){var t="";if(e){t="?page="+(e.page+1)+"&per_page="+e.rows;var a=1==e.sortOrder?"asc":"desc";t+="&order_by="+a,null!=e.sortField&&(t+="&sort_by="+e.sortField),e.filters.global.value&&(t+="&keyword="+e.filters.global.value)}else t="?all=1&order_by=asc";return fetch("https://sisapa.tanjungbalaikota.go.id/api/workunits"+t,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((e=>401==e.status?{data:{redirectTo:"Login"}}:e.json())).then((e=>e.data))}getWorkunit(e){return fetch("https://sisapa.tanjungbalaikota.go.id/api/workunits/"+e,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((e=>401==e.status?{data:{redirectTo:"login"}}:e.json())).then((e=>e.data))}getPresences(e,t=!1,a=!1){var o="";if(e){o="page="+(e.page+1)+"&per_page="+e.rows;var s=1==e.sortOrder?"asc":"desc";o+="&order_by="+s,null!=e.sortField&&(o+="&sort_by="+e.sortField),e.filters.global.value&&(o+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(o+="&date_start="+e.date_start+"&date_end="+e.date_end)}a&&(o+="&type="+a);var r=t?"https://sisapa.tanjungbalaikota.go.id/api/workunits/"+t+"/presences?"+o:"https://sisapa.tanjungbalaikota.go.id/api/workunits/presences?"+o;return fetch(r,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((e=>401==e.status?{data:{redirectTo:"login"}}:e.json())).then((e=>e.data))}updateWorkunit(e){return fetch("https://sisapa.tanjungbalaikota.go.id/api/workunits/"+e.id+"/place",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({lat:e.lat,lng:e.lng,radius:e.radius})}).then((e=>401==e.status?{redirectTo:"Login"}:e.json()))}assignWorktime(e,t){return fetch("https://sisapa.tanjungbalaikota.go.id/api/workunits/"+e.id+"/worktime",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({worktime_id:t.worktime_id})}).then((e=>401==e.status?{redirectTo:"Login"}:e.json()))}deleteWorktime(e,t){return fetch("https://sisapa.tanjungbalaikota.go.id/api/workunits/"+e.id+"/worktime",{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({worktime_id:t.id})}).then((e=>401==e.status?{redirectTo:"Login"}:e.json()))}}},536:function(e,t,a){a.r(t),a.d(t,{default:function(){return E}});var o=a(6252),s=a(6612);const r={class:"grid"},i={class:"col-12"},l={class:"card"},n={class:"my-2 d-flex"},d={class:"p-input-icon-left m-2"},p=(0,o._)("i",{class:"pi pi-search"},null,-1),c=(0,o._)("div",{class:"flex flex-column md:flex-row md:justify-content-between md:align-items-center"},[(0,o._)("h5",{class:"m-0"},"Laporan"),(0,o._)("div")],-1),u=(0,o._)("span",{class:"p-column-title"},"ID",-1),g=(0,o._)("tr",null,[(0,o._)("th",{class:"p-3"},"Status"),(0,o._)("th",{class:"p-3"},"Lampiran"),(0,o._)("th",{class:"p-3"},"Lokasi"),(0,o._)("th",{class:"p-3"},"Foto Selfi"),(0,o._)("th",{class:"p-3"},"Jam"),(0,o._)("th",{class:"p-3"},"Keterlambatan / Sebelum Waktu"),(0,o._)("th",{class:"p-3"},"%")],-1),h={class:"p-3"},m={class:"p-3"},_=["href"],k={key:1},y={class:"p-3"},f={key:1},w={class:"p-3"},b={key:1},S={class:"p-3"},v={class:"p-3"},T={class:"p-3"},j=(0,o._)("th",{class:"p-3",colspan:"5"},"Total",-1),P={class:"p-3"},D={class:"p-3"},z=["src"],L=["src"];function I(e,t,a,I,C,F){const W=(0,o.up)("Calendar"),O=(0,o.up)("Dropdown"),U=(0,o.up)("InputText"),B=(0,o.up)("Button"),E=(0,o.up)("Toolbar"),R=(0,o.up)("Column"),A=(0,o.up)("DataTable"),N=(0,o.up)("Dialog");return(0,o.wg)(),(0,o.iD)("div",r,[(0,o._)("div",i,[(0,o._)("div",l,[(0,o.Wm)(E,{class:"mb-4"},{start:(0,o.w5)((()=>[(0,o._)("div",n,[(0,o.Wm)(W,{dateFormat:"yy-mm-dd",showIcon:!0,showButtonBar:!0,modelValue:C.date_start,"onUpdate:modelValue":t[0]||(t[0]=e=>C.date_start=e),class:"m-2",placeholder:"Pilih Tanggal Mulai",onChange:e.onDateChange},null,8,["modelValue","onChange"]),(0,o.Wm)(W,{dateFormat:"yy-mm-dd",showIcon:!0,showButtonBar:!0,modelValue:C.date_end,"onUpdate:modelValue":t[1]||(t[1]=e=>C.date_end=e),class:"m-2",placeholder:"Pilih Tanggal Selesai",onChange:e.onDateChange},null,8,["modelValue","onChange"]),["superuser","adminsistem","adminkepegawaian"].includes(C.role)?((0,o.wg)(),(0,o.j4)(O,{key:0,modelValue:C.selectedWorkunit.id,"onUpdate:modelValue":t[2]||(t[2]=e=>C.selectedWorkunit.id=e),options:C.workunits,optionLabel:"name",optionValue:"id",class:"m-2",placeholder:"Pilih OPD",filter:!0},null,8,["modelValue","options"])):(0,o.kq)("",!0),(0,o._)("span",d,[p,(0,o.Wm)(U,{modelValue:C.filters["global"].value,"onUpdate:modelValue":t[3]||(t[3]=e=>C.filters["global"].value=e),placeholder:"Search...",onKeyup:F.onFilter},null,8,["modelValue","onKeyup"])]),(0,o.Wm)(B,{label:"Filter",icon:"pi pi-search",class:"p-button-success m-2",onClick:F.onSearch},null,8,["onClick"])])])),_:1}),(0,o.Wm)(A,{value:C.employees,lazy:!0,filters:C.filters,"onUpdate:filters":t[4]||(t[4]=e=>C.filters=e),ref:"dt",dataKey:"id",loading:C.loading,globalFilterFields:["name"],selectAll:C.selectAll,onSelectAllChange:e.onSelectAllChange,onRowSelect:e.onRowSelect,onRowUnselect:e.onRowUnselect,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} products",responsiveLayout:"scroll"},{header:(0,o.w5)((()=>[c])),default:(0,o.w5)((()=>[(0,o.Wm)(R,{field:"id",header:"ID",sortable:!0},{body:(0,o.w5)((e=>[u,(0,o.Uk)(" "+(0,s.zw)(e.data.id),1)])),_:1}),(0,o.Wm)(R,{field:"date",header:"Tanggal"}),(0,o.Wm)(R,{field:"name",header:"Nama"}),(0,o.Wm)(R,{field:"nip",header:"NIP"}),(0,o.Wm)(R,{field:"group",header:"Pangkat"}),(0,o.Wm)(R,{field:"position",header:"Jabatan"}),(0,o.Wm)(R,{field:"types",header:"Keterangan"},{body:(0,o.w5)((e=>[(0,o._)("table",null,[g,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.data.types,((e,t)=>((0,o.wg)(),(0,o.iD)("tr",{key:t},[(0,o._)("th",h,(0,s.zw)(e.type),1),(0,o._)("td",m,[e.attachment_url?((0,o.wg)(),(0,o.iD)("a",{key:0,href:C.storage_url+e.attachment_url},"Download",8,_)):((0,o.wg)(),(0,o.iD)("p",k,"Tidak ada Lampiran"))]),(0,o._)("td",y,[e.lat&&e.lng?((0,o.wg)(),(0,o.j4)(B,{key:0,label:"Lihat",class:"p-button-sm p-button-success",onClick:t=>F.showLocation(e.lat,e.lng)},null,8,["onClick"])):((0,o.wg)(),(0,o.iD)("p",f,"Tidak ada Lokasi"))]),(0,o._)("td",w,[e.pic_url?((0,o.wg)(),(0,o.j4)(B,{key:0,label:"Lihat",class:"p-button-sm p-button-success",onClick:t=>F.showImage(C.storage_url+e.pic_url)},null,8,["onClick"])):((0,o.wg)(),(0,o.iD)("p",b,"Tidak ada Foto Selfi"))]),(0,o._)("td",S,(0,s.zw)(0!=e.time?e.time:"Tidak ada Jam"),1),(0,o._)("td",v,(0,s.zw)(e.time_left??"-"),1),(0,o._)("td",T,(0,s.zw)(e.presentase??0)+"%",1)])))),128)),(0,o._)("tr",null,[j,(0,o._)("th",P,(0,s.zw)(e.data.time_left),1),(0,o._)("th",D,(0,s.zw)(e.data.presentase)+"%",1)])])])),_:1})])),_:1},8,["value","filters","loading","selectAll","onSelectAllChange","onRowSelect","onRowUnselect"])])]),(0,o.Wm)(N,{visible:C.locationDialog,"onUpdate:visible":t[6]||(t[6]=e=>C.locationDialog=e),style:{width:"800px"},header:"Lokasi",modal:!0,class:"p-fluid"},{footer:(0,o.w5)((()=>[(0,o.Wm)(B,{label:"Close",icon:"pi pi-times",class:"p-button-text",onClick:t[5]||(t[5]=e=>C.locationDialog=!1)})])),default:(0,o.w5)((()=>[(0,o._)("div",null,[(0,o._)("iframe",{width:"100%",height:"500",src:"//maps.google.com/maps?q="+C.lat+","+C.lng+"&z=15&output=embed",allowfullscreen:"",style:{border:"0"},referrerpolicy:"no-referrer-when-downgrade"},null,8,z)])])),_:1},8,["visible"]),(0,o.Wm)(N,{visible:C.imageDialog,"onUpdate:visible":t[8]||(t[8]=e=>C.imageDialog=e),style:{width:"800px"},header:"Foto Selfi",modal:!0,class:"p-fluid"},{footer:(0,o.w5)((()=>[(0,o.Wm)(B,{label:"Close",icon:"pi pi-times",class:"p-button-text",onClick:t[7]||(t[7]=e=>C.imageDialog=!1)})])),default:(0,o.w5)((()=>[(0,o._)("div",null,[(0,o._)("img",{src:C.selectedImage,style:{"max-width":"500px"},alt:"Foto Selfi"},null,8,L)])])),_:1},8,["visible"])])}a(560);var C=a(6358),F=a(265),W=a(6234),O={data(){return{loading:!1,employees:[],onsearchtimeout:null,totalRecords:0,selectAll:!1,filters:{},lazyParams:{},date_start:null,date_end:null,workunits:[],selectedWorkunit:{},storage_url:"https://sisapa.tanjungbalaikota.go.id/storage/",role:localStorage.getItem("presence_app_role"),userData:JSON.parse(localStorage.getItem("presence_user_data")),imageDialog:!1,selectedImage:"",locationDialog:!1,lat:null,lng:null,MAP_KEY:{NODE_ENV:"production",VUE_APP_API_URL:"https://sisapa.tanjungbalaikota.go.id/api/",VUE_APP_LOGO_URL:"https://sisapa.tanjungbalaikota.go.id/app-logo.png",VUE_APP_STORAGE_URL:"https://sisapa.tanjungbalaikota.go.id/storage/",BASE_URL:"/app/"}.VUE_APP_MAP_KEY,fields:{Nama:"name",NIP:"nip",OPD:"workunit",Tanggal:"date"}}},workunitService:null,employeeService:null,created(){this.workunitService=new F.Z,this.employeeService=new W.Z,this.initFilters()},mounted(){this.loading=!0,this.lazyParams={first:0,page:0,rows:this.$refs.dt.rows,sortField:null,sortOrder:1,date_start:null,date_end:null,filters:this.filters},this.loadLazyData()},methods:{loadLazyData(){this.loading=!0;var e=JSON.parse(localStorage.getItem("presence_user_data"));e.workunit_id&&(this.selectedWorkunit.id=e.workunit_id),setTimeout((()=>{this.workunitService.getWorkunits().then((e=>{"redirectTo"in e&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),this.$router.push(e.redirectTo)),this.workunits=e.data,this.loading=!1})),this.selectedWorkunit.id?this.employeeService.getEmployeesReportDetail(this.lazyParams,this.selectedWorkunit.id).then((e=>{"redirectTo"in e&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),this.$router.push(e.redirectTo)),this.employees=e.data,this.totalRecords=e.total,this.loading=!1})):this.userData.workunit_id&&this.employeeService.getEmployeesReportDetail(this.lazyParams,this.userData.workunit_id).then((e=>{"redirectTo"in e&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),this.$router.push(e.redirectTo)),this.employees=e.data,this.totalRecords=e.total,this.loading=!1}))}),1e3*Math.random()+250)},onPage(e){this.lazyParams=e,this.loadLazyData()},onSort(e){var t=this.lazyParams.page;this.lazyParams=e,this.lazyParams.page=t,this.loadLazyData()},onFilter(){this.onsearchtimeout&&clearTimeout(this.onsearchtimeout),this.onsearchtimeout=setTimeout((()=>{this.lazyParams.filters=this.filters,this.loadLazyData()}),1e3)},onDownloadPdf(){window.open(this.employeeService.getEmployeesReportDetailPdfLink(this.lazyParams,this.selectedWorkunit.id??this.userData.workunit_id))},showImage(e){this.selectedImage=e,this.imageDialog=!0},showLocation(e,t){this.lat=e,this.lng=t,this.locationDialog=!0},onSearch(){if(this.lazyParams.filters=this.filters,this.date_start){let e=this.date_start,t=e.getDate()<10?"0"+e.getDate():e.getDate(),a=e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1;this.lazyParams.date_start=e.getFullYear()+"-"+a+"-"+t}if(this.date_end){let e=this.date_end,t=e.getDate()<10?"0"+e.getDate():e.getDate(),a=e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1;this.lazyParams.date_end=e.getFullYear()+"-"+a+"-"+t}this.loadLazyData()},onPengajuanWorkunitChange(){this.workunitService.getWorkunit(this.pengajuan.workunit_id).then((e=>{"redirectTo"in e&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),this.$router.push(e.redirectTo)),this.employees=e.employees}))},initFilters(){this.filters={global:{value:null,matchMode:C.a6.CONTAINS}}}}},U=a(3744);const B=(0,U.Z)(O,[["render",I]]);var E=B}}]);
//# sourceMappingURL=536.65103780.js.map