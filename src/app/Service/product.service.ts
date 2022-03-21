import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../components/Models/iproduct';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _url:string="https://productsdb20220320050233.azurewebsites.net/api/Products"
  constructor(private http:HttpClient) { }
  getAllPosts():Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this._url).pipe(catchError((err)=>{
      return throwError(err.message||"Server Error")
    }))
  }

  getProductById(prodId:number):Observable<IProduct>{
    //console.log(`${this._url}/${prodId}`);
    
    return this.http.get<IProduct>(`${this._url}/${prodId}`).pipe(catchError((err)=>{
      return throwError(err.message||"Server Error")
    }))
  }
  
}
