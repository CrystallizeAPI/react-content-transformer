import React from 'react';
import { Meta, Story } from '@storybook/react';

import { ContentTransformer, Props, NodeContent } from '../src';
import { simpleModel } from './models/simple';
import { simpleNestedModel } from './models/simple-nested';
import { preCodeModel } from './models/pre-code';
import { withLinksModel } from './models/with-links';

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

export const Default = Template.bind({});
Default.args = {
  json: simpleModel,
};

export const WithLinkOverride = Template.bind({});
WithLinkOverride.args = {
  json: simpleModel,
  overrides: {
    link: props => (
      <a href={props.metadata?.href}>
        🥸 Injected coolness 🥸 <NodeContent {...props} />
      </a>
    ),
  },
};

export const Nested = Template.bind({});
Nested.args = {
  json: simpleNestedModel,
};

export const NestedWithLinkOverride = Template.bind({});
NestedWithLinkOverride.args = {
  json: simpleNestedModel,
  overrides: {
    link: props => (
      <a href={props.metadata?.href}>
        🥸 Injected coolness 🥸 <NodeContent {...props} />
      </a>
    ),
  },
};

export const PreCode = Template.bind({});
PreCode.args = {
  json: preCodeModel,
};

export const WithLinks = Template.bind({});
WithLinks.args = {
  json: withLinksModel,
};
