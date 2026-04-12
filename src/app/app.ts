import { Component, signal } from '@angular/core';
import { HeroComponent } from './features/portfolio/components/hero.component';
import { PORTFOLIO_DATA } from './core/data/portfolio.data';
import { ExperienceTimelineComponent } from './features/portfolio/components/experience-timeline.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroComponent, ExperienceTimelineComponent],
  template: `
    <main class="min-h-screen bg-bg-main selection:bg-primary selection:text-white">
      <app-hero [data]="portfolioData()"></app-hero>
      
      <app-experience-timeline [experiences]="portfolioData().experiences"></app-experience-timeline>
    </main>
  `
})
export class App {
  portfolioData = signal(PORTFOLIO_DATA);
}