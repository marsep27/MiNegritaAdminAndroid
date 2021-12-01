import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificarSantoralPage } from './modificar-santoral.page';

const routes: Routes = [
  {
    path: '',
    component: ModificarSantoralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificarSantoralPageRoutingModule {}
