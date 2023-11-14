import { Component } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private firestore: FirestoreService, private router: Router) {}

  login() {

    this.router.navigate(['/login'])
  }

  logout(){

    this.router.navigate(['/logout'])
  }

  ngOnInit() {
  }

  getDriver() {
this.firestore.getCollection();
  }
}
