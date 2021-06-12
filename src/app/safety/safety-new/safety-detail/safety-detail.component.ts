import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-safety-detail',
  templateUrl: './safety-detail.component.html',
  styleUrls: ['./safety-detail.component.css']
})
export class SafetyDetailComponent implements OnInit {
  constructor(private http: HttpClient){}
  content;
  headNews;
  idNews;
  
  ngOnInit(){
    this.idNews = localStorage.getItem("newsafeID");
    console.log(this.idNews);
    this.http.post<any>('/api/News/GetNewsDetail',{depID: this.idNews}).subscribe(result  => {
      this.content = result.contentAll;
      this.headNews = result.headNews;
     })
  }

}
