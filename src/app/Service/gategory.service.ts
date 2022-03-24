import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { CategoryType } from 'src/assets/Icategory';

@Injectable({
  providedIn: 'root'
})
export class GategoryService {
  private _url:string="../gategory.json"
  constructor(private http: HttpClient) { }

  getAllPosts():Observable<CategoryType[]>{
    return this.http.get<CategoryType[]>(this._url).pipe(catchError((err)=>{
      return throwError(err.message||"Server Error")
    }))
  }
}
