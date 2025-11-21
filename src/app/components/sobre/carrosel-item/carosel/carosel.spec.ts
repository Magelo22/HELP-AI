import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Carosel } from './carosel';


describe('Carosel', () => {
  let component: Carosel;
  let fixture: ComponentFixture<Carosel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Carosel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Carosel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
