import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailnewComponent } from './detailnew.component';

describe('DetailnewComponent', () => {
  let component: DetailnewComponent;
  let fixture: ComponentFixture<DetailnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailnewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
