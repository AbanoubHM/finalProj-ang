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
    imageUrl: '',
    street: '',
    city: '',
    state: '',
    phone: '',
  };
  user: any;
  constructor(
    public authService: AuthService,
    private profServ: ProfileService,
    private fb: FormBuilder
  ) {
    this.user = {};
  }
  updateProfile: FormGroup = this.fb.group({
    FirstName: [this.userDb.name],
    LastName: [''],
    phone: ['', [Validators.minLength(10), Validators.maxLength(11)]],
    birthdate: [''],
    address: [''],
    city: [''],
    state: [''],
  });
  namefromdb: string[] = [];
  addressfromdb: string[] = [];
  // role: string = "";
  ngOnInit(): void {
    this.authService.user$.subscribe((success: any) => {
      this.user = success;

      this.profServ.getClientData(success.sub).subscribe((data) => {
        this.userDb = data;
        this.ff['city'].setValue(this.userDb.city);
      });
    });
  }

  get ff() {
    return this.updateProfile.controls;
  }
  sendToDb() {
    this.userDb.name = this.ff['FirstName'].value;
    this.userDb.street = this.ff['address'].value;
    this.userDb.phone = this.ff['phone'].value;
    this.userDb.city = this.ff['city'].value;
    this.userDb.state = this.ff['state'].value;

    this.profServ
      .updateClientData(this.userDb.id, this.userDb)
      .subscribe((dat) => {
        console.log(dat);
      });
  }

  onHighlight() {}
}
