import { NodeProps } from '../../src';

export const simpleNestedModel: NodeProps = {
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
      kind: 'block',
      type: 'unordered-list',
      children: [
        {
          kind: 'inline',
          type: 'list-item',
          children: [
            {
              kind: 'inline',
              type: 'link',
              textContent: 'Link text',
              metadata: {
                href: '#',
              },
            },
          ],
        },
      ],
    },
  ],
};
