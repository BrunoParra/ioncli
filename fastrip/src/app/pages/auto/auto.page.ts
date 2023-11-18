import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.page.html',
  styleUrls: ['./auto.page.scss'],
})
export class AutoPage implements OnInit {

  constructor(private firestore: FirestoreService) { }

  ngOnInit() {
  }
//HACE USO CONTROLADO DE LA FUNCION DE TRAER COLECCION DE FIREBASE
getDriver() {
  this.firestore.getCollection();
  }
}
