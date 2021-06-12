import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KmUserComponent } from './km-user.component';

describe('KmUserComponent', () => {
  let component: KmUserComponent;
  let fixture: ComponentFixture<KmUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KmUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KmUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
