import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Viaje, User, RegistroserviceService } from 'src/app/services/registroservice.service';
import { GmapService } from 'src/app/services/gmap.service';
import { ActivatedRoute } from '@angular/router';


interface Ubicacion {
  lat: number;
  lng: number;
  nombre: string;
}

@Component({
  selector: 'app-esperando-pasajeros',
  templateUrl: './esperando-pasajeros.page.html',
  styleUrls: ['./esperando-pasajeros.page.scss'],
})
export class EsperandoPasajeroPage implements OnInit {
  //@ViewChild('inputAutocmplt') inputAutocmplt!: ElementRef;
  @ViewChild('map', { static: true }) mapElementRef!: ElementRef;
  dataViaje: Viaje = {} as Viaje;
  googleMaps: any;
  directionsService: any;
  directionsRenderer: any;
  center = { lat: -33.5113289, lng: -70.7521038 };
  map: any;
  mapClickListener: any;
  markerClickListener: any;
  markers: any[] = [];
  autocomplete: any;
  destino!: Ubicacion;
  cargado!: boolean;
  user!: User;
  pasajeros!: string[];
  conductor: string = '';
  idViaje: string = '';

  constructor(
    private gmaps: GmapService,
    private api: RegistroserviceService,
    private navController: NavController,
    private route: ActivatedRoute,
  ) { }


  async ngOnInit() {
    this.idViaje = await this.getViajeId();
    const user = await this.api.getUsuarioLogeado();
    if (!user) {
      this.navController.navigateRoot('/login');
      return;
    }
    this.user = user;
    await this.traerViaje();
    await this.cargarServicio();
    this.loadMap();
    this.directionsService = new this.googleMaps.DirectionsService();
    this.directionsRenderer = new this.googleMaps.DirectionsRenderer();
    this.directionsRenderer.setMap(this.map);
    this.calcularRuta(this.dataViaje);
    this.pasajeros = await this.nombrePasajeros();
    this.conductor = await this.nombreConductor();
    this.cargado = true;
  }

  ngOnDestroy() {
    // this.googleMaps.event.removeAllListeners();
    // if(this.mapClickListener){
    //   this.googleMaps.event.removeListener(this.mapClickListener);
    // };
  }

  getViajeId(): Promise<string> {
    return new Promise((resolve, reject) => {
        this.route.queryParamMap.subscribe(params => {
          const id = params.get('id');
          if (id) {
            resolve(id);
          } else {
            reject('No se pudo obtener el id del viaje');
          }
      });
    });
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

  async traerViaje() {
    this.dataViaje = await this.api.getViajesById(this.idViaje);
  }

  volver() {
    this.api.setEstadoViaje(this.dataViaje.id as number, 'cancelado');
    this.navController.back();
  }

  async nombreConductor() {
    const user = await this.api.getUsuarioByEmail(this.dataViaje.conductor);
    return user.nombre;
  }

  async nombrePasajeros() {
    const nombres = [];
    for (let i = 0; i < this.dataViaje.cantidadPasajeros; i++) {
      const email = this.dataViaje.pasajeros[i];
      if (!email) {
        nombres.push('Libre');
        continue;
      }
      const user = await this.api.getUsuarioByEmail(email);
      nombres.push(user.nombre);
    }
    return nombres;
  }
}

