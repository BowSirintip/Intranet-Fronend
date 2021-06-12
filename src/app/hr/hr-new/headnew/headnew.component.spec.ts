import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadnewComponent } from './headnew.component';

describe('HeadnewComponent', () => {
  let component: HeadnewComponent;
  let fixture: ComponentFixture<HeadnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadnewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
