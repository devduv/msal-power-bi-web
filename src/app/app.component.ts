import { AuthenticationResult } from '@azure/msal-browser';
import { MsalService } from '@azure/msal-angular';
import { Component, OnInit } from '@angular/core';
import { PowerBiService } from './power-bi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  constructor(private authService: MsalService, private router: Router) {
  }

  getName() {
    if (this.authService.instance.getActiveAccount() == null) {
      return 'unknown';
    }

    return this.authService.instance.getActiveAccount();
  }
  ngOnInit(): void {}

  isLoggedIn(): boolean {
    return this.authService.instance.getActiveAccount() != null;
  }

  logout() {
    this.authService.logout();

    this.router.navigateByUrl('/login');
  }
}
