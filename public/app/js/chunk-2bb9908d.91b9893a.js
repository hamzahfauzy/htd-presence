(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2bb9908d"],{"06d6":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("5530"),r=n("d4ec"),o=n("bee2"),i=(n("d3b7"),n("e9c4"),function(){function e(){Object(r["a"])(this,e)}return Object(o["a"])(e,[{key:"getEmployees",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n="";if(e){n="page="+(e.page+1)+"&per_page="+e.rows;var a=1==e.sortOrder?"asc":"desc";n+="&order_by="+a,null!=e.sortField&&(n+="&sort_by="+e.sortField),e.filters.global.value&&(n+="&keyword="+e.filters.global.value)}var r=JSON.parse(localStorage.getItem("presence_user_data"));return r.workunit_id&&(n+="&workunit_id="+r.workunit_id),t&&(n+="&workunit_id="+t),fetch("http://103.151.71.42/api/employees?"+n,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"getEmployeesReport",value:function(e,t){var n="";if(e){n="page="+(e.page+1)+"&per_page="+e.rows;var a=1==e.sortOrder?"asc":"desc";n+="&order_by="+a,null!=e.sortField&&(n+="&sort_by="+e.sortField),e.filters.global.value&&(n+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(n+="&date_start="+e.date_start+"&date_end="+e.date_end)}return fetch("http://103.151.71.42/api/employees/reports/"+t+"?"+n,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"getEmployeesReportDetail",value:function(e,t){var n="";if(e){n="page="+(e.page+1)+"&per_page="+e.rows;var a=1==e.sortOrder?"asc":"desc";n+="&order_by="+a,null!=e.sortField&&(n+="&sort_by="+e.sortField),e.filters.global.value&&(n+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(n+="&date_start="+e.date_start+"&date_end="+e.date_end)}return fetch("http://103.151.71.42/api/employees/report-details/"+t+"?"+n,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"getEmployee",value:function(e){return fetch("http://103.151.71.42/api/employees/"+e,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"getPresence",value:function(e,t){return fetch("http://103.151.71.42/api/employees/"+e+"/presences/"+t,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"updateEmployee",value:function(e){return fetch("http://103.151.71.42/api/employees/"+e.id+"/place",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({lat:e.lat,lng:e.lng,radius:e.radius})}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"updateRole",value:function(e,t){var n=Object(a["a"])({},e);return n.role=t,fetch("http://103.151.71.42/api/users/"+e.id,{method:"PUT",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(n)}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"addPlace",value:function(e,t){return fetch("http://103.151.71.42/api/employees/"+e.id+"/place",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(t)}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"deletePlace",value:function(e,t){return fetch("http://103.151.71.42/api/employees/"+e.id+"/place",{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({place_id:t.id})}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"patchPlace",value:function(e){return fetch("http://103.151.71.42/api/employees/"+e.id+"/place",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"resetDevice",value:function(e){return fetch("http://103.151.71.42/api/employees/"+e.id+"/reset-device",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"addWorktime",value:function(e,t){return fetch("http://103.151.71.42/api/employees/"+e.id+"/worktime",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(t)}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"deleteWorktime",value:function(e,t){return fetch("http://103.151.71.42/api/employees/"+e.id+"/worktime",{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({worktime_id:t.id})}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"actionPresence",value:function(e,t){return fetch("http://103.151.71.42/api/employees/"+t.employee_id+"/presences/"+t.id,{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({status:e})}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"insertPresence",value:function(e,t){return fetch("http://103.151.71.42/api/employees/"+e+"/presences",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")},body:t}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}}]),e}())},"4de4":function(e,t,n){"use strict";var a=n("23e7"),r=n("b727").filter,o=n("1dde"),i=o("filter");a({target:"Array",proto:!0,forced:!i},{filter:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},5530:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("b64b"),n("a4d3"),n("4de4"),n("d3b7"),n("e439"),n("159b"),n("dbb4");function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},"699f":function(e,t,n){"use strict";n.r(t);var a=n("7a23"),r={class:"grid"},o={class:"col-12"},i={class:"card"},l={class:"my-2 d-flex"},s={class:"p-input-icon-left m-2"},c=Object(a["j"])("i",{class:"pi pi-search"},null,-1),u={class:"flex flex-column md:flex-row md:justify-content-between md:align-items-center"},d=Object(a["j"])("h5",{class:"m-0"},"Laporan",-1),p=Object(a["m"])(" Download Data "),h=Object(a["j"])("span",{class:"p-column-title"},"ID",-1);function f(e,t,n,f,g,m){var y=Object(a["H"])("Calendar"),b=Object(a["H"])("Dropdown"),_=Object(a["H"])("InputText"),j=Object(a["H"])("Button"),k=Object(a["H"])("Toolbar"),O=Object(a["H"])("export-excel"),v=Object(a["H"])("Column"),w=Object(a["H"])("DataTable");return Object(a["z"])(),Object(a["i"])("div",r,[Object(a["j"])("div",o,[Object(a["j"])("div",i,[Object(a["n"])(k,{class:"mb-4"},{start:Object(a["R"])((function(){return[Object(a["j"])("div",l,[Object(a["n"])(y,{dateFormat:"yy-mm-dd",showIcon:!0,showButtonBar:!0,modelValue:g.date_start,"onUpdate:modelValue":t[0]||(t[0]=function(e){return g.date_start=e}),class:"m-2",placeholder:"Pilih Tanggal Mulai",onDateSelect:m.onDateChange},null,8,["modelValue","onDateSelect"]),Object(a["n"])(y,{dateFormat:"yy-mm-dd",showIcon:!0,showButtonBar:!0,modelValue:g.date_end,"onUpdate:modelValue":t[1]||(t[1]=function(e){return g.date_end=e}),class:"m-2",placeholder:"Pilih Tanggal Selesai"},null,8,["modelValue"]),Object(a["n"])(b,{modelValue:g.selectedWorkunit.id,"onUpdate:modelValue":t[2]||(t[2]=function(e){return g.selectedWorkunit.id=e}),options:g.workunits,optionLabel:"name",optionValue:"id",class:"m-2",placeholder:"Pilih OPD"},null,8,["modelValue","options"]),Object(a["j"])("span",s,[c,Object(a["n"])(_,{modelValue:g.filters["global"].value,"onUpdate:modelValue":t[3]||(t[3]=function(e){return g.filters["global"].value=e}),placeholder:"Search...",onKeyup:m.onFilter},null,8,["modelValue","onKeyup"])]),Object(a["n"])(j,{label:"Filter",icon:"pi pi-search",class:"p-button-success m-2",onClick:m.onSearch},null,8,["onClick"])])]})),_:1}),Object(a["n"])(w,{value:g.employees,lazy:!0,paginator:!0,rows:10,filters:g.filters,"onUpdate:filters":t[4]||(t[4]=function(e){return g.filters=e}),ref:"dt",dataKey:"id",totalRecords:g.totalRecords,loading:g.loading,onPage:t[5]||(t[5]=function(e){return m.onPage(e)}),onSort:t[6]||(t[6]=function(e){return m.onSort(e)}),onFilter:t[7]||(t[7]=function(e){return m.onFilter(e)}),globalFilterFields:["name"],selection:e.selectedCustomers,"onUpdate:selection":t[8]||(t[8]=function(t){return e.selectedCustomers=t}),selectAll:g.selectAll,onSelectAllChange:e.onSelectAllChange,onRowSelect:e.onRowSelect,onRowUnselect:e.onRowUnselect,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} products",responsiveLayout:"scroll"},{header:Object(a["R"])((function(){return[Object(a["j"])("div",u,[d,g.employees.length?(Object(a["z"])(),Object(a["g"])(O,{key:0,data:g.employees,class:"p-button p-button-success",worksheet:"Laporan",name:"Laporan Rekapitulasi - "+g.cdate_start+" - "+g.cdate_end+".xls"},{default:Object(a["R"])((function(){return[p]})),_:1},8,["data","name"])):Object(a["h"])("",!0)])]})),default:Object(a["R"])((function(){return[Object(a["n"])(v,{field:"id",header:"ID",sortable:!0},{body:Object(a["R"])((function(e){return[h,Object(a["m"])(" "+Object(a["L"])(e.data.id),1)]})),_:1}),Object(a["n"])(v,{field:"name",header:"Nama"}),Object(a["n"])(v,{field:"nip",header:"NIP"}),Object(a["n"])(v,{field:"group",header:"Golongan"}),Object(a["n"])(v,{field:"position",header:"Jabatan"}),Object(a["n"])(v,{field:"hadir",class:"text-center",header:"Hadir"}),Object(a["n"])(v,{field:"izin",class:"text-center",header:"Izin"}),Object(a["n"])(v,{field:"cuti",class:"text-center",header:"Cuti"}),Object(a["n"])(v,{field:"sakit",class:"text-center",header:"Sakit"}),Object(a["n"])(v,{field:"tugasluar",class:"text-center",header:"Tugas Luar"}),Object(a["n"])(v,{field:"kegiatan",class:"text-center",header:"Kegiatan"}),Object(a["n"])(v,{field:"alfa",class:"text-center",header:"Alfa"})]})),_:1},8,["value","filters","totalRecords","loading","selection","selectAll","onSelectAllChange","onRowSelect","onRowUnselect"])])])])}var g=n("0393"),m=n("fca4"),y=n("06d6"),b={data:function(){return{loading:!1,employees:[],onsearchtimeout:null,totalRecords:0,selectAll:!1,filters:{},lazyParams:{},date_start:null,date_end:null,cdate_start:null,cdate_end:null,workunits:[],selectedWorkunit:{},role:localStorage.getItem("presence_app_role")}},workunitService:null,employeeService:null,created:function(){this.workunitService=new m["a"],this.employeeService=new y["a"],this.initFilters()},mounted:function(){this.loading=!0,this.lazyParams={first:0,page:0,rows:this.$refs.dt.rows,sortField:null,sortOrder:1,date_start:null,date_end:null,filters:this.filters},this.loadLazyData()},methods:{loadLazyData:function(){var e=this;this.loading=!0,setTimeout((function(){e.workunitService.getWorkunits().then((function(t){"redirectTo"in t&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),e.$router.push(t.redirectTo)),e.workunits=t.data,e.loading=!1})),e.selectedWorkunit.id&&e.employeeService.getEmployeesReport(e.lazyParams,e.selectedWorkunit.id).then((function(t){"redirectTo"in t&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),e.$router.push(t.redirectTo)),e.employees=t.data,e.loading=!1}))}),1e3*Math.random()+250)},onPage:function(e){this.lazyParams=e,this.loadLazyData()},onSort:function(e){var t=this.lazyParams.page;this.lazyParams=e,this.lazyParams.page=t,this.loadLazyData()},onFilter:function(){var e=this;this.onsearchtimeout&&clearTimeout(this.onsearchtimeout),this.onsearchtimeout=setTimeout((function(){e.lazyParams.filters=e.filters,e.loadLazyData()}),1e3)},onDateChange:function(){if(this.date_start){var e=this.date_start,t=e.getDate()<10?"0"+e.getDate():e.getDate(),n=e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1;this.cdate_start=e.getFullYear()+"-"+n+"-"+t}if(this.date_end){var a=this.date_end,r=a.getDate()<10?"0"+a.getDate():a.getDate(),o=a.getMonth()+1<10?"0"+(a.getMonth()+1):a.getMonth()+1;this.cdate_end=a.getFullYear()+"-"+o+"-"+r}},onSearch:function(){if(this.lazyParams.filters=this.filters,this.date_start){var e=this.date_start,t=e.getDate()<10?"0"+e.getDate():e.getDate(),n=e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1;this.lazyParams.date_start=e.getFullYear()+"-"+n+"-"+t}if(this.date_end){var a=this.date_end,r=a.getDate()<10?"0"+a.getDate():a.getDate(),o=a.getMonth()+1<10?"0"+(a.getMonth()+1):a.getMonth()+1;this.lazyParams.date_end=a.getFullYear()+"-"+o+"-"+r}this.loadLazyData()},onPengajuanWorkunitChange:function(){var e=this;this.workunitService.getWorkunit(this.pengajuan.workunit_id).then((function(t){"redirectTo"in t&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),e.$router.push(t.redirectTo)),e.employees=t.employees}))},initFilters:function(){this.filters={global:{value:null,matchMode:g["a"].CONTAINS}}}}},_=n("6b0d"),j=n.n(_);const k=j()(b,[["render",f]]);t["default"]=k},bee2:function(e,t,n){"use strict";function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function r(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}n.d(t,"a",(function(){return r}))},d4ec:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n("d9e2");function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},dbb4:function(e,t,n){var a=n("23e7"),r=n("83ab"),o=n("56ef"),i=n("fc6a"),l=n("06cf"),s=n("8418");a({target:"Object",stat:!0,sham:!r},{getOwnPropertyDescriptors:function(e){var t,n,a=i(e),r=l.f,c=o(a),u={},d=0;while(c.length>d)n=r(a,t=c[d++]),void 0!==n&&s(u,t,n);return u}})},e439:function(e,t,n){var a=n("23e7"),r=n("d039"),o=n("fc6a"),i=n("06cf").f,l=n("83ab"),s=r((function(){i(1)})),c=!l||s;a({target:"Object",stat:!0,forced:c,sham:!l},{getOwnPropertyDescriptor:function(e,t){return i(o(e),t)}})},fca4:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("d4ec"),r=n("bee2"),o=(n("d3b7"),n("e9c4"),function(){function e(){Object(a["a"])(this,e)}return Object(r["a"])(e,[{key:"getWorkunits",value:function(e){var t="";if(e){t="?page="+(e.page+1)+"&per_page="+e.rows;var n=1==e.sortOrder?"asc":"desc";t+="&order_by="+n,null!=e.sortField&&(t+="&sort_by="+e.sortField),e.filters.global.value&&(t+="&keyword="+e.filters.global.value)}else t="?all=1&order_by=asc";return fetch("http://103.151.71.42/api/workunits"+t,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"Login"}}:e.json()})).then((function(e){return e.data}))}},{key:"getWorkunit",value:function(e){return fetch("http://103.151.71.42/api/workunits/"+e,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"getPresences",value:function(e,t){var n="";if(e){n="page="+(e.page+1)+"&per_page="+e.rows;var a=1==e.sortOrder?"asc":"desc";n+="&order_by="+a,null!=e.sortField&&(n+="&sort_by="+e.sortField),e.filters.global.value&&(n+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(n+="&date_start="+e.date_start+"&date_end="+e.date_end)}return fetch("http://103.151.71.42/api/workunits/"+t+"/presences?"+n,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"updateWorkunit",value:function(e){return fetch("http://103.151.71.42/api/workunits/"+e.id+"/place",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({lat:e.lat,lng:e.lng,radius:e.radius})}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"assignWorktime",value:function(e,t){return fetch("http://103.151.71.42/api/workunits/"+e.id+"/worktime",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({worktime_id:t.worktime_id})}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"deleteWorktime",value:function(e,t){return fetch("http://103.151.71.42/api/workunits/"+e.id+"/worktime",{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({worktime_id:t.id})}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}}]),e}())}}]);
//# sourceMappingURL=chunk-2bb9908d.91b9893a.js.map