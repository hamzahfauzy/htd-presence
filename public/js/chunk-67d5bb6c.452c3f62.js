(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67d5bb6c"],{"172d":function(e,t,r){"use strict";r.r(t);r("b0c0"),r("b64b");var n=r("7a23"),i={class:"grid"},o={class:"col-12"},a={class:"card"},c=Object(n["j"])("div",{class:"font-medium text-3xl text-900 mb-3"},"Detail OPD",-1),s={class:"list-none p-0 m-0"},u={class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},l=Object(n["j"])("div",{class:"text-500 w-6 md:w-2 font-medium"},"Nama",-1),d={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},f={class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},p=Object(n["j"])("div",{class:"text-500 w-6 md:w-2 font-medium"},"Latitude",-1),m={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},b={class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},k=Object(n["j"])("div",{class:"text-500 w-6 md:w-2 font-medium"},"Longitude",-1),h={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},w={class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},j=Object(n["j"])("div",{class:"text-500 w-6 md:w-2 font-medium"},"Radius",-1),g={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"};function O(e,t,r,O,v,y){var _=Object(n["H"])("DetailWorktime");return Object(n["z"])(),Object(n["i"])("div",i,[Object(n["j"])("div",o,[Object(n["j"])("div",a,[c,Object(n["j"])("ul",s,[Object(n["j"])("li",u,[l,Object(n["j"])("div",d,Object(n["L"])(v.workunit.name),1)]),Object(n["j"])("li",f,[p,Object(n["j"])("div",m,Object(n["L"])(v.workunit.lat),1)]),Object(n["j"])("li",b,[k,Object(n["j"])("div",h,Object(n["L"])(v.workunit.lng),1)]),Object(n["j"])("li",w,[j,Object(n["j"])("div",g,Object(n["L"])(v.workunit.radius),1)])])])]),0!=Object.keys(v.workunit).length?(Object(n["z"])(),Object(n["g"])(_,{key:0,workunit:v.workunit,workunitService:e.workunitService},null,8,["workunit","workunitService"])):Object(n["h"])("",!0)])}var v=r("fca4"),y={class:"col-12"},_={class:"card"},W={class:"my-2"},x=Object(n["j"])("div",{class:"flex flex-column md:flex-row md:justify-content-between md:align-items-center"},[Object(n["j"])("h5",{class:"m-0"},"Detail Jam Kerja")],-1),S=Object(n["j"])("span",{class:"p-column-title"},"ID",-1),D={class:"field"},T=Object(n["j"])("label",{for:"name"},"Jam Kerja",-1),I={key:0,class:"p-invalid"};function P(e,t,r,i,o,a){var c=Object(n["H"])("Button"),s=Object(n["H"])("Toolbar"),u=Object(n["H"])("Column"),l=Object(n["H"])("DataTable"),d=Object(n["H"])("Dropdown"),f=Object(n["H"])("Dialog");return Object(n["z"])(),Object(n["i"])("div",y,[Object(n["j"])("div",_,[Object(n["n"])(s,{class:"mb-4"},{start:Object(n["R"])((function(){return[Object(n["j"])("div",W,[Object(n["n"])(c,{label:"New",icon:"pi pi-plus",class:"p-button-success mr-2",onClick:a.openNew},null,8,["onClick"])])]})),_:1}),Object(n["n"])(l,{value:o.workunitWorktimes,ref:"dt",dataKey:"id",responsiveLayout:"scroll"},{header:Object(n["R"])((function(){return[x]})),default:Object(n["R"])((function(){return[Object(n["n"])(u,{field:"id",header:"ID",sortable:!0},{body:Object(n["R"])((function(e){return[S,Object(n["m"])(" "+Object(n["L"])(e.data.id),1)]})),_:1}),Object(n["n"])(u,{field:"name",header:"Nama"}),Object(n["n"])(u,{header:"Aksi"},{body:Object(n["R"])((function(e){return[e.data.id?(Object(n["z"])(),Object(n["g"])(c,{key:0,icon:"pi pi-trash",class:"p-button-rounded p-button-warning mt-2",onClick:function(t){return a.confirmDelete(e.data)}},null,8,["onClick"])):Object(n["h"])("",!0)]})),_:1})]})),_:1},8,["value"]),Object(n["n"])(f,{visible:o.workunitWorktimeDialog,"onUpdate:visible":t[1]||(t[1]=function(e){return o.workunitWorktimeDialog=e}),style:{width:"450px"},header:"Form Detail Jam Kerja",modal:!0,class:"p-fluid"},{footer:Object(n["R"])((function(){return[Object(n["n"])(c,{label:"Cancel",icon:"pi pi-times",class:"p-button-text",onClick:a.hideDialog},null,8,["onClick"]),Object(n["n"])(c,{label:"Save",icon:"pi pi-check",class:"p-button-text",onClick:a.saveWorktime},null,8,["onClick"])]})),default:Object(n["R"])((function(){return[Object(n["j"])("div",D,[T,Object(n["n"])(d,{modelValue:o.workunitWorktime.worktime_id,"onUpdate:modelValue":t[0]||(t[0]=function(e){return o.workunitWorktime.worktime_id=e}),options:o.worktimes,optionLabel:"name",optionValue:"id",placeholder:"Pilih Jam Kerja",class:Object(n["u"])({"p-invalid":o.submitted&&!o.workunitWorktime.worktime_id})},null,8,["modelValue","options","class"]),o.submitted&&!o.workunitWorktime.worktime_id?(Object(n["z"])(),Object(n["i"])("small",I,"Jam kerja diperlukan.")):Object(n["h"])("",!0)])]})),_:1},8,["visible"])])])}var C=r("5530"),L=(r("4de4"),r("d3b7"),r("7db0"),r("7467")),z={props:{workunit:{},workunitService:null},data:function(){return{loading:!1,worktimes:null,workunitWorktimes:null,workunitWorktime:{},filters:{},lazyParams:{},columns:[{field:"id",header:"ID"},{field:"name",header:"Nama"}],workunitWorktimeDialog:!1,submitted:!1}},worktimeService:null,created:function(){this.worktimeService=new L["a"],this.workunitWorktimes=this.workunit.worktimes},mounted:function(){this.initData()},methods:{initData:function(){var e=this;this.worktimeService.getAllWorktimes().then((function(t){e.worktimes=t}))},openNew:function(){this.workunitWorktime={},this.submitted=!1,this.workunitWorktimeDialog=!0},editPlace:function(e){this.workunitWorktime=Object(C["a"])({},e),this.workunitWorktimeDialog=!0},confirmDelete:function(e){var t=this;this.workunitWorktime=e,this.$swal({title:"Apakah anda yakin akan menghapus data ini ?",showCancelButton:!0,confirmButtonText:"Hapus"}).then((function(e){e.isConfirmed&&t.workunitService.deleteWorktime(t.workunit,t.workunitWorktime).then((function(e){"redirectTo"in e&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),t.$router.push(e.redirectTo)),e.success?(t.workunitWorktimes=t.workunitWorktimes.filter((function(e){return e.id!==t.workunitWorktime.id})),t.$swal({icon:"success",title:"Success",text:e.message}),t.workunitWorktimeDialog=!1,t.workunitWorktime={}):t.$swal({icon:"error",title:"Oops...",text:e.message})}))}))},hideDialog:function(){this.workunitWorktimeDialog=!1,this.submitted=!1},saveWorktime:function(){var e=this;this.submitted=!0,this.workunitService.assignWorktime(this.workunit,this.workunitWorktime).then((function(t){if("redirectTo"in t&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),e.$router.push(t.redirectTo)),t.success){e.$swal({icon:"success",title:"Success",text:t.message});var r=e.worktimes.find((function(t){return t.id===e.workunitWorktime.worktime_id}));e.workunitWorktimes=[{id:r.id,name:r.name}],e.workunitWorktimeDialog=!1,e.workunitWorktime={}}else e.$swal({icon:"error",title:"Oops...",text:t.message})}))},findIndexById:function(e){for(var t=-1,r=0;r<this.workunitWorktimes.length;r++)if(this.workunitWorktimes[r].id===e){t=r;break}return t}}},B=r("6b0d"),J=r.n(B);const N=J()(z,[["render",P]]);var F=N,H={components:{DetailWorktime:F},data:function(){return{workunitId:null,workunit:{},submitted:!1}},workunitService:null,created:function(){this.workunitId=this.$route.params.id,this.workunitService=new v["a"]},mounted:function(){this.initData()},methods:{initData:function(){var e=this;this.workunitService.getWorkunit(this.workunitId).then((function(t){e.workunit=t}))}}};const A=J()(H,[["render",O]]);t["default"]=A},"4de4":function(e,t,r){"use strict";var n=r("23e7"),i=r("b727").filter,o=r("1dde"),a=o("filter");n({target:"Array",proto:!0,forced:!a},{filter:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},5530:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r("b64b"),r("a4d3"),r("4de4"),r("d3b7"),r("e439"),r("159b"),r("dbb4");function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}},7467:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r("d4ec"),i=r("bee2"),o=(r("d3b7"),r("e9c4"),function(){function e(){Object(n["a"])(this,e)}return Object(i["a"])(e,[{key:"getWorktimes",value:function(e){var t="page="+(e.page+1)+"&per_page="+e.rows,r=1==e.sortOrder?"asc":"desc";return t+="&order_by="+r,null!=e.sortField&&(t+="&sort_by="+e.sortField),e.filters.global.value&&(t+="&keyword="+e.filters.global.value),fetch("http://103.151.71.42/api/worktimes?"+t,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"getAllWorktimes",value:function(){return fetch("http://103.151.71.42/api/worktimes?response=array",{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"createWorktime",value:function(e){return fetch("http://103.151.71.42/api/worktimes",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(e)}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"updateWorktime",value:function(e){return fetch("http://103.151.71.42/api/worktimes/"+e.id,{method:"PUT",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(e)}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"deleteWorktime",value:function(e){return fetch("http://103.151.71.42/api/worktimes/"+e.id,{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(e)}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}}]),e}())},"7db0":function(e,t,r){"use strict";var n=r("23e7"),i=r("b727").find,o=r("44d2"),a="find",c=!0;a in[]&&Array(1)[a]((function(){c=!1})),n({target:"Array",proto:!0,forced:c},{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),o(a)},b64b:function(e,t,r){var n=r("23e7"),i=r("7b0b"),o=r("df75"),a=r("d039"),c=a((function(){o(1)}));n({target:"Object",stat:!0,forced:c},{keys:function(e){return o(i(e))}})},bee2:function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}r.d(t,"a",(function(){return i}))},d4ec:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r("d9e2");function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},dbb4:function(e,t,r){var n=r("23e7"),i=r("83ab"),o=r("56ef"),a=r("fc6a"),c=r("06cf"),s=r("8418");n({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(e){var t,r,n=a(e),i=c.f,u=o(n),l={},d=0;while(u.length>d)r=i(n,t=u[d++]),void 0!==r&&s(l,t,r);return l}})},e439:function(e,t,r){var n=r("23e7"),i=r("d039"),o=r("fc6a"),a=r("06cf").f,c=r("83ab"),s=i((function(){a(1)})),u=!c||s;n({target:"Object",stat:!0,forced:u,sham:!c},{getOwnPropertyDescriptor:function(e,t){return a(o(e),t)}})},fca4:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r("d4ec"),i=r("bee2"),o=(r("d3b7"),r("e9c4"),function(){function e(){Object(n["a"])(this,e)}return Object(i["a"])(e,[{key:"getWorkunits",value:function(e){var t="";if(e){t="?page="+(e.page+1)+"&per_page="+e.rows;var r=1==e.sortOrder?"asc":"desc";t+="&order_by="+r,null!=e.sortField&&(t+="&sort_by="+e.sortField),e.filters.global.value&&(t+="&keyword="+e.filters.global.value)}else t="?all=1&order_by=asc";return fetch("http://103.151.71.42/api/workunits"+t,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"Login"}}:e.json()})).then((function(e){return e.data}))}},{key:"getWorkunit",value:function(e){return fetch("http://103.151.71.42/api/workunits/"+e,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"getPresences",value:function(e){return fetch("http://103.151.71.42/api/workunits/"+e+"/presences",{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"updateWorkunit",value:function(e){return fetch("http://103.151.71.42/api/workunits/"+e.id+"/place",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({lat:e.lat,lng:e.lng,radius:e.radius})}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"assignWorktime",value:function(e,t){return fetch("http://103.151.71.42/api/workunits/"+e.id+"/worktime",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({worktime_id:t.worktime_id})}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"deleteWorktime",value:function(e,t){return fetch("http://103.151.71.42/api/workunits/"+e.id+"/worktime",{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({worktime_id:t.id})}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}}]),e}())}}]);
//# sourceMappingURL=chunk-67d5bb6c.452c3f62.js.map