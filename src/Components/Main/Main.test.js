import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';

import { BrowserRouter, Route } from 'react-router-dom';

describe('Main Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Route path={'/edit'} component={Main} />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
