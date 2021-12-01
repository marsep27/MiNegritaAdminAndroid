import { Component, OnInit } from '@angular/core';
import { Vibration } from '@ionic-native/vibration/ngx';
import * as firebase from 'firebase';
import { Platform, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { FirestoreService } from './../services/firestore/firestore.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Component({
  selector: 'app-modificar-santoral',
  templateUrl: './modificar-santoral.page.html',
  styleUrls: ['./modificar-santoral.page.scss'],
})
export class ModificarSantoralPage implements OnInit {

  datos: any;

  mes:   string;
  dias:  string;
  orden: number;

  constructor(
    public platform: Platform,
    private router: Router,
    private route: ActivatedRoute,
    private firestoreService: FirestoreService,
    private vibra: Vibration,
    private firestore: AngularFirestore
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.datos = params;
      this.mes = params['mes'];
      this.dias = params['dias'];
      this.orden = params['orden'];
    })
    console.log(this.mes);
    console.log(this.orden);
  }

  modificarSantoral(){
    this.vibracion();
    switch (this.mes){
      case 'Enero':
        const updatedData = {
          mes: this.mes,
          dias: this.dias,
          orden: 1
        };
        this.firestoreService.updateSantoral(this.mes, updatedData);
        this.router.navigate(['/eventos']);
        break
      case 'Febrero':
        const updatedData2 = {
          mes: this.mes,
          dias: this.dias,
          orden: 2
        };
        this.firestoreService.updateSantoral(this.mes, updatedData2);
        this.router.navigate(['/eventos']);
        break
      case 'Marzo':
        const updatedData3 = {
          mes: this.mes,
          dias: this.dias,
          orden: 3
        };
        this.firestoreService.updateSantoral(this.mes, updatedData3);
        this.router.navigate(['/eventos']);
        break
      case 'Abril':
        const updatedData4 = {
          mes: this.mes,
          dias: this.dias,
          orden: 4
        };
        this.firestoreService.updateSantoral(this.mes, updatedData4);
        this.router.navigate(['/eventos']);
        break
      case 'Mayo':
        const updatedData5 = {
          mes: this.mes,
          dias: this.dias,
          orden: 5
        };
        this.firestoreService.updateSantoral(this.mes, updatedData5);
        this.router.navigate(['/eventos']);
        break
      case 'Junio':
        const updatedData6 = {
          mes: this.mes,
          dias: this.dias,
          orden: 6
        };
        this.firestoreService.updateSantoral(this.mes, updatedData6);
        this.router.navigate(['/eventos']);
        break
      case 'Julio':
        const updatedData7 = {
          mes: this.mes,
          dias: this.dias,
          orden: 7
        };
        this.firestoreService.updateSantoral(this.mes, updatedData7);
        this.router.navigate(['/eventos']);
        break
      case 'Agosto':
        const updatedData8 = {
          mes: this.mes,
          dias: this.dias,
          orden: 8
        };
        this.firestoreService.updateSantoral(this.mes, updatedData8);
        this.router.navigate(['/eventos']);
        break
      case 'Septiembre':
        const updatedData9 = {
          mes: this.mes,
          dias: this.dias,
          orden: 9
        };
        this.firestoreService.updateSantoral(this.mes, updatedData9);
        this.router.navigate(['/eventos']);
        break
      case 'Octubre':
        const updatedData10 = {
          mes: this.mes,
          dias: this.dias,
          orden: 10
        };
        this.firestoreService.updateSantoral(this.mes, updatedData10);
        this.router.navigate(['/eventos']);
        break
      case 'Noviembre':
        const updatedData11 = {
          mes: this.mes,
          dias: this.dias,
          orden: 1
        };
        this.firestoreService.updateSantoral(this.mes, updatedData11);
        this.router.navigate(['/eventos']);
        break
      case 'Diciembre':
        const updatedData12 = {
          mes: this.mes,
          dias: this.dias,
          orden: 12
        };
        this.firestoreService.updateSantoral(this.mes, updatedData12);
        this.router.navigate(['/eventos']);
        break
    }
  }

  vibracion(){
    if (this.platform.is("android")) {
      this.vibra.vibrate([50]);
    }
  }
}
