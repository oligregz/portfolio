import { Component, signal } from '@angular/core';
import { HeroComponent } from './features/portfolio/components/hero.component';
import { PORTFOLIO_DATA } from './core/data/portfolio.data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroComponent],
  template: `
    <main class="min-h-screen bg-bg-main selection:bg-primary selection:text-white">
      <app-hero [data]="portfolioData()"></app-hero>
    </main>
  `
})
export class App {
  portfolioData = signal(PORTFOLIO_DATA);
}