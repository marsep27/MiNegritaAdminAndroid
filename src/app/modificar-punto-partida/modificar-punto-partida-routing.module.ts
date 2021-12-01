import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificarPuntoPartidaPage } from './modificar-punto-partida.page';

const routes: Routes = [
  {
    path: '',
    component: ModificarPuntoPartidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificarPuntoPartidaPageRoutingModule {}
