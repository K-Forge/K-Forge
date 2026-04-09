import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

/**
 * Reusable API error state with friendly title/hint + retry action.
 */
@Component({
    selector: 'app-api-error',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <div class="max-w-2xl mx-auto text-center py-12 px-6 rounded-2xl bg-surface/70 border border-violet-primary/20 backdrop-blur-sm">
      <!-- Warning Icon -->
      <div class="w-12 h-12 rounded-full bg-violet-primary/10 border border-violet-primary/30 mx-auto mb-4 flex items-center justify-center">
        <svg class="w-6 h-6 text-violet-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 9v2m0 4h.01M4.93 19h14.14c1.54 0 2.5-1.67 1.73-3L13.73 4c-.77-1.33-2.69-1.33-3.46 0L3.2 16c-.77 1.33.19 3 1.73 3z"/>
        </svg>
      </div>

      <h3 class="text-xl font-semibold text-text-primary mb-2">{{ errorTitle }}</h3>
      <p class="text-text-muted whitespace-pre-line">{{ errorHint }}</p>

      <!-- Actions -->
      <div class="mt-8 flex items-center justify-center">
        <button (click)="retryClicked.emit()"
                class="px-5 py-2.5 text-sm text-violet-primary border border-violet-primary/30 rounded-lg
                       hover:bg-violet-primary/10 transition-colors">
          {{ retryLabel }}
        </button>
      </div>
    </div>
  `,
})
export class ApiErrorComponent {
    @Input() errorTitle = '';
    @Input() errorHint = '';
    @Input() retryLabel = 'Retry';
    @Output() retryClicked = new EventEmitter<void>();
}
