/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@clr/core/icon/register.js';
import '@clr/core/tag/register.js';
import { ClarityIcons, infoStandardIcon, userIcon } from '@clr/core/icon';
import { propertiesGroup, getElementStorybookArgTypes, spreadProps, getElementStorybookArgs } from '@clr/core/internal';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { html } from 'lit-html';
import customElements from '../../dist/core/custom-elements.json';

ClarityIcons.addIcons(userIcon);
ClarityIcons.addIcons(infoStandardIcon);

export default {
  title: 'Components/Tag/Stories',
  component: 'cds-tag',
  argTypes: {
    ...getElementStorybookArgTypes('cds-tag', customElements),
    badgeValue: { control: { type: 'number' }, defaultValue: 0 },
  },
  parameters: {
    options: { showPanel: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/v2mkhzKQdhECXOx8BElgdA/Clarity-UI-Library---light-2.2.0?node-id=51%3A673',
    },
  },
};

export const API = (args: any) => {
  return html`
    <cds-tag ...="${spreadProps(getElementStorybookArgs(args))}" @click=${action('click')}>
      ${args.default}${args.badgeValue !== 0 ? html`<cds-badge>${args.badgeValue}</cds-badge>` : ''}
    </cds-tag>
  `;
};

export const status = () => {
  return html`
    <div cds-layout="vertical gap:sm">
      <cds-tag readonly status="info">Info</cds-tag>
      <cds-tag readonly status="success">Success</cds-tag>
      <cds-tag readonly status="warning">Warning</cds-tag>
      <cds-tag readonly status="danger">Danger</cds-tag>
      <cds-tag disabled status="info">Disabled</cds-tag>
    </div>
  `;
};

export const color = () => {
  return html`
    <div cds-layout="vertical gap:sm">
      <cds-tag readonly color="gray">Default</cds-tag>
      <cds-tag readonly color="purple">Purple</cds-tag>
      <cds-tag readonly color="blue">Blue</cds-tag>
      <cds-tag readonly color="orange">Orange</cds-tag>
      <cds-tag readonly color="light-blue">Light Blue</cds-tag>
    </div>
  `;
};

export const badgesStatus = () => {
  return html`
    <div cds-layout="vertical gap:sm">
      <cds-tag readonly status="info">Info <cds-badge status="info">1</cds-badge></cds-tag>
      <cds-tag readonly status="success">Success <cds-badge status="success">2</cds-badge></cds-tag>
      <cds-tag readonly status="warning">Warning <cds-badge status="warning">3</cds-badge> </cds-tag>
      <cds-tag readonly status="danger">Danger <cds-badge status="danger">12</cds-badge></cds-tag>
      <cds-tag disabled status="info">Disabled <cds-badge>12</cds-badge></cds-tag>
    </div>
  `;
};

export const badgesColor = () => {
  return html`
    <cds-tag readonly>No Badge</cds-tag>
    <cds-tag readonly color="gray">Default <cds-badge>1</cds-badge></cds-tag>
    <cds-tag readonly color="purple">Purple <cds-badge>2</cds-badge></cds-tag>
    <cds-tag readonly color="blue">Blue <cds-badge>3</cds-badge></cds-tag>
    <cds-tag readonly color="orange">Orange <cds-badge>12</cds-badge></cds-tag>
    <cds-tag readonly color="light-blue">Light Blue <cds-badge>15</cds-badge></cds-tag>
  `;
};

