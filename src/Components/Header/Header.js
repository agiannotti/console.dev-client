import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../Services/token-service';
import UserContext from '../../Context/UserContext';
import './Header.css';

class Header extends Component {
  static contextType = UserContext;

  handleLogoutClick = () => {
    this.context.processLogout();
  };

  renderLogoutLink() {
    return (
      <div className='logged__in'>
        <span className='user__logged__in'>
          Hello, {this.context.user.name}!
        </span>
        <nav className='logout__container'>
          <Link
            className='logout__link'
            onClick={this.handleLogoutClick}
            to='/login'
          >
            Logout
          </Link>
        </nav>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className='login__route'>
        <nav className='nav__links'>
          <Link to='/login' className='login__link'>
            Login
          </Link>
          <br />
          <Link to='/register' className='register__link'>
            Sign up
          </Link>
        </nav>
      </div>
    );
  }

  renderTagline() {
    return (
      <div>
        <h1 className='tagline'>
          Code Typing Test App
          <p className='splash_description'>
            Practice typing code snippets below! Enter and then tab after each
            line. The text will turn red if you miss a character.
          </p>
        </h1>
      </div>
    );
  }

  render() {
    return (
      <header className='header__container'>
        <h1 className='header__title'>
          <Link to='/' className='header__link'>
            <span className='spaced'>Console.dev</span>
          </Link>
        </h1>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
        {!TokenService.hasAuthToken() && this.renderTagline()}
      </header>
    );
  }
}

export default Header;
