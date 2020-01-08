import { combineReducers } from 'redux';
import loggedIn from './auth';
import token from './token';

const rootReducer = combineReducers({
  loggedIn, token,
});

export default rootReducer;
