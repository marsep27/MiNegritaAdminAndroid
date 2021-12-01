import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificarNumeroCuentaPage } from './modificar-numero-cuenta.page';

const routes: Routes = [
  {
    path: '',
    component: ModificarNumeroCuentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificarNumeroCuentaPageRoutingModule {}
