import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IEducation, ILanguage } from '../../../core/models/portfolio.models';

@Component({
	selector: 'app-education',
	standalone: true,
	imports: [CommonModule],
	template: `
    <section class="py-16 px-4 max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
      
      <div class="flex-1">
        <div class="mb-8 text-center md:text-left">
          <h2 class="text-3xl font-extrabold text-text-main mb-2">Education</h2>
          <div class="h-1 w-20 bg-primary rounded-full mx-auto md:mx-0"></div>
        </div>

        <div class="space-y-6">
          @for (edu of education(); track edu.degree) {
            <div class="p-6 bg-bg-surface border-l-4 border-primary rounded-r-xl shadow-sm hover:shadow-[0_0_15px_var(--color-primary)] transition-fluid">
              <h3 class="text-xl font-bold text-text-main">{{ edu.degree }}</h3>
              <p class="text-accent font-medium mt-1">{{ edu.institution }}</p>
              <span class="text-sm font-mono text-text-muted mt-2 inline-block bg-bg-main px-2 py-1 rounded border border-border">
                {{ edu.period }}
              </span>
            </div>
          }
        </div>
      </div>

      <div class="md:w-1/3">
        <div class="mb-8 text-center md:text-left">
          <h2 class="text-3xl font-extrabold text-text-main mb-2">Languages</h2>
          <div class="h-1 w-20 bg-accent rounded-full mx-auto md:mx-0"></div>
        </div>

        <div class="flex flex-col gap-4">
          @for (lang of languages(); track lang.language) {
            <div class="flex items-center justify-between p-4 bg-bg-surface border border-border rounded-lg group hover:border-accent transition-fluid">
              <span class="font-bold text-text-main group-hover:text-accent transition-colors">{{ lang.language }}</span>
              <span class="text-sm text-text-muted bg-bg-main px-2 py-1 rounded">{{ lang.proficiency }}</span>
            </div>
          }
        </div>
      </div>

    </section>
  `
})
export class EducationComponent {
	education = input.required<IEducation[]>();
	languages = input.required<ILanguage[]>();
}