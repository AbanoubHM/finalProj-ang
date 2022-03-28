import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IStore } from '../components/Models/Istore';
import { catchError, Observable, throwError } from 'rxjs';
import { PublishProduct } from 'src/app/Models/Ipublish';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private _url: string = "https://handmadeapi.azurewebsites.net/api/Products"
  constructor(private http: HttpClient) { }
  getAllVendorStore(): Observable<PublishProduct[]> {
    return this.http.get<PublishProduct[]>(this._url).pipe(catchError((err) => {
      return throwError(err.message || "Server Error")
    }))
  }


  getVendorStoreBYID(ID:number):Observable<PublishProduct>{
    return this.http.get<PublishProduct>(`${this._url}/${ID}`).pipe(catchError((err)=>{
      return throwError(err.message||"Server Error")
    }))
  }



}
