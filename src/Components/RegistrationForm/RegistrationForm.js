import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthApiService from "../../Services/auth-api-service";
import "./RegistrationForm.css";
import UserContext from "../../Context/UserContext";

class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {},
  };

  state = { error: null };
  static contextType = UserContext;
  firstInput = React.createRef();

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { name, username, password } = ev.target;
    AuthApiService.postUser({
      name: name.value,
      username: username.value,
      password: password.value,
    })
      .then((user) => {
        name.value = "";
        username.value = "";
        password.value = "";
        this.props.onRegistrationSuccess();
        // AuthApiService.postLogin({
        //   username: username.value,
        //   password: password.value,
        // }).then((res) => {
        //   name.value = '';
        //   username.value = '';
        //   password.value = '';
        //   this.context.processLogin(res.authToken);
        //   this.props.onRegistrationSuccess();
        // });
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  componentDidMount() {
    this.firstInput.current.focus();
  }

  render() {
    const { error } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="registration__form">
        <div role="alert" className="error__container">
          {error && <p>{error}</p>}
        </div>
        <div className="input__label">
          <label htmlFor="registration-name-input" className="form__label">
            Enter your name
            {/* <Required /> */}
          </label>
          <input
            ref={this.firstInput}
            id="registration-name-input"
            name="name"
            className="registration__input"
            placeholder="Name"
            required
          />
        </div>
        <div className="input__label">
          <label htmlFor="registration-username-input" className="form__label">
            Choose a username
            {/* <Required /> */}
          </label>

          <input
            id="registration-username-input"
            name="username"
            required
            className="registration__input"
            placeholder="Username"
          />
        </div>
        <div className="input__label">
          <label htmlFor="registration-password-input" className="form__label">
            Choose a password
            {/* <Required /> */}
          </label>
          <input
            id="registration-password-input"
            name="password"
            type="password"
            className="registration__input"
            placeholder="Password"
            required
          />
        </div>
        <footer className="form__footer">
          <button type="submit" className="form__submit">
            Sign up
          </button>{" "}
          <Link to="/login" className="returning__user">
            Already have an account?
          </Link>
        </footer>
      </form>
    );
  }
}

export default RegistrationForm;
