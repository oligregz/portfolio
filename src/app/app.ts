import { Component, signal } from '@angular/core';
import { HeroComponent } from './features/portfolio/components/hero.component';
import { PORTFOLIO_DATA } from './core/data/portfolio.data';
import { ExperienceTimelineComponent } from './features/portfolio/components/experience-timeline.component';
import { SkillsComponent } from './features/portfolio/components/skills.component';
import { ProjectsGridComponent } from './features/portfolio/components/projects-grid.component';
import { EducationComponent } from './features/portfolio/components/education.component';
import { FooterComponent } from './features/portfolio/components/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeroComponent,
    SkillsComponent,
    ExperienceTimelineComponent,
    ProjectsGridComponent,
    EducationComponent,
    FooterComponent
  ],
  template: `
    <main class="min-h-screen bg-bg-main selection:bg-primary selection:text-white">
      
      <app-hero [data]="portfolioData()"></app-hero>
      
      <app-skills [technologies]="portfolioData().technologies"></app-skills>
      
      <app-experience-timeline [experiences]="portfolioData().experiences"></app-experience-timeline>
      
      <app-projects-grid [projects]="portfolioData().projects"></app-projects-grid>
      
      <app-education 
        [education]="portfolioData().education" 
        [languages]="portfolioData().languages">
      </app-education>

      <app-footer 
        [name]="portfolioData().name"
        [email]="portfolioData().email"
        [github]="portfolioData().github"
        [linkedin]="portfolioData().linkedin">
      </app-footer>

    </main>
  `
})
export class App {
  portfolioData = signal(PORTFOLIO_DATA);
}