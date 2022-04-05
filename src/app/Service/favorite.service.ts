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


  addtofavorite(productId: any , userId:any) {
    const newProduct = { userID: userId, productID :productId}
 
     console.log( "s" , productId , userId)

      return  this.http.post(`${environment.API}/Clients/Favourite`, newProduct)
   }


  getTotalPrice() : number{
    let grandTotal = 0;
    this.favoriteItemList.map((a:any)=>{
      grandTotal += a.price;
    })
    return grandTotal;
  }


  removefavoriteItem( userId:any, productId: any ) {

    const deleteItem = { userID: userId, productID :productId}
 
    console.log( "s" , productId , userId)
   
     return  this.http.delete(`${environment.API}/Clients/Favourite`, {body : deleteItem}  )
  }
}
