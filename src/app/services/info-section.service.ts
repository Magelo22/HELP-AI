import { Injectable } from '@angular/core';
import { IInfoSection } from '../interfaces/info-section.interface';


@Injectable({
  providedIn: 'root'
})
export class InfoSectionService {

  private sections: IInfoSection[] = [
    {
      leftTitle: 'Culminância',
      leftText: 'O projeto vai contar com oficinas (que acontecerão no dia da culminância presencialmente e também serão disponibilizadas no site) sobre 5 IAs diferentes (deepseek, perplexity, Grok, gemini e copilot) e também uma palestra em pessoa sobre inteligências artificiais.',
      rightTitle: '',
      rightImage: 'https://via.placeholder.com/300'
    },
    {
      leftTitle: 'Direita Dinâmica 2',
      leftText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut quidem eos unde illum.',
      rightImage: 'https://via.placeholder.com/250',
      rightTitle: '',
    },
    {
      leftTitle: 'Esquerda Dinâmica 2',
      leftText: 'Outro texto dinâmico para mostrar como podemos reutilizar o componente.',
      rightImage: 'https://via.placeholder.com/300',
      rightTitle: '',
    },
    {
      leftTitle: 'Direita Dinâmica 2',
      leftText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut quidem eos unde illum.',
      rightTitle: '',
      rightImage: 'https://via.placeholder.com/250'
    },
    {
      leftTitle: 'Netflix',
      leftText: 'O sistema de IA analisa o histórico de visualização de cada usuário (filmes assistidos, pausados, avaliados, abandonados). Com base nisso, sugere conteúdos que têm maior chance de agradar. Cada conta recebe uma homepage única, diferente de qualquer outra.',
      rightTitle: '',
      rightImage: 'enetflix.png',
    },
    {
      leftTitle: 'Assistentes virtuais',
      leftText: 'Assistentes virtuais utilizam IA para compreender linguagem humana (voz ou texto), aplicam aprendizado de máquina e redes neurais para gerar respostas naturais e se conectam a serviços e dados para executar tarefas como buscas, organização e controle de dispositivos.',
      rightImage: 'assistencia.png',
      rightTitle: '',
    },
    {
      leftTitle: 'Redes sociais',
      leftText: 'As redes sociais usam IA para personalizar o feed e recomendar conteúdos de acordo com os interesses do usuário. Também aplicam algoritmos de segurança para detectar spam, fake news e discursos de ódio. Além disso, utilizam reconhecimento de imagem e voz para marcar pessoas, gerar legendas e melhorar a acessibilidade.',
      rightImage: 'redes.png',
      rightTitle: '',
    },
    {
      leftTitle: 'Navegação',
      leftText: 'Aplicações de navegação utilizam inteligência artificial para analisar o tráfego em tempo real e sugerir rotas mais rápidas. Com aprendizado de máquina, elas preveem congestionamentos e padrões de trânsito. Além disso, usam geolocalização para calcular trajetos, distâncias e estimativas de tempo de chegada.',
      rightImage: 'navega.png',
      rightTitle: '',
    },

  ];

  constructor() { }

  getSections(): IInfoSection[] {
    return this.sections;
  }

  addSection(section: IInfoSection) {
    this.sections.push(section);
  }
}