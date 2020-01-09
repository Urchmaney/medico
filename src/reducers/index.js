import { combineReducers } from 'redux';
import loggedIn from './auth';
import token from './token';
import role from './role';
import doctor from './doctor';

const rootReducer = combineReducers({
  loggedIn, token, role, doctor,
});

export default rootReducer;
