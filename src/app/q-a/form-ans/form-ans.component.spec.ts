import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAnsComponent } from './form-ans.component';

describe('FormAnsComponent', () => {
  let component: FormAnsComponent;
  let fixture: ComponentFixture<FormAnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
