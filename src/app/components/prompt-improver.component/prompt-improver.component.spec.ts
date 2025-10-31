import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptImproverComponent } from './prompt-improver.component';

describe('PromptImproverComponent', () => {
  let component: PromptImproverComponent;
  let fixture: ComponentFixture<PromptImproverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromptImproverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromptImproverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
