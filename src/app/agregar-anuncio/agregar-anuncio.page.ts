import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, Platform } from '@ionic/angular';
import { Vibration } from '@ionic-native/vibration/ngx';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirestoreService } from './../services/firestore/firestore.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-agregar-anuncio',
  templateUrl: './agregar-anuncio.page.html',
  styleUrls: ['./agregar-anuncio.page.scss'],
})
export class AgregarAnuncioPage implements OnInit {

  descripcion: string;
  linkMisa: string;
  reservaMisa: boolean;
  titulo: string;
  anuncio1: string;
  anuncios: boolean;
  moreInfo: string;
  moreInfor = [
    { info: "Sí" },
    { info: "No" }
  ]
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private firestoreService: FirestoreService,
    private vibra: Vibration,
    public platform: Platform,) { }

  ngOnInit() {
    //Se obtiene el link para realizar la reserva de la misa
    firebase.firestore().collection('linkApp').doc('EntradasMisa').onSnapshot((linkSnapshot) => {
      const info = linkSnapshot;
      this.descripcion = info.data().descripcion;
      this.linkMisa = info.data().link;
      this.reservaMisa = info.data().reserva;
      this.titulo = info.data().titulo;
      this.anuncio1 = info.data().anuncio1;
      this.anuncios = info.data().anuncios;
    });
  }

  agregarAnuncio(){
    this.titulo;
    this.anuncio1;
    if (this.moreInfo == "Sí"){
      this.anuncios = true;
    }else{
      this.anuncios = false;
    }
    const updatedData = {
      descripcion: this.descripcion,
      link: this.linkMisa,
      reserva: this.reservaMisa,
      titulo: this.titulo,
      anuncio1: this.anuncio1,
      anuncios: this.anuncios
    };
    this.vibracion();
    this.firestoreService.updateAnuncioMisa(updatedData);
    this.router.navigate(['/eventos']);
  }

  vibracion(){
    if (this.platform.is("android")) {
      this.vibra.vibrate([50]);
    }
  }

}
