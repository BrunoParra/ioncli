import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { RegistroserviceService } from 'src/app/services/registroservice.service';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {
  
  formularioRecuperar: FormGroup;

  constructor(private fb: FormBuilder, private alertController: AlertController, private registroService: RegistroserviceService) { 
    this.formularioRecuperar = this.fb.group({
      'correo': new FormControl("",[Validators.email, Validators.required])
    })
  }

  ngOnInit() {
  }

  async Recuperar(){
    var f = this.formularioRecuperar.value;
    if (!this.formularioRecuperar.valid) {
      this.alertMsg("Debe ingresar todos los datos");
      return;
    }
    try{
      this.registroService.recuperarContra(f.correo)
    }catch(error: any){
      this.alertMsg(error.message);
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
