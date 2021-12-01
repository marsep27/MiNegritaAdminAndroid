import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarPuntoPartidaPageRoutingModule } from './modificar-punto-partida-routing.module';

import { ModificarPuntoPartidaPage } from './modificar-punto-partida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarPuntoPartidaPageRoutingModule
  ],
  declarations: [ModificarPuntoPartidaPage]
})
export class ModificarPuntoPartidaPageModule {}
