import { NAME } from '../helpers/constants';

const name = (state = '', action) => {
  switch (action.type) {
    case NAME:
      return action.name;
    default:
      return state;
  }
};

export default name;
