import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import Swal from 'sweetalert2';
import * as EventEmitter from 'events';
import { Router } from '@angular/router';
import { EmptyExpr } from '@angular/compiler';

@Component({
  selector: 'app-km-admin',
  templateUrl: './km-admin.component.html',
  styleUrls: ['./km-admin.component.css']
})
export class KmAdminComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  public progress: number;
  public message: string;

  myFiles: string[] = [];
  imgPath;
  imgPath2;
  filename;
  filename2;
  userID;

  show = false;
  showPdf = false;
  checkPdf = false;
  checkVideo = false;
  urls = [];

  @Output() public onUploadFinished = new EventEmitter();

  ngOnInit(): void {
    this.userID = localStorage.getItem("idemy");
  }

  reloadCurrentPage() {
    window.location.reload();
  }

  public uploadFile = (files) => {
    this.showPdf = true;
    if (files.length === 0)
      return;

    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.http.post<any>('/api/UploadFile', formData, { reportProgress: true, observe: 'events' })
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event.type === HttpEventType.Response) {
          if (event.body.errorMessage != null) {
            this.showPdf = false;
            Swal.fire({
              icon: 'error',
              text: 'Only Upload PDF File!'
            })
          } else {
            this.showPdf = false;
            this.imgPath = event.body.dbPath;
            this.message = '200';
            this.onUploadFinished.emit(event.body);
            this.filename = event.body.fileName;
          }
        }
      });
  }

  public uploadFileVideo = (files) => {
    this.show = true;
    this.checkVideo = true;

    if (files.length === 0)
      return;

    let fileToUpload = <File>files[0];
    const frmData = new FormData();
    frmData.append('file', fileToUpload, fileToUpload.name);

    this.http.post<any>('/api/UploadFile/UploadVideo', frmData, { reportProgress: true, observe: 'events' })
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event.type === HttpEventType.Response) {
          if (event.body.errorMessage == "500") {
            this.show = false;
            Swal.fire({
              icon: 'error',
              text: 'Only Upload VIDEO File!'
            })
          } else if (event.body.errorMessage == "413") {
            this.show = false;
            Swal.fire({
              icon: 'error',
              text: 'File size Over limit 50MB!!'
            })
          } else {
            this.imgPath2 = event.body.dbPath;
            this.message = '200';
            this.show = false;
            this.onUploadFinished.emit(event.body);
            this.filename2 = event.body.fileName;
          }
        }
      });
  }

  saveKMFile(topic, detail) {
    
    if(topic.value == ''){
      Swal.fire({
        icon: 'warning',
        text: 'กรุณากรอกหัวข้อเรื่อง!'
      })
    }else if(detail.value == ''){
      Swal.fire({
        icon: 'warning',
        text: 'กรุณากรอกรายละเอียด!'
      })
    }else if(this.message != "200"){
      Swal.fire({
        icon: 'warning',
        text: 'กรุณาเลือกไฟล์แนบ!'
      })
    }else{
      this.http.post<any>('/api/UploadFile/InsertFileUpload', { subject: topic.value, detail: detail.value, pdfPath: this.imgPath, videoPath: this.imgPath2, create_by: this.userID })
      .subscribe(result => {
        if (result == "200") {
          Swal.fire({
            icon: 'success',
            title: 'Save Success',
            confirmButtonText: 'OK',
          }).then((result) => {
            if (result.isConfirmed) {
              this.router.navigate(['/KmAdmin']);
              this.reloadCurrentPage();
            }
          })
        } else {
          Swal.fire({
            icon: 'error',
            text: 'Save Error!'
          })
        }
        console.log(result);
      })
    }
  }

}
