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
  selector: 'app-eliminar-admin',
  templateUrl: './eliminar-admin.page.html',
  styleUrls: ['./eliminar-admin.page.scss'],
})
export class EliminarAdminPage implements OnInit {

  contentLoaded = false;
  admin = [];

  nombre:   string;
  apellidos:string;
  avatar:   string;
  idAdmin:  string;

  verificacion: boolean;

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
    //Se obtienen los admin de partida desde la base datos
    firebase.firestore().collection('administradores').onSnapshot((adminSnapshot) => {
      this.admin = [];
      adminSnapshot.forEach(async(adminData: any) => {
        const admin = await adminData;
        console.log(admin.data().name);
        this.admin.push(
          {
            nombre: admin.data().name,
            apellidos: admin.data().lastname,
            avatar: admin.data().avatar,
            idAdmin: admin.id          
          },
        );
      });
    });
  }

   //Se muestra el popUp del PUNTO
   PopAdmin(nombre, apellidos, avatar, idAdmin) {
    document.getElementById("PopAdmin").style.bottom = "5vh";
    document.getElementById("headerea").style.filter = "blur(2px)";
    document.getElementById("segmentea").style.filter = "blur(2px)";
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.avatar = avatar;
    this.idAdmin = idAdmin;
    this.verificarAdmin();
  }

  verificarAdmin(){
    if (this.idAdmin == firebase.auth().currentUser.uid){
      this.verificacion = false;
    } else {
      this.verificacion = true;
    }
  }

  //Se miniza el popUp del punto
  minimize() {
    document.getElementById("PopAdmin").style.bottom = "-1000px";
    document.getElementById("headerea").style.filter = "none";
    document.getElementById("segmentea").style.filter = "none";
  }

  //Función para eliminar un punto.
  borrarAdmin(){
    this.vibracion();
    this.presentDeleteAlert();
  }

  //Alerta para eliminar evento
  async presentDeleteAlert() {
    this.vibracion();
    const alert = await this.alertController.create({
      message: '¿Estás seguro de que querés eliminar '+this.nombre + this.apellidos+' como administrador?',
      buttons: [
        {
          text: 'Sí',
          handler: () => {
            this.vibracion();
            this.firestoreService.deleteAdmin(this.idAdmin);
            this.minimize();
            this.router.navigate(['/eliminar-admin']);
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
