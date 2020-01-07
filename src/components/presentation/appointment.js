/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Appointment = (props) => {
  const { date } = props;
  return (
    <div className="appointment-con">
      <span className="mark">
        <FontAwesomeIcon icon="check" />
      </span>
      <p>
        <span><FontAwesomeIcon icon="bell" /></span>
        {date.toLocaleString()}
      </p>
      <p>
        Upcoming appointment with Dr. Joh Doe
      </p>
    </div>
  );
};

Appointment.propTypes = {
  date: PropTypes.object.isRequired,
};

export default Appointment;
