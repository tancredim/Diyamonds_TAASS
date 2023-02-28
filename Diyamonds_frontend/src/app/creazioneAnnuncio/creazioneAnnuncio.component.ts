import {Component, ViewChild} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AnnuncioService } from '../annuncio.service';
import {Annuncio} from "../annuncio";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import * as Console from "console";
import { ToastrService } from 'ngx-toastr';
import {MatSelectChange} from "@angular/material/select";
import { User } from '../user';

@Component({
  selector: 'app-creazioneAnnuncio',
  templateUrl: './creazioneAnnuncio.component.html',
  styleUrls: ['./creazioneAnnuncio.component.css']
})



export class CreazioneAnnuncioComponent {
  private id?: number;
  annuncio?: Annuncio;
  selectedData : any;
  user2!: User;

  originalForm : FormGroup;
  form: FormGroup;

  ngOnInit() {
    this.user2 = history.state.data;
  }

  private baseURL ="";
  private URLAnnuncio = "http://localhost:8083/api/v1/ms2/annunciGioielli/creaAnnuncioGioiello";
  private URLMateriaPrima = "http://localhost:8083/api/v1/ms2/annunciMateriaPrima/creaAnnuncioMateriaPrima";

  constructor(public fb: FormBuilder, private route: ActivatedRoute, private httpClient: HttpClient,
              private toastr: ToastrService) {


    this.originalForm =this.fb.group({
      idVenditore : 2,
      descrizione: new FormControl('', [Validators.required]),
      gioiello: new FormControl('', [Validators.required]),
      prezzo:  new FormControl('', [Validators.required]),
      quantita: new FormControl(0)
    })



    this.form= this.fb.group({
      idVenditore : 2,
      descrizione: new FormControl('', [Validators.required]),
      gioiello: new FormControl('', [Validators.required]),
      prezzo:  new FormControl('', [Validators.required]),
      quantita: new FormControl(0)
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
isMateriaPrimaSelected: boolean =false;

  creaAnnuncio(inputs: {gioiello:string , prezzo:number, descrizione:string, quantita: number}){

  this.messageFailure = false;
  this.message = false;



    // @ts-ignore
    console.log(this.form.get('descrizione').value);
    // @ts-ignore
    console.log(this.form.get('gioiello').value);

    // @ts-ignore
    console.log(Number(this.form.get('prezzo').value));

    if(this.isMateriaPrimaSelected){

      this.baseURL = this.URLMateriaPrima;

      this.form.removeControl('idVenditore');
      this.form.addControl('idFornitore',new FormControl(this.user2.id));
      // @ts-ignore
      const materiaPrima = this.form.get('gioiello').value;
      this.form.removeControl('gioiello');
      this.form.addControl('materiaPrima',new FormControl(materiaPrima));


    }else{
      this.form.removeControl('idVenditore');
      this.form.addControl('idVenditore',new FormControl(this.user2.id));
      this.baseURL = this.URLAnnuncio;

      this.form.removeControl('quantita');
    }

    this.httpClient
      .post(this.baseURL, this.form.value)
      .subscribe({

        next: (response) =>
        {
          this.message= true,
          this.form.reset();
          this.form = this.originalForm;
        },

        error: (error) =>{
          this.messageFailure = true;
          this.form.reset();
          this.form = this.originalForm;
        } ,
      });





  }
  removeMessage(){
    this.message = false;
  }

  removeMessageFailure(){
    this.messageFailure = false;
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


