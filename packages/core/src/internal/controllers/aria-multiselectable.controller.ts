import { ReactiveControllerHost } from 'lit';

/**
 * Provides all nessesary aria-* attributes to create valid multi-selection state
 */
export class AriaMultiSelectableController {
  constructor(private host: ReactiveControllerHost & HTMLElement & { selectable: 'multi' | 'single' | null }) {
    this.host.addController(this);
  }

  hostUpdated() {
    if (this.host.selectable !== undefined && this.host.selectable !== null) {
      this.host.ariaMultiSelectable = this.host.selectable === 'multi' ? 'true' : 'false';
    } else {
      this.host.ariaMultiSelectable = null;
    }
  }
}
