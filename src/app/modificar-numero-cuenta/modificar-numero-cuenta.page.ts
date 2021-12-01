import { take } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform, ToastController } from '@ionic/angular';
import { Vibration } from '@ionic-native/vibration/ngx';
import * as firebase from 'firebase';
import { FirestoreService } from './../services/firestore/firestore.service';

@Component({
  selector: 'app-modificar-numero-cuenta',
  templateUrl: './modificar-numero-cuenta.page.html',
  styleUrls: ['./modificar-numero-cuenta.page.scss'],
})
export class ModificarNumeroCuentaPage implements OnInit {

  ncuenta: string;

  BN:  string;
  CC:  string;
  CI:  string;
  SM:  string;
  SMS: string;

  id:     string;
  text:   string;
  text2:  string;
  number: string;
  number2:string;
  guion:  boolean;

  constructor(public platform: Platform,
    private route: ActivatedRoute,
    private router: Router,
    private firestoreService: FirestoreService,
    public Toast: ToastController,
    private vibra: Vibration) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.ncuenta = { ...params.keys, ...params }
      console.log(this.ncuenta);
    });
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      
      //Se obtienen los números de cuenta de la Basílica
    firebase.firestore().collection('banco').doc('cuentas').onSnapshot((cuentaSnapshot) => {
      const info = cuentaSnapshot.data();
      this.BN = info.bancoNacional;
      this.CC = info.cuentaCliente;
      this.CI = info.cuentaIBAN;
      this.SM = info.SINPEMóvil;
      this.SMS = info.sinpesinguion;
      console.log(this.BN);
      console.log(this.CC);
      console.log(this.CI);
      console.log(this.SM);
      console.log(this.SMS);
      this.rellenarInfo();
    });
    });
  }

  rellenarInfo(){
    switch (this.id){
      case "BN":
        this.text = "Banco Nacional";
        this.number = this.BN;
        this.guion = false;
        console.log(this.text);
        console.log(this.BN);
        console.log(this.number);
        console.log(this.guion);
        break
      case "CC":
        this.text = "Cuenta Cliente";
        this.number = this.CC;
        this.guion = false;
        console.log(this.text);
        console.log(this.BN);
        console.log(this.number);
        console.log(this.guion);
        break
      case "CI":
        this.text = "Cuenta IBAN";
        this.number = this.CI;
        this.guion = false;
        break
      case "SM":
        this.text = "SINPE Móvil";
        this.text2 = "SIMPE Movil sin guión";
        this.number = this.SM;
        this.number2 = this.SMS;
        this.guion = true;
        break
    }
  }

  modificarNumero(){
    switch (this.id){
      case 'BN':
        this.BN = this.number;
        const updatedDataBN = {
          bancoNacional: this.BN,
          cuentaCliente: this.CC,
          cuentaIBAN: this.CI,
          sinpesinguion: this.SMS,
          SINPEMóvil: this.SM
        }
        this.firestoreService.updateDonacion(updatedDataBN);
        this.router.navigate(['/donacion']);
        break
      case 'CC':
        this.CC = this.number;
        const updatedDataCC = {
          bancoNacional: this.BN,
          cuentaCliente: this.CC,
          cuentaIBAN: this.CI,
          sinpesinguion: this.SMS,
          SINPEMóvil: this.SM
        }
        this.firestoreService.updateDonacion(updatedDataCC);
        this.router.navigate(['/donacion']);
        break
      case 'CI':
        this.CI = this.number;
        const updatedDataCI = {
          bancoNacional: this.BN,
          cuentaCliente: this.CC,
          cuentaIBAN: this.CI,
          sinpesinguion: this.SMS,
          SINPEMóvil: this.SM
        }
        this.firestoreService.updateDonacion(updatedDataCI);
        this.router.navigate(['/donacion']);
        break
      case 'SM':
        this.SM = this.number;
        this.SMS = this.number2;
        const updatedDataSM = {
          bancoNacional: this.BN,
          cuentaCliente: this.CC,
          cuentaIBAN: this.CI,
          sinpesinguion: this.SMS,
          SINPEMóvil: this.SM
        }
        this.firestoreService.updateDonacion(updatedDataSM);
        this.router.navigate(['/donacion']);
        break
    }
  }
}
