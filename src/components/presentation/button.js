import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { name, onClick } = props;
  return (
    <button className="button" onClick={onClick} type="button">{name}</button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => {},
};

export default Button;
