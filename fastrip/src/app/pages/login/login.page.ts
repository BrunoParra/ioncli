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
import { RefreshService } from 'src/app/services/refresh.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin : FormGroup;
  usuarios: any = []  

  constructor( 
    private alertController: AlertController,
    private navController: NavController,
    private registroService: RegistroserviceService,
    private fb: FormBuilder,
    private refreshService: RefreshService,
  ) {
    this.formularioLogin = this.fb.group({
      'correo': new FormControl("",[Validators.email, Validators.required]),
      'password': new FormControl("",Validators.required),
    })
  }

  ngOnInit() {
  }

  async Ingresar() {
    var f = this.formularioLogin.value;
    if (!this.formularioLogin.valid) {
      this.alertMsg("Debe ingresar todos los datos");
      return;
    }
    try {
      await this.registroService.login(f.correo, f.password);
      this.refreshService.refresh(); // Notificar a los componentes interesados (app.component) que se loguearon
      await this.navController.navigateRoot('home');
    } catch(error: any) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        this.alertMsg('Contraseña incorrecta');
      } else if (errorCode === 'auth/invalid-login-credentials') {
        this.alertMsg('Credenciales incorrectas');
      } else {
        
      }
    }
  }

  async alertMsg(message?: string){
    const alert = await this.alertController.create({
      header: 'Error..',
      message: message || 'Los datos ingresados no son correctos',
      buttons: ['Aceptar'],
    });
    await alert.present();
    return;
  }
}
