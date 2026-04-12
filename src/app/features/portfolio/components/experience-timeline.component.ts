import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IExperience } from '../../../core/models/portfolio.models';

@Component({
	selector: 'app-experience-timeline',
	standalone: true,
	imports: [CommonModule],
	template: `
    <section class="py-16 px-4 max-w-4xl mx-auto">
      <div class="mb-12 text-center md:text-left">
        <h2 class="text-3xl font-extrabold text-text-main mb-2">Professional Experience</h2>
        <div class="h-1 w-20 bg-primary rounded-full mx-auto md:mx-0"></div>
      </div>

      <div class="relative border-l-2 border-border ml-3 md:ml-6 space-y-12">
        @for (exp of experiences(); track exp.id) {
          <div class="relative pl-8 md:pl-12 group">
            
            <div class="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-bg-main border-2 border-primary group-hover:bg-primary group-hover:shadow-[0_0_15px_var(--color-primary)] transition-fluid"></div>

            <div class="flex flex-col md:flex-row md:items-baseline justify-between mb-1">
              <h3 class="text-xl font-bold text-text-main group-hover:text-primary transition-colors">
                {{ exp.role }} 
                <span class="text-accent font-medium">@ {{ exp.company }}</span>
              </h3>
              <span class="text-sm font-mono text-text-muted mt-1 md:mt-0 bg-bg-surface px-2 py-1 rounded-md border border-border">
                {{ exp.period }}
              </span>
            </div>

            <span class="text-xs text-text-muted uppercase tracking-wider block mb-4">
              {{ exp.location }}
            </span>

            <ul class="space-y-3 mb-4">
              @for (desc of exp.description; track desc) {
                <li class="text-text-muted text-sm leading-relaxed flex items-start gap-2">
                  <span class="text-primary mt-1 text-xs">▹</span>
                  <span>{{ desc }}</span>
                </li>
              }
            </ul>

            @if (exp.technologies.length > 0) {
              <div class="flex flex-wrap gap-2 mt-4">
                @for (tech of exp.technologies; track tech.name) {
                  <span class="text-xs px-2 py-1 rounded-md bg-bg-surface border border-border text-text-muted group-hover:border-primary/50 transition-colors">
                    {{ tech.name }}
                  </span>
                }
              </div>
            }
          </div>
        }
      </div>
    </section>
  `
})
export class ExperienceTimelineComponent {
	experiences = input.required<IExperience[]>();
} 