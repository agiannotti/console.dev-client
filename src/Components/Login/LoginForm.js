import React, { Component } from 'react';
import AuthApiService from '../../Services/auth-api-service';
import UserContext from '../../Context/UserContext';
import './LoginForm.css';

class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {},
  };

  static contextType = UserContext;

  state = { error: null };

  firstInput = React.createRef();

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { username, password } = ev.target;

    this.setState({ error: null });

    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then((res) => {
        username.value = '';
        password.value = '';
        this.context.processLogin(res.authToken);
        this.props.onLoginSuccess();
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
      <form onSubmit={this.handleSubmit} className='registration__form'>
        <div role='alert' className='error__container'>
          {error && <p>{error}</p>}
        </div>
        <div className='input__label'>
          <label htmlFor='login-username-input' className='form__label'>
            Username
          </label>
          <input
            ref={this.firstInput}
            id='login-username-input'
            name='username'
            className='registration__input'
            placeholder='Username'
            required
          />
        </div>
        <div className='input__label'>
          <label htmlFor='login-password-input' className='form__label'>
            Password
          </label>
          <input
            id='login-password-input'
            name='password'
            type='password'
            placeholder='Password'
            className='registration__input'
            required
          />
        </div>
        <button type='submit' className='form__submit'>
          Login
        </button>
      </form>
    );
  }
}

export default LoginForm;
