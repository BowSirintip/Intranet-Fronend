import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-csr-detail',
  templateUrl: './csr-detail.component.html',
  styleUrls: ['./csr-detail.component.css']
})
export class CsrDetailComponent implements OnInit {

  constructor(private http: HttpClient){}
  content;
  headNews;
  idNews;
  
  ngOnInit(){
    this.idNews = localStorage.getItem("newCSRID");
    console.log(this.idNews);
    this.http.post<any>('/api/News/GetNewsDetail',{depID: this.idNews}).subscribe(result  => {
      this.content = result.contentAll;
      this.headNews = result.headNews;
     })
  }

}
