import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BecomeVenderService {
url="https://handmadeapi.azurewebsites.net/api/Stores";
  constructor(private http:HttpClient) {
  }
}
