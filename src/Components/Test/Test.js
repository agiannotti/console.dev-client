import React, { Component } from 'react';
import UserContext from '../../Context/UserContext';

export default class Test extends Component {
  static contextType = UserContext;

  render() {
    return (
      <>
        <h1>yesasdasdad</h1>
      </>
    );
  }
}
