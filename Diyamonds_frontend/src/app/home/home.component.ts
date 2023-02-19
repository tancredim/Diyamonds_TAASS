import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import {ListaAnnunci} from "../listaAnnunci";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {MatSelectChange} from "@angular/material/select";
import {ListaAnnunciMateriaPrima} from "../listaAnnunci";

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
  searchTerm = '';
  selectedData : any;
  annunci: ListaAnnunci[] =[];
  annunciMateriaPrima : ListaAnnunciMateriaPrima[] = [];
  annunciFiltered?: ListaAnnunci[];
  annunciFilteredMateriaPrima?: ListaAnnunciMateriaPrima[];
  isMateriaPrimaSelected : boolean = false;

  public slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  private URLGetAnnunci : string = "http://localhost:8083/api/v1/ms2/annunciGioielli";
  private URLGetMateriaPrimaAnnunci :string = "http://localhost:8083/api/v1/ms2/annunciMateriaPrima";


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

    this.slides[0] = {
      src: './assets/images/CollaneOro.jpg',
      title: "Collane in oro"
    };
    this.slides[1] = {
      src: './assets/images/GioielliArtigianali.jpg',
      title: "Gioielli artigianali di prima qualita"
    }
    this.slides[2] = {
      src: './assets/images/Smeraldi.jpg',
      title: "Pietre raffinate artigianali"
    }

    this.CercaAnnuncio()
    this.CercaAnnunciMateriaPrima();

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

  CercaAnnunciMateriaPrima(){


    this. getAnnunciMateriaPrima().subscribe(data =>{
      this.annunciMateriaPrima = data;

    });

  }

  search(value: string): void {

    if(this.isMateriaPrimaSelected){
      this.annunciFilteredMateriaPrima = this.annunciMateriaPrima?.filter((val) =>
        val.materiaPrima?.toLowerCase().includes(value.toLowerCase())
      );

    }else{
      this.annunciFiltered = this.annunci?.filter((val) =>
        val.gioiello?.toLowerCase().includes(value.toLowerCase())
      );
    }


  }

  searchTab(value: string, isGioielloTab : boolean): void {

    if(!isGioielloTab){
      this.isMateriaPrimaSelected = true;
      this.annunciFilteredMateriaPrima = this.annunciMateriaPrima?.filter((val) =>
        val.materiaPrima?.toLowerCase().includes(value.toLowerCase())
      );

    }else{
      this.isMateriaPrimaSelected = false;
      this.annunciFiltered = this.annunci?.filter((val) =>
        val.gioiello?.toLowerCase().includes(value.toLowerCase())
      );
    }


  }


  getUserList(): Observable<ListaAnnunci[]>{
    return this.httpClient.get<ListaAnnunci[]>(this.URLGetAnnunci);
  }

  getAnnunciMateriaPrima(): Observable<ListaAnnunciMateriaPrima[]>{
    return this.httpClient.get<ListaAnnunciMateriaPrima[]>(this.URLGetMateriaPrimaAnnunci);
  }

  selectedValue(event: MatSelectChange) {
    this.selectedData = {
      value: event.value,
      text: event.source.triggerValue
    };

    if(this.selectedData.text == "Materia Prima"){
      this.isMateriaPrimaSelected = true;
    }
    else {
      this.isMateriaPrimaSelected =false;
    }
  }

}



