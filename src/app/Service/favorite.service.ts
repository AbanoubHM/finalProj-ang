import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  public x: any = localStorage.getItem('test');
  public favoriteItemList: any = JSON.parse(this.x);

  public productList = new BehaviorSubject<any>([])



  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get(`${environment.jsonServer}/favorite`)

  }
  setProduct(product: any) {

    this.favoriteItemList.push(...product);
    this.productList.next(product);
  }
  addtofavorite(product: any) {


    this.http.post(`${environment.jsonServer}/favorite`, product).subscribe(
      data => {
        console.log('POST Request is successful ', data);
      },
      error => {
        console.log('server id down', error);
      })


  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.favoriteItemList.map((a:any)=>{
      grandTotal += a.price;
    })
    return grandTotal;
  }
  removefavoriteItem(id: any) {

     return   this.http.delete(`${environment.jsonServer}/favorite/${id}`)
  }
  removeAllfavorite(id :any){
   console.log(id)
  }
}
