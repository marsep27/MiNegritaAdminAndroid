import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';
import { IonicModule } from '@ionic/angular';

import { AgregarEventoPageRoutingModule } from './agregar-evento-routing.module';

import { AgregarEventoPage } from './agregar-evento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CKEditorModule,
    ReactiveFormsModule,
    IonicModule,
    AgregarEventoPageRoutingModule
  ],
  declarations: [AgregarEventoPage]
})
export class AgregarEventoPageModule {}
