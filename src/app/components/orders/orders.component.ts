import { Component, OnInit , Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor(private router :Router) { }
  ngOnInit(): void {
    



  }

}
