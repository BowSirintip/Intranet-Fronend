import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CsrDetailComponent } from '../csr-detail/csr-detail.component';

@Component({
  selector: 'app-csr-form',
  templateUrl: './csr-form.component.html',
  styleUrls: ['./csr-form.component.css']
})
export class CsrFormComponent {
  constructor(public dialog: MatDialog, private http: HttpClient) { }
  depID;
  val;
  contentShort;
  headNews;
  newID;

  ngOnInit(): void {
    this.depID = '3';
    this.http.post<any>('/api/News/GetNewsForm', { depID: this.depID }).subscribe(result => {
      this.val = result;
      console.log(result)
    })
  }


  openDialogCSR(id) {
    localStorage.setItem("newCSRID",id);
    this.dialog.open(CsrDetailComponent, {
    });
  }
}
