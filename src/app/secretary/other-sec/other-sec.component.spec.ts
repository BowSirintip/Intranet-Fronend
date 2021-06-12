import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherSecComponent } from './other-sec.component';

describe('OtherSecComponent', () => {
  let component: OtherSecComponent;
  let fixture: ComponentFixture<OtherSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherSecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
