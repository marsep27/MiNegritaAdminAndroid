import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';
import { IonicModule } from '@ionic/angular';

import { ModificarHorariosPageRoutingModule } from './modificar-horarios-routing.module';

import { ModificarHorariosPage } from './modificar-horarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CKEditorModule,
    IonicModule,
    ModificarHorariosPageRoutingModule
  ],
  declarations: [ModificarHorariosPage]
})
export class ModificarHorariosPageModule {}
