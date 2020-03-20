import { combineReducers } from 'redux';
import loggedIn from './auth';
import token from './token';
import role from './role';
import doctor from './doctor';
import appointmentDate from './appointment-date';
import appointmentTime from './appointment-time';
import name from './name';

const rootReducer = combineReducers({
  loggedIn, token, role, doctor, appointmentDate, appointmentTime, name,
});

export default rootReducer;
