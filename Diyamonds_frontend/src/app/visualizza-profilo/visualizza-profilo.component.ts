import { SocialUser } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { ListaAnnunci, ListaAnnunciMateriaPrima } from '../listaAnnunci';
import { User } from '../user';

@Component({
  selector: 'app-visualizza-profilo',
  templateUrl: './visualizza-profilo.component.html',
  styleUrls: ['./visualizza-profilo.component.css']
})
export class VisualizzaProfiloComponent {

  user2!: User;
  user!: SocialUser;
  photo!: string;
  tipoUtente!: string;
  listaAnnunci!: ListaAnnunci[];
  listaAnnunciFornitore!: ListaAnnunciMateriaPrima[];
  numeroAnnunci!: number;
  check!: boolean;

  ngOnInit() {

    this.user2 = history.state.data;
    this.photo = history.state.photo;
    this.user = history.state.user;
    
    if (this.user2.isVenditoreFornitore == 1) {
      this.check = true;
      this.tipoUtente = "Venditore";
      this.listaAnnunci = history.state.data.annunciGioelli;
      this.numeroAnnunci = history.state.data.annunciGioelli?.length;
      console.log(this.listaAnnunci);
    } else if (this.user2.isVenditoreFornitore == 2) {
      this.check = false;
      this.tipoUtente = "Fornitore";
      this.listaAnnunciFornitore = history.state.data.annunciMateriaPrima;
      this.numeroAnnunci = history.state.data.annunciMateriaPrima.length;
      console.log(this.listaAnnunciFornitore);
    }



  }

}
