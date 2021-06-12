import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicturecomFormComponent } from './picturecom-form.component';

describe('PicturecomFormComponent', () => {
  let component: PicturecomFormComponent;
  let fixture: ComponentFixture<PicturecomFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicturecomFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PicturecomFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
