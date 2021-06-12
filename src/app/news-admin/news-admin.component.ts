import { WHITE_ON_BLACK_CSS_CLASS } from '@angular/cdk/a11y/high-contrast-mode/high-contrast-mode-detector';
import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse, HttpEventType } from '@angular/common/http';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import * as EventEmitter from 'events';
import { event } from 'jquery';

@Component({
  selector: 'app-news-admin',
  templateUrl: './news-admin.component.html',
  styleUrls: ['./news-admin.component.css']
})
export class NewsAdminComponent implements OnInit {
  selectedFile: File = null;
  constructor(private http: HttpClient, private router: Router) { }
  public message: string;
  public progress: number;
  myFiles: string[] = [];
  // myVideos: Observable<VideoMaster[]>;

  @Output() public onUploadFinished = new EventEmitter();
  @ViewChild('videoPlayer') videoplayer: ElementRef;

  htmlContent = '';
  userID;
  depID;
  imgPath;

  ngOnInit(): void {
    this.userID = localStorage.getItem("idUser");
    this.depID = localStorage.getItem("depID");
    // this.getvideos();
  }

  public uploadFile = (files) => {
    if (files.length === 0)
      return;

    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
   
    this.http.post<any>('/api/News', formData, { reportProgress: true, observe: 'events' })
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event.type === HttpEventType.Response) {

          this.imgPath = event.body.dbPath;
          this.message = 'Upload success.';
          this.onUploadFinished.emit(event.body);
          console.log(event);

        }
      });
  }

  reloadCurrentPage() {
    window.location.reload();
  }

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'yes',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
    ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };


  InsertNews(head, shortnew) {
    let header = head.value;
    let content = shortnew.value;
    console.log(this.imgPath);

    this.http.post<any>('/api/News/InsertNews', { headNew: header, contentShort: content, contentAll: this.htmlContent, imgPath: this.imgPath, create_by: this.userID, depID: this.depID }).subscribe(result => {
      if (result == "200") {
        Swal.fire({
          icon: 'success',
          title: 'Save Success',
          confirmButtonText: 'OK',
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['/Formsqa']);
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
  }
}
