import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CKEditorComponent } from 'ng2-ckeditor';
import { AlertController, Platform } from '@ionic/angular';
import { Vibration } from '@ionic-native/vibration/ngx';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirestoreService } from './../services/firestore/firestore.service';

@Component({
  selector: 'app-modificar-evento',
  templateUrl: './modificar-evento.page.html',
  styleUrls: ['./modificar-evento.page.scss'],
})
export class ModificarEventoPage implements OnInit {

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

  evento: any;

  date:         any;
  dia:          string;
  hora:         string;
  mes:          string;
  nombre:       string;
  direccion:    string;
  fecha:        string;
  info:         string;
  moreInfo:     string;
  reserva:      boolean;
  link:         string;
  eventoID:     string;
  diaFecha: any;
  mesFecha: any;
  añoFecha: any;

  constructor(private router: Router,
    private route: ActivatedRoute,
    public platform: Platform,
    private firestoreService: FirestoreService,
    private firestore: AngularFirestore,
    private vibra: Vibration) { 
    }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.evento = { ...params.keys, ...params }
      console.log(this.evento);
    });
    this.route.queryParams.subscribe(params => {
      this.date = params['date'];
      this.dia = params['dia'];
      this.mes = params['mes'];
      this.hora = params['hora'];
      this.nombre = params['currNombre'];
      this.direccion = params['currDireccion'];
      this.fecha = params['currFecha'];
      this.info = params['currInfo'];
      this.reserva = params['currReserva'];
      this.link = params['currLink'];
      this.eventoID = params['currOptionId'];
      console.log(this.reserva)
      ;
    });
    this.revisarReserva();
  }

  revisarReserva(){
    console.log(this.reserva);
    if(this.reserva == true){
      this.moreInfo = 'No'
    }else{
      this.moreInfo = 'Sí'
    }
  }

  modificarEvento(){
    this.date;
    this.dia;
    this.direccion;
    var date = this.date;
    this.intForStringMonth(date.getMonth());
    this.diaFecha = date.getDate();
    this.añoFecha = date.getFullYear();
    this.fecha = this.diaFecha+" de "+this.mesFecha+" del "+this.añoFecha;
    console.log(this.fecha);
    this.hora;
    this.info;
    this.link;
    this.mes;
    this.nombre;
    if (this.moreInfo == "Sí"){
      this.reserva = true;
    }else{
      this.reserva = false;
    }
    console.log(this.reserva);
    this.vibracion();
    const updatedData = {
      date: this.date,
      dia: this.dia,
      direccion: this.direccion,
      fecha: this.fecha,
      hora: this.hora,
      informacion: this.info,
      link: this.link,
      mes: this.mes, 
      nombre: this.nombre,
      reserva: this.reserva
    };
    this.firestoreService.updateEvento(this.eventoID, updatedData);
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

