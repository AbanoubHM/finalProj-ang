import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  public x: any = localStorage.getItem('test');
  public favoriteItemList: any = JSON.parse(this.x);

  public productList = new BehaviorSubject<any>([])



  constructor(private http:HttpClient) { }

  getfevProducts(userId:any){
    console.log( `${environment.API}/Clients/Favourite/${userId}`)
    return this.http.get(`${environment.API}/Clients/Favourite/${userId}`)
  }


  addtofavorite(product: any , userId:any) {
    console.log(userId)
   const newProduct =  {
    productID : product.id,
      name: product.name,
      image:product.image,
      price : product.price,
      quantity: product.quantity,
    }

   console.log(product , userId)

      return  this.http.post(`${environment.API}/Favourite?clientid=${userId}&productid=${product.id}`,{})
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
