import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificarLecturaPage } from './modificar-lectura.page';

const routes: Routes = [
  {
    path: '',
    component: ModificarLecturaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificarLecturaPageRoutingModule {}
