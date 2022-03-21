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
  private email = '';
  private password = '';
  private confirmPassword = '';
  private loading = false;
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit() {}
  onEmailChange(email: string) {
    this.email = email;
  }
  onPasswordChange(password: string) {
    this.password = password;
  }
  onConfirmPasswordChange(password: string) {
    this.confirmPassword = password;
  }
  onLogin() {
    this.loading = true;
    const user = new User(this.email, this.password);
    const authed = this.authService.login(user);
    if (authed) {
      this.authenticated = this.authService.isAuthenticated();
      this.loading = false;
      this.router.navigateByUrl('/places/tabs/discover');
    }
  }
  onLogout() {
    this.authService.logout();
    this.authenticated = this.authService.isAuthenticated();
  }
}
