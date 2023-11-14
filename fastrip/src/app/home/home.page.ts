import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';
import { Chofer } from '../models/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{

  amanda: Chofer = {
    nombre: 'Amanda',
    apepat: 'Gonzales',
    apemat: 'Carrasco',
    rut: '21554091k',
    edad: 21,
    genero: 'M',
    patente: 'GISP45',
    fabCoche: 'Nissan',

  }

  conductores: Chofer [] = [
    {
      nombre: 'Amanda',
      apepat: 'Gonzales',
      apemat: 'Carrasco',
      rut: '21554091k',
      edad: 21,
      genero: 'M',
      patente: 'GISP45',
      fabCoche: 'Nissan',
  
    }
  ]

  //ESTO SIRVE PARA HACER USO DE SERVICIO DE DB
  constructor(private firestore: FirestoreService, private router: Router) {
    console.log('constructor se ejecuta antes que funcion getDriver ->') ;
    this.conductores.forEach(choferes => [
      console.log('La edad es -> ', choferes.edad)
    ] );
    this.getDriver();


  }

  login() {

    this.router.navigate(['/login'])
  }

  logout(){

    this.router.navigate(['/logout'])
  }

  ngOnInit() {
  }


  crearNuevoChofer(){
    
    this.firestore.createDoc()

  }

//aaaa

  getDriver() {
  this.firestore.getCollection();
  }
}