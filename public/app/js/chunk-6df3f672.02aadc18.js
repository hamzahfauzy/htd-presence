(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6df3f672"],{"4de4":function(e,t,n){"use strict";var r=n("23e7"),i=n("b727").filter,o=n("1dde"),a=o("filter");r({target:"Array",proto:!0,forced:!a},{filter:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},5530:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("b64b"),n("a4d3"),n("4de4"),n("d3b7"),n("e439"),n("159b"),n("dbb4");function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},a7e6:function(e,t,n){"use strict";n.r(t);n("b0c0");var r=n("7a23"),i={class:"grid"},o={class:"col-12"},a={class:"card"},l={class:"flex flex-column md:flex-row md:justify-content-between md:align-items-center"},c=Object(r["j"])("h5",{class:"m-0"},"Manajemen OPD / Unit Kerja",-1),u={class:"block mt-2 md:mt-0 p-input-icon-left"},s=Object(r["j"])("i",{class:"pi pi-search"},null,-1),d=Object(r["j"])("span",{class:"p-column-title"},"ID",-1),f=Object(r["j"])("span",{class:"p-column-title"},"Nama",-1),b={class:"field"},p=Object(r["j"])("label",{for:"name"},"Nama",-1),h={class:"field"},m=Object(r["j"])("label",{for:"lat"},"Latitute",-1),j={key:0,class:"p-invalid"},g={class:"field"},k=Object(r["j"])("label",{for:"lng"},"Longitude",-1),O={key:0,class:"p-invalid"},w={class:"field"},v=Object(r["j"])("label",{for:"lng"},"Radius",-1),y={key:0,class:"p-invalid"};function S(e,t,n,S,_,P){var D=Object(r["H"])("InputText"),R=Object(r["H"])("Column"),z=Object(r["H"])("router-link"),T=Object(r["H"])("Button"),L=Object(r["H"])("DataTable"),C=Object(r["H"])("Dialog");return Object(r["z"])(),Object(r["i"])("div",i,[Object(r["j"])("div",o,[Object(r["j"])("div",a,[Object(r["n"])(L,{value:_.workunits,lazy:!0,paginator:!0,rows:10,filters:_.filters,"onUpdate:filters":t[1]||(t[1]=function(e){return _.filters=e}),ref:"dt",dataKey:"id",totalRecords:_.totalRecords,loading:_.loading,onPage:t[2]||(t[2]=function(e){return P.onPage(e)}),onSort:t[3]||(t[3]=function(e){return P.onSort(e)}),onFilter:t[4]||(t[4]=function(e){return P.onFilter(e)}),globalFilterFields:["name"],responsiveLayout:"scroll",selection:e.selectedCustomers,"onUpdate:selection":t[5]||(t[5]=function(t){return e.selectedCustomers=t}),selectAll:_.selectAll,onSelectAllChange:P.onSelectAllChange,onRowSelect:P.onRowSelect,onRowUnselect:P.onRowUnselect},{header:Object(r["R"])((function(){return[Object(r["j"])("div",l,[c,Object(r["j"])("span",u,[s,Object(r["n"])(D,{modelValue:_.filters["global"].value,"onUpdate:modelValue":t[0]||(t[0]=function(e){return _.filters["global"].value=e}),placeholder:"Search...",onKeyup:P.onFilter},null,8,["modelValue","onKeyup"])])])]})),default:Object(r["R"])((function(){return[Object(r["n"])(R,{field:"id",header:"ID",sortable:!0},{body:Object(r["R"])((function(e){return[d,Object(r["m"])(" "+Object(r["L"])(e.data.id),1)]})),_:1}),Object(r["n"])(R,{field:"name",header:"Nama",filterMatchMode:"startsWith",ref:"name",sortable:!0,headerStyle:"width:20%; min-width:10rem;"},{body:Object(r["R"])((function(e){return[f,Object(r["n"])(z,{to:{name:"workunits.detail",params:{id:e.data.id}}},{default:Object(r["R"])((function(){return[Object(r["m"])(Object(r["L"])(e.data.name),1)]})),_:2},1032,["to"])]})),_:1},512),Object(r["n"])(R,{field:"lat",header:"Latitute",ref:"lat"},null,512),Object(r["n"])(R,{field:"lng",header:"Longitude",ref:"lng"},null,512),Object(r["n"])(R,{field:"radius",header:"Radius",ref:"radius"},null,512),Object(r["n"])(R,{header:"Aksi"},{body:Object(r["R"])((function(e){return[Object(r["n"])(T,{icon:"pi pi-pencil",class:"p-button-rounded p-button-success mr-2",onClick:function(t){return P.editWorkunit(e.data)}},null,8,["onClick"])]})),_:1})]})),_:1},8,["value","filters","totalRecords","loading","selection","selectAll","onSelectAllChange","onRowSelect","onRowUnselect"]),Object(r["n"])(C,{visible:_.workunitDialog,"onUpdate:visible":t[10]||(t[10]=function(e){return _.workunitDialog=e}),style:{width:"450px"},header:"Detail OPD",modal:!0,class:"p-fluid"},{footer:Object(r["R"])((function(){return[Object(r["n"])(T,{label:"Cancel",icon:"pi pi-times",class:"p-button-text",onClick:P.hideDialog},null,8,["onClick"]),Object(r["n"])(T,{label:"Save",icon:"pi pi-check",class:"p-button-text",onClick:P.saveWorkunit},null,8,["onClick"])]})),default:Object(r["R"])((function(){return[Object(r["j"])("div",b,[p,Object(r["n"])(D,{id:"name",modelValue:_.workunit.name,"onUpdate:modelValue":t[6]||(t[6]=function(e){return _.workunit.name=e}),modelModifiers:{trim:!0},required:"true",autofocus:"",disabled:""},null,8,["modelValue"])]),Object(r["j"])("div",h,[m,Object(r["n"])(D,{id:"lat",modelValue:_.workunit.lat,"onUpdate:modelValue":t[7]||(t[7]=function(e){return _.workunit.lat=e}),modelModifiers:{trim:!0},required:"true",autofocus:"",class:Object(r["u"])({"p-invalid":_.submitted&&!_.workunit.lat})},null,8,["modelValue","class"]),_.submitted&&!_.workunit.lat?(Object(r["z"])(),Object(r["i"])("small",j,"Latitute diperlukan.")):Object(r["h"])("",!0)]),Object(r["j"])("div",g,[k,Object(r["n"])(D,{id:"lng",modelValue:_.workunit.lng,"onUpdate:modelValue":t[8]||(t[8]=function(e){return _.workunit.lng=e}),modelModifiers:{trim:!0},required:"true",autofocus:"",class:Object(r["u"])({"p-invalid":_.submitted&&!_.workunit.lng})},null,8,["modelValue","class"]),_.submitted&&!_.workunit.lng?(Object(r["z"])(),Object(r["i"])("small",O,"Longitude diperlukan.")):Object(r["h"])("",!0)]),Object(r["j"])("div",w,[v,Object(r["n"])(D,{id:"lng",modelValue:_.workunit.radius,"onUpdate:modelValue":t[9]||(t[9]=function(e){return _.workunit.radius=e}),modelModifiers:{trim:!0},required:"true",autofocus:"",class:Object(r["u"])({"p-invalid":_.submitted&&!_.workunit.radius})},null,8,["modelValue","class"]),_.submitted&&!_.workunit.radius?(Object(r["z"])(),Object(r["i"])("small",y,"Radius diperlukan.")):Object(r["h"])("",!0)])]})),_:1},8,["visible"])])])])}var _=n("5530"),P=n("0393"),D=n("fca4"),R={data:function(){return{API_URL:"http://103.151.71.42/api/",loading:!1,totalRecords:0,workunits:null,workunit:{},selectedWorkunits:null,selectAll:!1,filters:{},lazyParams:{},columns:[{field:"id",header:"ID"},{field:"name",header:"Nama"},{field:"lat",header:"Latitute"},{field:"lng",header:"Longitude"},{field:"radius",header:"Radius"}],workunitDialog:!1,submitted:!1}},workunitService:null,created:function(){this.workunitService=new D["a"],this.initFilters()},mounted:function(){this.loading=!0,this.lazyParams={first:0,page:0,rows:this.$refs.dt.rows,sortField:null,sortOrder:1,filters:this.filters},this.loadLazyData()},methods:{loadLazyData:function(){var e=this;this.loading=!0,setTimeout((function(){e.workunitService.getWorkunits(e.lazyParams).then((function(t){"redirectTo"in t&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),e.$router.push(t.redirectTo)),e.workunits=t.data,e.totalRecords=t.total,e.loading=!1}))}),1e3*Math.random()+250)},onPage:function(e){this.lazyParams=e,this.loadLazyData()},onSort:function(e){var t=this.lazyParams.page;this.lazyParams=e,this.lazyParams.page=t,this.loadLazyData()},onFilter:function(){var e=this;this.onsearchtimeout&&clearTimeout(this.onsearchtimeout),this.onsearchtimeout=setTimeout((function(){e.lazyParams.filters=e.filters,e.loadLazyData()}),1e3)},onSelectAllChange:function(e){var t=this,n=e.checked;n?this.workunitService.getWorkunits().then((function(e){"redirectTo"in e&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),t.$router.push(e.redirectTo)),t.selectAll=!0,t.selectedWorkunits=e.data})):(this.selectAll=!1,this.selectedWorkunits=[])},onRowSelect:function(){this.selectAll=this.selectedWorkunits.length===this.totalRecords},onRowUnselect:function(){this.selectAll=!1},editWorkunit:function(e){this.workunit=Object(_["a"])({},e),this.workunitDialog=!0},hideDialog:function(){this.workunitDialog=!1,this.submitted=!1},saveWorkunit:function(){var e=this;this.submitted=!0,this.workunitService.updateWorkunit(this.workunit).then((function(t){t.success?(e.workunits[e.findIndexById(e.workunit.id)]=e.workunit,e.$swal({icon:"success",title:"Success",text:t.message}),e.workunitDialog=!1,e.workunit={}):e.$swal({icon:"error",title:"Oops...",text:t.message})}))},findIndexById:function(e){for(var t=-1,n=0;n<this.workunits.length;n++)if(this.workunits[n].id===e){t=n;break}return t},initFilters:function(){this.filters={global:{value:null,matchMode:P["a"].CONTAINS}}}}},z=n("6b0d"),T=n.n(z);const L=T()(R,[["render",S]]);t["default"]=L},bee2:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}n.d(t,"a",(function(){return i}))},d4ec:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n("d9e2");function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},dbb4:function(e,t,n){var r=n("23e7"),i=n("83ab"),o=n("56ef"),a=n("fc6a"),l=n("06cf"),c=n("8418");r({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(e){var t,n,r=a(e),i=l.f,u=o(r),s={},d=0;while(u.length>d)n=i(r,t=u[d++]),void 0!==n&&c(s,t,n);return s}})},e439:function(e,t,n){var r=n("23e7"),i=n("d039"),o=n("fc6a"),a=n("06cf").f,l=n("83ab"),c=i((function(){a(1)})),u=!l||c;r({target:"Object",stat:!0,forced:u,sham:!l},{getOwnPropertyDescriptor:function(e,t){return a(o(e),t)}})},fca4:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("d4ec"),i=n("bee2"),o=(n("d3b7"),n("e9c4"),function(){function e(){Object(r["a"])(this,e)}return Object(i["a"])(e,[{key:"getWorkunits",value:function(e){var t="";if(e){t="?page="+(e.page+1)+"&per_page="+e.rows;var n=1==e.sortOrder?"asc":"desc";t+="&order_by="+n,null!=e.sortField&&(t+="&sort_by="+e.sortField),e.filters.global.value&&(t+="&keyword="+e.filters.global.value)}else t="?all=1&order_by=asc";return fetch("http://103.151.71.42/api/workunits"+t,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"Login"}}:e.json()})).then((function(e){return e.data}))}},{key:"getWorkunit",value:function(e){return fetch("http://103.151.71.42/api/workunits/"+e,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"getPresences",value:function(e){return fetch("http://103.151.71.42/api/workunits/"+e+"/presences",{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"updateWorkunit",value:function(e){return fetch("http://103.151.71.42/api/workunits/"+e.id+"/place",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({lat:e.lat,lng:e.lng,radius:e.radius})}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"assignWorktime",value:function(e,t){return fetch("http://103.151.71.42/api/workunits/"+e.id+"/worktime",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({worktime_id:t.worktime_id})}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"deleteWorktime",value:function(e,t){return fetch("http://103.151.71.42/api/workunits/"+e.id+"/worktime",{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({worktime_id:t.id})}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}}]),e}())}}]);
//# sourceMappingURL=chunk-6df3f672.02aadc18.js.map