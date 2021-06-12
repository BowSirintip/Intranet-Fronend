import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ELearningComponent } from '../e-learning/e-learning.component';

@Component({
  selector: 'app-training-form',
  templateUrl: './training-form.component.html',
  styleUrls: ['./training-form.component.css']
})
export class TrainingFormComponent {

  constructor(public dialog: MatDialog) {}

  openDialogtrain() {
    this.dialog.open(ELearningComponent,{
    });
  }

}
