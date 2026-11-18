import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-footer',
	standalone: true,
	imports: [CommonModule],
	template: `
    <footer class="mt-20 py-8 border-t border-border bg-bg-surface">
      <div class="max-w-7xl mx-auto px-4 flex flex-col items-center">
        
        <div class="flex flex-wrap gap-6 mb-4 justify-center">
          <a href="https://wa.me/5511911892868" target="_blank" class="text-emerald-400 hover:text-emerald-300 transition-colors font-medium">
            WhatsApp (+55 11 91189-2868)
          </a>
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
          <span class="text-xs">Built with Angular 21 Signals & Tailwind CSS</span>
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