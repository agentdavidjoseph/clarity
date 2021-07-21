import { ReactiveControllerHost } from 'lit';
import { focusable, focusElement } from '../utils/focus.js';
import { listenForAttributeChange } from '../utils/events.js';
import { getFlattenedDOMTree } from '../utils/traversal.js';

export interface FirstFocusConfig {
  fallback: 'none' | 'host' | 'focusable';
}

/**
 * Provides a focus first behavior to any component via the cds-first-focus attribute
 */
export class FirstFocusController {
  private observer: MutationObserver;

  constructor(
    private host: ReactiveControllerHost & HTMLElement,
    private config: FirstFocusConfig = { fallback: 'host' }
  ) {
    this.host.addController(this);
  }

  async hostConnected() {
    await this.host.updateComplete;
    this.observer = listenForAttributeChange(this.host, 'hidden', () => this.cdsFocusFirst());
    this.cdsFocusFirst();
  }

  hostDisconnected() {
    this.observer.disconnect();
  }

  private cdsFocusFirst() {
    if (!this.host.hidden && !this.host.hasAttribute('_demo-mode')) {
      const root = this.host.shadowRoot ? this.host.shadowRoot : this.host;
      const elements = getFlattenedDOMTree(root);
      const firstFocus = elements.find((i: HTMLElement) => i.hasAttribute('cds-first-focus'));
      const focusableElement =
        this.config.fallback === 'focusable'
          ? elements.find(i => focusable(i) && !i.hasAttribute('cds-focus-boundary'))
          : null;
      const host = this.config.fallback === 'host' ? this.host : null;
      focusElement(firstFocus ?? focusableElement ?? host);
    }
  }
}
