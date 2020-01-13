import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Menu = (props) => {
  const { name, closeClicked } = props;
  return (
    <nav className="menu">
      <div className="menu-profile">
        <span className="closeMenu" onClick={closeClicked} role="button" tabIndex={0} onKeyDown={() => {}}>
          <FontAwesomeIcon icon="times" />
        </span>
        <FontAwesomeIcon className="profile" icon="user" />
        <span>
          {name}
        </span>
      </div>
      <ul>
        <li>
          <Link to="/appointments">My Appointments</Link>
        </li>
        <li>
          <Link to="/">Logout</Link>
        </li>
      </ul>
    </nav>
  );
};

Menu.propTypes = {
  name: PropTypes.string.isRequired,
  closeClicked: PropTypes.func.isRequired,
};

export default Menu;
