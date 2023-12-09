import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViajesActivosPage } from './viajes-activos.page';

const routes: Routes = [
  {
    path: '',
    component: ViajesActivosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViajesActivosPageRoutingModule {}
