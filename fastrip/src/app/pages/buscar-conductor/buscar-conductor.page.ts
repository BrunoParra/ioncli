import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Viaje, RegistroserviceService } from 'src/app/services/registroservice.service';

@Component({
  selector: 'app-buscar-conductor',
  templateUrl: './buscar-conductor.page.html',
  styleUrls: ['./buscar-conductor.page.scss'],
})
export class BuscarConductorPage implements OnInit {

  viajes: Viaje[]=[]

  constructor(
    private serviceRegistro: RegistroserviceService,
    private router: Router,
    private alertController: AlertController,
  ) { }

  async ngOnInit() {
    this.viajes= await this.serviceRegistro.getViajesActivos()
  }

  async seleccionarViaje(id: number){
    const viaje = this.viajes.find(v=> v.id === id);
    const user = await this.serviceRegistro.getUsuarioLogeado();
    if(viaje && user){
      if (viaje.conductor === user.email){
        this.alert('No puedes seleccionar tu propio viaje');
        return;
      }

      if (viaje.pasajeros.includes(user.email)){
        this.alert('Ya estás inscrito en este viaje');
        return;
      }

      this.serviceRegistro.asignarPasajero(viaje, user.email)
      await this.router.navigate(['/esperando-pasajero'], { queryParams: { id: viaje.id } });
    }
  }

  async alert(msg: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }
}
