import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListaAnnunci } from './listaAnnunci';


@Injectable({
  providedIn: 'root'
})
export class ListaAnnunciService {


  private baseURL = "http://localhost:8083/api/v1/ms2/annunciGioielli";

  constructor(private httpClient: HttpClient) { }

  getUserList(): Observable<ListaAnnunci[]>{
    return this.httpClient.get<ListaAnnunci[]>(this.baseURL);
  }




}
