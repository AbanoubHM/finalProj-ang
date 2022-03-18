import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  loginForm:FormGroup=this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',Validators.required]
  })

  ngOnInit(): void {
  }
  get ff(){
    return this.loginForm.controls;
  }
  submitForm(){
    console.log(this.loginForm);
    
  }

}
