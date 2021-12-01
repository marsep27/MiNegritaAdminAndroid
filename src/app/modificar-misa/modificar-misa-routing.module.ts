import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificarMisaPage } from './modificar-misa.page';

const routes: Routes = [
  {
    path: '',
    component: ModificarMisaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificarMisaPageRoutingModule {}
