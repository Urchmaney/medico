/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './button';
import '../../styles/style.scss';

const Doctor = (props) => {
  const { doc } = props;
  return (
    <div className="doctor">
      <div className="doctor-container">
        <span className="profile">
          <FontAwesomeIcon icon="user" />
        </span>
        <div className="info">
          <h4>
            Dr.&nbsp;
            {doc.name}
          </h4>
          <p className="role">
            {doc.role}
          </p>
          <p className="feature">
            <span>
              &#8358;
              {doc.price}
            </span>
            <span>
              {doc.years}
              &nbsp;yrs&nbsp; of&nbsp; exp
            </span>
            <span>
              <span className="heart"><FontAwesomeIcon icon="heart" /></span>
              &nbsp;
              {doc.likes}
            </span>
          </p>
        </div>
      </div>
      <p className="link">
        <a href="google.com">View Profile</a>
      </p>
      <div className="btn-con">
        <Button name="Book" />
      </div>
    </div>
  );
};

Doctor.propTypes = {
  doc: PropTypes.object.isRequired,
};

export default Doctor;
