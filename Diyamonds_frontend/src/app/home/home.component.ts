import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';

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

}
