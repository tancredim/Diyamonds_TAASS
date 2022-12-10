import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListaAnnunci } from './listaAnnunci';


@Injectable({
  providedIn: 'root'
})
export class ListaAnnunciService {


  private baseURL = "http://localhost:8080/api/v1/annunciGioielli";

  constructor(private httpClient: HttpClient) { }

  getUserList(): Observable<ListaAnnunci[]>{
    return this.httpClient.get<ListaAnnunci[]>(this.baseURL);
  }




}
