import React from 'react';
import Appointment from './presentation/appointment';
import Header from './presentation/header';

const app = [1, 3, 4, 5];

const Appointments = () => (
  <main>
    <div className="container">
      <Header name="Appointments" />
      <div className="appoint-list-con">
        {app.map(e => (
          <Appointment key={e} date={new Date()} />
        ))}
      </div>
    </div>
  </main>
);

export default Appointments;
