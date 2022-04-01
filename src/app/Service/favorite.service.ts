import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  public x: any = localStorage.getItem('test');
  public favoriteItemList: any = JSON.parse(this.x);

  public productList = new BehaviorSubject<any>([])



  constructor() { }
  getProducts(){
    return this.productList.asObservable();

  }
  setProduct(product: any) {

    this.favoriteItemList.push(...product);
    this.productList.next(product);
  }
  addtofavorite(product: any) {

    this.favoriteItemList.push(product);
    this.productList.next(this.favoriteItemList);
    localStorage.setItem('myData', product);
    localStorage.setItem('test', JSON.stringify(this.favoriteItemList))
    this.getTotalPrice();
    var  x :any = localStorage.getItem('test')
    console.log(this.favoriteItemList)
    console.log(JSON.parse(x))

  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.favoriteItemList.map((a:any)=>{
      grandTotal += a.price;
    })
    return grandTotal;
  }
  removefavoriteItem(product: any) {
    this.x.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.x.splice(index,1);
      }
    })
    this.productList.next(this.favoriteItemList);
  }
  removeAllfavorite(){
    this.favoriteItemList = []
    this.productList.next(this.favoriteItemList);
  }
}
