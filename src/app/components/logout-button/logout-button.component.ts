import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styles: [
  ]
})
export class LogoutButtonComponent implements OnInit {

  constructor(public auth:AuthService, @Inject(DOCUMENT) private doc: Document) { }

  ngOnInit(): void {
  }
  logout(){
    this.auth.logout({returnTo :this.doc.location.origin});
  }

}
