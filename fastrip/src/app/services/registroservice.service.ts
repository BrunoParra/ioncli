import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'


export interface User{
  id?: number;
  nombre: string;
  email: string;
  pass: string;
  conductor: boolean;
  esperando?: boolean;
}

export interface Viaje{
  id?: number;
  estado: string;
  patente: string,
  destino: {
      lat: number;
      lng: number;
      direccion: string;
  };
  pasajeros: number[];
  conductor: number;
  valorViaje: number;
  cantidadPasajeros: number;
}

const USERS_KEY = 'my-usuarios';

@Injectable({
  providedIn: 'root'
})
export class RegistroserviceService {


  constructor(private http: HttpClient) {
    this.init();
  }

  async init(){ }

  async logOut(){
    localStorage.removeItem('ingresado');
    localStorage.removeItem('useremail');
  }

  getViajes(): Promise<Viaje[]>{
    return new Promise((resolve, reject) => {
      this.http.get(environment.dirapi + 'viaje').subscribe((res: any) =>{
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  async setEstadoViaje(idViaje: number, estado: string){
    const viaje = await this.getViajesById(idViaje);

    viaje.estado = estado;
    await this.updateViaje(viaje)
  }

  async setEstadoEspera(idUsuario: number, estado: boolean){
    const usuario = await this.getUsuarioById(idUsuario);

    usuario.esperado = estado;
    this.updateUsuario(usuario);
  }

  updateUsuario(usuario: User){
    return this.http.put<User>(environment.dirapi + 'usuarios/'+usuario.id, usuario).subscribe 
  }

  updateViaje(viaje: Viaje){
    return this.http.put<Viaje>(environment.dirapi + 'viajes/'+viaje.id, viaje).subscribe
  }

  getViajesById(id: number): Promise<Viaje>{
    return new Promise((resolve, reject) => {
      this.http.get(environment.dirapi+'viajes/' + id).subscribe((res: any) => {
      resolve(res);
      }, (err) =>{
        reject(err);
      });
    });
  }

  getViajesActivos(): Promise<Viaje[]>{
    return new Promise((resolve, reject) =>{
      this.http.get(environment.dirapi+'viajes?estado=activo').subscribe((res: any) => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  getViajeActivoConductor(id: number): Promise<Viaje[]>{
    return new Promise((resolve, reject) => {
      this.http.get(`${environment.dirapi}viajes?conductor=${id}&estado=activo`).subscribe((res: any) => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  getUsuarios(): Promise<User[]>{
    return new Promise((resolve, reject) => {
      this.http.get(environment.dirapi +'usuarios').subscribe((res: any) => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  getUsuarioById(id: number): Promise<any>{
    return new Promise((resolve, reject) => {
      this.http.get(environment.dirapi +'usuarios/' + id).subscribe((res: any) => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  async createUsuario(usuario: User): Promise<any>{
    usuario.id = Date.now();
    const usuarios = await this.getUsuarios();
    let existe = 0;

    return new Promise((resolve, reject) => {
      usuarios.forEach(usr => {
        if (usr.email === usuario.email){
          existe = 1;
        } else {
          this.http.post<any>(environment.dirapi +'usuarios', usuario).subscribe(data => {
            resolve(data);
          }, (err) => {
            reject(err);
          });
        };
      });
    });
  }

  async createViaje(viaje: Viaje): Promise<any>{
    viaje.id = Date.now();

    return new Promise((resolve, reject) => {
      this.http.post<any>(environment.dirapi +'viajes', viaje).subscribe(data => resolve(data),
      (err) => reject(err));
    });
  }

  async getUsuarioLogeado(){
    const email = localStorage.getItem('useremail');
    const usuarios = await this.getUsuarios();
    return usuarios.find(usuario => usuario.email === email);
  }

  async asignarPasajero(viaje: Viaje, id: number): Promise<any>{

    viaje.pasajeros.push(id);

    return new Promise((resolve, reject) => {
      this.http.put<any>(environment.dirapi +'viajes/' + viaje.id, viaje).subscribe(data => resolve(data),
      (err) => reject(err));
    });
  }
}
