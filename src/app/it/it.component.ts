import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-it',
  templateUrl: './it.component.html',
  styleUrls: ['./it.component.css']
})
export class ITComponent implements OnInit {

  constructor( private router: Router) { }
  
  user;

  ngOnInit(): void {
    this.user = localStorage.getItem("Username");
    if(this.user == null){
      this.router.navigate(['/']);
    }
  }
  
}
