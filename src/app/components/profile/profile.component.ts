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
    FirstName: [''],
    LastName: [''],
    phone: [
      '',
      [
        Validators.minLength(10),
        Validators.maxLength(11),
        Validators.pattern('^[0-9]+$'),
      ],
    ],
    birthdate: [Date.now()],
    address: [''],
  });

  ngOnInit(): void {
    this.authService.user$.subscribe((profile) => {
      this.profileJson = JSON.stringify(profile, null, 2);
      console.log(profile);
      this.profServ.getClientData(profile?.sub).subscribe((data) => {
        this.userDb = data;
        console.log(this.authService);
      });
    });
  }
  get ff() {
    return this.updateProfile.controls;
  }
  sendToDb() {
    this.userDb.name = `${this.ff['FirstName'].value} ${this.ff['LastName'].value}`;
    this.userDb.address = this.ff['address'].value;
    this.userDb.age = 2022 - this.ff['birthdate'].value.getFullYear();
    console.log(this.userDb);
    //console.log(this.updateProfile.value);
    // this.profServ
    //   .updateClientData(this.userDb.id, this.userDb)
    //   .subscribe((dat) => {
    //     console.log(dat);
    //   });
  }

  onHighlight() {}
}
