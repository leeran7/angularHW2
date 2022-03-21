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
  private error = '';
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
    if (typeof authed !== 'string') {
      this.authenticate();
    } else {
      this.error = authed;
    }
    this.loading = false;
  }
  onRegister() {
    this.loading = true;
    const validated = this.validatePassword();
    if (validated) {
      const newUser = new User(this.email, this.password);
      const registered = this.authService.register(newUser);
      if (registered) {
        this.authenticate();
      }
    }
    this.loading = false;
  }
  onLogout() {
    this.authService.logout();
    this.authenticated = this.authService.isAuthenticated();
  }
  private validatePassword() {
    return this.password === this.confirmPassword && this.password.length >= 3;
  }
  private authenticate() {
    this.authenticated = this.authService.isAuthenticated();
    this.error = '';
    this.router.navigateByUrl('/places/tabs/discover');
  }
}
