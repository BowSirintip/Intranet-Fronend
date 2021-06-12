import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SafetyDetailComponent } from '../safety-detail/safety-detail.component';

@Component({
  selector: 'app-satety-form',
  templateUrl: './satety-form.component.html',
  styleUrls: ['./satety-form.component.css']
})
export class SatetyFormComponent{
  constructor(public dialog: MatDialog,private http: HttpClient) {}

  depID;
  val;
  contentShort;
  headNews;
  newID;

  ngOnInit(): void{
    this.depID = '5';
    this.http.post<any>('/api/News/GetNewsForm', {depID: this.depID}).subscribe(result  => {
      this.val = result;
      console.log(result)
    })
  }

  openDialogSafe(id) {
    localStorage.setItem("newsafeID",id);
    this.dialog.open(SafetyDetailComponent,{
    });
  }
}
