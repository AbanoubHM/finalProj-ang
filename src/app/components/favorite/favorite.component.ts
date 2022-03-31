import { Component, OnInit } from '@angular/core';
import { FavoriteService } from 'src/app/Service/favorite.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  constructor(private FavoriteService : FavoriteService) { }
  public products: any = [];
  public test : any = [];
  public grandTotal !: number;
  ngOnInit(): void {
    this.FavoriteService.getProducts()
      .subscribe(res => {
        
        this.grandTotal = this.FavoriteService.getTotalPrice();
      });
      var  x :any = localStorage.getItem('test')
    this.products = JSON.parse(x);
  }
  removeItem(item: any){
    this.FavoriteService.removefavoriteItem(item);
  }
  emptycart(){
    this.FavoriteService.removeAllfavorite();
  }





}
