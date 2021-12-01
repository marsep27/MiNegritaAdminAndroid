import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { take } from 'rxjs/operators';
import { FirestoreService } from './../services/firestore/firestore.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Platform, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';
import { IonRange } from "@ionic/angular";
import { Vibration } from '@ionic-native/vibration/ngx';
import * as firebase from 'firebase';
import { Reference } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-puntos-partida',
  templateUrl: './puntos-partida.page.html',
  styleUrls: ['./puntos-partida.page.scss'],
})
export class PuntosPartidaPage implements OnInit {

  contentLoaded = false;
  Puntos = [];

  nombre:             string;
  kmTotal:            number;
  pasosTotal:         number;
  horas:              number;
  minutos:            number;
  tiempoMilisegundos: number;
  orden:              number;
  idPunto:            string;

  constructor(public alertController: AlertController,
    public platform: Platform,
    private router: Router,
    private route: ActivatedRoute,
    private firestoreService: FirestoreService,
    private vibra: Vibration,
    private firestore: AngularFirestore,
    public Toast: ToastController) {

    //Simulate data loading in
    setTimeout(() => {
      this.contentLoaded = true
    }, 2000);
    
  }

  ngOnInit() {
    //Se obtienen los puntos de partida desde la base datos
    firebase.firestore().collection('partidasdeinicio').orderBy('orden').onSnapshot((puntosSnapshot) => {
      this.Puntos = [];
      puntosSnapshot.forEach(async(puntosData: any) => {
        const puntos = await puntosData;
        console.log(puntos.data().nombre);
        this.Puntos.push(
          {
            nombre: puntos.data().nombre,
            orden: puntos.data().orden,
            kmTotal: puntos.data().kmTotal,
            pasosTotal: puntos.data().pasosTotal,
            horas: puntos.data().horas,
            minutos: puntos.data().minutos,
            tiempoMilisegundos: puntos.data().tiempoMilisegundos,
            idPunto: puntos.id          
          },
        );
      });
    });
  }

   //Se muestra el popUp del PUNTO
   PopPunto(nombre, orden, kmTotal, pasosTotal, horas, minutos, tiempoMilisegundos, idPunto) {
    document.getElementById("PopPunto").style.bottom = "5vh";
    document.getElementById("headerPp").style.filter = "blur(2px)";
    document.getElementById("segmentPp").style.filter = "blur(2px)";
    this.nombre = nombre;
    this.orden = orden;
    this.kmTotal = kmTotal;
    this.pasosTotal = pasosTotal;
    this.horas = horas;
    this.minutos = minutos;
    this.tiempoMilisegundos = tiempoMilisegundos;
    this.idPunto = idPunto;
  }

  //Se miniza el popUp del punto
  minimize() {
    document.getElementById("PopPunto").style.bottom = "-1000px";
    document.getElementById("headerPp").style.filter = "none";
    document.getElementById("segmentPp").style.filter = "none";
  }

  //Función para ir a modificar el punto
  goModificarPunto(){
    this.minimize();
    this.router.navigate(['/modificar-punto-partida'],
    {queryParams:{
      nombre:this.nombre,
      idP: this.idPunto,
      orden: this.orden,
      kmTotal: this.kmTotal,
      pasosTotal: this.pasosTotal,
      horas: this.horas,
      minutos: this.minutos,
      tiempoMilisegundos: this.tiempoMilisegundos}} );
  }

  //Función para eliminar un punto.
  borrarPunto(){
    this.vibracion();
    this.presentDeleteAlert();
  }

  //Alerta para eliminar evento
  async presentDeleteAlert() {
    this.vibracion();
    const alert = await this.alertController.create({
      message: '¿Estás seguro de que querés eliminar '+this.nombre+' como punto de partida?',
      buttons: [
        {
          text: 'Sí',
          handler: () => {
            this.vibracion();
            this.firestoreService.deletePuntosPartida(this.idPunto);
            this.minimize();
            this.router.navigate(['/puntos-partida']);
          }
        },
        {
          text: 'No',
          role: 'cancel'
        }
      ]
    });

    await alert.present();
  }

  vibracion(){
    if (this.platform.is("android")) {
      this.vibra.vibrate([50]);
    }
  }

}
