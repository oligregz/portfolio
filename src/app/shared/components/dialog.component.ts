import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-dialog',
	standalone: true,
	imports: [CommonModule],
	template: `
    @if (isOpen()) {
      <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-bg-main/80 backdrop-blur-sm transition-opacity">
        <div 
          class="bg-bg-surface border border-border rounded-xl shadow-2xl w-full max-w-lg overflow-hidden transform transition-all"
          (click)="$event.stopPropagation()">
          
          <div class="flex justify-between items-center p-4 border-b border-border">
            <h2 class="text-lg font-bold text-text-main">{{ title() }}</h2>
            <button (click)="close.emit()" class="text-text-muted hover:text-accent transition-colors">
              ✕ </button>
          </div>
          
          <div class="p-6 text-text-muted">
            <ng-content></ng-content>
          </div>
        </div>
      </div>
    }
  `
})
export class DialogComponent {
	isOpen = input<boolean>(false);
	title = input<string>('');
	close = output<void>();
}