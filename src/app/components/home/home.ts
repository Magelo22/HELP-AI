import { Component, OnInit, ElementRef, ViewChild, HostListener, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('particlesContainer') particlesContainer!: ElementRef;

  currentSection = 'home';
  isMobileMenuOpen = false;
  isFaqModalOpen = false;
  isImageHovered = false;

  faqItems: FaqItem[] = [
    {
      question: 'O que é Inteligência Artificial?',
      answer: 'Inteligência Artificial (IA) é um campo da ciência da computação dedicado à criação de sistemas capazes de realizar tarefas que normalmente exigiriam inteligência humana, como aprendizado, percepção visual, reconhecimento de voz e tomada de decisões.',
      isOpen: false
    },
    {
      question: 'Como a IA pode me ajudar?',
      answer: 'A IA pode automatizar tarefas repetitivas, analisar grandes volumes de dados, personalizar experiências, melhorar a eficiência operacional e auxiliar na resolução de problemas complexos em diversas áreas, desde negócios até saúde e educação.',
      isOpen: false
    },
    {
      question: 'Quais são os tipos de IA?',
      answer: 'Existem três tipos principais de IA: 1) IA estreita (ou fraca), projetada para realizar tarefas específicas; 2) IA geral (ou forte), com capacidades cognitivas humanas; e 3) superinteligência, que excederia a inteligência humana em virtually todos os aspectos.',
      isOpen: false
    },
    {
      question: 'A IA vai substituir empregos?',
      answer: 'A IA provavelmente automatizará algumas tarefas, mas também criará novos empregos e oportunidades. O mais provável é que a IA mude a natureza do trabalho, exigindo que as pessoas desenvolvam novas habilidades para trabalhar junto com essas tecnologias.',
      isOpen: false
    }
  ];

  ngOnInit() {
    // Não criar partículas aqui ainda
  }

  ngAfterViewInit() {
    // Agora o ViewChild está pronto
    this.createParticles();
  }

  createParticles() {
    // Verificar se o elemento existe
    if (!this.particlesContainer?.nativeElement) {
      console.warn('Particles container not found');
      return;
    }

    const particleCount = 30;
    const container = this.particlesContainer.nativeElement;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');

      const size = Math.random() * 6 + 2;
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = Math.random() * 10 + 10;

      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.animationDelay = `${delay}s`;
      particle.style.animationDuration = `${duration}s`;

      container.appendChild(particle);
    }
  }

  // NOVO: Efeito de brilho que segue o mouse
  onMouseMove(event: MouseEvent) {
    const container = event.currentTarget as HTMLElement;
    const rect = container.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    // Atualiza as variáveis CSS
    container.style.setProperty('--mouse-x', `${x}%`);
    container.style.setProperty('--mouse-y', `${y}%`);
  }

  // NOVO: Reset quando o mouse sai
  onMouseLeave() {
    // Reseta para o centro quando o mouse sai
    const containers = document.querySelectorAll('.container');
    containers.forEach(container => {
      (container as HTMLElement).style.setProperty('--mouse-x', '50%');
      (container as HTMLElement).style.setProperty('--mouse-y', '50%');
    });
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    this.updateBodyOverflow();
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    this.updateBodyOverflow();
  }

  navigateTo(section: string) {
    this.currentSection = section;
  }

  openFaqModal() {
    this.isFaqModalOpen = true;
    this.updateBodyOverflow();
  }

  closeFaqModal() {
    this.isFaqModalOpen = false;
    this.updateBodyOverflow();
  }

  toggleFaqAnswer(index: number) {
    // Fechar outras respostas
    this.faqItems.forEach((faq, i) => {
      if (i !== index) {
        faq.isOpen = false;
      }
    });
    
    // Alternar resposta atual
    this.faqItems[index].isOpen = !this.faqItems[index].isOpen;
  }

  onContainerHover(isHovering: boolean) {
    // Lógica adicional se necessário
  }

  onLogoHover(isHovering: boolean) {
    // Lógica adicional se necessário
  }

  onImageHover(isHovering: boolean) {
    this.isImageHovered = isHovering;
  }

  private updateBodyOverflow() {
    const shouldHideOverflow = this.isMobileMenuOpen || this.isFaqModalOpen;
    document.body.style.overflow = shouldHideOverflow ? 'hidden' : 'auto';
  }

  @HostListener('document:keydown.escape')
  handleEscapeKey() {
    if (this.isMobileMenuOpen) {
      this.closeMobileMenu();
    }
    if (this.isFaqModalOpen) {
      this.closeFaqModal();
    }
  }

  @HostListener('document:click', ['$event'])
  handleDocumentClick(event: Event) {
    // Fechar menu mobile ao clicar fora
    if (this.isMobileMenuOpen && 
        !(event.target as Element).closest('.nav-menu') &&
        !(event.target as Element).closest('.menu-toggle')) {
      this.closeMobileMenu();
    }

    // Fechar modal FAQ ao clicar fora
    if (this.isFaqModalOpen && 
        (event.target as Element).classList.contains('modal-overlay')) {
      this.closeFaqModal();
    }
  }
}