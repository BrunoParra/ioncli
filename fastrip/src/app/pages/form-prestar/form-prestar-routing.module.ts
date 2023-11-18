import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormPrestarPage } from './form-prestar.page';

const routes: Routes = [
  {
    path: '',
    component: FormPrestarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormPrestarPageRoutingModule {}
