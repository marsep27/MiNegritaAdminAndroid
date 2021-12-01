import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarMisaPageRoutingModule } from './agregar-misa-routing.module';

import { AgregarMisaPage } from './agregar-misa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarMisaPageRoutingModule
  ],
  declarations: [AgregarMisaPage]
})
export class AgregarMisaPageModule {}
