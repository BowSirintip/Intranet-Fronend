import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-it-detail',
  templateUrl: './it-detail.component.html',
  styleUrls: ['./it-detail.component.css']
})
export class ItDetailComponent implements OnInit {
  constructor(private http: HttpClient){}
  content;
  headNews;
  idNews;
  
  ngOnInit(){
    this.idNews = localStorage.getItem("newitID");
    console.log(this.idNews);
    this.http.post<any>('/api/News/GetNewsDetail',{depID: this.idNews}).subscribe(result  => {
      this.content = result.contentAll;
      this.headNews = result.headNews;
     })
  }

}
