import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicturecomActivityComponent } from './picturecom-activity.component';

describe('PicturecomActivityComponent', () => {
  let component: PicturecomActivityComponent;
  let fixture: ComponentFixture<PicturecomActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicturecomActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PicturecomActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
