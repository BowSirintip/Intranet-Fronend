import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailnewSecComponent } from '../detailnew-sec/detailnew-sec.component';

@Component({
  selector: 'app-formnew',
  templateUrl: './formnew.component.html',
  styleUrls: ['./formnew.component.css']
})
export class FormnewComponent{
  constructor(public dialog: MatDialog,private http: HttpClient) {}
  depID;
  val;

  ngOnInit(){
    this.depID = '2';
    this.http.post<any>('/api/News/GetNewsForm', {depID: this.depID}).subscribe(result  => {
      this.val = result;
    })
  }

  openDialogSec(id) {
    localStorage.setItem("newCGID",id);
    this.dialog.open(DetailnewSecComponent,{
    });
  }
}
