import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from './presentation/header';
import Button from './presentation/button';
import Footer from './presentation/footer';

const DoctorProfile = (props) => {
  return (
    <main>
      <div className="profile-con">
        <Header color="#208f82" name=" " />
        <div className="doc-profile-con">
          <div className="doc-profile">
            <p>
              Dr Name Whi
            </p>
            <div>
              <span className="profile">
                <FontAwesomeIcon icon="user" />
              </span>
              <p>
                General Manager
              </p>
              <p className="feature">
                <span>
                  &#8358;
                  200
                </span>
                <span>
                  44
                  &nbsp;yrs&nbsp; of&nbsp; exp
                </span>
                <span>
                  <span className="heart"><FontAwesomeIcon icon="heart" /></span>
                  &nbsp;
                  100
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
              Education
            </h3>
            <ul>
              <li>
                MD-General Medicine
              </li>
              <li>
                MBBS- Nephrology
              </li>
            </ul>
          </div>
          <div className="info-con">
            <h3>
              Speciliazation
            </h3>
            <ul>
              <li>
                MD-General Medicine
              </li>
              <li>
                MBBS- Nephrology
              </li>
            </ul>
          </div>
        </div>
        <div className="appoint-btn-con">
          <Button name="Book Appointment" />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default DoctorProfile;
