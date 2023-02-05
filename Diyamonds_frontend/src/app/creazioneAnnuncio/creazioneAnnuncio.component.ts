import {Component, ViewChild} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AnnuncioService } from '../annuncio.service';
import {Annuncio} from "../annuncio";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import * as Console from "console";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-creazioneAnnuncio',
  templateUrl: './creazioneAnnuncio.component.html',
  styleUrls: ['./creazioneAnnuncio.component.css']
})

export class CreazioneAnnuncioComponent {
  private id?: number;
  annuncio?: Annuncio;



  form: FormGroup;


  private baseURL = "http://localhost:8083/api/v1/ms2/annunciGioielli/creaAnnuncioGioiello";

  constructor(public fb: FormBuilder, private route: ActivatedRoute, private httpClient: HttpClient,
              private toastr: ToastrService) {


    this.form= this.fb.group({
      idVenditore : 2,
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

message : boolean = false;
messageFailure : boolean = false;

  creaAnnuncio(inputs: {gioiello:string , prezzo:number, descrizione:string}){

  this.messageFailure = false;
  this.message = false;



    // @ts-ignore
    console.log(this.form.get('descrizione').value);
    // @ts-ignore
    console.log(this.form.get('gioiello').value);

    // @ts-ignore
    console.log(Number(this.form.get('prezzo').value));



    this.httpClient
      .post(this.baseURL, this.form.value)
      .subscribe({

        next: (response) =>
        {
          this.message= true,
          this.form.reset();
        },

        error: (error) =>{
          this.messageFailure = true;
          this.form.reset();
        } ,
      });





  }
  removeMessage(){
    this.message = false;
  }

  removeMessageFailure(){
    this.messageFailure = false;
  }



}


