import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor(private http: HttpClient,private router: Router) { }
  nameLogin;

  onSubmit(f: any) {
    let info = f.value;
    this.http.post<any>('/api/Authen/Login', { username: info.username, password: info.password }).subscribe(data =>{
       
        // this.confirmPas = data.confirm_password;
        if(data == null)
        {
          alert("Login Error!");
        }else{
           this.nameLogin = data.username;
          alert("Login Success!");
          this.router.navigate(['/stock']);
        }
    })
  }
}
