import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private url = "https://handmadeapi.azurewebsites.net/api/Orders";

  constructor(private http: HttpClient) { }
  GetUserOrders(id: any) {
   return this.http.get(`${this.url}/${id}`).pipe(
    catchError((err) => {
      return throwError(err.message || 'Server Error');
    })
   )
  }
  AddOrder(item: any) {
    return  this.http.post(`${this.url}`, item);
  }
  GetOrderDetails(orderid: any) {
    return  this.http.get(`${this.url}/details/${orderid}`)
  }
}
