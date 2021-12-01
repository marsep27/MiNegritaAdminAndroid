import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';
import { IonicModule } from '@ionic/angular';

import { AgregarAnuncioPageRoutingModule } from './agregar-anuncio-routing.module';

import { AgregarAnuncioPage } from './agregar-anuncio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CKEditorModule,
    IonicModule,
    AgregarAnuncioPageRoutingModule
  ],
  declarations: [AgregarAnuncioPage]
})
export class AgregarAnuncioPageModule {}
