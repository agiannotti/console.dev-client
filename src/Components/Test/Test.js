import React, { Component } from "react";
import UserContext from "../../Context/UserContext";
import TokenService from "../../Services/token-service";
// import { Link } from "react-router-dom";
import "./Test.css";

export default class Test extends Component {
  static contextType = UserContext;

  renderTestFunc() {
    return (
<<<<<<< HEAD
      <div className='__test'>
        <Link>User Data</Link>
=======
      <div className="__test">
        {/* <Link>User Data</Link> */}
        <br />
        {/* <Link>User Data</Link> */}
>>>>>>> a8a52e82fb152bc0ea11bac0d3ac21d9bece3bb7
      </div>
    );
  }

  render() {
    return (
      <div>{TokenService.hasAuthToken() ? this.renderTestFunc() : null}</div>
    );
  }
}
