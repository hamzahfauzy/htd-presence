(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ede0ab0"],{"4de4":function(e,t,n){"use strict";var r=n("23e7"),a=n("b727").filter,c=n("1dde"),i=c("filter");r({target:"Array",proto:!0,forced:!i},{filter:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},5530:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n("b64b"),n("a4d3"),n("4de4"),n("d3b7"),n("e439"),n("159b"),n("dbb4");function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},"9ee9":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("d4ec"),a=n("bee2"),c=(n("d3b7"),n("e9c4"),function(){function e(){Object(r["a"])(this,e)}return Object(a["a"])(e,[{key:"getPresences",value:function(e){var t="page="+(e.page+1)+"&per_page="+e.rows,n=1==e.sortOrder?"asc":"desc";return t+="&order_by="+n,null!=e.sortField&&(t+="&sort_by="+e.sortField),e.filters.global.value&&(t+="&keyword="+e.filters.global.value),fetch("http://103.151.71.42/api/presences?"+t,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"Login"}}:e.json()})).then((function(e){return e.data}))}},{key:"getAllPresences",value:function(){return fetch("http://103.151.71.42/api/presences?response=array",{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"Login"}}:e.json()})).then((function(e){return e.data}))}},{key:"updatePresence",value:function(e){return fetch("http://103.151.71.42/api/presences/"+e.id,{method:"PUT",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(e)}).then((function(e){return 401==e.status?{redirectTo:"login"}:e.json()}))}},{key:"deletePresence",value:function(e){return fetch("http://103.151.71.42/api/presences/"+e.id,{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(e)}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}}]),e}())},b64b:function(e,t,n){var r=n("23e7"),a=n("7b0b"),c=n("df75"),i=n("d039"),o=i((function(){c(1)}));r({target:"Object",stat:!0,forced:o},{keys:function(e){return c(a(e))}})},bee2:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}n.d(t,"a",(function(){return a}))},c891:function(e,t,n){"use strict";n.r(t);n("b0c0");var r=n("7a23"),a={class:"grid"},c={class:"col-12"},i={class:"card"},o={class:"my-2"},s={class:"flex flex-column md:flex-row md:justify-content-between md:align-items-center"},l=Object(r["j"])("h5",{class:"m-0"},"Manajemen Jadwal",-1),u={class:"block mt-2 md:mt-0 p-input-icon-left"},d=Object(r["j"])("i",{class:"pi pi-search"},null,-1),p=Object(r["j"])("span",{class:"p-column-title"},"ID",-1),f={class:"field"},b=Object(r["j"])("label",{for:"name"},"Nama",-1),h={key:0,class:"p-invalid"},m={class:"field"},g=Object(r["j"])("label",{for:"lat"},"Waktu Toleransi",-1),j={key:0,class:"p-invalid"};function O(e,t,n,O,v,y){var w=Object(r["H"])("Button"),P=Object(r["H"])("Toolbar"),k=Object(r["H"])("InputText"),S=Object(r["H"])("Column"),D=Object(r["H"])("DataTable"),T=Object(r["H"])("Dialog");return Object(r["z"])(),Object(r["i"])("div",a,[Object(r["j"])("div",c,[Object(r["j"])("div",i,[Object(r["n"])(P,{class:"mb-4"},{start:Object(r["R"])((function(){return[Object(r["j"])("div",o,[Object(r["n"])(w,{label:"New",icon:"pi pi-plus",class:"p-button-success mr-2",onClick:e.openNew},null,8,["onClick"])])]})),_:1}),Object(r["n"])(D,{value:v.presences,lazy:!0,paginator:!0,rows:10,filters:v.filters,"onUpdate:filters":t[1]||(t[1]=function(e){return v.filters=e}),ref:"dt",dataKey:"id",totalRecords:v.totalRecords,loading:v.loading,onPage:t[2]||(t[2]=function(e){return y.onPage(e)}),onSort:t[3]||(t[3]=function(e){return y.onSort(e)}),onFilter:t[4]||(t[4]=function(e){return y.onFilter(e)}),globalFilterFields:["name"],selection:e.selectedCustomers,"onUpdate:selection":t[5]||(t[5]=function(t){return e.selectedCustomers=t}),selectAll:v.selectAll,onSelectAllChange:y.onSelectAllChange,onRowSelect:y.onRowSelect,onRowUnselect:y.onRowUnselect,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} products",responsiveLayout:"scroll"},{header:Object(r["R"])((function(){return[Object(r["j"])("div",s,[l,Object(r["j"])("span",u,[d,Object(r["n"])(k,{modelValue:v.filters["global"].value,"onUpdate:modelValue":t[0]||(t[0]=function(e){return v.filters["global"].value=e}),placeholder:"Search...",onKeyup:y.onFilter},null,8,["modelValue","onKeyup"])])])]})),default:Object(r["R"])((function(){return[Object(r["n"])(S,{field:"id",header:"ID",sortable:!0},{body:Object(r["R"])((function(e){return[p,Object(r["m"])(" "+Object(r["L"])(e.data.id),1)]})),_:1}),Object(r["n"])(S,{field:"name",header:"Nama"}),Object(r["n"])(S,{field:"tolerance_time",header:"Waktu Toleransi"}),Object(r["n"])(S,{header:"Aksi"},{body:Object(r["R"])((function(t){return[Object(r["n"])(w,{icon:"pi pi-pencil",class:"p-button-rounded p-button-success mr-2",onClick:function(n){return e.editWorkunit(t.data)}},null,8,["onClick"]),t.data.id?(Object(r["z"])(),Object(r["g"])(w,{key:0,icon:"pi pi-trash",class:"p-button-rounded p-button-warning mt-2",onClick:function(e){return y.confirmDelete(t.data)}},null,8,["onClick"])):Object(r["h"])("",!0)]})),_:1})]})),_:1},8,["value","filters","totalRecords","loading","selection","selectAll","onSelectAllChange","onRowSelect","onRowUnselect"]),Object(r["n"])(T,{visible:v.presenceDialog,"onUpdate:visible":t[8]||(t[8]=function(e){return v.presenceDialog=e}),style:{width:"450px"},header:"Edit Jadwal",modal:!0,class:"p-fluid"},{footer:Object(r["R"])((function(){return[Object(r["n"])(w,{label:"Cancel",icon:"pi pi-times",class:"p-button-text",onClick:y.hideDialog},null,8,["onClick"]),Object(r["n"])(w,{label:"Save",icon:"pi pi-check",class:"p-button-text",onClick:y.savePresence},null,8,["onClick"])]})),default:Object(r["R"])((function(){return[Object(r["j"])("div",f,[b,Object(r["n"])(k,{id:"name",modelValue:v.presence.name,"onUpdate:modelValue":t[6]||(t[6]=function(e){return v.presence.name=e}),modelModifiers:{trim:!0},required:"true",autofocus:"",class:Object(r["u"])({"p-invalid":v.submitted&&!v.presence.name})},null,8,["modelValue","class"]),v.submitted&&!v.presence.name?(Object(r["z"])(),Object(r["i"])("small",h,"Nama diperlukan.")):Object(r["h"])("",!0)]),Object(r["j"])("div",m,[g,Object(r["n"])(k,{id:"lat",modelValue:v.presence.tolerance_time,"onUpdate:modelValue":t[7]||(t[7]=function(e){return v.presence.tolerance_time=e}),modelModifiers:{trim:!0},required:"true",autofocus:"",class:Object(r["u"])({"p-invalid":v.submitted&&!v.presence.tolerance_time})},null,8,["modelValue","class"]),v.submitted&&!v.presence.tolerance_time?(Object(r["z"])(),Object(r["i"])("small",j,"Waktu toleransi diperlukan.")):Object(r["h"])("",!0)])]})),_:1},8,["visible"])])])])}var v=n("5530"),y=(n("4de4"),n("d3b7"),n("0393")),w=n("9ee9"),P={data:function(){return{loading:!1,onsearchtimeout:null,totalRecords:0,presences:null,presence:{},selectedPresences:null,selectAll:!1,filters:{},lazyParams:{},columns:[{field:"id",header:"ID"},{field:"name",header:"Nama"},{field:"tolerance_time",header:"Waktu Toleransi"}],presenceDialog:!1,submitted:!1}},presenceService:null,created:function(){this.presenceService=new w["a"],this.initFilters()},mounted:function(){this.loading=!0,this.lazyParams={first:0,page:0,rows:this.$refs.dt.rows,sortField:null,sortOrder:1,filters:this.filters},this.loadLazyData()},methods:{loadLazyData:function(){var e=this;this.loading=!0,setTimeout((function(){e.presenceService.getPresences(e.lazyParams).then((function(t){"redirectTo"in t&&(localStorage.removeItem("presence_app_token"),e.$router.push(t.redirectTo)),e.presences=t.data,e.totalRecords=t.total,e.loading=!1}))}),1e3*Math.random()+250)},onPage:function(e){this.lazyParams=e,this.loadLazyData()},onSort:function(e){var t=this.lazyParams.page;this.lazyParams=e,this.lazyParams.page=t,this.loadLazyData()},onFilter:function(){var e=this;this.onsearchtimeout&&clearTimeout(this.onsearchtimeout),this.onsearchtimeout=setTimeout((function(){e.lazyParams.filters=e.filters,e.loadLazyData()}),1e3)},onSelectAllChange:function(e){var t=this,n=e.checked;n?this.presenceService.getPresences().then((function(e){"redirectTo"in e&&(localStorage.removeItem("presence_app_token"),t.$router.push(e.redirectTo)),t.selectAll=!0,t.selectedPresences=e.data})):(this.selectAll=!1,this.selectedPresences=[])},onRowSelect:function(){this.selectAll=this.selectedPresences.length===this.totalRecords},onRowUnselect:function(){this.selectAll=!1},editPresence:function(e){this.presence=Object(v["a"])({},e),this.presenceDialog=!0},hideDialog:function(){this.presenceDialog=!1,this.submitted=!1},savePresence:function(){var e=this;this.submitted=!0,this.presenceService.updatePresence(this.presence).then((function(t){t.success?(e.presences[e.findIndexById(e.presence.id)]=e.presence,e.$swal({icon:"success",title:"Success",text:t.message}),e.presenceDialog=!1,e.presence={}):e.$swal({icon:"error",title:"Oops...",text:t.message})}))},findIndexById:function(e){for(var t=-1,n=0;n<this.presences.length;n++)if(this.presences[n].id===e){t=n;break}return t},initFilters:function(){this.filters={global:{value:null,matchMode:y["a"].CONTAINS}}},confirmDelete:function(e){var t=this;this.presence=e,this.$swal({title:"Apakah anda yakin akan menghapus data ini ?",showCancelButton:!0,confirmButtonText:"Hapus"}).then((function(e){e.isConfirmed&&t.presenceService.deletePresence(t.presence).then((function(e){e.success?(t.presences=t.presences.filter((function(e){return e.id!==t.presence.id})),t.$swal({icon:"success",title:"Success",text:e.message}),t.presenceDialog=!1,t.presence={}):t.$swal({icon:"error",title:"Oops...",text:e.message})}))}))}}},k=n("6b0d"),S=n.n(k);const D=S()(P,[["render",O]]);t["default"]=D},d4ec:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n("d9e2");function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},dbb4:function(e,t,n){var r=n("23e7"),a=n("83ab"),c=n("56ef"),i=n("fc6a"),o=n("06cf"),s=n("8418");r({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(e){var t,n,r=i(e),a=o.f,l=c(r),u={},d=0;while(l.length>d)n=a(r,t=l[d++]),void 0!==n&&s(u,t,n);return u}})},e439:function(e,t,n){var r=n("23e7"),a=n("d039"),c=n("fc6a"),i=n("06cf").f,o=n("83ab"),s=a((function(){i(1)})),l=!o||s;r({target:"Object",stat:!0,forced:l,sham:!o},{getOwnPropertyDescriptor:function(e,t){return i(c(e),t)}})}}]);
//# sourceMappingURL=chunk-1ede0ab0.76f97135.js.map