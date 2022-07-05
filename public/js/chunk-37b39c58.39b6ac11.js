(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-37b39c58"],{"06d6":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("5530"),o=n("d4ec"),a=n("bee2"),i=(n("d3b7"),n("e9c4"),function(){function e(){Object(o["a"])(this,e)}return Object(a["a"])(e,[{key:"getEmployees",value:function(e){var t="";if(e){t="page="+(e.page+1)+"&per_page="+e.rows;var n=1==e.sortOrder?"asc":"desc";t+="&order_by="+n,null!=e.sortField&&(t+="&sort_by="+e.sortField),e.filters.global.value&&(t+="&keyword="+e.filters.global.value)}return fetch("http://103.151.71.42/api/employees?"+t,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"getEmployeesReport",value:function(e,t){var n="";if(e){n="page="+(e.page+1)+"&per_page="+e.rows;var r=1==e.sortOrder?"asc":"desc";n+="&order_by="+r,null!=e.sortField&&(n+="&sort_by="+e.sortField),e.filters.global.value&&(n+="&keyword="+e.filters.global.value)}return fetch("http://103.151.71.42/api/employees/reports/"+t+"?"+n,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"getEmployee",value:function(e){return fetch("http://103.151.71.42/api/employees/"+e,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"getPresence",value:function(e,t){return fetch("http://103.151.71.42/api/employees/"+e+"/presences/"+t,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"updateEmployee",value:function(e){return fetch("http://103.151.71.42/api/employees/"+e.id+"/place",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({lat:e.lat,lng:e.lng,radius:e.radius})}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"updateRole",value:function(e,t){var n=Object(r["a"])({},e);return n.role=t,fetch("http://103.151.71.42/api/users/"+e.id,{method:"PUT",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(n)}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"addPlace",value:function(e,t){return fetch("http://103.151.71.42/api/employees/"+e.id+"/place",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(t)}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"deletePlace",value:function(e,t){return fetch("http://103.151.71.42/api/employees/"+e.id+"/place",{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({place_id:t.id})}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"patchPlace",value:function(e){return fetch("http://103.151.71.42/api/employees/"+e.id+"/place",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"addWorktime",value:function(e,t){return fetch("http://103.151.71.42/api/employees/"+e.id+"/worktime",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(t)}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"deleteWorktime",value:function(e,t){return fetch("http://103.151.71.42/api/employees/"+e.id+"/worktime",{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({worktime_id:t.id})}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"actionPresence",value:function(e,t){return fetch("http://103.151.71.42/api/employees/"+t.employee_id+"/presences/"+t.id,{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({status:e})}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"insertPresence",value:function(e,t){return fetch("http://103.151.71.42/api/employees/"+e+"/presences",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")},body:t}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}}]),e}())},"4de4":function(e,t,n){"use strict";var r=n("23e7"),o=n("b727").filter,a=n("1dde"),i=a("filter");r({target:"Array",proto:!0,forced:!i},{filter:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},5530:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n("b64b"),n("a4d3"),n("4de4"),n("d3b7"),n("e439"),n("159b"),n("dbb4");function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},b64b:function(e,t,n){var r=n("23e7"),o=n("7b0b"),a=n("df75"),i=n("d039"),l=i((function(){a(1)}));r({target:"Object",stat:!0,forced:l},{keys:function(e){return a(o(e))}})},ba97:function(e,t,n){"use strict";n.r(t);n("b0c0");var r=n("7a23"),o={class:"grid"},a={class:"col-12"},i={class:"card"},l={class:"flex flex-column md:flex-row md:justify-content-between md:align-items-center"},c=Object(r["j"])("h5",{class:"m-0"},"Manajemen Pegawai",-1),s={class:"block mt-2 md:mt-0 p-input-icon-left"},u=Object(r["j"])("i",{class:"pi pi-search"},null,-1),p=Object(r["j"])("span",{class:"p-column-title"},"ID",-1),d=Object(r["j"])("span",{class:"p-column-title"},"Nama",-1);function f(e,t,n,f,h,m){var g=Object(r["H"])("InputText"),y=Object(r["H"])("Column"),b=Object(r["H"])("router-link"),j=Object(r["H"])("DataTable");return Object(r["z"])(),Object(r["i"])("div",o,[Object(r["j"])("div",a,[Object(r["j"])("div",i,[Object(r["n"])(j,{value:h.employees,lazy:!0,paginator:!0,rows:10,filters:h.filters,"onUpdate:filters":t[1]||(t[1]=function(e){return h.filters=e}),ref:"dt",dataKey:"id",totalRecords:h.totalRecords,loading:h.loading,onPage:t[2]||(t[2]=function(e){return m.onPage(e)}),onSort:t[3]||(t[3]=function(e){return m.onSort(e)}),onFilter:t[4]||(t[4]=function(e){return m.onFilter(e)}),globalFilterFields:["name"],selection:e.selectedCustomers,"onUpdate:selection":t[5]||(t[5]=function(t){return e.selectedCustomers=t}),selectAll:h.selectAll,onSelectAllChange:m.onSelectAllChange,onRowSelect:m.onRowSelect,onRowUnselect:m.onRowUnselect,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} products",responsiveLayout:"scroll"},{header:Object(r["R"])((function(){return[Object(r["j"])("div",l,[c,Object(r["j"])("span",s,[u,Object(r["n"])(g,{modelValue:h.filters["global"].value,"onUpdate:modelValue":t[0]||(t[0]=function(e){return h.filters["global"].value=e}),placeholder:"Search...",onKeyup:m.onFilter},null,8,["modelValue","onKeyup"])])])]})),default:Object(r["R"])((function(){return[Object(r["n"])(y,{field:"id",header:"ID",sortable:!0},{body:Object(r["R"])((function(e){return[p,Object(r["m"])(" "+Object(r["L"])(e.data.id),1)]})),_:1}),Object(r["n"])(y,{field:"nip",header:"NIP"}),Object(r["n"])(y,{field:"workunit.name",header:"OPD / Unit Kerja",headerStyle:"width:20%; min-width:10rem;"}),Object(r["n"])(y,{field:"name",header:"Nama",filterMatchMode:"startsWith",ref:"name",sortable:!0,headerStyle:"width:20%; min-width:10rem;"},{body:Object(r["R"])((function(e){return[d,Object(r["n"])(b,{to:{name:"employees.detail",params:{id:e.data.id}}},{default:Object(r["R"])((function(){return[Object(r["m"])(Object(r["L"])(e.data.name),1)]})),_:2},1032,["to"])]})),_:1},512),Object(r["n"])(y,{field:"position",header:"Jabatan",ref:"position"},null,512),Object(r["n"])(y,{field:"phone",header:"Telepon",ref:"phone"},null,512)]})),_:1},8,["value","filters","totalRecords","loading","selection","selectAll","onSelectAllChange","onRowSelect","onRowUnselect"])])])])}var h=n("0393"),m=n("06d6"),g={data:function(){return{API_URL:"http://103.151.71.42/api/",loading:!1,onsearchtimeout:null,totalRecords:0,employees:null,employee:{},selectedEmployees:null,selectAll:!1,filters:{},lazyParams:{},columns:[{field:"id",header:"ID"},{field:"nip",header:"NIP"},{field:"employee.name",header:"OPD / Unit Kerja"},{field:"name",header:"Nama"},{field:"position",header:"Jabatan"},{field:"phone",header:"Telepon"}],employeeDialog:!1,submitted:!1}},employeeService:null,created:function(){this.employeeService=new m["a"],this.initFilters()},mounted:function(){this.loading=!0,this.lazyParams={first:0,page:0,rows:this.$refs.dt.rows,sortField:null,sortOrder:1,filters:this.filters},this.loadLazyData()},methods:{loadLazyData:function(){var e=this;this.loading=!0,setTimeout((function(){e.employeeService.getEmployees(e.lazyParams).then((function(t){"redirectTo"in t&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),e.$router.push(t.redirectTo)),e.employees=t.data,e.totalRecords=t.total,e.loading=!1}))}),1e3*Math.random()+250)},onPage:function(e){this.lazyParams=e,this.loadLazyData()},onSort:function(e){var t=this.lazyParams.page;this.lazyParams=e,this.lazyParams.page=t,this.loadLazyData()},onFilter:function(){var e=this;this.onsearchtimeout&&clearTimeout(this.onsearchtimeout),this.onsearchtimeout=setTimeout((function(){e.lazyParams.filters=e.filters,e.loadLazyData()}),1e3)},onSelectAllChange:function(e){var t=this,n=e.checked;n?this.employeeService.getEmployees().then((function(e){"redirectTo"in e&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),t.$router.push(e.redirectTo)),t.selectAll=!0,t.selectedEmployees=e.data})):(this.selectAll=!1,this.selectedEmployees=[])},onRowSelect:function(){this.selectAll=this.selectedEmployees.length===this.totalRecords},onRowUnselect:function(){this.selectAll=!1},initFilters:function(){this.filters={global:{value:null,matchMode:h["a"].CONTAINS}}}}},y=n("6b0d"),b=n.n(y);const j=b()(g,[["render",f]]);t["default"]=j},bee2:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}n.d(t,"a",(function(){return o}))},d4ec:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n("d9e2");function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},dbb4:function(e,t,n){var r=n("23e7"),o=n("83ab"),a=n("56ef"),i=n("fc6a"),l=n("06cf"),c=n("8418");r({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(e){var t,n,r=i(e),o=l.f,s=a(r),u={},p=0;while(s.length>p)n=o(r,t=s[p++]),void 0!==n&&c(u,t,n);return u}})},e439:function(e,t,n){var r=n("23e7"),o=n("d039"),a=n("fc6a"),i=n("06cf").f,l=n("83ab"),c=o((function(){i(1)})),s=!l||c;r({target:"Object",stat:!0,forced:s,sham:!l},{getOwnPropertyDescriptor:function(e,t){return i(a(e),t)}})}}]);
//# sourceMappingURL=chunk-37b39c58.39b6ac11.js.map