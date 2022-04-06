import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})


export class CartService {
public cartItemList : any =[]
public productList = new BehaviorSubject<any>([])
constructor(private http:HttpClient) { }



getCartProducts(userId:any){
  return this.http.get(`${environment.API}/Cart/${userId}`)
}

addtoCart(productId: any , userId:any) {
   console.log( productId , userId )
    const newProduct = { 
      "clientId": userId,
      "productId": productId,
      "quantity": 1,
    } 
    return  this.http.post(`${environment.API}/Cart`, newProduct)
 }

removeCartItem( userId:any, productId: any ) {

   return  this.http.delete(`${environment.API}/Cart`, {body : {clientId: userId, productID :productId , quantity: 1}}  )

}
}
