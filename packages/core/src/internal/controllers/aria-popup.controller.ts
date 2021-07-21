import { ReactiveControllerHost } from 'lit';
import { listenForAttributeChange } from '../utils/events.js';

/**
 * Provides all nessesary aria-* attributes to create a vaild aria popup
 */
export class AriaPopupController {
  private observer: MutationObserver;
  private trigger: HTMLElement;

  constructor(private host: ReactiveControllerHost & HTMLElement & { trigger: HTMLElement }) {
    this.host.addController(this);
  }

  private set expanded(value: boolean) {
    if (this.trigger?.hasAttribute('popup')) {
      this.trigger.ariaExpanded = `${value}`;
      this.trigger.ariaPressed = `${value}`;
    }
  }

  async hostConnected() {
    await this.host.updateComplete;
    this.observer = listenForAttributeChange(this.host, 'hidden', () => (this.expanded = !this.host.hidden));
  }

  async hostUpdate() {
    await this.host.updateComplete;
    if (this.host.trigger !== this.trigger) {
      this.expanded = false;
      this.trigger = this.host.trigger;
      this.expanded = !this.host.hidden;
    }
  }

  hostDisconnected() {
    this.expanded = false;
    this.observer.disconnect();
  }
}
