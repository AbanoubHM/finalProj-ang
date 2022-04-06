import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  public productList = new BehaviorSubject<any>([])



  constructor(private http:HttpClient) { }

  getfevProducts(userId:any){
    return this.http.get(`${environment.API}/Clients/Favourite/${userId}`)
  }


  addtofavorite(productId: any , userId:any) {
      const newProduct = { userID: userId, productID :productId}
      return  this.http.post(`${environment.API}/Clients/Favourite`, newProduct)
   }


  removefavoriteItem( userId:any, productId: any ) {

     const deleteItem = { userID: userId, productID :productId}   
     return  this.http.delete(`${environment.API}/Clients/Favourite`, {body : deleteItem}  )
  }
}
