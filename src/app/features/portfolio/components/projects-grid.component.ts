import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProject } from '../../../core/models/portfolio.models';
import { ProjectCardComponent } from '../../../shared/components/project-card.component';
import { SkeletonComponent } from '../../../shared/components/skeleton.component';

@Component({
	selector: 'app-projects-grid',
	standalone: true,
	imports: [CommonModule, ProjectCardComponent, SkeletonComponent],
	template: `
    <section class="py-16 px-4 max-w-7xl mx-auto">
      <div class="mb-10 text-center md:text-left">
        <h2 class="text-3xl font-extrabold text-text-main mb-2">Featured Projects</h2>
        <div class="h-1 w-20 bg-primary rounded-full mx-auto md:mx-0"></div>
        <p class="text-text-muted mt-4">A selection of my best architectural and fullstack work.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        @for (project of projects(); track project.id) {
          <app-project-card [project]="project"></app-project-card>
        } @empty {
          <app-skeleton type="card"></app-skeleton>
          <app-skeleton type="card"></app-skeleton>
          <app-skeleton type="card"></app-skeleton>
        }
      </div>
    </section>
  `
})
export class ProjectsGridComponent {
	projects = input.required<IProject[]>();
}