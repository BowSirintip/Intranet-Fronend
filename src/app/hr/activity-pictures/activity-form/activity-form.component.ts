import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-activity-form',
  templateUrl: './activity-form.component.html',
  styleUrls: ['./activity-form.component.css']
})
export class ActivityFormComponent implements OnInit {

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
