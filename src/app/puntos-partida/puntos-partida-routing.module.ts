import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PuntosPartidaPage } from './puntos-partida.page';

const routes: Routes = [
  {
    path: '',
    component: PuntosPartidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PuntosPartidaPageRoutingModule {}
