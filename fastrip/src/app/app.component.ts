import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegistroserviceService } from './services/registroservice.service';

interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  componentes : Componente[] = [
    {
      icon: 'car-outline',
      name: 'Inicio',
      redirecTo: '/home'
    },
    {
      icon: 'sunny-outline',
      name: 'About-Us',
      redirecTo: '/about'
    },
    {
      icon: 'paw-outline',
      name: 'Login',
      redirecTo: '/login'
    },
    {
      icon: 'beaker-outline',
      name: 'Registro',
      redirecTo: '/registro'
    },
  ]
  constructor(private serviceRegistro: RegistroserviceService, private router: Router) {}

  logOut(){
    this.serviceRegistro.logOut()
    this.router.navigate(['/login']);
  }
}