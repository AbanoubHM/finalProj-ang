import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IProduct } from '../components/Models/iproduct';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _url: string = 'https://handmadeapi.azurewebsites.net/api/Products';
  constructor(private http: HttpClient) {}

 
  getAllProuduct(){
      return this.http.get(`${environment.API}/Products`)
  }


  getProductsBySortName(filters: HttpParams): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this._url, { params: filters }).pipe(
      catchError((err) => {
        return throwError(err.message || 'Server Error');
      })
    );
  }

  getProductById(prodId: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this._url}/${prodId}`).pipe(
      catchError((err) => {
        return throwError(err.message || 'Server Error');
      })
    );
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
