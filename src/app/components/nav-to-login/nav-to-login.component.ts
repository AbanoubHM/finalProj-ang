import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-nav-to-login',
  templateUrl: './nav-to-login.component.html',
  styles: [
  ]
})
export class NavToLoginComponent implements OnInit {
  isCollapsed = true;
  
  constructor(public auth:AuthService,
    @Inject(DOCUMENT) private doc: Document) { }

  ngOnInit(): void {
  }
  loginWithRedirect() {
    this.auth.loginWithRedirect();
  }

  logout() {
    this.auth.logout({ returnTo: this.doc.location.origin });
  }

}
