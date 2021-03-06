import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter, Route } from 'react-router-dom';

describe('App Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/edit'} component={App} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
