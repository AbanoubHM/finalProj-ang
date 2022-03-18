import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { matchValidator } from './confirmed.validator';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  
  constructor(private fb:FormBuilder) { }
  registerForm:FormGroup=this.fb.group({
    username:['',[Validators.required,Validators.pattern('^[a-zA-Z]+$'),Validators.minLength(5),Validators.maxLength(25)]],
    email:['',[Validators.required,Validators.email]],
    phone:['',[Validators.required,Validators.minLength(10),Validators.maxLength(11)]],
    confirm_password:['',Validators.required],
    password:['',[Validators.required,Validators.minLength(6)]]  
  },{
    validator:[matchValidator]
  })
  account_validation_messages = {
    'username': [
      { type: 'required', message: 'Username is required' },
      { type: 'minlength', message: 'Username must be at least 5 characters long' },
      { type: 'maxlength', message: 'Username cannot be more than 25 characters long' },
      { type: 'pattern', message: 'Your username must contain only letters' },
    ],
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'email', message: 'Enter a valid email' }
    ],
    'confirm_password': [
      { type: 'required', message: 'Confirm password is required' },
    ],
    'password': [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Password must be at least 6 characters long' },
    ],
    'phone': [
      { type: 'required', message: 'Phone number is required' },
      { type: 'minlength', message: 'Invalid Phone Number' },
      { type: 'maxlength', message: 'Invalid Phone Number' }

    ]}
  ngOnInit(): void {
  }

  get ff(){
    return this.registerForm.controls;
  }
  submitForm(){
    console.log(this.registerForm);
    
  }
}


