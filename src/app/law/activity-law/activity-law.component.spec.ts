import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityLawComponent } from './activity-law.component';

describe('ActivityLawComponent', () => {
  let component: ActivityLawComponent;
  let fixture: ComponentFixture<ActivityLawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityLawComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityLawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
