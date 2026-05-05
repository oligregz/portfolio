import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IPortfolioData } from '../../../core/models/portfolio.models';
import { ButtonComponent } from '../../../shared/components/button.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  template: `
    <section class="min-h-[85vh] flex items-center justify-center py-20 px-4 max-w-7xl mx-auto">
      <div class="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-8 w-full">

        <div class="flex-1 flex flex-col items-center md:items-start text-center md:text-left z-10">
          <span class="text-accent font-mono tracking-widest uppercase mb-3 text-sm md:text-base">
            Hello, World! I am
          </span>
          
          <h1 class="text-4xl md:text-5xl lg:text-7xl font-extrabold text-text-main mb-4 tracking-tight">
            {{ data().name }}
          </h1>
          
          <h2 class="text-2xl md:text-3xl lg:text-4xl text-primary font-bold mb-6">
            {{ data().title }}
          </h2>
          
          <p class="text-text-muted text-base md:text-lg leading-relaxed mb-10 max-w-2xl">
            {{ data().about }}
          </p>

          <div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <app-button variant="primary" (onClick)="openLink('mailto:' + data().email)">
              Get in Touch
            </app-button>
            <app-button variant="outline" (onClick)="openLink('https://' + data().github)">
              View GitHub
            </app-button>
            <app-button variant="ghost" (onClick)="openLink('https://' + data().linkedin)">
              LinkedIn
            </app-button>
          </div>
        </div>

        <div class="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0 group">
          <div class="absolute inset-0 bg-primary/30 rounded-full blur-[60px] group-hover:bg-accent/40 group-hover:blur-[80px] transition-fluid pointer-events-none"></div>

          <div class="relative w-full h-full rounded-full border-4 border-border group-hover:border-primary shadow-[0_0_30px_rgba(157,0,255,0.3)] group-hover:shadow-[0_0_50px_rgba(229,0,255,0.5)] transition-fluid overflow-hidden z-10">
            <img
              [src]="data().profilePicture"
              [alt]="data().name"
              class="w-full h-full object-cover transform group-hover:scale-105 transition-fluid"
            />
          </div>
        </div>

      </div>
    </section>
  `
})
export class HeroComponent {
  data = input.required<IPortfolioData>();

  openLink(url: string): void {
    window.open(url, '_blank');
  }
}