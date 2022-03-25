import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartService } from '../Service/cart.service';
import { CustomersService } from '../Service/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  constructor(private cutom: CustomersService) { }
  public products : any = [];

  ngOnInit(): void {
    this.cutom.getProducts()
    .subscribe(res=>{
      this.products = res;
    })
  }

}
