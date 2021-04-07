import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ContentTransformer, Props, NodeContent } from '../src';

const meta: Meta = {
  title: 'Welcome',
  component: ContentTransformer,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<Props> = args => <ContentTransformer {...args} />;

const simpleModel = {
  kind: 'block',
  type: 'paragraph',
  children: [
    {
      kind: 'inline',
      type: 'container',
      textContent: 'Hello ',
    },
    {
      kind: 'inline',
      type: 'underline',
      textContent: 'you',
    },
    {
      kind: 'inline',
      type: null,
      textContent: ' ',
    },
    {
      kind: 'inline',
      type: 'emphasized',
      textContent: 'dog ',
    },
    {
      kind: 'inline',
      type: 'link',
      textContent: 'link',
      metadata: {
        href: '#',
        target: '_blank',
      },
    },
  ],
};

export const Default = Template.bind({});
Default.args = {
  json: simpleModel,
};

export const WithLinkOverride = Template.bind({});
Default.args = {
  json: simpleModel,
  overrides: {
    link: props => (
      <a href={props.metadata.href}>
        🥸 Injected coolness 🥸 <NodeContent {...props} />
      </a>
    ),
  },
};
