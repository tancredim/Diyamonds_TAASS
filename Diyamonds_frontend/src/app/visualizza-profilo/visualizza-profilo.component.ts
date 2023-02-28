import { SocialUser } from '@abacritt/angularx-social-login';
import { Component } from '@angular/core';
import { ListaAnnunci, ListaAnnunciMateriaPrima } from '../listaAnnunci';
import { MenuComponent } from '../menu/menu.component';
import { User } from '../user';
import { UserService } from '../userService';

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
  listaUtenti? : User[];
   userExist! : boolean;

  constructor(
    private userService: UserService,
    ) {}

  ngOnInit() {

    this.user2 = MenuComponent.utente;
    this.photo = history.state.photo;
    this.user = history.state.user;
    this.numeroAnnunci = 0;
    this.loadDatiUtente();
    
  }


  loadDatiUtente(): void {
    this.userService.getAllUser().subscribe(data =>{
      console.log("data: " + data);
      this.listaUtenti = data;
      this.userExist = false;
      data.forEach(element => {
        console.log(element.email);
        if (element.email == this.user.email ) {
          this.user2 = element;
          console.log(this.user2);
          this.userExist = true;
        } 
      });

      if (MenuComponent.utente.isVenditoreFornitore == 0) {
        this.tipoUtente = "Utente";
      } else if (MenuComponent.utente.isVenditoreFornitore == 1) {
        this.check = true;
        this.tipoUtente = "Venditore";
        if (this.user2.annunciGioelli != null && this.user2.annunciGioelli.length != null) {
          this.listaAnnunci = this.user2.annunciGioelli;
          this.numeroAnnunci = this.user2.annunciGioelli.length;
        }
      } else if (MenuComponent.utente.isVenditoreFornitore == 2) {
        this.check = false;
        this.tipoUtente = "Fornitore";
        if (this.user2.annunciMateriaPrima != null &&this.user2.annunciMateriaPrima.length != null) {
          this.listaAnnunciFornitore = this.user2.annunciMateriaPrima;
          this.numeroAnnunci = this.user2.annunciMateriaPrima.length;
        }
      }
    });
    
  }
}
