(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5dcce492"],{a7e6:function(e,t,a){"use strict";a.r(t);var i=a("7a23");const l={class:"grid"},o={class:"col-12"},s={class:"card"},r={class:"flex flex-column md:flex-row md:justify-content-between md:align-items-center"},n=Object(i["j"])("h5",{class:"m-0"},"Manajemen OPD / Unit Kerja",-1),d={class:"block mt-2 md:mt-0 p-input-icon-left"},c=Object(i["j"])("i",{class:"pi pi-search"},null,-1),u=Object(i["j"])("span",{class:"p-column-title"},"ID",-1),h=Object(i["j"])("span",{class:"p-column-title"},"Nama",-1),m={class:"field"},p=Object(i["j"])("label",{for:"name"},"Nama",-1),b={class:"field"},k=Object(i["j"])("label",{for:"lat"},"Latitute",-1),g={key:0,class:"p-invalid"},j={class:"field"},f=Object(i["j"])("label",{for:"lng"},"Longitude",-1),w={key:0,class:"p-invalid"},O={class:"field"},v=Object(i["j"])("label",{for:"lng"},"Radius",-1),y={key:0,class:"p-invalid"};function _(e,t,a,_,S,z){const D=Object(i["H"])("InputText"),L=Object(i["H"])("Column"),T=Object(i["H"])("router-link"),C=Object(i["H"])("Button"),I=Object(i["H"])("DataTable"),R=Object(i["H"])("Dialog");return Object(i["z"])(),Object(i["i"])("div",l,[Object(i["j"])("div",o,[Object(i["j"])("div",s,[Object(i["m"])(I,{value:S.workunits,lazy:!0,paginator:!0,rows:10,filters:S.filters,"onUpdate:filters":t[1]||(t[1]=e=>S.filters=e),ref:"dt",dataKey:"id",totalRecords:S.totalRecords,loading:S.loading,onPage:t[2]||(t[2]=e=>z.onPage(e)),onSort:t[3]||(t[3]=e=>z.onSort(e)),onFilter:t[4]||(t[4]=e=>z.onFilter(e)),globalFilterFields:["name"],responsiveLayout:"scroll",selection:e.selectedCustomers,"onUpdate:selection":t[5]||(t[5]=t=>e.selectedCustomers=t),selectAll:S.selectAll,onSelectAllChange:z.onSelectAllChange,onRowSelect:z.onRowSelect,onRowUnselect:z.onRowUnselect},{header:Object(i["S"])(()=>[Object(i["j"])("div",r,[n,Object(i["j"])("span",d,[c,Object(i["m"])(D,{modelValue:S.filters["global"].value,"onUpdate:modelValue":t[0]||(t[0]=e=>S.filters["global"].value=e),placeholder:"Search...",onKeyup:z.onFilter},null,8,["modelValue","onKeyup"])])])]),default:Object(i["S"])(()=>[Object(i["m"])(L,{field:"id",header:"ID",sortable:!0},{body:Object(i["S"])(e=>[u,Object(i["l"])(" "+Object(i["L"])(e.data.id),1)]),_:1}),Object(i["m"])(L,{field:"name",header:"Nama",filterMatchMode:"startsWith",ref:"name",sortable:!0,headerStyle:"width:20%; min-width:10rem;"},{body:Object(i["S"])(e=>[h,Object(i["m"])(T,{to:{name:"workunits.detail",params:{id:e.data.id}}},{default:Object(i["S"])(()=>[Object(i["l"])(Object(i["L"])(e.data.name),1)]),_:2},1032,["to"])]),_:1},512),Object(i["m"])(L,{field:"lat",header:"Latitute",ref:"lat"},null,512),Object(i["m"])(L,{field:"lng",header:"Longitude",ref:"lng"},null,512),Object(i["m"])(L,{field:"radius",header:"Radius",ref:"radius"},null,512),Object(i["m"])(L,{header:"Aksi"},{body:Object(i["S"])(e=>[Object(i["m"])(C,{icon:"pi pi-pencil",class:"p-button-rounded p-button-success mr-2",onClick:t=>z.editWorkunit(e.data)},null,8,["onClick"])]),_:1})]),_:1},8,["value","filters","totalRecords","loading","selection","selectAll","onSelectAllChange","onRowSelect","onRowUnselect"]),Object(i["m"])(R,{visible:S.workunitDialog,"onUpdate:visible":t[10]||(t[10]=e=>S.workunitDialog=e),style:{width:"450px"},header:"Detail OPD",modal:!0,class:"p-fluid"},{footer:Object(i["S"])(()=>[Object(i["m"])(C,{label:"Cancel",icon:"pi pi-times",class:"p-button-text",onClick:z.hideDialog},null,8,["onClick"]),Object(i["m"])(C,{label:"Save",icon:"pi pi-check",class:"p-button-text",onClick:z.saveWorkunit},null,8,["onClick"])]),default:Object(i["S"])(()=>[Object(i["j"])("div",m,[p,Object(i["m"])(D,{id:"name",modelValue:S.workunit.name,"onUpdate:modelValue":t[6]||(t[6]=e=>S.workunit.name=e),modelModifiers:{trim:!0},required:"true",autofocus:"",disabled:""},null,8,["modelValue"])]),Object(i["j"])("div",b,[k,Object(i["m"])(D,{id:"lat",modelValue:S.workunit.lat,"onUpdate:modelValue":t[7]||(t[7]=e=>S.workunit.lat=e),modelModifiers:{trim:!0},required:"true",autofocus:"",class:Object(i["t"])({"p-invalid":S.submitted&&!S.workunit.lat})},null,8,["modelValue","class"]),S.submitted&&!S.workunit.lat?(Object(i["z"])(),Object(i["i"])("small",g,"Latitute diperlukan.")):Object(i["h"])("",!0)]),Object(i["j"])("div",j,[f,Object(i["m"])(D,{id:"lng",modelValue:S.workunit.lng,"onUpdate:modelValue":t[8]||(t[8]=e=>S.workunit.lng=e),modelModifiers:{trim:!0},required:"true",autofocus:"",class:Object(i["t"])({"p-invalid":S.submitted&&!S.workunit.lng})},null,8,["modelValue","class"]),S.submitted&&!S.workunit.lng?(Object(i["z"])(),Object(i["i"])("small",w,"Longitude diperlukan.")):Object(i["h"])("",!0)]),Object(i["j"])("div",O,[v,Object(i["m"])(D,{id:"lng",modelValue:S.workunit.radius,"onUpdate:modelValue":t[9]||(t[9]=e=>S.workunit.radius=e),modelModifiers:{trim:!0},required:"true",autofocus:"",class:Object(i["t"])({"p-invalid":S.submitted&&!S.workunit.radius})},null,8,["modelValue","class"]),S.submitted&&!S.workunit.radius?(Object(i["z"])(),Object(i["i"])("small",y,"Radius diperlukan.")):Object(i["h"])("",!0)])]),_:1},8,["visible"])])])])}a("14d9");var S=a("0393"),z=a("fca4"),D={data(){return{API_URL:"http://103.151.71.42/api/",loading:!1,totalRecords:0,workunits:null,workunit:{},selectedWorkunits:null,selectAll:!1,filters:{},lazyParams:{},columns:[{field:"id",header:"ID"},{field:"name",header:"Nama"},{field:"lat",header:"Latitute"},{field:"lng",header:"Longitude"},{field:"radius",header:"Radius"}],workunitDialog:!1,submitted:!1}},workunitService:null,created(){this.workunitService=new z["a"],this.initFilters()},mounted(){this.loading=!0,this.lazyParams={first:0,page:0,rows:this.$refs.dt.rows,sortField:null,sortOrder:1,filters:this.filters},this.loadLazyData()},methods:{loadLazyData(){this.loading=!0,setTimeout(()=>{this.workunitService.getWorkunits(this.lazyParams).then(e=>{"redirectTo"in e&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),this.$router.push(e.redirectTo)),this.workunits=e.data,this.totalRecords=e.total,this.loading=!1})},1e3*Math.random()+250)},onPage(e){this.lazyParams=e,this.loadLazyData()},onSort(e){var t=this.lazyParams.page;this.lazyParams=e,this.lazyParams.page=t,this.loadLazyData()},onFilter(){this.onsearchtimeout&&clearTimeout(this.onsearchtimeout),this.onsearchtimeout=setTimeout(()=>{this.lazyParams.filters=this.filters,this.loadLazyData()},1e3)},onSelectAllChange(e){const t=e.checked;t?this.workunitService.getWorkunits().then(e=>{"redirectTo"in e&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),this.$router.push(e.redirectTo)),this.selectAll=!0,this.selectedWorkunits=e.data}):(this.selectAll=!1,this.selectedWorkunits=[])},onRowSelect(){this.selectAll=this.selectedWorkunits.length===this.totalRecords},onRowUnselect(){this.selectAll=!1},editWorkunit(e){this.workunit={...e},this.workunitDialog=!0},hideDialog(){this.workunitDialog=!1,this.submitted=!1},saveWorkunit(){this.submitted=!0,this.workunitService.updateWorkunit(this.workunit).then(e=>{e.success?(this.workunits[this.findIndexById(this.workunit.id)]=this.workunit,this.$swal({icon:"success",title:"Success",text:e.message}),this.workunitDialog=!1,this.workunit={}):this.$swal({icon:"error",title:"Oops...",text:e.message})})},findIndexById(e){let t=-1;for(let a=0;a<this.workunits.length;a++)if(this.workunits[a].id===e){t=a;break}return t},initFilters(){this.filters={global:{value:null,matchMode:S["a"].CONTAINS}}}}},L=a("6b0d"),T=a.n(L);const C=T()(D,[["render",_]]);t["default"]=C},fca4:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));class i{getWorkunits(e){var t="";if(e){t="?page="+(e.page+1)+"&per_page="+e.rows;var a=1==e.sortOrder?"asc":"desc";t+="&order_by="+a,null!=e.sortField&&(t+="&sort_by="+e.sortField),e.filters.global.value&&(t+="&keyword="+e.filters.global.value)}else t="?all=1&order_by=asc";return fetch("http://103.151.71.42/api/workunits"+t,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then(e=>401==e.status?{data:{redirectTo:"Login"}}:e.json()).then(e=>e.data)}getWorkunit(e){return fetch("http://103.151.71.42/api/workunits/"+e,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then(e=>401==e.status?{data:{redirectTo:"login"}}:e.json()).then(e=>e.data)}getPresences(e,t=!1,a=!1){var i="";if(e){i="page="+(e.page+1)+"&per_page="+e.rows;var l=1==e.sortOrder?"asc":"desc";i+="&order_by="+l,null!=e.sortField&&(i+="&sort_by="+e.sortField),e.filters.global.value&&(i+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(i+="&date_start="+e.date_start+"&date_end="+e.date_end)}a&&(i+="&type="+a);var o=t?"http://103.151.71.42/api/workunits/"+t+"/presences?"+i:"http://103.151.71.42/api/workunits/presences?"+i;return fetch(o,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then(e=>401==e.status?{data:{redirectTo:"login"}}:e.json()).then(e=>e.data)}updateWorkunit(e){return fetch("http://103.151.71.42/api/workunits/"+e.id+"/place",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({lat:e.lat,lng:e.lng,radius:e.radius})}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}assignWorktime(e,t){return fetch("http://103.151.71.42/api/workunits/"+e.id+"/worktime",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({worktime_id:t.worktime_id})}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}deleteWorktime(e,t){return fetch("http://103.151.71.42/api/workunits/"+e.id+"/worktime",{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({worktime_id:t.id})}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}}}}]);
//# sourceMappingURL=chunk-5dcce492.685c4069.js.map