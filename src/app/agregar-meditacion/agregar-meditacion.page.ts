import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirestoreService } from './../services/firestore/firestore.service';
import { AlertController, Platform } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { CKEditorComponent } from 'ng2-ckeditor';
import { Vibration } from '@ionic-native/vibration/ngx';

@Component({
  selector: 'app-agregar-meditacion',
  templateUrl: './agregar-meditacion.page.html',
  styleUrls: ['./agregar-meditacion.page.scss'],
})
export class AgregarMeditacionPage implements OnInit {

  title:    string;
  text:     string;
  contador: number;

  constructor(
    private formBuilder: FormBuilder,
    public platform: Platform,
    private db: AngularFireDatabase,
    private router: Router,
    private route: ActivatedRoute,
    private firestoreService: FirestoreService,
    private firestore: AngularFirestore,
    private vibra: Vibration) { }

  ngOnInit() {
  }

  crearMeditacion() {
    this.title;
    this.text;
    this.contador = 27
    const updatedData = {
      title: this.title,
      text: this.text,
      orden: this.contador
    };
    this.vibracion();
    this.firestoreService.updateMeditacion(this.title, updatedData);
    this.router.navigate(['/devocionario']);
  }

  vibracion(){
    if (this.platform.is("android")) {
      this.vibra.vibrate([50]);
    }
  }

}
