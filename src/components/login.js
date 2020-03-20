/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Image from './presentation/image';
import Footer from './presentation/footer';
import '../styles/style.scss';
import imgSrc from '../images/logo.svg';
import { loginUrl } from '../helpers/constants';
import { post } from '../helpers/api';
import { login, addToken, changeName } from '../actions/index';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      errors: [],
    };
    this.onErrorLogin = this.onErrorLogin.bind(this);
    this.onSuccessLogin = this.onSuccessLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onSuccessLogin(result) {
    const {
      login, addToken, history, changeName,
    } = this.props;
    login();
    addToken(result.token);
    changeName(`${result.user.first_name} ${result.user.last_name}`);
    history.push('/dashboard');
  }

  onErrorLogin(errors) {
    this.setState(state => ({
      ...state, errors: [errors],
    }));
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(state => ({
      ...state, username: value,
    }));
  }

  handleSubmit() {
    const { username } = this.state;
    const { onSuccessLogin, onErrorLogin } = this;
    const payload = { auth: { username } };
    const postResult = post(loginUrl, payload);
    postResult.then((result) => {
      if (result.error) {
        onErrorLogin(result.error);
      } else {
        onSuccessLogin(result);
      }
    });
  }

  render() {
    const { username, errors } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <main>
        <form className="home container">
          <Image src={imgSrc} />
          <h3 className="home-header">Login</h3>
          <p className="home-text">Login with your username. </p>
          <ul className="error">
            {errors.map(error => (<li key={error}>{error}</li>))}
          </ul>
          <input id="login" value={username} onChange={handleChange} type="text" placeholder="login" />
          <input type="button" onClick={handleSubmit} value="Login" />
          <Link className="auth-link" to="/register"> Register </Link>
        </form>
        <Footer />
      </main>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(login()),
  addToken: token => dispatch(addToken(token)),
  changeName: name => dispatch(changeName(name)),
});

Login.propTypes = {
  login: PropTypes.func.isRequired,
  addToken: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  changeName: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
