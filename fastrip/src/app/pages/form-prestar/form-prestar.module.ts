import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormPrestarPageRoutingModule } from './form-prestar-routing.module';

import { FormPrestarPage } from './form-prestar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormPrestarPageRoutingModule
  ],
  declarations: [FormPrestarPage]
})
export class FormPrestarPageModule {}
