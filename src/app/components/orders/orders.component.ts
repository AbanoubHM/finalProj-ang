import { Component, OnInit , Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  maxDate?:Date
  constructor(private fb:FormBuilder) { }
  registerForm:FormGroup=this.fb.group({
    Name:['',[Validators.required,Validators.pattern('^[a-zA-Z]+$'),Validators.minLength(5),Validators.maxLength(25)]],
    Description:['',[Validators.required,Validators.required]],
    image:['',[Validators.required,Validators.required]],
    confirm_password:['',Validators.required],
    password:['',[Validators.required,Validators.minLength(6)]],
    birthdate:['',Validators.required],
    address:['']
  })
  ngOnInit(): void {
    const currentYear = new Date().getFullYear();
    this.maxDate = new Date(currentYear - 14, 0, 1);
  }

  get ff(){
    return this.registerForm.controls;
  }
  submitForm(){
    console.log(this.registerForm);

  }
  register_validation_messages = {
    'Name': [
      { type: 'required', message: 'your ptoduct Name is required' }
    ],
    'Description': [
      { type: 'required', message: 'Description of your product is required' }
    ],
    'password': [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Password must be at least 6 characters long' }
    ],
    'phone': [
      { type: 'required', message: 'Phone number is required' },
      { type: 'minlength', message: 'Invalid Phone Number' },
      { type: 'maxlength', message: 'Invalid Phone Number' },
      { type: 'pattern', message: 'Only numbers allowed' }

    ]}



}

