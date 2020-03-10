/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import Image from './presentation/image';
import Button from './presentation/button';
import Footer from './presentation/footer';
import imgSrc from '../images/logo.svg';

const Home = (props) => {
  const { history } = props;
  return (
    <main>
      <div className="home container">
        <Image src={imgSrc} />
        <h3 className="home-header">Welcome</h3>
        <p className="home-text">Sign in to continue.</p>
        <Button name="Login" onClick={() => history.push('/login')} />
        <p className="orSeperator">or</p>
        <Button name="Register" onClick={() => history.push('/register')} />
      </div>
      <Footer />
    </main>
  );
};

Home.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Home;
