import React, { Component } from "react";
import UserContext from "../../Context/UserContext";
import TokenService from "../../Services/token-service";
// import { Link } from "react-router-dom";
import "./Test.css";

export default class Test extends Component {
  static contextType = UserContext;

  renderTestFunc() {
    return (
      <div className="__test">
        {/* <Link>User Data</Link> */}
        <br />
        {/* <Link>User Data</Link> */}
      </div>
    );
  }

  render() {
    return (
      <div>{TokenService.hasAuthToken() ? this.renderTestFunc() : null}</div>
    );
  }
}
