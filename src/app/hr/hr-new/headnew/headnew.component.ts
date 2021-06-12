import { Component, OnInit, } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailnewComponent } from '../detailnew/detailnew.component';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-headnew',
  templateUrl: './headnew.component.html',
  styleUrls: ['./headnew.component.css']
})
export class HeadnewComponent {
  constructor(public dialog: MatDialog,private http: HttpClient) {}
  depID;
  val;
  contentShort;
  headNews;
  newID;

  ngOnInit(): void{
    this.depID = '1';
    this.http.post<any>('/api/News/GetNewsForm', {depID: this.depID}).subscribe(result  => {
      this.val = result;
      console.log(result)
    })
  }

  openDialog(id) {
    localStorage.setItem("newID",id);
    this.dialog.open(DetailnewComponent,{
    });
  }
}




