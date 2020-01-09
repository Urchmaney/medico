import {
  LOGIN,
  LOGOUT,
  ADD_TOKEN,
  ROLE,
  DOCTOR,
} from '../helpers/constants';

const login = () => ({
  type: LOGIN,
});

const logout = () => ({
  type: LOGOUT,
});

const addToken = (token) => ({
  type: ADD_TOKEN,
  token,
});

const changeRole = (role) => ({
  type: ROLE,
  role,
});

const changeDoctor = (doctor) => ({
  type: DOCTOR,
  doctor,
});

export {
  login,
  logout,
  addToken,
  changeRole,
  changeDoctor,
};
