import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([])
  constructor() { }
  getProducts(){
    return this.productList.asObservable();
  }
  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtocustomers(product : any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
  }
}
