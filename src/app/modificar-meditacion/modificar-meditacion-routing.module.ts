import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificarMeditacionPage } from './modificar-meditacion.page';

const routes: Routes = [
  {
    path: '',
    component: ModificarMeditacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificarMeditacionPageRoutingModule {}
