(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21eb97"],{d77e:function(e,t,s){"use strict";s.r(t);var c=s("7a23");const i={class:"grid"},n={class:"col-12 lg:col-4 xl:col-4"},a={class:"card mb-0"},l={class:"flex justify-content-between mb-3"},j=Object(c["j"])("span",{class:"block text-500 font-medium mb-3"},"Jumlah Pegawai",-1),o={class:"text-900 font-medium text-xl"},b=Object(c["j"])("div",{class:"flex align-items-center justify-content-center bg-orange-100 border-round",style:{width:"2.5rem",height:"2.5rem"}},[Object(c["j"])("i",{class:"pi pi-users text-orange-500 text-xl"})],-1),d={class:"col-12 lg:col-4 xl:col-4"},r={class:"card mb-0"},u={class:"flex justify-content-between mb-3"},m=Object(c["j"])("span",{class:"block text-500 font-medium mb-3"},"Absen Masuk Hari Ini",-1),x={class:"text-900 font-medium text-xl"},O=Object(c["j"])("div",{class:"flex align-items-center justify-content-center bg-orange-100 border-round",style:{width:"2.5rem",height:"2.5rem"}},[Object(c["j"])("i",{class:"pi pi-clock text-orange-500 text-xl"})],-1),g={class:"col-12 lg:col-4 xl:col-4"},f={class:"card mb-0"},v={class:"flex justify-content-between mb-3"},p=Object(c["j"])("span",{class:"block text-500 font-medium mb-3"},"Absen Pulang Hari Ini",-1),h={class:"text-900 font-medium text-xl"},w=Object(c["j"])("div",{class:"flex align-items-center justify-content-center bg-orange-100 border-round",style:{width:"2.5rem",height:"2.5rem"}},[Object(c["j"])("i",{class:"pi pi-clock text-orange-500 text-xl"})],-1);function y(e,t,s,y,k,J){return Object(c["z"])(),Object(c["i"])("div",i,[Object(c["j"])("div",n,[Object(c["j"])("div",a,[Object(c["j"])("div",l,[Object(c["j"])("div",null,[j,Object(c["j"])("div",o,Object(c["L"])(k.employees),1)]),b])])]),Object(c["j"])("div",d,[Object(c["j"])("div",r,[Object(c["j"])("div",u,[Object(c["j"])("div",null,[m,Object(c["j"])("div",x,Object(c["L"])(k.ins),1)]),O])])]),Object(c["j"])("div",g,[Object(c["j"])("div",f,[Object(c["j"])("div",v,[Object(c["j"])("div",null,[p,Object(c["j"])("div",h,Object(c["L"])(k.outs),1)]),w])])])])}var k={data(){return{employees:0,workunits:0,ins:0,outs:0}},async created(){var e=await fetch("https://sisapa.tanjungbalaikota.go.id/api/dashboards/index"),t=await e.json();this.employees=t.data.employees,this.workunits=t.data.workunits,this.ins=t.data.ins,this.outs=t.data.outs}},J=s("6b0d"),L=s.n(J);const A=L()(k,[["render",y]]);t["default"]=A}}]);
//# sourceMappingURL=chunk-2d21eb97.07fa711c.js.map