export const clickable = () => {
  return html`
    <div cds-layout="vertical gap:sm">
      <div cds-layout="horizontal gap:sm">
        <cds-tag aria-label="Clickable example of a default tag" color="gray">Default</cds-tag>
        <cds-tag aria-label="Clickable example of a purple tag" color="purple">Purple</cds-tag>
        <cds-tag aria-label="Clickable example of a blue tag" color="blue">Blue</cds-tag>
        <cds-tag aria-label="Clickable example of an orange tag" color="orange">Orange</cds-tag>
        <cds-tag aria-label="Clickable example of a light blue tag" color="light-blue">Light Blue</cds-tag>
      </div>
      <div cds-layout="horizontal gap:sm">
        <cds-tag aria-label="Clickable example of a tag with the info status" status="info"
          >Info <cds-badge status="info">1</cds-badge></cds-tag
        >
        <cds-tag aria-label="Clickable example of a tag with the success status" status="success"
          >Success <cds-badge status="success">2</cds-badge></cds-tag
        >
        <cds-tag aria-label="Clickable example of a tag with the warning status" status="warning"
          >Warning <cds-badge status="warning">3</cds-badge>
        </cds-tag>
        <cds-tag aria-label="Clickable example of a tag with the danger status" status="danger"
          >Danger <cds-badge status="danger">12</cds-badge></cds-tag
        >
      </div>
      <div cds-layout="horizontal gap:sm">
        <cds-tag aria-label="Clickable example of a default tag with a badge" color="gray"
          >Default <cds-badge>A</cds-badge></cds-tag
        >
        <cds-tag aria-label="Clickable example of a purple tag with a badge" color="purple"
          >Purple <cds-badge>B</cds-badge></cds-tag
        >
        <cds-tag aria-label="Clickable example of a blue tag with a badge" color="blue"
          >Blue <cds-badge>C</cds-badge></cds-tag
        >
        <cds-tag aria-label="Clickable example of an orange tag with a badge" color="orange"
          >Orange <cds-badge>D</cds-badge></cds-tag
        >
        <cds-tag aria-label="Clickable example of a light-blue tag with a badge" color="light-blue"
          >Light Blue <cds-badge>E</cds-badge></cds-tag
        >
      </div>
      <div cds-layout="horizontal gap:sm">
        <cds-tag aria-label="Clickable example of a gray tag with an icon and a badge" color="gray"
          ><cds-icon shape="user"></cds-icon>Default <cds-badge>A</cds-badge></cds-tag
        >
        <cds-tag aria-label="Clickable example of a purple tag with an icon and a badge" color="purple"
          ><cds-icon shape="user"></cds-icon>Purple</cds-tag
        >
        <cds-tag aria-label="Clickable example of a blue tag with an icon and a badge" color="blue"
          ><cds-icon shape="user"></cds-icon>Blue <cds-badge>B</cds-badge></cds-tag
        >
        <cds-tag aria-label="Clickable example of an orange tag with an icon and a badge" color="orange"
          ><cds-icon shape="user"></cds-icon>Orange</cds-tag
        >
        <cds-tag aria-label="Clickable example of a light-blue tag with an icon and a badge" color="light-blue"
          ><cds-icon shape="user"></cds-icon>Light Blue <cds-badge>C</cds-badge></cds-tag
        >
        <cds-tag aria-label="Clickable example of a tag with an icon and a badge and a status of info" status="info"
          ><cds-icon shape="info-standard"></cds-icon>Info <cds-badge status="info">12,000</cds-badge></cds-tag
        >
        <cds-tag
          aria-label="Clickable example of a tag with an icon and a badge and a status of success"
          status="success"
          ><cds-icon shape="info-standard"></cds-icon>Success <cds-badge status="success">23+</cds-badge></cds-tag
        >
      </div>
    </div>
  `;
};

export const links = () => {
  return html`
    <div cds-layout="horizontal gap:sm p-b:lg">
      <a href="javascript:void(0)" aria-label="example of a tag component using an anchor">
        <cds-tag status="info">link</cds-tag>
      </a>

      <a href="javascript:void(0)" aria-label="example of a tag component using an anchor">
        <cds-tag status="success">link <cds-badge status="info">1</cds-badge></cds-tag>
      </a>

      <a href="javascript:void(0)" aria-label="example of a tag component using an anchor">
        <cds-tag status="warning"
          ><cds-icon shape="user"></cds-icon> link <cds-badge status="info">1</cds-badge></cds-tag
        >
      </a>

      <a href="javascript:void(0)" aria-label="example of a tag component using an anchor">
        <cds-tag status="danger">link</cds-tag>
      </a>
    </div>

    <a href="javascript:void(0)" cds-layout="horizontal gap:sm align:vertical-center">
      <span cds-text="link">example with text</span>
      <cds-tag>link</cds-tag>
    </a>
  `;
};

