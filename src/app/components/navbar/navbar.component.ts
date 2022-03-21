import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Service/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
 public totalItem : number =0;
  constructor(private cartService: CartService) { }
  hidden = true;
  ngOnInit(): void {
    this.cartService.getProducts().
    subscribe(res=>{
      this.totalItem = res.length;
      if(this.totalItem>0){this.hidden=false}else{this.hidden=true}
    })
  }

  
}
