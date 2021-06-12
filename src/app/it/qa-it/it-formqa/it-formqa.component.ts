import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ItTopicqaComponent } from '../it-topicqa/it-topicqa.component';

@Component({
  selector: 'app-it-formqa',
  templateUrl: './it-formqa.component.html',
  styleUrls: ['./it-formqa.component.css']
})
export class ItFormqaComponent{

  constructor(public dialog: MatDialog) {}

  openDialogit() {
    this.dialog.open(ItTopicqaComponent,{
    });
  }

}
