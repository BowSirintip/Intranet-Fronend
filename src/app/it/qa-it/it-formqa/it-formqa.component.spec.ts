import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItFormqaComponent } from './it-formqa.component';

describe('ItFormqaComponent', () => {
  let component: ItFormqaComponent;
  let fixture: ComponentFixture<ItFormqaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItFormqaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItFormqaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
