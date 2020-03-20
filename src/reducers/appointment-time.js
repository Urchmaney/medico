import { APPOINTMENT_TIME } from '../helpers/constants';

const appointmentTime = (state = '', action) => {
  switch (action.type) {
    case APPOINTMENT_TIME:
      return action.time;
    default:
      return state;
  }
};

export default appointmentTime;
