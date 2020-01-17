import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './header';
import Status from './status';
import imgSrc from '../../images/success.svg';
import '../../styles/style.scss';

const Success = (props) => {
  const {
    docName, date, time, backOnClick,
  } = props;
  return (
    <main>
      <div className="container success">
        <Header name="Success" iconOnClick={backOnClick} />
        <Status detail payment confirm />
        <div className="img-con">
          <img src={imgSrc} alt="success" />
        </div>
        <h3>
          Appointment Confirmed
        </h3>
        <p>
          Your appointment with Dr&nbsp;
          {docName}
          &nbsp;on&nbsp;
          {new Date(date).toString().split(' ', 4).join(' ')}
          &nbsp;at&nbsp;
          {time}
          &nbsp;is confirmed.
        </p>
        <hr />
        <Link to="/dashboard"> Home </Link>
      </div>
    </main>
  );
};

Success.propTypes = {
  docName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  backOnClick: PropTypes.func,
};

Success.defaultProps = {
  backOnClick: () => {},
};

export default Success;
