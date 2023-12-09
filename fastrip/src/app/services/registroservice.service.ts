import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AlertController } from '@ionic/angular';

export interface User{
  nombre: string;
  email: string;
  pass?: string;
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
  pasajeros: string[];
  conductor: string;
  valorViaje: number;
  cantidadPasajeros: number;
}

@Injectable({
  providedIn: 'root'
})
export class RegistroserviceService {
  constructor(
    private firestore: AngularFirestore, 
    private auth: AngularFireAuth, 
    private alertController: AlertController
  ) {
    this.init();
  }

  async init(){ }

  async logOut(){
    localStorage.removeItem('ingresado');
    localStorage.removeItem('useremail');
  }

  getViajes(): Promise<Viaje[]>{
    return new Promise((resolve, reject) => {
        this.firestore.collection('viajes').valueChanges().subscribe((res: any) => {
        resolve(res as Viaje[]);
      }, (err) => {
        reject(err);
      });
    });
  }

  async setEstadoViaje(idViaje: number, estado: string){
    const viaje = await this.getViajesById(idViaje.toString());

    viaje.estado = estado;
    await this.updateViaje(viaje)
  }

  async setEstadoEspera(email: string, estado: boolean){
    const usuario = await this.getUsuarioByEmail(email);

    usuario.esperado = estado;
    this.updateUsuario(usuario);
  }

  async updateUsuario(usuario: User){
    await this.firestore.collection('usuarios').doc(usuario.email).update(usuario);
  }

  async updateViaje(viaje: Viaje) {
    if (viaje.id === undefined){
      viaje.id = Date.now();
    }
    await this.firestore.collection('viajes').doc(viaje.id.toString()).update(viaje);
  }

  getViajesById(id: string): Promise<Viaje> {
    return new Promise((resolve, reject) => {
      this.firestore.collection('viajes').doc(id).valueChanges().subscribe((res: any) => {
        resolve(res as Viaje);
      }, (err) => {
        reject(err);
      });
    });
  }

  async getViajesActivos() {
    const viajes = await this.getViajes();
    return viajes.filter(viaje => viaje.estado === 'activo');
  }

  async getViajeActivoConductor(email: string): Promise<Viaje[]>{
    const viajes = await this.getViajesActivos();
    return viajes.filter(viaje => viaje.conductor === email);
  }

  getUsuarios(): Promise<User[]>{
    return new Promise((resolve, reject) => {
      this.firestore.collection('usuarios').valueChanges().subscribe((res: any) => {
        resolve(res as User[]);
      }, (err) => {
        reject(err);
      });
    });
  }

  getUsuarioByEmail(email: string): Promise<any>{
    return new Promise((resolve, reject) => {
      this.firestore.collection('usuarios').doc(email).valueChanges().subscribe((res: any) => {
        resolve(res as User);
      }, (err) => {
        reject(err);
      });
    });
  }

  async createUsuario(usuario: User): Promise<any> {
    try {
      const fbUser = await this.auth.createUserWithEmailAndPassword(usuario.email, usuario.pass!);
      if (fbUser.user) {
        fbUser.user.updateProfile({
          displayName: usuario.nombre,
        });
      }
      delete usuario.pass;
      await this.firestore.collection('usuarios').doc(usuario.email).set(usuario);
    } catch (error) {
      console.log(error);
    }
  }

  async createViaje(viaje: Viaje): Promise<void> {
    viaje.id = Date.now();
    console.log(viaje);
    await this.firestore.collection('viajes').doc(viaje.id!.toString()).set(viaje);
  }

  async getUsuarioLogeado(): Promise<User | undefined> {
    const email = localStorage.getItem('useremail');
    const usuarios = await this.getUsuarios();
    return usuarios.find(usuario => usuario.email === email);
  }

  async asignarPasajero(viaje: Viaje, emailPasajero: string): Promise<void> {
    viaje.pasajeros.push(emailPasajero);
    await this.updateViaje(viaje);
  }

  async login(email: string, pass: string): Promise<any> {
    const response = await this.auth.signInWithEmailAndPassword(email, pass);
    if (response.user) {
      localStorage.setItem('ingresado', 'true');
      localStorage.setItem('useremail', response.user.email as string);
      localStorage.setItem('sesion',JSON.stringify(response.user));
    }
  }

  async error(message: string){
    const alert = await this.alertController.create({
      header: 'Error..',
      message: message,
      buttons: ['Aceptar'],
    });
    await alert.present();
    return;
  }

  async recuperarContra(email: string){
    await this.auth.sendPasswordResetEmail(email);
  }
}
