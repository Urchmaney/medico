import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../styles/style.scss';

const Header = (props) => {
  const {
    color,
    name,
    search,
    filter,
    filterOnClick,
    searchOnChange,
    iconOnClick,
    menuIcon,
  } = props;
  const style = {
    height: search ? 100 : 70,
    backgroundColor: color,
  };
  return (
    <header className="header" style={style}>
      <div>
        <span role="button" onClick={iconOnClick} onKeyDown={() => {}} tabIndex="0">
          {!menuIcon && <FontAwesomeIcon icon="chevron-left" />}
          {menuIcon && <FontAwesomeIcon icon="bars" />}
        </span>
        <span>
          {name}
        </span>
      </div>
      {
      search && (
      <div className="search-container">
        <span><FontAwesomeIcon icon="search" /></span>
        <input type="text" onChange={searchOnChange} />
      </div>
      )
      }
      {
        filter && (
        <button type="button" className="filter-btn" onClick={filterOnClick}>
          <FontAwesomeIcon icon="sliders-h" />
        </button>
        )
      }
    </header>
  );
};

Header.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  filterOnClick: PropTypes.func,
  searchOnChange: PropTypes.func,
  filter: PropTypes.bool,
  search: PropTypes.bool,
  iconOnClick: PropTypes.func,
  menuIcon: PropTypes.bool,
};

Header.defaultProps = {
  filterOnClick: () => {},
  searchOnChange: () => {},
  iconOnClick: () => {},
  search: false,
  filter: false,
  color: '#e1fff7',
  menuIcon: false,
};

export default Header;
