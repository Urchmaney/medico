import React from 'react';
import Image from './presentation/image';
import Button from './presentation/button';

const Home = () => (
  <main>
    <div className="login">
      <Image />
      <h3>Welcome</h3>
      <p>Sign in to continue.</p>
      <Button name="Login" />
      <p>or</p>
      <Button name="Register" />
    </div>
  </main>
);

export default Home;
