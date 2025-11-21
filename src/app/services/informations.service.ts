import { Injectable } from '@angular/core';
import { IInformations } from '../interfaces/informations.interface';

@Injectable({
  providedIn: 'root'
})
export class InformationsService{
    private infors: IInformations[] = [
    { 
      title:'Sobre nós', 
      description: 'Texto sobre a empresa ou projeto.' 
    },
    { 
      title: 'Nos conheça', 
      description: 'Outro texto para exibir dinamicamente.' 
    }
  ];

  getInfors(): IInformations[] {
    return this.infors;
  }
}