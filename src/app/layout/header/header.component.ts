import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { MemberComponent } from 'src/app/member/member.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  notiFavolite = 0;
  notiMail = 0;
  user;
  pic;
  val;

  @Output() toggle: EventEmitter<void> = new EventEmitter();

  constructor(private authService: AuthService, private router: Router, private http: HttpClient) { }


  ngOnInit(): void {
  }

  name;
  surname;

  ngDoCheck(){
    this.user = localStorage.getItem("Username");
    this.pic = localStorage.getItem("picPath");
    this.name = localStorage.getItem("Name");
    this.surname = localStorage.getItem("Surname");
    
    if(this.user == null){
      this.val = false;
    }else{
      this.val = true;
    }
  }

  onToggle() {
    this.toggle.emit();
  }

  logout() {
    Swal.fire({
      icon: 'error',
      title: 'Are you sure to log out!!',
      showCancelButton: true,
      confirmButtonText: 'OK',
    }).then((result) => {
      if (result.isConfirmed) {
        // this.authService.removeToken();
        localStorage.removeItem("Username");
        localStorage.removeItem("picPath");
        localStorage.clear();
        this.router.navigate(["/"]);
      } 
    })
    
  }

 

}
