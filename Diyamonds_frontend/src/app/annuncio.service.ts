import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListaAnnunci } from './listaAnnunci';
import {Annuncio} from "./annuncio";

@Injectable({
  providedIn: 'root'
})
export class AnnuncioService {



  constructor(private httpClient: HttpClient) { }

  getAnnuncio(id?: number): Observable<Annuncio>{
    const URL = "http://localhost:8083/api/v1/ms2/annunciGioielli/"+id;

    return this.httpClient.get<Annuncio>(URL);
  }




}
