import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  user!: SocialUser;
  loggedIn!: boolean;
  isRegistrazioneCompletata!: boolean;

  constructor(
    private authService: SocialAuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  logOut(): void {
    this.authService.signOut();
    this.router.navigate(['/']);
  }
}