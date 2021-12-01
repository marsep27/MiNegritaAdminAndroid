import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarMisaPage } from './agregar-misa.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarMisaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarMisaPageRoutingModule {}
