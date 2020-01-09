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
  } = props;
  const style = {
    height: search ? 100 : 70,
    backgroundColor: color,
  };
  return (
    <header className="header" style={style}>
      <div>
        <span>
          <FontAwesomeIcon icon="chevron-left" />
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
};

Header.defaultProps = {
  filterOnClick: () => {},
  searchOnChange: () => {},
  search: false,
  filter: false,
  color: '#e1fff7',
};

export default Header;
