import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-law',
  templateUrl: './law.component.html',
  styleUrls: ['./law.component.css']
})
export class LawComponent implements OnInit {

  constructor(private router: Router) { }

  user;

  ngOnInit(): void {
    this.user = localStorage.getItem("Username");
    if(this.user == null){
      this.router.navigate(['/']);
    }
  }

}
