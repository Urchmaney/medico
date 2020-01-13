/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Appointment = (props) => {
  const { date, name } = props;
  return (
    <div className="appointment-con">
      <span className="mark">
        <FontAwesomeIcon icon="check" />
      </span>
      <p>
        <span><FontAwesomeIcon icon="bell" /></span>
        {new Date(date).toString().split(' ', 4).join(' ')}
      </p>
      <p>
        Upcoming appointment with Dr.&nbsp;
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
