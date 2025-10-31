import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home';  // ← Import do home.ts

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with correct default values', () => {
    expect(component.currentSection).toBe('home');
    expect(component.isMobileMenuOpen).toBe(false);
    expect(component.isFaqModalOpen).toBe(false);
    expect(component.isImageHovered).toBe(false);
    expect(component.faqItems.length).toBe(4);
  });

  it('should toggle mobile menu', () => {
    expect(component.isMobileMenuOpen).toBe(false);
    component.toggleMobileMenu();
    expect(component.isMobileMenuOpen).toBe(true);
    component.toggleMobileMenu();
    expect(component.isMobileMenuOpen).toBe(false);
  });
});