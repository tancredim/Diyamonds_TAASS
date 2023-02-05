import { SocialAuthService, GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { SocialUser } from '@abacritt/angularx-social-login/public-api';
import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';
import { RegistratiComponent } from '../registrati/registrati.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  user!: SocialUser;
  loggedIn!: boolean;
  registratiComponent!: RegistratiComponent;

  constructor(
    private authService: SocialAuthService,
    private router : Router,
    ) {}

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      console.log("IDTOKEN");
      console.log(user.idToken);
      console.log(user.idToken);
      this.user = user;
      this.loggedIn = (user != null);
      this.goToRegistrati();
    });
  }

  goToRegistrati(): void {
    this.router.navigate(['/registrati'], {state: {data: this.user}});
  }

  logout(): void {
    this.authService.signOut();
  }


}
