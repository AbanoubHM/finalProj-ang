import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Service/cart.service';
import { FavoriteService } from 'src/app/Service/favorite.service';
import { UserService } from 'src/app/Service/user.service';
import { MenuItem } from '../Models/menu-item';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  isOpen:boolean=false; 
  islogged=false;
 
  public totalItem: number = 0;
  public totalfavortit: number = 0;
  constructor(private cartService: CartService , private favoriteService : FavoriteService,private User:UserService) { }
  hidden = true;
  hidden1 = true;
  ngOnInit(): void {
    this.User.loginState.subscribe(
      st=>{this.islogged=st}
    );
    this.cartService.getProducts().
      subscribe(res => {
        this.totalItem = res.length;
        if (this.totalItem > 0) { this.hidden = false } else { this.hidden = true }
      });
      this.favoriteService.getProducts().
      subscribe(res => {
        this.totalfavortit = res.length;
        if (this.totalfavortit > 0) { this.hidden1 = false } else { this.hidden1 = true }
      });
  }
  
  ToggleNavbar(){
    this.isOpen=!this.isOpen;
  }

}
