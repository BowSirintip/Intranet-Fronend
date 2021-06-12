import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-picturecom-activity',
  templateUrl: './picturecom-activity.component.html',
  styleUrls: ['./picturecom-activity.component.css']
})
export class PicturecomActivityComponent implements OnInit {

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  val;
  idImg;
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.idImg = params.get('id');
    });

    this.http.post<any>('/api/Images/GetTopicGallaryHR', {MainID: this.idImg})
    .subscribe(result => {
      this.val = result;
    })
  }
}
