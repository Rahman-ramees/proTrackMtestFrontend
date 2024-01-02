import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  checkDBuser(){
    const token = localStorage.getItem('token');
    if(token) {
      return token
    } else {
      return false;
    }
  }


}
