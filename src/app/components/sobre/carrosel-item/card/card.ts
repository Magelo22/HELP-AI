import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICard } from '../../../../interfaces/card-user.interface';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  @Input() card!: ICard;
  @Input() isActive: boolean = false;

  @Output() hoverStart = new EventEmitter<void>();
  @Output() hoverEnd = new EventEmitter<void>();
}
