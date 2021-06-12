import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingSecComponent } from './training-sec.component';

describe('TrainingSecComponent', () => {
  let component: TrainingSecComponent;
  let fixture: ComponentFixture<TrainingSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingSecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
