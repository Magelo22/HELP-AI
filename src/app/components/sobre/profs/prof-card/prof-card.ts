import { Component, Input } from '@angular/core';
import { IProf } from '../../../../interfaces/profs.interface';

@Component({
  selector: 'app-prof-card',
  templateUrl: './prof-card.html',
  styleUrls: ['./prof-card.css']
})
export class ProfCard {
  @Input() prof!: IProf;
}
