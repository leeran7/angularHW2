import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  users: User[] = [];
  private userIsAuthenticated = false;
  constructor() {}
  findUser(userToFind: User) {
    const found = this.users.find((user) => user === userToFind);
    return found;
  }
  isAuthenticated() {
    return this.userIsAuthenticated;
  }
  login(user: User) {
    if (!this.users.length) {
      this.users.push(user);
      this.userIsAuthenticated = true;
      return;
    }
    const foundUser = this.findUser(user);
    if (foundUser) {
      alert('email and password combo already ezists');
    }
  }
  logout() {
    this.userIsAuthenticated = false;
  }
}

export class User {
  email: string;
  password: string;
  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}
