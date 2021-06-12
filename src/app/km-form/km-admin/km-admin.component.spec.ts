import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KmAdminComponent } from './km-admin.component';

describe('KmAdminComponent', () => {
  let component: KmAdminComponent;
  let fixture: ComponentFixture<KmAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KmAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KmAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
