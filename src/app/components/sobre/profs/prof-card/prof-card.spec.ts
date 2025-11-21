import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfCard } from './prof-card';

describe('ProfCard', () => {
  let component: ProfCard;
  let fixture: ComponentFixture<ProfCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
