import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { NgForm } from '@angular/forms';
import { User } from './auth.service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  authenticated = false;
  isLogin = true;
  private loading = false;
  private error = '';
  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit() {}
  async onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    if (this.isLogin) {
      return this.onLogin(form);
    }
    return this.onRegister(form);
  }
  private onLogin(form: NgForm) {
    this.loading = true;
    const { email, password } = form.value;
    const user = new User(email, password);
    const authed = this.authService.login(user);
    if (typeof authed !== 'string') {
      return this.authenticate();
    } else {
      this.error = 'User not found. Please Register';
      this.switchAuthMode();
    }
    this.loading = false;
  }
  private switchAuthMode() {
    this.isLogin = !this.isLogin;
  }
  private onRegister(form: NgForm) {
    this.loading = true;
    const { email, password, confirmPassword } = form.value;
    const validated = password === confirmPassword;
    if (validated) {
      const newUser = new User(email, password);
      const registered = this.authService.register(newUser);
      if (typeof registered !== 'string') {
        return this.authenticate();
      } else {
        this.error = registered;
      }
    } else {
      this.error = 'Register Failed';
    }
    this.loading = false;
  }
  private onLogout() {
    this.authService.logout();
    this.authenticated = this.authService.isAuthenticated();
  }

  private async authenticate() {
    await setTimeout(async () => {
      this.authenticated = await this.authService.isAuthenticated();
      this.error = '';
      this.router.navigateByUrl('/places/tabs/discover');
      this.loading = false;
    }, 3000);
  }
}
