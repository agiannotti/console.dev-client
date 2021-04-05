import React from 'react';
import ReactDOM from 'react-dom';
import LoginRoute from './LoginRoute';

import { BrowserRouter, Route } from 'react-router-dom';

describe('LoginRoute Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/edit'} component={LoginRoute} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
