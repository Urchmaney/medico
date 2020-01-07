import React from 'react';
import Header from './presentation/header';
import Status from './presentation/status';

const Success = () => (
  <main>
    <div className="container">
      <Header name="Success" />
      <Status detail payment confirm />

    </div>
  </main>
);

export default Success;
