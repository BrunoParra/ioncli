"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[98],{98:(E,u,c)=>{c.r(u),c.d(u,{EsperandoPasajeroPageModule:()=>C});var g=c(6814),m=c(95),s=c(3582),p=c(2692),l=c(5861),e=c(5879),h=c(9252),f=c(1468),v=c(4414);const P=["map"];function b(o,i){if(1&o&&(e.TgZ(0,"h2"),e._uU(1),e.qZA()),2&o){const a=e.oxw(2);e.xp6(1),e.Oqu(a.conductor)}}function M(o,i){if(1&o){const a=e.EpF();e.TgZ(0,"div",12),e.NdJ("click",function(){e.CHM(a);const t=e.oxw(2);return e.KtG(t.volver())}),e._UZ(1,"ion-icon",13),e.qZA()}}function j(o,i){if(1&o&&(e.TgZ(0,"ion-item")(1,"ion-avatar"),e._UZ(2,"img",8),e.qZA(),e.TgZ(3,"ion-label",14),e._uU(4),e.qZA()()),2&o){const a=i.$implicit;e.xp6(4),e.Oqu(a)}}function y(o,i){if(1&o&&(e.TgZ(0,"div",6)(1,"div",7),e._UZ(2,"img",8),e.YNc(3,b,2,1,"h2",9),e.YNc(4,M,2,0,"div",10),e.qZA(),e.TgZ(5,"ion-list")(6,"ion-list-header")(7,"ion-label")(8,"h2"),e._uU(9,"Pasajeros:"),e.qZA()()(),e.YNc(10,j,5,1,"ion-item",11),e.qZA()()),2&o){const a=e.oxw();e.xp6(3),e.Q6J("ngIf",a.cargado),e.xp6(1),e.Q6J("ngIf",a.user.conductor),e.xp6(6),e.Q6J("ngForOf",a.pasajeros)}}const _=[{path:"",component:(()=>{var o;class i{constructor(n,t,r,d){this.gmaps=n,this.api=t,this.navController=r,this.route=d,this.dataViaje={},this.center={lat:-33.5113289,lng:-70.7521038},this.markers=[],this.conductor="",this.idViaje=""}ngOnInit(){var n=this;return(0,l.Z)(function*(){n.idViaje=yield n.getViajeId();const t=yield n.api.getUsuarioLogeado();t?(n.user=t,yield n.traerViaje(),yield n.cargarServicio(),n.loadMap(),n.directionsService=new n.googleMaps.DirectionsService,n.directionsRenderer=new n.googleMaps.DirectionsRenderer,n.directionsRenderer.setMap(n.map),n.calcularRuta(n.dataViaje),n.pasajeros=yield n.nombrePasajeros(),n.conductor=yield n.nombreConductor(),n.cargado=!0):n.navController.navigateRoot("/login")})()}ngOnDestroy(){}getViajeId(){return new Promise((n,t)=>{this.route.queryParamMap.subscribe(r=>{const d=r.get("id");d?n(d):t("No se pudo obtener el id del viaje")})})}cargarServicio(){var n=this;return(0,l.Z)(function*(){n.googleMaps=yield n.gmaps.loadGoogleMaps()})()}loadMap(){try{const n=this.mapElementRef.nativeElement,r={center:new this.googleMaps.LatLng(this.center.lat,this.center.lng),zoom:17,options:{disableDefaultUI:!0,mapTypeId:"terrain",styles:[{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"labels",stylers:[{visibility:"off"}]}]}};this.map=new this.googleMaps.Map(n,r)}catch(n){console.log(n)}}calcularRuta(n){this.directionsService.route({origin:{lat:-33.5113289,lng:-70.7521038},destination:{lat:n.destino.lat,lng:n.destino.lng},travelMode:this.googleMaps.TravelMode.DRIVING}).then(t=>{this.directionsRenderer.setDirections(t)}).catch(t=>window.alert("Directions request failed due to "+t))}traerViaje(){var n=this;return(0,l.Z)(function*(){n.dataViaje=yield n.api.getViajesById(n.idViaje)})()}volver(){this.api.setEstadoViaje(this.dataViaje.id,"cancelado"),this.navController.back()}nombreConductor(){var n=this;return(0,l.Z)(function*(){return(yield n.api.getUsuarioByEmail(n.dataViaje.conductor)).nombre})()}nombrePasajeros(){var n=this;return(0,l.Z)(function*(){const t=[];for(let r=0;r<n.dataViaje.cantidadPasajeros;r++){const d=n.dataViaje.pasajeros[r];if(!d){t.push("Libre");continue}const O=yield n.api.getUsuarioByEmail(d);t.push(O.nombre)}return t})()}}return(o=i).\u0275fac=function(n){return new(n||o)(e.Y36(h.V),e.Y36(f.c),e.Y36(v.SH),e.Y36(p.gz))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-esperando-pasajeros"]],viewQuery:function(n,t){if(1&n&&e.Gf(P,7),2&n){let r;e.iGM(r=e.CRH())&&(t.mapElementRef=r.first)}},decls:7,vars:1,consts:[["id","container"],[1,"hamburguesa"],["color","dark"],[1,"map"],["map",""],["class","inferior",4,"ngIf"],[1,"inferior"],[1,"encabezado-conductor"],["src","/assets/icon/avatar-placeholder.png","alt",""],[4,"ngIf"],["class","btn-cancel",3,"click",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"btn-cancel",3,"click"],["name","close-circle-outline"],["color","medium"]],template:function(n,t){1&n&&(e.TgZ(0,"ion-content")(1,"div",0)(2,"div",1),e._UZ(3,"ion-menu-button",2),e.qZA(),e._UZ(4,"div",3,4),e.YNc(6,y,11,3,"div",5),e.qZA()()),2&n&&(e.xp6(6),e.Q6J("ngIf",t.cargado))},dependencies:[g.sg,g.O5,s.BJ,s.W2,s.gu,s.Ie,s.Q$,s.q_,s.yh,s.fG],styles:['#container[_ngcontent-%COMP%]{box-shadow:0 0 10px #0006;max-width:750px}.map[_ngcontent-%COMP%]{height:calc(100vh - 350px);width:100%;display:block}.inferior[_ngcontent-%COMP%]{bottom:10px;min-width:320px;width:100%;padding:1rem;background-color:#0d0c0c;box-shadow:0 10px 15px #00000026}.inferior[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.1rem;font-weight:700;margin-right:.7rem}.info-detalle[_ngcontent-%COMP%]{display:flex;justify-content:space-around;text-align:center}.info-detalle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-block:0}.encabezado-conductor[_ngcontent-%COMP%]{display:flex;align-items:center;padding-bottom:.5rem;border-bottom:1px solid var(--ion-color-medium)}.encabezado-conductor[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]::part(native){width:50px;height:50px;border-radius:50%}.encabezado-conductor[_ngcontent-%COMP%]   .btn-chat[_ngcontent-%COMP%], .encabezado-conductor[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%]{--btn-size: 40px;min-width:var(--btn-size);min-height:var(--btn-size);display:flex;justify-content:center;align-items:center;background-color:gray;border-radius:50%;margin-left:auto}.encabezado-conductor[_ngcontent-%COMP%]   .btn-chat[_ngcontent-%COMP%]{margin-right:.5rem;background-color:var(--ion-color-tertiary);margin-left:auto}.encabezado-conductor[_ngcontent-%COMP%]   .btn-cancel[_ngcontent-%COMP%]{background-color:var(--ion-color-danger-tint);cursor:pointer}.encabezado-conductor[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:1.5rem;color:#fff}.encabezado-conductor[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{--avatar-size: 60px;height:var(--avatar-size);width:var(--avatar-size);border-radius:50%;object-fit:cover;margin-right:1rem}ion-content[_ngcontent-%COMP%]{--circulo: 13px;--sim-color: #5e5e5e}.simbolo[_ngcontent-%COMP%]{width:40px;margin-right:.4rem}.linea[_ngcontent-%COMP%]{position:relative;width:2px;height:55px;background-color:var(--sim-color);margin:0 auto}.linea[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:-4px;width:10px;height:10px;background-color:var(--sim-color)}.linea[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:0;left:-5px;width:var(--circulo);height:var(--circulo);background-color:var(--ion-color-secondary);box-shadow:0 0 5px 1px #428d8380;border-radius:50%}form[_ngcontent-%COMP%]{flex:1}.container-input-sup[_ngcontent-%COMP%]{display:flex;justify-content:space-around;align-items:center;padding-right:1rem}.info-conductor[_ngcontent-%COMP%]{margin-top:.5rem}ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin-left:1rem;font-weight:700}']}),i})()}];let x=(()=>{var o;class i{}return(o=i).\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[p.Bz.forChild(_),p.Bz]}),i})(),C=(()=>{var o;class i{}return(o=i).\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[g.ez,m.u5,s.Pc,x]}),i})()}}]);