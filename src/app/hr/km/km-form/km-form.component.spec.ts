import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KmFormComponent } from './km-form.component';

describe('KmFormComponent', () => {
  let component: KmFormComponent;
  let fixture: ComponentFixture<KmFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KmFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KmFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
