"use strict";(self["webpackChunksakai_vue"]=self["webpackChunksakai_vue"]||[]).push([[605],{5325:function(e,t,i){i.d(t,{Z:function(){return r}});class r{getWorktimes(e){var t="page="+(e.page+1)+"&per_page="+e.rows,i=1==e.sortOrder?"asc":"desc";return t+="&order_by="+i,null!=e.sortField&&(t+="&sort_by="+e.sortField),e.filters.global.value&&(t+="&keyword="+e.filters.global.value),fetch("https://sisapa.tanjungbalaikota.go.id/api/worktimes?"+t,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((e=>401==e.status?{data:{redirectTo:"login"}}:e.json())).then((e=>e.data))}getAllWorktimes(){return fetch("https://sisapa.tanjungbalaikota.go.id/api/worktimes?response=array",{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((e=>401==e.status?{data:{redirectTo:"login"}}:e.json())).then((e=>e.data))}createWorktime(e){return fetch("https://sisapa.tanjungbalaikota.go.id/api/worktimes",{method:"POST",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(e)}).then((e=>401==e.status?{redirectTo:"Login"}:e.json()))}updateWorktime(e){return fetch("https://sisapa.tanjungbalaikota.go.id/api/worktimes/"+e.id,{method:"PUT",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(e)}).then((e=>401==e.status?{redirectTo:"Login"}:e.json()))}deleteWorktime(e){return fetch("https://sisapa.tanjungbalaikota.go.id/api/worktimes/"+e.id,{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(e)}).then((e=>401==e.status?{redirectTo:"Login"}:e.json()))}}},265:function(e,t,i){i.d(t,{Z:function(){return r}});class r{getWorkunits(e){var t="";if(e){t="?page="+(e.page+1)+"&per_page="+e.rows;var i=1==e.sortOrder?"asc":"desc";t+="&order_by="+i,null!=e.sortField&&(t+="&sort_by="+e.sortField),e.filters.global.value&&(t+="&keyword="+e.filters.global.value)}else t="?all=1&order_by=asc";return fetch("https://sisapa.tanjungbalaikota.go.id/api/workunits"+t,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((e=>401==e.status?{data:{redirectTo:"Login"}}:e.json())).then((e=>e.data))}getWorkunit(e){return fetch("https://sisapa.tanjungbalaikota.go.id/api/workunits/"+e,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((e=>401==e.status?{data:{redirectTo:"login"}}:e.json())).then((e=>e.data))}getPresences(e,t=!1,i=!1){var r="";if(e){r="page="+(e.page+1)+"&per_page="+e.rows;var a=1==e.sortOrder?"asc":"desc";r+="&order_by="+a,null!=e.sortField&&(r+="&sort_by="+e.sortField),e.filters.global.value&&(r+="&keyword="+e.filters.global.value),null!=e.date_start&&null!=e.date_end&&(r+="&date_start="+e.date_start+"&date_end="+e.date_end)}i&&(r+="&type="+i);var o=t?"https://sisapa.tanjungbalaikota.go.id/api/workunits/"+t+"/presences?"+r:"https://sisapa.tanjungbalaikota.go.id/api/workunits/presences?"+r;return fetch(o,{headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token")}}).then((e=>401==e.status?{data:{redirectTo:"login"}}:e.json())).then((e=>e.data))}updateWorkunit(e){return fetch("https://sisapa.tanjungbalaikota.go.id/api/workunits/"+e.id+"/place",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({lat:e.lat,lng:e.lng,radius:e.radius})}).then((e=>401==e.status?{redirectTo:"Login"}:e.json()))}assignWorktime(e,t){return fetch("https://sisapa.tanjungbalaikota.go.id/api/workunits/"+e.id+"/worktime",{method:"PATCH",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({worktime_id:t.worktime_id})}).then((e=>401==e.status?{redirectTo:"Login"}:e.json()))}deleteWorktime(e,t){return fetch("https://sisapa.tanjungbalaikota.go.id/api/workunits/"+e.id+"/worktime",{method:"DELETE",headers:{authorization:"Bearer "+localStorage.getItem("presence_app_token"),"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({worktime_id:t.id})}).then((e=>401==e.status?{redirectTo:"Login"}:e.json()))}}},5605:function(e,t,i){i.r(t),i.d(t,{default:function(){return $}});var r=i(6252),a=i(6612);const o={class:"grid"},s={class:"col-12"},n={class:"card"},l=(0,r._)("div",{class:"font-medium text-3xl text-900 mb-3"},"Detail OPD",-1),d={class:"list-none p-0 m-0"},u={class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},c=(0,r._)("div",{class:"text-500 w-6 md:w-2 font-medium"},"Nama",-1),k={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},m={class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},p=(0,r._)("div",{class:"text-500 w-6 md:w-2 font-medium"},"Latitude",-1),h={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},w={class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},g=(0,r._)("div",{class:"text-500 w-6 md:w-2 font-medium"},"Longitude",-1),f={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"},_={class:"flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap"},b=(0,r._)("div",{class:"text-500 w-6 md:w-2 font-medium"},"Radius",-1),v={class:"text-900 w-full md:w-8 md:flex-order-0 flex-order-1"};function W(e,t,i,W,y,x){const j=(0,r.up)("DetailWorktime");return(0,r.wg)(),(0,r.iD)("div",o,[(0,r._)("div",s,[(0,r._)("div",n,[l,(0,r._)("ul",d,[(0,r._)("li",u,[c,(0,r._)("div",k,(0,a.zw)(y.workunit.name),1)]),(0,r._)("li",m,[p,(0,r._)("div",h,(0,a.zw)(y.workunit.lat),1)]),(0,r._)("li",w,[g,(0,r._)("div",f,(0,a.zw)(y.workunit.lng),1)]),(0,r._)("li",_,[b,(0,r._)("div",v,(0,a.zw)(y.workunit.radius),1)])])])]),0!=Object.keys(y.workunit).length?((0,r.wg)(),(0,r.j4)(j,{key:0,workunit:y.workunit,workunitService:e.workunitService},null,8,["workunit","workunitService"])):(0,r.kq)("",!0)])}var y=i(265);const x={class:"col-12"},j={class:"card"},S={class:"my-2"},D=(0,r._)("div",{class:"flex flex-column md:flex-row md:justify-content-between md:align-items-center"},[(0,r._)("h5",{class:"m-0"},"Detail Jam Kerja")],-1),T=(0,r._)("span",{class:"p-column-title"},"ID",-1),C={class:"field"},I=(0,r._)("label",{for:"name"},"Jam Kerja",-1),z={key:0,class:"p-invalid"};function B(e,t,i,o,s,n){const l=(0,r.up)("Button"),d=(0,r.up)("Toolbar"),u=(0,r.up)("Column"),c=(0,r.up)("DataTable"),k=(0,r.up)("Dropdown"),m=(0,r.up)("Dialog");return(0,r.wg)(),(0,r.iD)("div",x,[(0,r._)("div",j,[(0,r.Wm)(d,{class:"mb-4"},{start:(0,r.w5)((()=>[(0,r._)("div",S,[(0,r.Wm)(l,{label:"New",icon:"pi pi-plus",class:"p-button-success mr-2",onClick:n.openNew},null,8,["onClick"])])])),_:1}),(0,r.Wm)(c,{value:s.workunitWorktimes,ref:"dt",dataKey:"id",responsiveLayout:"scroll"},{header:(0,r.w5)((()=>[D])),default:(0,r.w5)((()=>[(0,r.Wm)(u,{field:"id",header:"ID",sortable:!0},{body:(0,r.w5)((e=>[T,(0,r.Uk)(" "+(0,a.zw)(e.data.id),1)])),_:1}),(0,r.Wm)(u,{field:"name",header:"Nama"}),(0,r.Wm)(u,{header:"Aksi"},{body:(0,r.w5)((e=>[e.data.id?((0,r.wg)(),(0,r.j4)(l,{key:0,icon:"pi pi-trash",class:"p-button-rounded p-button-warning mt-2",onClick:t=>n.confirmDelete(e.data)},null,8,["onClick"])):(0,r.kq)("",!0)])),_:1})])),_:1},8,["value"]),(0,r.Wm)(m,{visible:s.workunitWorktimeDialog,"onUpdate:visible":t[1]||(t[1]=e=>s.workunitWorktimeDialog=e),style:{width:"450px"},header:"Form Detail Jam Kerja",modal:!0,class:"p-fluid"},{footer:(0,r.w5)((()=>[(0,r.Wm)(l,{label:"Cancel",icon:"pi pi-times",class:"p-button-text",onClick:n.hideDialog},null,8,["onClick"]),(0,r.Wm)(l,{label:"Save",icon:"pi pi-check",class:"p-button-text",onClick:n.saveWorktime},null,8,["onClick"])])),default:(0,r.w5)((()=>[(0,r._)("div",C,[I,(0,r.Wm)(k,{modelValue:s.workunitWorktime.worktime_id,"onUpdate:modelValue":t[0]||(t[0]=e=>s.workunitWorktime.worktime_id=e),options:s.worktimes,optionLabel:"name",optionValue:"id",placeholder:"Pilih Jam Kerja",class:(0,a.C_)({"p-invalid":s.submitted&&!s.workunitWorktime.worktime_id})},null,8,["modelValue","options","class"]),s.submitted&&!s.workunitWorktime.worktime_id?((0,r.wg)(),(0,r.iD)("small",z,"Jam kerja diperlukan.")):(0,r.kq)("",!0)])])),_:1},8,["visible"])])])}i(560);var O=i(5325),F={props:{workunit:{},workunitService:null},data(){return{loading:!1,worktimes:null,workunitWorktimes:null,workunitWorktime:{},filters:{},lazyParams:{},columns:[{field:"id",header:"ID"},{field:"name",header:"Nama"}],workunitWorktimeDialog:!1,submitted:!1}},worktimeService:null,created(){this.worktimeService=new O.Z,this.workunitWorktimes=this.workunit.worktimes},mounted(){this.initData()},methods:{initData(){this.worktimeService.getAllWorktimes().then((e=>{this.worktimes=e}))},openNew(){this.workunitWorktime={},this.submitted=!1,this.workunitWorktimeDialog=!0},editPlace(e){this.workunitWorktime={...e},this.workunitWorktimeDialog=!0},confirmDelete(e){this.workunitWorktime=e,this.$swal({title:"Apakah anda yakin akan menghapus data ini ?",showCancelButton:!0,confirmButtonText:"Hapus"}).then((e=>{e.isConfirmed&&this.workunitService.deleteWorktime(this.workunit,this.workunitWorktime).then((e=>{"redirectTo"in e&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),this.$router.push(e.redirectTo)),e.success?(this.workunitWorktimes=this.workunitWorktimes.filter((e=>e.id!==this.workunitWorktime.id)),this.$swal({icon:"success",title:"Success",text:e.message}),this.workunitWorktimeDialog=!1,this.workunitWorktime={}):this.$swal({icon:"error",title:"Oops...",text:e.message})}))}))},hideDialog(){this.workunitWorktimeDialog=!1,this.submitted=!1},saveWorktime(){this.submitted=!0,this.workunitService.assignWorktime(this.workunit,this.workunitWorktime).then((e=>{if("redirectTo"in e&&(localStorage.removeItem("presence_app_token"),localStorage.removeItem("presence_app_role"),this.$router.push(e.redirectTo)),e.success){this.$swal({icon:"success",title:"Success",text:e.message});var t=this.worktimes.find((e=>e.id===this.workunitWorktime.worktime_id));this.workunitWorktimes=[{id:t.id,name:t.name}],this.workunitWorktimeDialog=!1,this.workunitWorktime={}}else this.$swal({icon:"error",title:"Oops...",text:e.message})}))},findIndexById(e){let t=-1;for(let i=0;i<this.workunitWorktimes.length;i++)if(this.workunitWorktimes[i].id===e){t=i;break}return t}}},L=i(3744);const N=(0,L.Z)(F,[["render",B]]);var J=N,U={components:{DetailWorktime:J},data(){return{workunitId:null,workunit:{},submitted:!1}},workunitService:null,created(){this.workunitId=this.$route.params.id,this.workunitService=new y.Z},mounted(){this.initData()},methods:{initData(){this.workunitService.getWorkunit(this.workunitId).then((e=>{this.workunit=e}))}}};const P=(0,L.Z)(U,[["render",W]]);var $=P}}]);
//# sourceMappingURL=605.12a5aa2f.js.map