import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsItComponent } from './forms-it.component';

describe('FormsItComponent', () => {
  let component: FormsItComponent;
  let fixture: ComponentFixture<FormsItComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsItComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
