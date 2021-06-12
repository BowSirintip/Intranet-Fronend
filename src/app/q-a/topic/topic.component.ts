import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  constructor(private http: HttpClient, public dialog: MatDialog, private router: Router) { }
  userID;
  datas;
  responseValue;
  value;

  ngOnInit(): void {
    this.userID = localStorage.getItem("idUser");

    this.http.post<any>('/api/Questions/GetDepartment',{})
    .subscribe(result  => {
      this.value = result;
      console.log(this.value);
      
    })
  }

  reloadCurrentPage() {
    window.location.reload();
  }

  onSubmit(f: any)  {
    let datas =  f.value;
    this.userID = localStorage.getItem("idemy");
    console.log(datas.faction);
    this.http.post<any>('/api/Questions/InsertQuestion', {topic: datas.topic ,question: datas.detail,create_by: this.userID,depid: datas.faction}).subscribe(result  => {
      console.log(result);
      if(result == "200"){
        Swal.fire({
          icon: 'success',
          title: 'Send Success',
          confirmButtonText: 'OK',
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['/Formsqa']);
            this.reloadCurrentPage();
            this.dialog.closeAll();
          } 
        })
      }else{
        Swal.fire({
          icon: 'error',
          text: 'Send Error!'
        })
      }
    })
  }
}
