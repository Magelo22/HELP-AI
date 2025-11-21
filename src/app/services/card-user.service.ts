import { Injectable } from '@angular/core';
import { ICard } from '../interfaces/card-user.interface';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  private cards: ICard[] = [
    { src: '', title: 'Ana Letícia', description: 'Descrição do Card 1' },
    { src: '', title: 'André Carneiro', description: 'Descrição do Card 2' },
    { src: '', title: 'Andreia Darle', description: 'Descrição do Card 3' },
    { src: '', title: 'Antonio Evarnardo', description: 'Descrição do Card 4' },
    { src: '', title: 'Beatriz de Sousa', description: 'Descrição do Card 5' },
    { src: '', title: 'Caio Antony', description: 'Descrição do Card 6' },
    { src: '', title: 'Carla Letícia', description: 'Descrição do Card 7' },
    { src: '', title: 'Carlos Augusto', description: 'Descrição do Card 8' },
    { src: '', title: 'Davi de Sousa', description: 'Descrição do Card 8' },
    { src: '', title: 'Elen Andrade', description: 'Descrição do Card 8' },
    { src: '', title: 'Francisco Levi', description: 'Descrição do Card 8' },
    { src: '', title: 'Francisco Magelo', description: 'Descrição do Card 8' },
    { src: '', title: 'Ismael Felix', description: 'Descrição do Card 8' },
    { src: '', title: 'Iury da Costa', description: 'Descrição do Card 8' },
    { src: '', title: 'João Bosco', description: 'Descrição do Card 8' },
    { src: '', title: 'João Guilherme', description: 'Descrição do Card 8' },
    { src: '', title: 'João Lucas', description: 'Descrição do Card 8' },
    { src: '', title: 'João Pedro', description: 'Descrição do Card 8' },
    { src: '', title: 'Josias de Oliveira', description: 'Descrição do Card 8' },
    { src: '', title: 'Júlia Evelym', description: 'Descrição do Card 8' },
    { src: '', title: 'Júlio Lorenço', description: 'Descrição do Card 8' },
    { src: '', title: 'Larissa Andrade', description: 'Descrição do Card 8' },
    { src: '', title: 'Marcos Anderson', description: 'Descrição do Card 8' },
    { src: '', title: 'Maria Evellyn', description: 'Descrição do Card 8' },
    { src: '', title: 'Mariana Cordeiro', description: 'Descrição do Card 8' },
    { src: '', title: 'Melquisedec Ferreira', description: 'Descrição do Card 8' },
    { src: '', title: 'Naidioneldo Aguiar', description: 'Descrição do Card 8' },
    { src: '', title: 'Nailane Bezerra', description: 'Descrição do Card 8' },
    { src: '', title: 'Nicolas Dayvison', description: 'Descrição do Card 8' },
    { src: '', title: 'Paulo Nadson', description: 'Descrição do Card 8' },
    { src: '', title: 'Roberta da Silva', description: 'Descrição do Card 8' },
    { src: '', title: 'Sofia Ângelo', description: 'Descrição do Card 8' },
    { src: '', title: 'Taylani Ribeiro', description: 'Descrição do Card 8' },
    { src: '', title: 'Thais Gonçalves', description: 'Descrição do Card 8' },
  ];

  getCards() {
    return this.cards;
  }
}
