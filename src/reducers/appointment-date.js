import { APPOINTMENT_DATE } from '../helpers/constants';

const appointmentDate = (state = '', action) => {
  switch (action.type) {
    case APPOINTMENT_DATE:
      return action.date;
    default:
      return state;
  }
};

export default appointmentDate;
