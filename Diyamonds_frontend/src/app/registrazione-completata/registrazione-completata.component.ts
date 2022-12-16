import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrazione-completata',
  templateUrl: './registrazione-completata.component.html',
  styleUrls: ['./registrazione-completata.component.css']
})
export class RegistrazioneCompletataComponent implements OnInit {

  private userString!: string;
  private user!: SocialUser;

  constructor(
    private router: Router,
    private authService: SocialAuthService
  ) {}

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = history.state.data;
      this.userString = history.state.userString;
      console.log(this.user.email)
      this.goToHome(this.user, this.userString);
    });
  }

  goToHome(user: SocialUser, userString: string) {
    setTimeout(() => {
      this.router.navigate(['/'], {state: {data: user, userString: userString}});
      console.log(user.email+" SIAMO QUI _ "+ userString);  }, 2000);  //5s
  }

}
