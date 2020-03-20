const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const ADD_TOKEN = 'ADD_TOKEN';
const APPOINTMENT_DATE = 'APPOINTMENT_DATE';
const APPOINTMENT_TIME = 'APPOINTMENT_TIME';
const ROLE = 'ROLE';
const NAME = 'NAME';
const DOCTOR = 'DOCTOR';
const loginUrl = 'http://localhost:3000/api/v1/sessions';
const registerUrl = 'http://localhost:3000/api/v1/users';
const rolesUrl = 'http://localhost:3000/api/v1/roles';
const appointmentsUrl = 'http://localhost:3000/api/v1/appointments';
const roleUrl = id => `${rolesUrl}/${id}`;

export {
  loginUrl,
  registerUrl,
  appointmentsUrl,
  LOGIN,
  LOGOUT,
  ADD_TOKEN,
  APPOINTMENT_DATE,
  APPOINTMENT_TIME,
  rolesUrl,
  roleUrl,
  ROLE,
  DOCTOR,
  NAME,
};
