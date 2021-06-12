import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawFormqaComponent } from './law-formqa.component';

describe('LawFormqaComponent', () => {
  let component: LawFormqaComponent;
  let fixture: ComponentFixture<LawFormqaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LawFormqaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LawFormqaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
