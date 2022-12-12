import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(
    private http: HttpClient,
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

  completaLaRegistrazione(infoUtente: {username: string, nome: string, cognome: string, email: string, passoword: string, telefono: string, isVenditoreFornitore: number}) {
    infoUtente.nome = this.nome;
    infoUtente.cognome = this.cognome;
    infoUtente.email = this.email;
    const headers = new HttpHeaders({'myHeader':'test'});
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost:8080');
    headers.append('Access-Control-Allow-Credentials', 'true');
    
    this.http.post(
      'http://localhost:8080/api/v1/user/add',
      infoUtente, {headers: headers})
    .subscribe((res) => {
      console.log("res: " + res);
    });
  }
}
