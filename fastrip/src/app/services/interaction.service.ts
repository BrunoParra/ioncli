import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {
  //clase any para hacer uso de funciones de loadingController 
  loading: any;

  constructor(public toastController: ToastController, 
    public loadingController: LoadingController) { }


  //con esto creamos un mensaje de alerta por 2 segundos que indica un mensaje a nuestra eleccion 
  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }


  /*esto es para que se muestre un bloqueador de pantalla que nos 
  muestra una rueda de carga junto con su funcion para que se vaya*/
  async presentLoading(mensaje: string){
    this.loading = await this.loadingController.create({
      cssClass: 'mi-mensaje-xd',
      message:mensaje,
    });
    await this.loading.present()
  }

  async closeLoading() {
    await this.loading.dismiss();
  }




}
