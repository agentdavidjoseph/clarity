import { ReactiveControllerHost } from 'lit';

/**
 * Provides all nessesary aria-* attributes to create valid pressed button states
 * https://sarahmhigley.com/writing/playing-with-state/
 */
export class AriaPressedController {
  constructor(private host: ReactiveControllerHost & HTMLElement & { pressed: boolean }) {
    this.host.addController(this);
  }

  hostUpdated() {
    if (this.host.pressed !== null && this.host.pressed !== undefined) {
      this.host.ariaPressed = this.host.pressed ? 'true' : 'false';
    }
  }
}
