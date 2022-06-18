(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-37b39c58"],{"06d6":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n("5530"),r=n("d4ec"),a=n("bee2"),i=(n("d3b7"),n("e9c4"),function(){function e(){Object(r["a"])(this,e)}return Object(a["a"])(e,[{key:"getEmployees",value:function(e){var t="page="+(e.page+1)+"&per_page="+e.rows,n=1==e.sortOrder?"asc":"desc";return t+="&order_by="+n,null!=e.sortField&&(t+="&sort_by="+e.sortField),e.filters.global.value&&(t+="&keyword="+e.filters.global.value),fetch("https://api-presence.z-techno.com/api/employees?"+t,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"getEmployee",value:function(e){return fetch("https://api-presence.z-techno.com/api/employees/"+e,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"updateEmployee",value:function(e){return fetch("https://api-presence.z-techno.com/api/employees/"+e.id+"/place",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({lat:e.lat,lng:e.lng,radius:e.radius})}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"updateRole",value:function(e,t){var n=Object(o["a"])({},e);return n.role=t,fetch("https://api-presence.z-techno.com/api/users/"+e.id,{method:"PUT",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(n)}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"addPlace",value:function(e,t){return fetch("https://api-presence.z-techno.com/api/employees/"+e.id+"/place",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(t)}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"deletePlace",value:function(e,t){return fetch("https://api-presence.z-techno.com/api/employees/"+e.id+"/place",{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({place_id:t.id})}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"patchPlace",value:function(e){return fetch("https://api-presence.z-techno.com/api/employees/"+e.id+"/place",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"addWorktime",value:function(e,t){return fetch("https://api-presence.z-techno.com/api/employees/"+e.id+"/worktime",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(t)}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"deleteWorktime",value:function(e,t){return fetch("https://api-presence.z-techno.com/api/employees/"+e.id+"/worktime",{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({worktime_id:t.id})}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}}]),e}())},"4de4":function(e,t,n){"use strict";var o=n("23e7"),r=n("b727").filter,a=n("1dde"),i=a("filter");o({target:"Array",proto:!0,forced:!i},{filter:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},5530:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n("b64b"),n("a4d3"),n("4de4"),n("d3b7"),n("e439"),n("159b"),n("dbb4");function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},b64b:function(e,t,n){var o=n("23e7"),r=n("7b0b"),a=n("df75"),i=n("d039"),c=i((function(){a(1)}));o({target:"Object",stat:!0,forced:c},{keys:function(e){return a(r(e))}})},ba97:function(e,t,n){"use strict";n.r(t);n("b0c0");var o=n("7a23"),r={class:"grid"},a={class:"col-12"},i={class:"card"},c={class:"flex flex-column md:flex-row md:justify-content-between md:align-items-center"},l=Object(o["j"])("h5",{class:"m-0"},"Manajemen Pegawai",-1),s={class:"block mt-2 md:mt-0 p-input-icon-left"},u=Object(o["j"])("i",{class:"pi pi-search"},null,-1),p=Object(o["j"])("span",{class:"p-column-title"},"ID",-1),d=Object(o["j"])("span",{class:"p-column-title"},"Nama",-1);function f(e,t,n,f,h,m){var b=Object(o["H"])("InputText"),y=Object(o["H"])("Column"),g=Object(o["H"])("router-link"),j=Object(o["H"])("DataTable");return Object(o["z"])(),Object(o["i"])("div",r,[Object(o["j"])("div",a,[Object(o["j"])("div",i,[Object(o["n"])(j,{value:h.employees,lazy:!0,paginator:!0,rows:10,filters:h.filters,"onUpdate:filters":t[1]||(t[1]=function(e){return h.filters=e}),ref:"dt",dataKey:"id",totalRecords:h.totalRecords,loading:h.loading,onPage:t[2]||(t[2]=function(e){return m.onPage(e)}),onSort:t[3]||(t[3]=function(e){return m.onSort(e)}),onFilter:t[4]||(t[4]=function(e){return m.onFilter(e)}),globalFilterFields:["name"],selection:e.selectedCustomers,"onUpdate:selection":t[5]||(t[5]=function(t){return e.selectedCustomers=t}),selectAll:h.selectAll,onSelectAllChange:m.onSelectAllChange,onRowSelect:m.onRowSelect,onRowUnselect:m.onRowUnselect,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} products",responsiveLayout:"scroll"},{header:Object(o["R"])((function(){return[Object(o["j"])("div",c,[l,Object(o["j"])("span",s,[u,Object(o["n"])(b,{modelValue:h.filters["global"].value,"onUpdate:modelValue":t[0]||(t[0]=function(e){return h.filters["global"].value=e}),placeholder:"Search...",onKeyup:m.onFilter},null,8,["modelValue","onKeyup"])])])]})),default:Object(o["R"])((function(){return[Object(o["n"])(y,{field:"id",header:"ID",sortable:!0},{body:Object(o["R"])((function(e){return[p,Object(o["m"])(" "+Object(o["L"])(e.data.id),1)]})),_:1}),Object(o["n"])(y,{field:"nip",header:"NIP"}),Object(o["n"])(y,{field:"workunit.name",header:"OPD / Unit Kerja",headerStyle:"width:20%; min-width:10rem;"}),Object(o["n"])(y,{field:"name",header:"Nama",filterMatchMode:"startsWith",ref:"name",sortable:!0,headerStyle:"width:20%; min-width:10rem;"},{body:Object(o["R"])((function(e){return[d,Object(o["n"])(g,{to:{name:"employees.detail",params:{id:e.data.id}}},{default:Object(o["R"])((function(){return[Object(o["m"])(Object(o["L"])(e.data.name),1)]})),_:2},1032,["to"])]})),_:1},512),Object(o["n"])(y,{field:"position",header:"Jabatan",ref:"position"},null,512),Object(o["n"])(y,{field:"phone",header:"Telepon",ref:"phone"},null,512)]})),_:1},8,["value","filters","totalRecords","loading","selection","selectAll","onSelectAllChange","onRowSelect","onRowUnselect"])])])])}var h=n("0393"),m=n("06d6"),b={data:function(){return{API_URL:"https://api-presence.z-techno.com/api/",loading:!1,onsearchtimeout:null,totalRecords:0,employees:null,employee:{},selectedEmployees:null,selectAll:!1,filters:{},lazyParams:{},columns:[{field:"id",header:"ID"},{field:"nip",header:"NIP"},{field:"employee.name",header:"OPD / Unit Kerja"},{field:"name",header:"Nama"},{field:"position",header:"Jabatan"},{field:"phone",header:"Telepon"}],employeeDialog:!1,submitted:!1}},employeeService:null,created:function(){this.employeeService=new m["a"],this.initFilters()},mounted:function(){this.loading=!0,this.lazyParams={first:0,page:0,rows:this.$refs.dt.rows,sortField:null,sortOrder:1,filters:this.filters},this.loadLazyData()},methods:{loadLazyData:function(){var e=this;this.loading=!0,setTimeout((function(){e.employeeService.getEmployees(e.lazyParams).then((function(t){"redirectTo"in t&&(localStorage.removeItem("presence_app_token"),e.$router.push(t.redirectTo)),e.employees=t.data,e.totalRecords=t.total,e.loading=!1}))}),1e3*Math.random()+250)},onPage:function(e){this.lazyParams=e,this.loadLazyData()},onSort:function(e){var t=this.lazyParams.page;this.lazyParams=e,this.lazyParams.page=t,this.loadLazyData()},onFilter:function(){var e=this;this.onsearchtimeout&&clearTimeout(this.onsearchtimeout),this.onsearchtimeout=setTimeout((function(){e.lazyParams.filters=e.filters,e.loadLazyData()}),1e3)},onSelectAllChange:function(e){var t=this,n=e.checked;n?this.employeeService.getEmployees().then((function(e){"redirectTo"in e&&(localStorage.removeItem("presence_app_token"),t.$router.push(e.redirectTo)),t.selectAll=!0,t.selectedEmployees=e.data})):(this.selectAll=!1,this.selectedEmployees=[])},onRowSelect:function(){this.selectAll=this.selectedEmployees.length===this.totalRecords},onRowUnselect:function(){this.selectAll=!1},initFilters:function(){this.filters={global:{value:null,matchMode:h["a"].CONTAINS}}}}},y=n("6b0d"),g=n.n(y);const j=g()(b,[["render",f]]);t["default"]=j},bee2:function(e,t,n){"use strict";function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}n.d(t,"a",(function(){return r}))},d4ec:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("d9e2");function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},dbb4:function(e,t,n){var o=n("23e7"),r=n("83ab"),a=n("56ef"),i=n("fc6a"),c=n("06cf"),l=n("8418");o({target:"Object",stat:!0,sham:!r},{getOwnPropertyDescriptors:function(e){var t,n,o=i(e),r=c.f,s=a(o),u={},p=0;while(s.length>p)n=r(o,t=s[p++]),void 0!==n&&l(u,t,n);return u}})},e439:function(e,t,n){var o=n("23e7"),r=n("d039"),a=n("fc6a"),i=n("06cf").f,c=n("83ab"),l=r((function(){i(1)})),s=!c||l;o({target:"Object",stat:!0,forced:s,sham:!c},{getOwnPropertyDescriptor:function(e,t){return i(a(e),t)}})}}]);
//# sourceMappingURL=chunk-37b39c58.398898d3.js.map