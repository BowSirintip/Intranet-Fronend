import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-km-user',
  templateUrl: './km-user.component.html',
  styleUrls: ['./km-user.component.css']
})
export class KmUserComponent implements OnInit {

  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) Sort: MatSort;
  searchKey: string;
  data: MatTableDataSource<any>;
  dep_ID;
  array;

  pdfSource = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  constructor(private http: HttpClient) { }

  
  displayedColumns: string[] = ['title', 'questions','createBy', 'createDate','pdf', 'video'];

  ngOnInit(): void {
    this.http.post<any>('/api/UploadFile/GetShowFileKM',{}).subscribe(result => {
      this.array = result;
      
      this.data = new MatTableDataSource(this.array);
      this.data.sort = this.Sort;
      this.data.paginator = this.paginator;
    })
  }

  reloadCurrentPage() {
    window.location.reload();
  }

  onSearchClear(){
    this.searchKey = "";
    this.reloadCurrentPage();
  }

  applyFilter(){
    this.data.filter = this.searchKey.trim().toLowerCase();
  }
}
