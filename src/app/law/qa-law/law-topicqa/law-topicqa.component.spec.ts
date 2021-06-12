import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawTopicqaComponent } from './law-topicqa.component';

describe('LawTopicqaComponent', () => {
  let component: LawTopicqaComponent;
  let fixture: ComponentFixture<LawTopicqaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LawTopicqaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LawTopicqaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
