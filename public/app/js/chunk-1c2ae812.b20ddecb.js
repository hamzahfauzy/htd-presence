(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c2ae812"],{7467:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));class i{getWorktimes(e){var t="page="+(e.page+1)+"&per_page="+e.rows,a=1==e.sortOrder?"asc":"desc";return t+="&order_by="+a,null!=e.sortField&&(t+="&sort_by="+e.sortField),e.filters.global.value&&(t+="&keyword="+e.filters.global.value),fetch("https://sisapa.tanjungbalaikota.go.id/api/worktimes?"+t,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then(e=>401==e.status?{data:{redirectTo:"login"}}:e.json()).then(e=>e.data)}getAllWorktimes(){return fetch("https://sisapa.tanjungbalaikota.go.id/api/worktimes?response=array",{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then(e=>401==e.status?{data:{redirectTo:"login"}}:e.json()).then(e=>e.data)}createWorktime(e){return fetch("https://sisapa.tanjungbalaikota.go.id/api/worktimes",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(e)}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}updateWorktime(e){return fetch("https://sisapa.tanjungbalaikota.go.id/api/worktimes/"+e.id,{method:"PUT",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(e)}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}deleteWorktime(e){return fetch("https://sisapa.tanjungbalaikota.go.id/api/worktimes/"+e.id,{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(e)}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}}},d741:function(e,t,a){"use strict";a.r(t);var i=a("7a23");const s={class:"grid"},o={class:"col-12"},l={class:"card"},r={class:"my-2"},n={class:"flex flex-column md:flex-row md:justify-content-between md:align-items-center"},c=Object(i["j"])("h5",{class:"m-0"},"Manajemen Jam Kerja",-1),d={class:"block mt-2 md:mt-0 p-input-icon-left"},m=Object(i["j"])("i",{class:"pi pi-search"},null,-1),h=Object(i["j"])("span",{class:"p-column-title"},"ID",-1),u=Object(i["j"])("span",{class:"p-column-title"},"Nama",-1),p={class:"field"},k=Object(i["j"])("label",{for:"name"},"Nama",-1),b={key:0,class:"p-invalid"};function g(e,t,a,g,w,j){const O=Object(i["H"])("Button"),f=Object(i["H"])("Toolbar"),S=Object(i["H"])("InputText"),y=Object(i["H"])("Column"),v=Object(i["H"])("router-link"),_=Object(i["H"])("DataTable"),D=Object(i["H"])("Dialog");return Object(i["z"])(),Object(i["i"])("div",s,[Object(i["j"])("div",o,[Object(i["j"])("div",l,[Object(i["m"])(f,{class:"mb-4"},{start:Object(i["S"])(()=>[Object(i["j"])("div",r,[Object(i["m"])(O,{label:"New",icon:"pi pi-plus",class:"p-button-success mr-2",onClick:j.openNew},null,8,["onClick"])])]),_:1}),Object(i["m"])(_,{value:w.worktimes,lazy:!0,paginator:!0,rows:10,ref:"dt",dataKey:"id",filters:w.filters,"onUpdate:filters":t[1]||(t[1]=e=>w.filters=e),totalRecords:w.totalRecords,loading:w.loading,onPage:t[2]||(t[2]=e=>j.onPage(e)),onSort:t[3]||(t[3]=e=>j.onSort(e)),onFilter:t[4]||(t[4]=e=>j.onFilter(e)),globalFilterFields:["name"],selection:e.selectedCustomers,"onUpdate:selection":t[5]||(t[5]=t=>e.selectedCustomers=t),selectAll:w.selectAll,onSelectAllChange:j.onSelectAllChange,onRowSelect:j.onRowSelect,onRowUnselect:j.onRowUnselect,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} products",responsiveLayout:"scroll"},{header:Object(i["S"])(()=>[Object(i["j"])("div",n,[c,Object(i["j"])("span",d,[m,Object(i["m"])(S,{modelValue:w.filters["global"].value,"onUpdate:modelValue":t[0]||(t[0]=e=>w.filters["global"].value=e),placeholder:"Search...",onKeyup:j.onFilter},null,8,["modelValue","onKeyup"])])])]),default:Object(i["S"])(()=>[Object(i["m"])(y,{field:"id",header:"ID",sortable:!0},{body:Object(i["S"])(e=>[h,Object(i["l"])(" "+Object(i["L"])(e.data.id),1)]),_:1}),Object(i["m"])(y,{field:"name",header:"Nama"},{body:Object(i["S"])(e=>[u,Object(i["m"])(v,{to:{name:"worktimes.detail",params:{id:e.data.id}}},{default:Object(i["S"])(()=>[Object(i["l"])(Object(i["L"])(e.data.name),1)]),_:2},1032,["to"])]),_:1}),Object(i["m"])(y,{header:"Aksi"},{body:Object(i["S"])(e=>[Object(i["m"])(O,{icon:"pi pi-pencil",class:"p-button-rounded p-button-success mr-2",onClick:t=>j.editWorktime(e.data)},null,8,["onClick"]),e.data.id?(Object(i["z"])(),Object(i["g"])(O,{key:0,icon:"pi pi-trash",class:"p-button-rounded p-button-warning mt-2",onClick:t=>j.confirmDelete(e.data)},null,8,["onClick"])):Object(i["h"])("",!0)]),_:1})]),_:1},8,["value","filters","totalRecords","loading","selection","selectAll","onSelectAllChange","onRowSelect","onRowUnselect"]),Object(i["m"])(D,{visible:w.worktimeDialog,"onUpdate:visible":t[7]||(t[7]=e=>w.worktimeDialog=e),style:{width:"450px"},header:"Form Jam Kerja",modal:!0,class:"p-fluid"},{footer:Object(i["S"])(()=>[Object(i["m"])(O,{label:"Cancel",icon:"pi pi-times",class:"p-button-text",onClick:j.hideDialog},null,8,["onClick"]),Object(i["m"])(O,{label:"Save",icon:"pi pi-check",class:"p-button-text",onClick:j.saveWorktime},null,8,["onClick"])]),default:Object(i["S"])(()=>[Object(i["j"])("div",p,[k,Object(i["m"])(S,{id:"name",modelValue:w.worktime.name,"onUpdate:modelValue":t[6]||(t[6]=e=>w.worktime.name=e),modelModifiers:{trim:!0},required:"true",autofocus:"",class:Object(i["t"])({"p-invalid":w.submitted&&!w.worktime.name})},null,8,["modelValue","class"]),w.submitted&&!w.worktime.name?(Object(i["z"])(),Object(i["i"])("small",b,"Nama diperlukan.")):Object(i["h"])("",!0)])]),_:1},8,["visible"])])])])}a("14d9");var w=a("0393"),j=a("7467"),O={data(){return{loading:!1,onsearchtimeout:null,totalRecords:0,worktimes:null,worktime:{},selectedWorktimes:null,selectAll:!1,filters:{},lazyParams:{},columns:[{field:"id",header:"ID"},{field:"name",header:"Nama"}],worktimeDialog:!1,submitted:!1}},worktimeService:null,created(){this.worktimeService=new j["a"],this.initFilters()},mounted(){this.loading=!0,this.lazyParams={first:0,page:0,rows:this.$refs.dt.rows,sortField:null,sortOrder:1,filters:this.filters},this.loadLazyData()},methods:{openNew(){this.worktime={},this.submitted=!1,this.worktimeDialog=!0},loadLazyData(){this.loading=!0,setTimeout(()=>{this.worktimeService.getWorktimes(this.lazyParams).then(e=>{"redirectTo"in e&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),this.$router.push(e.redirectTo)),this.worktimes=e.data,this.totalRecords=e.total,this.loading=!1})},1e3*Math.random()+250)},onPage(e){this.lazyParams=e,this.loadLazyData()},onSort(e){var t=this.lazyParams.page;this.lazyParams=e,this.lazyParams.page=t,this.loadLazyData()},onFilter(){this.onsearchtimeout&&clearTimeout(this.onsearchtimeout),this.onsearchtimeout=setTimeout(()=>{this.lazyParams.filters=this.filters,this.loadLazyData()},1e3)},onSelectAllChange(e){const t=e.checked;t?this.worktimeService.getWorktimes().then(e=>{"redirectTo"in e&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),this.$router.push(e.redirectTo)),this.selectAll=!0,this.selectedWorktimes=e.data}):(this.selectAll=!1,this.selectedWorktimes=[])},onRowSelect(){this.selectAll=this.selectedWorktimes.length===this.totalRecords},onRowUnselect(){this.selectAll=!1},editWorktime(e){this.worktime={...e},this.worktimeDialog=!0},confirmDelete(e){this.worktime=e,this.$swal({title:"Apakah anda yakin akan menghapus data ini ?",showCancelButton:!0,confirmButtonText:"Hapus"}).then(e=>{e.isConfirmed&&this.worktimeService.deleteWorktime(this.worktime).then(e=>{e.success?(this.worktimes=this.worktimes.filter(e=>e.id!==this.worktime.id),this.$swal({icon:"success",title:"Success",text:e.message}),this.worktimeDialog=!1,this.worktime={}):this.$swal({icon:"error",title:"Oops...",text:e.message})})})},hideDialog(){this.worktimeDialog=!1,this.submitted=!1},saveWorktime(){this.submitted=!0,this.worktime.id?this.worktimeService.updateWorktime(this.worktime).then(e=>{e.success?(this.loadLazyData(),this.$swal({icon:"success",title:"Success",text:e.message}),this.worktimeDialog=!1,this.worktime={}):this.$swal({icon:"error",title:"Oops...",text:e.message})}):this.worktimeService.createWorktime(this.worktime).then(e=>{e.success?(this.loadLazyData(),this.worktimeDialog=!1,this.worktime={},this.$swal({icon:"success",title:"Success",text:e.message})):this.$swal({icon:"error",title:"Oops...",text:e.message})})},findIndexById(e){let t=-1;for(let a=0;a<this.worktimes.length;a++)if(this.worktimes[a].id===e){t=a;break}return t},initFilters(){this.filters={global:{value:null,matchMode:w["a"].CONTAINS}}}}},f=a("6b0d"),S=a.n(f);const y=S()(O,[["render",g]]);t["default"]=y}}]);
//# sourceMappingURL=chunk-1c2ae812.b20ddecb.js.map