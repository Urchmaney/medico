import { LOGIN, LOGOUT } from '../helpers/constants';

const logdedIn = (state = false, action) => {
  switch (action.type) {
    case LOGIN:
      return true;
    case LOGOUT:
      return false;
    default:
      return state;
  }
};

export default logdedIn;
