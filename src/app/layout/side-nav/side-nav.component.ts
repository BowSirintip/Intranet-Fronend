import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  user;
  pic;
  val;
  
  menuDashBoard: DashBoard[]=[
    {
      name : "Summary",
      path : "/summary",
      icon : "https://image.flaticon.com/icons/svg/386/386895.svg",
    },
    {
      name: 'Customer',
      icon: 'https://image.flaticon.com/icons/svg/505/505430.svg',
      path: '/customer'
    }

  ]
  constructor() { }

  ngOnInit(): void {
  }
  
}

interface DashBoard{
  name : string;
  path : string;
  icon : string;
}
