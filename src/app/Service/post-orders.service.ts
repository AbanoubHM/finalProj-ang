import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostOrdersService {
  public publishproduct : any =[]
  public productList = new BehaviorSubject<any>([])
  constructor() { }
  getposts(){
    return this.productList.asObservable();
  }
  setposts(product : any){
    this.publishproduct.push(...product);
    this.productList.next(product);
  }
  

}
