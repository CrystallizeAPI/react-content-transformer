import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ContentTransformer, Overrides, NodeProps, NodeContent } from '../.';

const overrides: Overrides = {
  link: (props: NodeProps) => (
    <a href={props.metadata?.href}>
      <NodeContent {...props} />
    </a>
  ),
};

const App = () => {
  return (
    <div>
      <ContentTransformer
        json={{ kind: 'block', type: 'paragraph', textContent: 'Hi there' }}
        overrides={overrides}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
