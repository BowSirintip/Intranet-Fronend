import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-img-hr-form',
  templateUrl: './img-hr-form.component.html',
  styleUrls: ['./img-hr-form.component.css']
})
export class ImgHRFormComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  myFiles: string[] = [];
  idImg: string[] = [];
  sMsg: string = '';
  public message: string;
  public progress: number;
  imgPath;
  id_img;
  imgPath_sub: Number[] = [];
  val;
  userID;
  urls = [];

  @Output() public onUploadFinished = new EventEmitter();

  ngOnInit(): void {
    this.userID = localStorage.getItem("idemy");
    this.http.post<any>('/api/Images/GetTopicGallary', {})
      .subscribe(result => {
        this.val = result;
      })
  }

  reloadCurrentPage() {
    window.location.reload();
  }

  public uploadFile = (files) => {
    if (files.length === 0)
      return;

    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.http.post<any>('/api/Images', formData, { reportProgress: true, observe: 'events' })
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event.type === HttpEventType.Response) {
          this.imgPath = event.body.dbPath;
          this.message = 'Upload success.';
          this.onUploadFinished.emit(event.body);
          this.id_img = event.body.id_img;
        }
      });
  }

  public uploadFileMul = (files) => {

    var filesAmount = files.length;
    for (let i = 0; i < filesAmount; i++) {
      var reader = new FileReader();

      reader.onload = (event: any) => {
        this.urls.push(event.target.result);
      }
      reader.readAsDataURL(files[i]);
    }

    for (var i = 0; i < files.length; i++) {
      this.myFiles.push(files[i]);
    }
  }


  saveImage(topic, head) {
    let subject = topic.value;
    let header = head.value;

    if (topic != null && head != null) {

      const frmData = new FormData();
      for (var i = 0; i < this.myFiles.length; i++) {
        frmData.append("files", this.myFiles[i]);
      }

      this.http.post<any>('/api/Images/uploadMultiple', frmData, { reportProgress: true, observe: 'events' })
        .subscribe(event => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progress = Math.round(100 * event.loaded / event.total);
          } else if (event.type === HttpEventType.Response) {
            this.message = 'Upload success.';
            this.onUploadFinished.emit(event.body);
            this.idImg = event.body.terms;

            console.log(event.body.image);


            this.http.post<any>('/api/Images/InsertImageSub', { idimg: this.idImg, id: this.id_img, created_by: this.userID })
              .subscribe(result => {
              })
          }
        })

      this.http.post<any>('/api/Images/UpdateImageMain', { id: this.id_img, topicType: subject, topicDetail: header, created_by: this.userID })
        .subscribe(result => {
          if (result == 200) {
            Swal.fire({
              icon: 'success',
              title: 'Save Success',
              confirmButtonText: 'OK',
            }).then((result) => {
              if (result.isConfirmed) {
                this.router.navigate(['/ImgAdmin']);
                this.reloadCurrentPage();
              }
            })
          } else {
            Swal.fire({
              icon: 'error',
              text: 'Save Error!'
            })
          }
        })
    } else {
      Swal.fire({
        icon: 'error',
        text: 'Please fill out all information!!'
      })

    }

  }
}
