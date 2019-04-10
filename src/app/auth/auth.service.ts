import { Injectable } from '@angular/core';
import { LayoutService } from '../layout.service';

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
        this.layoutService.hideLayout();
        resolve();
      } else {
        reject()
      }
    })
  }

  logout() {
    this.isUserLoggedIn = false;
    this.layoutService.showLayout();
  }

  isLoggedIn() {
    return this.isUserLoggedIn;
  }

  constructor(private layoutService : LayoutService) { }
}
