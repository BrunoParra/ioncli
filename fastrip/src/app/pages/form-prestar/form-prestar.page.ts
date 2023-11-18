import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { User, Viaje, RegistroserviceService } from 'src/app/services/registroservice.service';
import { GmapService } from 'src/app/services/gmap.service';

@Component({
  selector: 'app-form-prestar',
  templateUrl: './form-prestar.page.html',
  styleUrls: ['./form-prestar.page.scss'],
})
export class FormPrestarPage implements OnInit {
  @ViewChild('inputAutocmplt') inputAutocmplt!: ElementRef;
  numPasajeros: any;
  patente: any;
  salida: any;
  valor: any;
  viaje: Viaje = {} as Viaje;
  destino!: { lat: number; lng: number; direccion: string; };
  googleMaps: any;
  autocomplete: any;
  sesion: any;
  constructor(private gmaps: GmapService,
              private api: RegistroserviceService,
              private navController: NavController) { }

  ngOnInit() {
    this.sesion = JSON.parse(localStorage.getItem('sesion') as string);
    this.borrarViajesInvalidos();
    this.cargarServicio().then(() => {
      this.iniciarAutocompletado();
    });
  }

  async cargarServicio(){
    this.googleMaps = await this.gmaps.loadGoogleMaps();
  }

  iniciarAutocompletado(){
    this.autocomplete = new this.googleMaps.places.Autocomplete(this.inputAutocmplt.nativeElement, {
      componentRestrictions: { country: ['cl'] },
      fields: ['address_components', 'geometry'],
      types: ['address'],
    });

    this.inputAutocmplt.nativeElement.focus();
    this.autocomplete.addListener('place_changed', () => {
      const place = this.autocomplete.getPlace();
      this.destino = {
       lat: place.geometry.location.lat(),
       lng: place.geometry.location.lng(),
       direccion: this.inputAutocmplt.nativeElement.value
      };
    });
  }

  async agregarViaje(){
    this.viaje = {
      patente: this.patente,
      valorViaje: parseInt(this.valor, 10),
      destino: this.destino,
      cantidadPasajeros: parseInt(this.numPasajeros, 10),
      estado: 'activo',
      conductor: this.sesion.id,
      pasajeros: []
    };

    await this.api.createViaje(this.viaje);
    this.navController.navigateRoot('/esperando-pasajero');
  }

  async borrarViajes(){
    // const idViaje = await this.api.getViajeActivoConductor(this.sesion.id);
    // this.api.setEstadoViaje(idViaje.id, 'cancelado');
  }

  async borrarViajesInvalidos(){
    const idViaje = await this.api.getViajeActivoConductor(this.sesion.id);
    console.log(idViaje);

    if (idViaje) {
      for (const v of idViaje){
        v.estado = 'invalido';
        this.api.updateViaje(v);
      }
    }
  }

}
