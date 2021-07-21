import { html, LitElement } from 'lit';
import { customElement, AriaPopupTriggerController } from '@cds/core/internal';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test';

@customElement('aria-popup-controller-test-element')
class AriaPopupTriggerControllerTestElement extends LitElement {
  ariaPopupTriggerController = new AriaPopupTriggerController(this);
  render() {
    return html`...`;
  }
}

describe('aria-popup-trigger.controller', () => {
  let component: HTMLElement;
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createTestElement(
      html`<aria-popup-controller-test-element popup="popup-el"></aria-popup-controller-test-element>`
    );
    component = element.querySelector<AriaPopupTriggerControllerTestElement>('aria-popup-controller-test-element');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should initialize aria attributes for popup type triggers', async () => {
    await componentIsStable(component);
    expect(component.ariaControls).toBe('popup-el');
    expect(component.ariaHasPopup).toBe('true');
    expect(component.ariaExpanded).toBe('false');
  });
});
