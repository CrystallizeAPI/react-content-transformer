import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as ContentTransformer } from '../stories/ContentTransformer.stories';

describe('Thing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ContentTransformer />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
