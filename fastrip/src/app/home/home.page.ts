import { Component } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private firestore: FirestoreService) {}


  getDriver() {
this.firestore.getCollection();
  }
}
