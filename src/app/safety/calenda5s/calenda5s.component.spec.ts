import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Calenda5sComponent } from './calenda5s.component';

describe('Calenda5sComponent', () => {
  let component: Calenda5sComponent;
  let fixture: ComponentFixture<Calenda5sComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Calenda5sComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Calenda5sComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
