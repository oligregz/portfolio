import { Component, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

export type SkeletonType = 'text' | 'image' | 'button' | 'card' | 'input';

@Component({
	selector: 'app-skeleton',
	standalone: true,
	imports: [CommonModule],
	template: `
    <div [class]="computedClass()" class="animate-pulse bg-border rounded-md"></div>
  `
})
export class SkeletonComponent {
	type = input<SkeletonType>('text');

	computedClass = computed(() => {
		switch (this.type()) {
			case 'text': return 'h-4 w-full mb-2';
			case 'image': return 'w-full h-48 rounded-lg';
			case 'button': return 'h-10 w-32 rounded-md';
			case 'card': return 'w-full h-64 rounded-xl';
			case 'input': return 'h-12 w-full rounded-md';
		}
	});
}