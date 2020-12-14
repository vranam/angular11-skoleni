import { Component, OnInit } from '@angular/core';
import { LoginApiService } from '../../service/login-api.service';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginInProgress: boolean;
  error: boolean;

  constructor(
    private loginApi: LoginApiService,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  login(value: string): void {
    console.log(value);
    this.error = false;
    this.loginInProgress = true;
    this.loginApi.login(value).subscribe(
      result => {
        console.log('sessionId: ' + result);
        this.loginInProgress = false;
        this.authService.sessionId = result;
        this.router.navigate(['content']);
      },
      error => {
        console.error(error);
        this.loginInProgress = false;
        this.error = true;
      }
    );
  }

}
