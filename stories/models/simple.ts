import { NodeProps } from '../../src';

export const simpleModel: NodeProps = {
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
      type: 'underlined',
      textContent: 'you',
    },
    {
      kind: 'inline',
      type: 'container',
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
