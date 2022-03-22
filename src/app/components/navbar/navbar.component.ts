import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Service/cart.service';
import { FavoriteService } from 'src/app/Service/favorite.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public totalItem: number = 0;
  public totalfavortit: number = 0;

  constructor(private cartService: CartService , private FavoriteService : FavoriteService) { }
  hidden = true;
  hidden1 = true;
  ngOnInit(): void {
    this.cartService.getProducts().
      subscribe(res => {
        this.totalItem = res.length;
        if (this.totalItem > 0) { this.hidden = false } else { this.hidden = true }
      });
      this.FavoriteService.getProducts().
      subscribe(res => {
        this.totalfavortit = res.length;
        if (this.totalfavortit > 0) { this.hidden1 = false } else { this.hidden1 = true }
      });
  }


}
