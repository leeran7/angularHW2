import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  users: User[] = [new User('l@gmail.com', '123456')];
  private userIsAuthenticated = false;
  constructor() {}
  findUser(userToFind: User) {
    const found = this.users.find((user) => user.email === userToFind.email);
    return found;
  }
  isAuthenticated() {
    return this.userIsAuthenticated;
  }
  login(user: User): User | string {
    const foundUser = this.findUser(user);
    if (foundUser) {
      if (foundUser.password !== user.password) {
        return 'Password incorrect...';
      }
      this.userIsAuthenticated = true;
      return user;
    }
    return 'Please Register. User does not exist';
  }
  register(user: User): User | string {
    const foundUser = this.findUser(user);
    if (foundUser) {
      return 'Please Login. User already Exists.';
    } else {
      console.log(this.users);
      this.users.push(user);
      console.log(this.users);
      this.userIsAuthenticated = true;
      return user;
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
