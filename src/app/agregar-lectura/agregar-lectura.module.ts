import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';
import { IonicModule } from '@ionic/angular';

import { AgregarLecturaPageRoutingModule } from './agregar-lectura-routing.module';

import { AgregarLecturaPage } from './agregar-lectura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CKEditorModule,
    IonicModule,
    AgregarLecturaPageRoutingModule
  ],
  declarations: [AgregarLecturaPage]
})
export class AgregarLecturaPageModule {}
