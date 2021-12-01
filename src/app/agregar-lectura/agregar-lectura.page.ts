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
  selector: 'app-agregar-lectura',
  templateUrl: './agregar-lectura.page.html',
  styleUrls: ['./agregar-lectura.page.scss'],
})
export class AgregarLecturaPage implements OnInit {

  title:    string;
  subtitle: string;
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

  crearLectura() {
    this.title;
    this.subtitle;
    this.text;
    this.contador = 12;
    const updatedData = {
      title: this.title,
      subtitle: this.subtitle,
      text: this.text,
      orden: this.contador
    };
    this.vibracion();
    this.firestoreService.updateLectura(this.title, updatedData);
    this.router.navigate(['/devocionario']);
  }

  vibracion(){
    if (this.platform.is("android")) {
      this.vibra.vibrate([50]);
    }
  }

}
