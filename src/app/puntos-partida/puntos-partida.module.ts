import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PuntosPartidaPageRoutingModule } from './puntos-partida-routing.module';

import { PuntosPartidaPage } from './puntos-partida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PuntosPartidaPageRoutingModule
  ],
  declarations: [PuntosPartidaPage]
})
export class PuntosPartidaPageModule {}
