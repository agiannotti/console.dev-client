import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './LoginForm';

import { BrowserRouter, Route } from 'react-router-dom';

describe('LoginForm Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/edit'} component={LoginForm} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
