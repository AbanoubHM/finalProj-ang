import { Component, OnInit } from '@angular/core';
import { FavoriteService } from 'src/app/Service/favorite.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  constructor(private FavoriteService : FavoriteService) { }
  public products : any = [];
  public grandTotal !: number;
  ngOnInit(): void {
    this.FavoriteService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal=this.FavoriteService.getTotalPrice();
    })
  }
  removeItem(item: any){
    this.FavoriteService.removefavoriteItem(item);
  }
  emptycart(){
    this.FavoriteService.removeAllfavorite();
  }





}
