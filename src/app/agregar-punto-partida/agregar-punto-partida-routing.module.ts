import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarPuntoPartidaPage } from './agregar-punto-partida.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarPuntoPartidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarPuntoPartidaPageRoutingModule {}
