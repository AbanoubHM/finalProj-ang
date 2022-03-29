import { catchError, throwError, Observable } from 'rxjs';
import { IClient } from './../components/Models/IClient';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private _url: string = 'https://handmadeapi.azurewebsites.net/api/Clients';

  constructor(private http: HttpClient) {}
  getClientData(id?: string): Observable<IClient> {
    return this.http.get<IClient>(`${this._url}/${id}`).pipe(
      catchError((err) => {
        return throwError(err.message || 'Server Error');
      })
    );
  }
  updateClientData(id: string, data: IClient): Observable<IClient> {
    return this.http.put<IClient>(`${this._url}/${id}`, data).pipe(
      catchError((err) => {
        return throwError(err.message || 'Server Error');
      })
    );
  }
}
