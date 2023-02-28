import { SocialAuthService, GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { SocialUser } from '@abacritt/angularx-social-login/public-api';
import { state } from '@angular/animations';
import { User } from '../user';
import { UserService } from '../userService';
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
  user2!: User;
  loggedIn!: boolean;
  registratiComponent!: RegistratiComponent;
  listaUtenti? : User[];
  userExist! : boolean;

  constructor(
    private userService: UserService,
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

    this.userService.getAllUser().subscribe(data =>{
      console.log("data: " + data);
      this.listaUtenti = data;
      this.userExist = false;

      data.forEach(element => {
        console.log(element.email);
        if (element.email == this.user.email ) {
          this.user2 = element;
          console.log(this.user2);
          this.userExist = true;
        } 
      });


      if (this.userExist) {
        this.router.navigate(['/'], {state: {data: this.user2,check:1}});
      } else {
        this.router.navigate(['/registrati'], {state: {data: this.user}});
      }

    });
    
  }

  logout(): void {
    this.authService.signOut();
  }


}
