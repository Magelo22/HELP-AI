import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsquerdoDireito } from './esquerdo-direito';

describe('EsquerdoDireito', () => {
  let component: EsquerdoDireito;
  let fixture: ComponentFixture<EsquerdoDireito>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EsquerdoDireito]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsquerdoDireito);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
