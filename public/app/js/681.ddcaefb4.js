"use strict";(self["webpackChunksakai_vue"]=self["webpackChunksakai_vue"]||[]).push([[681],{6234:function(e,t,r){r.d(t,{Z:function(){return s}});class s{getEmployees(e,t=!1){var r="";if(e){r="page="+(e.page+1)+"&per_page="+e.rows;var s=1==e.sortOrder?"asc":"desc";r+="&order_by="+s,null!=e.sortField&&(r+="&sort_by="+e.sortField),e.filters.global.value&&(r+="&keyword="+e.filters.global.value)}var a=JSON.parse(localStorage.getItem("presence_user_data"));return a.workunit_id&&(r+="&workunit_id="+a.workunit_id),t&&(r+="&workunit_id="+t),fetch("https://presensi.webisnis.id/api/employees?"+r,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((e=>401==e.status?{data:{redirectTo:"login"}}:e.json())).then((e=>e.data))}getEmployeesReport(e,t){var r="";if(e){r="page="+(e.page+1)+"&per_page="+e.rows;var s=1==e.sortOrder?"asc":"desc";r+="&order_by="+s,null!=e.sortField&&(r+="&sort_by="+e.sortField),e.filters.global.value&&(r+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(r+="&date_start="+e.date_start+"&date_end="+e.date_end)}return fetch("https://presensi.webisnis.id/api/employees/reports/"+t+"?"+r,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((e=>401==e.status?{data:{redirectTo:"login"}}:e.json())).then((e=>e.data))}getEmployeesReportDetail(e,t){var r="";if(e){r="page="+(e.page+1)+"&per_page="+e.rows;var s=1==e.sortOrder?"asc":"desc";r+="&order_by="+s,null!=e.sortField&&(r+="&sort_by="+e.sortField),e.filters.global.value&&(r+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(r+="&date_start="+e.date_start+"&date_end="+e.date_end)}return fetch("https://presensi.webisnis.id/api/employees/report-details/"+t+"?"+r,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((e=>401==e.status?{data:{redirectTo:"login"}}:e.json())).then((e=>e.data))}getEmployeesReportPdfLink(e,t){var r="";if(e){var s=1==e.sortOrder?"asc":"desc";r+="&order_by="+s,null!=e.sortField&&(r+="&sort_by="+e.sortField),e.filters.global.value&&(r+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(r+="&date_start="+e.date_start+"&date_end="+e.date_end)}return"https://presensi.webisnis.id/api/employees/report-pdf/"+t+"?"+r}getEmployeesReportDetailPdfLink(e,t){var r="";if(e){var s=1==e.sortOrder?"asc":"desc";r+="&order_by="+s,null!=e.sortField&&(r+="&sort_by="+e.sortField),e.filters.global.value&&(r+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(r+="&date_start="+e.date_start+"&date_end="+e.date_end)}return"https://presensi.webisnis.id/api/employees/report-detail-pdf/"+t+"?"+r}getEmployee(e){return fetch("https://presensi.webisnis.id/api/employees/"+e,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((e=>401==e.status?{data:{redirectTo:"login"}}:e.json())).then((e=>e.data))}getPresence(e,t){return fetch("https://presensi.webisnis.id/api/employees/"+e+"/presences/"+t,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((e=>401==e.status?{data:{redirectTo:"login"}}:e.json())).then((e=>e.data))}updateRole(e,t){var r={...e};return r.role=t,fetch("https://presensi.webisnis.id/api/users/"+e.id,{method:"PUT",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(r)}).then((e=>401==e.status?{redirectTo:"Login"}:e.json()))}addPlace(e,t){return fetch("https://presensi.webisnis.id/api/employees/"+e.id+"/place",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(t)}).then((e=>401==e.status?{redirectTo:"Login"}:e.json()))}deletePlace(e,t){return fetch("https://presensi.webisnis.id/api/employees/"+e.id+"/place",{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({place_id:t.id})}).then((e=>401==e.status?{redirectTo:"Login"}:e.json()))}patchPlace(e){return fetch("https://presensi.webisnis.id/api/employees/"+e.id+"/place",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"}}).then((e=>401==e.status?{redirectTo:"Login"}:e.json()))}patchAndroid(e){return fetch("https://presensi.webisnis.id/api/employees/"+e.id+"/android-user",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"}}).then((e=>401==e.status?{redirectTo:"Login"}:e.json()))}resetDevice(e){return fetch("https://presensi.webisnis.id/api/employees/"+e.id+"/reset-device",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"}}).then((e=>401==e.status?{redirectTo:"Login"}:e.json()))}resetPassword(e){return fetch("https://presensi.webisnis.id/api/employees/"+e.id+"/reset-password",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"}}).then((e=>401==e.status?{redirectTo:"Login"}:e.json()))}addWorktime(e,t){return fetch("https://presensi.webisnis.id/api/employees/"+e.id+"/worktime",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(t)}).then((e=>401==e.status?{redirectTo:"Login"}:e.json()))}deleteWorktime(e,t){return fetch("https://presensi.webisnis.id/api/employees/"+e.id+"/worktime",{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({worktime_id:t.id,date_start:t.pivot.date_start,date_end:t.pivot.date_end})}).then((e=>401==e.status?{redirectTo:"Login"}:e.json()))}actionPresence(e,t){return fetch("https://presensi.webisnis.id/api/employees/"+t.employee_id+"/presences/"+t.id,{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({status:e})}).then((e=>401==e.status?{redirectTo:"Login"}:e.json()))}insertPresence(e,t){return fetch("https://presensi.webisnis.id/api/employees/"+e+"/presences",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")},body:t}).then((e=>401==e.status?{redirectTo:"Login"}:e.json()))}addEmployee(e){return fetch("https://presensi.webisnis.id/api/employees",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({workunit_id:e.workunit_id,nip:e.nip,name:e.name,group:e.group,position:e.position,phone:e.phone})}).then((e=>401==e.status?{redirectTo:"Login"}:e.json()))}updateEmployee(e){return fetch("https://presensi.webisnis.id/api/employees/"+e.id,{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({workunit_id:e.workunit_id,nip:e.nip,name:e.name,group:e.group,position:e.position,phone:e.phone})}).then((e=>401==e.status?{redirectTo:"Login"}:e.json()))}deleteEmployee(e){return fetch("https://presensi.webisnis.id/api/employees/"+e.id,{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"}}).then((e=>401==e.status?{redirectTo:"Login"}:e.json()))}}},2681:function(e,t,r){r.r(t),r.d(t,{default:function(){return te}});var s=r(6252),a=r(3577);const i={class:"grid"},n={class:"col-12"},o={class:"card"},l={class:"flex justify-content-between mb-3 align-items-center"},d={class:"font-medium text-3xl text-900"},p={key:0,class:"list-none p-0 m-0"},c={class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},u=(0,s._)("div",{class:"text-500 w-6 md:w-2 font-medium"},"Pegawai",-1),m={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},h={key:0,class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},f=(0,s._)("div",{class:"text-500 w-6 md:w-2 font-medium"},"Jadwal",-1),_={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},g={class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},w=(0,s._)("div",{class:"text-500 w-6 md:w-2 font-medium"},"Unit Kerja",-1),y={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},x={class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},b=(0,s._)("div",{class:"text-500 w-6 md:w-2 font-medium"},"Tipe",-1),k={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},v={key:1,class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},T=(0,s._)("div",{class:"text-500 w-6 md:w-2 font-medium"},"Di lokasi",-1),S={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},j={class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},z=(0,s._)("div",{class:"text-500 w-6 md:w-2 font-medium"},"Status",-1),I={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},C={key:2,class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},F=(0,s._)("div",{class:"text-500 w-6 md:w-2 font-medium"},"Waktu Mulai",-1),P={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},B={key:3,class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},D=(0,s._)("div",{class:"text-500 w-6 md:w-2 font-medium"},"Waktu Selesai",-1),O={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},L={class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},E=(0,s._)("div",{class:"text-500 w-6 md:w-2 font-medium"},"Tanggal",-1),U={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},q={key:4,class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},J=(0,s._)("div",{class:"text-500 w-6 md:w-2 font-medium"},"Selfi",-1),N={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},A=["src"],R={class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},$=(0,s._)("div",{class:"text-500 w-6 md:w-2 font-medium"},"Lampiran",-1),W={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},H=["href"],Z={key:5,class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},Y=(0,s._)("div",{class:"text-500 w-6 md:w-2 font-medium"},"Lokasi",-1),K={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},M=["src"];function G(e,t,r,G,Q,V){const X=(0,s.up)("Button");return(0,s.wg)(),(0,s.iD)("div",i,[(0,s._)("div",n,[(0,s._)("div",o,[(0,s._)("div",l,[(0,s._)("div",d,"Detail "+(0,a.zw)(Q.presence.presence_id?"Absensi":Q.presence.type.includes("tugas")?Q.presence.type:"Cuti"),1),(0,s._)("div",null,["diajukan"==Q.presence.status?((0,s.wg)(),(0,s.j4)(X,{key:0,icon:"pi pi-check",class:"p-button-rounded p-button-success mr-2",onClick:t[0]||(t[0]=e=>V.action("setujui",Q.presence))})):(0,s.kq)("",!0),"diajukan"==Q.presence.status?((0,s.wg)(),(0,s.j4)(X,{key:1,icon:"pi pi-times",class:"p-button-rounded p-button-danger mr-2",onClick:t[1]||(t[1]=e=>V.action("tolak",Q.presence))})):(0,s.kq)("",!0)])]),Q.presence.employee?((0,s.wg)(),(0,s.iD)("ul",p,[(0,s._)("li",c,[u,(0,s._)("div",m,(0,a.zw)(Q.presence.employee.nip+" - "+Q.presence.employee.name),1)]),Q.presence.presence_id?((0,s.wg)(),(0,s.iD)("li",h,[f,(0,s._)("div",_,(0,a.zw)(Q.presence.worktime_item?.name),1)])):(0,s.kq)("",!0),(0,s._)("li",g,[w,(0,s._)("div",y,(0,a.zw)(Q.presence.workunit.name),1)]),(0,s._)("li",x,[b,(0,s._)("div",k,(0,a.zw)(Q.presence.type),1)]),Q.presence.presence_id?((0,s.wg)(),(0,s.iD)("li",v,[T,(0,s._)("div",S,(0,a.zw)(1==Q.presence.in_location?"Ya":"Tidak"),1)])):(0,s.kq)("",!0),(0,s._)("li",j,[z,(0,s._)("div",I,(0,a.zw)(Q.presence.status),1)]),null==Q.presence.presence_id||"tugas luar"==Q.presence.type?((0,s.wg)(),(0,s.iD)("li",C,[F,(0,s._)("div",P,(0,a.zw)(Q.presence.started_at),1)])):(0,s.kq)("",!0),null==Q.presence.presence_id||"tugas luar"==Q.presence.type?((0,s.wg)(),(0,s.iD)("li",B,[D,(0,s._)("div",O,(0,a.zw)(Q.presence.finished_at),1)])):(0,s.kq)("",!0),(0,s._)("li",L,[E,(0,s._)("div",U,(0,a.zw)(Q.presence.created_at),1)]),Q.presence.presence_id?((0,s.wg)(),(0,s.iD)("li",q,[J,(0,s._)("div",N,[Q.presence.pic_url?((0,s.wg)(),(0,s.iD)("img",{key:0,src:Q.storage_url+Q.presence.pic_url,style:{width:"250px"}},null,8,A)):(0,s.kq)("",!0)])])):(0,s.kq)("",!0),(0,s._)("li",R,[$,(0,s._)("div",W,[Q.presence.attachment_url?((0,s.wg)(),(0,s.iD)("a",{key:0,href:Q.storage_url+Q.presence.attachment_url,target:"_blank"},"Download",8,H)):(0,s.kq)("",!0)])]),Q.presence.presence_id?((0,s.wg)(),(0,s.iD)("li",Z,[Y,(0,s._)("div",K,[(0,s._)("iframe",{width:"500",height:"300",src:"//maps.google.com/maps?q="+Q.presence.lat+","+Q.presence.lng+"&z=15&output=embed",allowfullscreen:"",style:{border:"0"},referrerpolicy:"no-referrer-when-downgrade"},null,8,M)])])):(0,s.kq)("",!0)])):(0,s.kq)("",!0)])])])}var Q=r(6234),V={data(){return{employeeId:null,presenceId:null,presence:{},submitted:!1,storage_url:"https://presensi.webisnis.id/storage/"}},employeeService:null,created(){this.presenceId=this.$route.params.id,this.employeeId=this.$route.params.employee_id,this.employeeService=new Q.Z,this.initData()},methods:{initData(){this.employeeService.getPresence(this.employeeId,this.presenceId).then((e=>{this.presence=e,console.log(e)}))},action(e,t){this.$swal({title:"Apakah anda yakin akan "+e+" data ini ?",showCancelButton:!0,confirmButtonText:"Ya"}).then((r=>{r.isConfirmed&&this.employeeService.actionPresence("di"+e,t).then((e=>{e.success?(this.$swal({icon:"success",title:"Success",text:e.message}),this.initData()):this.$swal({icon:"error",title:"Oops...",text:e.message})}))}))}}},X=r(3744);const ee=(0,X.Z)(V,[["render",G]]);var te=ee}}]);
//# sourceMappingURL=681.ddcaefb4.js.map