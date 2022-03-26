import { Component, OnInit, TemplateRef } from '@angular/core';

import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileJson: string="";
  constructor(public authService: AuthService) { 
      
    }
 
   
  ngOnInit(): void { this.authService.user$.subscribe(
    (profile) => (this.profileJson = JSON.stringify(profile, null, 2))
  );
  }
  onHighlight(){
    
  }

}
