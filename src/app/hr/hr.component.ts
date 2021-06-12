import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.css']
})
export class HrComponent implements OnInit {

  constructor(private router: Router,) { }

  user;
  pic;
  val;

  ngOnInit(): void {
    this.user = localStorage.getItem("Username");
   
    if(this.user == null){
      this.router.navigate(['/']);
    }
  }

  ngDoCheck(){
    this.user = localStorage.getItem("Username");
    this.pic = localStorage.getItem("picPath");

    if(this.user == null){
      this.val = false;
    }else{
      this.val = true;
    }
  }

}
