import { NodeProps } from '../../src';

export const preCodeModel: NodeProps = {
  kind: 'block',
  type: 'preformatted',
  children: [
    {
      kind: 'block',
      type: 'code',
      textContent: 'alert("hey you");',
    },
  ],
};
