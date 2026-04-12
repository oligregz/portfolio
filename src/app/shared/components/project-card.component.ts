import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProject } from '../../core/models/portfolio.models';
import { ButtonComponent } from './button.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  template: `
    <article 
      class="flex flex-col h-full p-6 bg-bg-surface border border-border rounded-xl transition-fluid hover-neon"
      [class.shadow-[0_0_15px_var(--color-primary)]]="project().isHighlight">
      
      <div class="flex justify-between items-start mb-4">
        <h3 class="text-xl font-bold text-text-main">{{ project().title }}</h3>
        @if (project().isHighlight) {
          <span class="text-xs font-semibold px-2 py-1 bg-primary/20 text-primary border border-primary rounded-full">Star</span>
        }
      </div>
      
      <p class="text-text-muted text-sm flex-grow mb-4">{{ project().description }}</p>
      
      <div class="flex flex-wrap gap-2 mb-6">
        @for (tech of project().technologies; track tech.name) {
          <span class="text-xs text-accent bg-accent/10 px-2 py-1 rounded-md">{{ tech.name }}</span>
        }
      </div>

      <div class="flex flex-col sm:flex-row gap-3 mt-auto">
        <app-button variant="outline" class="flex-1" (onClick)="openLink(project().repositoryUrl)">Repository</app-button>
        @if (project().liveUrl) {
          <app-button variant="primary" class="flex-1" (onClick)="openLink(project().liveUrl!)">See Live</app-button>
        }
      </div>
    </article>
  `
})
export class ProjectCardComponent {
  project = input.required<IProject>();

  openLink(url: string): void {
    window.open(url.startsWith('http') ? url : `https://${url}`, '_blank');
  }
}