import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LawDetailComponent } from '../law-detail/law-detail.component';

@Component({
  selector: 'app-law-form',
  templateUrl: './law-form.component.html',
  styleUrls: ['./law-form.component.css']
})
export class LawFormComponent{
  constructor(public dialog: MatDialog,private http: HttpClient) {}
  depID;
  val;
  contentShort;
  headNews;
  newID;

  ngOnInit(): void{
    this.depID = '4';
    this.http.post<any>('/api/News/GetNewsForm', {depID: this.depID}).subscribe(result  => {
      this.val = result;
      console.log(result)
    })
  }

  openDialoglaw(id) {
    localStorage.setItem("newlawID",id);
    this.dialog.open(LawDetailComponent,{
    });
  }
}
