import { ReactiveControllerHost } from 'lit';
import { listenForAttributeChange } from '../utils/events.js';
import { onEscape, onFocusOut } from '../utils/focus.js';

export interface ClosableControllerConfig {
  escape?: boolean;
  focusout?: boolean;
}

/**
 * Given a closable component provides the following
 * - close on escape
 * - focus to trigger if available
 */
export class ClosableController {
  private observer: MutationObserver;

  private _trigger: HTMLElement;
  private get trigger() {
    return this.host.trigger ?? this._trigger;
  }

  constructor(
    private host: ReactiveControllerHost & HTMLElement & { trigger?: HTMLElement },
    private config?: ClosableControllerConfig
  ) {
    this.config = { escape: true, focusout: true, ...config };
    this.host.addController(this);
  }

  hostConnected() {
    this.observer = listenForAttributeChange(this.host, 'hidden', () => {
      if (this.host.hidden) {
        this.trigger?.focus();
      } else {
        this._trigger = (this.host.getRootNode() as any).activeElement;
      }
    });

    if (this.config.escape) {
      onEscape(this.host, () => this.close('escape-keypress'));
    }

    if (this.config.focusout) {
      this.host.tabIndex = 0; // for a11y focus out https://stackoverflow.com/questions/152975/how-do-i-detect-a-click-outside-an-element
      onFocusOut(this.host, () => this.close('focusout'));
    }
  }

  hostDisconnected() {
    this.trigger?.focus();
    this.observer.disconnect();
  }

  close(detail?: any) {
    this.host.dispatchEvent(new CustomEvent('closeChange', { detail }));
  }
}
