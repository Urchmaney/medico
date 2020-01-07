import React from 'react';
import Image from './presentation/image';
import Footer from './presentation/footer';

const Register = () => (
  <main>
    <form className="home container">
      <Image />
      <h3 className="home-header">Register</h3>
      <p className="home-text">details.</p>
      <input type="text" placeholder="Family Name" />
      <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Username" />
      <input type="submit" value="Register" />
    </form>
    <Footer />
  </main>
);

export default Register;
