(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f634b5e"],{"4de4":function(e,t,n){"use strict";var o=n("23e7"),i=n("b727").filter,r=n("1dde"),a=r("filter");o({target:"Array",proto:!0,forced:!a},{filter:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},5530:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n("b64b"),n("a4d3"),n("4de4"),n("d3b7"),n("e439"),n("159b"),n("dbb4");function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},7467:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n("d4ec"),i=n("bee2"),r=(n("d3b7"),n("e9c4"),function(){function e(){Object(o["a"])(this,e)}return Object(i["a"])(e,[{key:"getWorktimes",value:function(e){var t="page="+(e.page+1)+"&per_page="+e.rows,n=1==e.sortOrder?"asc":"desc";return t+="&order_by="+n,null!=e.sortField&&(t+="&sort_by="+e.sortField),e.filters.global.value&&(t+="&keyword="+e.filters.global.value),fetch("http://103.151.71.42/api/worktimes?"+t,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"getAllWorktimes",value:function(){return fetch("http://103.151.71.42/api/worktimes?response=array",{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"createWorktime",value:function(e){return fetch("http://103.151.71.42/api/worktimes",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(e)}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"updateWorktime",value:function(e){return fetch("http://103.151.71.42/api/worktimes/"+e.id,{method:"PUT",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(e)}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"deleteWorktime",value:function(e){return fetch("http://103.151.71.42/api/worktimes/"+e.id,{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(e)}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}}]),e}())},b64b:function(e,t,n){var o=n("23e7"),i=n("7b0b"),r=n("df75"),a=n("d039"),c=a((function(){r(1)}));o({target:"Object",stat:!0,forced:c},{keys:function(e){return r(i(e))}})},bee2:function(e,t,n){"use strict";function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}n.d(t,"a",(function(){return i}))},d4ec:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("d9e2");function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},d741:function(e,t,n){"use strict";n.r(t);n("b0c0");var o=n("7a23"),i={class:"grid"},r={class:"col-12"},a={class:"card"},c={class:"my-2"},s={class:"flex flex-column md:flex-row md:justify-content-between md:align-items-center"},l=Object(o["j"])("h5",{class:"m-0"},"Manajemen Jam Kerja",-1),u={class:"block mt-2 md:mt-0 p-input-icon-left"},d=Object(o["j"])("i",{class:"pi pi-search"},null,-1),f=Object(o["j"])("span",{class:"p-column-title"},"ID",-1),m=Object(o["j"])("span",{class:"p-column-title"},"Nama",-1),b={class:"field"},p=Object(o["j"])("label",{for:"name"},"Nama",-1),h={key:0,class:"p-invalid"};function k(e,t,n,k,g,w){var j=Object(o["H"])("Button"),O=Object(o["H"])("Toolbar"),y=Object(o["H"])("InputText"),v=Object(o["H"])("Column"),P=Object(o["H"])("router-link"),S=Object(o["H"])("DataTable"),D=Object(o["H"])("Dialog");return Object(o["z"])(),Object(o["i"])("div",i,[Object(o["j"])("div",r,[Object(o["j"])("div",a,[Object(o["n"])(O,{class:"mb-4"},{start:Object(o["R"])((function(){return[Object(o["j"])("div",c,[Object(o["n"])(j,{label:"New",icon:"pi pi-plus",class:"p-button-success mr-2",onClick:w.openNew},null,8,["onClick"])])]})),_:1}),Object(o["n"])(S,{value:g.worktimes,lazy:!0,paginator:!0,rows:10,ref:"dt",dataKey:"id",filters:g.filters,"onUpdate:filters":t[1]||(t[1]=function(e){return g.filters=e}),totalRecords:g.totalRecords,loading:g.loading,onPage:t[2]||(t[2]=function(e){return w.onPage(e)}),onSort:t[3]||(t[3]=function(e){return w.onSort(e)}),onFilter:t[4]||(t[4]=function(e){return w.onFilter(e)}),globalFilterFields:["name"],selection:e.selectedCustomers,"onUpdate:selection":t[5]||(t[5]=function(t){return e.selectedCustomers=t}),selectAll:g.selectAll,onSelectAllChange:w.onSelectAllChange,onRowSelect:w.onRowSelect,onRowUnselect:w.onRowUnselect,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} products",responsiveLayout:"scroll"},{header:Object(o["R"])((function(){return[Object(o["j"])("div",s,[l,Object(o["j"])("span",u,[d,Object(o["n"])(y,{modelValue:g.filters["global"].value,"onUpdate:modelValue":t[0]||(t[0]=function(e){return g.filters["global"].value=e}),placeholder:"Search...",onKeyup:w.onFilter},null,8,["modelValue","onKeyup"])])])]})),default:Object(o["R"])((function(){return[Object(o["n"])(v,{field:"id",header:"ID",sortable:!0},{body:Object(o["R"])((function(e){return[f,Object(o["m"])(" "+Object(o["L"])(e.data.id),1)]})),_:1}),Object(o["n"])(v,{field:"name",header:"Nama"},{body:Object(o["R"])((function(e){return[m,Object(o["n"])(P,{to:{name:"worktimes.detail",params:{id:e.data.id}}},{default:Object(o["R"])((function(){return[Object(o["m"])(Object(o["L"])(e.data.name),1)]})),_:2},1032,["to"])]})),_:1}),Object(o["n"])(v,{header:"Aksi"},{body:Object(o["R"])((function(e){return[Object(o["n"])(j,{icon:"pi pi-pencil",class:"p-button-rounded p-button-success mr-2",onClick:function(t){return w.editWorktime(e.data)}},null,8,["onClick"]),e.data.id?(Object(o["z"])(),Object(o["g"])(j,{key:0,icon:"pi pi-trash",class:"p-button-rounded p-button-warning mt-2",onClick:function(t){return w.confirmDelete(e.data)}},null,8,["onClick"])):Object(o["h"])("",!0)]})),_:1})]})),_:1},8,["value","filters","totalRecords","loading","selection","selectAll","onSelectAllChange","onRowSelect","onRowUnselect"]),Object(o["n"])(D,{visible:g.worktimeDialog,"onUpdate:visible":t[7]||(t[7]=function(e){return g.worktimeDialog=e}),style:{width:"450px"},header:"Form Hari Libur",modal:!0,class:"p-fluid"},{footer:Object(o["R"])((function(){return[Object(o["n"])(j,{label:"Cancel",icon:"pi pi-times",class:"p-button-text",onClick:w.hideDialog},null,8,["onClick"]),Object(o["n"])(j,{label:"Save",icon:"pi pi-check",class:"p-button-text",onClick:w.saveWorktime},null,8,["onClick"])]})),default:Object(o["R"])((function(){return[Object(o["j"])("div",b,[p,Object(o["n"])(y,{id:"name",modelValue:g.worktime.name,"onUpdate:modelValue":t[6]||(t[6]=function(e){return g.worktime.name=e}),modelModifiers:{trim:!0},required:"true",autofocus:"",class:Object(o["u"])({"p-invalid":g.submitted&&!g.worktime.name})},null,8,["modelValue","class"]),g.submitted&&!g.worktime.name?(Object(o["z"])(),Object(o["i"])("small",h,"Nama diperlukan.")):Object(o["h"])("",!0)])]})),_:1},8,["visible"])])])])}var g=n("5530"),w=(n("4de4"),n("d3b7"),n("0393")),j=n("7467"),O={data:function(){return{loading:!1,onsearchtimeout:null,totalRecords:0,worktimes:null,worktime:{},selectedWorktimes:null,selectAll:!1,filters:{},lazyParams:{},columns:[{field:"id",header:"ID"},{field:"name",header:"Nama"}],worktimeDialog:!1,submitted:!1}},worktimeService:null,created:function(){this.worktimeService=new j["a"],this.initFilters()},mounted:function(){this.loading=!0,this.lazyParams={first:0,page:0,rows:this.$refs.dt.rows,sortField:null,sortOrder:1,filters:this.filters},this.loadLazyData()},methods:{openNew:function(){this.worktime={},this.submitted=!1,this.worktimeDialog=!0},loadLazyData:function(){var e=this;this.loading=!0,setTimeout((function(){e.worktimeService.getWorktimes(e.lazyParams).then((function(t){"redirectTo"in t&&(localStorage.removeItem("presence_app_token"),e.$router.push(t.redirectTo)),e.worktimes=t.data,e.totalRecords=t.total,e.loading=!1}))}),1e3*Math.random()+250)},onPage:function(e){this.lazyParams=e,this.loadLazyData()},onSort:function(e){var t=this.lazyParams.page;this.lazyParams=e,this.lazyParams.page=t,this.loadLazyData()},onFilter:function(){var e=this;this.onsearchtimeout&&clearTimeout(this.onsearchtimeout),this.onsearchtimeout=setTimeout((function(){e.lazyParams.filters=e.filters,e.loadLazyData()}),1e3)},onSelectAllChange:function(e){var t=this,n=e.checked;n?this.worktimeService.getWorktimes().then((function(e){"redirectTo"in e&&(localStorage.removeItem("presence_app_token"),t.$router.push(e.redirectTo)),t.selectAll=!0,t.selectedWorktimes=e.data})):(this.selectAll=!1,this.selectedWorktimes=[])},onRowSelect:function(){this.selectAll=this.selectedWorktimes.length===this.totalRecords},onRowUnselect:function(){this.selectAll=!1},editWorktime:function(e){this.worktime=Object(g["a"])({},e),this.worktimeDialog=!0},confirmDelete:function(e){var t=this;this.worktime=e,this.$swal({title:"Apakah anda yakin akan menghapus data ini ?",showCancelButton:!0,confirmButtonText:"Hapus"}).then((function(e){e.isConfirmed&&t.worktimeService.deleteWorktime(t.worktime).then((function(e){e.success?(t.worktimes=t.worktimes.filter((function(e){return e.id!==t.worktime.id})),t.$swal({icon:"success",title:"Success",text:e.message}),t.worktimeDialog=!1,t.worktime={}):t.$swal({icon:"error",title:"Oops...",text:e.message})}))}))},hideDialog:function(){this.worktimeDialog=!1,this.submitted=!1},saveWorktime:function(){var e=this;this.submitted=!0,this.worktime.id?this.worktimeService.updateWorktime(this.worktime).then((function(t){t.success?(e.loadLazyData(),e.$swal({icon:"success",title:"Success",text:t.message}),e.worktimeDialog=!1,e.worktime={}):e.$swal({icon:"error",title:"Oops...",text:t.message})})):this.worktimeService.createWorktime(this.worktime).then((function(t){t.success?(e.loadLazyData(),e.worktimeDialog=!1,e.worktime={},e.$swal({icon:"success",title:"Success",text:t.message})):e.$swal({icon:"error",title:"Oops...",text:t.message})}))},findIndexById:function(e){for(var t=-1,n=0;n<this.worktimes.length;n++)if(this.worktimes[n].id===e){t=n;break}return t},initFilters:function(){this.filters={global:{value:null,matchMode:w["a"].CONTAINS}}}}},y=n("6b0d"),v=n.n(y);const P=v()(O,[["render",k]]);t["default"]=P},dbb4:function(e,t,n){var o=n("23e7"),i=n("83ab"),r=n("56ef"),a=n("fc6a"),c=n("06cf"),s=n("8418");o({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(e){var t,n,o=a(e),i=c.f,l=r(o),u={},d=0;while(l.length>d)n=i(o,t=l[d++]),void 0!==n&&s(u,t,n);return u}})},e439:function(e,t,n){var o=n("23e7"),i=n("d039"),r=n("fc6a"),a=n("06cf").f,c=n("83ab"),s=i((function(){a(1)})),l=!c||s;o({target:"Object",stat:!0,forced:l,sham:!c},{getOwnPropertyDescriptor:function(e,t){return a(r(e),t)}})}}]);
//# sourceMappingURL=chunk-3f634b5e.49f3e118.js.map