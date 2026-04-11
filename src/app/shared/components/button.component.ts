import { Component, input, output, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ButtonVariant = 'primary' | 'outline' | 'ghost';

@Component({
	selector: 'app-button',
	standalone: true,
	imports: [CommonModule],
	template: `
    <button 
      (click)="onClick.emit()"
      [disabled]="disabled()"
      [class]="computedClasses()"
      class="flex items-center justify-center gap-2 px-6 py-2 rounded-md font-medium transition-fluid focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-bg-main disabled:opacity-50 disabled:cursor-not-allowed">
      <ng-content></ng-content>
    </button>
  `
})
export class ButtonComponent {
	variant = input<ButtonVariant>('primary');
	disabled = input<boolean>(false);
	fullWidth = input<boolean>(false);

	onClick = output<void>();

	computedClasses = computed(() => {
		const base = this.fullWidth() ? 'w-full ' : '';
		switch (this.variant()) {
			case 'primary':
				return base + 'bg-primary text-white hover:bg-accent shadow-[0_0_10px_var(--color-primary)] hover:shadow-[0_0_20px_var(--color-accent)] border border-transparent';
			case 'outline':
				return base + 'bg-transparent text-primary border border-primary hover:border-accent hover:text-accent hover:shadow-[0_0_15px_var(--color-accent)]';
			case 'ghost':
				return base + 'bg-transparent text-text-muted hover:text-text-main hover:bg-bg-surface';
		}
	});
}