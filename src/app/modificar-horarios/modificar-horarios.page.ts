import { Component, OnInit } from '@angular/core';
import { Vibration } from '@ionic-native/vibration/ngx';
import * as firebase from 'firebase';
import { Platform, ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { FirestoreService } from './../services/firestore/firestore.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Component({
  selector: 'app-modificar-horarios',
  templateUrl: './modificar-horarios.page.html',
  styleUrls: ['./modificar-horarios.page.scss'],
})
export class ModificarHorariosPage implements OnInit {

  datos:             any;
  modificacion:      string;
  infoModificacion:  string;
  habilModificacion: boolean;
  tel:               string;
  habilitarTel:      boolean;

  habilConfesion:  boolean;
  habilConsejo:    boolean;
  habilHoraSanta:  boolean;
  habilMisas:      boolean;
  habilOficina:    boolean;
  habilPyP:        boolean;
  habilAnuncio:    boolean;
  titulo:          string;
  anuncio1:        string;
  anuncio2:        string;
  anuncio3:        string;
  anuncio4:        string;
  descripcion:     string;
  misa:            string;
  horMisa:         string;
  confesion:       string;
  horConfesion:    string;
  horaSanta:       string;
  horHoraSanta:    string;
  consejo:         string;
  horaConsejo:     string;
  pilaYpiedra:     string;
  horPyP:          string;
  oficina:         string;
  horOficina:      string;
  oficinaTelefono: string;

  moreInfo: string;
  moreInfor = [
    { info: "Sí" },
    { info: "No" }
  ]

  constructor(
    public platform: Platform,
    private router: Router,
    private route: ActivatedRoute,
    private firestoreService: FirestoreService,
    private vibra: Vibration,
    private firestore: AngularFirestore) { }

  ngOnInit() {
    //Se obtienen los horarios de la base de datos
    firebase.firestore().collection('horarios').onSnapshot((horarioSnapshot) => {
      horarioSnapshot.forEach(async (horarioData: any) => {
        // doc.data() is never undefined for query doc snapshots
        const horario = await horarioData;
        console.log(horario.id, " => ", horario.data());
        this.misa = horario.data().misas;
        this.horMisa = horario.data().misashorario;
        this.confesion = horario.data().confesiones;
        this.horConfesion = horario.data().confesioneshorario;
        this.horaSanta = horario.data().horasanta;
        this.horHoraSanta = horario.data().horasantahorario;
        this.consejo = horario.data().consejeria;
        this.horaConsejo = horario.data().consejeriahorario;
        this.pilaYpiedra = horario.data().pilaypiedra;
        this.horPyP = horario.data().pilaypiedrahorario;
        this.oficina = horario.data().oficina;
        this.horOficina = horario.data().oficinahorario;
        this.habilConfesion= horario.data().habilitarConfesiones;
        this.habilConsejo = horario.data().habilitarConsejo;
        this.habilHoraSanta = horario.data().habilitarHorasanta;
        this.habilMisas = horario.data().habilitarMisas;
        this.habilOficina = horario.data().habilitarOficina;
        this.habilPyP = horario.data().habilitarPilayPiedra;
        this.oficinaTelefono = horario.data().oficinaTelefono;
      });
    });
    this.traerHorario();
    this.revisarBoolean();
  }

  revisarBoolean(){
    switch (this.modificacion){
      case 'Confesiones':
        if(this.habilConfesion == true){
          this.moreInfo = 'No'
        }else{
          this.moreInfo = 'Sí'
        }
        break
      case 'Consejería':
        if(this.habilConsejo == true){
          this.moreInfo = 'No'
        }else{
          this.moreInfo = 'Sí'
        }
        break
      case 'Hora Santa':
        if(this.habilHoraSanta == true){
          this.moreInfo = 'No'
        }else{
          this.moreInfo = 'Sí'
        }
        break
      case 'Misas':
        if(this.habilMisas == true){
          this.moreInfo = 'No'
        }else{
          this.moreInfo = 'Sí'
        }
        break
      case 'Oficina parroquial':
        if(this.habilOficina == true){
          this.moreInfo = 'No'
        }else{
          this.moreInfo = 'Sí'
        }
        break
      case 'Pila y Piedra':
        if(this.habilPyP == true){
          this.moreInfo = 'No'
        }else{
          this.moreInfo = 'Sí'
        }
        break
    }
  }

