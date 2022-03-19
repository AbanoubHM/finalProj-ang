import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  contactForm:FormGroup=this.fb.group({
    fullname:[''],
    email:['',[Validators.required,Validators.email]],
    subject:[''],
    message:['',[Validators.required,Validators.minLength(10)]]
  })

  ngOnInit(): void {
  }
  send() {
    console.log(this.contactForm)
  }
  get ff(){
    return this.contactForm.controls;
  }
}
