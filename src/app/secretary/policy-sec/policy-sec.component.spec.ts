import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicySecComponent } from './policy-sec.component';

describe('PolicySecComponent', () => {
  let component: PolicySecComponent;
  let fixture: ComponentFixture<PolicySecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicySecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicySecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
