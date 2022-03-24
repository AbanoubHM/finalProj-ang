import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { PublishProduct } from '../Models/Ipublish';

@Injectable({
  providedIn: 'root'
})
export class GategoryService {
  private _url:string="assets/Gategory.json"
  constructor(private http: HttpClient) { }
  getAllGatogaries():Observable<PublishProduct[]>{
    return this.http.get<PublishProduct[]>(this._url).pipe(catchError((err)=>{
      return throwError(err.message||"Server Error")
    }))
  }
}
