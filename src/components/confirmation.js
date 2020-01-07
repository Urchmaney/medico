import React from 'react';
import Header from './presentation/header';
import Footer from './presentation/footer';
import Status from './presentation/status';

const Confirmation = () => (
  <main>
    <div className="confirmation container">
      <Header name="Confirmation" />
      <Status detail payment />
      <div className="info">
        <p>
          Dr John Doe
        </p>
        <p>
          General Doctor
        </p>
        <hr />
        <p>
          4th Feb 2019, 11:30am
        </p>
      </div>
      <form>
        <label htmlFor="name">
          Your name
          <input id="name" type="text" />
        </label>
        <label htmlFor="reason">
          Reason for visit
          <input id="reason" type="text" />
        </label>
        <input type="submit" value="Finish" />
      </form>
    </div>
    <Footer />
  </main>
);

export default Confirmation;
