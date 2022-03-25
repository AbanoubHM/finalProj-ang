import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IStore } from '../components/Models/Istore';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private _url: string = "https://productsdb20220320050233.azurewebsites.net/api/Products"
  constructor(private http: HttpClient) { }
  getAllVendorStore(): Observable<IStore[]> {
    return this.http.get<IStore[]>(this._url).pipe(catchError((err) => {
      return throwError(err.message || "Server Error")
    }))
  }


  getVendorStoreBYID(ID:number):Observable<IStore>{
    return this.http.get<IStore>(`${this._url}/${ID}`).pipe(catchError((err)=>{
      return throwError(err.message||"Server Error")
    }))
  }



}
