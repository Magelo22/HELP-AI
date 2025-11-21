import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreN } from './sobre-n';

describe('SobreN', () => {
  let component: SobreN;
  let fixture: ComponentFixture<SobreN>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SobreN]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobreN);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
