import { Component, OnInit } from '@angular/core';
import {AlertController } from '@ionic/angular';
import { RegistroserviceService, Usuario } from 'src/app/service/registroservice.service';
import { ToastController } from '@ionic/angular';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;
  newUsuario: Usuario = <Usuario>{};

constructor(private registroService: RegistroserviceService,
            private alertController: AlertController,
            private toastController: ToastController,
            private fb:FormBuilder) {
              this.formularioRegistro = this.fb.group({
                'nombre': new FormControl("", Validators.required),
                'correo': new FormControl("", Validators.required),
                'password' :new FormControl("", Validators.required),
                'confirmaPass':new FormControl("", Validators.required)
              });
            }
}
