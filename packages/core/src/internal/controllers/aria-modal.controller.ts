import { ReactiveControllerHost } from 'lit';

/**
 * Provides all nessesary aria-* attributes to create a vaild aria modal
 */
export class AriaModalController {
  constructor(private host: ReactiveControllerHost & HTMLElement) {
    this.host.addController(this);
  }

  hostConnected() {
    // safari https://bugs.webkit.org/show_bug.cgi?id=174667
    this.host.ariaModal = 'true';
    this.host.role = 'dialog';
    this.host.tabIndex = -1;
  }
}
