import { AuthService } from '@auth0/auth0-angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BecomeVendor } from '../Models/become-vendor'
@Injectable({
  providedIn: 'root'
})
export class BecomeVenderService {
  private _url: string = 'https://handmadeapi.azurewebsites.net/api/Stores';
  private url = 'https://handmadeapi.azurewebsites.net/api/Products';
  constructor(private http: HttpClient, private auth: AuthService) {

  }

  postVendor(vandorData: any) {
    return this.http.post(this._url, vandorData);
  }
  GetVandorProducts(id: number) {
    return this.http.get(`${this._url}/${id}/products`)
  }
  DeleteProduct(id: any) {
    return this.http.delete(`${this.url}/${id}`)
  }
  UpDateProduct(){
    
  }
}
