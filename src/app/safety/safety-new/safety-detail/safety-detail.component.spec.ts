import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyDetailComponent } from './safety-detail.component';

describe('SafetyDetailComponent', () => {
  let component: SafetyDetailComponent;
  let fixture: ComponentFixture<SafetyDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafetyDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
