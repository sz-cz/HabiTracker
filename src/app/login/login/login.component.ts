import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {

  login = '';
  password = '';

  constructor(private authService : AuthService, private router : Router) { }


  private onSubmiitSuccess() {
    this.router.navigate(['/habits'])
  }
  private onSubmiitFailure() {
    console.log('dópa')
  }

  onSubmit() {
    this.authService.login(this.login, this.password).then(this.onSubmiitSuccess.bind(this), this.onSubmiitFailure)
  }
}
