import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IInfoSection } from '../../../interfaces/info-section.interface';
import { InfoSectionService } from '../../../services/info-section.service';

@Component({
  selector: 'app-esquerdo-direito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './esquerdo-direito.html',
  styleUrls: ['./esquerdo-direito.css']
})
export class EsquerdoDireito implements OnInit {
 @Input() sectionIndex = 0;
  sectionData!: IInfoSection;
  isImageLeft = false;

  constructor(private infoService: InfoSectionService) {}

  ngOnInit() {
    const sections = this.infoService.getSections();
    if (sections[this.sectionIndex]) {
      this.sectionData = sections[this.sectionIndex];
      this.isImageLeft = this.sectionIndex % 2 == 0; // alterna lado da imagem
    } else {
      console.warn('Seção não encontrada no service!');
    }
  }
}
