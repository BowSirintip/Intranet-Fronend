import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSafetyComponent } from './about-safety.component';

describe('AboutSafetyComponent', () => {
  let component: AboutSafetyComponent;
  let fixture: ComponentFixture<AboutSafetyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutSafetyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutSafetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
