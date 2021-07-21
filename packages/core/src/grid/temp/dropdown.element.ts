import { css, html, LitElement, PropertyValues } from 'lit';
import { query } from 'lit/decorators/query.js';
import {
  AriaPopupController,
  ClosableController,
  FirstFocusController,
  InlineFocusTrapController,
  KeyNavigationListController,
  property,
  querySlotAll,
} from '@cds/core/internal';

/**
 * Placeholder/WIP component
 */
export class CdsDropdown extends LitElement {
  @property({ type: String }) position: 'top' | 'bottom' | 'right' = 'bottom';

  @property({ type: String, reflect: true }) anchor: HTMLElement | string | null;

  @query('.content', true) content: HTMLElement;

  @querySlotAll('[tabindex]') keyListItems: NodeListOf<HTMLElement>;

  get trigger(): HTMLElement {
    return typeof this.anchor === 'string'
      ? (this.getRootNode() as HTMLElement).querySelector(`#${this.anchor}`)
      : this.anchor;
  }

  protected ariaPopupController = new AriaPopupController(this);

  protected inlineFocusTrapController = new InlineFocusTrapController(this);

  protected closableController = new ClosableController(this);

  protected firstFocusController = new FirstFocusController(this, { fallback: 'focusable' });

  protected keyNavigationListController = new KeyNavigationListController(this, { loop: true, layout: 'vertical' });

  render() {
    return html`<div class="content"><slot></slot></div>`;
  }

  async updated(props: PropertyValues) {
    super.updated(props);
    await this.updateComplete;

    if (!this.hidden && this.anchor) {
      this.#open();
    }
  }

  #open() {
    const trigger = this.trigger.getBoundingClientRect();

    if (this.position === 'top') {
      this.content.style.top = `${trigger.top - this.content.getBoundingClientRect().height}px`;
      this.content.style.left = `${trigger.left}px`;
    }

    if (this.position === 'bottom') {
      this.content.style.top = `${trigger.bottom + 4}px`;
      this.content.style.left = `${trigger.left}px`;
    }

    if (this.position === 'right') {
      this.content.style.top = `${trigger.top + 2}px`;
      this.content.style.left = `${trigger.right}px`;
    }
  }

  static get styles() {
    return [
      css`
        :host {
          display: block;
          --backdrop-background: none;
        }

        :host([hidden]) {
          display: none !important;
        }

        :host([hidden='true']) {
          display: none !important;
        }

        :host([hidden='false']) {
          display: block !important;
        }

        :host([anchor]) {
          position: fixed;
        }

        :host([anchor]) .content {
          position: fixed;
        }

        .content {
          background: var(--cds-alias-object-overlay-background);
          border: 0;
          box-shadow: var(--cds-alias-object-shadow-100);
          margin: 0;
          display: flex;
          flex-direction: column;
          min-width: 140px;
          min-height: 40px;
          padding: 12px;
        }

        .overlay-backdrop {
          position: absolute;
        }
      `,
    ];
  }
}
