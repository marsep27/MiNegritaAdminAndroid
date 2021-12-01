import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';
import { IonicModule } from '@ionic/angular';

import { ModificarMeditacionPageRoutingModule } from './modificar-meditacion-routing.module';

import { ModificarMeditacionPage } from './modificar-meditacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CKEditorModule,
    IonicModule,
    ModificarMeditacionPageRoutingModule
  ],
  declarations: [ModificarMeditacionPage]
})
export class ModificarMeditacionPageModule {}
