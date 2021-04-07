import { FC } from 'react';

interface NodeMetadata {
  [key: string]: any;
}

export interface NodeProps {
  kind?: string;
  type?: string;
  textContent?: string;
  children?: [NodeProps];
  metadata?: NodeMetadata;
}

export interface Overrides {
  link?: FC<NodeProps>;
  'unordered-list': FC<NodeProps>;
  'ordered-list': FC<NodeProps>;
  list: FC<NodeProps>;
  'list-item': FC<NodeProps>;
  quote: FC<NodeProps>;
  paragraph: FC<NodeProps>;
  preformatted: FC<NodeProps>;
  code: FC<NodeProps>;
  underline: FC<NodeProps>;
  strong: FC<NodeProps>;
  emphasized: FC<NodeProps>;
  div?: FC<NodeProps>;
  span?: FC<NodeProps>;
  'line-break'?: FC<NodeProps>;
}