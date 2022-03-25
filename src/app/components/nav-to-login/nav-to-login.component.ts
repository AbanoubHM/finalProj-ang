import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-nav-to-login',
  templateUrl: './nav-to-login.component.html',
  styles: [
  ]
})
export class NavToLoginComponent implements OnInit {

  constructor(public auth:AuthService) { }

  ngOnInit(): void {
  }

}
