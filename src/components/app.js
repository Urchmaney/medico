import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Login from './login';
import Home from './home';
import Register from './register';
import Dashboard from './dashboard';
import DoctorsList from './doctor-list';
import DoctorProfile from './doctor-profile';
import '../helpers/fontawesome';
import DatePicker from './date-picker';
import Confirmation from './confirmation';
import Appointments from './appointments';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/doctors" component={DoctorsList} />
      <Route path="/profile" component={DoctorProfile} />
      <Route path="/date" component={DatePicker} />
      <Route path="/confirm" component={Confirmation} />
      <Route path="/appointments" component={Appointments} />
    </Switch>
  </Router>
);

export default App;
