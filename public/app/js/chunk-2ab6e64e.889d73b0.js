(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2ab6e64e"],{"4de4":function(e,t,a){"use strict";var i=a("23e7"),n=a("b727").filter,o=a("1dde"),r=o("filter");i({target:"Array",proto:!0,forced:!r},{filter:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},"7ecf":function(e,t,a){"use strict";a.r(t);a("b0c0");var i=a("7a23"),n={class:"grid"},o={class:"col-12"},r={class:"card"},s={class:"my-2"},l={class:"flex flex-column md:flex-row md:justify-content-between md:align-items-center"},c=Object(i["j"])("h5",{class:"m-0"},"Manajemen Cuti",-1),d={class:"block mt-2 md:mt-0 p-input-icon-left"},u=Object(i["j"])("i",{class:"pi pi-search"},null,-1),p=Object(i["j"])("span",{class:"p-column-title"},"ID",-1),f={class:"field"},h=Object(i["j"])("label",{for:"name"},"Nama",-1),v={key:0,class:"p-invalid"};function m(e,t,a,m,b,g){var L=Object(i["H"])("Button"),j=Object(i["H"])("Toolbar"),O=Object(i["H"])("InputText"),P=Object(i["H"])("Column"),y=Object(i["H"])("DataTable"),k=Object(i["H"])("Dialog");return Object(i["z"])(),Object(i["i"])("div",n,[Object(i["j"])("div",o,[Object(i["j"])("div",r,[Object(i["n"])(j,{class:"mb-4"},{start:Object(i["R"])((function(){return[Object(i["j"])("div",s,[Object(i["n"])(L,{label:"New",icon:"pi pi-plus",class:"p-button-success mr-2",onClick:g.openNew},null,8,["onClick"])])]})),_:1}),Object(i["n"])(y,{value:b.paidLeaves,lazy:!0,paginator:!0,rows:10,filters:b.filters,"onUpdate:filters":t[1]||(t[1]=function(e){return b.filters=e}),ref:"dt",dataKey:"id",totalRecords:b.totalRecords,loading:b.loading,onPage:t[2]||(t[2]=function(e){return g.onPage(e)}),onSort:t[3]||(t[3]=function(e){return g.onSort(e)}),onFilter:t[4]||(t[4]=function(e){return g.onFilter(e)}),globalFilterFields:["name"],selection:e.selectedCustomers,"onUpdate:selection":t[5]||(t[5]=function(t){return e.selectedCustomers=t}),selectAll:b.selectAll,onSelectAllChange:g.onSelectAllChange,onRowSelect:g.onRowSelect,onRowUnselect:g.onRowUnselect,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} products",responsiveLayout:"scroll"},{header:Object(i["R"])((function(){return[Object(i["j"])("div",l,[c,Object(i["j"])("span",d,[u,Object(i["n"])(O,{modelValue:b.filters["global"].value,"onUpdate:modelValue":t[0]||(t[0]=function(e){return b.filters["global"].value=e}),placeholder:"Search...",onKeyup:g.onFilter},null,8,["modelValue","onKeyup"])])])]})),default:Object(i["R"])((function(){return[Object(i["n"])(P,{field:"id",header:"ID",sortable:!0},{body:Object(i["R"])((function(e){return[p,Object(i["m"])(" "+Object(i["L"])(e.data.id),1)]})),_:1}),Object(i["n"])(P,{field:"name",header:"Nama"}),Object(i["n"])(P,{header:"Aksi"},{body:Object(i["R"])((function(e){return[Object(i["n"])(L,{icon:"pi pi-pencil",class:"p-button-rounded p-button-success mr-2",onClick:function(t){return g.editPaidLeave(e.data)}},null,8,["onClick"]),e.data.id?(Object(i["z"])(),Object(i["g"])(L,{key:0,icon:"pi pi-trash",class:"p-button-rounded p-button-warning mt-2",onClick:function(t){return g.confirmDelete(e.data)}},null,8,["onClick"])):Object(i["h"])("",!0)]})),_:1})]})),_:1},8,["value","filters","totalRecords","loading","selection","selectAll","onSelectAllChange","onRowSelect","onRowUnselect"]),Object(i["n"])(k,{visible:b.paidLeaveDialog,"onUpdate:visible":t[7]||(t[7]=function(e){return b.paidLeaveDialog=e}),style:{width:"450px"},header:"Form Cuti",modal:!0,class:"p-fluid"},{footer:Object(i["R"])((function(){return[Object(i["n"])(L,{label:"Cancel",icon:"pi pi-times",class:"p-button-text",onClick:g.hideDialog},null,8,["onClick"]),Object(i["n"])(L,{label:"Save",icon:"pi pi-check",class:"p-button-text",onClick:g.savePaidLeave},null,8,["onClick"])]})),default:Object(i["R"])((function(){return[Object(i["j"])("div",f,[h,Object(i["n"])(O,{id:"name",modelValue:b.paidLeave.name,"onUpdate:modelValue":t[6]||(t[6]=function(e){return b.paidLeave.name=e}),modelModifiers:{trim:!0},required:"true",autofocus:"",class:Object(i["u"])({"p-invalid":b.submitted&&!b.paidLeave.name})},null,8,["modelValue","class"]),b.submitted&&!b.paidLeave.name?(Object(i["z"])(),Object(i["i"])("small",v,"Nama diperlukan.")):Object(i["h"])("",!0)])]})),_:1},8,["visible"])])])])}a("4de4"),a("d3b7");var b=a("0393"),g=a("c084"),L={data:function(){return{loading:!1,onsearchtimeout:null,totalRecords:0,paidLeaves:null,paidLeave:{},selectedPaidLeaves:null,selectAll:!1,filters:{},lazyParams:{},columns:[{field:"id",header:"ID"},{field:"name",header:"Nama"},{field:"date",header:"Tanggal"}],paidLeaveDialog:!1,submitted:!1}},PaidLeaveService:null,created:function(){this.PaidLeaveService=new g["a"],this.initFilters()},mounted:function(){this.loading=!0,this.lazyParams={first:0,page:0,rows:this.$refs.dt.rows,sortField:null,sortOrder:1,filters:this.filters},this.loadLazyData()},methods:{openNew:function(){this.paidLeave={},this.submitted=!1,this.paidLeaveDialog=!0},loadLazyData:function(){var e=this;this.loading=!0,setTimeout((function(){e.PaidLeaveService.getPaidLeaves(e.lazyParams).then((function(t){"redirectTo"in t&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),e.$router.push(t.redirectTo)),e.paidLeaves=t.data,e.totalRecords=t.total,e.loading=!1}))}),1e3*Math.random()+250)},onPage:function(e){this.lazyParams=e,this.loadLazyData()},onSort:function(e){var t=this.lazyParams.page;this.lazyParams=e,this.lazyParams.page=t,this.loadLazyData()},onFilter:function(){var e=this;this.onsearchtimeout&&clearTimeout(this.onsearchtimeout),this.onsearchtimeout=setTimeout((function(){e.lazyParams.filters=e.filters,e.loadLazyData()}),1e3)},onSelectAllChange:function(e){var t=this,a=e.checked;a?this.PaidLeaveService.getPaidLeaves().then((function(e){"redirectTo"in e&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),t.$router.push(e.redirectTo)),t.selectAll=!0,t.selectedPaidLeaves=e.data})):(this.selectAll=!1,this.selectedPaidLeaves=[])},onRowSelect:function(){this.selectAll=this.selectedPaidLeaves.length===this.totalRecords},onRowUnselect:function(){this.selectAll=!1},editPaidLeave:function(e){this.paidLeave=e,this.paidLeaveDialog=!0},confirmDelete:function(e){var t=this;this.paidLeave=e,this.$swal({title:"Apakah anda yakin akan menghapus data ini ?",showCancelButton:!0,confirmButtonText:"Hapus"}).then((function(e){e.isConfirmed&&t.PaidLeaveService.deletePaidLeave(t.paidLeave).then((function(e){e.success?(t.paidLeaves=t.paidLeaves.filter((function(e){return e.id!==t.paidLeave.id})),t.$swal({icon:"success",title:"Success",text:e.message}),t.paidLeaveDialog=!1,t.paidLeave={}):t.$swal({icon:"error",title:"Oops...",text:e.message})}))}))},hideDialog:function(){this.paidLeaveDialog=!1,this.submitted=!1},savePaidLeave:function(){var e=this;this.submitted=!0,this.paidLeave.id?this.PaidLeaveService.updatePaidLeave(this.paidLeave).then((function(t){t.success?(e.paidLeaves[e.findIndexById(e.paidLeave.id)]=e.paidLeave,e.$swal({icon:"success",title:"Success",text:t.message}),e.paidLeaveDialog=!1,e.paidLeave={}):e.$swal({icon:"error",title:"Oops...",text:t.message})})):this.PaidLeaveService.createPaidLeave(this.paidLeave).then((function(t){t.success?(e.paidLeaves.push(e.paidLeave),e.paidLeaveDialog=!1,e.paidLeave={},e.$swal({icon:"success",title:"Success",text:t.message})):e.$swal({icon:"error",title:"Oops...",text:t.message})}))},findIndexById:function(e){for(var t=-1,a=0;a<this.paidLeaves.length;a++)if(this.paidLeaves[a].id===e){t=a;break}return t},initFilters:function(){this.filters={global:{value:null,matchMode:b["a"].CONTAINS}}}}},j=a("6b0d"),O=a.n(j);const P=O()(L,[["render",m]]);t["default"]=P},bee2:function(e,t,a){"use strict";function i(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,t,a){return t&&i(e.prototype,t),a&&i(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e}a.d(t,"a",(function(){return n}))},c084:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var i=a("d4ec"),n=a("bee2"),o=(a("d3b7"),a("e9c4"),a("b0c0"),function(){function e(){Object(i["a"])(this,e)}return Object(n["a"])(e,[{key:"getPaidLeaves",value:function(e){var t="";if(e){t="page="+(e.page+1)+"&per_page="+e.rows;var a=1==e.sortOrder?"asc":"desc";t+="&order_by="+a,null!=e.sortField&&(t+="&sort_by="+e.sortField),e.filters.global.value&&(t+="&keyword="+e.filters.global.value)}return fetch("http://103.151.71.42/api/paid_leaves?"+t,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"getPaidLeave",value:function(e){return fetch("http://103.151.71.42/api/paid_leaves/"+e,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"createPaidLeave",value:function(e){return fetch("http://103.151.71.42/api/paid_leaves/",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({name:e.name})}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"updatePaidLeave",value:function(e){return fetch("http://103.151.71.42/api/paid_leaves/"+e.id,{method:"PUT",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({name:e.name})}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"deletePaidLeave",value:function(e){return fetch("http://103.151.71.42/api/paid_leaves/"+e.id,{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}}]),e}())},d4ec:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));a("d9e2");function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}}}]);
//# sourceMappingURL=chunk-2ab6e64e.889d73b0.js.map