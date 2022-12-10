import { Component } from '@angular/core';
import { ListaAnnunci } from '../listaAnnunci'
import { ListaAnnunciService } from '../listaAnnunci.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './listaAnnunci.component.html',
  styleUrls: ['./listaAnnunci.component.css']
})
export class ListaAnnunciComponent {

 annunci?: ListaAnnunci[];

  constructor(private userService : ListaAnnunciService) { }

  ngOnInit(): void {
    this.getAnnunci();

  }

  private getAnnunci(){
    this.userService.getUserList().subscribe(data =>{
      this.annunci = data;

    });
  }



}
