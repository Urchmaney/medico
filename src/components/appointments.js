/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Appointment from './presentation/appointment';
import Header from './presentation/header';
import { get } from '../helpers/api';
import { appointmentsUrl } from '../helpers/constants';

class Appointments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: [],
    };
  }

  componentDidMount() {
    const { token } = this.props;
    const getResult = get(appointmentsUrl, token);
    getResult.then((result) => {
      if (!result.error) {
        this.setState((state) => ({
          ...state, appointments: result,
        }));
      }
    });
  }

  render() {
    const { appointments } = this.state;
    const { history, loggedIn } = this.props;
    if (!loggedIn) {
      return (<Redirect to="/login" />);
    }
    return (
      <main>
        <div className="container">
          <Header name="Appointments" iconOnClick={() => history.goBack()} />
          <div className="appoint-list-con">
            {appointments.map((e) => (
              <Appointment key={e.id} date={e.date} name={`${e.doctor.first_name} ${e.doctor.last_name}`} />
            ))}
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.token,
  loggedIn: state.loggedIn,
});

Appointments.propTypes = {
  token: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Appointments);
