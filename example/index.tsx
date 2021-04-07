import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ContentTransformer } from '../.';

const App = () => {
  return (
    <div>
      <ContentTransformer
        json={{ kind: 'block', type: 'paragraph', textContent: 'Hi there' }}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
