import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAnsComponent } from './dialog-ans.component';

describe('DialogAnsComponent', () => {
  let component: DialogAnsComponent;
  let fixture: ComponentFixture<DialogAnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAnsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
