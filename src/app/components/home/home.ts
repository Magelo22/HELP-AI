import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home implements OnInit {
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.initializePage();
  }

  initializePage(): void {
    // Loader
    const loader = document.getElementById('loader');
    loader?.classList.add('active');
    setTimeout(() => loader?.classList.remove('active'), 1500);

    // Partículas de fundo
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    if (particlesContainer) {
      for (let i = 0; i < particleCount; i++) {
        const particle = this.renderer.createElement('div');
        this.renderer.addClass(particle, 'particle');
        const size = Math.random() * 5 + 2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 10 + 10;

        this.renderer.setStyle(particle, 'width', `${size}px`);
        this.renderer.setStyle(particle, 'height', `${size}px`);
        this.renderer.setStyle(particle, 'left', `${posX}%`);
        this.renderer.setStyle(particle, 'top', `${posY}%`);
        this.renderer.setStyle(particle, 'animation', `float ${duration}s ease-in-out ${delay}s infinite`);
        this.renderer.appendChild(particlesContainer, particle);
      }
    }

    // Faixa azul que segue o mouse
    const container = document.getElementById('main-container');
    if (container) {
      container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        container.style.setProperty('--mouse-x', `${x}%`);
        container.style.setProperty('--mouse-y', `${y}%`);
      });

      container.addEventListener('mouseleave', () => {
        container.style.setProperty('--mouse-x', '50%');
        container.style.setProperty('--mouse-y', '50%');
      });
    }

    // Menu hamburguer
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    if (menuToggle) {
      menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu?.classList.toggle('active');
        document.body.style.overflow = navMenu?.classList.contains('active') ? 'hidden' : 'auto';
      });
    }

    // Links do menu mobile
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.forEach(item => item.classList.remove('active'));
        link.classList.add('active');
        menuToggle?.classList.remove('active');
        navMenu?.classList.remove('active');
        document.body.style.overflow = 'auto';
      });
    });

    // Links do menu desktop
    const desktopLinks = document.querySelectorAll('.desktop-nav a');
    desktopLinks.forEach(link => {
      link.addEventListener('click', () => {
        desktopLinks.forEach(item => item.classList.remove('active'));
        link.classList.add('active');
      });
    });

    // Modal FAQ
    const faqButton = document.getElementById('faq-btn');
    const modalOverlay = document.getElementById('modal-overlay');
    const closeModal = document.getElementById('close-modal');

    faqButton?.addEventListener('click', () => {
      modalOverlay?.classList.add('active');
      document.body.style.overflow = 'hidden';
    });

    closeModal?.addEventListener('click', () => {
      modalOverlay?.classList.remove('active');
      document.body.style.overflow = 'auto';
    });

    modalOverlay?.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });

    // FAQ interativo
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
      question.addEventListener('click', () => {
        const answer = question.nextElementSibling as HTMLElement;
        answer?.classList.toggle('active');

        const icon = question.querySelector('i');
        if (icon?.classList.contains('fa-chevron-down')) {
          icon.classList.replace('fa-chevron-down', 'fa-chevron-up');
        } else {
          icon?.classList.replace('fa-chevron-up', 'fa-chevron-down');
        }
      });
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', (e) => {
      if (
        navMenu?.classList.contains('active') &&
        !navMenu.contains(e.target as Node) &&
        !menuToggle?.contains(e.target as Node)
      ) {
        menuToggle?.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });

    // Botões de compartilhamento
    const shareButtons = document.querySelectorAll('.social-share a');
    shareButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        loader?.classList.add('active');
        setTimeout(() => {
          loader?.classList.remove('active');
          alert('Conteúdo compartilhado com sucesso!');
        }, 1000);
      });
    });

    // ESC fecha menus e modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (navMenu?.classList.contains('active')) {
          menuToggle?.classList.remove('active');
          navMenu.classList.remove('active');
          document.body.style.overflow = 'auto';
        }
        if (modalOverlay?.classList.contains('active')) {
          modalOverlay.classList.remove('active');
          document.body.style.overflow = 'auto';
        }
      }
    });

    // Foco visual de acessibilidade
    const interactiveElements = document.querySelectorAll('button, a, [tabindex]');
    interactiveElements.forEach(el => {
      el.addEventListener('focus', () => {
        (el as HTMLElement).style.outline = '2px solid #79AE92';
        (el as HTMLElement).style.outlineOffset = '2px';
      });

      el.addEventListener('blur', () => {
        (el as HTMLElement).style.outline = 'none';
      });
    });
  }
}
