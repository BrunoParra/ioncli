import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EsperandoPasajeroPage } from './esperando-pasajeros.page';

const routes: Routes = [
  {
    path: '',
    component: EsperandoPasajeroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EsperandoPasajeroPageRoutingModule {}