export const closable = () => {
  return html`
    <div>
      <cds-tag aria-label="Closable example of a tag" color="gray" closable>Default</cds-tag>
      <cds-tag aria-label="Closable example of a purple tag" color="purple" closable>Purple</cds-tag>
      <cds-tag aria-label="Closable example of a blue tag" color="blue" closable>Blue</cds-tag>
      <cds-tag aria-label="Closable example of an orange tag" color="orange" closable>Orange</cds-tag>
      <cds-tag aria-label="Closable example of a light-blue tag" color="light-blue" closable>Light Blue</cds-tag>
    </div>
    <div>
      <cds-tag aria-label="Closable example of a tag with an icon" color="gray" closable
        ><cds-icon shape="user"></cds-icon>Default</cds-tag
      >
      <cds-tag aria-label="Closable example of a blue tag with an icon" color="blue" closable
        ><cds-icon shape="user"></cds-icon>Blue</cds-tag
      >
      <cds-tag aria-label="Closable example of an orange tag with an icon" color="orange" closable
        ><cds-icon shape="user"></cds-icon>Orange</cds-tag
      >
    </div>
  `;
};

export const tagsAndIcons = () => {
  const solidIcon = boolean('solid icons', false, propertiesGroup);

  return html`
    <div cds-layout="vertical gap:sm">
      <div cds-layout="horizontal gap:xs">
        <cds-tag readonly>No Icon</cds-tag>
        <cds-tag readonly><cds-icon shape="user"></cds-icon>No Badge</cds-tag>
        <cds-tag readonly color="gray"
          ><cds-icon shape="user" ?solid=${solidIcon}></cds-icon>Default <cds-badge>1</cds-badge></cds-tag
        >
        <cds-tag readonly color="purple"
          ><cds-icon shape="user" ?solid=${solidIcon}></cds-icon>Purple <cds-badge>2</cds-badge></cds-tag
        >
        <cds-tag readonly color="blue"
          ><cds-icon shape="user" ?solid=${solidIcon}></cds-icon>Blue <cds-badge>3</cds-badge></cds-tag
        >
        <cds-tag readonly color="orange"
          ><cds-icon shape="user" ?solid=${solidIcon}></cds-icon>Orange <cds-badge>12</cds-badge></cds-tag
        >
        <cds-tag readonly color="light-blue"
          ><cds-icon shape="user" ?solid=${solidIcon}></cds-icon>Light Blue <cds-badge>15</cds-badge></cds-tag
        >
      </div>
      <div cds-layout="horizontal gap:xs">
        <cds-tag readonly status="info">No Icon</cds-tag>
        <cds-tag readonly status="info"
          ><cds-icon shape="info-standard" ?solid=${solidIcon}></cds-icon>No Badge</cds-tag
        >
        <cds-tag readonly status="info"
          ><cds-icon shape="info-standard" ?solid=${solidIcon}></cds-icon>Info
          <cds-badge status="info">1</cds-badge></cds-tag
        >
        <cds-tag readonly status="success"
          ><cds-icon shape="info-standard" ?solid=${solidIcon}></cds-icon>Success
          <cds-badge status="success">2</cds-badge></cds-tag
        >
        <cds-tag readonly status="warning"
          ><cds-icon shape="info-standard" ?solid=${solidIcon}></cds-icon>Warning
          <cds-badge status="warning">3</cds-badge>
        </cds-tag>
        <cds-tag readonly status="danger"
          ><cds-icon shape="info-standard" ?solid=${solidIcon}></cds-icon>Danger
          <cds-badge status="danger">12</cds-badge></cds-tag
        >
      </div>
    </div>
  `;
};
