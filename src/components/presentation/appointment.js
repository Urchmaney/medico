/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Appointment = (props) => {
  const { date, name } = props;
  const dDate = new Date(date);
  return (
    <div className="appointment-con">
      <span className="mark" style={{ backgroundColor: dDate > new Date() ? 'green' : 'lightGray' }}>
        <FontAwesomeIcon icon="check" />
      </span>
      <p>
        <span><FontAwesomeIcon icon="bell" /></span>
        {dDate.toString().split(' ', 4).join(' ')}
      </p>
      <p>
        {dDate > new Date() ? 'Upcoming ' : 'past '}
        appointment with Dr.&nbsp;
        {name}
      </p>
    </div>
  );
};

Appointment.propTypes = {
  date: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Appointment;
