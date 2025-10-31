import { Component, signal } from '@angular/core';
import {PromptImproverComponent} from './components/prompt-improver.component/prompt-improver.component';
import {AreaCarrosseisLas} from './components/area-carrosseis-las/area-carrosseis-las';
import { Carrosel } from './components/carrosel/carrosel';
import { Footer } from './components/footer/footer';
import { PromptsExemplosComponent } from './components/prompts-exemplos.component/prompts-exemplos.component';
import { HomeComponent } from "./components/home/home.component";
import { Sobre } from "./components/sobre/sobre";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PromptImproverComponent, AreaCarrosseisLas, Carrosel, Footer, PromptsExemplosComponent, HomeComponent, Sobre],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('help-ai');
}