  traerHorario(){
    this.route.queryParams.subscribe(params => {
      this.datos = params;
      this.modificacion = params['modificacion'];
      this.infoModificacion = params['infoModificacion'];
      this.habilModificacion = params['habilModificacion'];
      this.tel = params['tel'];
      if (this.modificacion == "Oficina"){
        this.habilitarTel = true;
      } else {
        this.habilitarTel = false;
      }
    })
  }

  modificarHorario(){
    this.vibracion();
    switch (this.modificacion){
      case "Confesiones":
        this.horConfesion = this.infoModificacion;
        if (this.moreInfo == "Sí"){
          this.habilModificacion = true;
        }else{
          this.habilModificacion = false;
        }
        this.habilConfesion = this.habilModificacion;
        const updatedData = {
          misas: this.misa,
          misashorario: this.horMisa,
          confesiones: this.confesion,
          confesioneshorario: this.horConfesion,
          horasanta: this.horaSanta,
          horasantahorario: this.horHoraSanta,
          consejeria:this.consejo,
          consejeriahorario: this.horaConsejo,
          pilaypiedra: this.pilaYpiedra ,
          pilaypiedrahorario: this.horPyP,
          oficina: this.oficina,
          oficinahorario: this.horOficina,
          habilitarConfesiones: this.habilConfesion,
          habilitarConsejo: this.habilConsejo,
          habilitarHorasanta: this.habilHoraSanta,
          habilitarMisas: this.habilMisas,
          habilitarOficina: this.habilOficina,
          habilitarPilayPiedra: this.habilPyP,
          oficinaTelefono: this.oficinaTelefono
        };
        this.firestoreService.updateHorarios(updatedData);
        this.router.navigate(['/eventos']);
        break
      case "Consejería":
        this.horaConsejo = this.infoModificacion;
        if (this.moreInfo == "Sí"){
          this.habilModificacion = true;
        }else{
          this.habilModificacion = false;
        }
        this.habilConsejo = this.habilModificacion;
        const updatedData2 = {
          misas: this.misa,
          misashorario: this.horMisa,
          confesiones: this.confesion,
          confesioneshorario: this.horConfesion,
          horasanta: this.horaSanta,
          horasantahorario: this.horHoraSanta,
          consejeria:this.consejo,
          consejeriahorario: this.horaConsejo,
          pilaypiedra: this.pilaYpiedra ,
          pilaypiedrahorario: this.horPyP,
          oficina: this.oficina,
          oficinahorario: this.horOficina,
          habilitarConfesiones: this.habilConfesion,
          habilitarConsejo: this.habilConsejo,
          habilitarHorasanta: this.habilHoraSanta,
          habilitarMisas: this.habilMisas,
          habilitarOficina: this.habilOficina,
          habilitarPilayPiedra: this.habilPyP,
          oficinaTelefono: this.oficinaTelefono
        };
        this.firestoreService.updateHorarios(updatedData2);
        this.router.navigate(['/eventos']);
        break
      case "Hora Santa":
        this.horHoraSanta = this.infoModificacion;
        if (this.moreInfo == "Sí"){
          this.habilModificacion = true;
        }else{
          this.habilModificacion = false;
        }
        this.habilHoraSanta = this.habilModificacion;
        const updatedData3 = {
          misas: this.misa,
          misashorario: this.horMisa,
          confesiones: this.confesion,
          confesioneshorario: this.horConfesion,
          horasanta: this.horaSanta,
          horasantahorario: this.horHoraSanta,
          consejeria:this.consejo,
          consejeriahorario: this.horaConsejo,
          pilaypiedra: this.pilaYpiedra ,
          pilaypiedrahorario: this.horPyP,
          oficina: this.oficina,
          oficinahorario: this.horOficina,
          habilitarConfesiones: this.habilConfesion,
          habilitarConsejo: this.habilConsejo,
          habilitarHorasanta: this.habilHoraSanta,
          habilitarMisas: this.habilMisas,
          habilitarOficina: this.habilOficina,
          habilitarPilayPiedra: this.habilPyP,
          oficinaTelefono: this.oficinaTelefono
        };
        this.firestoreService.updateHorarios(updatedData3);
        this.router.navigate(['/eventos']);
        break
      case "Misas":
        this.horMisa = this.infoModificacion;
        if (this.moreInfo == "Sí"){
          this.habilModificacion = true;
        }else{
          this.habilModificacion = false;
        }
        this.habilMisas = this.habilModificacion;
        const updatedData4 = {
          misas: this.misa,
          misashorario: this.horMisa,
          confesiones: this.confesion,
          confesioneshorario: this.horConfesion,
          horasanta: this.horaSanta,
          horasantahorario: this.horHoraSanta,
          consejeria:this.consejo,
          consejeriahorario: this.horaConsejo,
          pilaypiedra: this.pilaYpiedra ,
          pilaypiedrahorario: this.horPyP,
          oficina: this.oficina,
          oficinahorario: this.horOficina,
          habilitarConfesiones: this.habilConfesion,
          habilitarConsejo: this.habilConsejo,
          habilitarHorasanta: this.habilHoraSanta,
          habilitarMisas: this.habilMisas,
          habilitarOficina: this.habilOficina,
          habilitarPilayPiedra: this.habilPyP,
          oficinaTelefono: this.oficinaTelefono
        };
        this.firestoreService.updateHorarios(updatedData4);
        this.router.navigate(['/eventos']);
        break
      case "Oficina parroquial":
        this.horOficina = this.infoModificacion;
        this.oficinaTelefono = this.tel;
        if (this.moreInfo == "Sí"){
          this.habilModificacion = true;
        }else{
          this.habilModificacion = false;
        }
        this.habilOficina = this.habilModificacion;
        const updatedData5 = {
          misas: this.misa,
          misashorario: this.horMisa,
          confesiones: this.confesion,
          confesioneshorario: this.horConfesion,
          horasanta: this.horaSanta,
          horasantahorario: this.horHoraSanta,
          consejeria:this.consejo,
          consejeriahorario: this.horaConsejo,
          pilaypiedra: this.pilaYpiedra ,
          pilaypiedrahorario: this.horPyP,
          oficina: this.oficina,
          oficinahorario: this.horOficina,
          habilitarConfesiones: this.habilConfesion,
          habilitarConsejo: this.habilConsejo,
          habilitarHorasanta: this.habilHoraSanta,
          habilitarMisas: this.habilMisas,
          habilitarOficina: this.habilOficina,
          habilitarPilayPiedra: this.habilPyP,
          oficinaTelefono: this.oficinaTelefono
        };
        this.firestoreService.updateHorarios(updatedData5);
        this.router.navigate(['/eventos']);
        break
      case "Pila y Piedra":
        this.horPyP = this.infoModificacion;
        if (this.moreInfo == "Sí"){
          this.habilModificacion = true;
        }else{
          this.habilModificacion = false;
        }
        this.habilPyP = this.habilModificacion;
        const updatedData6 = {
          misas: this.misa,
          misashorario: this.horMisa,
          confesiones: this.confesion,
          confesioneshorario: this.horConfesion,
          horasanta: this.horaSanta,
          horasantahorario: this.horHoraSanta,
          consejeria:this.consejo,
          consejeriahorario: this.horaConsejo,
          pilaypiedra: this.pilaYpiedra ,
          pilaypiedrahorario: this.horPyP,
          oficina: this.oficina,
          oficinahorario: this.horOficina,
          habilitarConfesiones: this.habilConfesion,
          habilitarConsejo: this.habilConsejo,
          habilitarHorasanta: this.habilHoraSanta,
          habilitarMisas: this.habilMisas,
          habilitarOficina: this.habilOficina,
          habilitarPilayPiedra: this.habilPyP,
          oficinaTelefono: this.oficinaTelefono
        };
        this.firestoreService.updateHorarios(updatedData6);
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
