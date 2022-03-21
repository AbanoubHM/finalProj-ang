import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../Models/Iproduct';
import { catchError, Observable, throwError } from 'rxjs';
import { CategoryType } from '../Models/Icategory';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url: string = "https://fakestoreapi.com/products";
  constructor(private http: HttpClient) { }
  GetAllProducts():Observable<IProduct[]>
  {
    return this.http.get<IProduct[]>(this.url).pipe(catchError((err)=>{
    return throwError(()=>err.message||"server error.") }))
  }
  GetProductById(id:number):Observable<IProduct[]>
  {
    return this.http.get<IProduct[]>(this.url).pipe(catchError((err)=>{
      return throwError(()=>err.message||"server error.") }))
  }
}
