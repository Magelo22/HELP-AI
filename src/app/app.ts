import { Component, signal } from '@angular/core';
import {PromptImproverComponent} from './components/prompt-improver.component/prompt-improver.component';
import {AreaCarrosseisLas} from './components/area-carrosseis-las/area-carrosseis-las';
import { Footer } from './components/footer/footer';
import { PromptsExemplosComponent } from './components/prompts-exemplos.component/prompts-exemplos.component';
import { ProfList } from './components/sobre/profs/prof-list/prof-list';
import { EsquerdoDireito } from './components/sobre/esquerdo-direito/esquerdo-direito';
import { Carosel } from './components/sobre/carrosel-item/carosel/carosel';
import { Home } from './components/home/home';
import { SobreN } from './components/sobre-n/sobre-n';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PromptImproverComponent,AreaCarrosseisLas,Footer,PromptsExemplosComponent, ProfList, EsquerdoDireito, Carosel, Home, SobreN],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('help-ai');
}
