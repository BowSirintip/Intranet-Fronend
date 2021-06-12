import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicturetrainFormComponent } from './picturetrain-form.component';

describe('PicturetrainFormComponent', () => {
  let component: PicturetrainFormComponent;
  let fixture: ComponentFixture<PicturetrainFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicturetrainFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PicturetrainFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
