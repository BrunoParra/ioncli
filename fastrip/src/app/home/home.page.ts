import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';

import { Router } from '@angular/router';
import { InteractionService } from '../services/interaction.service';
import { MenuController } from '@ionic/angular';
import { RegistroserviceService, User } from '../services/registroservice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{
  usuario?: User;

  //ESTO SIRVE PARA HACER USO DE SERVICIO DE DB
  constructor(
    private menuController: MenuController,
    private serviceRegistro: RegistroserviceService,
  ) {
  }

  async ngOnInit() {
    this.usuario = await this.serviceRegistro.getUsuarioLogeado()
  }

  mostrarMenu(){
    this.menuController.open('first');
  }
}