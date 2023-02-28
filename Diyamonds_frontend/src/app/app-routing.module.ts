import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListaAnnunciComponent} from "./listaAnnunci/listaAnnunci.component";
import {AnnuncioComponent} from "./annuncio/annuncio.component";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistratiComponent } from './registrati/registrati.component';
import { RegistrazioneCompletataComponent } from './registrazione-completata/registrazione-completata.component';
import {CreazioneAnnuncioComponent} from './creazioneAnnuncio/creazioneAnnuncio.component';
import {AnnuncioMateriaPrimaComponent} from "./AnnuncioMateriaPrima/annuncioMateriaPrima.component";
import { VisualizzaProfiloComponent } from './visualizza-profilo/visualizza-profilo.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registrati', component: RegistratiComponent},
  {path: 'registrazioneCompletata', component: RegistrazioneCompletataComponent},
  {path: 'listaAnnunci',component :ListaAnnunciComponent},
  {path: 'visualizzaProfilo', component: VisualizzaProfiloComponent},
  {path: 'annuncio/:id',component:AnnuncioComponent, children: [

      { path: ':id', component: AnnuncioComponent }

    ]},
  {path : 'creazioneAnnuncio',component: CreazioneAnnuncioComponent},

  {path: 'annuncioMateriaPrima/:id',component:AnnuncioMateriaPrimaComponent, children: [

      { path: ':id', component: AnnuncioMateriaPrimaComponent }

    ]},
  {path: '**', redirectTo: '', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
