import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-communicate',
  templateUrl: './communicate.component.html',
  styleUrls: ['./communicate.component.css']
})
export class CommunicateComponent implements OnInit {

  constructor(private router: Router) { }

  user;

  ngOnInit(): void {
    this.user = localStorage.getItem("Username");
    if(this.user == null){
      this.router.navigate(['/']);
    }
  }

}
