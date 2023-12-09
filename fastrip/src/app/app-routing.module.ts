import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { 
    path: 'about',
    loadChildren: () => import('./pages/about-us/about-us.module').then(m => m.AboutUsPageModule)
  },
  { 
    path: 'login',
     loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule) 
  },
  { 
    path: 'registro',
     loadChildren: () => import('./pages/registro/registro.module').then(m => m.RegistroPageModule) 
  },
  {
    path: 'form-prestar',
    loadChildren: () => import('./pages/form-prestar/form-prestar.module').then( m => m.FormPrestarPageModule)
  },
  {
    path: 'esperando-pasajero',
    loadChildren: () => import('./pages/esperando-pasajeros/esperando-pasajeros.module').then( m => m.EsperandoPasajeroPageModule)
  },
  {
    path: 'viaje',
    loadChildren: () => import('./pages/viaje/viaje.module').then( m => m.ViajePageModule)
  },
  {
    path: 'buscar-conductor',
    loadChildren: () => import('./pages/buscar-conductor/buscar-conductor.module').then( m => m.BuscarConductorPageModule)
  },
  {
    path: 'viajes-activos',
    loadChildren: () => import('./pages/viajes-activos/viajes-activos.module').then( m => m.ViajesActivosPageModule)
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./pages/recuperar/recuperar.module').then( m => m.RecuperarPageModule)
  },

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
