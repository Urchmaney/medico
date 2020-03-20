import { ROLE } from '../helpers/constants';

const role = (state = {}, action) => {
  switch (action.type) {
    case ROLE:
      return action.role;
    default:
      return state;
  }
};

export default role;
