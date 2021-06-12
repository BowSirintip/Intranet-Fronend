import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubActivityComponent } from './club-activity.component';

describe('ClubActivityComponent', () => {
  let component: ClubActivityComponent;
  let fixture: ComponentFixture<ClubActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
