import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detailnew-sec',
  templateUrl: './detailnew-sec.component.html',
  styleUrls: ['./detailnew-sec.component.css']
})
export class DetailnewSecComponent implements OnInit {

  constructor(private http: HttpClient){}
  content;
  headNews;
  idNews;
  
  ngOnInit(){
    this.idNews = localStorage.getItem("newCGID");
    console.log(this.idNews);
    this.http.post<any>('/api/News/GetNewsDetail',{depID: this.idNews}).subscribe(result  => {
      this.content = result.contentAll;
      this.headNews = result.headNews;
     })
  }

}
