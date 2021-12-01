import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarMisaPageRoutingModule } from './modificar-misa-routing.module';

import { ModificarMisaPage } from './modificar-misa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarMisaPageRoutingModule
  ],
  declarations: [ModificarMisaPage]
})
export class ModificarMisaPageModule {}
