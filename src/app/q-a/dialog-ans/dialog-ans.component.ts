import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-ans',
  templateUrl: './dialog-ans.component.html',
  styleUrls: ['./dialog-ans.component.css']
})
export class DialogAnsComponent implements OnInit {

  constructor(private http: HttpClient, public dialog: MatDialog, private router: Router) { }

  userID;
  subject;
  question;
  ans_id;
  value;
  data;

  ngOnInit(): void {

  }


  ngDoCheck() {
    this.subject = localStorage.getItem("Subject");
    this.question = localStorage.getItem("Question");

  }

  reloadCurrentPage() {
    window.location.reload();
  }

  onSubmit(f: any) {
    let value = f.value;
    this.ans_id = localStorage.getItem("IDans");
    this.userID = localStorage.getItem("idUser");

    this.http.post<any>('/api/Questions/UpdateQuestion', { ansid: this.ans_id, answer: value.ans, update_by: this.userID }).subscribe(result => {
      this.data = result;
      console.log(this.data);
      if (result == "200") {
        Swal.fire({
          icon: 'success',
          title: 'Send Success',
          confirmButtonText: 'OK',
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['/FormAns']);
            this.reloadCurrentPage();
            this.dialog.closeAll();
          }
        })
      } else {
        Swal.fire({
          icon: 'error',
          text: 'Send Error!'
        })
      }
    })

  }

}
