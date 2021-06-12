import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secretary',
  templateUrl: './secretary.component.html',
  styleUrls: ['./secretary.component.css']
})
export class SecretaryComponent implements OnInit {

  constructor(private router: Router) { }

  user;

  ngOnInit(): void {
    this.user = localStorage.getItem("Username");
    if(this.user == null){
      this.router.navigate(['/']);
    }
  }

}
