import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViajesActivosPageRoutingModule } from './viajes-activos-routing.module';

import { ViajesActivosPage } from './viajes-activos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViajesActivosPageRoutingModule
  ],
  declarations: [ViajesActivosPage]
})
export class ViajesActivosPageModule {}
