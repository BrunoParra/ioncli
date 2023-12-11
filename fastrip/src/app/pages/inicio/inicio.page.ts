import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {

  constructor(private router: Router) {}


  irALogin() {
    this.router.navigate(['/login']); // Asegúrate de que 'login' sea la ruta correcta
  }

  irARegistro() {
    this.router.navigate(['/registro']); // Asegúrate de que 'registro' sea la ruta correcta
  }
}
