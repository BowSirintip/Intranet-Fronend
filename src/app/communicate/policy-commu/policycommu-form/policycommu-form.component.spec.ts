import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicycommuFormComponent } from './policycommu-form.component';

describe('PolicycommuFormComponent', () => {
  let component: PolicycommuFormComponent;
  let fixture: ComponentFixture<PolicycommuFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicycommuFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicycommuFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
