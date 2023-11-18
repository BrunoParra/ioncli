import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { RegistroserviceService, User } from '../../services/registroservice.service';
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
  newUsuario: User = <User>{};

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
    if(this.formularioRegistro.value.password == this.formularioRegistro.value.confirmaPass)
    this.newUsuario.nombre = this.formularioRegistro.value.nombre
    this.newUsuario.email = this.formularioRegistro.value.correo
    this.newUsuario.pass = this.formularioRegistro.value.password
    this.newUsuario.conductor = this.formularioRegistro.value.rol=='conductor'
    console.log(this.newUsuario)
    this.registroService.createUsuario(this.newUsuario)
  }
}
