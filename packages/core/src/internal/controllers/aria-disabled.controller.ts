import { ReactiveControllerHost } from 'lit';

/**
 * Provides all nessesary aria-* attributes to create valid disabled state
 */
export class AriaDisabledController {
  constructor(private host: ReactiveControllerHost & HTMLElement & { disabled: boolean; readonly?: boolean }) {
    this.host.addController(this);
  }

  hostConnected() {
    this.host.tabIndex = 0; // initialize immediately so element can be focused synchronously
  }

  hostUpdated() {
    if (this.host.disabled !== null) {
      this.host.ariaDisabled = this.host.disabled ? 'true' : 'false';
      this.host.tabIndex = this.host.disabled ? -1 : 0;
    } else {
      this.host.ariaDisabled = null;
      this.host.tabIndex = -1;
    }
  }
}
