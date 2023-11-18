import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { RegistroserviceService, User } from '../../services/registroservice.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin : FormGroup;
  usuarios: any = []  

  constructor( private alertController: AlertController,
               private navController: NavController,
               private registroService: RegistroserviceService,
               private fb: FormBuilder) {
                this.formularioLogin = this.fb.group({
                  'correo': new FormControl("",[Validators.email, Validators.required]),
                  'password': new FormControl("",Validators.required),
                })
               }
  
  ngOnInit() {
  }

  async Ingresar() {
    var f = this.formularioLogin.value;
    var a = 0;
    const datos = await this.registroService.getUsuarios();
    this.usuarios = datos;
    if (datos.length == 0) {
      return this.usuarios;
    }
    if (!this.formularioLogin.valid) {
      console.log('alo kike')
    }
    for (let obj of this.usuarios) {
      console.log(obj)
      if (obj.email == f.correo && obj.pass == f.password) {
        a = 1;
        localStorage.setItem('ingresado', 'true');
        localStorage.setItem('useremail', obj.email);
        localStorage.setItem('sesion',JSON.stringify(obj));
        console.log(obj.email)
        await this.navController.navigateRoot('home');
        return;
      }
    }
  
    if (a == 0) {
      this.alertMsg();
    }
  }

  async alertMsg(){
    const alert = await this.alertController.create({
      header: 'Error..',
      message:'Los datos ingresados no son correctos',
      buttons: ['Aceptar'],
    });
    await alert.present();
    return;
  }
}
