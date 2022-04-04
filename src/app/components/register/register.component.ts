import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { ProfileService } from 'src/app/Service/profile.service';
import { Iprofile } from '../Models/Iprofile';
import {BecomeVendor} from '../../Models/become-vendor'
import { BecomeVenderService } from 'src/app/Service/become-vender.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

   postuser?: Iprofile[]

  maxDate?:Date
  constructor(private fb:FormBuilder , private postusers:ProfileService ,private vand:BecomeVenderService) { }
  registerForm:FormGroup=this.fb.group({
    clientID:[''],
    VendorName:['',[Validators.required,Validators.pattern('^[a-zA-Z]+$'),Validators.minLength(5),Validators.maxLength(25)]],
    phone:['',[Validators.required,Validators.minLength(10),Validators.maxLength(11),Validators.pattern('^[0-9]+$')]],
    StoreName:['',[Validators.required]],
    StoreImg:[''],
    Street:[''],
    City:[''],
    State:['']
  },{
  })
  ngOnInit(): void {
    const currentYear = new Date().getFullYear();
    this.maxDate = new Date(currentYear - 14, 0, 1);
  }

  get ff(){
    return this.registerForm.controls;
  }
  submitForm(item:any){
    
  //  var formData:FormGroup=this.registerForm
  //   this.vand.postVendor(this.registerForm.value).subscribe({
  //       next: (response) => console.log(response),
  //       error: (error) => console.log(error),
  //     });
    console.log(this.registerForm);

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


