import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IStore } from '../components/Models/Istore';
import { catchError, Observable, throwError } from 'rxjs';
import { PublishProduct } from 'src/app/Models/Ipublish';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private _url: string = 'https://handmadeapi.azurewebsites.net/api/Products';
  constructor(private http: HttpClient) {}
  getAllVendorStore(): Observable<PublishProduct[]> {
    return this.http.get<PublishProduct[]>(this._url).pipe(
      catchError((err) => {
        return throwError(err.message || 'Server Error');
      })
    );
  }

  getVendorStoreBYID(ID: number): Observable<PublishProduct> {
    return this.http.get<PublishProduct>(`${this._url}/${ID}`).pipe(
      catchError((err) => {
        return throwError(err.message || 'Server Error');
      })
    );
  }

  AddProduct(product: PublishProduct) {
    console.log(product);
    let body = JSON.stringify(product);
    console.log(body);

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = { headers: headers };
    return this.http.post(this._url, body, options).subscribe(
      (response) => console.log(response),
      (err) => console.log(err)
    );
  }
}
