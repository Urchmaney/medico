import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from './presentation/header';
import '../styles/style.scss';
import Button from './presentation/button';

const times = ['10:30AM', '11:30AM', '12:30PM', '1:30PM'];

const DatePicker = () => (
  <main>
    <div className="date-time">
      <Header name="Booking" />
      <form>
        <input type="date" />
        <div className="time-con">
          {times.map(time => (
            <div key={time}>{time}</div>
          ))}
        </div>
        <div className="btn-con">
          <Button name="Book Appointment" />
        </div>
      </form>
      <div className="info-con">
        <div className="info">
          <h4>
            Dr.&nbsp;
            John Doe
          </h4>
          <p className="role">
            Managing Director
          </p>
          <p className="feature">
            <span>
              &#8358;
              200
            </span>
            <span>
              120
              &nbsp;yrs&nbsp; of&nbsp; exp
            </span>
            <span>
              <span className="heart"><FontAwesomeIcon icon="heart" /></span>
              &nbsp;
              333
            </span>
          </p>
        </div>
      </div>
    </div>
  </main>
);

export default DatePicker;
