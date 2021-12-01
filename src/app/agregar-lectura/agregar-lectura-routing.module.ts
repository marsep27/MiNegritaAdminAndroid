import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarLecturaPage } from './agregar-lectura.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarLecturaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarLecturaPageRoutingModule {}
