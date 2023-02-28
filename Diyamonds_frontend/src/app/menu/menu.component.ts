import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  user2!: User;
  user!: SocialUser;
  loggedIn!: boolean;
  isRegistrazioneCompletata!: boolean;

  constructor(
    private authService: SocialAuthService,
    private router: Router
  ) {}

  ngOnInit() {

    this.user2 = history.state.data;

    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  logOut(): void {
    this.authService.signOut();
    this.router.navigate(['/']);
  }

  goToCreazioneAnnuncio(): void {
    this.router.navigate(['/creazioneAnnuncio'], {state: {data: this.user2}});
  }

  goToVisualizzaProfilo(): void {
    this.router.navigate(['/visualizzaProfilo'], {state: {data: this.user2, user: this.user, photo: this.user.photoUrl}});
  }
}