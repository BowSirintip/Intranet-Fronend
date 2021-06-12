import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityFormSecComponent } from './activity-form-sec.component';

describe('ActivityFormSecComponent', () => {
  let component: ActivityFormSecComponent;
  let fixture: ComponentFixture<ActivityFormSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityFormSecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityFormSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
