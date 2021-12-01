import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';
import { IonicModule } from '@ionic/angular';

import { ModificarLecturaPageRoutingModule } from './modificar-lectura-routing.module';

import { ModificarLecturaPage } from './modificar-lectura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CKEditorModule,
    IonicModule,
    ModificarLecturaPageRoutingModule
  ],
  declarations: [ModificarLecturaPage]
})
export class ModificarLecturaPageModule {}
