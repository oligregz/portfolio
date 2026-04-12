import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ITechnology } from '../../../core/models/portfolio.models';

@Component({
	selector: 'app-skills',
	standalone: true,
	imports: [CommonModule],
	template: `
    <section class="py-16 px-4 max-w-5xl mx-auto">
      <div class="mb-10 text-center">
        <h2 class="text-3xl font-extrabold text-text-main mb-2">Technical Arsenal</h2>
        <div class="h-1 w-20 bg-primary rounded-full mx-auto"></div>
        <p class="text-text-muted mt-4">Technologies and tools I use to build robust solutions.</p>
      </div>

      <div class="flex flex-wrap justify-center gap-4">
        @for (tech of technologies(); track tech.name) {
          <div class="group relative px-6 py-3 bg-bg-surface border border-border rounded-lg overflow-hidden cursor-default transition-fluid hover:border-primary hover:shadow-[0_0_20px_rgba(157,0,255,0.4)] transform hover:-translate-y-1">
            
            <div class="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-fluid pointer-events-none"></div>
            
            <span class="relative z-10 font-mono text-sm md:text-base text-text-main group-hover:text-white transition-colors">
              {{ tech.name }}
            </span>
          </div>
        }
      </div>
    </section>
  `
})
export class SkillsComponent {
	technologies = input.required<ITechnology[]>();
}