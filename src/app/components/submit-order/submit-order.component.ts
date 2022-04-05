import { AuthService } from '@auth0/auth0-angular';
import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/Service/order.service';
import { Order } from 'src/app/Models/Order';

@Component({
  selector: 'app-submit-order',
  templateUrl: './submit-order.component.html',
  styleUrls: ['./submit-order.component.scss']
})
export class SubmitOrderComponent implements OnInit {
  id?: string;
  orders?: any;
  constructor(private suborder: OrderService, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.user$.subscribe((profile) => {
      this.id = profile?.sub
      this.get()
    });
  }
  get() {
    this.suborder.GetUserOrders(this.id).subscribe(data => {
      this.orders = data
    console.log(this.orders);
    }, erorr => {
      console.log(erorr);
    })

  }
  
}
