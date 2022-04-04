import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {BecomeVendor} from '../Models/become-vendor'
@Injectable({
  providedIn: 'root'
})
export class BecomeVenderService {

  constructor(private http:HttpClient) {

  }
 // postVendor(vandor:any):Observable<BecomeVendor>{
 //var vendor:any;
   //var url="https://handmadeapi.azurewebsites.net/api/Stores";
   //return this.http.post(url,vendor).subscribe(d=>vandor=d);
 // }
}
