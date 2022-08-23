(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bfd2adfc"],{"06d6":function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r("5530"),a=r("d4ec"),o=r("bee2"),c=(r("d3b7"),r("e9c4"),function(){function e(){Object(a["a"])(this,e)}return Object(o["a"])(e,[{key:"getEmployees",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r="";if(e){r="page="+(e.page+1)+"&per_page="+e.rows;var n=1==e.sortOrder?"asc":"desc";r+="&order_by="+n,null!=e.sortField&&(r+="&sort_by="+e.sortField),e.filters.global.value&&(r+="&keyword="+e.filters.global.value)}var a=JSON.parse(localStorage.getItem("presence_user_data"));return a.workunit_id&&(r+="&workunit_id="+a.workunit_id),t&&(r+="&workunit_id="+t),fetch("http://103.151.71.42/api/employees?"+r,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"getEmployeesReport",value:function(e,t){var r="";if(e){r="page="+(e.page+1)+"&per_page="+e.rows;var n=1==e.sortOrder?"asc":"desc";r+="&order_by="+n,null!=e.sortField&&(r+="&sort_by="+e.sortField),e.filters.global.value&&(r+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(r+="&date_start="+e.date_start+"&date_end="+e.date_end)}return fetch("http://103.151.71.42/api/employees/reports/"+t+"?"+r,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"getEmployeesReportDetail",value:function(e,t){var r="";if(e){r="page="+(e.page+1)+"&per_page="+e.rows;var n=1==e.sortOrder?"asc":"desc";r+="&order_by="+n,null!=e.sortField&&(r+="&sort_by="+e.sortField),e.filters.global.value&&(r+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(r+="&date_start="+e.date_start+"&date_end="+e.date_end)}return fetch("http://103.151.71.42/api/employees/report-details/"+t+"?"+r,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"getEmployeesReportPdfLink",value:function(e,t){var r="";if(e){var n=1==e.sortOrder?"asc":"desc";r+="&order_by="+n,null!=e.sortField&&(r+="&sort_by="+e.sortField),e.filters.global.value&&(r+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(r+="&date_start="+e.date_start+"&date_end="+e.date_end)}return"http://103.151.71.42/api/employees/report-pdf/"+t+"?"+r}},{key:"getEmployeesReportDetailPdfLink",value:function(e,t){var r="";if(e){var n=1==e.sortOrder?"asc":"desc";r+="&order_by="+n,null!=e.sortField&&(r+="&sort_by="+e.sortField),e.filters.global.value&&(r+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(r+="&date_start="+e.date_start+"&date_end="+e.date_end)}return"http://103.151.71.42/api/employees/report-detail-pdf/"+t+"?"+r}},{key:"getEmployee",value:function(e){return fetch("http://103.151.71.42/api/employees/"+e,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"getPresence",value:function(e,t){return fetch("http://103.151.71.42/api/employees/"+e+"/presences/"+t,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"updateEmployee",value:function(e){return fetch("http://103.151.71.42/api/employees/"+e.id+"/place",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({lat:e.lat,lng:e.lng,radius:e.radius})}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"updateRole",value:function(e,t){var r=Object(n["a"])({},e);return r.role=t,fetch("http://103.151.71.42/api/users/"+e.id,{method:"PUT",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(r)}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"addPlace",value:function(e,t){return fetch("http://103.151.71.42/api/employees/"+e.id+"/place",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(t)}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"deletePlace",value:function(e,t){return fetch("http://103.151.71.42/api/employees/"+e.id+"/place",{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({place_id:t.id})}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"patchPlace",value:function(e){return fetch("http://103.151.71.42/api/employees/"+e.id+"/place",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"resetDevice",value:function(e){return fetch("http://103.151.71.42/api/employees/"+e.id+"/reset-device",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"addWorktime",value:function(e,t){return fetch("http://103.151.71.42/api/employees/"+e.id+"/worktime",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(t)}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"deleteWorktime",value:function(e,t){return fetch("http://103.151.71.42/api/employees/"+e.id+"/worktime",{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({worktime_id:t.id})}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"actionPresence",value:function(e,t){return fetch("http://103.151.71.42/api/employees/"+t.employee_id+"/presences/"+t.id,{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({status:e})}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"insertPresence",value:function(e,t){return fetch("http://103.151.71.42/api/employees/"+e+"/presences",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")},body:t}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}}]),e}())},2404:function(e,t,r){"use strict";r.r(t);r("b0c0");var n=r("7a23"),a={class:"grid"},o={class:"col-12"},c={class:"card"},i={class:"flex justify-content-between mb-3 align-items-center"},s={class:"font-medium text-3xl text-900"},l={key:0,class:"list-none p-0 m-0"},d={class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},p=Object(n["j"])("div",{class:"text-500 w-6 md:w-2 font-medium"},"Pegawai",-1),u={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},f={key:0,class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},b=Object(n["j"])("div",{class:"text-500 w-6 md:w-2 font-medium"},"Jadwal",-1),m={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},j={class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},h=Object(n["j"])("div",{class:"text-500 w-6 md:w-2 font-medium"},"OPD",-1),y={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},g={class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},O=Object(n["j"])("div",{class:"text-500 w-6 md:w-2 font-medium"},"Tipe",-1),w={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},_={key:1,class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},v=Object(n["j"])("div",{class:"text-500 w-6 md:w-2 font-medium"},"Di lokasi",-1),x={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},k={class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},S=Object(n["j"])("div",{class:"text-500 w-6 md:w-2 font-medium"},"Status",-1),T={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},P={key:2,class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},I=Object(n["j"])("div",{class:"text-500 w-6 md:w-2 font-medium"},"Waktu Mulai",-1),F={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},A={key:3,class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},B=Object(n["j"])("div",{class:"text-500 w-6 md:w-2 font-medium"},"Waktu Selesai",-1),D={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},C={class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},z=Object(n["j"])("div",{class:"text-500 w-6 md:w-2 font-medium"},"Tanggal",-1),L={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},E={key:4,class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},J=Object(n["j"])("div",{class:"text-500 w-6 md:w-2 font-medium"},"Selfi",-1),M={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},U=["src"],N={class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},R=Object(n["j"])("div",{class:"text-500 w-6 md:w-2 font-medium"},"Lampiran",-1),$={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},W=["href"],H={key:5,class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},Y=Object(n["j"])("div",{class:"text-500 w-6 md:w-2 font-medium"},"Lokasi",-1),q={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},G=["src"];function K(e,t,r,K,Q,V){var X,Z=Object(n["I"])("Button");return Object(n["A"])(),Object(n["i"])("div",a,[Object(n["j"])("div",o,[Object(n["j"])("div",c,[Object(n["j"])("div",i,[Object(n["j"])("div",s,"Detail "+Object(n["M"])(Q.presence.presence_id?"Absensi":"Cuti"),1),Object(n["j"])("div",null,["diajukan"==Q.presence.status?(Object(n["A"])(),Object(n["g"])(Z,{key:0,icon:"pi pi-check",class:"p-button-rounded p-button-success mr-2",onClick:t[0]||(t[0]=function(e){return V.action("setujui",Q.presence)})})):Object(n["h"])("",!0),"diajukan"==Q.presence.status?(Object(n["A"])(),Object(n["g"])(Z,{key:1,icon:"pi pi-times",class:"p-button-rounded p-button-danger mr-2",onClick:t[1]||(t[1]=function(e){return V.action("tolak",Q.presence)})})):Object(n["h"])("",!0)])]),Q.presence.employee?(Object(n["A"])(),Object(n["i"])("ul",l,[Object(n["j"])("li",d,[p,Object(n["j"])("div",u,Object(n["M"])(Q.presence.employee.nip+" - "+Q.presence.employee.name),1)]),Q.presence.presence_id?(Object(n["A"])(),Object(n["i"])("li",f,[b,Object(n["j"])("div",m,Object(n["M"])(null===(X=Q.presence.worktime_item)||void 0===X?void 0:X.name),1)])):Object(n["h"])("",!0),Object(n["j"])("li",j,[h,Object(n["j"])("div",y,Object(n["M"])(Q.presence.workunit.name),1)]),Object(n["j"])("li",g,[O,Object(n["j"])("div",w,Object(n["M"])(Q.presence.type),1)]),Q.presence.presence_id?(Object(n["A"])(),Object(n["i"])("li",_,[v,Object(n["j"])("div",x,Object(n["M"])(1==Q.presence.in_location?"Ya":"Tidak"),1)])):Object(n["h"])("",!0),Object(n["j"])("li",k,[S,Object(n["j"])("div",T,Object(n["M"])(Q.presence.status),1)]),null==Q.presence.presence_id?(Object(n["A"])(),Object(n["i"])("li",P,[I,Object(n["j"])("div",F,Object(n["M"])(Q.presence.started_at),1)])):Object(n["h"])("",!0),null==Q.presence.presence_id?(Object(n["A"])(),Object(n["i"])("li",A,[B,Object(n["j"])("div",D,Object(n["M"])(Q.presence.finished_at),1)])):Object(n["h"])("",!0),Object(n["j"])("li",C,[z,Object(n["j"])("div",L,Object(n["M"])(Q.presence.created_at),1)]),Q.presence.presence_id?(Object(n["A"])(),Object(n["i"])("li",E,[J,Object(n["j"])("div",M,[Q.presence.pic_url?(Object(n["A"])(),Object(n["i"])("img",{key:0,src:Q.storage_url+Q.presence.pic_url,style:{width:"250px"}},null,8,U)):Object(n["h"])("",!0)])])):Object(n["h"])("",!0),Object(n["j"])("li",N,[R,Object(n["j"])("div",$,[Q.presence.attachment_url?(Object(n["A"])(),Object(n["i"])("a",{key:0,href:Q.storage_url+Q.presence.attachment_url,target:"_blank"},"Download",8,W)):Object(n["h"])("",!0)])]),Q.presence.presence_id?(Object(n["A"])(),Object(n["i"])("li",H,[Y,Object(n["j"])("div",q,[Object(n["j"])("iframe",{width:"500",height:"300",src:"//maps.google.com/maps?q="+Q.presence.lat+","+Q.presence.lng+"&z=15&output=embed",allowfullscreen:"",style:{border:"0"},referrerpolicy:"no-referrer-when-downgrade"},null,8,G)])])):Object(n["h"])("",!0)])):Object(n["h"])("",!0)])])])}var Q=r("06d6"),V={data:function(){return{employeeId:null,presenceId:null,presence:{},submitted:!1,storage_url:"http://103.151.71.42/storage/"}},employeeService:null,created:function(){this.presenceId=this.$route.params.id,this.employeeId=this.$route.params.employee_id,this.employeeService=new Q["a"],this.initData()},methods:{initData:function(){var e=this;this.employeeService.getPresence(this.employeeId,this.presenceId).then((function(t){e.presence=t,console.log(t)}))},action:function(e,t){var r=this;this.$swal({title:"Apakah anda yakin akan "+e+" data ini ?",showCancelButton:!0,confirmButtonText:"Ya"}).then((function(n){n.isConfirmed&&r.employeeService.actionPresence("di"+e,t).then((function(e){e.success?(r.$swal({icon:"success",title:"Success",text:e.message}),r.initData()):r.$swal({icon:"error",title:"Oops...",text:e.message})}))}))}}},X=r("6b0d"),Z=r.n(X);const ee=Z()(V,[["render",K]]);t["default"]=ee},"4de4":function(e,t,r){"use strict";var n=r("23e7"),a=r("b727").filter,o=r("1dde"),c=o("filter");n({target:"Array",proto:!0,forced:!c},{filter:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},5530:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r("b64b"),r("a4d3"),r("4de4"),r("d3b7"),r("e439"),r("159b"),r("dbb4");function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}},dbb4:function(e,t,r){var n=r("23e7"),a=r("83ab"),o=r("56ef"),c=r("fc6a"),i=r("06cf"),s=r("8418");n({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(e){var t,r,n=c(e),a=i.f,l=o(n),d={},p=0;while(l.length>p)r=a(n,t=l[p++]),void 0!==r&&s(d,t,r);return d}})},e439:function(e,t,r){var n=r("23e7"),a=r("d039"),o=r("fc6a"),c=r("06cf").f,i=r("83ab"),s=a((function(){c(1)})),l=!i||s;n({target:"Object",stat:!0,forced:l,sham:!i},{getOwnPropertyDescriptor:function(e,t){return c(o(e),t)}})}}]);
//# sourceMappingURL=chunk-bfd2adfc.2687970d.js.map