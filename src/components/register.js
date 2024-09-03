/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { post } from '../helpers/api';
import { registerUrl } from '../helpers/constants';
import { login, addToken, changeName } from '../actions/index';
import Image from './presentation/image';
import Footer from './presentation/footer';
import imgSrc from '../images/logo.svg';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      familyName: '',
      firstName: '',
      username: '',
    };
    this.onErrorLogin = this.onErrorLogin.bind(this);
    this.onSuccessLogin = this.onSuccessLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState((state) => ({
      ...state, [name]: value,
    }));
  }

  handleSubmit() {
    const { firstName, familyName, username } = this.state;
    const { onSuccessLogin, onErrorLogin } = this;
    const payload = { user: { username, first_name: familyName, last_name: firstName } };
    const postResult = post(registerUrl, payload);
    postResult.then((result) => {
      if (result.error) {
        onErrorLogin(result.error);
      } else {
        onSuccessLogin(result);
      }
    });
  }

  onSuccessLogin(result) {
    const {
      login, addToken, history, changeName,
    } = this.props;
    login();
    changeName(`${result.user.first_name} ${result.user.last_name}`);
    addToken(result.token);
    history.push('/dashboard');
  }

  onErrorLogin(errors) {
    this.setState((state) => ({
      ...state, errors: [...errors],
    }));
  }

  render() {
    const {
      errors, familyName, firstName, username,
    } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <main>
        <form className="home container">
          <Image src={imgSrc} />
          <h3 className="home-header">Register</h3>
          <p className="home-text">details.</p>
          <ul className="error">
            {errors.map((error) => (<li key={error}>{error}</li>))}
          </ul>
          <input type="text" name="familyName" value={familyName} onChange={handleChange} placeholder="Family Name" />
          <input type="text" name="firstName" value={firstName} onChange={handleChange} placeholder="First Name" />
          <input type="text" name="username" value={username} onChange={handleChange} placeholder="Username" />
          <input type="button" onClick={handleSubmit} value="Register" />
          <Link className="auth-link" to="/login"> Login </Link>
        </form>
        <Footer />
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: () => dispatch(login()),
  addToken: (token) => dispatch(addToken(token)),
  changeName: (name) => dispatch(changeName(name)),
});

Register.propTypes = {
  login: PropTypes.func.isRequired,
  addToken: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  changeName: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Register);
