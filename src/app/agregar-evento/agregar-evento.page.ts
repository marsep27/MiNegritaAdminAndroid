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
  selector: 'app-agregar-evento',
  templateUrl: './agregar-evento.page.html',
  styleUrls: ['./agregar-evento.page.scss'],
})
export class AgregarEventoPage implements OnInit {

  dias = [
    { dia: "01" },
    { dia: "02" },
    { dia: "03" },
    { dia: "04" },
    { dia: "05" },
    { dia: "06" },
    { dia: "07" },
    { dia: "08" },
    { dia: "09" },
    { dia: "10" },
    { dia: "11" },
    { dia: "12" },
    { dia: "13" },
    { dia: "14" },
    { dia: "15" },
    { dia: "16" },
    { dia: "17" },
    { dia: "18" },
    { dia: "19" },
    { dia: "20" },
    { dia: "21" },
    { dia: "22" },
    { dia: "23" },
    { dia: "24" },
    { dia: "25" },
    { dia: "26" },
    { dia: "27" },
    { dia: "28" },
    { dia: "29" },
    { dia: "30" },
    { dia: "31" },
    { dia: "💙💙" },
    { dia: "❤️❤️" },
    { dia: "⭐⭐" },
    { dia: "🌹" },
    { dia: "" }
  ]

  meses = [
    { mes: "ENE" },
    { mes: "FEB" },
    { mes: "MAR" },
    { mes: "ABR" },
    { mes: "MAY" },
    { mes: "JUN" },
    { mes: "JUL" },
    { mes: "AGO" },
    { mes: "SEP" },
    { mes: "OCT" },
    { mes: "NOV" },
    { mes: "DIC" },
    { mes: "︶" },
    { mes: "" },
  ]

  moreInfor = [
    { info: "Sí" },
    { info: "No" }
  ]

  date: any;
  diaSelect: string;
  direccionFinal: string;
  fechaFinal: string;
  diaFecha: any;
  mesFecha: any;
  añoFecha: any;
  horaFinal: string;
  información: string;
  linkFinal: string;
  mesSelect: string;
  nombreFinal: string;
  reserva: boolean;

  ckeditorcontent: string;
  @ViewChild(CKEditorComponent) ckEditor: CKEditorComponent;

  cgAfterViewChecked(){
    let editor = this. ckEditor.instance;
    editor.config.height = '400';
    editor.config.toolbar = [
      { name: 'basicstyles', items: [ 'Bold', 'Italic' ] },
      { name: 'paragraph', items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent' ] }
    ];
  }

  eventoForm: FormGroup;
  get nombre() {
    return this.eventoForm.get('nombre');
  }
  get dia() {
    return this.eventoForm.get('dia');
  }
  get mes() {
    return this.eventoForm.get('mes');
  }
  get hora() {
    return this.eventoForm.get('hora');
  }
  get fecha() {
    return this.eventoForm.get('fecha');
  }
  get direccion() {
    return this.eventoForm.get('direccion');
  }
  get informacion() {
    return this.eventoForm.get('informacion');
  }
  get moreInfo() {
    return this.eventoForm.get('moreInfo');
  }
  get link() {
    return this.eventoForm.get('link');
  }

  constructor(
    private formBuilder: FormBuilder,
    public platform: Platform,
    private db: AngularFireDatabase,
    private router: Router,
    private route: ActivatedRoute,
    private firestoreService: FirestoreService,
    private firestore: AngularFirestore,
    private vibra: Vibration) {
  }

  ngOnInit() {
    this.eventoForm = this.formBuilder.group({
      nombre: [''],
      hora: [''],
      dia: [''],
      mes: [''],
      fecha: [''],
      direccion: [''],
      moreInfo: [''],
      link: ['']
    })
  }

  crearEvento() {
    this.date = this.eventoForm.controls['fecha'].value;
    console.log(this.date);
    this.diaSelect = this.eventoForm.controls['dia'].value;
    console.log(this.diaSelect);
    this.direccionFinal = this.eventoForm.controls['direccion'].value;
    console.log(this.direccionFinal);
    var date = new Date(this.eventoForm.controls['fecha'].value);
    this.intForStringMonth(date.getMonth());
    this.diaFecha = date.getDate();
    this.añoFecha = date.getFullYear();
    this.fechaFinal = this.diaFecha+" de "+this.mesFecha+" del "+this.añoFecha;
    console.log(this.fechaFinal);
    this.horaFinal = this.eventoForm.controls['hora'].value;
    console.log(this.horaFinal);
    this.información = this.ckeditorcontent;
    console.log(this.ckeditorcontent);
    this.linkFinal = this.eventoForm.controls['link'].value;
    console.log(this.linkFinal);
    this.mesSelect = this.eventoForm.controls['mes'].value;
    console.log(this.mesSelect);
    this.nombreFinal = this.eventoForm.controls['nombre'].value;
    console.log(this.nombreFinal);
    if (this.eventoForm.controls['moreInfo'].value == "Sí"){
      this.reserva = true;
    }else{
      this.reserva = false;
    }
    console.log(this.reserva);
    this.firestoreService.crearEvento(this.date, this.diaSelect, this.direccionFinal, this.fechaFinal, this.horaFinal, this.información, this.linkFinal, this.mesSelect, this.nombreFinal, this.reserva);
    this.router.navigate(['/eventos']);
  }

  intForStringMonth(month){
    switch (month){
      case 1:
        this.mesFecha = "enero"
        break;
      case 2:
        this.mesFecha = "febrero"
        break;
      case 3:
        this.mesFecha = "marzo"
        break;
      case 4:
        this.mesFecha = "abril"
        break;
      case 5:
        this.mesFecha = "mayo"
        break;
      case 6:
        this.mesFecha = "junio"
        break;
      case 7:
        this.mesFecha = "julio"
        break;
      case 8:
        this.mesFecha = "agosto"
        break;
      case 9:
        this.mesFecha = "septiembre"
        break;
      case 10:
        this.mesFecha = "octubre"
        break;
      case 11:
        this.mesFecha = "noviembre"
        break;
      case 12:
        this.mesFecha = "diciembre"
        break;    
    }
  }

  vibracion(){
    if (this.platform.is("android")) {
      this.vibra.vibrate([50]);
    }
  }
}
