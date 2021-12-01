import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';
import { IonicModule } from '@ionic/angular';

import { AgregarMeditacionPageRoutingModule } from './agregar-meditacion-routing.module';

import { AgregarMeditacionPage } from './agregar-meditacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CKEditorModule,
    IonicModule,
    AgregarMeditacionPageRoutingModule
  ],
  declarations: [AgregarMeditacionPage]
})
export class AgregarMeditacionPageModule {}
