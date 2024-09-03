import {
  LOGIN,
  LOGOUT,
  ADD_TOKEN,
  ROLE,
  DOCTOR,
  APPOINTMENT_DATE,
  APPOINTMENT_TIME,
  NAME,
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

const changeAppointmentDate = (date) => ({
  type: APPOINTMENT_DATE,
  date,
});

const changeAppointmentTime = (time) => ({
  type: APPOINTMENT_TIME,
  time,
});

const changeName = (name) => ({
  type: NAME,
  name,
});

export {
  login,
  logout,
  addToken,
  changeRole,
  changeDoctor,
  changeAppointmentDate,
  changeAppointmentTime,
  changeName,
};
