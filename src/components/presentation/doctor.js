/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './button';
import { changeDoctor } from '../../actions/index';
import '../../styles/style.scss';

const Doctor = (props) => {
  const {
    doc, role, history, changeDoctor,
  } = props;
  return (
    <div className="doctor">
      <div className="doctor-container">
        <FontAwesomeIcon className="profile" icon="user" />
        <div className="info">
          <h4>
            Dr.&nbsp;
            {`${doc.first_name}  ${doc.last_name}`}
          </h4>
          <p className="role">
            {role}
          </p>
          <p className="feature">
            <span>
              &#8358;
              {doc.price}
            </span>
            <span>
              {doc.years_experience}
              &nbsp;yrs&nbsp; of&nbsp; exp
            </span>
            <span>
              <span className="heart"><FontAwesomeIcon icon="heart" /></span>
              &nbsp;
              {doc.likes_count}
            </span>
          </p>
        </div>
      </div>
      <p className="link">
        <Link onClick={() => { changeDoctor(doc); }} to="/profile">View Profile</Link>
      </p>
      <div className="btn-con">
        <Button name="Book" onClick={() => { history.push('/profile'); changeDoctor(doc); }} />
      </div>
    </div>
  );
};

Doctor.propTypes = {
  doc: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  changeDoctor: PropTypes.func.isRequired,
  role: PropTypes.string.isRequired,
};

const mapDispatchToProps = dispatch => ({
  changeDoctor: doc => dispatch(changeDoctor(doc)),
});

export default connect(null, mapDispatchToProps)(Doctor);
