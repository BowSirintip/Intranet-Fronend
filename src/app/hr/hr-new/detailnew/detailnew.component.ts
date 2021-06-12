import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-detailnew',
  templateUrl: './detailnew.component.html',
  styleUrls: ['./detailnew.component.css']
})
export class DetailnewComponent{
  constructor(private http: HttpClient){}
  content;
  headNews;
  idNews;
  
  ngOnInit(){
    this.idNews = localStorage.getItem("newID");
    console.log(this.idNews);
    this.http.post<any>('/api/News/GetNewsDetail',{depID: this.idNews}).subscribe(result  => {
      this.content = result.contentAll;
      this.headNews = result.headNews;
     })
  }
}
