import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EliminarAdminPageRoutingModule } from './eliminar-admin-routing.module';

import { EliminarAdminPage } from './eliminar-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EliminarAdminPageRoutingModule
  ],
  declarations: [EliminarAdminPage]
})
export class EliminarAdminPageModule {}
