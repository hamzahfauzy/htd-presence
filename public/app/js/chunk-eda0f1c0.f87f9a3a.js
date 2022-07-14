(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eda0f1c0"],{"06d6":function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r("5530"),a=r("d4ec"),o=r("bee2"),i=(r("d3b7"),r("e9c4"),function(){function e(){Object(a["a"])(this,e)}return Object(o["a"])(e,[{key:"getEmployees",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r="";if(e){r="page="+(e.page+1)+"&per_page="+e.rows;var n=1==e.sortOrder?"asc":"desc";r+="&order_by="+n,null!=e.sortField&&(r+="&sort_by="+e.sortField),e.filters.global.value&&(r+="&keyword="+e.filters.global.value)}var a=JSON.parse(localStorage.getItem("presence_user_data"));return a.workunit_id&&(r+="&workunit_id="+a.workunit_id),t&&(r+="&workunit_id="+t),fetch("http://103.151.71.42/api/employees?"+r,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"getEmployeesReport",value:function(e,t){var r="";if(e){r="page="+(e.page+1)+"&per_page="+e.rows;var n=1==e.sortOrder?"asc":"desc";r+="&order_by="+n,null!=e.sortField&&(r+="&sort_by="+e.sortField),e.filters.global.value&&(r+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(r+="&date_start="+e.date_start+"&date_end="+e.date_end)}return fetch("http://103.151.71.42/api/employees/reports/"+t+"?"+r,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"getEmployeesReportDetail",value:function(e,t){var r="";if(e){r="page="+(e.page+1)+"&per_page="+e.rows;var n=1==e.sortOrder?"asc":"desc";r+="&order_by="+n,null!=e.sortField&&(r+="&sort_by="+e.sortField),e.filters.global.value&&(r+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(r+="&date_start="+e.date_start+"&date_end="+e.date_end)}return fetch("http://103.151.71.42/api/employees/report-details/"+t+"?"+r,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"getEmployee",value:function(e){return fetch("http://103.151.71.42/api/employees/"+e,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"getPresence",value:function(e,t){return fetch("http://103.151.71.42/api/employees/"+e+"/presences/"+t,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((function(e){return 401==e.status?{data:{redirectTo:"login"}}:e.json()})).then((function(e){return e.data}))}},{key:"updateEmployee",value:function(e){return fetch("http://103.151.71.42/api/employees/"+e.id+"/place",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({lat:e.lat,lng:e.lng,radius:e.radius})}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"updateRole",value:function(e,t){var r=Object(n["a"])({},e);return r.role=t,fetch("http://103.151.71.42/api/users/"+e.id,{method:"PUT",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(r)}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"addPlace",value:function(e,t){return fetch("http://103.151.71.42/api/employees/"+e.id+"/place",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(t)}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"deletePlace",value:function(e,t){return fetch("http://103.151.71.42/api/employees/"+e.id+"/place",{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({place_id:t.id})}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"patchPlace",value:function(e){return fetch("http://103.151.71.42/api/employees/"+e.id+"/place",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"resetDevice",value:function(e){return fetch("http://103.151.71.42/api/employees/"+e.id+"/reset-device",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"addWorktime",value:function(e,t){return fetch("http://103.151.71.42/api/employees/"+e.id+"/worktime",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(t)}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"deleteWorktime",value:function(e,t){return fetch("http://103.151.71.42/api/employees/"+e.id+"/worktime",{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({worktime_id:t.id})}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"actionPresence",value:function(e,t){return fetch("http://103.151.71.42/api/employees/"+t.employee_id+"/presences/"+t.id,{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({status:e})}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}},{key:"insertPresence",value:function(e,t){return fetch("http://103.151.71.42/api/employees/"+e+"/presences",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")},body:t}).then((function(e){return 401==e.status?{redirectTo:"Login"}:e.json()}))}}]),e}())},2404:function(e,t,r){"use strict";r.r(t);r("b0c0");var n=r("7a23"),a={class:"grid"},o={class:"col-12"},i={class:"card"},c=Object(n["j"])("div",{class:"font-medium text-3xl text-900 mb-3"},"Detail Absensi",-1),s={key:0,class:"list-none p-0 m-0"},l={class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},d=Object(n["j"])("div",{class:"text-500 w-6 md:w-2 font-medium"},"Pegawai",-1),p={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},u={class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},f=Object(n["j"])("div",{class:"text-500 w-6 md:w-2 font-medium"},"Jadwal",-1),m={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},b={class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},h=Object(n["j"])("div",{class:"text-500 w-6 md:w-2 font-medium"},"OPD",-1),j={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},g={class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},y=Object(n["j"])("div",{class:"text-500 w-6 md:w-2 font-medium"},"Tipe",-1),O={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},w={class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},v=Object(n["j"])("div",{class:"text-500 w-6 md:w-2 font-medium"},"Status",-1),x={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},_={class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},k=Object(n["j"])("div",{class:"text-500 w-6 md:w-2 font-medium"},"Waktu Mulai",-1),T={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},S={class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},P=Object(n["j"])("div",{class:"text-500 w-6 md:w-2 font-medium"},"Waktu Selesai",-1),I={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},L={class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},z=Object(n["j"])("div",{class:"text-500 w-6 md:w-2 font-medium"},"Tanggal",-1),B={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},D={class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},F=Object(n["j"])("div",{class:"text-500 w-6 md:w-2 font-medium"},"Selfi",-1),E={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},C=["src"],J={class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},U=Object(n["j"])("div",{class:"text-500 w-6 md:w-2 font-medium"},"Lampiran",-1),N={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},A=["href"];function W(e,t,r,W,H,R){var $;return Object(n["z"])(),Object(n["i"])("div",a,[Object(n["j"])("div",o,[Object(n["j"])("div",i,[c,H.presence.employee?(Object(n["z"])(),Object(n["i"])("ul",s,[Object(n["j"])("li",l,[d,Object(n["j"])("div",p,Object(n["L"])(H.presence.employee.nip+" - "+H.presence.employee.name),1)]),Object(n["j"])("li",u,[f,Object(n["j"])("div",m,Object(n["L"])(null===($=H.presence.worktime_item)||void 0===$?void 0:$.name),1)]),Object(n["j"])("li",b,[h,Object(n["j"])("div",j,Object(n["L"])(H.presence.workunit.name),1)]),Object(n["j"])("li",g,[y,Object(n["j"])("div",O,Object(n["L"])(H.presence.type),1)]),Object(n["j"])("li",w,[v,Object(n["j"])("div",x,Object(n["L"])(H.presence.status),1)]),Object(n["j"])("li",_,[k,Object(n["j"])("div",T,Object(n["L"])(H.presence.started_at),1)]),Object(n["j"])("li",S,[P,Object(n["j"])("div",I,Object(n["L"])(H.presence.finished_at),1)]),Object(n["j"])("li",L,[z,Object(n["j"])("div",B,Object(n["L"])(H.presence.created_at),1)]),Object(n["j"])("li",D,[F,Object(n["j"])("div",E,[H.presence.pic_url?(Object(n["z"])(),Object(n["i"])("img",{key:0,src:H.storage_url+H.presence.pic_url,style:{width:"250px"}},null,8,C)):Object(n["h"])("",!0)])]),Object(n["j"])("li",J,[U,Object(n["j"])("div",N,[H.presence.attachment_url?(Object(n["z"])(),Object(n["i"])("a",{key:0,href:H.storage_url+H.presence.attachment_url,target:"_blank"},"Download",8,A)):Object(n["h"])("",!0)])])])):Object(n["h"])("",!0)])])])}var H=r("06d6"),R={data:function(){return{employeeId:null,presenceId:null,presence:{},submitted:!1,storage_url:"http://103.151.71.42/storage/"}},employeeService:null,created:function(){this.presenceId=this.$route.params.id,this.employeeId=this.$route.params.employee_id,this.employeeService=new H["a"],this.initData()},methods:{initData:function(){var e=this;this.employeeService.getPresence(this.employeeId,this.presenceId).then((function(t){e.presence=t,console.log(t)}))}}},$=r("6b0d"),M=r.n($);const q=M()(R,[["render",W]]);t["default"]=q},"4de4":function(e,t,r){"use strict";var n=r("23e7"),a=r("b727").filter,o=r("1dde"),i=o("filter");n({target:"Array",proto:!0,forced:!i},{filter:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},5530:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r("b64b"),r("a4d3"),r("4de4"),r("d3b7"),r("e439"),r("159b"),r("dbb4");function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}},bee2:function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}r.d(t,"a",(function(){return a}))},d4ec:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r("d9e2");function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},dbb4:function(e,t,r){var n=r("23e7"),a=r("83ab"),o=r("56ef"),i=r("fc6a"),c=r("06cf"),s=r("8418");n({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(e){var t,r,n=i(e),a=c.f,l=o(n),d={},p=0;while(l.length>p)r=a(n,t=l[p++]),void 0!==r&&s(d,t,r);return d}})},e439:function(e,t,r){var n=r("23e7"),a=r("d039"),o=r("fc6a"),i=r("06cf").f,c=r("83ab"),s=a((function(){i(1)})),l=!c||s;n({target:"Object",stat:!0,forced:l,sham:!c},{getOwnPropertyDescriptor:function(e,t){return i(o(e),t)}})}}]);
//# sourceMappingURL=chunk-eda0f1c0.f87f9a3a.js.map