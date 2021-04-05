import React from 'react';
import ReactDOM from 'react-dom';
import RegistrationRoute from './RegistrationRoute';

import { BrowserRouter, Route } from 'react-router-dom';

describe('RegistrationRoute Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/edit'} component={RegistrationRoute} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
