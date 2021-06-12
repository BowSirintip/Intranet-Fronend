import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsqaComponent } from './formsqa.component';

describe('FormsqaComponent', () => {
  let component: FormsqaComponent;
  let fixture: ComponentFixture<FormsqaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsqaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsqaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
