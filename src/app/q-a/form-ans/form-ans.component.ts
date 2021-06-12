import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogAnsComponent } from '../dialog-ans/dialog-ans.component';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { MatSort, Sort } from '@angular/material/sort';


@Component({
  selector: 'app-form-ans',
  templateUrl: './form-ans.component.html',
  styleUrls: ['./form-ans.component.css']
})

export class FormAnsComponent implements OnInit {

  constructor(private http: HttpClient, public dialog: MatDialog) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) Sort: MatSort;

  data: MatTableDataSource<any>;
  ans_id;
  subject;
  question;
  array;
  value;
  dep_ID;

  ngOnInit(): void {
    this.dep_ID = localStorage.getItem("depID");
    console.log(this.dep_ID);
    
    this.http.post<any>('/api/Questions/GetQuestionForDepart',{depid: this.dep_ID}).subscribe(result => {
      this.array = result;
      console.log( this.array);
      
      this.data = new MatTableDataSource(this.array);
      this.data.sort = this.Sort;
      this.data.paginator = this.paginator;
    })
  }
  

  


  displayedColumns: string[] = ['no', 'title', 'questions','createBy', 'createDate', 'weight'];

  openDialog(id) {
    this.dialog.open(DialogAnsComponent, {});
    this.http.post<any>('/api/Questions/GetQuestion', { ansid: id }).subscribe(result => {
      this.value = result;
      this.subject = result.subject;
      this.question = result.questions1;
      this.ans_id = result.id;
      localStorage.setItem("Subject", this.subject);
      localStorage.setItem("Question", this.question);
      localStorage.setItem("IDans", this.ans_id);
    })
  }

 


  sortData(sort: Sort) {
    const data = this.data.data.slice()
    if (!sort.active || sort.direction === '') {
      this.data.data = data
      return
    }

    this.data.data = data.sort((a: any, b: any) => {
      const isAsc = sort.direction === 'asc'
      switch (sort.active) {
        case 'id': return compare(a.id, b.id, isAsc)
        default: return 0
      }
    })
  }



  
}

function compare(a: number | string, b: number | string, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}