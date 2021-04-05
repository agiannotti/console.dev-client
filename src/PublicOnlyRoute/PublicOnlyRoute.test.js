import React from 'react';
import ReactDOM from 'react-dom';
import PublicOnly from './PublicOnlyRoute';

import { BrowserRouter, Route } from 'react-router-dom';

describe('PublicOnly Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/edit'} component={PublicOnly} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
