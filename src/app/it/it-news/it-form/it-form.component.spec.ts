import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItFormComponent } from './it-form.component';

describe('ItFormComponent', () => {
  let component: ItFormComponent;
  let fixture: ComponentFixture<ItFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
