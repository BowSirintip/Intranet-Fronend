import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TopicComponent } from '../topic/topic.component';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-formsqa',
  templateUrl: './formsqa.component.html',
  styleUrls: ['./formsqa.component.css']
})
export class FormsqaComponent implements OnInit {

  constructor(private http: HttpClient, public dialog: MatDialog, private router: Router) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  data;
  val;
  base;
  len;
  len2;
  len3;
  user;
  Userid;
  showLess = false;
  showMore = false;

  ngOnInit(): void {
    this.user = localStorage.getItem("Username");
    this.Userid = localStorage.getItem("idUser");

    if(this.user == null){
      this.router.navigate(['/']);
    }

    this.http.post<any>('/api/Questions/GetSuccessQuestion',{create_by:  this.Userid }).subscribe(result=>{
      this.data = result;
      let check = this.data;
      this.len2 = check.length;
    })
    
    this.http.post<any>('/api/Questions/GetPendingQuestion',{create_by:  this.Userid }).subscribe(result=>{
      this.val = result;
      let check = this.val;
      this.len = check.length;
    })

    this.http.post<any>('/api/Questions/GetMyQuestion',{create_by:  this.Userid }).subscribe(result=>{
      this.base = result;
      let check = this.val;
      this.len3 = check.length;
    })
  }
  
  openDialogit() {
    this.dialog.open(TopicComponent,{
    });
  }

}
