import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';

import { BrowserRouter, Route } from 'react-router-dom';

describe('Header Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/edit'} component={Header} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
