import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IPublication } from '../../core/models/portfolio.models';

@Component({
	selector: 'app-publication-card',
	standalone: true,
	imports: [CommonModule],
	template: `
    <a [href]="publication().url" target="_blank" 
       class="group block bg-bg-surface border border-border rounded-xl overflow-hidden transition-fluid hover-neon">
      
      <div class="relative h-48 overflow-hidden">
        <img [src]="publication().imageUrl" [alt]="publication().title" 
             class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
        <div class="absolute inset-0 bg-bg-main/40 group-hover:bg-transparent transition-colors"></div>
      </div>

      <div class="p-5">
        <div class="flex justify-between items-center mb-2">
          <span class="text-xs font-medium text-accent uppercase tracking-wider">{{ publication().platform }}</span>
          <span class="text-xs text-text-muted">{{ publication().date }}</span>
        </div>
        <h3 class="text-lg font-bold text-text-main group-hover:text-primary transition-colors">
          {{ publication().title }}
        </h3>
        <div class="mt-4 flex items-center text-sm font-semibold text-primary">
          Ler artigo completo
          <span class="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </a>
  `
})
export class PublicationCardComponent {
	publication = input.required<IPublication & { imageUrl: string }>();
}