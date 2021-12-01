import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarPuntoPartidaPageRoutingModule } from './agregar-punto-partida-routing.module';

import { AgregarPuntoPartidaPage } from './agregar-punto-partida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarPuntoPartidaPageRoutingModule
  ],
  declarations: [AgregarPuntoPartidaPage]
})
export class AgregarPuntoPartidaPageModule {}
