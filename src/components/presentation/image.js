import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/style.scss';

const Image = (props) => {
  const { src } = props;
  return (
    <div className="site-image">
      <img src={src} alt="logo" />
      <h3>
      MEDI
        <span>CO</span>
      </h3>
    </div>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Image;
