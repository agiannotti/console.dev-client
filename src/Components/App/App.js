import Main from '../Main/Main';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import PrivateRoute from '../../PrivateRoute/PrivateRoute';
import PublicOnlyRoute from '../../PublicOnlyRoute/PublicOnlyRoute';
import RegistrationRoute from '../../Routes/RegistrationRoute/RegistrationRoute';
import LoginRoute from '../../Routes/LoginRoute/LoginRoute';
import NotFoundRoute from '../../Routes/NotFoundRoute/NotFoundRoute';
import Header from '../Header/Header';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <main>
          <Switch>
            <Route exact path='/' component={Main} />
            <PublicOnlyRoute path={'/register'} component={RegistrationRoute} />
            <PublicOnlyRoute path={'/login'} component={LoginRoute} />
            <Route component={NotFoundRoute} />
          </Switch>
        </main>
      </div>
    );
  }
}
