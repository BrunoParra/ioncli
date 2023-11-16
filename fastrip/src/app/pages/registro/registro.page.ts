import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { RegistroserviceService, Usuario } from '../../services/registroservice.service';
import { ToastController } from '@ionic/angular';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: '/registro.page.html',
  styleUrls: ['/registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;
  newUsuario: Usuario = <Usuario>{};

  constructor(private registroService: RegistroserviceService,
    private alertController: AlertController,
    private toastController: ToastController,
    private fb: FormBuilder) {
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'correo': new FormControl("",[Validators.required, Validators.email]),
      'password': new FormControl("", Validators.required),
      'confirmaPass': new FormControl("", Validators.required),
      'rol': new FormControl("",Validators.required)
    });
  }

  ngOnInit(): void {

  }
  public CrearUsuario() {
    this.newUsuario.nomUsuario = this.formularioRegistro.value.nombre
    this.newUsuario.correoUsuario = this.formularioRegistro.value.correo
    this.newUsuario.passUsuario = this.formularioRegistro.value.password
    this.newUsuario.repassUsuario = this.formularioRegistro.value.confirmaPass
    this.newUsuario.rol = this.formularioRegistro.value.rol
    console.log(this.newUsuario)
    this.registroService.addDatos(this.newUsuario)
  }
}
