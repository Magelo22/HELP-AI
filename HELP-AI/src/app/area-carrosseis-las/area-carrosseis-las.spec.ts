import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaCarrosseisLas } from './area-carrosseis-las';

describe('AreaCarrosseisLas', () => {
  let component: AreaCarrosseisLas;
  let fixture: ComponentFixture<AreaCarrosseisLas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreaCarrosseisLas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaCarrosseisLas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
