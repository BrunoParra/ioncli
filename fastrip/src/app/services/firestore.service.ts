import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }



// CON ESTO AGARRAMOS LOS DATOS QUE NOSOTROS CREAMOS PARA DARSELOS A FIREBASE CON JSON Y QUE SE GUARDE BAJO SUS METODOS DE DOCUMENTO
  createUsr(data: any, path: string, id: string){

    const collection= this.firestore.collection(path);
    return collection.doc(id).set(data);
  }


//Traemos una coleccion de firebase en este caso 'Driver' con el res que es nuestra funcion void de resultado
  getCollection() {

    console.log('estoy por leer una collection');

    this.firestore.collection('Driver').valueChanges().subscribe( (res) => {

        console.log('res -> ', res);

    });
  }

  

}
