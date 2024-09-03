/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from './presentation/header';
import {
  changeAppointmentDate,
  changeAppointmentTime,
} from '../actions/index';
import '../styles/style.scss';
import Button from './presentation/button';

class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      time: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState((state) => ({
      ...state, [name]: value,
    }));
  }

  handleSubmit() {
    const { date, time } = this.state;
    const {
      changeAppointmentDate,
      changeAppointmentTime,
      history,
    } = this.props;
    changeAppointmentDate(date);
    changeAppointmentTime(time);
    history.push('/confirm');
  }

  render() {
    const {
      doctor, role, history, loggedIn,
    } = this.props;
    const { handleChange, handleSubmit } = this;
    if (!loggedIn) {
      return (<Redirect to="/login" />);
    }
    return (
      <main>
        <div className="date-time">
          <Header name="Booking" iconOnClick={() => history.goBack()} />
          <form>
            <label htmlFor="date">
              Date
              <input id="date" type="date" onChange={handleChange} name="date" />
            </label>
            <label htmlFor="time">
              Time
              <input id="time" type="time" name="time" onChange={handleChange} />
            </label>
            <div className="btn-con">
              <Button name="Book Appointment" onClick={handleSubmit} />
            </div>
          </form>
          <div className="info-con">
            <div className="info">
              <h4>
                Dr.&nbsp;
                {`${doctor.first_name} ${doctor.last_name}`}
              </h4>
              <p className="role">
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
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeAppointmentDate: (date) => dispatch(changeAppointmentDate(date)),
  changeAppointmentTime: (time) => dispatch(changeAppointmentTime(time)),
});

const mapStateToProps = (state) => ({
  doctor: state.doctor,
  role: state.role,
  loggedIn: state.loggedIn,
});

DatePicker.propTypes = {
  doctor: PropTypes.object.isRequired,
  role: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  changeAppointmentDate: PropTypes.func.isRequired,
  changeAppointmentTime: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(DatePicker);
