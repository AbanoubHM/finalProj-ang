import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { ProfileService } from 'src/app/Service/profile.service';
import { IClient } from './../Models/IClient';
import { Component, OnInit, TemplateRef } from '@angular/core';

import { AuthService } from '@auth0/auth0-angular';
import { NativeDateAdapter, NativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profileJson: string = '';
  userDb: IClient = {
    id: '',
    name: '',
    address: '',
    imageUrl: '',
    age: 25,
  };
  constructor(
    public authService: AuthService,
    private profServ: ProfileService,
    private fb: FormBuilder
  ) {}
  updateProfile: FormGroup = this.fb.group({
    FirstName: [this.userDb.name],
    LastName: [''],
    phone: ['', [Validators.minLength(10), Validators.maxLength(11)]],
    birthdate:[''],
    address: [''],
    city: [''],
    state: [''],
  });

namefromdb: string [] = [];
addressfromdb: string [] = [];

  ngOnInit(): void {
    this.authService.user$.subscribe((profile) => {
      this.profileJson = JSON.stringify(profile, null, 2);
      // console.log(profile);
      this.profServ.getClientData(profile?.sub).subscribe((data) => {
        this.userDb = data;
        this.namefromdb = this.userDb.name.split(';');
        this.addressfromdb = this.userDb.address.split(';');        
        // console.log(this.authService);
      });
    });
  }
  get ff() {
    return this.updateProfile.controls;
  }
  sendToDb() {
    this.userDb.name = `${this.ff['FirstName'].value};${this.ff['phone'].value}`;
    this.userDb.address = `${this.ff['address'].value};${this.ff['city'].value};${this.ff['state'].value}`;
    console.log(this.userDb.name);
    console.log(this.userDb.address);
    
    this.userDb.age =this.ff['birthdate'].value;
    this.profServ
      .updateClientData(this.userDb.id, this.userDb)
      .subscribe((dat) => {
        console.log(dat);
      });
  }

  onHighlight() {}
}
