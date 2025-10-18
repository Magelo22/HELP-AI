import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AreaCarrosseisLas } from './area-carrosseis-las/area-carrosseis-las';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AreaCarrosseisLas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('help-ai');
}