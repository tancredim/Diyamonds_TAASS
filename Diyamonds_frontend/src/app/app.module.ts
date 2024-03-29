import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';  // <<<< import it here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
//social login

import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider,
} from '@abacritt/angularx-social-login';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistratiComponent } from './registrati/registrati.component';
import { RegistrazioneCompletataComponent } from './registrazione-completata/registrazione-completata.component';
import { CarouselModule } from '@coreui/angular';
import { MatSelectModule} from '@angular/material/select';
import{MatFormFieldModule} from '@angular/material/form-field';
import{MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListaAnnunciComponent } from './listaAnnunci/listaAnnunci.component';
import {AnnuncioComponent} from "./annuncio/annuncio.component";
import {CreazioneAnnuncioComponent} from "./creazioneAnnuncio/creazioneAnnuncio.component";
import {SearchFilterPipe} from "./home/search-filter.pipe";
import {AnnuncioMateriaPrimaComponent} from "./AnnuncioMateriaPrima/annuncioMateriaPrima.component";
import { VisualizzaProfiloComponent } from './visualizza-profilo/visualizza-profilo.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    HomeComponent,
    RegistratiComponent,
    RegistrazioneCompletataComponent,
    ListaAnnunciComponent,
    AnnuncioComponent,
    CreazioneAnnuncioComponent,
    SearchFilterPipe,
    AnnuncioMateriaPrimaComponent,
    VisualizzaProfiloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    CarouselModule,
    ToastrModule.forRoot()
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '161802106758-ripnn5634ofji41akrgpgktcdl25ecuk.apps.googleusercontent.com'
            )
          }],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
