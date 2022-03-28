import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
loginState=new BehaviorSubject<boolean>(this.isLoggedIn())
  constructor() { }
  login(Email: string) {
    localStorage.setItem('email', Email)
    this.loginState.next(true);
  }
  logout(){
    localStorage.removeItem("email");
    this.loginState.next(false)
  }
  isLoggedIn(): boolean {
  let Email=  localStorage.getItem('email')
    return Email!=null;
  }
}
