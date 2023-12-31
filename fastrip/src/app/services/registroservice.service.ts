import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Usuario{
  nomUsuario: string;
  correoUsuario: string;
  passUsuario: string;
  repassUsuario: string;
  rol: string;
}

const USERS_KEY = 'my-usuarios';

@Injectable({
  providedIn: 'root'
})
export class RegistroserviceService {

  private _storage!: Storage;
  newUsuario: Usuario = <Usuario>{};

  constructor(private storage: Storage) {
    this.init();
  }

  async init(){
    const storage = await this.storage.create();
    this._storage= storage;
  }

  async addDatos(dato: Usuario):Promise<any>{
    return this.storage.get(USERS_KEY).then((datos : Usuario[])=>{
      if (datos) {
        datos.push(dato);
        return this.storage.set(USERS_KEY, datos);
      }else {
        return this.storage.set(USERS_KEY, [dato]);
      }
    })
  }

  async getUsuarios(): Promise<Usuario[]>{
    return this.storage.get(USERS_KEY);
  }

  async obtenerUsuario(){
    const email = localStorage.getItem('useremail')
    const usuarios = await this.getUsuarios()
    const encontrado = usuarios.find(usuario => usuario.correoUsuario === email);
    console.log(encontrado)
    return encontrado
  }

  async logOut(){
    localStorage.removeItem('ingresado');
    localStorage.removeItem('useremail');
  }
}
