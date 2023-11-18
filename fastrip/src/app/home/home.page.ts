import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';
import { User } from '../models/models';
import { Router } from '@angular/router';
import { InteractionService } from '../services/interaction.service';
import { MenuController } from '@ionic/angular';
import { RegistroserviceService } from '../services/registroservice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{

//ESTO HACE USO DEL FOR EACH QUE ESTA JUSTO ABAJO junto con el modelo que esta en models.ts
//Esto es independiente de firebase. esto se almaceno en local.
  usuarios: User [] = [
    {
      nombre: 'Amanda',
      apepat: 'Gonzales',
      apemat: 'Carrasco',
      rut: '21554091k',
      edad: 21,
      genero: 'M',
      correo: '',
      chofer:{
      patente: 'GISP45',
      fabCoche: 'Nissan',
      }
    }
  ]

  usuario: any

  //ESTO SIRVE PARA HACER USO DE SERVICIO DE DB
  constructor(private firestore: FirestoreService, 
            private router: Router,
            private interaction: InteractionService,
            private menuController: MenuController,
            private serviceRegistro: RegistroserviceService) {
    console.log('constructor se ejecuta antes que funcion getDriver ->') ;
    //CON ESTE FOREACH TRAEMOS CADA USUARIO EN LA COLECCION DE "USUARIOS" QUE ESTA ARRIBA
    this.usuarios.forEach(usuario => [
      console.log('La edad es -> ', usuario.edad)
    ] );
    //ESTO ES PARA HACER USO DE LA FUNCION GetDriver DE MANERA AUTOMATICA Y QUE SE REFLEJE EN LA CONSOLA
    this.getDriver();

  }

  ngOnInit() {
    setTimeout(async () => {
      this.usuario = await this.serviceRegistro.getUsuarioLogeado()
      console.log(this.usuario)
    }, 500);
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

//AQUI ESTAN LOS DATOS JUNTO CON LA FUNCION PARA ENVIAR DATA POR EL MOMENTO NO AUTO RELLENADA A FIREBASE.
//LA ESTRUCTURA SE ENCUENTRA EN models.ts
  crearNuevoUsuario(){

    this.interaction.presentLoading('Guardando. Porfavor Espere...');

    const usuario: User = {
    nombre: 'Florencia',
    apepat: 'Correa',
    apemat: 'Parraguez',
    rut: '22.491.351-k',
    edad: 18,
    genero: 'M',
    correo: 'flocor@gmail.com'
    
    }
    /*CON ESTA MAMADA HACEMOS EL ROUTEO A FIREBASE DANDOLE UN COMBRE AL 'DOCUMENTO' SI NO EXISTE SE CREARA AUTOMATICO
      LUEGO SE HACE LA RUTA QUE VA ASI. (data: any, path: string, id: string)
      que te lo tradusco va asi:        (data = usuario es de tipo User que replica la estructura de la interface que esta en models.ts)
                                        (path = a que documento de firebase se va a ir)
                                        (id = vajo que nombre la coleccion se llamara)
      */
    console.log('Se envio info a firebase')
    const path = 'Usuarios';
    this.firestore.createUsr(usuario, path, 'testeo').then( () => {
      console.log('Firebase devolvio token de respuesta.');
      //con solo esto podemos hacer un pop up con el mensaje que queramos solo con agregar al constructor lo que requiere toast
      this.interaction.closeLoading();
      this.interaction.presentToast("Guardado con Exito");
    });

  }


//HACE USO CONTROLADO DE LA FUNCION DE TRAER COLECCION DE FIREBASE
  getDriver() {
  this.firestore.getCollection();
  }
}