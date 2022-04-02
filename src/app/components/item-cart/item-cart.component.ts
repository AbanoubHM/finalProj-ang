import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../../Service/favorite.service';

@Component({
  selector: 'app-item-cart',
  templateUrl: './item-cart.component.html',
  styleUrls: ['./item-cart.component.scss']
})
export class ItemCartComponent implements OnInit {

  constructor(private FavoriteService : FavoriteService) { }
  public product: any = [];

  ngOnInit(): void {
    this.FavoriteService.getProducts().subscribe(
      data => {
        this.product = data ;
        console.log(this.product );
      },
      
      error => {
        console.log('server id down', error);
      })    

  }


  deleteHandel(id:string) {
    this.FavoriteService.removefavoriteItem(id).subscribe(
      data => {
       console.log(data)
       this.ngOnInit()
        
      },
      error => {
        console.log('server id down', error);
      })
  }

}
