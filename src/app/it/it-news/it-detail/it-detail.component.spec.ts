import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItDetailComponent } from './it-detail.component';

describe('ItDetailComponent', () => {
  let component: ItDetailComponent;
  let fixture: ComponentFixture<ItDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
