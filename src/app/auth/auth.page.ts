import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  authenticated = false;
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit() {}
  onLogin() {
    this.authService.login();
    this.router.navigateByUrl('/places/tabs/discover');
    this.authenticated = this.authService.isAuthenticated();
  }
  onLogout() {
    this.authService.logout();
    this.authenticated = this.authService.isAuthenticated();
  }
}
