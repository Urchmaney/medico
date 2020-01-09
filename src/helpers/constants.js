const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const ADD_TOKEN = 'ADD_TOKEN';
const ROLE = 'ROLE';
const DOCTOR = 'DOCTOR';
const loginUrl = 'http://localhost:3000/api/v1/sessions';
const registerUrl = 'http://localhost:3000/api/v1/users';
const rolesUrl = 'http://localhost:3000/api/v1/roles';
const roleUrl = (id) => `${rolesUrl}/${id}`;

export {
  loginUrl,
  registerUrl,
  LOGIN,
  LOGOUT,
  ADD_TOKEN,
  rolesUrl,
  roleUrl,
  ROLE,
  DOCTOR,
};
