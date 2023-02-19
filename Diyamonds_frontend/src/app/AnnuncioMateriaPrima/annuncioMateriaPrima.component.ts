import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AnnuncioService } from '../annuncio.service';
import {Annuncio, AnnuncioMateriaPrima} from "../annuncio";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-annuncio',
  templateUrl: './annuncioMateriaPrima.component.html',
  styleUrls: ['./annuncioMateriaPrima.component.css']
})
export class AnnuncioMateriaPrimaComponent {
  private id? : number;
  annuncioMateriaPrima?: AnnuncioMateriaPrima;
  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'));
      this.id=Number(params.get('id'));
    });
    this.getAnnuncio(this.id);

  }

  private getAnnuncio(id?: number){
    this.getAnnuncioMateriaPrima(id).subscribe(data =>{
      this.annuncioMateriaPrima = data;

    });
  }

  getAnnuncioMateriaPrima(id?: number): Observable<Annuncio>{
    const URL = "http://localhost:8083/api/v1/ms2/annunciMateriaPrima/"+id;
    return this.httpClient.get<Annuncio>(URL);
  }


}




