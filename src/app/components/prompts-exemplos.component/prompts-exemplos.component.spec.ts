import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptsExemplosComponent } from './prompts-exemplos.component';

describe('PromptsExemplosComponent', () => {
  let component: PromptsExemplosComponent;
  let fixture: ComponentFixture<PromptsExemplosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromptsExemplosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromptsExemplosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
