import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Service/cart.service';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  islogged=false;
 public totalItem : number =0;
  constructor(private cartService: CartService,private User:UserService) { }
  hidden = true;
  ngOnInit(): void {
    // .islogged=this.User.isLoggedIn();
    //login state
    this.User.loginState.subscribe(
      st=>{this.islogged=st}
    );
    this.cartService.getProducts().
    subscribe(res=>{
      this.totalItem = res.length;
      if(this.totalItem>0){this.hidden=false}else{this.hidden=true}
    })
  }

  
}
