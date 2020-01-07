import React from 'react';
import Image from './presentation/image';
import Footer from './presentation/footer';
import '../styles/style.scss';

const Login = () => (
  <main>
    <form className="home container">
      <Image />
      <h3 className="home-header">Login</h3>
      <p className="home-text">Login with your username. </p>
      <input id="login" type="text" placeholder="login" />
      <input type="submit" value="Login" />
    </form>
    <Footer />
  </main>
);

export default Login;
