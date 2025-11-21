import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ProfCard } from '../prof-card/prof-card';
import { IProf } from '../../../../interfaces/profs.interface';
import { ProfsService } from '../../../../services/profs.service';

@Component({
  selector: 'app-prof-list',
  imports: [NgFor, ProfCard],
  templateUrl: './prof-list.html',
  styleUrl: './prof-list.css'
})
export class ProfList {
  profs: IProf[] = [];

  constructor(private profService: ProfsService) {
    this.profs = this.profService.getProfs();
  }
}
