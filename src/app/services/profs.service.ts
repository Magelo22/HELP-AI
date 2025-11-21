import { Injectable} from '@angular/core';
import { IProf } from '../interfaces/profs.interface';


@Injectable({
  providedIn: 'root'
})
export class ProfsService{
  private profs: IProf[] = [
    {
      id: 1,
      nome: 'Prof. Maria ',
      foto: './assets/Imagem do WhatsApp de 2025-09-22 à(s) 21.53.16_86e37323.jpg',
      descricao: 'professora ',
      anexo: '',
    },
    {
      id: 2,
      nome: 'Prof. Aureliano',
      foto: './assets/Imagem do WhatsApp de 2025-09-22 à(s) 21.53.15_2aec7b84.jpg',
      descricao: 'Professor.',
      anexo: ''
    }
  ];

  getProfs(): IProf[] {
    return this.profs;
  }
}