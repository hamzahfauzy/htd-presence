(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-252a7fa6"],{"06d6":function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=a("5530"),n=a("d4ec"),o=a("bee2"),i=(a("d3b7"),a("e9c4"),function(){function e(){Object(n["a"])(this,e)}return Object(o["a"])(e,[{key:"getEmployees",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a="";if(e){a="page="+(e.page+1)+"&per_page="+e.rows;var r=1==e.sortOrder?"asc":"desc";a+="&order_by="+r,null!=e.sortField&&(a+="&sort_by="+e.sortField),e.filters.global.value&&(a+="&keyword="+e.filters.global.value)}var n=JSON.parse(localStorage.getItem("presence_user_data"));return n.workunit_id&&(a+="&workunit_id="+n.workunit_id),t&&(a+="&workunit_id="+t),fetch("http://103.151.71.42/api/employees?"+a,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"getEmployeesReport",value:function(e,t){var a="";if(e){a="page="+(e.page+1)+"&per_page="+e.rows;var r=1==e.sortOrder?"asc":"desc";a+="&order_by="+r,null!=e.sortField&&(a+="&sort_by="+e.sortField),e.filters.global.value&&(a+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(a+="&date_start="+e.date_start+"&date_end="+e.date_end)}return fetch("http://103.151.71.42/api/employees/reports/"+t+"?"+a,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"getEmployeesReportDetail",value:function(e,t){var a="";if(e){a="page="+(e.page+1)+"&per_page="+e.rows;var r=1==e.sortOrder?"asc":"desc";a+="&order_by="+r,null!=e.sortField&&(a+="&sort_by="+e.sortField),e.filters.global.value&&(a+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(a+="&date_start="+e.date_start+"&date_end="+e.date_end)}return fetch("http://103.151.71.42/api/employees/report-details/"+t+"?"+a,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"getEmployee",value:function(e){return fetch("http://103.151.71.42/api/employees/"+e,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"getPresence",value:function(e,t){return fetch("http://103.151.71.42/api/employees/"+e+"/presences/"+t,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"updateEmployee",value:function(e){return fetch("http://103.151.71.42/api/employees/"+e.id+"/place",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({lat:e.lat,lng:e.lng,radius:e.radius})}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"updateRole",value:function(e,t){var a=Object(r["a"])({},e);return a.role=t,fetch("http://103.151.71.42/api/users/"+e.id,{method:"PUT",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(a)}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"addPlace",value:function(e,t){return fetch("http://103.151.71.42/api/employees/"+e.id+"/place",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(t)}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"deletePlace",value:function(e,t){return fetch("http://103.151.71.42/api/employees/"+e.id+"/place",{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({place_id:t.id})}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"patchPlace",value:function(e){return fetch("http://103.151.71.42/api/employees/"+e.id+"/place",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"resetDevice",value:function(e){return fetch("http://103.151.71.42/api/employees/"+e.id+"/reset-device",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"addWorktime",value:function(e,t){return fetch("http://103.151.71.42/api/employees/"+e.id+"/worktime",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(t)}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"deleteWorktime",value:function(e,t){return fetch("http://103.151.71.42/api/employees/"+e.id+"/worktime",{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({worktime_id:t.id})}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"actionPresence",value:function(e,t){return fetch("http://103.151.71.42/api/employees/"+t.employee_id+"/presences/"+t.id,{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({status:e})}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"insertPresence",value:function(e,t){return fetch("http://103.151.71.42/api/employees/"+e+"/presences",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")},body:t}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}}]),e}())},"413a":function(e,t,a){"use strict";a.r(t);a("caad");var r=a("7a23"),n={class:"grid"},o={class:"col-12"},i={class:"card"},l={class:"my-2 d-flex"},s={class:"p-input-icon-left m-2"},c=Object(r["j"])("i",{class:"pi pi-search"},null,-1),u={class:"flex flex-column md:flex-row md:justify-content-between md:align-items-center"},d=Object(r["j"])("h5",{class:"m-0"},"Laporan",-1),p=Object(r["m"])(" Download Data "),h=Object(r["j"])("span",{class:"p-column-title"},"ID",-1),f=Object(r["j"])("span",{class:"p-column-title"},"Lampiran",-1),g=["href"],m={key:1},y=Object(r["j"])("span",{class:"p-column-title"},"Foto Selfi",-1),b=["href"];function _(e,t,a,_,j,k){var O=Object(r["H"])("Calendar"),v=Object(r["H"])("Dropdown"),w=Object(r["H"])("InputText"),S=Object(r["H"])("Button"),T=Object(r["H"])("Toolbar"),P=Object(r["H"])("export-excel"),z=Object(r["H"])("Column"),D=Object(r["H"])("DataTable");return Object(r["z"])(),Object(r["i"])("div",n,[Object(r["j"])("div",o,[Object(r["j"])("div",i,[Object(r["n"])(T,{class:"mb-4"},{start:Object(r["R"])((function(){return[Object(r["j"])("div",l,[Object(r["n"])(O,{dateFormat:"yy-mm-dd",showIcon:!0,showButtonBar:!0,modelValue:j.date_start,"onUpdate:modelValue":t[0]||(t[0]=function(e){return j.date_start=e}),class:"m-2",placeholder:"Pilih Tanggal Mulai",onChange:e.onDateChange},null,8,["modelValue","onChange"]),Object(r["n"])(O,{dateFormat:"yy-mm-dd",showIcon:!0,showButtonBar:!0,modelValue:j.date_end,"onUpdate:modelValue":t[1]||(t[1]=function(e){return j.date_end=e}),class:"m-2",placeholder:"Pilih Tanggal Selesai",onChange:e.onDateChange},null,8,["modelValue","onChange"]),["superuser","adminsistem","adminkepegawaian"].includes(j.role)?(Object(r["z"])(),Object(r["g"])(v,{key:0,modelValue:j.selectedWorkunit.id,"onUpdate:modelValue":t[2]||(t[2]=function(e){return j.selectedWorkunit.id=e}),options:j.workunits,optionLabel:"name",optionValue:"id",class:"m-2",placeholder:"Pilih OPD"},null,8,["modelValue","options"])):Object(r["h"])("",!0),Object(r["j"])("span",s,[c,Object(r["n"])(w,{modelValue:j.filters["global"].value,"onUpdate:modelValue":t[3]||(t[3]=function(e){return j.filters["global"].value=e}),placeholder:"Search...",onKeyup:k.onFilter},null,8,["modelValue","onKeyup"])]),Object(r["n"])(S,{label:"Filter",icon:"pi pi-search",class:"p-button-success m-2",onClick:k.onSearch},null,8,["onClick"])])]})),_:1}),Object(r["n"])(D,{value:j.employees,lazy:!0,paginator:!0,rows:10,filters:j.filters,"onUpdate:filters":t[4]||(t[4]=function(e){return j.filters=e}),ref:"dt",dataKey:"id",totalRecords:j.totalRecords,loading:j.loading,onPage:t[5]||(t[5]=function(e){return k.onPage(e)}),onSort:t[6]||(t[6]=function(e){return k.onSort(e)}),onFilter:t[7]||(t[7]=function(e){return k.onFilter(e)}),globalFilterFields:["name"],selectAll:j.selectAll,onSelectAllChange:e.onSelectAllChange,onRowSelect:e.onRowSelect,onRowUnselect:e.onRowUnselect,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} products",responsiveLayout:"scroll"},{header:Object(r["R"])((function(){return[Object(r["j"])("div",u,[d,j.employees.length?(Object(r["z"])(),Object(r["g"])(P,{key:0,data:j.employees,fields:j.fields,class:"p-button p-button-success",worksheet:"Laporan",name:"Laporan Detail.xls"},{default:Object(r["R"])((function(){return[p]})),_:1},8,["data","fields"])):Object(r["h"])("",!0)])]})),default:Object(r["R"])((function(){return[Object(r["n"])(z,{field:"id",header:"ID",sortable:!0},{body:Object(r["R"])((function(e){return[h,Object(r["m"])(" "+Object(r["L"])(e.data.id),1)]})),_:1}),Object(r["n"])(z,{field:"employee.name",header:"Nama"}),Object(r["n"])(z,{field:"employee.nip",header:"NIP"}),Object(r["n"])(z,{field:"workunit.name",header:"OPD"}),Object(r["n"])(z,{field:"worktime_item.name",header:"Status"}),Object(r["n"])(z,{field:"attachment_url",class:"text-center",header:"Lampiran"},{body:Object(r["R"])((function(e){return[f,e.data.attachment_url?(Object(r["z"])(),Object(r["i"])("a",{key:0,href:j.storage_url+e.data.attachment_url},"Download",8,g)):(Object(r["z"])(),Object(r["i"])("span",m,"Tidak ada Lampiran"))]})),_:1}),Object(r["n"])(z,{field:"pic_url",class:"text-center",header:"Foto Selfi"},{body:Object(r["R"])((function(e){return[y,Object(r["j"])("a",{href:j.storage_url+e.data.pic_url},"Open",8,b)]})),_:1}),Object(r["n"])(z,{field:"created_at",class:"text-center",header:"Tanggal"})]})),_:1},8,["value","filters","totalRecords","loading","selectAll","onSelectAllChange","onRowSelect","onRowUnselect"])])])])}var j=a("0393"),k=a("fca4"),O=a("06d6"),v={data:function(){return{loading:!1,employees:[],onsearchtimeout:null,totalRecords:0,selectAll:!1,filters:{},lazyParams:{},date_start:null,date_end:null,workunits:[],selectedWorkunit:{},storage_url:"http://103.151.71.42/storage/",role:localStorage.getItem("presence_app_role"),userData:JSON.parse(localStorage.getItem("presence_user_data")),fields:{Nama:"employee.name",NIP:{field:"employee.nip",callback:function(e){return"'".concat(e)}},OPD:"workunit.name",Status:"worktime_item.name",Tanggal:"created_at"}}},workunitService:null,employeeService:null,created:function(){this.workunitService=new k["a"],this.employeeService=new O["a"],this.initFilters()},mounted:function(){this.loading=!0,this.lazyParams={first:0,page:0,rows:this.$refs.dt.rows,sortField:null,sortOrder:1,date_start:null,date_end:null,filters:this.filters},this.loadLazyData()},methods:{loadLazyData:function(){var e=this;this.loading=!0,setTimeout((function(){e.workunitService.getWorkunits().then((function(t){"redirectTo"in t&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),e.$router.push(t.redirectTo)),e.workunits=t.data,e.loading=!1})),e.selectedWorkunit.id?e.employeeService.getEmployeesReportDetail(e.lazyParams,e.selectedWorkunit.id).then((function(t){"redirectTo"in t&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),e.$router.push(t.redirectTo)),e.employees=t.data,e.loading=!1})):e.userData.workunit_id&&e.employeeService.getEmployeesReportDetail(e.lazyParams,e.userData.workunit_id).then((function(t){"redirectTo"in t&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),e.$router.push(t.redirectTo)),e.employees=t.data,e.loading=!1}))}),1e3*Math.random()+250)},onPage:function(e){this.lazyParams=e,this.loadLazyData()},onSort:function(e){var t=this.lazyParams.page;this.lazyParams=e,this.lazyParams.page=t,this.loadLazyData()},onFilter:function(){var e=this;this.onsearchtimeout&&clearTimeout(this.onsearchtimeout),this.onsearchtimeout=setTimeout((function(){e.lazyParams.filters=e.filters,e.loadLazyData()}),1e3)},onSearch:function(){if(this.lazyParams.filters=this.filters,this.date_start){var e=this.date_start,t=e.getDate()<10?"0"+e.getDate():e.getDate(),a=e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1;this.lazyParams.date_start=e.getFullYear()+"-"+a+"-"+t}if(this.date_end){var r=this.date_end,n=r.getDate()<10?"0"+r.getDate():r.getDate(),o=r.getMonth()+1<10?"0"+(r.getMonth()+1):r.getMonth()+1;this.lazyParams.date_end=r.getFullYear()+"-"+o+"-"+n}this.loadLazyData()},onPengajuanWorkunitChange:function(){var e=this;this.workunitService.getWorkunit(this.pengajuan.workunit_id).then((function(t){"redirectTo"in t&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),e.$router.push(t.redirectTo)),e.employees=t.employees}))},initFilters:function(){this.filters={global:{value:null,matchMode:j["a"].CONTAINS}}}}},w=a("6b0d"),S=a.n(w);const T=S()(v,[["render",_]]);t["default"]=T},"4de4":function(e,t,a){"use strict";var r=a("23e7"),n=a("b727").filter,o=a("1dde"),i=o("filter");r({target:"Array",proto:!0,forced:!i},{filter:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},5530:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));a("b64b"),a("a4d3"),a("4de4"),a("d3b7"),a("e439"),a("159b"),a("dbb4");function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}},dbb4:function(e,t,a){var r=a("23e7"),n=a("83ab"),o=a("56ef"),i=a("fc6a"),l=a("06cf"),s=a("8418");r({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(e){var t,a,r=i(e),n=l.f,c=o(r),u={},d=0;while(c.length>d)a=n(r,t=c[d++]),void 0!==a&&s(u,t,a);return u}})},e439:function(e,t,a){var r=a("23e7"),n=a("d039"),o=a("fc6a"),i=a("06cf").f,l=a("83ab"),s=n((function(){i(1)})),c=!l||s;r({target:"Object",stat:!0,forced:c,sham:!l},{getOwnPropertyDescriptor:function(e,t){return i(o(e),t)}})},fca4:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a("d4ec"),n=a("bee2"),o=(a("d3b7"),a("e9c4"),function(){function e(){Object(r["a"])(this,e)}return Object(n["a"])(e,[{key:"getWorkunits",value:function(e){var t="";if(e){t="?page="+(e.page+1)+"&per_page="+e.rows;var a=1==e.sortOrder?"asc":"desc";t+="&order_by="+a,null!=e.sortField&&(t+="&sort_by="+e.sortField),e.filters.global.value&&(t+="&keyword="+e.filters.global.value)}else t="?all=1&order_by=asc";return fetch("http://103.151.71.42/api/workunits"+t,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"Login"}}:e.json()})).then((function(e){return e.data}))}},{key:"getWorkunit",value:function(e){return fetch("http://103.151.71.42/api/workunits/"+e,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"getPresences",value:function(e,t){var a="";if(e){a="page="+(e.page+1)+"&per_page="+e.rows;var r=1==e.sortOrder?"asc":"desc";a+="&order_by="+r,null!=e.sortField&&(a+="&sort_by="+e.sortField),e.filters.global.value&&(a+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(a+="&date_start="+e.date_start+"&date_end="+e.date_end)}return fetch("http://103.151.71.42/api/workunits/"+t+"/presences?"+a,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"updateWorkunit",value:function(e){return fetch("http://103.151.71.42/api/workunits/"+e.id+"/place",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({lat:e.lat,lng:e.lng,radius:e.radius})}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"assignWorktime",value:function(e,t){return fetch("http://103.151.71.42/api/workunits/"+e.id+"/worktime",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({worktime_id:t.worktime_id})}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"deleteWorktime",value:function(e,t){return fetch("http://103.151.71.42/api/workunits/"+e.id+"/worktime",{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({worktime_id:t.id})}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}}]),e}())}}]);
//# sourceMappingURL=chunk-252a7fa6.dc7c8cd8.js.map