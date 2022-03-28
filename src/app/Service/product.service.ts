import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IProduct } from '../components/Models/iproduct';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _url:string="https://handmadeapi.azurewebsites.net/api/Products"
  constructor(private http:HttpClient) { }
  getAllPosts(urlstring: string): Observable<IProduct[]>{
    var _url1 = "https://handmadeapi.azurewebsites.net/api/Products/Sort/"
    // _url1=_url1.concat(urlstring.toString())
    return this.http.get<IProduct[]>(this._url).pipe(catchError((err) => {

      return throwError(err.message || "Server Error")

    }))
  }
  getProductsBySortName(filters:string):Observable<IProduct>{
    let myparams=new HttpParams();
    myparams=myparams.set("sort",filters)
    return this.http.get<IProduct>("https://handmadeapi.azurewebsites.net/api/Products/",{ params:myparams}).pipe(catchError((err)=>{
      return throwError(err.message||"Server Error")
    }))
  }
  getProductsBySortNameD():Observable<IProduct>{
    let myparams=new HttpParams();
    myparams=myparams.set("sort","ND")
    return this.http.get<IProduct>("https://handmadeapi.azurewebsites.net/api/Products",{ params:myparams}).pipe(catchError((err)=>{
      return throwError(err.message||"Server Error")
    }))
  }
  getProductById(prodId:number):Observable<IProduct>{
    return this.http.get<IProduct>(`${this._url}/${prodId}`).pipe(catchError((err)=>{
      return throwError(err.message||"Server Error")
    }))
  }
  deleteProduct(categoryId: number, productId: number) {

      const urlById = `${this._url}/${categoryId}/products/${productId}`;
      return this.http.delete<void>(urlById);
  }

  addProduct(categoryId: number, createProductDto: any): Observable<void> {

      const urlById = `${this._url}/${categoryId}/products`;
      return this.http.post<void>(urlById, createProductDto);

}
}
