import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { User } from './auth.service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  authenticated = false;
  email: string;
  password: string;
  confirmPassword: string;

  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit() {}
  onEmailChange(email: string) {
    this.email = email;
    console.log(this.email);
  }
  onPasswordChange(password: string) {
    this.password = password;
    console.log(this.password);
  }
  onConfirmPasswordChange(password: string) {
    this.confirmPassword = password;
    console.log(this.confirmPassword);
  }
  onLogin() {
    const user = new User(this.email, this.password);
    const authed = this.authService.login(user);
    this.router.navigateByUrl('/places/tabs/discover');
    this.authenticated = this.authService.isAuthenticated();
  }
  onLogout() {
    this.authService.logout();
    this.authenticated = this.authService.isAuthenticated();
  }
}
