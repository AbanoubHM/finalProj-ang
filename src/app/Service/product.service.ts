import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient, HttpParams } from '@angular/common/http';
import { IProduct } from '../components/Models/iproduct';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _url: string = 'https://handmadeapi.azurewebsites.net/api/Products';

  private httpClient: HttpClient;

  constructor(private http: HttpClient, handler: HttpBackend) {
    this.httpClient = new HttpClient(handler);
  }
 
  getAllProuduct(){
      return this.httpClient.get<IProduct[]>(this._url).pipe(
      catchError((err) => {
        return throwError(err.message || 'Server Error');
      })
    );
  }



  getProductsBySortName(filters: HttpParams): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(this._url, { params: filters }).pipe(
      catchError((err) => {
        return throwError(err.message || 'Server Error');
      })
    );
  }

  getProductById(prodId: number): Observable<IProduct> {
    return this.httpClient.get<IProduct>(`${this._url}/${prodId}`).pipe(
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
