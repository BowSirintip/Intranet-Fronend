import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormnewComponent } from './formnew.component';

describe('FormnewComponent', () => {
  let component: FormnewComponent;
  let fixture: ComponentFixture<FormnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormnewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
