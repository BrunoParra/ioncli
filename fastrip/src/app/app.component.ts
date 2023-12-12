import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegistroserviceService, User } from './services/registroservice.service';
import { RefreshService } from './services/refresh.service';
import { Subscription } from 'rxjs';

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

  subscription: Subscription;
  user?: User;
  

  constructor(
    private serviceRegistro: RegistroserviceService,
    private router: Router,
    private refreshService: RefreshService
  ) {
    this.subscription =  this.refreshService.getRefreshObservable().subscribe(async () => {
      this.user = await this.serviceRegistro.getUsuarioLogeado();
    });
  }

  async ngOnInit() {
    this.user = await this.serviceRegistro.getUsuarioLogeado();
  }
  
  logOut(){
    this.serviceRegistro.logOut()
    this.user = undefined;
    this.router.navigate(['/inicio']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}