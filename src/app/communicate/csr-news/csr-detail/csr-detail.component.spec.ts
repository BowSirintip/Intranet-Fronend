import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsrDetailComponent } from './csr-detail.component';

describe('CsrDetailComponent', () => {
  let component: CsrDetailComponent;
  let fixture: ComponentFixture<CsrDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsrDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsrDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
