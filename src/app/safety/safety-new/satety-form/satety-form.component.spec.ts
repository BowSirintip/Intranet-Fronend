import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatetyFormComponent } from './satety-form.component';

describe('SatetyFormComponent', () => {
  let component: SatetyFormComponent;
  let fixture: ComponentFixture<SatetyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SatetyFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SatetyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
