import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarEventoPage } from './agregar-evento.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarEventoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarEventoPageRoutingModule {}
