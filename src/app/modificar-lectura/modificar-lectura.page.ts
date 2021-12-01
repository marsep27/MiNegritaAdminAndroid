import { Component, OnInit } from '@angular/core';
import { Vibration } from '@ionic-native/vibration/ngx';
import * as firebase from 'firebase';
import { Platform, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { FirestoreService } from './../services/firestore/firestore.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Component({
  selector: 'app-modificar-lectura',
  templateUrl: './modificar-lectura.page.html',
  styleUrls: ['./modificar-lectura.page.scss'],
})
export class ModificarLecturaPage implements OnInit {

  lectura:  any;

  title:    string;
  subtitle: string;
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
      this.lectura = { ...params.keys, ...params }
      console.log(this.lectura);
    });
    this.route.queryParams.subscribe(params => {
      this.title= params['title'];
      this.subtitle = params['subtitle'];
      this.text = params['text'];
      this.id = params['idLec'];
      this.orden = params['orden'];
    });
  }

  modificarLectura(){
    this.title;
    this.subtitle;
    this.text;
    const updatedData = {
      title: this.title,
      subtitle: this.subtitle,
      text: this.text,
      orden: this.orden
    };
    this.firestoreService.updateLectura(this.id, updatedData);
    this.router.navigate(['/devocionario']);
  }

}
