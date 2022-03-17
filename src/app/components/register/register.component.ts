import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  registerForm=new FormGroup({
    userName:new FormControl(),
    password:new FormControl(),
    eMail:new FormControl()

  })
  ngOnInit(): void {
  }

}
