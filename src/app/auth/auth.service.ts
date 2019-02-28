import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private credentials = {
    login: 'admin',
    password: '1234'
  }

  private isUserLoggedIn = false;

  login(login, password) {
    return new Promise ((resolve, reject) => {
      if (login === this.credentials.login && password === this.credentials.password) {
        this.isUserLoggedIn = true;
        resolve();
      } else {
        reject()
      }
    })
  }
  isLoggedIn() {
    return this.isUserLoggedIn;
  }

  constructor() { }
}
