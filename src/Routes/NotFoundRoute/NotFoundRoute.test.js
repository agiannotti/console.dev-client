import React from 'react';
import ReactDOM from 'react-dom';
import NotFound from './NotFoundRoute';

import { BrowserRouter, Route } from 'react-router-dom';

describe('NotFound Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/edit'} component={NotFound} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
