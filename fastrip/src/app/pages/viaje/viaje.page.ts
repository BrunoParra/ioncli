import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Viaje, User, RegistroserviceService } from 'src/app/services/registroservice.service';
import { GmapService } from 'src/app/services/gmap.service';

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.page.html',
  styleUrls: ['./viaje.page.scss'],
})
export class ViajePage implements OnInit {
  @ViewChild('map', { static: true }) mapElementRef!: ElementRef;

  dataViaje: Viaje = {} as Viaje;
  userViaje: User = {} as User;
  googleMaps: any;
  directionsService: any;
  directionsRenderer: any;
  center = { lat: -33.5113289, lng: -70.7521038 };
  map: any;
  mapClickListener: any;
  markerClickListener: any;
  markers: any[] = [];
  autocomplete: any;
  redireccion!: string;
  idURL!: number;
  cargado!: boolean;

  constructor(private gmaps: GmapService,
              private api: RegistroserviceService,
              private navController: NavController,
              private route: ActivatedRoute) {}


  ngOnInit() {
    this.iniciarTodo();

    if (localStorage.getItem('esConductor') === 'true'){
      this.redireccion = '/form-prestar';
    } else {
      this.redireccion = '/home';
    }
  }

  async iniciarTodo() {
    this.idURL = this.route.snapshot.params['id'];
    await this.cargarServicio();
    await this.loadMap();

    this.dataViaje = await this.api.getViajesById(this.idURL);
    this.userViaje = await this.api.getUsuarioById(this.dataViaje.conductor);
    this.cargado = true;
    this.directionsService = new this.googleMaps.DirectionsService();
    this.directionsRenderer = new this.googleMaps.DirectionsRenderer();
    this.directionsRenderer.setMap(this.map);

    this.calcularRuta(this.dataViaje);
  }

  async cargarServicio() {
    this.googleMaps = await this.gmaps.loadGoogleMaps();
  }

  loadMap() {
    try {
      const mapEl = this.mapElementRef.nativeElement;
      const location = new this.googleMaps.LatLng(this.center.lat, this.center.lng);
      const mapconfig = {
        center: location,
        zoom: 17,
        options: {
          disableDefaultUI: true,
          mapTypeId: 'terrain',
          styles: [
            {
              featureType: 'poi',
              elementType: 'labels',
              stylers: [
                {
                  visibility: 'off'
                }
              ]
            },
            {
              featureType: 'transit',
              elementType: 'labels',
              stylers: [
                {
                  visibility: 'off'
                }
              ]
            }
          ]
        }
      };

      this.map = new this.googleMaps.Map(mapEl, mapconfig);
    } catch (e) {
      console.log(e);
    }
  }

  calcularRuta(viaje: Viaje) {
    this.directionsService.route({
      origin: { lat: -33.5113289, lng: -70.7521038 },
      destination: { lat: viaje.destino.lat, lng: viaje.destino.lng },
      travelMode: this.googleMaps.TravelMode.DRIVING
    }).then((response: any) => {
      this.directionsRenderer.setDirections(response);
    })
      .catch((e: any) => window.alert('Directions request failed due to ' + e));
  }

  // async traerViaje(){
  //   this.dataViaje = await this.strgViajes.getViajes1('viajes')[0];
  //   console.log(this.dataViaje);
  // }

  volver() {
    this.navController.navigateRoot(this.redireccion);
  }
}

