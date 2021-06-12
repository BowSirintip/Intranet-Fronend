import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SeminarTopicComponent } from '../seminar-topic/seminar-topic.component';

@Component({
  selector: 'app-seminar-qa',
  templateUrl: './seminar-qa.component.html',
  styleUrls: ['./seminar-qa.component.css']
})
export class SeminarQaComponent{

  constructor(public dialog: MatDialog) {}

  openDialogqa() {
    this.dialog.open(SeminarTopicComponent,{
    });
  }

}
