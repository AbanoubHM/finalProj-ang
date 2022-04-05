import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private url = "https://handmadeapi.azurewebsites.net/api/Orders";

  constructor(private http: HttpClient) { }
  GetUserOrders(id: any) {
    this.http.get(`${this.url}/${id}`)
  }
  AddOrder(item: any) {
    this.http.post(`${this.url}`, item);
  }
  GetOrderDetails(orderid: any) {
    this.http.get(`${this.url}/details/${orderid}`)
  }
}
