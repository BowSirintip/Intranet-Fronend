import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSafetyComponent } from './project-safety.component';

describe('ProjectSafetyComponent', () => {
  let component: ProjectSafetyComponent;
  let fixture: ComponentFixture<ProjectSafetyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectSafetyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectSafetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
