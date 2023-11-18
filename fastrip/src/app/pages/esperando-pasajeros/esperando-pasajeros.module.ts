import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EsperandoPasajeroPageRoutingModule } from './esperando-pasajeros-routing.module';

import { EsperandoPasajeroPage } from './esperando-pasajeros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EsperandoPasajeroPageRoutingModule
  ],
  declarations: [EsperandoPasajeroPage]
})
export class EsperandoPasajeroPageModule {}
