import React from 'react';
import ReactDOM from 'react-dom';
import Registration from './Registration';

import { BrowserRouter, Route } from 'react-router-dom';

describe('Registration Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/edit'} component={Registration} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
