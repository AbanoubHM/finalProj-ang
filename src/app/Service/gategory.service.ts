import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IProduct } from '../Models/Iproduct';
import { PublishProduct } from '../Models/Ipublish';

@Injectable({
  providedIn: 'root'
})
export class GategoryService {
  private _url: string = "https://handmadeapi.azurewebsites.net/api/Categories"
  constructor(private http: HttpClient) { }
  //=============================GET ALL CATEGORIES=============================================================================
  getAllGatogaries(): Observable<PublishProduct[]> {
    return this.http.get<PublishProduct[]>(this._url).pipe(catchError((err) => {
      return throwError(err.message || "Server Error")
    }))
  }
  //===============================GET PRODUCTS THAT IN CATEGORY X==================================================================
  getCategoryProducts(id: number): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this._url}/${id}/products`);
  }
  //=================================DELETE CATEGORY X==================================================================================
  deleteCategory(categoryId: number): Observable<any> {
    const urlOfCategory = `${this._url}/${categoryId}`;
    return this.http.delete<void>(urlOfCategory);
  }
  //====================================UPDATE PRODUCT===================================================================================
  updateProduct(
    categoryId: number,
    productId: number,
    updateProductDto: any
  ): Observable<void> {
    const urlById = `${this._url}/${categoryId}/products/${productId}`;
    return this.http.put<void>(urlById, updateProductDto);
  }
  //=========================================ADD PRODUCT========================================================================
  addProduct(categoryId: number, createProductDto: any): Observable<void> {
    const urlById = `${this._url}/${categoryId}/products`;
    return this.http.post<void>(urlById, createProductDto);
  }
//
}
