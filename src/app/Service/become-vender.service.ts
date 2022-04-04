import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {BecomeVendor} from '../Models/become-vendor'
@Injectable({
  providedIn: 'root'
})
export class BecomeVenderService {
  private _url: string = 'https://handmadeapi.azurewebsites.net/api/Stores';
  constructor(private http:HttpClient) {

  }
 postVendor(vandorData:any){
   return this.http.post(this._url,vandorData);
 }
}
