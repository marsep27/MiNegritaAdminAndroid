import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarMeditacionPage } from './agregar-meditacion.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarMeditacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarMeditacionPageRoutingModule {}
