import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';
import { IonicModule } from '@ionic/angular';

import { ModificarSantoralPageRoutingModule } from './modificar-santoral-routing.module';

import { ModificarSantoralPage } from './modificar-santoral.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CKEditorModule,
    IonicModule,
    ModificarSantoralPageRoutingModule
  ],
  declarations: [ModificarSantoralPage]
})
export class ModificarSantoralPageModule {}
