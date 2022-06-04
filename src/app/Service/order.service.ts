import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private url = 'https://localhost:7020/api/Orders';
  // https://handmadeapi.azurewebsites.net/api/Orders
  constructor(private http: HttpClient) {}
  GetUserOrders(id: any) {
    console.log(id);
    return this.http.get(`${this.url}/${id}`).pipe(
      catchError((err) => {
        return throwError(err.message || 'Server Error');
      })
    );
  }
  AddOrder(item: any) {
    console.log(item);
    return this.http.post(`${this.url}`, item).pipe(
      catchError((err) => {
        return throwError(err.message || 'Server Error');
      })
    );
  }
  GetOrderDetails(orderid: any) {
    return this.http.get(`${this.url}/details/${orderid}`).pipe(
      catchError((err) => {
        return throwError(err.message || 'Server Error');
      })
    );
  }
  CancelOrder(id: number) {
    let par = new HttpParams();
    par = par.set('id', id);
    return this.http.delete(`${this.url}`, { params: par }).pipe(
      catchError((err) => {
        return throwError(err.message || 'Server Error');
      })
    );
  }
}
