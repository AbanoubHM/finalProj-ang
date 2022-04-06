import { Order } from './../../Models/Order';
import { AuthService } from '@auth0/auth0-angular';
import { OrderService } from 'src/app/Service/order.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss']
})
export class AddOrderComponent implements OnInit {
  profileJson: string="";
  orders?:any;
  idClient:any;
  constructor(private order:OrderService,private fb:FormBuilder,private auth:AuthService , private snakeBar: MatSnackBar) { }
  registerForm:FormGroup=this.fb.group({
    clientID:[''],
    phone:['',[Validators.required,Validators.minLength(10),Validators.maxLength(11),Validators.pattern('^[0-9]+$')]],
    street:[''],
    city:[''],
    state:[''],
    Notes:[''],
   
  },{
  })
  get ff(){
    return this.registerForm.controls;
  }
  ngOnInit(): void {
    this.auth.user$.subscribe((prof) => {
      this.idClient=prof?.sub;
      this.ff['clientID'].setValue(prof?.sub)
      console.log(this.idClient);
      ;
    });
  
  }
  makeOrder(){
    this.order.AddOrder(this.registerForm.value as Order).subscribe(
      data=>{this.orders=data
      console.log(this.orders);
      }
    )
    this.snakeBar.open('Added Successfully', '', {
      duration: 1000,
      panelClass: ['bg-success', 'text-center'],
    });
      }
      register_validation_messages = {
        'phone': [
          { type: 'required', message: 'Phone number is required' },
          { type: 'minlength', message: 'Invalid Phone Number' },
          { type: 'maxlength', message: 'Invalid Phone Number' },
          { type: 'pattern', message: 'Only numbers allowed' }
        ]}
    }
    

