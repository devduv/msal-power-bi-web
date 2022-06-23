import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: MsalService, private router: Router) {}

  ngOnInit(): void {}

  init() {
    this.authService.instance.handleRedirectPromise().then((res) => {
      if (res != null && res.account != null) {
        this.authService.instance.setActiveAccount(res.account);
      }
    });
  }

  login() {
    try {
      this.authService
        .loginPopup()
        .subscribe((response: AuthenticationResult) => {
          console.log('response: ', response);
          this.authService.instance.setActiveAccount(response.account);
          this.router.navigateByUrl('/');
        });
    } catch (err) {
      console.log(err);
    }
  }
}
