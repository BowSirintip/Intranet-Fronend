import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // constructor(public authservice: AuthService){

  // }
  user;
  pic;
  val;
  
  constructor(){}

  ngOnInit(){
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


