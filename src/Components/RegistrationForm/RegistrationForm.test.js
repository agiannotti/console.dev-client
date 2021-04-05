import React from 'react';
import ReactDOM from 'react-dom';
import RegistrationForm from './RegistrationForm';

import { BrowserRouter, Route } from 'react-router-dom';

describe('RegistrationForm Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/edit'} component={RegistrationForm} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
