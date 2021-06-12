import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Member } from '../models/member.model';
import { AuthService } from '../services/auth.service';
import { NetworkService } from '../services/network.service';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {


  member = new Member;
  isShowLogin = true;
  position = ['Admin', 'Cashier']
  nameLogin;
  picLogin;
  userId;
  nameuser;
  surnameuser;
  depID;
  empID;

  constructor(
    private networkService: NetworkService,
    private authService: AuthService,
    private http: HttpClient,
    private router: Router,
    public dialog: MatDialog
  ) { }


  ngOnInit() {
    if (this.authService.getToken() !== null) {
      this.router.navigate(['/stock']);
    }
  }

  // onClickLogin() {
  //   this.networkService.login(this.member).subscribe(data => {
  //     if (data.token) {
  //       this.authService.setToken(data.token)
  //       this.router.navigate(['/stock']);
  //     } else {
  //       alert('token invalid');
  //     }
  //   }, error => {
  //     console.log(JSON.stringify(error));
  //     if (error.status === 401) {
  //       alert(error.error.message);

  //     } else {
  //       alert(JSON.stringify(error.error.errors));


  //     }
  //   });
  // }

  onClickRegister() {
    this.networkService.register(this.member).subscribe(data => {
      alert(data.message);
      this.onClickShowLogin();
      this.member.password = ''
    }, error => {
      console.log(JSON.stringify(error));
      alert(error.error.message);
    });
  }

  onClickShowLogin() {
    this.isShowLogin = !this.isShowLogin;
  }



  onSubmit(f: any) {
    let info = f.value;
    this.http.post<any>('/api/Authen/Login', { username: info.username, password: info.password }).subscribe(data => {
      if (data == null) {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: 'Username or Password is wrong!'
        })
      } else {
        this.nameLogin = data.username;
        this.picLogin = data.picPath;
        this.userId = data.id;
        this.empID = data.empID;
        this.nameuser = data.name;
        this.surnameuser = data.surname;
        this.depID = data.depID;
        localStorage.setItem("Username", this.nameLogin);
        localStorage.setItem("Name", this.nameuser);
        localStorage.setItem("Surname", this.surnameuser);
        localStorage.setItem("picPath", this.picLogin);
        localStorage.setItem("idUser", this.userId);
        localStorage.setItem("idemy", this.empID);
        localStorage.setItem("depID", this.depID);
        Swal.fire({
          icon: 'success',
          title: 'Login Success',
          confirmButtonText: 'OK',
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
              this.router.navigate(['/stock'])
              .then(() => {
                window.location.reload();
              });
            });
          }
        })

      }
    })
  }

}


