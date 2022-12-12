import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../userService';

@Component({
  selector: 'app-registrati',
  templateUrl: './registrati.component.html',
  styleUrls: ['./registrati.component.css']
})
export class RegistratiComponent implements OnInit {

  user!: SocialUser;
  loggedIn!: boolean;
  email!: string;
  nome!: string;
  cognome!: string;
  userString! : string;

  constructor(
    private userService: UserService,
    private authService: SocialAuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      user = history.state.data;
      this.email = user.email;
      this.nome = user.firstName;
      this.cognome = user.lastName;
    });
  }

  private addNewUser(body: JSON) {
    this.userService.addUser(body).subscribe((res) => {console.log("res: " + res);});
  }

  completaLaRegistrazione(infoUtente: {username: string, nome: string, cognome: string, email: string, password: string, isVenditoreFornitore: number, telefono: string}) {
    infoUtente.nome = this.nome;
    infoUtente.cognome = this.cognome;
    infoUtente.email = this.email;
    const headers = new HttpHeaders({'myHeader':'test'});
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    headers.append('Access-Control-Allow-Credentials', 'true');
    this.userString = JSON.stringify(infoUtente);
    this.addNewUser(JSON.parse(this.userString));
  }
}
