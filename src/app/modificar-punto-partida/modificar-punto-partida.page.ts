import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirestoreService } from './../services/firestore/firestore.service';
import { AlertController, Platform } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Vibration } from '@ionic-native/vibration/ngx';

@Component({
  selector: 'app-modificar-punto-partida',
  templateUrl: './modificar-punto-partida.page.html',
  styleUrls: ['./modificar-punto-partida.page.scss'],
})
export class ModificarPuntoPartidaPage implements OnInit {

  Puntos:             any;
  id:                 string;
  nombre:             string;
  kmTotal:            number;
  pasosTotal:         number;
  horas:              number;
  minutos:            number;
  tiempoMilisegundos: number;
  orden:              number;

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
    this.route.queryParams.subscribe((params) => {
      this.Puntos = { ...params.keys, ...params }
      console.log(this.Puntos);
    });
    this.route.queryParams.subscribe(params => {
      this.nombre= params['nombre'];
      this.id = params['idP'];
      this.orden = params['orden'];
      this.kmTotal = params['kmTotal'];
      this.pasosTotal = params['pasosTotal'];
      this.horas= params['horas'];
      this.minutos = params['minutos'];
      this.tiempoMilisegundos = params['tiempoMilisegundos'];
    });
  }

  modificarPunto() {
    this.nombre,
    this.orden,
    this.kmTotal,
    this.pasosTotal,
    this.horas,
    this.minutos,
    this.tiempoMilisegundos
    const updatedData = {
      nombre:this.nombre,
      orden: this.orden,
      kmTotal: this.kmTotal,
      pasosTotal: this.pasosTotal,
      horas: this.horas,
      minutos: this.minutos,
      tiempoMilisegundos: this.tiempoMilisegundos  
    };
    this.vibracion();
    this.firestoreService.updatePuntosPartida(this.id, updatedData);
    this.router.navigate(['/puntos-partida']);
  }

  vibracion(){
    if (this.platform.is("android")) {
      this.vibra.vibrate([50]);
    }
  }

}
