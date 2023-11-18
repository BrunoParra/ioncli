import { Component, OnInit } from '@angular/core';
import { Viaje, RegistroserviceService } from 'src/app/services/registroservice.service';

@Component({
  selector: 'app-buscar-conductor',
  templateUrl: './buscar-conductor.page.html',
  styleUrls: ['./buscar-conductor.page.scss'],
})
export class BuscarConductorPage implements OnInit {

  viajes: Viaje[]=[]

  constructor(private serviceRegistro: RegistroserviceService) { }

  async ngOnInit() {
    this.viajes= await this.serviceRegistro.getViajesActivos()
  }

  async seleccionarViaje(id: number){
    const viaje = this.viajes.find(v=> v.id === id);
    const user = await this.serviceRegistro.getUsuarioLogeado()
    if(viaje){
      this.serviceRegistro.asignarPasajero(viaje, user?.id!)
    }
  }
}
