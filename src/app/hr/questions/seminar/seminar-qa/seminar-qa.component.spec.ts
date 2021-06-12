import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeminarQaComponent } from './seminar-qa.component';

describe('SeminarQaComponent', () => {
  let component: SeminarQaComponent;
  let fixture: ComponentFixture<SeminarQaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeminarQaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeminarQaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
