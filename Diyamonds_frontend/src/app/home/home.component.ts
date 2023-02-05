import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import {ListaAnnunci} from "../listaAnnunci";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";


export interface Gioiello {
  value: string;
  viewValue: string;
}

export interface MateriaPrima {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{

  private user!: SocialUser;
  private userString!: string;
  private user2!: User;
  annunci?: ListaAnnunci[];


  private URLGetAnnunci : string = "http://localhost:8081/api/v1/annunciGioielli";

  constructor(
    private router: Router,
    private authService: SocialAuthService,
    private httpClient: HttpClient
  ) {}

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      console.log("HOME");
      this.user = history.state.data;
      this.user2 = history.state.user2;
      console.log(this.user2);
    });
  }
  gioielli: Gioiello[] = [
    {value: 'bracciale', viewValue: 'Bracciale'},
    {value: 'collana', viewValue: 'Collana'},
    {value: 'anello', viewValue: 'Anello'}
  ];
  materiaPrima: MateriaPrima[] = [
    {value: 'oro', viewValue: 'Oro'},
    {value: 'argento', viewValue: 'Argento'},
    {value: 'bronzo', viewValue: 'Bronzo'}
  ];

  CercaAnnuncio(){

    this.getUserList().subscribe(data =>{
      this.annunci = data;

    });

  }

  getUserList(): Observable<ListaAnnunci[]>{
    return this.httpClient.get<ListaAnnunci[]>(this.URLGetAnnunci);
  }


}



