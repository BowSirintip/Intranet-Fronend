import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LawTopicqaComponent } from '../law-topicqa/law-topicqa.component';


@Component({
  selector: 'app-law-formqa',
  templateUrl: './law-formqa.component.html',
  styleUrls: ['./law-formqa.component.css']
})
export class LawFormqaComponent{

  constructor(public dialog: MatDialog) {}

  openDialoglaw() {
    this.dialog.open(LawTopicqaComponent,{
    });
  }

}
