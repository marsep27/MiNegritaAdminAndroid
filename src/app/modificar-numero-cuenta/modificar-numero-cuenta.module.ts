import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarNumeroCuentaPageRoutingModule } from './modificar-numero-cuenta-routing.module';

import { ModificarNumeroCuentaPage } from './modificar-numero-cuenta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarNumeroCuentaPageRoutingModule
  ],
  declarations: [ModificarNumeroCuentaPage]
})
export class ModificarNumeroCuentaPageModule {}
