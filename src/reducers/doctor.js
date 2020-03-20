import { DOCTOR } from '../helpers/constants';

const role = (state = {}, action) => {
  switch (action.type) {
    case DOCTOR:
      return action.doctor;
    default:
      return state;
  }
};

export default role;
