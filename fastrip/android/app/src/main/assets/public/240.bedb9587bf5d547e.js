"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[240],{240:(Z,u,n)=>{n.r(u),n.d(u,{ViajesActivosPageModule:()=>f});var l=n(6814),v=n(95),t=n(3582),c=n(2692),d=n(5861),e=n(5879),g=n(1468);const j=function(i){return{id:i}};function p(i,s){if(1&i&&(e.TgZ(0,"ion-card"),e._UZ(1,"img",5),e.TgZ(2,"ion-card-header")(3,"ion-card-title"),e._uU(4),e.qZA(),e.TgZ(5,"ion-card-subtitle"),e._uU(6),e.qZA()(),e.TgZ(7,"ion-card-content")(8,"p"),e._uU(9),e.qZA(),e.TgZ(10,"p"),e._uU(11),e.qZA(),e.TgZ(12,"ion-button",6),e._uU(13,"Ver viaje"),e.qZA()()()),2&i){const a=s.$implicit;e.xp6(4),e.hij("Patente: ",a.patente," "),e.xp6(2),e.hij("Destino: ",a.destino.direccion,""),e.xp6(3),e.hij("Valor viaje: ",a.valorViaje,""),e.xp6(2),e.AsE("Capacidad: ",a.pasajeros.length," / ",a.cantidadPasajeros,""),e.xp6(1),e.Q6J("routerLink","/esperando-pasajero")("queryParams",e.VKq(7,j,a.id))}}const m=[{path:"",component:(()=>{var i;class s{constructor(o){this.service=o,this.viajes=[]}ngOnInit(){var o=this;return(0,d.Z)(function*(){const r=yield o.service.getUsuarioLogeado();r&&(o.viajes=yield o.service.getViajeActivoConductor(r.email))})()}verViaje(o){return(0,d.Z)(function*(){})()}}return(i=s).\u0275fac=function(o){return new(o||i)(e.Y36(g.c))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-viajes-activos"]],decls:12,vars:2,consts:[["slot","start"],[3,"fullscreen"],["collapse","condense"],["size","large"],[4,"ngFor","ngForOf"],["alt","Silhouette of mountains","src","https://ionicframework.com/docs/img/demos/card-media.png"],[3,"routerLink","queryParams"]],template:function(o,r){1&o&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),e._UZ(3,"ion-back-button"),e.qZA(),e.TgZ(4,"ion-title"),e._uU(5,"Viajes Disponibles"),e.qZA()()(),e.TgZ(6,"ion-content",1)(7,"ion-header",2)(8,"ion-toolbar")(9,"ion-title",3),e._uU(10,"viajes-activos"),e.qZA()()(),e.YNc(11,p,14,9,"ion-card",4),e.qZA()),2&o&&(e.xp6(6),e.Q6J("fullscreen",!0),e.xp6(5),e.Q6J("ngForOf",r.viajes))},dependencies:[l.sg,t.YG,t.Sm,t.PM,t.FN,t.Zi,t.tO,t.Dq,t.W2,t.Gu,t.wd,t.sr,t.oU,t.YI,c.rH]}),s})()}];let A=(()=>{var i;class s{}return(i=s).\u0275fac=function(o){return new(o||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[c.Bz.forChild(m),c.Bz]}),s})(),f=(()=>{var i;class s{}return(i=s).\u0275fac=function(o){return new(o||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[l.ez,v.u5,t.Pc,A]}),s})()}}]);