import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { Card } from "../card/card";
import { CommonModule } from '@angular/common';
import { ICard } from '../../../../interfaces/card-user.interface';
import { CardsService } from '../../../../services/card-user.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-carosel',
  templateUrl: './carosel.html',
  styleUrls: ['./carosel.css'],
  imports: [Card, CommonModule],
})
export class Carosel implements OnInit, OnDestroy {
  cards: ICard[] = [];
  displayCards: ICard[] = []; // array duplicado para loop
  position = 0;                // translateX em pixels (começa em 0)
  cardWidth = 210;             // largura de cada card (px)
  gap = 16;                    // gap entre cards (px) — sincronizar com CSS
  isHover = false;             // pausa global (container ou card)
  hoverIndex: number | null = null;
  rafId?: number;
  speed = 1.5;                 // pixels por frame (~60fps) — ajuste para velocidade desejada
  private isBrowser: boolean;

  constructor(
    private cardsService: CardsService,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    this.cards = this.cardsService.getCards() || [];
    if (this.cards.length === 0) { return; }

    // duplicar pelo menos 2x; podemos duplicar mais para telas maiores
    // a cópia deve ter comprimento >= 2x para permitir o reset sem quebras
    this.displayCards = [...this.cards, ...this.cards, ...this.cards, ...this.cards];

    // posição inicial 0 (mostra o primeiro item do displayCards)
    // se quiser começar centrando parte do conjunto, ajuste position aqui

    if (this.isBrowser) {
      this.startAutoScroll();
    }
  }

  ngOnDestroy() {
    this.stopAutoScroll();
  }

  // inicio do loop usando requestAnimationFrame para suavidade
  startAutoScroll() {
    if (!this.isBrowser) return;

    const step = () => {
      if (!this.isHover) {
        this.position -= this.speed;

        // largura total do conjunto ORIGINAL (uma única sequência de cards)
        const singleWidth = this.cards.length * (this.cardWidth + this.gap);

        // quando a posição tiver avançado o comprimento da primeira sequência,
        // resetamos (+singleWidth) para voltar ao começo sem salto aparente.
        // usamos Math.abs porque position vai ficando negativo.
        if (Math.abs(this.position) >= singleWidth) {
          // adiciona singleWidth para position, de forma que visualmente continue suave.
          this.position += singleWidth;
        }
      }
      this.rafId = requestAnimationFrame(step);
    };
    this.rafId = requestAnimationFrame(step);
  }

  stopAutoScroll() {
    if (this.rafId && this.isBrowser) {
      cancelAnimationFrame(this.rafId);
      this.rafId = undefined;
    }
  }

  // pausar por hover global (container)
  pauseOnHover(pause: boolean) {
    this.isHover = pause;
  }

  onCardHover(index: number) {
    // calcular índice relativo do card hovered dentro da sequência original caso seja necessário
    this.isHover = true;
    this.hoverIndex = index;
  }

  onCardLeave() {
    this.isHover = false;
    this.hoverIndex = null;
  }

  // estilo por card (blur / scale quando não é o ativo)
  getCardStyle(i: number) {
    const isActive = this.isHover && i === this.hoverIndex;
    const blur = this.isHover && !isActive ? 'blur(3px)' : 'blur(0px)';
    const scale = isActive ? 'scale(1.05)' : 'scale(1)';
    const zIndex = isActive ? 999 : 1;

    return {
      transform: scale,
      filter: blur,
      zIndex: zIndex,
      transition: 'transform 0.25s ease, filter 0.25s ease'
    };
  }
}