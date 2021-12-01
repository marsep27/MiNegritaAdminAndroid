import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';
import { IonicModule } from '@ionic/angular';

import { ModificarAnuncioPageRoutingModule } from './modificar-anuncio-routing.module';

import { ModificarAnuncioPage } from './modificar-anuncio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CKEditorModule,
    IonicModule,
    ModificarAnuncioPageRoutingModule
  ],
  declarations: [ModificarAnuncioPage]
})
export class ModificarAnuncioPageModule {}
