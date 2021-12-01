import { Component, OnInit } from '@angular/core';
import { Vibration } from '@ionic-native/vibration/ngx';
import * as firebase from 'firebase';
import { Platform, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { FirestoreService } from './../services/firestore/firestore.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Component({
  selector: 'app-modificar-meditacion',
  templateUrl: './modificar-meditacion.page.html',
  styleUrls: ['./modificar-meditacion.page.scss'],
})
export class ModificarMeditacionPage implements OnInit {

  meditacion:  any;

  title:    string;
  text:     string;
  orden:    number;
  id:       string;

  constructor(
    public platform: Platform,
    private router: Router,
    private route: ActivatedRoute,
    private firestoreService: FirestoreService,
    private vibra: Vibration,
    private firestore: AngularFirestore) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.meditacion = { ...params.keys, ...params }
      console.log(this.meditacion);
    });
    this.route.queryParams.subscribe(params => {
      this.title= params['title'];
      this.text = params['text'];
      this.id = params['idMed'];
      this.orden = params['orden']
    });
  }

  modificarMeditacion(){
    this.title;
    this.text;
    const updatedData = {
      title: this.title,
      text: this.text,
      orden: this.orden
    };
    this.firestoreService.updateMeditacion(this.id, updatedData);
    this.router.navigate(['/devocionario']);
  }

}
