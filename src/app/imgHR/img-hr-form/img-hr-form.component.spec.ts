import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgHRFormComponent } from './img-hr-form.component';

describe('ImgHRFormComponent', () => {
  let component: ImgHRFormComponent;
  let fixture: ComponentFixture<ImgHRFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgHRFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgHRFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
