import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  creatDoc() {
    this.firestore.collection('Driver')
  }

  getCollection() {

    console.log('estoy por leer una collection');

    this.firestore.collection('Driver').valueChanges().subscribe( (res) => {

        console.log('res -> ', res);

    });
  }

  

}
