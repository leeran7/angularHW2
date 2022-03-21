import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  users: User[] = [];
  private userIsAuthenticated = false;
  constructor() {}
  findUser(userToFind: User) {
    const found = this.users.find((user) => user.email === userToFind.email);
    return found;
  }
  isAuthenticated() {
    return this.userIsAuthenticated;
  }
  login(user: User) {
    const foundUser = this.findUser(user);
    if (foundUser) {
      this.userIsAuthenticated = true;
      return user;
    }
    this.users.push(user);
    this.userIsAuthenticated = true;
    return user;
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
