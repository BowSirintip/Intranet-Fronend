import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailnewSecComponent } from './detailnew-sec.component';

describe('DetailnewSecComponent', () => {
  let component: DetailnewSecComponent;
  let fixture: ComponentFixture<DetailnewSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailnewSecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailnewSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
