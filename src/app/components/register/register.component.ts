import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { ProfileService } from 'src/app/Service/profile.service';
import { Iprofile } from '../Models/Iprofile';
import {BecomeVendor} from '../../Models/become-vendor'
import { BecomeVenderService } from 'src/app/Service/become-vender.service';
import { AuthService } from '@auth0/auth0-angular';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

   postuser?: Iprofile[]

  maxDate?:Date
  profileJson: string="";
  
  IDOfVendor?:string="";
  constructor(private fb:FormBuilder , private postusers:ProfileService ,private vand:BecomeVenderService,public authService:AuthService) { }
  registerForm:FormGroup=this.fb.group({
    id:[''],
    vendorName:['',[Validators.required,Validators.pattern('^[a-zA-Z]+$'),Validators.minLength(5),Validators.maxLength(25)]],
    phone:['',[Validators.required,Validators.minLength(10),Validators.maxLength(11),Validators.pattern('^[0-9]+$')]],
    storeName:['',[Validators.required]],
    storeImg:[''],
    street:[''],
    city:[''],
    state:['']
  },{
  })
  ngOnInit(): void {
    const currentYear = new Date().getFullYear();
    this.maxDate = new Date(currentYear - 14, 0, 1);
    this.authService.user$.subscribe((profile) => {
      this.ff['id'].setValue(profile?.sub)
      console.log(this.IDOfVendor);
     
      console.log(profile?.['http://roletest.net/roles'])
        this.profileJson = JSON.stringify(profile, null, 2);})
  }

  get ff(){
    return this.registerForm.controls;
  }
  submitForm(){
    this.vand.postVendor(this.registerForm.value as BecomeVendor).subscribe({

    })
 
    console.log(this.registerForm);
    location.reload()

  }
  register_validation_messages = {
    'username': [
      { type: 'required', message: 'Username is required' },
      { type: 'minlength', message: 'Username must be at least 5 characters long' },
      { type: 'maxlength', message: 'Username cannot be more than 25 characters long' },
      { type: 'pattern', message: 'Your username must contain only letters' }
    ],
    'phone': [
      { type: 'required', message: 'Phone number is required' },
      { type: 'minlength', message: 'Invalid Phone Number' },
      { type: 'maxlength', message: 'Invalid Phone Number' },
      { type: 'pattern', message: 'Only numbers allowed' }

    ],
    'StoreName':[
      {type: 'required', message: 'Phone number is required'}
    ]}
}


