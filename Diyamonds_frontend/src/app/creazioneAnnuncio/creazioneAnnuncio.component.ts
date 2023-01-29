import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AnnuncioService } from '../annuncio.service';
import {Annuncio} from "../annuncio";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import * as Console from "console";


@Component({
  selector: 'app-creazioneAnnuncio',
  templateUrl: './creazioneAnnuncio.component.html',
  styleUrls: ['./creazioneAnnuncio.component.css']
})

export class CreazioneAnnuncioComponent {
  private id?: number;
  annuncio?: Annuncio;


  form: FormGroup;


  private baseURL = "http://localhost:8081/api/v1/venditori/2/creaAnnuncioGioiello";

  constructor(public fb: FormBuilder, private route: ActivatedRoute, private httpClient: HttpClient) {


    this.form= this.fb.group({
      descrizione: new FormControl('', [Validators.required]),
      gioiello: new FormControl('', [Validators.required]),
      prezzo:  new FormControl('', [Validators.required])
    })



  /*
    this.form = this.fb.group({
      descrizione: [''],
      gioiello: [''],
      prezzo: 0,
    });
*/
  }




  creaAnnuncio(inputs: {gioiello:string , prezzo:number, descrizione:string}){


    /*
    var formData: any = new FormData();
    // @ts-ignore
    formData.append('gioiello', this.gioiello);
    // @ts-ignore
    formData.append('prezzo', Number(this.prezzo));
    // @ts-ignore
    formData.append('descrizione', this.descrizione);
*/

    /*
    var prezzoResult = Number(this.prezzo);
    var form = this.fb.group({
      descrizione: this.descrizione,
      gioiello: this.gioiello,
      prezzo: prezzoResult,
    });
  */
    inputs.prezzo = Number(inputs.prezzo);
    console.log(inputs);

    this.httpClient
      .post(this.baseURL, inputs)
      .subscribe({
        next: (response) => console.log(response),
        error: (error) => console.log(error),
      });



    //return this.httpClient.post<Annuncio>(this.baseURL);

  }
}


