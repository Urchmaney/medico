/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from './presentation/header';
import Button from './presentation/button';
import Footer from './presentation/footer';

const DoctorProfile = (props) => {
  const {
    doctor, role, history, loggedIn,
  } = props;
  if (!loggedIn) {
    return (<Redirect to="/login" />);
  }
  if (!doctor) {
    history.goBack();
  }
  const educations = doctor.educations.split('--');
  return (
    <main>
      <div className="profile-con">
        <Header color="#208f82" name=" " iconOnClick={() => history.goBack()} />
        <div className="doc-profile-con">
          <div className="doc-profile">
            <p>
              {`${doctor.first_name} ${doctor.last_name}`}
            </p>
            <div>
              <span className="profile">
                <FontAwesomeIcon icon="user" />
              </span>
              <p>
                {role.name}
              </p>
              <p className="feature">
                <span>
                  &#8358;
                  {doctor.price}
                </span>
                <span>
                  {doctor.years_experience}
                  &nbsp;yrs&nbsp; of&nbsp; exp
                </span>
                <span>
                  <span className="heart"><FontAwesomeIcon icon="heart" /></span>
                  &nbsp;
                  {doctor.likes_count}
                </span>
              </p>
            </div>
          </div>
        </div>
        <h3 className="doc-prof-header">Doctors Info</h3>
        <hr />
        <div>
          <div className="info-con">
            <h3>
              Educations
            </h3>
            <ul>
              {
                educations.map(e => (
                  <li key={e}>
                    {e}
                  </li>
                ))
            }
            </ul>
          </div>
        </div>
        <div className="appoint-btn-con">
          <Button name="Book Appointment" onClick={() => history.push('/date')} />
        </div>
      </div>
      <Footer />
    </main>
  );
};

const mapStateToProps = state => ({
  doctor: state.doctor,
  role: state.role,
  loggedIn: state.loggedIn,
});

DoctorProfile.propTypes = {
  doctor: PropTypes.object.isRequired,
  role: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(DoctorProfile);
