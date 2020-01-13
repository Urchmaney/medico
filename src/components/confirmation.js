/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './presentation/header';
import Footer from './presentation/footer';
import Status from './presentation/status';
import Success from './presentation/success';
import { post } from '../helpers/api';
import { appointmentsUrl } from '../helpers/constants';

class Confirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      success: false,
      reason: '',
      date: props.date,
      time: props.time,
      doctor_id: props.doctor.id,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onError = this.onError.bind(this);
    this.onSuccess = this.onSuccess.bind(this);
  }

  onError(errors) {
    this.setState(state => ({
      ...state, errors,
    }));
  }

  onSuccess() {
    this.setState(state => ({
      ...state, success: true,
    }));
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState(state => ({
      ...state, [name]: value,
    }));
  }

  handleSubmit() {
    const { onSuccess, onError } = this;
    const { token } = this.props;
    const postResult = post(appointmentsUrl, this.state, token);
    postResult.then((result) => {
      if (result.error) {
        onError(result.error);
      } else {
        onSuccess(result);
      }
    });
  }

  render() {
    const {
      name, doctor, role, date, time, loggedIn,
    } = this.props;
    const { reason, success, errors } = this.state;
    const { handleChange, handleSubmit } = this;
    if (!loggedIn) {
      return (<Redirect to="/login" />);
    }
    if (success) {
      return (<Success docName={`${doctor.first_name} ${doctor.last_name}`} date={date} time={time} />);
    }
    return (
      <main>
        <div className="confirmation container">
          <Header name="Confirmation" />
          <Status detail payment />
          <div className="info">
            <p>
              Dr.&nbsp;
              {`${doctor.first_name} ${doctor.last_name}`}
            </p>
            <p>
              {role.name}
            </p>
            <hr />
            <p>
              {`${date}, ${time}`}
            </p>
          </div>
          <form>
            <ul className="error">
              {errors.map(error => (<li key={error}>{error}</li>))}
            </ul>
            <label htmlFor="name">
              Your name
              <input id="name" value={name} type="text" readOnly />
            </label>
            <label htmlFor="reason">
              Reason for visit
              <input type="text" id="reason" name="reason" value={reason} onChange={handleChange} />
            </label>
            <input type="button" value="Finish" onClick={handleSubmit} />
          </form>
        </div>
        <Footer />
      </main>
    );
  }
}

const mapStateToProps = state => ({
  doctor: state.doctor,
  name: state.name,
  role: state.role,
  date: state.appointmentDate,
  time: state.appointmentTime,
  token: state.token,
  loggedIn: state.loggedIn,
});

Confirmation.propTypes = {
  doctor: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Confirmation);
