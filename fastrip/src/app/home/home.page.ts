import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { RegistroserviceService, Usuario } from '../services/registroservice.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

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

  async Ingresar(){
    var f = this.formularioLogin.value;
    var a = 0;
    this.registroService.getUsuarios().then(datos=>{
      this.usuarios=datos;
      if (datos.length==0)
      {
        return this.usuarios;
      }
    if(this.formularioLogin.valid){
      for (let obj of this.usuarios){
        if (obj.correoUsuario == f.correo && obj.passUsuario == f.password){
          a=1;
          console.log('ingresado');
          localStorage.setItem('ingresado', 'true');
          localStorage.setItem('useremail', obj.correoUsuario);
          this.navController.navigateRoot('home');
          return;
        }
        }
      
      console.log(a);
      if (a==0){
        this.alertMsg();
      }
    }else{
      console.log('alo kike')
    }
  });
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