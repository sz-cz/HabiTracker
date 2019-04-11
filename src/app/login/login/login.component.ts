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
  showValidationProblem = false

  constructor(private authService : AuthService, private router : Router) { }


  private onSubmiitSuccess() {
    this.router.navigate(['/habits'])
  }
  private onSubmiitFailure() {
    this.showValidationProblem = true;
  }

  onSubmit() {
    this.authService.login(this.login, this.password).then(this.onSubmiitSuccess.bind(this), this.onSubmiitFailure.bind(this))
  }
}
