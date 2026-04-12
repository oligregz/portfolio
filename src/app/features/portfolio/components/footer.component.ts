import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-footer',
	standalone: true,
	imports: [CommonModule],
	template: `
    <footer class="mt-20 py-8 border-t border-border bg-bg-surface">
      <div class="max-w-7xl mx-auto px-4 flex flex-col items-center">
        
        <div class="flex gap-6 mb-4">
          <a [href]="'mailto:' + email()" class="text-text-muted hover:text-primary transition-colors font-medium">
            Email
          </a>
          <a [href]="'https://' + github()" target="_blank" class="text-text-muted hover:text-primary transition-colors font-medium">
            GitHub
          </a>
          <a [href]="'https://' + linkedin()" target="_blank" class="text-text-muted hover:text-primary transition-colors font-medium">
            LinkedIn
          </a>
        </div>

        <p class="text-sm text-text-muted/60 text-center">
          &copy; {{ currentYear }} {{ name() }}. All rights reserved. <br/>
          <span class="text-xs">Built with Angular 17+ Signals & Tailwind CSS</span>
        </p>
      </div>
    </footer>
  `
})
export class FooterComponent {
	name = input.required<string>();
	email = input.required<string>();
	github = input.required<string>();
	linkedin = input.required<string>();

	currentYear = new Date().getFullYear();
}