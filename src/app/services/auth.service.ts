import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  keyLocalAuth = environment.keyLocalAuthenInfo;
  constructor() { }

  setToken(token: string){
    localStorage.setItem(this.keyLocalAuth, token)
  }

  getToken(){
    return localStorage.getItem(this.keyLocalAuth)?? null;
  }

  removeToken(){
    localStorage.removeItem(this.keyLocalAuth);
  }
}
