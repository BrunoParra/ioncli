import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
      icon: 'speedometer-outline',
      name: 'Conductores verificados',
      redirecTo: '/auto'
    },
    
    {
      icon: 'happy-outline',
      name: 'About-us',
      redirecTo: '/about'
    },
  ]


  constructor(
    private router: Router,
     private route: ActivatedRoute,
     private serviceRegistro: RegistroserviceService) {}



  
  shouldShowTabs() {
    const currentRoute = this.router.url;

    const excludedRoutes = ['/home', '/registro'];
  
    return !excludedRoutes.some(route => currentRoute.includes(route));
  }
  logOut(){
    this.serviceRegistro.logOut()
    this.router.navigate(['/home']);
  }

}