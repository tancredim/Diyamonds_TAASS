import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';


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

  user!: SocialUser;
  userString!: string;
  authService!: SocialAuthService

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = history.state.data;
      this.userString = history.state.userString;
      console.log(this.user.email);
    });
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

}
