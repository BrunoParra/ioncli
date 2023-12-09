import { Component, OnInit } from '@angular/core';
import { RegistroserviceService, Viaje } from 'src/app/services/registroservice.service';

@Component({
  selector: 'app-viajes-activos',
  templateUrl: './viajes-activos.page.html',
  styleUrls: ['./viajes-activos.page.scss'],
})
export class ViajesActivosPage implements OnInit {
  viajes: Viaje[] = [];

  constructor(
    private service: RegistroserviceService
  ) { }

  async ngOnInit() {
    const user = await this.service.getUsuarioLogeado();
    if (!user) {
      return;
    }

    this.viajes = await this.service.getViajeActivoConductor(user.email);
  }

  async verViaje(id: number) {
  }

}
