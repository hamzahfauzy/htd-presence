(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38109550"],{"9ee9":function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));class a{getPresences(e){var t="page="+(e.page+1)+"&per_page="+e.rows,s=1==e.sortOrder?"asc":"desc";return t+="&order_by="+s,null!=e.sortField&&(t+="&sort_by="+e.sortField),e.filters.global.value&&(t+="&keyword="+e.filters.global.value),fetch("https://sisapa.tanjungbalaikota.go.id/api/presences?"+t,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then(e=>401==e.status?{data:{redirectTo:"Login"}}:e.json()).then(e=>e.data)}getAllPresences(){return fetch("https://sisapa.tanjungbalaikota.go.id/api/presences?response=array",{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then(e=>401==e.status?{data:{redirectTo:"Login"}}:e.json()).then(e=>e.data)}createPresence(e){return fetch("https://sisapa.tanjungbalaikota.go.id/api/presences/",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(e)}).then(e=>401==e.status?{redirectTo:"login"}:e.json())}updatePresence(e){return fetch("https://sisapa.tanjungbalaikota.go.id/api/presences/"+e.id,{method:"PUT",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(e)}).then(e=>401==e.status?{redirectTo:"login"}:e.json())}deletePresence(e){return fetch("https://sisapa.tanjungbalaikota.go.id/api/presences/"+e.id,{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(e)}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}}},e006:function(e,t,s){"use strict";s.r(t);var a=s("7a23");const i={class:"grid"},l={class:"col-12"},n={class:"card"},r={class:"my-2"},o={class:"flex flex-column md:flex-row md:justify-content-between md:align-items-center"},c=Object(a["j"])("h5",{class:"m-0"},"Manajemen Jadwal",-1),d={class:"block mt-2 md:mt-0 p-input-icon-left"},p=Object(a["j"])("i",{class:"pi pi-search"},null,-1),h=Object(a["j"])("span",{class:"p-column-title"},"ID",-1),u={class:"field"},m=Object(a["j"])("label",{for:"name"},"Nama",-1),b={key:0,class:"p-invalid"},g={class:"field"},j=Object(a["j"])("label",{for:"lat"},"Waktu Toleransi",-1),f={key:0,class:"p-invalid"};function O(e,t,s,O,k,S){const y=Object(a["H"])("Button"),P=Object(a["H"])("Toolbar"),v=Object(a["H"])("InputText"),w=Object(a["H"])("Column"),_=Object(a["H"])("DataTable"),T=Object(a["H"])("Dialog");return Object(a["z"])(),Object(a["i"])("div",i,[Object(a["j"])("div",l,[Object(a["j"])("div",n,[Object(a["m"])(P,{class:"mb-4"},{start:Object(a["S"])(()=>[Object(a["j"])("div",r,[Object(a["m"])(y,{label:"New",icon:"pi pi-plus",class:"p-button-success mr-2",onClick:S.openNew},null,8,["onClick"])])]),_:1}),Object(a["m"])(_,{value:k.presences,lazy:!0,paginator:!0,rows:10,filters:k.filters,"onUpdate:filters":t[1]||(t[1]=e=>k.filters=e),ref:"dt",dataKey:"id",totalRecords:k.totalRecords,loading:k.loading,onPage:t[2]||(t[2]=e=>S.onPage(e)),onSort:t[3]||(t[3]=e=>S.onSort(e)),onFilter:t[4]||(t[4]=e=>S.onFilter(e)),globalFilterFields:["name"],selection:e.selectedCustomers,"onUpdate:selection":t[5]||(t[5]=t=>e.selectedCustomers=t),selectAll:k.selectAll,onSelectAllChange:S.onSelectAllChange,onRowSelect:S.onRowSelect,onRowUnselect:S.onRowUnselect,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} products",responsiveLayout:"scroll"},{header:Object(a["S"])(()=>[Object(a["j"])("div",o,[c,Object(a["j"])("span",d,[p,Object(a["m"])(v,{modelValue:k.filters["global"].value,"onUpdate:modelValue":t[0]||(t[0]=e=>k.filters["global"].value=e),placeholder:"Search...",onKeyup:S.onFilter},null,8,["modelValue","onKeyup"])])])]),default:Object(a["S"])(()=>[Object(a["m"])(w,{field:"id",header:"ID",sortable:!0},{body:Object(a["S"])(e=>[h,Object(a["l"])(" "+Object(a["L"])(e.data.id),1)]),_:1}),Object(a["m"])(w,{field:"name",header:"Nama"}),Object(a["m"])(w,{field:"tolerance_time",header:"Waktu Toleransi"}),Object(a["m"])(w,{header:"Aksi"},{body:Object(a["S"])(e=>[Object(a["m"])(y,{icon:"pi pi-pencil",class:"p-button-rounded p-button-success mr-2",onClick:t=>S.editPresence(e.data)},null,8,["onClick"]),e.data.id?(Object(a["z"])(),Object(a["g"])(y,{key:0,icon:"pi pi-trash",class:"p-button-rounded p-button-warning mt-2",onClick:t=>S.confirmDelete(e.data)},null,8,["onClick"])):Object(a["h"])("",!0)]),_:1})]),_:1},8,["value","filters","totalRecords","loading","selection","selectAll","onSelectAllChange","onRowSelect","onRowUnselect"]),Object(a["m"])(T,{visible:k.presenceDialog,"onUpdate:visible":t[8]||(t[8]=e=>k.presenceDialog=e),style:{width:"450px"},header:"Form Jadwal",modal:!0,class:"p-fluid"},{footer:Object(a["S"])(()=>[Object(a["m"])(y,{label:"Cancel",icon:"pi pi-times",class:"p-button-text",onClick:S.hideDialog},null,8,["onClick"]),Object(a["m"])(y,{label:"Save",icon:"pi pi-check",class:"p-button-text",onClick:S.savePresence},null,8,["onClick"])]),default:Object(a["S"])(()=>[Object(a["j"])("div",u,[m,Object(a["m"])(v,{id:"name",modelValue:k.presence.name,"onUpdate:modelValue":t[6]||(t[6]=e=>k.presence.name=e),modelModifiers:{trim:!0},required:"true",autofocus:"",class:Object(a["t"])({"p-invalid":k.submitted&&!k.presence.name})},null,8,["modelValue","class"]),k.submitted&&!k.presence.name?(Object(a["z"])(),Object(a["i"])("small",b,"Nama diperlukan.")):Object(a["h"])("",!0)]),Object(a["j"])("div",g,[j,Object(a["m"])(v,{id:"lat",modelValue:k.presence.tolerance_time,"onUpdate:modelValue":t[7]||(t[7]=e=>k.presence.tolerance_time=e),modelModifiers:{trim:!0},required:"true",autofocus:"",class:Object(a["t"])({"p-invalid":k.submitted&&!k.presence.tolerance_time})},null,8,["modelValue","class"]),k.submitted&&!k.presence.tolerance_time?(Object(a["z"])(),Object(a["i"])("small",f,"Waktu toleransi diperlukan.")):Object(a["h"])("",!0)])]),_:1},8,["visible"])])])])}s("14d9");var k=s("0393"),S=s("9ee9"),y={data(){return{loading:!1,onsearchtimeout:null,totalRecords:0,presences:null,presence:{},selectedPresences:null,selectAll:!1,filters:{},lazyParams:{},columns:[{field:"id",header:"ID"},{field:"name",header:"Nama"},{field:"tolerance_time",header:"Waktu Toleransi"}],presenceDialog:!1,submitted:!1}},presenceService:null,created(){this.presenceService=new S["a"],this.initFilters()},mounted(){this.loading=!0,this.lazyParams={first:0,page:0,rows:this.$refs.dt.rows,sortField:null,sortOrder:1,filters:this.filters},this.loadLazyData()},methods:{loadLazyData(){this.loading=!0,setTimeout(()=>{this.presenceService.getPresences(this.lazyParams).then(e=>{"redirectTo"in e&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),this.$router.push(e.redirectTo)),this.presences=e.data,this.totalRecords=e.total,this.loading=!1})},1e3*Math.random()+250)},onPage(e){this.lazyParams=e,this.loadLazyData()},onSort(e){var t=this.lazyParams.page;this.lazyParams=e,this.lazyParams.page=t,this.loadLazyData()},onFilter(){this.onsearchtimeout&&clearTimeout(this.onsearchtimeout),this.onsearchtimeout=setTimeout(()=>{this.lazyParams.filters=this.filters,this.loadLazyData()},1e3)},onSelectAllChange(e){const t=e.checked;t?this.presenceService.getPresences().then(e=>{"redirectTo"in e&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),this.$router.push(e.redirectTo)),this.selectAll=!0,this.selectedPresences=e.data}):(this.selectAll=!1,this.selectedPresences=[])},onRowSelect(){this.selectAll=this.selectedPresences.length===this.totalRecords},onRowUnselect(){this.selectAll=!1},openNew(){this.presence={},this.submitted=!1,this.presenceDialog=!0},editPresence(e){this.presence={...e},this.presenceDialog=!0},hideDialog(){this.presenceDialog=!1,this.submitted=!1},savePresence(){this.submitted=!0,this.presence.id?this.presenceService.updatePresence(this.presence).then(e=>{e.success?(this.presences[this.findIndexById(this.presence.id)]=this.presence,this.$swal({icon:"success",title:"Success",text:e.message}),this.presenceDialog=!1,this.presence={}):this.$swal({icon:"error",title:"Oops...",text:e.message})}):this.presenceService.createPresence(this.presence).then(e=>{e.success?(this.loadLazyData(),this.$swal({icon:"success",title:"Success",text:e.message}),this.presenceDialog=!1,this.presence={}):this.$swal({icon:"error",title:"Oops...",text:e.message})})},findIndexById(e){let t=-1;for(let s=0;s<this.presences.length;s++)if(this.presences[s].id===e){t=s;break}return t},initFilters(){this.filters={global:{value:null,matchMode:k["a"].CONTAINS}}},confirmDelete(e){this.presence=e,this.$swal({title:"Apakah anda yakin akan menghapus data ini ?",showCancelButton:!0,confirmButtonText:"Hapus"}).then(e=>{e.isConfirmed&&this.presenceService.deletePresence(this.presence).then(e=>{e.success?(this.presences=this.presences.filter(e=>e.id!==this.presence.id),this.$swal({icon:"success",title:"Success",text:e.message}),this.presenceDialog=!1,this.presence={}):this.$swal({icon:"error",title:"Oops...",text:e.message})})})}}},P=s("6b0d"),v=s.n(P);const w=v()(y,[["render",O]]);t["default"]=w}}]);
//# sourceMappingURL=chunk-38109550.f15e3c78.js.map