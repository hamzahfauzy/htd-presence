"use strict";(self["webpackChunksakai_vue"]=self["webpackChunksakai_vue"]||[]).push([[901],{6234:function(e,t,a){a.d(t,{Z:function(){return s}});class s{getEmployees(e,t=!1){var a="";if(e){a="page="+(e.page+1)+"&per_page="+e.rows;var s=1==e.sortOrder?"asc":"desc";a+="&order_by="+s,null!=e.sortField&&(a+="&sort_by="+e.sortField),e.filters.global.value&&(a+="&keyword="+e.filters.global.value)}var i=JSON.parse(localStorage.getItem("presence_user_data"));return i.workunit_id&&(a+="&workunit_id="+i.workunit_id),t&&(a+="&workunit_id="+t),fetch("https://presensi.webisnis.id/api/employees?"+a,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((e=>401==e.status?{data:{redirectTo:"login"}}:e.json())).then((e=>e.data))}getEmployeesReport(e,t){var a="";if(e){a="page="+(e.page+1)+"&per_page="+e.rows;var s=1==e.sortOrder?"asc":"desc";a+="&order_by="+s,null!=e.sortField&&(a+="&sort_by="+e.sortField),e.filters.global.value&&(a+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(a+="&date_start="+e.date_start+"&date_end="+e.date_end)}return fetch("https://presensi.webisnis.id/api/employees/reports/"+t+"?"+a,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((e=>401==e.status?{data:{redirectTo:"login"}}:e.json())).then((e=>e.data))}getEmployeesReportDetail(e,t){var a="";if(e){a="page="+(e.page+1)+"&per_page="+e.rows;var s=1==e.sortOrder?"asc":"desc";a+="&order_by="+s,null!=e.sortField&&(a+="&sort_by="+e.sortField),e.filters.global.value&&(a+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(a+="&date_start="+e.date_start+"&date_end="+e.date_end)}return fetch("https://presensi.webisnis.id/api/employees/report-details/"+t+"?"+a,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((e=>401==e.status?{data:{redirectTo:"login"}}:e.json())).then((e=>e.data))}getEmployeesReportPdfLink(e,t){var a="";if(e){var s=1==e.sortOrder?"asc":"desc";a+="&order_by="+s,null!=e.sortField&&(a+="&sort_by="+e.sortField),e.filters.global.value&&(a+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(a+="&date_start="+e.date_start+"&date_end="+e.date_end)}return"https://presensi.webisnis.id/api/employees/report-pdf/"+t+"?"+a}getEmployeesReportDetailPdfLink(e,t){var a="";if(e){var s=1==e.sortOrder?"asc":"desc";a+="&order_by="+s,null!=e.sortField&&(a+="&sort_by="+e.sortField),e.filters.global.value&&(a+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(a+="&date_start="+e.date_start+"&date_end="+e.date_end)}return"https://presensi.webisnis.id/api/employees/report-detail-pdf/"+t+"?"+a}getEmployee(e){return fetch("https://presensi.webisnis.id/api/employees/"+e,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((e=>401==e.status?{data:{redirectTo:"login"}}:e.json())).then((e=>e.data))}getPresence(e,t){return fetch("https://presensi.webisnis.id/api/employees/"+e+"/presences/"+t,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((e=>401==e.status?{data:{redirectTo:"login"}}:e.json())).then((e=>e.data))}updateRole(e,t){var a={...e};return a.role=t,fetch("https://presensi.webisnis.id/api/users/"+e.id,{method:"PUT",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(a)}).then((e=>401==e.status?{redirectTo:"Login"}:e.json()))}addPlace(e,t){return fetch("https://presensi.webisnis.id/api/employees/"+e.id+"/place",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(t)}).then((e=>401==e.status?{redirectTo:"Login"}:e.json()))}deletePlace(e,t){return fetch("https://presensi.webisnis.id/api/employees/"+e.id+"/place",{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({place_id:t.id})}).then((e=>401==e.status?{redirectTo:"Login"}:e.json()))}patchPlace(e){return fetch("https://presensi.webisnis.id/api/employees/"+e.id+"/place",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"}}).then((e=>401==e.status?{redirectTo:"Login"}:e.json()))}patchAndroid(e){return fetch("https://presensi.webisnis.id/api/employees/"+e.id+"/android-user",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"}}).then((e=>401==e.status?{redirectTo:"Login"}:e.json()))}resetDevice(e){return fetch("https://presensi.webisnis.id/api/employees/"+e.id+"/reset-device",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"}}).then((e=>401==e.status?{redirectTo:"Login"}:e.json()))}resetPassword(e){return fetch("https://presensi.webisnis.id/api/employees/"+e.id+"/reset-password",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"}}).then((e=>401==e.status?{redirectTo:"Login"}:e.json()))}addWorktime(e,t){return fetch("https://presensi.webisnis.id/api/employees/"+e.id+"/worktime",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(t)}).then((e=>401==e.status?{redirectTo:"Login"}:e.json()))}deleteWorktime(e,t){return fetch("https://presensi.webisnis.id/api/employees/"+e.id+"/worktime",{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({worktime_id:t.id,date_start:t.pivot.date_start,date_end:t.pivot.date_end})}).then((e=>401==e.status?{redirectTo:"Login"}:e.json()))}actionPresence(e,t){return fetch("https://presensi.webisnis.id/api/employees/"+t.employee_id+"/presences/"+t.id,{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({status:e})}).then((e=>401==e.status?{redirectTo:"Login"}:e.json()))}insertPresence(e,t){return fetch("https://presensi.webisnis.id/api/employees/"+e+"/presences",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")},body:t}).then((e=>401==e.status?{redirectTo:"Login"}:e.json()))}addEmployee(e){return fetch("https://presensi.webisnis.id/api/employees",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({workunit_id:e.workunit_id,nip:e.nip,name:e.name,group:e.group,position:e.position,phone:e.phone})}).then((e=>401==e.status?{redirectTo:"Login"}:e.json()))}updateEmployee(e){return fetch("https://presensi.webisnis.id/api/employees/"+e.id,{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({workunit_id:e.workunit_id,nip:e.nip,name:e.name,group:e.group,position:e.position,phone:e.phone})}).then((e=>401==e.status?{redirectTo:"Login"}:e.json()))}deleteEmployee(e){return fetch("https://presensi.webisnis.id/api/employees/"+e.id,{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"}}).then((e=>401==e.status?{redirectTo:"Login"}:e.json()))}}},6526:function(e,t,a){a.d(t,{Z:function(){return s}});class s{getPaidLeaves(e){var t="";if(e){t="page="+(e.page+1)+"&per_page="+e.rows;var a=1==e.sortOrder?"asc":"desc";t+="&order_by="+a,null!=e.sortField&&(t+="&sort_by="+e.sortField),e.filters.global.value&&(t+="&keyword="+e.filters.global.value)}return fetch("https://presensi.webisnis.id/api/paid_leaves?"+t,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((e=>401==e.status?{data:{redirectTo:"login"}}:e.json())).then((e=>e.data))}getPaidLeave(e){return fetch("https://presensi.webisnis.id/api/paid_leaves/"+e,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((e=>401==e.status?{data:{redirectTo:"login"}}:e.json())).then((e=>e.data))}createPaidLeave(e){return fetch("https://presensi.webisnis.id/api/paid_leaves/",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({name:e.name})}).then((e=>401==e.status?{redirectTo:"Login"}:e.json()))}updatePaidLeave(e){return fetch("https://presensi.webisnis.id/api/paid_leaves/"+e.id,{method:"PUT",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({name:e.name})}).then((e=>401==e.status?{redirectTo:"Login"}:e.json()))}deletePaidLeave(e){return fetch("https://presensi.webisnis.id/api/paid_leaves/"+e.id,{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"}}).then((e=>401==e.status?{redirectTo:"Login"}:e.json()))}}},3086:function(e,t,a){a.d(t,{Z:function(){return s}});class s{getPresences(e){var t="page="+(e.page+1)+"&per_page="+e.rows,a=1==e.sortOrder?"asc":"desc";return t+="&order_by="+a,null!=e.sortField&&(t+="&sort_by="+e.sortField),e.filters.global.value&&(t+="&keyword="+e.filters.global.value),fetch("https://presensi.webisnis.id/api/presences?"+t,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((e=>401==e.status?{data:{redirectTo:"Login"}}:e.json())).then((e=>e.data))}getAllPresences(){return fetch("https://presensi.webisnis.id/api/presences?response=array",{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((e=>401==e.status?{data:{redirectTo:"Login"}}:e.json())).then((e=>e.data))}createPresence(e){return fetch("https://presensi.webisnis.id/api/presences/",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(e)}).then((e=>401==e.status?{redirectTo:"login"}:e.json()))}updatePresence(e){return fetch("https://presensi.webisnis.id/api/presences/"+e.id,{method:"PUT",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(e)}).then((e=>401==e.status?{redirectTo:"login"}:e.json()))}deletePresence(e){return fetch("https://presensi.webisnis.id/api/presences/"+e.id,{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(e)}).then((e=>401==e.status?{redirectTo:"Login"}:e.json()))}}},265:function(e,t,a){a.d(t,{Z:function(){return s}});class s{getWorkunits(e){var t="";if(e){t="?page="+(e.page+1)+"&per_page="+e.rows;var a=1==e.sortOrder?"asc":"desc";t+="&order_by="+a,null!=e.sortField&&(t+="&sort_by="+e.sortField),e.filters.global.value&&(t+="&keyword="+e.filters.global.value)}else t="?all=1&order_by=asc";return fetch("https://presensi.webisnis.id/api/workunits"+t,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((e=>401==e.status?{data:{redirectTo:"Login"}}:e.json())).then((e=>e.data))}getWorkunit(e){return fetch("https://presensi.webisnis.id/api/workunits/"+e,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((e=>401==e.status?{data:{redirectTo:"login"}}:e.json())).then((e=>e.data))}getPresences(e,t=!1,a=!1){var s="";if(e){s="page="+(e.page+1)+"&per_page="+e.rows;var i=1==e.sortOrder?"asc":"desc";s+="&order_by="+i,null!=e.sortField&&(s+="&sort_by="+e.sortField),e.filters.global.value&&(s+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(s+="&date_start="+e.date_start+"&date_end="+e.date_end)}a&&(s+="&type="+a);var n=t?"https://presensi.webisnis.id/api/workunits/"+t+"/presences?"+s:"https://presensi.webisnis.id/api/workunits/presences?"+s;return fetch(n,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((e=>401==e.status?{data:{redirectTo:"login"}}:e.json())).then((e=>e.data))}addWorkunit(e){return fetch("https://presensi.webisnis.id/api/workunits",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({name:e.name,lat:e.lat,lng:e.lng,radius:e.radius})}).then((e=>401==e.status?{redirectTo:"Login"}:e.json()))}updateWorkunit(e){return fetch("https://presensi.webisnis.id/api/workunits/"+e.id,{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({_method:"PUT",name:e.name,lat:e.lat,lng:e.lng,radius:e.radius})}).then((e=>401==e.status?{redirectTo:"Login"}:e.json()))}assignWorktime(e,t){return fetch("https://presensi.webisnis.id/api/workunits/"+e.id+"/worktime",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({worktime_id:t.worktime_id})}).then((e=>401==e.status?{redirectTo:"Login"}:e.json()))}deleteWorktime(e,t){return fetch("https://presensi.webisnis.id/api/workunits/"+e.id+"/worktime",{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({worktime_id:t.id})}).then((e=>401==e.status?{redirectTo:"Login"}:e.json()))}deleteWorkunit(e){return fetch("https://presensi.webisnis.id/api/workunits/"+e.id,{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"}}).then((e=>401==e.status?{redirectTo:"Login"}:e.json()))}}},6901:function(e,t,a){a.r(t),a.d(t,{default:function(){return q}});var s=a(6252),i=a(3577);const n={class:"grid"},r={class:"col-12"},o={class:"card"},l={class:"my-2 d-flex"},d={class:"p-input-icon-left m-2"},p=(0,s._)("i",{class:"pi pi-search"},null,-1),u={class:"flex flex-column md:flex-row md:justify-content-between md:align-items-center"},c=(0,s._)("h5",{class:"m-0"},"Manajemen Cuti",-1),h={class:"flex"},g={class:"mt-2 md:mt-0 p-input-icon-left"},m=(0,s._)("i",{class:"pi pi-search"},null,-1),_=(0,s._)("span",{class:"p-column-title"},"ID",-1),k={key:0,class:"field"},y=(0,s._)("label",{for:"name"},"OPD",-1),f={key:0,class:"p-invalid"},w={class:"field"},b=(0,s._)("label",{for:"name"},"Pegawai",-1),v={key:0,class:"p-invalid"},j={class:"field"},S=(0,s._)("label",{for:"lat"},"Jenis Pengajuan",-1),T={key:0,class:"p-invalid"},P={class:"field"},C=(0,s._)("label",{for:"name"},"Waktu Mulai",-1),L={key:0,class:"p-invalid"},F={class:"field"},z=(0,s._)("label",{for:"name"},"Waktu Selesai",-1),D={key:0,class:"p-invalid"},I={class:"field"},W=(0,s._)("label",{for:"lat"},"Lampiran",-1),O={class:"p-component p-inputwrapper mr-3"},U={key:0,class:"p-invalid"};function B(e,t,a,B,V,E){const N=(0,s.up)("Button"),J=(0,s.up)("Calendar"),R=(0,s.up)("Dropdown"),M=(0,s.up)("InputText"),x=(0,s.up)("Toolbar"),A=(0,s.up)("Column"),q=(0,s.up)("Badge"),$=(0,s.up)("router-link"),Z=(0,s.up)("DataTable"),K=(0,s.up)("Dialog");return(0,s.wg)(),(0,s.iD)("div",n,[(0,s._)("div",r,[(0,s._)("div",o,["adminkepegawaian"!=V.role?((0,s.wg)(),(0,s.j4)(x,{key:0,class:"mb-4"},{start:(0,s.w5)((()=>[(0,s._)("div",l,[(0,s.Wm)(N,{label:"Pengajuan Cuti",class:"p-button-success m-2",onClick:E.openNew},null,8,["onClick"]),(0,s.Wm)(J,{dateFormat:"yy-mm-dd",showIcon:!0,showButtonBar:!0,modelValue:V.date_start,"onUpdate:modelValue":t[0]||(t[0]=e=>V.date_start=e),class:"m-2",placeholder:"Pilih Tanggal Mulai",onChange:e.onDateChange},null,8,["modelValue","onChange"]),(0,s.Wm)(J,{dateFormat:"yy-mm-dd",showIcon:!0,showButtonBar:!0,modelValue:V.date_end,"onUpdate:modelValue":t[1]||(t[1]=e=>V.date_end=e),class:"m-2",placeholder:"Pilih Tanggal Selesai",onChange:e.onDateChange},null,8,["modelValue","onChange"]),"kasubagumum"!=V.role?((0,s.wg)(),(0,s.j4)(R,{key:0,modelValue:V.selectedWorkunit.id,"onUpdate:modelValue":t[2]||(t[2]=e=>V.selectedWorkunit.id=e),options:V.workunits,optionLabel:"name",optionValue:"id",class:"m-2",placeholder:"Pilih Unit Kerja",filter:!0},null,8,["modelValue","options"])):(0,s.kq)("",!0),(0,s._)("span",d,[p,(0,s.Wm)(M,{modelValue:V.filters["global"].value,"onUpdate:modelValue":t[3]||(t[3]=e=>V.filters["global"].value=e),placeholder:"Search...",onKeyup:E.onFilter},null,8,["modelValue","onKeyup"])]),(0,s.Wm)(N,{label:"Filter",icon:"pi pi-search",class:"p-button-success m-2",onClick:E.onSearch},null,8,["onClick"])])])),_:1})):(0,s.kq)("",!0),(0,s.Wm)(Z,{value:V.presences,lazy:!0,paginator:!0,rows:10,filters:V.filters,"onUpdate:filters":t[5]||(t[5]=e=>V.filters=e),ref:"dt",dataKey:"id",totalRecords:V.totalRecords,loading:V.loading,onPage:t[6]||(t[6]=e=>E.onPage(e)),onSort:t[7]||(t[7]=e=>E.onSort(e)),onFilter:t[8]||(t[8]=e=>E.onFilter(e)),globalFilterFields:["name"],selection:e.selectedCustomers,"onUpdate:selection":t[9]||(t[9]=t=>e.selectedCustomers=t),selectAll:V.selectAll,onSelectAllChange:e.onSelectAllChange,onRowSelect:e.onRowSelect,onRowUnselect:e.onRowUnselect,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} products",responsiveLayout:"scroll"},{header:(0,s.w5)((()=>[(0,s._)("div",u,[c,(0,s._)("div",h,[(0,s._)("span",g,[m,(0,s.Wm)(M,{modelValue:V.filters["global"].value,"onUpdate:modelValue":t[4]||(t[4]=e=>V.filters["global"].value=e),placeholder:"Search...",onKeyup:E.onFilter},null,8,["modelValue","onKeyup"])])])])])),default:(0,s.w5)((()=>[(0,s.Wm)(A,{field:"id",header:"ID",sortable:!0},{body:(0,s.w5)((e=>[_,(0,s.Uk)(" "+(0,i.zw)(e.data.id),1)])),_:1}),(0,s.Wm)(A,{field:"employee.name",header:"Nama"}),(0,s.Wm)(A,{field:"type",header:"Jenis Pengajuan"}),(0,s.Wm)(A,{field:"workunit.name",header:"Unit Kerja"}),(0,s.Wm)(A,{field:"status",header:"Status"},{body:(0,s.w5)((e=>[(0,s.Wm)(q,{class:(0,i.C_)("p-badge "+("diajukan"==e.data.status?"p-badge-info":"ditolak"==e.data.status?"p-badge-danger":"disetujui"==e.data.status?"p-badge-success":""))},{default:(0,s.w5)((()=>[(0,s.Uk)((0,i.zw)(e.data.status),1)])),_:2},1032,["class"])])),_:1}),(0,s.Wm)(A,{field:"started_at",header:"Waktu Mulai"}),(0,s.Wm)(A,{field:"finished_at",header:"Waktu Selesai"}),(0,s.Wm)(A,{field:"created_at",header:"Tanggal"}),"kasubagumum"!=V.role?((0,s.wg)(),(0,s.j4)(A,{key:0,header:"Aksi"},{body:(0,s.w5)((e=>[(0,s.Wm)($,{to:{name:"presences.detail",params:{id:e.data.id,employee_id:e.data.employee.id}}},{default:(0,s.w5)((()=>[(0,s.Wm)(N,{icon:"pi pi-eye",class:"p-button-rounded p-button-info mr-2"})])),_:2},1032,["to"]),"diajukan"==e.data.status?((0,s.wg)(),(0,s.j4)(N,{key:0,icon:"pi pi-check",class:"p-button-rounded p-button-success mr-2",onClick:t=>E.action("setujui",e.data)},null,8,["onClick"])):(0,s.kq)("",!0),"diajukan"==e.data.status?((0,s.wg)(),(0,s.j4)(N,{key:1,icon:"pi pi-times",class:"p-button-rounded p-button-danger mr-2",onClick:t=>E.action("tolak",e.data)},null,8,["onClick"])):(0,s.kq)("",!0)])),_:1})):(0,s.kq)("",!0)])),_:1},8,["value","filters","totalRecords","loading","selection","selectAll","onSelectAllChange","onRowSelect","onRowUnselect"]),(0,s.Wm)(K,{visible:V.pengajuanDialog,"onUpdate:visible":t[15]||(t[15]=e=>V.pengajuanDialog=e),style:{width:"450px"},header:"Form Pengajuan Cuti",modal:!0,class:"p-fluid"},{footer:(0,s.w5)((()=>[(0,s.Wm)(N,{label:"Cancel",icon:"pi pi-times",class:"p-button-text",onClick:E.hideDialog},null,8,["onClick"]),(0,s.Wm)(N,{label:"Save",icon:"pi pi-check",class:"p-button-text",onClick:E.savePengajuan},null,8,["onClick"])])),default:(0,s.w5)((()=>["kasubagumum"!=V.role?((0,s.wg)(),(0,s.iD)("div",k,[y,(0,s.Wm)(R,{modelValue:V.pengajuan.workunit_id,"onUpdate:modelValue":t[10]||(t[10]=e=>V.pengajuan.workunit_id=e),options:V.workunits,optionLabel:"name",optionValue:"id",class:(0,i.C_)(["mr-3",{"p-invalid":V.submitted&&!V.pengajuan.workunit_id}]),required:"true",placeholder:"Pilih OPD",filter:!0,onChange:E.onPengajuanWorkunitChange},null,8,["modelValue","options","onChange","class"]),V.submitted&&!V.pengajuan.workunit_id?((0,s.wg)(),(0,s.iD)("small",f,"OPD diperlukan.")):(0,s.kq)("",!0)])):(0,s.kq)("",!0),(0,s._)("div",w,[b,(0,s.Wm)(R,{modelValue:V.pengajuan.employee_id,"onUpdate:modelValue":t[11]||(t[11]=e=>V.pengajuan.employee_id=e),options:V.employees,optionLabel:"name",optionValue:"id",class:(0,i.C_)(["mr-3",{"p-invalid":V.submitted&&!V.pengajuan.employee_id}]),required:"true",placeholder:"Pilih Pegawai"},null,8,["modelValue","options","class"]),V.submitted&&!V.pengajuan.employee_id?((0,s.wg)(),(0,s.iD)("small",v,"Pegawai diperlukan.")):(0,s.kq)("",!0)]),(0,s._)("div",j,[S,(0,s.Wm)(R,{modelValue:V.pengajuan.type,"onUpdate:modelValue":t[12]||(t[12]=e=>V.pengajuan.type=e),options:V.paid_leaves,optionLabel:"name",optionValue:"name",class:(0,i.C_)(["mr-3",{"p-invalid":V.submitted&&!V.pengajuan.type}]),required:"true",placeholder:"Pilih Jenis Pengajuan"},null,8,["modelValue","options","class"]),V.submitted&&!V.pengajuan.type?((0,s.wg)(),(0,s.iD)("small",T,"Jenis pengajuan diperlukan.")):(0,s.kq)("",!0)]),(0,s._)("div",P,[C,(0,s.Wm)(J,{modelValue:V.pengajuan.started_at,"onUpdate:modelValue":t[13]||(t[13]=e=>V.pengajuan.started_at=e),class:(0,i.C_)({"p-invalid":V.submitted&&!V.pengajuan.started_at})},null,8,["modelValue","class"]),V.submitted&&!V.pengajuan.started_at?((0,s.wg)(),(0,s.iD)("small",L,"Waktu Mulai diperlukan.")):(0,s.kq)("",!0)]),(0,s._)("div",F,[z,(0,s.Wm)(J,{modelValue:V.pengajuan.finished_at,"onUpdate:modelValue":t[14]||(t[14]=e=>V.pengajuan.finished_at=e),class:(0,i.C_)({"p-invalid":V.submitted&&!V.pengajuan.finished_at})},null,8,["modelValue","class"]),V.submitted&&!V.pengajuan.finished_at?((0,s.wg)(),(0,s.iD)("small",D,"Waktu Mulai diperlukan.")):(0,s.kq)("",!0)]),(0,s._)("div",I,[W,(0,s._)("div",O,[(0,s._)("input",{type:"file",ref:"lampiran",class:(0,i.C_)(["",{"p-invalid":V.submitted&&!V.pengajuan.attachment}]),required:"true"},null,2)]),V.submitted&&!V.pengajuan.attachment?((0,s.wg)(),(0,s.iD)("small",U,"File lampiran diperlukan.")):(0,s.kq)("",!0)])])),_:1},8,["visible"])])])])}a(560);var V=a(6358),E=a(3086),N=a(265),J=a(6234),R=a(6526),M={data(){return{loading:!1,pengajuanDialog:!1,employees:null,paid_leaves:null,pengajuan:{},submitted:!1,onsearchtimeout:null,totalRecords:0,presences:null,presence:{},selectedPresences:null,selectAll:!1,filters:{},lazyParams:{},workunits:[],selectedWorkunit:{},role:localStorage.getItem("presence_app_role"),date_start:null,date_end:null}},presenceService:null,workunitService:null,employeeService:null,paidLeaveService:null,created(){this.presenceService=new E.Z,this.workunitService=new N.Z,this.employeeService=new J.Z,this.paidLeaveService=new R.Z,this.initFilters()},mounted(){this.loading=!0,this.lazyParams={first:0,page:0,rows:this.$refs.dt.rows,sortField:null,sortOrder:1,filters:this.filters,date_start:null,date_end:null},this.loadLazyData()},methods:{loadLazyData(){this.loading=!0;var e=JSON.parse(localStorage.getItem("presence_user_data"));e.workunit_id&&(this.selectedWorkunit.id=e.workunit_id),setTimeout((()=>{this.workunitService.getWorkunits().then((e=>{"redirectTo"in e&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),this.$router.push(e.redirectTo)),this.workunits=e.data,this.loading=!1})),this.selectedWorkunit.id?this.workunitService.getPresences(this.lazyParams,this.selectedWorkunit.id,2).then((e=>{"redirectTo"in e&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),this.$router.push(e.redirectTo)),this.presences=e.data,this.totalRecords=e.total,this.loading=!1})):this.workunitService.getPresences(this.lazyParams,!1,2).then((e=>{"redirectTo"in e&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),this.$router.push(e.redirectTo)),this.presences=e.data,this.totalRecords=e.total,this.loading=!1})),this.paidLeaveService.getPaidLeaves().then((e=>{"redirectTo"in e&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),this.$router.push(e.redirectTo)),this.paid_leaves=e.data}))}),1e3*Math.random()+250)},onPage(e){this.lazyParams=e,this.loadLazyData()},onSort(e){var t=this.lazyParams.page;this.lazyParams=e,this.lazyParams.page=t,this.loadLazyData()},onFilter(){this.onsearchtimeout&&clearTimeout(this.onsearchtimeout),this.onsearchtimeout=setTimeout((()=>{this.lazyParams.filters=this.filters,this.loadLazyData()}),1e3)},onSearch(){if(this.lazyParams.filters=this.filters,this.date_start){let e=this.date_start,t=e.getDate()<10?"0"+e.getDate():e.getDate(),a=e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1;this.lazyParams.date_start=e.getFullYear()+"-"+a+"-"+t}if(this.date_end){let e=this.date_end,t=e.getDate()<10?"0"+e.getDate():e.getDate(),a=e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1;this.lazyParams.date_end=e.getFullYear()+"-"+a+"-"+t}this.loadLazyData()},openNew(){if(this.pengajuanDialog=!0,"kasubagumum"==this.role){var e=JSON.parse(localStorage.getItem("presence_user_data"));e.workunit_id&&(this.pengajuan.workunit_id=e.workunit_id,this.onPengajuanWorkunitChange())}},savePengajuan(){this.submitted=!0;var e=this.$refs.lampiran;if(e.files.length){var t=this.pengajuan.started_at,a=t.getDate()<10?"0"+t.getDate():t.getDate(),s=t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1;this.pengajuan.started_at=t.getFullYear()+"-"+s+"-"+a,t=this.pengajuan.finished_at,a=t.getDate()<10?"0"+t.getDate():t.getDate(),s=t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1,this.pengajuan.finished_at=t.getFullYear()+"-"+s+"-"+a,this.pengajuan.attachment=!0;var i=new FormData;i.append("type",this.pengajuan.type),i.append("attachment",e.files[0]),i.append("started_at",this.pengajuan.started_at),i.append("finished_at",this.pengajuan.finished_at),this.employeeService.insertPresence(this.pengajuan.employee_id,i).then((e=>{"redirectTo"in e&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),this.$router.push(e.redirectTo)),e.success?(this.$swal({icon:"success",title:"Success",text:e.message}),this.selectedWorkunit.id=this.pengajuan.workunit_id,this.loadLazyData(),this.hideDialog()):this.$swal({icon:"error",title:"Oops...",text:e.message})}))}},onWorkunitChange(){this.lazyParams.filters=this.filters,this.loadLazyData()},onPengajuanWorkunitChange(){this.workunitService.getWorkunit(this.pengajuan.workunit_id).then((e=>{"redirectTo"in e&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),this.$router.push(e.redirectTo)),this.employees=e.employees}))},initFilters(){this.filters={global:{value:null,matchMode:V.a6.CONTAINS}}},confirmDelete(e){this.presence=e,this.$swal({title:"Apakah anda yakin akan menghapus data ini ?",showCancelButton:!0,confirmButtonText:"Hapus"}).then((e=>{e.isConfirmed&&this.presenceService.deletePresence(this.presence).then((e=>{e.success?(this.presences=this.presences.filter((e=>e.id!==this.presence.id)),this.$swal({icon:"success",title:"Success",text:e.message}),this.presenceDialog=!1,this.presence={}):this.$swal({icon:"error",title:"Oops...",text:e.message})}))}))},action(e,t){this.$swal({title:"Apakah anda yakin akan "+e+" data ini ?",showCancelButton:!0,confirmButtonText:"Ya"}).then((a=>{a.isConfirmed&&this.employeeService.actionPresence("di"+e,t).then((e=>{e.success?(this.$swal({icon:"success",title:"Success",text:e.message}),this.loadLazyData()):this.$swal({icon:"error",title:"Oops...",text:e.message})}))}))},hideDialog(){this.pengajuanDialog=!1,this.submitted=!1}}},x=a(3744);const A=(0,x.Z)(M,[["render",B]]);var q=A}}]);
//# sourceMappingURL=901.1c580851.js.map