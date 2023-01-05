import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AnnuncioService } from '../annuncio.service';
import {Annuncio} from "../annuncio";

@Component({
  selector: 'app-annuncio',
  templateUrl: './annuncio.component.html',
  styleUrls: ['./annuncio.component.css']
})
export class AnnuncioComponent {
  private id? : number;
  annuncio?: Annuncio;
  constructor(
    private route: ActivatedRoute,
    private annuncioService : AnnuncioService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'));
      this.id=Number(params.get('id'));
    });
    this.getAnnuncio(this.id);

  }

  private getAnnuncio(id?: number){
    this.annuncioService.getAnnuncio(id).subscribe(data =>{
      this.annuncio = data;

    });
  }


}




