import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificarAnuncioPage } from './modificar-anuncio.page';

const routes: Routes = [
  {
    path: '',
    component: ModificarAnuncioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificarAnuncioPageRoutingModule {}
