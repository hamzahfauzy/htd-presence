(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13285b0a"],{"06d6":function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));class a{getEmployees(e,t=!1){var r="";if(e){r="page="+(e.page+1)+"&per_page="+e.rows;var a=1==e.sortOrder?"asc":"desc";r+="&order_by="+a,null!=e.sortField&&(r+="&sort_by="+e.sortField),e.filters.global.value&&(r+="&keyword="+e.filters.global.value)}var s=JSON.parse(localStorage.getItem("presence_user_data"));return s.workunit_id&&(r+="&workunit_id="+s.workunit_id),t&&(r+="&workunit_id="+t),fetch("http://103.151.71.42/api/employees?"+r,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then(e=>401==e.status?{data:{redirectTo:"login"}}:e.json()).then(e=>e.data)}getEmployeesReport(e,t){var r="";if(e){r="page="+(e.page+1)+"&per_page="+e.rows;var a=1==e.sortOrder?"asc":"desc";r+="&order_by="+a,null!=e.sortField&&(r+="&sort_by="+e.sortField),e.filters.global.value&&(r+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(r+="&date_start="+e.date_start+"&date_end="+e.date_end)}return fetch("http://103.151.71.42/api/employees/reports/"+t+"?"+r,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then(e=>401==e.status?{data:{redirectTo:"login"}}:e.json()).then(e=>e.data)}getEmployeesReportDetail(e,t){var r="";if(e){r="page="+(e.page+1)+"&per_page="+e.rows;var a=1==e.sortOrder?"asc":"desc";r+="&order_by="+a,null!=e.sortField&&(r+="&sort_by="+e.sortField),e.filters.global.value&&(r+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(r+="&date_start="+e.date_start+"&date_end="+e.date_end)}return fetch("http://103.151.71.42/api/employees/report-details/"+t+"?"+r,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then(e=>401==e.status?{data:{redirectTo:"login"}}:e.json()).then(e=>e.data)}getEmployeesReportPdfLink(e,t){var r="";if(e){var a=1==e.sortOrder?"asc":"desc";r+="&order_by="+a,null!=e.sortField&&(r+="&sort_by="+e.sortField),e.filters.global.value&&(r+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(r+="&date_start="+e.date_start+"&date_end="+e.date_end)}return"http://103.151.71.42/api/employees/report-pdf/"+t+"?"+r}getEmployeesReportDetailPdfLink(e,t){var r="";if(e){var a=1==e.sortOrder?"asc":"desc";r+="&order_by="+a,null!=e.sortField&&(r+="&sort_by="+e.sortField),e.filters.global.value&&(r+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(r+="&date_start="+e.date_start+"&date_end="+e.date_end)}return"http://103.151.71.42/api/employees/report-detail-pdf/"+t+"?"+r}getEmployee(e){return fetch("http://103.151.71.42/api/employees/"+e,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then(e=>401==e.status?{data:{redirectTo:"login"}}:e.json()).then(e=>e.data)}getPresence(e,t){return fetch("http://103.151.71.42/api/employees/"+e+"/presences/"+t,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then(e=>401==e.status?{data:{redirectTo:"login"}}:e.json()).then(e=>e.data)}updateEmployee(e){return fetch("http://103.151.71.42/api/employees/"+e.id+"/place",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({lat:e.lat,lng:e.lng,radius:e.radius})}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}updateRole(e,t){var r={...e};return r.role=t,fetch("http://103.151.71.42/api/users/"+e.id,{method:"PUT",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(r)}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}addPlace(e,t){return fetch("http://103.151.71.42/api/employees/"+e.id+"/place",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(t)}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}deletePlace(e,t){return fetch("http://103.151.71.42/api/employees/"+e.id+"/place",{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({place_id:t.id})}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}patchPlace(e){return fetch("http://103.151.71.42/api/employees/"+e.id+"/place",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"}}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}patchAndroid(e){return fetch("http://103.151.71.42/api/employees/"+e.id+"/android-user",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"}}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}resetDevice(e){return fetch("http://103.151.71.42/api/employees/"+e.id+"/reset-device",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"}}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}addWorktime(e,t){return fetch("http://103.151.71.42/api/employees/"+e.id+"/worktime",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(t)}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}deleteWorktime(e,t){return fetch("http://103.151.71.42/api/employees/"+e.id+"/worktime",{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({worktime_id:t.id})}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}actionPresence(e,t){return fetch("http://103.151.71.42/api/employees/"+t.employee_id+"/presences/"+t.id,{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({status:e})}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}insertPresence(e,t){return fetch("http://103.151.71.42/api/employees/"+e+"/presences",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")},body:t}).then(e=>401==e.status?{redirectTo:"Login"}:e.json())}}},2404:function(e,t,r){"use strict";r.r(t);var a=r("7a23");const s={class:"grid"},o={class:"col-12"},l={class:"card"},n={class:"flex justify-content-between mb-3 align-items-center"},i={class:"font-medium text-3xl text-900"},c={key:0,class:"list-none p-0 m-0"},d={class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},p=Object(a["j"])("div",{class:"text-500 w-6 md:w-2 font-medium"},"Pegawai",-1),u={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},m={key:0,class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},h=Object(a["j"])("div",{class:"text-500 w-6 md:w-2 font-medium"},"Jadwal",-1),b={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},j={class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},f=Object(a["j"])("div",{class:"text-500 w-6 md:w-2 font-medium"},"OPD",-1),g={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},y={class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},O=Object(a["j"])("div",{class:"text-500 w-6 md:w-2 font-medium"},"Tipe",-1),_={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},w={key:1,class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},x=Object(a["j"])("div",{class:"text-500 w-6 md:w-2 font-medium"},"Di lokasi",-1),k={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},v={class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},T=Object(a["j"])("div",{class:"text-500 w-6 md:w-2 font-medium"},"Status",-1),S={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},z={key:2,class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},L=Object(a["j"])("div",{class:"text-500 w-6 md:w-2 font-medium"},"Waktu Mulai",-1),I={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},P={key:3,class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},F=Object(a["j"])("div",{class:"text-500 w-6 md:w-2 font-medium"},"Waktu Selesai",-1),B={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},C={class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},E=Object(a["j"])("div",{class:"text-500 w-6 md:w-2 font-medium"},"Tanggal",-1),D={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},J={key:4,class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},U=Object(a["j"])("div",{class:"text-500 w-6 md:w-2 font-medium"},"Selfi",-1),N={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},A=["src"],H={class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},R=Object(a["j"])("div",{class:"text-500 w-6 md:w-2 font-medium"},"Lampiran",-1),$={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},W=["href"],Y={key:5,class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},q=Object(a["j"])("div",{class:"text-500 w-6 md:w-2 font-medium"},"Lokasi",-1),M={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},G=["src"];function K(e,t,r,K,Q,V){var X;const Z=Object(a["H"])("Button");return Object(a["z"])(),Object(a["i"])("div",s,[Object(a["j"])("div",o,[Object(a["j"])("div",l,[Object(a["j"])("div",n,[Object(a["j"])("div",i,"Detail "+Object(a["L"])(Q.presence.presence_id?"tugas luar"==Q.presence.type?"Tugas Luar":"Absensi":"Cuti"),1),Object(a["j"])("div",null,["diajukan"==Q.presence.status?(Object(a["z"])(),Object(a["g"])(Z,{key:0,icon:"pi pi-check",class:"p-button-rounded p-button-success mr-2",onClick:t[0]||(t[0]=e=>V.action("setujui",Q.presence))})):Object(a["h"])("",!0),"diajukan"==Q.presence.status?(Object(a["z"])(),Object(a["g"])(Z,{key:1,icon:"pi pi-times",class:"p-button-rounded p-button-danger mr-2",onClick:t[1]||(t[1]=e=>V.action("tolak",Q.presence))})):Object(a["h"])("",!0)])]),Q.presence.employee?(Object(a["z"])(),Object(a["i"])("ul",c,[Object(a["j"])("li",d,[p,Object(a["j"])("div",u,Object(a["L"])(Q.presence.employee.nip+" - "+Q.presence.employee.name),1)]),Q.presence.presence_id?(Object(a["z"])(),Object(a["i"])("li",m,[h,Object(a["j"])("div",b,Object(a["L"])(null===(X=Q.presence.worktime_item)||void 0===X?void 0:X.name),1)])):Object(a["h"])("",!0),Object(a["j"])("li",j,[f,Object(a["j"])("div",g,Object(a["L"])(Q.presence.workunit.name),1)]),Object(a["j"])("li",y,[O,Object(a["j"])("div",_,Object(a["L"])(Q.presence.type),1)]),Q.presence.presence_id?(Object(a["z"])(),Object(a["i"])("li",w,[x,Object(a["j"])("div",k,Object(a["L"])(1==Q.presence.in_location?"Ya":"Tidak"),1)])):Object(a["h"])("",!0),Object(a["j"])("li",v,[T,Object(a["j"])("div",S,Object(a["L"])(Q.presence.status),1)]),null==Q.presence.presence_id||"tugas luar"==Q.presence.type?(Object(a["z"])(),Object(a["i"])("li",z,[L,Object(a["j"])("div",I,Object(a["L"])(Q.presence.started_at),1)])):Object(a["h"])("",!0),null==Q.presence.presence_id||"tugas luar"==Q.presence.type?(Object(a["z"])(),Object(a["i"])("li",P,[F,Object(a["j"])("div",B,Object(a["L"])(Q.presence.finished_at),1)])):Object(a["h"])("",!0),Object(a["j"])("li",C,[E,Object(a["j"])("div",D,Object(a["L"])(Q.presence.created_at),1)]),Q.presence.presence_id?(Object(a["z"])(),Object(a["i"])("li",J,[U,Object(a["j"])("div",N,[Q.presence.pic_url?(Object(a["z"])(),Object(a["i"])("img",{key:0,src:Q.storage_url+Q.presence.pic_url,style:{width:"250px"}},null,8,A)):Object(a["h"])("",!0)])])):Object(a["h"])("",!0),Object(a["j"])("li",H,[R,Object(a["j"])("div",$,[Q.presence.attachment_url?(Object(a["z"])(),Object(a["i"])("a",{key:0,href:Q.storage_url+Q.presence.attachment_url,target:"_blank"},"Download",8,W)):Object(a["h"])("",!0)])]),Q.presence.presence_id?(Object(a["z"])(),Object(a["i"])("li",Y,[q,Object(a["j"])("div",M,[Object(a["j"])("iframe",{width:"500",height:"300",src:"//maps.google.com/maps?q="+Q.presence.lat+","+Q.presence.lng+"&z=15&output=embed",allowfullscreen:"",style:{border:"0"},referrerpolicy:"no-referrer-when-downgrade"},null,8,G)])])):Object(a["h"])("",!0)])):Object(a["h"])("",!0)])])])}var Q=r("06d6"),V={data(){return{employeeId:null,presenceId:null,presence:{},submitted:!1,storage_url:"http://103.151.71.42/storage/"}},employeeService:null,created(){this.presenceId=this.$route.params.id,this.employeeId=this.$route.params.employee_id,this.employeeService=new Q["a"],this.initData()},methods:{initData(){this.employeeService.getPresence(this.employeeId,this.presenceId).then(e=>{this.presence=e,console.log(e)})},action(e,t){this.$swal({title:"Apakah anda yakin akan "+e+" data ini ?",showCancelButton:!0,confirmButtonText:"Ya"}).then(r=>{r.isConfirmed&&this.employeeService.actionPresence("di"+e,t).then(e=>{e.success?(this.$swal({icon:"success",title:"Success",text:e.message}),this.initData()):this.$swal({icon:"error",title:"Oops...",text:e.message})})})}}},X=r("6b0d"),Z=r.n(X);const ee=Z()(V,[["render",K]]);t["default"]=ee}}]);
//# sourceMappingURL=chunk-13285b0a.6e64767e.js.map