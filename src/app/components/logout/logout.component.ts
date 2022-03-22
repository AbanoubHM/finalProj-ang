import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private _user:UserService,private _router:Router) { }

  ngOnInit(): void {
    this._user.logout();
    this._router.navigateByUrl('/login')
  }

}
