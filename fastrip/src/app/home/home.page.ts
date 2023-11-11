import { Component } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private firestore: FirestoreService) {
    console.log("constructor se ejecuta antes que funcion getDriver")
  }

  getDriver() {
this.firestore.getCollection();
  }
}