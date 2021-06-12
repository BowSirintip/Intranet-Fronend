import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-law-detail',
  templateUrl: './law-detail.component.html',
  styleUrls: ['./law-detail.component.css']
})
export class LawDetailComponent implements OnInit {

  constructor(private http: HttpClient){}
  content;
  headNews;
  idNews;
  
  ngOnInit(){
    this.idNews = localStorage.getItem("newlawID");
    this.http.post<any>('/api/News/GetNewsDetail',{depID: this.idNews}).subscribe(result  => {
      this.content = result.contentAll;
      this.headNews = result.headNews;
     })
  }

}
