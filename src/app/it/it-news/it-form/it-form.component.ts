import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ItDetailComponent } from '../it-detail/it-detail.component';

@Component({
  selector: 'app-it-form',
  templateUrl: './it-form.component.html',
  styleUrls: ['./it-form.component.css']
})
export class ItFormComponent{
  constructor(public dialog: MatDialog,private http: HttpClient) {}
  depID;
  val;
  contentShort;
  headNews;
  newID;

  ngOnInit(): void{
    this.depID = '6';
    this.http.post<any>('/api/News/GetNewsForm', {depID: this.depID}).subscribe(result  => {
      this.val = result;
      console.log(result)
    })
  }

  openDialogit(id) {
    localStorage.setItem("newitID",id);
    this.dialog.open(ItDetailComponent,{
    });
  }

}
