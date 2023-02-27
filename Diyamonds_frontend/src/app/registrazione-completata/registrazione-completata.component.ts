import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-registrazione-completata',
  templateUrl: './registrazione-completata.component.html',
  styleUrls: ['./registrazione-completata.component.css']
})
export class RegistrazioneCompletataComponent implements OnInit {

  private userString!: string;
  private user!: SocialUser;
  private user2!: User;

  constructor(
    private router: Router,
    private authService: SocialAuthService
  ) {}

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = history.state.data;
      this.user2 = history.state.userWithId;
      console.log(this.user.email)
      console.log("INFO UTENTE")
      console.log(this.user2)
      this.goToHome(this.user, this.user2);
    });
  }

  goToHome(user: SocialUser, user2: User) {
    setTimeout(() => {
      this.router.navigate(['/'], {state: {data: this.user2}});
      console.log("SIAMO QUIIUII");
      console.log(user2);  }, 2000);  //5s
  }

}
