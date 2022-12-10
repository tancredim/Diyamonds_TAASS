import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListaAnnunciComponent} from "./listaAnnunci/listaAnnunci.component";

const routes: Routes = [

  {path: 'listaAnnunci',component :ListaAnnunciComponent}
  /* {path: '' , redirectTo: 'HomeComponent', pathMatch:'full'}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
